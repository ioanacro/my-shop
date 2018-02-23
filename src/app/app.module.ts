import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductCountComponent } from './product-count/product-count.component';
import { ProductService } from './product-list/product.service';

@NgModule({
  declarations: [AppComponent, ProductListComponent, ProductCountComponent],
  exports: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule {}
