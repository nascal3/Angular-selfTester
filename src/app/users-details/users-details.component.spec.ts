import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersDetailsComponent } from './users-details.component';
import {ActivatedRoute, Router} from '@angular/router';
import {empty, Observable} from 'rxjs';

class RouterStub {
 navigate(params) {
 }
}

class ActivatedRouteStub {
  params: Observable<any> = empty();
}

describe('UsersDetailsComponent', () => {
  let component: UsersDetailsComponent;
  let fixture: ComponentFixture<UsersDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersDetailsComponent ],
      providers: [
        {provide: Router, useClass: RouterStub},
        {provide: ActivatedRoute, useClass: ActivatedRouteStub}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should redirect to the users page after saving', () => {
    const router = TestBed.get(Router);
    let spy = spyOn(router, 'navigate');

    component.save();

    expect(spy).toHaveBeenCalledWith(['users']);
  });
});
