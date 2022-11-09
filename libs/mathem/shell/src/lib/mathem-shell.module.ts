import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { environment } from '@mathem-assignment/mathem/shared/root/environments';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { MathemRouterModule } from './mathem-router.module';

@NgModule({
  imports: [
    CommonModule,
    MathemRouterModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({ logOnly: environment.production }),
  ],
})
export class MathemShellModule {}
