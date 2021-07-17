import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { FooterComponent } from './footer/footer.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { ReasonsToJoinComponent } from './reasons-to-join/reasons-to-join.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserStatusComponent } from './user-status/user-status.component';
import { MainServicesComponent } from './main-services/main-services.component';
import { MusiqueComponent } from './musique/musique.component';
import { ClothesComponent } from './clothes/clothes.component';
import { PhotosComponent } from './photos/photos.component';
import { ImageGalleryComponent } from './image-gallery/image-gallery.component';

const appRoutes : Routes = [
  {path :'aboutMe', component : AboutMeComponent},
  {path : 'reasonstojoin', component : ReasonsToJoinComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    FooterComponent,
    NavBarComponent,
    AboutMeComponent,
    ReasonsToJoinComponent,
    UserStatusComponent,
    MainServicesComponent,
    MusiqueComponent,
    ClothesComponent,
    PhotosComponent,
    ImageGalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
    
export class AppModule { }