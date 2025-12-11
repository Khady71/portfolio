
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  coverImageUrl?: string;
  tags?: string[];
  authorId?: string;
  createdAt?: string;
  updatedAt?: string;
}
