export class Pmodelos {

  constructor(_id = '', nomProyecto = '', tipoProyecto = '', modalidad = '', fFInal = '', estado = '', fCreacion = '', objGeneral = '', nomAsesor = '', nomResponsable = '', nomParticipante = '', rol = '', objEspecifico = '', dependencia = '') {
    this._id = _id;
    this.nomProyecto = nomProyecto;
    this.tipoProyecto = tipoProyecto;
    this.modalidad = modalidad;
    this.fCreacion = fCreacion;
    this.fFInal = fFInal;
    this.estado = estado;
    this.objGeneral = objGeneral;
    this.objEspecifico = objEspecifico;
    this.nomAsesor = nomAsesor;
    this.nomResponsable = nomResponsable;
    this.nomParticipante = nomParticipante;
    this.rol = rol;
    this.dependencia = dependencia;
  }

  _id: any;
  nomProyecto: String;
  tipoProyecto: String;
  modalidad: String;
  fCreacion: String;
  fInicial: String;
  fFInal: String;
  estado: String;
  objGeneral: String;
  objEspecifico: String;
  nomAsesor: String;
  nomResponsable: String;
  nomParticipante: String;
  rol: String;
  dependencia: String;
}
