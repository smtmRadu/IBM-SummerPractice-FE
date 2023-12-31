import {AfterViewInit, Component, Input, OnInit, Renderer2, ViewChild} from '@angular/core';
import { User } from "../../models/user";
import { UserService } from "../../services/user.service";
import {ActivatedRoute} from "@angular/router";
import {AssessmentModalComponent} from "../../assessment-modal/assessment-modal.component";
import {TeamDetails} from "../../models/team-details";

declare var $: any;

@Component({
  selector: 'app-info-container',
  templateUrl: './info-container.component.html',
  styleUrls: ['./info-container.component.css']
})
export class InfoContainerComponent implements OnInit, AfterViewInit{
  @Input() userType: string = '';
  @Input() number: number = 0;
  @Input() teamDetails!: TeamDetails;

  activityName: string = '';
  teamName: string = '';


  @ViewChild(AssessmentModalComponent, { static: false }) assessmentModalComponent!: AssessmentModalComponent;

  constructor(private activatedRoute: ActivatedRoute, private userService: UserService, private renderer: Renderer2) {
  }

  ngOnInit() {
    this.activatedRoute.queryParamMap.subscribe((params) => {
      this.activityName = params.get('activityName') || '';
      console.log(`got the activityName: ${this.activityName}`)
      this.teamName = params.get('teamName') || '';
    })
  }

  openAssessmentModal(): void {
    // we need to pass the team members array to the assessment modal
    if (this.assessmentModalComponent) {
      this.assessmentModalComponent.teamUsers = this.teamDetails.members;
      this.assessmentModalComponent.activityName=this.activityName;
      console.log(`opened assessment and the activityName is : ${this.activityName}`)
    }

    const assessmentModal = document.getElementById('assessmentModal');
    console.log("in open assessment modal!");
    if (assessmentModal) {
      $(assessmentModal).modal('show');

      this.renderer.listen(assessmentModal, 'click', (event) => {
        if (
          event.target === assessmentModal ||
          event.target.classList.contains('close') ||
          (event.target.classList.contains('btn') && event.target.classList.contains('btn-secondary'))
        ) {
          $(assessmentModal).modal('hide');
        }
      });
    }
  }

  handleSaveAssessment(teamUsers: User[]) {
    console.log(teamUsers);
  }

  getPath(){
    return window.location.pathname == '/activity-teams';
  }

  ngAfterViewInit(): void {
  }

  exportSituation() {
  }
}
