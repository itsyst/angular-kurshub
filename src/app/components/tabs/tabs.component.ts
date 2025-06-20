import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabs.component.html',
})
export class TabsComponent implements OnInit {
  @Input() tabs: { label: string; value: string }[] = [];
  @Output() activeTabChange = new EventEmitter<string>();

  activeTab: string = '';

  setTab(tab: string) {
    this.activeTab = tab;
    this.activeTabChange.emit(tab);
  }

  isActiveTab(tab: string): boolean {
    return this.activeTab === tab;
  }

  ngOnInit() {
    if (!this.activeTab && this.tabs.length > 0) {
      this.activeTab = this.tabs[0].value;
      this.activeTabChange.emit(this.activeTab);
    }
  }
}
