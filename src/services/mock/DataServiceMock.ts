import { SECOND } from '../../utils/date';
import { delay } from '../../utils/delay';
import DataService from '../abstract/DataService';
import { database } from './database';

export default class DataServiceMock extends DataService {
  public async getData(): Promise<IData> {
    await delay(SECOND)

    return database.data
  }
}