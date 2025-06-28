import { Injectable } from '@angular/core';

export interface SvgIcon {
  content: string;
  viewBox?: string;
}

@Injectable({
  providedIn: 'root'
})
export class IconRegistryService {
  private icons: Map<string, SvgIcon> = new Map();

  public registerIcon(name: string, content: string, viewBox: string = '0 0 24 24'): void {
    this.icons.set(name, { content, viewBox });
  }

  public registerIcons(icons: Record<string, SvgIcon>): void {
    Object.entries(icons).forEach(([name, icon]) => {
      this.icons.set(name, {
        content: icon.content,
        viewBox: icon.viewBox || '0 0 24 24'
      });
    });
  }

  public getIcon(name: string): SvgIcon | undefined {
    return this.icons.get(name);
  }
}
