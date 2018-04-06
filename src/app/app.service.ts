import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {User} from "./User";

@Injectable()
export class ApiService {

  public getUsers(): Observable<any> {
    let fakeUsers : User[] = [{position: 1, firstName: 'Dhiraj', lastName: 'Ray', email: 'dhiraj@gmail.com'},
      {position: 2, firstName: 'Tom', lastName: 'Jac', email: 'Tom@gmail.com'},
      {position: 3, firstName: 'Hary', lastName: 'Pan', email: 'hary@gmail.com'},
      {position: 4, firstName: 'praks', lastName: 'pb', email: 'praks@gmail.com'},
    ];
    return Observable.of(fakeUsers).delay(500);
  }

}