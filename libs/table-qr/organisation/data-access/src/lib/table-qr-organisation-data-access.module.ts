import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import {
  ORGANISATION_FEATURE_KEY,
  orgReducer,
} from './+state/organisation.reducer';
import { EffectsModule } from '@ngrx/effects';
import { OrganisationEffects } from './+state/organisation.effects';
import { OrganisationService } from './organisation.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature(ORGANISATION_FEATURE_KEY, orgReducer),
    EffectsModule.forFeature([OrganisationEffects]),
  ],
  providers: [OrganisationService],
})
export class TableQrOrganisationDataAccessModule {}
