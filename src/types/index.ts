export interface ParsedBlock {
  id: string;
  title: string;
  link: string;
  extractCode: string;
  rawContent: string;
}

export interface ParseResult {
  blocks: ParsedBlock[];
  totalBlocks: number;
}