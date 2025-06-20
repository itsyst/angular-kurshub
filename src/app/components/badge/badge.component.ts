import { Component, Input, HostBinding } from '@angular/core';
import { BadgeVariant, badgeVariants } from '../../common/utils/badge-variants';
import { cn } from '../../common/utils/utils';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  host: {
    class: 'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs  text-gray-400 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2'
  }
})
export class BadgeComponent {
  @Input() variant: BadgeVariant = 'default';

  @HostBinding('class')
  get classes(): string {
    return cn(badgeVariants[this.variant], this.className);
  }

  @Input() className: string = '';

}
