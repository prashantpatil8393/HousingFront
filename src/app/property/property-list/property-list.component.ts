import { Component, OnInit } from '@angular/core';
import { HousingService } from 'src/app/services/housing.service';


@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  properties : Array<any>;
  constructor(private housing: HousingService) { }

  ngOnInit(): void
  {
    this.housing.GetAllProperties().subscribe(
      data =>
      {
        this.properties = data as any;
        console.log("from servicd"+ data);
      }, error =>
      {
        console.log("httperror");
        console.log(error);
      }
    )
    // this.http.get("data/properties.json")
    //           .subscribe((data) =>
    //           {
    //             this.properties = data as any;
    //             console.log(data);
    //           });
  }

}
