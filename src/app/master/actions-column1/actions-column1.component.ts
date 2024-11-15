import { Component, OnDestroy, OnInit } from '@angular/core';
import { IGX_CARD_DIRECTIVES, IgxDividerDirective, IgxIconButtonDirective, IgxIconComponent, IgxOverlayOutletDirective, IgxRippleDirective, IgxToggleActionDirective, IgxToggleDirective } from '@infragistics/igniteui-angular';
import { Subject, takeUntil } from 'rxjs';
import { CardContentType } from '../../models/card-content/card-content-type';
import { CardContentService } from '../../services/card-content.service';

@Component({
  selector: 'app-actions-column1',
  standalone: true,
  imports: [IGX_CARD_DIRECTIVES, IgxIconButtonDirective, IgxToggleActionDirective, IgxOverlayOutletDirective, IgxDividerDirective, IgxRippleDirective, IgxToggleDirective, IgxIconComponent],
  templateUrl: './actions-column1.component.html',
  styleUrls: ['./actions-column1.component.scss']
})
export class ActionsColumn1Component implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  public cardContentCardContent: CardContentType[] = [];

  constructor(
    private cardContentService: CardContentService,
  ) {}

  ngOnInit() {
    this.cardContentService.getCardContentList().pipe(takeUntil(this.destroy$)).subscribe(
      data => this.cardContentCardContent = data
    );
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
