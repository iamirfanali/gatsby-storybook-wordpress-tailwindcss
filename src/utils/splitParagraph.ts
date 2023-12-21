export function splitParagraph(
  paragraph: string,
  maxCharsPerLine = 100,
  maxLines = 5
): [string, string] {
  const splitPoint = Math.min(paragraph.length, maxCharsPerLine * maxLines)
  const breakPoint = paragraph.lastIndexOf(" ", splitPoint) + 1 || splitPoint

  // Simple HTML tag matching - this regex assumes tags do not nest
  const tagRegex = /<[^>]+>/g
  let match: RegExpExecArray | null
  let lastTag = ""

  // Find the last HTML tag before the breakpoint
  while ((match = tagRegex.exec(paragraph)) !== null) {
    if (match.index < breakPoint) {
      lastTag = match[0]
    } else {
      break
    }
  }

  // If a tag was found and it's not a self-closing tag
  if (lastTag && !lastTag.endsWith("/>")) {
    const tagName = lastTag.match(/<(\w+)/)?.[1]
    if (tagName) {
      // Close the tag in the first part
      const firstPart = paragraph.slice(0, breakPoint).trim() + `</${tagName}>`
      // Reopen the tag in the second part
      const secondPart = `<${tagName}>` + paragraph.slice(breakPoint).trim()
      return [firstPart, secondPart]
    }
  }

  return [
    paragraph.slice(0, breakPoint).trim(),
    paragraph.slice(breakPoint).trim(),
  ]
}
