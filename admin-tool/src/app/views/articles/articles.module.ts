import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ArticlesRoutingModule } from './articles-routing.module';
import { ListComponent } from './list/list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ArticlesRoutingModule,
  ],
  declarations: [ListComponent]
})
export class ArticlesModule { }
