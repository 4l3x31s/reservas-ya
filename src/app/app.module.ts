import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ComponentsModule } from './components/components.module';
import { AngularFireModule } from '@angular/fire';
import { IonicStorageModule } from '@ionic/storage';
import { environment } from '../environments/environment.prod';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { File } from '@ionic-native/File/ngx';
import { MediaCapture } from '@ionic-native/media-capture/ngx';
import { Media } from '@ionic-native/media/ngx';
import { StreamingMedia } from '@ionic-native/streaming-media/ngx';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
import { CiudadesService } from './api/db/ciudades.service';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { SlidesAnimationsService } from './api/slides-animations.service';
import { ImgCompressorDirective } from './img-compressor.directive';

@NgModule({
  declarations: [AppComponent, ImgCompressorDirective],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot(),
    AppRoutingModule,
    ComponentsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,
    AngularFireDatabaseModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    InAppBrowser,
    ImagePicker,
    MediaCapture,
    File,
    Media,
    StreamingMedia,
    PhotoViewer,
    CiudadesService,
    SlidesAnimationsService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
