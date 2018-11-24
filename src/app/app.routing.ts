// Importar modulos del router de angular

import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Importar los componentes

import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { MakeprojectComponent } from './components/makeproject/makeproject.component';
import { ContactComponent } from './components/contact/contact.component';
import { ErrorComponent } from './components/error/error.component';
import { DetailComponent } from './components/detail/detail.component';
import { EditComponent } from './components/edit/edit.component'

// Array de configuracion de las rutas

const appRoutes: Routes = [

	{path: '' , component: AboutComponent },
	{path: 'about' , component: AboutComponent },
	{path: 'projects' , component: ProjectsComponent },
	{path: 'makeproject' , component: MakeprojectComponent },
	{path: 'contact' , component: ContactComponent },
	{path: 'project/:id' , component: DetailComponent },
	{path: 'edit-project/:id' , component: EditComponent},
	{path: '**' , component: ErrorComponent }

];


// Exportar el modulo del router

export const appRoutingProviders: any[] = []; 
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
