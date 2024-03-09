import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{

  searchTerm : string = '';

  constructor(activatedRoute: ActivatedRoute, private route: Router){

    activatedRoute.params.subscribe((param : any)=>{
      if(param.searchTerm)
        this.searchTerm = param.searchTerm;
    })

  }

  ngOnInit(): void {
  }

  search(term : string){

    //if(term)
    this.route.navigateByUrl('/search/' + term);
  }

}
