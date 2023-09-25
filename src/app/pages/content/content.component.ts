import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  private ID:string|null = ""
  photoCover:string = "photo"
  contentTitle:string = "Titulo"
  contentDescription:string = "Descrição"

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      value => this.ID = value.get("id")
    )
    this.setValuesToComponent(this.ID);
  }

  setValuesToComponent(id:string|null):void {
    const result = dataFake.filter(article => article.id == id)[0]
    this.photoCover = result.photo;
    this.contentTitle = result.title;
    this.contentDescription = result.description;
  }

}
