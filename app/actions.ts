'use server';

import fs from 'fs';
import path from 'path';

const contentPath = path.join(process.cwd(), 'data', 'content.json');

export async function updateContent(id: string, text: string) {
  let content: Record<string, string> = {};
  if (fs.existsSync(contentPath)) {
    const file = fs.readFileSync(contentPath, 'utf8');
    try {
      content = JSON.parse(file);
    } catch (e) {
      console.error('Error parsing content.json', e);
    }
  } else {
    // Ensure data directory exists
    const dir = path.dirname(contentPath);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  }
  
  content[id] = text;
  fs.writeFileSync(contentPath, JSON.stringify(content, null, 2), 'utf8');
  return { success: true };
}

export async function getContent() {
  if (fs.existsSync(contentPath)) {
    const file = fs.readFileSync(contentPath, 'utf8');
    try {
      return JSON.parse(file);
    } catch (e) {
      console.error('Error parsing content.json', e);
      return {};
    }
  }
  return {};
}
