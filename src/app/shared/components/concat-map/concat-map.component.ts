import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { concat, concatMap, exhaustMap, of } from 'rxjs';

@Component({
  selector: 'concat-map',
  templateUrl: './concat-map.component.html',
  styleUrls: ['./concat-map.component.scss']
})
export class ConcatMapComponent implements OnInit{

  constructor(
    private _apiService: ApiService
  ){}

  ngOnInit(): void {
    let ids = of(1,2,3,4,5)

    ids
    .pipe(
      concatMap(id => this._apiService.getSinglePost(id))
    )
    .subscribe(res => {
          console.log(res);
    })
  }

}
