import { Routes, RouterModule, RouterLink} from '@angular/router';
import { Modulu1 } from './modulu1/modulu1';
import { Modulu2 } from './modulu2/modulu2';

export const routes: Routes = [
    
  { path: 'modulu1', component: Modulu1, title: 'modulu1' },
  { path: 'modulu2', component: Modulu2, title: 'modulu2' },

];
