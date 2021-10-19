import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AssignmentsComponent } from "./assignments/assignments.component";
import { BoidsComponent } from "./boids/boids.component";

const routes: Routes = [
  {
    path: "assignments",
    pathMatch: "full",
    component: AssignmentsComponent,
  },
  {
    path: "boids",
    pathMatch: "full",
    component: BoidsComponent,
  },
  { path: "**", redirectTo: "/assignments" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
