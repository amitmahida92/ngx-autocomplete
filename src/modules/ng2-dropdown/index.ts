import { Ng2Dropdown, Ng2DropdownButton, Ng2DropdownMenu, Ng2MenuItem } from './components';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownStateService } from './services';

@NgModule({
    exports: [
        Ng2MenuItem,
        Ng2DropdownButton,
        Ng2DropdownMenu,
        Ng2Dropdown
    ],
    declarations: [
        Ng2Dropdown,
        Ng2MenuItem,
        Ng2DropdownButton,
        Ng2DropdownMenu,
    ],
    imports: [
        CommonModule
    ]
})
export class Ng2DropdownModule { }

export * from './components';
export * from './services';
