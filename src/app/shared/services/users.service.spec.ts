import { UsersService } from "./users.service";
import { TestBed } from "@angular/core/testing";

describe('UsersService', () => {
  let UsersService: UsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsersService],
    });

    UsersService = TestBed.inject(UsersService);
  });

  it('creates a service', () => {
    expect(UsersService).toBeTruthy();
  });
});