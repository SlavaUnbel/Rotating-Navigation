export default abstract class DataService {
  public abstract getData(): Promise<IData>
}