export function tokenizeText(text) {
  if (!text) return [];

  return text
    .trim()
    .split(/\s+/)
    .map(word => word.replace(/^[^\p{L}]+|[^\p{L}]+$/gu, ''))
    .filter(Boolean);
}
