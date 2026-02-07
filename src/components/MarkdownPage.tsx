import { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface MarkdownPageProps {
  content: string;
}

export function MarkdownPage({ content }: MarkdownPageProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <article className="mx-auto max-w-3xl px-6 pt-28 pb-20">
      <div className="markdown-content">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
      </div>
    </article>
  );
}
