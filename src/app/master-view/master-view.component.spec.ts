import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { IGX_LIST_DIRECTIVES, IgxAvatarComponent, IgxIconComponent, IGX_TREE_DIRECTIVES, IGX_GRID_DIRECTIVES, IGX_GRID_ACTION_STRIP_DIRECTIVES } from '@infragistics/igniteui-angular';
import { IgxFinancialChartModule } from 'igniteui-angular-charts';
import { MasterViewComponent } from './master-view.component';

describe('MasterViewComponent', () => {
  let component: MasterViewComponent;
  let fixture: ComponentFixture<MasterViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ MasterViewComponent, NoopAnimationsModule, FormsModule, HttpClientTestingModule, IGX_LIST_DIRECTIVES, IgxAvatarComponent, IgxIconComponent, IGX_TREE_DIRECTIVES, IGX_GRID_DIRECTIVES, IGX_GRID_ACTION_STRIP_DIRECTIVES, IgxFinancialChartModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
