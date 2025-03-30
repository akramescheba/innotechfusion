
import { ListeComponent } from './liste.component';

import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

describe('ListeComponent', () => {
  let fixture: ListeComponent;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    jest.spyOn(Storage.prototype, 'getItem').mockImplementation((key) => {
      if (key === 'Token') return JSON.stringify({});
      return null;
    });
    jest.spyOn(Storage.prototype, 'setItem');

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ListeComponent],
    });

    fixture = TestBed.inject(ListeComponent);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should have title', () => {
    expect(fixture.title).toEqual('innotechfusion');
  });
  it('should create the app component', () => {
    expect(fixture).toBeTruthy();
  });

  it('should fetch data on ngOnInit and testing response', () => {
    const mockData = [
      {
        id: 5,
        ddn: 2002,
        nom: 'Moreau',
        prenom: 'Lucas',
        vote: 'vote',
      },
    ];
    fixture.ngOnInit();
    const req = httpMock.expectOne('http://localhost:8082/membres');
    expect(req.request.method).toBe('GET');
    req.flush(mockData);
    expect(fixture.list).toEqual(mockData);
  });

  it('should have setItem', () => {
    const id = 1;
    const spy = jest.spyOn(localStorage, 'setItem');
    fixture.voter(id);
    expect(fixture.voted[id]).toBe(true);
    expect(spy).toHaveBeenCalledWith('Token', JSON.stringify({ 1: true }));
  });
});
