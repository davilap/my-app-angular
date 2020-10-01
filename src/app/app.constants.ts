import { Injectable } from '@angular/core';

@Injectable()
export class Configuration {
  public Server = 'http://localhost:8000/';
  public ApiUrl = 'api/v1';
  public ServerWithApi = `${this.Server}${this.ApiUrl}`;
}
