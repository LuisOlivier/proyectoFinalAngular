import { Component } from '@angular/core';
import { Pais } from '../services/clases';
import { NameService } from '../services/name.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mas-info',
  templateUrl: './mas-info.component.html',
  styleUrls: ['./mas-info.component.css']
})
export class MasInfoComponent {
  paises:Pais[]=[];
  itemSeleccionado:string=""
  isSuccess:boolean=false;

  constructor(private router: Router, private route: ActivatedRoute, private serviceName:NameService){

    this.itemSeleccionado = this.route.snapshot.paramMap.get("name")??"";

    this.serviceName.getPaises(this.itemSeleccionado).subscribe({
      next: value=>{
        this.paises=value;
        this.setIsSuccess(true)
      },
      error: err=>{
        console.log("Algo paso: " + err);
        this.setIsSuccess(false)
      }
    })
  }

  setIsSuccess(value:boolean){
    this.isSuccess=value
  }

}
