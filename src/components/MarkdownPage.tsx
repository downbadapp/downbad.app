import { useEffect, useMemo } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { obfuscateEmails } from '../utils/obfuscateEmails';
import { ObfuscatedLink } from './ObfuscatedLink';

interface MarkdownPageProps {
  content: string;
}

export function MarkdownPage({ content }: MarkdownPageProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const processedContent = useMemo(() => obfuscateEmails(content), [content]);

  return (
    <article className="mx-auto max-w-3xl px-6 pt-28 pb-20">
      <div className="markdown-content">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{ a: ObfuscatedLink }}
        >
          {processedContent}
        </ReactMarkdown>
      </div>
    </article>
  );
}
