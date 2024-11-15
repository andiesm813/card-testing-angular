import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { IGX_CARD_DIRECTIVES, IgxDividerDirective, IgxIconButtonDirective, IgxRippleDirective, IgxIconComponent } from '@infragistics/igniteui-angular';
import { ActionsColumn2Component } from './actions-column2.component';

describe('ActionsColumn2Component', () => {
  let component: ActionsColumn2Component;
  let fixture: ComponentFixture<ActionsColumn2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ActionsColumn2Component, NoopAnimationsModule, FormsModule, HttpClientTestingModule, IGX_CARD_DIRECTIVES, IgxDividerDirective, IgxIconButtonDirective, IgxRippleDirective, IgxIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionsColumn2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
