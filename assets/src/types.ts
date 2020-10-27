export type User = {
  id: number;
  email: string;
  created_at: string;
};

export type Player = {
  id: string,
  name: string,
  score: number,
  percentage?: string,
}

export type Board = {
  id: string;
  name: string;
  code: string;
  type: string;
  updated_at: number;
  created_at: number;
  max_score?: number;
  items: any[],
};
