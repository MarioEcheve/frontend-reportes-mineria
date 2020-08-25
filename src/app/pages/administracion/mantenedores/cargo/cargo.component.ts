import { Component, OnInit } from '@angular/core';
import { CargoService } from '../../services/cargo/cargo.service';


@Component({
  selector: 'ngx-cargo',
  templateUrl: './cargo.component.html',
  styleUrls: ['./cargo.component.scss']
})
export class CargoComponent implements OnInit {

  constructor( private cargoService : CargoService) { }

  ngOnInit(): void {
    this.getCargos();
  }
  getCargos(){
    this.cargoService.getCargos().subscribe(
      cargos=>{
        console.log(cargos);
      }
    );
  }
}
