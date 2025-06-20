import { Component, Input, Output, EventEmitter, forwardRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [CommonModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true
    }
  ],
  templateUrl: './select.component.html',
})
export class SelectComponent implements ControlValueAccessor, OnInit {
  @Input() options: SelectOption[] = [];
  @Input() placeholder: string = 'Select an option...';
  @Input() disabled: boolean = false;
  @Input() className: string = '';
  @Input() showScrollButtons: boolean = false;
  @Output() selectionChange = new EventEmitter<SelectOption | null>();

  selectedValue: string | null = null;
  isOpen: boolean = false;

  // ControlValueAccessor implementation
  private onChange = (value: any) => { };
  private onTouched = () => { };

  ngOnInit() {
    // Close dropdown when clicking outside
    document.addEventListener('click', this.handleDocumentClick.bind(this));
  }

  ngOnDestroy() {
    document.removeEventListener('click', this.handleDocumentClick.bind(this));
  }

  writeValue(value: any): void {
    this.selectedValue = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  toggleDropdown() {
    if (!this.disabled) {
      this.isOpen = !this.isOpen;
    }
  }

  closeDropdown() {
    this.isOpen = false;
  }

  selectOption(option: SelectOption) {
    if (!option.disabled) {
      this.selectedValue = option.value;
      this.onChange(option.value);
      this.selectionChange.emit(option);
      this.closeDropdown();
    }
  }

  getDisplayValue(): string {
    const selectedOption = this.options.find(opt => opt.value === this.selectedValue);
    return selectedOption ? selectedOption.label : this.placeholder;
  }

  getTriggerClasses(): string {
    const baseClasses = 'flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50';
    return `${baseClasses} ${this.className}`.trim();
  }

  getContentClasses(): string {
    return 'absolute z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 slide-in-from-top-2 mt-1 w-full';
  }

  onBlur() {
    this.onTouched();
  }

  scrollUp() {
    // Implement scroll functionality if needed
  }

  scrollDown() {
    // Implement scroll functionality if needed
  }

  trackByFn(index: number, option: SelectOption): string {
    return option.value;
  }

  private handleDocumentClick(event: Event) {
    const target = event.target as HTMLElement;
    if (!target.closest('app-select')) {
      this.closeDropdown();
    }
  }
}
