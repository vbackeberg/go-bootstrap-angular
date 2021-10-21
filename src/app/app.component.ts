import { AfterViewChecked, Component } from "@angular/core";
import { Modal } from "bootstrap";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements AfterViewChecked {
  title = "go-bootstrap-angular";

  ngAfterViewChecked() {
    document
      .querySelectorAll('[data-bs-toggle="modal"]')
      .forEach((modalTrigger) => {
        Modal.getOrCreateInstance(modalTrigger);
      });
  }
}
