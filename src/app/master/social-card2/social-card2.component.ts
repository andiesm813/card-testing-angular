import { Component, OnDestroy, OnInit } from '@angular/core';
import { IGX_CARD_DIRECTIVES, IgxAvatarComponent, IgxButtonDirective, IgxIconButtonDirective, IgxIconComponent, IgxOverlayOutletDirective, IgxRippleDirective, IgxToggleActionDirective, IgxToggleDirective } from '@infragistics/igniteui-angular';
import { Subject, takeUntil } from 'rxjs';
import { CardContentType } from '../../models/card-content/card-content-type';
import { CardContentService } from '../../services/card-content.service';

@Component({
  selector: 'app-social-card2',
  standalone: true,
  imports: [IGX_CARD_DIRECTIVES, IgxToggleActionDirective, IgxOverlayOutletDirective, IgxIconButtonDirective, IgxAvatarComponent, IgxIconComponent, IgxButtonDirective, IgxRippleDirective, IgxToggleDirective],
  templateUrl: './social-card2.component.html',
  styleUrls: ['./social-card2.component.scss']
})
export class SocialCard2Component implements OnInit, OnDestroy {
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
