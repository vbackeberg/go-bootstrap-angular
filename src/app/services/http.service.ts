import { Injectable } from "@angular/core";
import { Assignment, returnedAssignments } from "./data/assignments";
import { Boid, returnedBoids } from "./data/boids";

@Injectable({
  providedIn: "root",
})
export class HttpService {
  constructor() {}

  public static getBoids(): Promise<Boid[]> {
    return this.delay(returnedBoids);
  }

  public static async getAssignments(): Promise<Assignment[]> {
    return this.delay(returnedAssignments);
  }

  private static delay<T>(returnValue: T): Promise<T> {
    return new Promise((resolve, _) => {
      setTimeout(() => {
        resolve(returnValue);
      }, Math.random() * 1000 + 1000);
    });
  }
}
