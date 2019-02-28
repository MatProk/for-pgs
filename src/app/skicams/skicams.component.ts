import { Component, OnInit } from '@angular/core';
import { SkicamsService } from '../skicams.service';

@Component({
  selector: 'app-skicams',
  templateUrl: './skicams.component.html',
  styleUrls: ['./skicams.component.css']
})
export class SkicamsComponent implements OnInit {

  constructor(private skicams: SkicamsService) { }
  urlFoto1;
  urlFoto2;
  name1;
  name2;
  data;
  dateNow : Date = new Date();
  ngOnInit() {
    
    this.data = this.skicams.getImages().subscribe(data => {
      console.log(Object.keys(data).length);    

      console.log("First cam: " + data[14].name);
      console.log("Prov: " + data[14].prov);
      console.log("Url photo: " + data[14].cams[56].url);
      this.name1 = data[14].name;
      this.urlFoto1 = data[14].cams[56].url;

      //bad solution :/
      //but working :D
      
      console.log("Second cam: " + data[159].name);
      console.log("Prov: " + data[159].prov);
      console.log("Url photo: " + data[159].cams[479].url);
      this.name2 = data[159].name;
      this.urlFoto2 = data[159].cams[479].url;
    });
  }

}
