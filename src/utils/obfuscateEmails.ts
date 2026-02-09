const EMAIL_REGEX = /([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g;

function encodeEmail(email: string): string {
  return Array.from(email)
    .map((char) => char.charCodeAt(0))
    .join(',');
}

export function decodeEmail(encoded: string): string {
  return encoded
    .split(',')
    .map((code) => String.fromCharCode(parseInt(code, 10)))
    .join('');
}

export function obfuscateEmails(markdown: string): string {
  return markdown.replace(EMAIL_REGEX, (email) => {
    const encoded = encodeEmail(email);
    return `[here](mailto-ob:${encoded})`;
  });
}
