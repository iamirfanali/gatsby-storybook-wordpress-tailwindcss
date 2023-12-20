export function splitParagraph(
  paragraph: string,
  maxCharsPerLine = 100,
  maxLines = 5
): [string, string] {
  const splitPoint = Math.min(paragraph.length, maxCharsPerLine * maxLines)
  const breakPoint = paragraph.lastIndexOf(" ", splitPoint) + 1 || splitPoint
  return [
    paragraph.slice(0, breakPoint).trim(),
    paragraph.slice(breakPoint).trim(),
  ]
}
