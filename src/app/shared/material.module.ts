import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatToolbarModule } from '@angular/material/toolbar';

const MATERIAL_BUNDLE = [
	MatButtonModule,
	MatCheckboxModule,
	MatFormFieldModule,
	MatInputModule,
	MatRadioModule,
	MatToolbarModule
];

@NgModule({
	declarations: [],
	imports: [CommonModule, MATERIAL_BUNDLE],
	exports: [MATERIAL_BUNDLE]
})
export class MaterialModule {}
