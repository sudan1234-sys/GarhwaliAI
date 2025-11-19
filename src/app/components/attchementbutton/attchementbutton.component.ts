import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-attachment-button',
  template: `
    <label class="attach" aria-label="Attach file">
      <input type="file" (change)="onFile($event)" class="visually-hidden" />
      <span aria-hidden="true">📎</span>
    </label>
  `,
  styles: [`
    .attach { display:inline-flex; align-items:center; justify-content:center; padding:8px; border-radius:8px; cursor:pointer; border:1px solid rgba(0,0,0,0.06); background:transparent; }
    .visually-hidden { position:absolute; left:-10000px; width:1px; height:1px; overflow:hidden; }
  `],
  standalone: true
})
export class AttachmentButtonComponent {
  @Output() fileSelected = new EventEmitter<File>();

  onFile(e: Event): void {
    const input = e.target as HTMLInputElement;
    const file = input?.files?.[0] ?? null;
    if (file) this.fileSelected.emit(file);
    if (input) input.value = ''; // reset to allow same file again
  }
}
