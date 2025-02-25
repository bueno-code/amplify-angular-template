import { Component, Input } from '@angular/core';
import {CdkDrag} from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-draggable',
  standalone: true,
  imports: [CdkDrag],
  templateUrl: './draggable.component.html',
  styleUrl: './draggable.component.css'
})
export class DraggableComponent {
  @Input() content: string = "";

  
}
