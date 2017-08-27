import { Component, OnInit, NgModule, ViewChild } from '@angular/core';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  providers: [DataService]
})
export class CardComponent implements OnInit {
  images: any[];
  imagesFound: boolean = false;
  showMatches = false;
  stars: number;
  searchQuery: string;


  title= ' app works';

  handleSuccess(data) {
    this.imagesFound = true;
    this.images = data.results;
  }




  handleError(error) {
    console.log(error);
  }



  constructor(private dataService: DataService) { 
    
  }


  searchImages(query:string ) {
      return this.dataService.getImage(query).subscribe(
        data => this.handleSuccess(data),
        error => this.handleError(error),
        
      ),
      this.showMatches = false  
  }
  ngOnInit() {
    
    
  }

}



