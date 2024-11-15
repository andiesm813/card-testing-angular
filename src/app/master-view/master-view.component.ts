import { Component, OnDestroy, OnInit } from '@angular/core';
import { IGX_GRID_ACTION_STRIP_DIRECTIVES, IGX_GRID_DIRECTIVES, IGX_LIST_DIRECTIVES, IGX_TREE_DIRECTIVES, IgxAvatarComponent, IgxIconComponent } from '@infragistics/igniteui-angular';
import { IgxFinancialChartModule } from 'igniteui-angular-charts';
import { Subject, takeUntil } from 'rxjs';
import { StocksType } from '../models/financial/stocks-type';
import { EmployeesType } from '../models/northwind/employees-type';
import { FinancialService } from '../services/financial.service';
import { NorthwindService } from '../services/northwind.service';
import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'transformData',
  standalone: true
})
export class TransformDataPipeMasterView implements PipeTransform {

  transform(data: any[]): any[] {
    if (!data) {
      return [];
    }

    return (Array.isArray(data[0]) ? data : [data]).map((series: any) => {
      return series.map((item: any) => {
        const dateTimeKey = Object.keys(item).find((key: any) => this.isValidDateISO(item[key]));
        return {
          ...item,
          ...dateTimeKey ? { [dateTimeKey]: this.dateStringToLocalDate(item[dateTimeKey]) } : {},
        }
      });
    });
  }

  private isValidDateISO(value: unknown) {
    return typeof value === 'string' &&  /^\d{4}-\d{2}-\d{2}($|T)/.test(value) && Number.isFinite(Date.parse(value));
  }

  private dateStringToLocalDate(value: string): Date {
    if (value.length === 10 && /^\d{4}-\d{2}-\d{2}$/.test(value)) {
      // It's a full-date string (date-only), add time with no timezone to be parsed as local Date
      return new Date(value + 'T00:00');
    }
    // It's likely date-time, use the default parser as is
    return new Date(value);
  }
}

@Component({
  selector: 'app-master-view',
  standalone: true,
  imports: [IGX_GRID_ACTION_STRIP_DIRECTIVES, IGX_LIST_DIRECTIVES, IGX_TREE_DIRECTIVES, IGX_GRID_DIRECTIVES, IgxFinancialChartModule, IgxAvatarComponent, IgxIconComponent, TransformDataPipeMasterView],
  templateUrl: './master-view.component.html',
  styleUrls: ['./master-view.component.scss']
})
export class MasterViewComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  public northwindEmployees: EmployeesType[] = [];
  public financialStocks: StocksType[] = [];

  constructor(
    private northwindService: NorthwindService,
    private financialService: FinancialService,
  ) {}

  ngOnInit() {
    this.northwindService.getEmployees().pipe(takeUntil(this.destroy$)).subscribe({
      next: (data) => this.northwindEmployees = data,
      error: (_err: any) => this.northwindEmployees = []
    });
    this.financialService.getStocks().pipe(takeUntil(this.destroy$)).subscribe({
      next: (data) => this.financialStocks = data,
      error: (_err: any) => this.financialStocks = []
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
