import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  nomProyecto: string;
  tipoProyecto: string;
  modalidad: string;
  fCreacion: string;
  fInicial: string;
  fFinal: string;
  estado: string;
  objGenenrar: string;
  objEspecifico: string;
  nomAsesor: string;
  nomRespomsable: string;
  nomParticipante: string;
  rol: string;
  dependencia: string;
  }

const proyectoss: PeriodicElement[] = [
  {nomProyecto: 'Algoritmos evolutivos', tipoProyecto:'Desarrollo algorimia', modalidad:'Virtual', fCreacion: '01/06/2018',fInicial:'05/06/2018', fFinal:'26/11/2018', estado:'Activo', objGenenrar:'Proyecto integrador', objEspecifico:'Desarrollo', nomAsesor:'Sebastian Mosalve S', nomRespomsable:'Gurupo 2', nomParticipante: 'Cañas', rol:'Desarrollador', dependencia:'Estudiante'},
  {nomProyecto: 'Análisis de datos', tipoProyecto:'Analisis', modalidad:'Virtual', fCreacion: '01/06/2018',fInicial:'05/06/2018', fFinal:'26/11/2018', estado:'Activo', objGenenrar:'Proyecto integrador', objEspecifico:'Desarrollo', nomAsesor:'Sebastian Mosalve S', nomRespomsable:'Gurupo 2', nomParticipante: 'Arango', rol:'Desarrollador', dependencia:'Estudiante'},
  {nomProyecto: 'Biología computacional', tipoProyecto:'Arquitectura Procesadores', modalidad:'Virtual', fCreacion: '01/06/2018',fInicial:'05/06/2018', fFinal:'26/11/2018', estado:'Activo', objGenenrar:'Proyecto integrador', objEspecifico:'Desarrollo', nomAsesor:'Sebastian Mosalve S', nomRespomsable:'Gurupo 2', nomParticipante: 'Arboleda', rol:'Desarrollador', dependencia:'Estudiante'},
  {nomProyecto: 'Clasificación automática', tipoProyecto:'Desarrollo y bases de daro', modalidad:'Virtual', fCreacion: '01/06/2018',fInicial:'05/06/2018', fFinal:'26/11/2018', estado:'Activo', objGenenrar:'Proyecto integrador', objEspecifico:'Desarrollo', nomAsesor:'Sebastian Mosalve S', nomRespomsable:'Gurupo 2', nomParticipante: 'Sepulveda', rol:'Desarrollador', dependencia:'Estudiante'},
  {nomProyecto: 'MDSD (Model-driven Software Development)', tipoProyecto:'Desarrllo de Api', modalidad:'Virtual', fCreacion: '01/06/2018',fInicial:'05/06/2018', fFinal:'26/11/2018', estado:'Activo', objGenenrar:'Proyecto integrador', objEspecifico:'Desarrollo', nomAsesor:'Sebastian Mosalve S', nomRespomsable:'Gurupo 2', nomParticipante: 'Cañas', rol:'Desarrollador', dependencia:'Estudiante'},
  {nomProyecto: 'Planificación en I. A.', tipoProyecto:'casa', modalidad:'I. A.', fCreacion: '01/06/2018',fInicial:'05/06/2018', fFinal:'26/11/2018', estado:'Activo', objGenenrar:'Proyecto integrador', objEspecifico:'Desarrollo', nomAsesor:'Sebastian Mosalve S', nomRespomsable:'Gurupo 2', nomParticipante: 'Qunto', rol:'Desarrollador', dependencia:'Estudiante'},
];

@Component({
  selector: 'app-administrar',
  templateUrl: './administrar.component.html',
  styleUrls: ['./administrar.component.css']
})
export class AdministrarComponent implements OnInit {

  constructor() { }

  displayedColumns: string[] = ['nomProyecto','tipoProyecto','modalidad','fCreacion','fInicial','fInicial','estado','objGenenrar','objEspecifico','nomAsesor','nomRespomsable','nomParticipante','rol','dependencia'];
  dataSource = proyectoss;

  ngOnInit() {
  }

}
