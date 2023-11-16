import { Component } from '@angular/core';
import { Pais } from '../services/clases'
import { AllService } from '../services/all.service';
import { RegionService } from '../services/region.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css']
})
export class PorRegionComponent {
  paises:Pais[]=[];
  buscarStr:string="";
  isSuccess:boolean=false;

  constructor(private serviceAll:AllService, private serviceRegion:RegionService, private router: Router, private route: ActivatedRoute){

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
    this.serviceRegion.getRegion(this.buscarStr).subscribe({
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

