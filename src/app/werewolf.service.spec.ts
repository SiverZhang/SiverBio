import { TestBed, inject } from '@angular/core/testing';

import { WerewolfService } from './werewolf.service';

describe('WerewolfService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WerewolfService]
    });
  });

  it('should be created', inject([WerewolfService], (service: WerewolfService) => {
    expect(service).toBeTruthy();
  }));
});
