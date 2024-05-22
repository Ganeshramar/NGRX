import { NgModule } from "@angular/core";
import { CounterButtonsComponent } from "./counter-buttons/counter-buttons.component";
import { CounterComponent } from "./counter/counter.component";
import { CounterOutputComponent } from "./counter-output/counter-output.component";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { CustomCounterInputComponent } from "./custom-counter-input/custom-counter-input.component";
import { StoreModule } from "@ngrx/store";
import { appReducer } from "../store/app.state";
import { counterReducer } from "./state/counter.reducer";
import { FormsModule } from "@angular/forms";
import { COUNTER_STATE_NAME } from "./state/counter.selector";

const routes: Routes = [
    {
        path: '',
        component: CounterComponent
    }
]

@NgModule({
    declarations: [
        CounterButtonsComponent,
        CounterComponent,
        CounterOutputComponent,
        CustomCounterInputComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        StoreModule.forFeature(COUNTER_STATE_NAME,counterReducer),
        RouterModule.forChild(routes)
    ]
})
export class CounterModule { }