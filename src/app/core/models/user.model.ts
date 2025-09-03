export interface User {
  id: number;
  nome: string;
  email: string;
  role: 'corretor' | 'cliente' | 'admin';
  token?: string;
}