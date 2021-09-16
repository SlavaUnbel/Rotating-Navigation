import DataService from './abstract/DataService';
import DataServiceMock from './mock/DataServiceMock';

export interface Services {
  dataService: DataService;
}

export const services: Services = {
  dataService: new DataServiceMock()
}