import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PluginAComponent } from './plugin-a.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PluginAComponent],
  entryComponents: [PluginAComponent],
  providers: [{
     provide: 'plugins',
     useValue: [{
       name: 'plugin-a-component',
       component: PluginAComponent
     }],
     multi: true
   }]
})
export class PluginAModule { }