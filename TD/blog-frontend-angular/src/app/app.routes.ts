import { Routes } from '@angular/router';
import { HomeComponent } from './website/home/home.component';
import { AuthComponent } from './website/auth/auth.component';
import { SearchResultComponent } from './website/search-result/search-result.component';
import { ArticleComponent } from './website/article/article.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AddArticleComponent } from './admin/add-article/add-article.component';
import { UpdateArticleComponent } from './admin/update-article/update-article.component';
import { TwoFactorComponent } from './website/two-factor/two-factor.component';

export const routes: Routes = [
    { path: '', title: "Welcom on Seven Academy Blog", component: HomeComponent },
    { path: 'auth', title: "Login or Register", component: AuthComponent },
    { path: 'auth/two-factor', title: "Confirm your email", component: TwoFactorComponent },
    { path: 'search', title: "Result of the research", component: SearchResultComponent },
    { path: 'blog/:id', component: ArticleComponent },
    { path: 'dashboard', title: "Dashboard Page", component: DashboardComponent },
    { path: 'dashboard/create-article', title: "Add new article", component: AddArticleComponent },
    { path: 'dashboard/update-article/:id', component: UpdateArticleComponent }
];
