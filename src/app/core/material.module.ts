import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import {
  MatButtonModule, MatNativeDateModule, MatIconModule, MatSidenavModule,
  MatListModule, MatToolbarModule, MatCardModule, MatInputModule
} from '@angular/material';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';



@NgModule({
  imports: [CommonModule, MatButtonModule, MatDialogModule, MatToolbarModule, MatNativeDateModule, MatIconModule, MatPaginatorModule, MatSortModule, MatSidenavModule, MatListModule, MatCardModule, MatInputModule, MatTableModule],
  exports: [CommonModule, MatButtonModule, MatDialogModule, MatToolbarModule, MatNativeDateModule, MatIconModule, MatPaginatorModule, MatSortModule, MatSidenavModule, MatListModule, MatCardModule, MatInputModule, MatTableModule],
})
export class CustomMaterialModule { }