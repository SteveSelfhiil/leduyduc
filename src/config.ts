// Single source of truth for site identity and section metadata — the
// equivalent of the old build.js SITE + SECTIONS constants. Add a new
// section here (and a matching folder under src/content/) and it shows up
// in the nav, the homepage, and gets its own listing + post pages for free.

export const SITE = {
  name: 'Le Duy Duc',
  tagline: 'Notes on technology, business, and life flow.',
  linkedin: 'https://www.linkedin.com/in/steve-le/',
};

export type SectionKey = 'essays' | 'poems' | 'photos';

export const SECTIONS: { key: SectionKey; label: string; intro: string }[] = [
  {
    key: 'essays',
    label: 'Essays',
    intro: 'Field notes on technology, business, and building things.',
  },
  {
    key: 'poems',
    label: 'Poems',
    intro: 'A quieter shelf — verses in the language of the heart, crafted with a stroke of love.',
  },
  {
    key: 'photos',
    label: 'Photos',
    intro: 'A few favorite frames — places, light, and moments worth cherishing.',
  },
];

// Homepage curation: at most this many sections, each showing at most this
// many (latest, i.e. lowest `order`) posts.
export const MAX_HOME_SECTIONS = 3;
export const HOME_POSTS_PER_SECTION = 1;
