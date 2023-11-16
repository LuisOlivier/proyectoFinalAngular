import { Component } from '@angular/core';
import { Pais } from '../services/clases'
import { AllService } from '../services/all.service';
import { NameService } from '../services/name.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent {
  paises:Pais[]=[];
  buscarStr:string="";
  isSuccess:boolean=false;

  constructor(private serviceAll:AllService, private serviceName:NameService , private router: Router, private route: ActivatedRoute){

    this.serviceAll.getPaises().subscribe({
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

  onChangeBuscarValue(value: string){
    this.buscarStr=value
  }

  buscar():void {
    this.serviceName.getPaises(this.buscarStr).subscribe({
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

  irAMasInfo(name:string){
    this.router.navigate(["/mas-info", name])
  }

}
