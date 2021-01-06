import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { ListOfProductsComponent } from './containers/list-of-products/list-of-products.component';
import {HttpClientModule} from '@angular/common/http';
import { ProductPageComponent } from './containers/product-page/product-page.component';
import { ProductUploadPanelComponent } from './containers/product-upload-panel/product-upload-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ListOfProductsComponent,
    ProductPageComponent,
    ProductUploadPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
