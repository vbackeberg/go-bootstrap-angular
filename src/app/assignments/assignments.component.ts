import { Component, OnInit } from "@angular/core";
import { Assignment } from "../services/data/assignments";
import { HttpService } from "../services/http.service";

@Component({
  selector: "app-assignments",
  templateUrl: "./assignments.component.html",
  styleUrls: ["./assignments.component.scss"],
})
export class AssignmentsComponent implements OnInit {
  loading = true;
  assignments: Assignment[] = [];
  async ngOnInit(): Promise<void> {
    this.assignments = await HttpService.getAssignments();
    this.loading = false;
  }
}
