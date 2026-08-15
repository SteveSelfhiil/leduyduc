// Plain-text excerpt from raw markdown source, for post cards on listing
// and homepage sections (ported 1:1 from the old build.js).
export function excerptFrom(content: string, len = 180): string {
  const text = content
    .replace(/!\[[^\]]*\]\([^)]*\)/g, '') // images
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1') // links -> text
    .replace(/[#*_`>]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
  return text.length > len ? text.slice(0, len).trim().replace(/[,.;:]?$/, '') + '…' : text;
}

// Sort helper: explicit `order` wins (ascending, lower = earlier/featured);
// entries with no `order` sort after all that have one.
export function byOrder<T extends { data: { order?: number } }>(a: T, b: T): number {
  return (a.data.order ?? 999) - (b.data.order ?? 999);
}
