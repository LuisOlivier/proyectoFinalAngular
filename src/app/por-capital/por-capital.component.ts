import { Component } from '@angular/core';
import { Pais } from '../services/clases'
import { AllService } from '../services/all.service';
import { CapitalService } from '../services/capital.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent {
  paises:Pais[]=[];
  buscarStr:string="";
  isSuccess:boolean=false;

  constructor(private serviceAll:AllService, private serviceCapital:CapitalService, private router: Router, private route: ActivatedRoute){

    this.serviceAll.getPaises().subscribe({
      next: value=>{
        this.paises=value;
        this.setIsSuccess(true)
      },
      error: err=>{
        console.log("Algo paso: " + err);
        this.setIsSuccess(true)
      }
    })

  }

  onChangeBuscarValue(value: string){
    this.buscarStr=value
  }

  buscar():void {
    this.serviceCapital.getCapital(this.buscarStr).subscribe({
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
