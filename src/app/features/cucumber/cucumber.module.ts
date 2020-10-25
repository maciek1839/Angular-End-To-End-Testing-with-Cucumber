import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ComplexSyntaxTutorialComponent} from './complex-syntax-tutorial/complex-syntax-tutorial.component';
import {CucumberRoutingModule} from './cucumber-routing.module';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    ComplexSyntaxTutorialComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CucumberRoutingModule
  ]
})
export class CucumberModule {
}
