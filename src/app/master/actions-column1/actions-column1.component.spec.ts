import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { IGX_CARD_DIRECTIVES, IgxDividerDirective, IgxIconButtonDirective, IgxRippleDirective, IgxIconComponent } from '@infragistics/igniteui-angular';
import { ActionsColumn1Component } from './actions-column1.component';

describe('ActionsColumn1Component', () => {
  let component: ActionsColumn1Component;
  let fixture: ComponentFixture<ActionsColumn1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ActionsColumn1Component, NoopAnimationsModule, FormsModule, HttpClientTestingModule, IGX_CARD_DIRECTIVES, IgxDividerDirective, IgxIconButtonDirective, IgxRippleDirective, IgxIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionsColumn1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
