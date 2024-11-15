import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { IGX_NAVIGATION_DRAWER_DIRECTIVES, IgxIconComponent, IgxOverlayOutletDirective, IgxToggleActionDirective, IgxToggleDirective } from '@infragistics/igniteui-angular';
import { Subject, takeUntil } from 'rxjs';
import { CategoriesType } from '../models/northwind/categories-type';
import { NorthwindService } from '../services/northwind.service';

@Component({
  selector: 'app-master',
  standalone: true,
  imports: [IGX_NAVIGATION_DRAWER_DIRECTIVES, IgxToggleActionDirective, IgxOverlayOutletDirective, IgxToggleDirective, IgxIconComponent, RouterLink, RouterOutlet],
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.scss']
})
export class MasterComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  public northwindCategories: CategoriesType[] = [];

  constructor(
    private northwindService: NorthwindService,
  ) {}

  ngOnInit() {
    this.northwindService.getCategories().pipe(takeUntil(this.destroy$)).subscribe({
      next: (data) => this.northwindCategories = data,
      error: (_err: any) => this.northwindCategories = []
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
