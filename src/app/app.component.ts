import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Component, OnInit , OnDestroy } from '@angular/core';
import { datosResponse, DatosService} from './datos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy,OnInit  {
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  articulos:any = null;

  constructor(private datosService:DatosService ){}

  ngOnInit() {

    this.datosService.getData().subscribe((result)=>{
      this.articulos=result;
      this.dtTrigger.next();
    })
      this.dtOptions = {
        pageLength:10
      }

  }

   ngOnDestroy(){
    this.dtTrigger.unsubscribe();
  }
}
