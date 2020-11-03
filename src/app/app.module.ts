import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { SearchModule } from './modules/search/search.module';
import { ExtraModule } from './modules/extra/extra.module';

@NgModule({
	declarations: [AppComponent],
	imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, SharedModule, SearchModule, ExtraModule],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
