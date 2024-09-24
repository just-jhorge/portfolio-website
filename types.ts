export interface BlogMetaData {
  title: string;
  date: string;
  description: string;
  tags?: string[];
}

export interface Blog {
  slug: string;
  metadata: BlogMetaData;
  content: string | Promise<string>;
}
