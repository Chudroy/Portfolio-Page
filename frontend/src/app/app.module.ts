import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Custom Components
import { AppComponent } from './app.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { WorkComponent } from './work/work.component';
import { ContactComponent } from './contact/contact.component';
import { NavigationComponent } from './navigation/navigation.component';

// Custom Services

// Angular Material Modules
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { MatListModule } from '@angular/material/list';
import { LayoutModule } from '@angular/cdk/layout';
import { MatTabsModule } from '@angular/material/tabs';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { scrollProgressBarComponent } from './scroll-progress-bar/scroll-progress-bar.component';
import { scrollProgressDirective } from './diretives/scroll-progress.directive';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDividerModule } from '@angular/material/divider';
import { MatChipsModule } from '@angular/material/chips';
@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    WorkComponent,
    ContactComponent,
    NavigationComponent,
    PortfolioComponent,
    scrollProgressBarComponent,
    scrollProgressDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    LayoutModule,
    MatTabsModule,
    MatProgressBarModule,
    MatGridListModule,
    MatDividerModule,
    MatChipsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
