import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {CompetitionService} from "../../service/competition.service";
import {Competition} from "../../../../core/models/Competition";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-edit-competition',
  templateUrl: './add-edit-competition.component.html',
  styleUrls: ['./add-edit-task.component.css']
})
export class AddEditCompetitionComponent implements OnInit {
/*
public competitionForm!: FormGroup;
*/

/*
  constructor(private fb: FormBuilder, private competitionService: CompetitionService) { }
*/
  public  competition:Competition=new Competition();
  constructor( private competitionService: CompetitionService,private router:Router) { }
  ngOnInit(): void {

  }

  create(): void {
/*
    let competition: Competition = this.competitionForm.value;
*/
  this.competitionService.create(this.competition).subscribe({
    next: data => {
      this.router.navigate(['/Competition-list']);
    },
    error: err => {
      console.log(err)
      alert(err.error.message);
    }
  });
}

}
