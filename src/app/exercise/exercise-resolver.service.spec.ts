import { TestBed, inject } from '@angular/core/testing';

import { ExerciseResolverService } from './exercise-resolver.service';

describe('ExerciseResolver.ServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExerciseResolverService]
    });
  });

  it('should be created', inject([ExerciseResolverService], (service: ExerciseResolverService) => {
    expect(service).toBeTruthy();
  }));
});
