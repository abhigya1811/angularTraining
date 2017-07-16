import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { UtilsModule } from './utils/utils.module';

import { AppComponent } from './app.component';
import { BugTrackerComponent} from './bug-tracker/bugTracker-storage.component';

/*import { TrimTextPipe} from './bug-tracker/pipes/trimText.pipe';
import { SortPipe } from './bug-tracker/pipes/sort.pipe';*/
import { GetClosedCountPipe } from './bug-tracker/pipes/closecount.pipe';

import {BugOperations} from './bug-tracker/services/BugOperations.service';
import {StorageOperations} from './bug-tracker/services/storage.service';

@NgModule({
  declarations: [
    AppComponent,
    BugTrackerComponent,
    /*TrimTextPipe,
    SortPipe,*/
    GetClosedCountPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    UtilsModule
  ],
  providers: [BugOperations,StorageOperations],
  bootstrap: [AppComponent]
})
export class AppModule { }
