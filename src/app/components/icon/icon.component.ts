import { Component, Input, OnInit, OnChanges, SimpleChanges, inject, ElementRef, Renderer2 } from '@angular/core';
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
export class IconComponent implements OnInit, OnChanges {
  @Input() name!: string;
  @Input() size: string | number = 24;
  @Input() className: string = '';
  @Input() rotation: number = 0;  // rotation in degrees

  private iconRegistry = inject(IconRegistryService);
  private elementRef = inject(ElementRef);
  private renderer = inject(Renderer2);
  private svgElement: SVGElement | null = null;

  ngOnInit(): void {
    this.renderIcon();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['rotation'] && this.svgElement) {
      this.updateRotation();
    }
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

    // Set initial rotation and transform origin
    this.renderer.setStyle(svg, 'transform-origin', 'center');
    this.updateRotationStyle(svg);

    // Set innerHTML
    this.renderer.setProperty(svg, 'innerHTML', iconData.content);

    // Clear host element and append SVG
    const hostElement = this.elementRef.nativeElement;
    this.renderer.setProperty(hostElement, 'innerHTML', '');
    this.renderer.appendChild(hostElement, svg);

    // Store reference for updates
    this.svgElement = svg;
  }

  private updateRotation(): void {
    if (this.svgElement) {
      this.updateRotationStyle(this.svgElement);
    }
  }

  private updateRotationStyle(svg: SVGElement): void {
    this.renderer.setStyle(svg, 'transform', `rotate(${this.rotation}deg)`);
  }
}
