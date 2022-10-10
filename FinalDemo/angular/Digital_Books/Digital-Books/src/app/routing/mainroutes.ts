import { AuthorModule } from '../author/author.module';
import { GridUiModule } from '../grid-ui/grid-ui.module';
import { RegisterComponent } from '../grid-ui/register/register.component';
import { MasterHomeComponent } from '../master/master-home/master-home.component';
import { LoginComponent } from '../reader/login/login.component';
import { ReaderModule } from '../reader/reader.module';

export const Mainroutes = [
    { path: '', component: MasterHomeComponent },
    { path: 'reader/login', component: LoginComponent },
    { path: 'author/login', component: LoginComponent },
    { path: 'reader', loadChildren: () => import('../reader/reader.module').then(m => m.ReaderModule) },
    { path: 'author', loadChildren: () => import('../author/author.module').then(m => m.AuthorModule) },
    { path: 'reader', loadChildren: () => import('../grid-ui/grid-ui.module').then(m => m.GridUiModule) },
    { path: 'author', loadChildren: () => import('../grid-ui/grid-ui.module').then(m => m.GridUiModule) },
    { path: 'home', component: MasterHomeComponent },
];
