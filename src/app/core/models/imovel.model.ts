export interface Imovel {
  id: number;
  titulo: string;
  descricao: string;
  endereco: string;
  valor: number;
  corretorId: number;
  imagens?: string[];
}