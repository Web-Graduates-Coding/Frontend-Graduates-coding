import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MessageCardComponent } from '@components/message-card/message-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MessageCardComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss', '../styles/variables.scss']
})

export class AppComponent {
  title = 'riwi-graduation-page';
}
