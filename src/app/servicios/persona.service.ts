import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';
import { ExperienciaLaboral } from '../clases/experiencia-laboral';
import { map } from 'rxjs';
import { Educacion } from '../clases/educacion';




@Injectable({
  providedIn: 'root'
})
export class PersonaService {

private urlApi= "https://portfolio-ceci-amura.herokuapp.com/api/persona";
private api= "https://portfolio-ceci-amura.herokuapp.com/api/"

constructor(private http:HttpClient, private login:LoginService) { }

getPersona(id:number): Observable<any>{
  console.log('get persona')
  return this.http.get(this.api+"persona/"+id)
  //return this.http.get(this.urlApi+"/"+id)
}
verPersonas(){

 return this.http.get(this.api+"persona/ver", {responseType: 'text'});
 //return this.http.get(this.urlApi+"/ver")
}
actualizarPersona(id:number, persona:any):Observable<any>{
  console.log('actualizar persona')
  return this.http.put(this.api+"persona/editar/"+id, persona);
  //return this.http.put(this.urlApi+"/editar"+id, persona);
}


/*----------------------servicio experiencia laboral*--------------------------------------------**/
verExperiencia():Observable<any>{
  console.log('ver expe lab')
  return this.http.get(this.api+"experiencia/ver")
}
eliminarExperiencia(id:number):Observable<any>{
  console.log('eliminar expe lab')
  return this.http.delete(this.api+"experiencia/delete/"+id)
}
actualizarExperiencia(experiencia:any):Observable<any>{
  console.log('actualizar expe lab')
  return this.http.put(this.api+"experiencia/edit", experiencia)
}
guardarExperiencia(persona:any):Observable<any>{
  console.log('guardar expe lab')
  return this.http.post(this.api+"experiencia/new", persona)
}


  /*--------servicio tipo experiencia* servicio tipo educacion- *tipoTecnologias-------------------------------------------**/
 getTipo(): Observable<ExperienciaLaboral[]> {
  console.log('get tipo')
  return this.http.get(this.api +"tipoTrabajo/ver").pipe(
    map(tipos => tipos as ExperienciaLaboral[])
  );
} 
getTipoEducacion(): Observable<Educacion[]> {
  console.log('get tipoedu')
  return this.http.get(this.api+"tipoEdu/ver").pipe(
    map(tiposEdu => tiposEdu as Educacion[])
  );
} 

tipoTecnologia():Observable<any>{
  console.log('get tipo tecno')
  return this.http.get(this.api+"tecnologia/ver")
}


/*----------------------servicio educacion-------------------------------------------------------**/
verEducacion():Observable<any>{
  console.log('get educacion')
  return this.http.get(this.api+"educacion/ver")
}
verTipoEducacion():Observable<any>{
  console.log('get vertipoedu')
  return this.http.get(this.api+"nombreTipoEducacion/ver")
}
eliminarEducacion(id:number):Observable<any>{
  console.log('get eliminaredu')
  return this.http.delete(this.api+"educacion/delete/"+id)
}

guardarEducacion(persona:any):Observable<any>{
  console.log('get guardaredu')
  return this.http.post(this.api+"educacion/new", persona)
}

actualizarEducacion(id:number, persona:any):Observable<any>{
  console.log('get actualizaredu')
  return this.http.put(this.api+"educacion/editar/"+id, persona)
}

/**************************PROYECTO SERVICE***************************************************** */
verProyecto():Observable<any>{
  console.log('get proyectos')
  return this.http.get(this.api+"proyecto/ver")
}

eliminarProyecto(id:number):Observable<any>{
  console.log('eliminarproyecgto')
  return this.http.delete(this.api+"proyecto/delete/"+id)
}

guardarProyecto(proyecto:any):Observable<any>{
  console.log('guardar proyecto')
  return this.http.post(this.api+"proyecto/new", proyecto)
}

actualizarProyecto(proyecto:any):Observable<any>{
  console.log('actualizar proyecto')
  return this.http.put(this.api+"proyecto/edit", proyecto)
} 

/**************SOFTSKILLS SERVICE******************************** */

verSoftSkills():Observable<any>{
  console.log('verr softskill')
  return this.http.get(this.api+"soft/ver")
}

eliminarSoftSkills(id:number):Observable<any>{
  console.log('eliminar soft')
  return this.http.delete(this.api+"soft/delete/"+id)
}

guardarSoftSkills(softSkills:any):Observable<any>{
  console.log('guardar soft')
  return this.http.post(this.api+"soft/new", softSkills)
}

actualizarSoftSkills(softSkills:any):Observable<any>{
  console.log('actualizar soft')
  return this.http.put(this.api+"soft/edit", softSkills)
} 
/**************HardSKILLS SERVICE******************************** */

verHardSkills():Observable<any>{
  console.log('ver hard')
  return this.http.get(this.api+"hard/ver")
}

eliminarHardSkills(id:number):Observable<any>{
  console.log('eliminar hard')
  return this.http.delete(this.api+"hard/delete/"+id)
}

guardarHardSkills(hardSkills:any):Observable<any>{
  console.log('guardar hard')
  return this.http.post(this.api+"hard/new", hardSkills)
}

actualizarHardSkills(hardSkills:any):Observable<any>{
  console.log('actualizar hard')
  return this.http.put(this.api+"hard/edit", hardSkills)
} 



}


