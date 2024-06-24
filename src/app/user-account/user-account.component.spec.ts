import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';
import { UserAccountComponent } from './user-account.component';
import { UserService } from './user.service';
import { of } from '../../../node_modules/rxjs/dist/types';

describe('UserAccountComponent', () => {
  let component: UserAccountComponent;
  let fixture: ComponentFixture<UserAccountComponent>;
  let userService: UserService;
  const activatedRouteStub = { snapshot: { paramMap: { get: (key: string) => '1' } } };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [UserAccountComponent],
      providers: [
        UserService,
        { provide: ActivatedRoute, useValue: activatedRouteStub }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(UserAccountComponent);
    component = fixture.componentInstance;
    userService = TestBed.inject(UserService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch user details on init', () => {
    spyOn(userService, 'getUserDetails').and.returnValue(of({ username: 'testuser', email: 'testuser@example.com' }));
    component.ngOnInit();
    expect(userService.getUserDetails).toHaveBeenCalledWith('1');
    expect(component.user).toEqual({ username: 'testuser', email: 'testuser@example.com' });
  });

  it('should register a new user', () => {
    spyOn(userService, 'registerUser').and.returnValue(of({ user_id: 1, username: 'testuser', email: 'testuser@example.com' }));
    component.registerUser();
    expect(userService.registerUser).toHaveBeenCalledWith({ username: 'testuser', email: 'testuser@example.com', password: 'password123' });
  });
});
