import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  signal,
  ViewChild,
  ElementRef,
  AfterViewInit,
  HostListener
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { HeroComponentComponent } from '../../components/hero-component/hero-component.component';


@Component({
  selector: 'app-home',
  // note: Angular v20+ assumes standalone import semantics; no standalone: true set
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HeroComponentComponent,
    // NgOptimizedImage,
    // ChatBubbleComponent,
    // TypingIndicatorComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent  {
 
}

 
