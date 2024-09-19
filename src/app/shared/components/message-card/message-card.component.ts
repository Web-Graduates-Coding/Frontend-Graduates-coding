import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'message-card',
  standalone: true,
  imports: [],
  templateUrl: './message-card.component.html',
  styleUrls: ['./message-card.component.scss', '../../../../styles/variables.scss']
})
export class MessageCardComponent {
  @Input() public user: string = 'mensaje de prueba';
  @Input() public tag: string = 'nombre de la cuenta';
}
