import fs from 'fs';
import path from 'path';

export interface ParseMDXResult<T> {
  frontmatter: T;
  content: string;
}

export function parseMDX<T>(filePath: string): ParseMDXResult<T> {
  const rawContent = fs.readFileSync(filePath, 'utf-8');
  const match = rawContent.match(/^---\r?\n([\s\S]+?)\r?\n---\r?\n([\s\S]*)$/);
  
  if (!match) {
    return { frontmatter: {} as T, content: rawContent };
  }
  
  const [, yamlStr, content] = match;
  const frontmatter: any = {};
  
  yamlStr.split('\n').forEach(line => {
    const trimmedLine = line.trim();
    if (!trimmedLine || trimmedLine.startsWith('#')) return;
    
    const colonIndex = trimmedLine.indexOf(':');
    if (colonIndex > 0) {
      const key = trimmedLine.substring(0, colonIndex).trim();
      let value = trimmedLine.substring(colonIndex + 1).trim();
      
      // clean up outer quotes
      if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
        value = value.substring(1, value.length - 1);
      }
      
      // Handle array values (e.g. stack: ["React", "Node"])
      if (value.startsWith('[') && value.endsWith(']')) {
        try {
          // Parse array elements
          const inner = value.substring(1, value.length - 1);
          frontmatter[key] = inner.split(',').map(item => {
            const trimmedItem = item.trim();
            if ((trimmedItem.startsWith('"') && trimmedItem.endsWith('"')) || (trimmedItem.startsWith("'") && trimmedItem.endsWith("'"))) {
              return trimmedItem.substring(1, trimmedItem.length - 1);
            }
            return trimmedItem;
          }).filter(Boolean);
        } catch {
          frontmatter[key] = [];
        }
      } else {
        frontmatter[key] = value;
      }
    }
  });
  
  return { frontmatter: frontmatter as T, content };
}

// Utility to read all MDX files in a directory
export function getMDXFiles<T>(directory: string): (T & { slug: string })[] {
  if (!fs.existsSync(directory)) {
    return [];
  }
  
  const files = fs.readdirSync(directory);
  return files
    .filter(file => file.endsWith('.mdx'))
    .map(file => {
      const filePath = path.join(directory, file);
      const slug = file.replace(/\.mdx$/, '');
      const { frontmatter } = parseMDX<T>(filePath);
      return { ...frontmatter, slug };
    });
}
