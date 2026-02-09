import type { AnchorHTMLAttributes } from 'react';
import { decodeEmail } from '../utils/obfuscateEmails';

const MAILTO_OB_PREFIX = 'mailto-ob:';

export function ObfuscatedLink(
  props: AnchorHTMLAttributes<HTMLAnchorElement>
) {
  const { href, children, ...rest } = props;

  if (!href || !href.startsWith(MAILTO_OB_PREFIX)) {
    return <a href={href} {...rest}>{children}</a>;
  }

  const email = decodeEmail(href.slice(MAILTO_OB_PREFIX.length));

  return (
    <a href={`mailto:${email}`} {...rest}>
      {email}
    </a>
  );
}
