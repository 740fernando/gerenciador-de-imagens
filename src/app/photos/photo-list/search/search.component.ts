import { Input, OnInit } from "@angular/core";
import { OnDestroy } from "@angular/core";
import { EventEmitter } from "@angular/core";
import { Output } from "@angular/core";
import { Component } from "@angular/core";
import { Subject } from "rxjs";
import { debounceTime } from "rxjs/operators";


@Component({
  selector: 'ep-search',
  templateUrl:'./search.component.html'
})
export class SearchComponent implements OnInit, OnDestroy{

  @Output() onTyping: EventEmitter<string> = new EventEmitter<string>();
  @Input() value: string = '';
  debounce: Subject<string> = new Subject<string>();


  ngOnInit(): void {

    this.debounce
      .pipe(debounceTime(300))
      .subscribe(filter => this.onTyping.emit(filter));
  }

  ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }

}
