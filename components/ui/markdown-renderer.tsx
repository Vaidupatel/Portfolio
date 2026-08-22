import React from "react";

interface MarkdownRendererProps {
  content: string;
}

export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  // Parse paragraphs and block elements
  const blocks = content.split(/\n\n+/);

  return (
    <div className="prose flex flex-col gap-6 text-[17px] text-ink-600 leading-relaxed font-body">
      {blocks.map((block, idx) => {
        const trimmed = block.trim();
        if (!trimmed) return null;

        // H2 Heading (## )
        if (trimmed.startsWith("## ")) {
          const text = trimmed.replace(/^##\s+/, "");
          return (
            <h2
              key={idx}
              className="font-display text-2xl md:text-h2 font-bold text-ink-900 mt-6 mb-2 tracking-tight"
            >
              {text}
            </h2>
          );
        }

        // H3 Heading (### )
        if (trimmed.startsWith("### ")) {
          const text = trimmed.replace(/^###\s+/, "");
          return (
            <h3
              key={idx}
              className="font-display text-xl font-bold text-ink-900 mt-4 mb-1"
            >
              {text}
            </h3>
          );
        }

        // Blockquote (> )
        if (trimmed.startsWith("> ")) {
          const quote = trimmed.replace(/^>\s+/, "");
          return (
            <blockquote
              key={idx}
              className="border-l-4 border-accent pl-6 py-3 my-4 bg-accent-soft/30 rounded-r-card text-ink-900 font-display text-lg md:text-xl italic leading-snug"
            >
              &ldquo;{quote}&rdquo;
            </blockquote>
          );
        }

        // Unordered List (- or *)
        if (trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
          const items = trimmed.split(/\n[-*]\s+/).filter(Boolean);
          return (
            <ul key={idx} className="flex flex-col gap-2.5 my-2 pl-4 list-disc marker:text-accent">
              {items.map((item, i) => (
                <li key={i} className="pl-1 text-[16px] text-ink-600 leading-relaxed">
                  {renderInlineText(item.trim())}
                </li>
              ))}
            </ul>
          );
        }

        // Standard Paragraph
        return (
          <p key={idx} className="text-[17px] text-ink-600 leading-[1.65]">
            {renderInlineText(trimmed)}
          </p>
        );
      })}
    </div>
  );
}

function renderInlineText(text: string): React.ReactNode {
  // Split on bold (**text**), inline code (`code`), or links ([text](url))
  const parts = text.split(/(\*\*[^*]+\*\*|`[^`]+`|\[[^\]]+\]\([^)]+\))/g);

  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-bold text-ink-900">
          {part.slice(2, -2)}
        </strong>
      );
    }

    if (part.startsWith("`") && part.endsWith("`")) {
      return (
        <code
          key={i}
          className="font-mono text-[13px] bg-accent-soft px-1.5 py-0.5 rounded text-ink-900"
        >
          {part.slice(1, -1)}
        </code>
      );
    }

    const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (linkMatch) {
      return (
        <a
          key={i}
          href={linkMatch[2]}
          className="text-accent underline underline-offset-4 hover:text-accent-deep transition-colors"
        >
          {linkMatch[1]}
        </a>
      );
    }

    return part;
  });
}
