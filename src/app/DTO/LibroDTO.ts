import { BibliotecaDTO } from "./BibliotecaDTO";
export interface LibroDTO{
  id:number;
  nombre:string;
  autor:string;
  biblioteca:BibliotecaDTO;
}
