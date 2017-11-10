import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TaskService {

  tasks:any[];

  constructor(private http: HttpClient) { }


}
