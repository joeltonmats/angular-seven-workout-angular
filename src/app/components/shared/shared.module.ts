import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { OrderByPipe } from './order-by.pipe';
import { SearchPipe } from './search.pipe';
import { SecondsToTimePipe } from './seconds-to-time.pipe';

@NgModule({
    imports: [],
    declarations: [
        OrderByPipe,
        SearchPipe,
        SecondsToTimePipe
    ],
    exports: [
        OrderByPipe,
        SearchPipe,
        SecondsToTimePipe
    ],
})
export class SharedModule { }