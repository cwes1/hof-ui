import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/api/api.service';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  constructor(private apiService: ApiService) { }
}
