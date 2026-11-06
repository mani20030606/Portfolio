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
  linkedin: 'https://linkedin.com/in/mani-saideep-chintha',
  kaggle: 'https://kaggle.com/manisaideepchintha',
  email: 'manisaideep03@gmail.com',
  resume: '/assets/resume.pdf',
  instagram: '',
  youtube: '',
};
