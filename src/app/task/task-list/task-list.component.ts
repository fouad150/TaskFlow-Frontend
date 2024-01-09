import { Component } from '@angular/core';
import {Competition} from "../../../../core/models/Competition";
import {CompetitionService} from "../../service/competition.service";

@Component({
  selector: 'app-list-competition',
  templateUrl: './list-competition.component.html',
  styleUrls: ['./list-competition.component.css']
})
export class ListCompetitionComponent {
  competitions:Competition[]=[];
  currentPage: number = 1;
  itemsPerPage: number = 4;
  totalItems: number=0;//
  totalPages: number=0;//
  pageArray: number[]=[];

  constructor(private competitionService:CompetitionService) {
  }

  ngOnInit() {
    this.fetchCompetitions();
  }

  fetchCompetitions(): void {
    this.competitionService.getCompetitions().subscribe(
      (data: Competition[]) => {
        this.competitions = data;
        this.totalItems = this.competitions.length;//6
        this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);//2
        this.pageArray = Array(this.totalPages).fill(0).map((x, i) => i + 1);
        console.log(this.pageArray);
      },
      (error) => {
        console.error('Error fetching competitions:', error);
      }
    );
  }

  getDisplayedCompetitions(): Competition[] {
    const startIndex = (this.currentPage- 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.competitions.slice(startIndex, endIndex);
  }

  goToPage(pageNumber: number): void {
    if (pageNumber >= 1 && pageNumber <= this.totalPages) {
      this.currentPage = pageNumber;
    }
  }
}
