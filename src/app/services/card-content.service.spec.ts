import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { CardContentService } from './card-content.service';

describe('CardContentService', () => {
  let service: CardContentService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });
    service = TestBed.inject(CardContentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
