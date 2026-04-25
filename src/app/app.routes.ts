import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Contact } from './pages/contact/contact';
import { Directorio } from './pages/directorio/directorio';
import { Cursos } from './pages/cursos/cursos';
import { CursosDetails } from './pages/cursos-details/cursos-details';
import { DiplomadoDetails } from './pages/diplomado-details/diplomado-details';
import { About } from './pages/about/about';


export const routes: Routes = [
    {
        path: '',
        component: Home
    },
    {
        path: 'contact',
        component: Contact
    },
    {
        path: 'directorio',
        component: Directorio
    },
    {
        path: 'cursos',
        component: Cursos
    },
    {
        path: 'cursos-details',
        component: CursosDetails
    },
    {
        path: 'diplomado-details',
        component: DiplomadoDetails
    },
    {
        path: 'about',
        component: About
    },
    {
  path: 'admin/cursos',
  loadComponent: () =>
    import('./pages/admin/courses-admin/courses-admin')
      .then(m => m.CoursesAdmin)
}
]
