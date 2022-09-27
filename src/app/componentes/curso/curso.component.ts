import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/models/alumnos';
import { Cursos } from 'src/models/cursos';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

  listaAlumnos: Alumno[];
  listaCursos: Cursos[];

  constructor() {}

  ngOnInit(): void {
    this.obtenerAlumnos();
    this.obtenerCursos();
  }

  obtenerAlumnos(){
    this.listaAlumnos = [
      {
        codigoAlumno: 2014214451,
        nombres: 'Antony',
        apellidos: 'Alza Perez',
        ciclo: 10,
        estado: 'APROBADO'
      },
      {
        codigoAlumno: 2019784452,
        nombres: 'Carlos',
        apellidos: 'Estrada Ramirez',
        ciclo: 7,
        estado: 'APROBADO'
      },
      {
        codigoAlumno: 2020784254,
        nombres: 'Luis',
        apellidos: 'Garcia Ayala',
        ciclo: 9,
        estado: 'APROBADO'
      },
      {
        codigoAlumno: 2021784234,
        nombres: 'Alan',
        apellidos: 'Garcia Perez',
        ciclo: 10,
        estado: 'DESAPROBADO'
      },
    ];
  }

  obtenerCursos(){
    this.listaCursos = [
      {
        codigoCurso: 11000,
        descripcion: 'Matemática 1',
        numeroCreditos: 2
      },
      {
        codigoCurso: 11010,
        descripcion: 'Matemática 2',
        numeroCreditos: 3
      },
      {
        codigoCurso: 21030,
        descripcion: 'Física 1',
        numeroCreditos: 2
      },
      {
        codigoCurso: 93192,
        descripcion: 'Física 1',
        numeroCreditos: 3
      }
    ]
  }
}
