export class Pais{
  private _name:string;
  private _bandera:string;
  private _icon:string;
  private _capital:string;
  private _poblacion:string;

  constructor(name:string, bandera:string, icon:string, capital:string, poblacion:string){
    this._name=name;
    this._bandera=bandera;
    this._icon=icon;
    this._capital=capital;
    this._poblacion=poblacion;
  }
  public get name():string{return this._name;}
  public get bandera():string{return this._bandera;}
  public get icon():string{return this._icon;}
  public get capital():string{return this._capital;}
  public get poblacion():string{return this._poblacion;}
}
