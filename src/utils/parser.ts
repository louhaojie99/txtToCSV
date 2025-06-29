import { ParsedBlock, ParseResult } from '../types';

export function parseTextContent(content: string): ParseResult {
  // Split content by double newlines to separate blocks
  const rawBlocks = content.split(/\n\s*\n/).filter(block => block.trim());
  
  const blocks: ParsedBlock[] = [];
  
  rawBlocks.forEach((block, index) => {
    const lines = block.trim().split('\n');
    
    // Look for the pattern: 【超级会员V2】通过百度网盘分享的文件：XXXXXX
    const titleMatch = lines.find(line => line.includes('【超级会员V2】通过百度网盘分享的文件：'));
    const linkMatch = lines.find(line => line.includes('链接：') || line.includes('https://pan.baidu.com'));
    const codeMatch = lines.find(line => line.includes('提取码：'));
    
    if (titleMatch || linkMatch || codeMatch) {
      const fileId = titleMatch ? titleMatch.split('：')[1]?.trim() || `Block_${index + 1}` : `Block_${index + 1}`;
      const link = linkMatch ? linkMatch.replace('链接：', '').trim() : '';
      const extractCode = codeMatch ? codeMatch.replace('提取码：', '').trim() : '';
      
      blocks.push({
        id: `block_${index}`,
        title: fileId,
        link,
        extractCode,
        rawContent: block.trim()
      });
    }
  });
  
  return {
    blocks,
    totalBlocks: blocks.length
  };
}

export function generateCSV(blocks: ParsedBlock[]): string {
  // Create CSV with each block's raw content in a single cell, arranged vertically
  const csvContent = blocks.map(block => `"${block.rawContent.replace(/"/g, '""')}"`).join('\n');
  return csvContent;
}

export function downloadCSV(csvContent: string, filename: string = 'parsed_data.csv'): void {
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  
  if (link.download !== undefined) {
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', filename);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}