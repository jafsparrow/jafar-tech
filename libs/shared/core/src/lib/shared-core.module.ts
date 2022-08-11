import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimesagoPipe } from './timesago.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [TimesagoPipe],
  exports: [TimesagoPipe],
})
export class SharedCoreModule {}
