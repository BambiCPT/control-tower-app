import { Component, OnInit } from "@angular/core";
import { AppShellComponent } from "../../ui";

@Component({
  selector: 'ct-viewport',
  templateUrl: './viewport.component.html',
  styleUrl: './viewport.component.scss',
  standalone: true,
  imports: [
    AppShellComponent
  ]
})
export class ViewportComponent implements OnInit {

  public ngOnInit(): void {}
}
