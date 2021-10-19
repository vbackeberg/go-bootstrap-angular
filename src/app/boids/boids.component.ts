import { Component, OnInit } from "@angular/core";
import { Boid } from "../services/data/boids";
import { HttpService } from "../services/http.service";

@Component({
  selector: "app-boids",
  templateUrl: "./boids.component.html",
  styleUrls: ["./boids.component.scss"],
})
export class BoidsComponent implements OnInit {
  loading = true;
  boids: Boid[] = [];

  async ngOnInit(): Promise<void> {
    this.boids = await HttpService.getBoids();
    this.loading = false;
  }
}
