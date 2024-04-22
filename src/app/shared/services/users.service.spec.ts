import { UserInterface } from "../types/user.interface";
import { UsersService } from "./users.service";
import { TestBed } from "@angular/core/testing";
import { UtilsService } from "./utils.service";

describe('UsersService', () => {
  let usersService: UsersService;
  let utilsService: UtilsService;
  // const utilsServiceMock = {
  //   pluck: jest.fn(),
  // };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        UsersService, 
        UtilsService
        // { provide: UtilsService, useValue: utilsServiceMock }
      ],
    });

    usersService = TestBed.inject(UsersService);
    utilsService = TestBed.inject(UtilsService);
  });

  it('creates a service', () => {
    expect(usersService).toBeTruthy();
  });

  describe('addUser', () => {
    it('should add a user', () => {
      const user: UserInterface = { 
        id: '3', 
        name: 'foo' 
      }
      usersService.addUser(user);
      expect(usersService.users).toEqual([{id: '3', name: 'foo'}]);
    });
  });

  describe('removeUser', () => {
    it('should remove a user', () => {
      usersService.users = [{id: '3', name: 'foo'}];
      usersService.removeUser('3');
      expect(usersService.users).toEqual([]);
    });
  });

  describe('getUserNames', () => {
    it('should return user names', () => {
      jest.spyOn(usersService.utilsService, 'pluck');
      usersService.users = [{id: '3', name: 'foo'}];
      usersService.getUserNames();
      expect(usersService.utilsService.pluck).toHaveBeenCalledWith(usersService.users, 'name');
      // utilsServiceMock.pluck.mockReturnValue(['foo']);
      // expect(usersService.getUserNames()).toEqual(['foo']);
    });
  });
});
