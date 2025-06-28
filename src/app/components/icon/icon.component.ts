import { Component, Input, OnInit, inject, ElementRef, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconRegistryService } from './icon-registry.service';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [CommonModule],
  template: ``,  // Empty template - will be rendered programmatically
  styles: [`
    :host {
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }
  `]
})
export class IconComponent implements OnInit {
  @Input() name!: string;
  @Input() size: string | number = 24;
  @Input() className: string = '';

  private iconRegistry = inject(IconRegistryService);
  private elementRef = inject(ElementRef);
  private renderer = inject(Renderer2);

  ngOnInit(): void {
    this.renderIcon();
  }

  private renderIcon(): void {
    const iconData = this.iconRegistry.getIcon(this.name);

    if (!iconData) {
      console.warn(`Icon "${this.name}" not found`);
      return;
    }

    // Create SVG element
    const svg = this.renderer.createElement('svg', 'svg');

    // Set attributes
    this.renderer.setAttribute(svg, 'width', this.size.toString());
    this.renderer.setAttribute(svg, 'height', this.size.toString());
    this.renderer.setAttribute(svg, 'viewBox', iconData.viewBox || '0 0 24 24');
    this.renderer.setAttribute(svg, 'fill', 'currentColor');

    // Add custom classes
    if (this.className) {
      this.className.split(' ').forEach(cls => {
        if (cls.trim()) {
          this.renderer.addClass(svg, cls.trim());
        }
      });
    }

    // Set innerHTML
    this.renderer.setProperty(svg, 'innerHTML', iconData.content);

    // Clear host element and append SVG
    const hostElement = this.elementRef.nativeElement;
    this.renderer.setProperty(hostElement, 'innerHTML', '');
    this.renderer.appendChild(hostElement, svg);
  }
}
