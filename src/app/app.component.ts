import { Component, SimpleChanges } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserListComponent } from "./components/user-list/user-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }

  ngOnInit() {
    console.log('Initialized');
  }
}
