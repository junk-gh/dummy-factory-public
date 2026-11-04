export function slugify(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function capitalize(text) {
  if (text.length === 0) return text;
  return text[0].toUpperCase() + text.slice(1);
}

export function truncate(text, max) {
  if (text.length <= max) return text;
  if (max <= 0) return "";
  return text.slice(0, max - 1) + "…";
}
