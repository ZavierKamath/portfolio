import { remark } from 'remark';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypeHighlight from 'rehype-highlight';
import rehypeStringify from 'rehype-stringify';

// Cache for processed markdown to avoid re-processing
const markdownCache = new Map<string, string>();

/**
 * Process markdown content with syntax highlighting and GFM support
 * @param content - Raw markdown string
 * @returns Promise<string> - Processed HTML string
 */
export async function processMarkdown(content: string): Promise<string> {
  // Return early if content is empty
  if (!content || content.trim() === '') {
    return '';
  }

  // Check cache first
  if (markdownCache.has(content)) {
    return markdownCache.get(content)!;
  }

  try {
    const result = await remark()
      .use(remarkGfm) // GitHub Flavored Markdown support
      .use(remarkRehype) // Convert markdown to HTML tree
      .use(rehypeHighlight) // Syntax highlighting for code blocks
      .use(rehypeStringify) // Convert HTML tree to string
      .process(content);

    const html = result.toString();
    
    // Cache the result
    markdownCache.set(content, html);
    
    return html;
  } catch (error) {
    console.error('Error processing markdown:', error);
    // Fallback to original content with basic HTML escaping
    return escapeHtml(content);
  }
}

/**
 * Basic HTML escaping for fallback scenarios
 */
function escapeHtml(text: string): string {
  const map: { [key: string]: string } = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  };
  
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

/**
 * Clear the markdown cache (useful for development)
 */
export function clearMarkdownCache(): void {
  markdownCache.clear();
}

/**
 * Check if content appears to contain markdown
 * @param content - String to check
 * @returns boolean - True if content likely contains markdown
 */
export function isMarkdownContent(content: string): boolean {
  const markdownPatterns = [
    /\*\*.*?\*\*/, // Bold
    /\*.*?\*/, // Italic
    /`.*?`/, // Inline code
    /```[\s\S]*?```/, // Code blocks
    /^#{1,6}\s/, // Headers
    /^\*\s/, // Unordered list
    /^\d+\.\s/, // Ordered list
    /\[.*?\]\(.*?\)/, // Links
    /^\>\s/, // Blockquotes
  ];
  
  return markdownPatterns.some(pattern => pattern.test(content));
}

/**
 * Simplified markdown processor for inline content (no block elements)
 * @param content - Raw markdown string
 * @returns Promise<string> - Processed HTML string
 */
export async function processInlineMarkdown(content: string): Promise<string> {
  if (!content || content.trim() === '') {
    return '';
  }

  // Check cache first
  const cacheKey = `inline:${content}`;
  if (markdownCache.has(cacheKey)) {
    return markdownCache.get(cacheKey)!;
  }

  try {
    const result = await remark()
      .use(remarkGfm)
      .use(remarkRehype)
      .use(rehypeStringify)
      .process(content);

    let html = result.toString();
    
    // Remove paragraph tags for inline content
    html = html.replace(/^<p>/, '').replace(/<\/p>$/, '');
    
    // Cache the result
    markdownCache.set(cacheKey, html);
    
    return html;
  } catch (error) {
    console.error('Error processing inline markdown:', error);
    return escapeHtml(content);
  }
}