import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NgSelectPlusComponent } from './components/ng-select-plus/ng-select-plus.component';
import { ListFilterPipePipe } from './components/list-filter-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NgSelectPlusComponent,
    ListFilterPipePipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
