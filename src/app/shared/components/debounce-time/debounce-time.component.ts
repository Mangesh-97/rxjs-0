import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { debounceTime, mergeMap } from 'rxjs';

@Component({
  selector: 'debounce-time',
  templateUrl: './debounce-time.component.html',
  styleUrls: ['./debounce-time.component.scss']
})
export class DebounceTimeComponent implements OnInit{

  constructor(
    private _apiService: ApiService
  ){}

  ngOnInit(): void {
    this._apiService.getKeyWord$
      .pipe(
        debounceTime(2000),
        mergeMap(word => this._apiService.getAllPost())
      )
      .subscribe(res => {
        console.log(res)
      })
  }

  onKeyDown(eve: Event): void {
    this._apiService.getKeyWord$.next((<HTMLInputElement>eve.target).value)
  }
}
