import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, map, timeout } from 'rxjs';
import { Pais } from './clases';

@Injectable({
  providedIn: 'root'
})
export class RegionService {

  private _urlWebService:string="https://restcountries.com/v3.1/region/"
  /*Inyectamos a HttpClient en nuestro servicio*/
  constructor(private http:HttpClient) { }

  getRegion(region: string):Observable<Pais[]>{

    return this.http
      .get<any[]>(this._urlWebService + region)
      .pipe(timeout(60000),
        map(paises=>paises.map(json=>
          new Pais(
            json.name.common,
            json.flags.png,
            json.cca2,
            json.capital,
            json.population
          ))));
  }
}
