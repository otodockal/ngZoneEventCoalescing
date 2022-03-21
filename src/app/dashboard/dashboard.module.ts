import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NbCardModule, NbDatepickerModule, NbInputModule } from '@nebular/theme';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  imports: [CommonModule, NbDatepickerModule, NbInputModule, NbCardModule],
  exports: [DashboardComponent],
  declarations: [DashboardComponent],
})
export class DashboardModule {}
