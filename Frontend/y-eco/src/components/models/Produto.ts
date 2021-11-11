import Categoria from "./Categoria";

interface Produto{
    id: number;
    nome: string;
    quantidade: number;
    valor: number;
    descricao: string;
    categoria?: Categoria | null;
}

export default Produto;