import * as THREE from 'three';

export const particleVertexShader = `
  uniform float uTime;
  uniform float uPixelRatio;
  uniform float uSize;
  
  attribute float aProgress;
  attribute float aScale;
  attribute float aRandom;
  attribute vec3 aVelocity;

  varying vec3 vColor;
  varying float vAlpha;
  varying float vProgress;

  // Monochrome Titanium Starlight Palette: Deep Titanium Grey, Silver, Diamond Core
  const vec3 colorLeft   = vec3(0.55, 0.55, 0.60);  // titanium silver
  const vec3 colorRight  = vec3(0.80, 0.80, 0.85);  // luminous starlight
  const vec3 colorCenter = vec3(1.00, 1.00, 1.00);  // brilliant diamond-white core

  void main() {
    vProgress = aProgress;

    // Dual gradient blend: Left loop = titanium silver, Right loop = luminous starlight
    float blend = smoothstep(0.0, 1.0, aProgress);
    vec3 baseColor = mix(colorLeft, colorRight, blend);

    // Crossing point glows sharp diamond-white
    float centerDist = min(abs(aProgress - 0.5), min(aProgress, 1.0 - aProgress));
    float centerGlow = 1.0 - smoothstep(0.0, 0.14, centerDist);
    vColor = mix(baseColor, colorCenter, centerGlow * 0.55);

    // Subtle rhythmic pulse along orbital velocity
    vec3 pos = position;
    float pulse = sin(uTime * 1.5 + aRandom * 6.28) * 0.05;
    pos += aVelocity * pulse;

    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
    gl_Position = projectionMatrix * mvPosition;

    // Attenuated point size with pixel ratio cap
    gl_PointSize = (uSize * aScale * uPixelRatio) * (20.0 / -mvPosition.z);
    
    // Depth fade — clear, sparkling starlight alpha
    vAlpha = smoothstep(-50.0, -2.0, mvPosition.z) * (0.32 + aRandom * 0.45);
  }
`;

export const particleFragmentShader = `
  varying vec3 vColor;
  varying float vAlpha;

  void main() {
    // Soft anti-aliased circular particle sprite
    vec2 coord = gl_PointCoord - vec2(0.5);
    float dist = length(coord);

    if (dist > 0.5) {
      discard;
    }

    // Soft gaussian falloff for radiant particle glow
    float strength = 1.0 - smoothstep(0.0, 0.5, dist);
    strength = pow(strength, 2.2);

    gl_FragColor = vec4(vColor, vAlpha * strength);
  }
`;

