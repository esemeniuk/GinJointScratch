import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab1/tab1.module').then(m => m.Tab1PageModule)
          },
          {
            path: 'snippets',
            loadChildren: () =>
              import('../snippets/snippets.module').then(m => m.SnippetsPageModule)
          },
          { path: 'authors', loadChildren: () => import('../author/author.module').then( m => m.AuthorPageModule)},
          { path: 'authors/:id', loadChildren: () => import('../author-details/author-details.module').then( m => m.AuthorDetailsPageModule)},
          { path: 'books', loadChildren: () => import('../book/book.module').then( m => m.BookPageModule)},
          { path: 'books/:id', loadChildren: () => import('../book-details/book-details.module').then( m => m.BookDetailsPageModule)},
        ]
      },
      {
        path: 'spirits',
          children: [
              {
                  path: 'listing',
                  loadChildren: () => import('../spirits/spirits.module').then(m => m.SpiritsPageModule)
              },
              {
                  path: 'listing/:id',
                  loadChildren: () => import('../spirit-details/spirit-details.module').then(m => m.SpiritDetailsModule)
              },
              {
                  path: '',
                  redirectTo: 'listing',
                  pathMatch: 'full'
              }
          ]
      },
        {
            path: 'acquisitions',
            children: [
                {
                    path: 'listing',
                    loadChildren: () => import('../acquisitions/acquisitions.module').then(m => m.AcquisitionsPageModule)
                },
                {
                    path: 'listing/:id',
                    loadChildren: () => import('../acquisition-details/acquisition-details.module').then(m => m.AcquisitionDetailsPageModule)
                },
                {
                    path: '',
                    redirectTo: 'listing',
                    pathMatch: 'full'
                }
            ]
        },
      {
        path: '',
        redirectTo: '/tabs/acquisitions',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
      redirectTo: '/tabs/acquisitions',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
