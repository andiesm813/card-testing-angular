import { Component, OnDestroy, OnInit } from '@angular/core';
import { IGX_CARD_DIRECTIVES, IgxAvatarComponent, IgxIconComponent } from '@infragistics/igniteui-angular';
import { Subject, takeUntil } from 'rxjs';
import { CardContentType } from '../../models/card-content/card-content-type';
import { CardContentService } from '../../services/card-content.service';

@Component({
  selector: 'app-media-column2',
  standalone: true,
  imports: [IGX_CARD_DIRECTIVES, IgxAvatarComponent, IgxIconComponent],
  templateUrl: './media-column2.component.html',
  styleUrls: ['./media-column2.component.scss']
})
export class MediaColumn2Component implements OnInit, OnDestroy {
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
