import { NgModule } from '@angular/core';
import {
  MatToolbarModule, MatButtonModule, MatSidenavModule, 
  MatIconModule, MatListModule, MatGridListModule,
  MatCardModule, MatMenuModule, MatNativeDateModule, MatSnackBarModule
} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field'
import { LayoutModule } from '@angular/cdk/layout';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule, MatTableModule, MatPaginatorModule, MatSortModule } 
from '@angular/material';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';

const MaterialComponents = [
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  LayoutModule,
  MatListModule,
  MatGridListModule,
  MatCardModule,
  MatMenuModule,
  DragDropModule,
  MatTabsModule,
  MatFormFieldModule,
  MatInputModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSelectModule,
  MatSnackBarModule
];

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
