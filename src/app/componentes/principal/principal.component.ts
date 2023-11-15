import { Component, OnInit } from '@angular/core';
import { BibliotecaService } from 'src/app/services/biblioteca.service'; // Asegúrate de especificar la ruta correcta

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  bibliotecas: any[] = []; // Asegúrate de inicializar la propiedad

  Nombre: string = '';
  Direccion: string = '';
  Ciudad: string = '';

  constructor(private bibliotecaService: BibliotecaService) { }

  ngOnInit(): void {
    // Llamada a la función que obtiene las bibliotecas al inicializar el componente
    this.obtenerBibliotecas();
  }

  obtenerBibliotecas() {
    this.bibliotecaService.getBlibliotecas().subscribe(
      (bibliotecas) => {
        console.log('Bibliotecas:', bibliotecas);
        this.bibliotecas = bibliotecas; // Asigna las bibliotecas a la propiedad del componente
      },
      (error) => {
        console.error('Error al obtener bibliotecas:', error);
      }
    );
  }

  agregarNuevaBiblioteca() {
    this.bibliotecaService.agregarBiblioteca(this.Nombre, this.Direccion, this.Ciudad).subscribe(
      (response) => {
        console.log('Biblioteca agregada:', response);
        // Puedes realizar acciones adicionales después de agregar la biblioteca
        // Por ejemplo, volver a cargar la lista de bibliotecas
        this.obtenerBibliotecas();
      },
      (error) => {
        console.error('Error al agregar biblioteca:', error);
      }
    );
  }
}
