/**
 * Single source of truth for all external links, resume, and contact URLs.
 * Rule 7: Empty value means do not render.
 */
export interface LinksConfig {
  github: string;
  linkedin: string;
  kaggle: string;
  email: string;
  resume: string;
  instagram: string;
  youtube: string;
}

export const links: LinksConfig = {
  github: 'https://github.com/mani20030606',
  linkedin: 'https://www.linkedin.com/in/mani-saideep-chintha-95bb07298/',
  kaggle: 'https://kaggle.com/manisaideepchintha',
  email: 'manisaideep03@gmail.com',
  resume: '/assets/Manisaideep_chintha.pdf',
  instagram: '',
  youtube: '',
};
