import {Name} from './name.model';
import {Friend} from './friend.model';

export class User {
  constructor(public _id: string,
  public index:number,
  public guid: string,
  public isActive: boolean,
  public balance: string,
  public picture: string,
  public age: number,
  public eyeColor: string,
  public name: Name,
  public company: string,
  public email: string,
  public phone: string,
  public address: string,
  public about: string,
  public registered: string,
  public latitude: string,
  public longitude: string,
  public tags: Array<string>,
  public range: Array<number>,
  public friends: Array<Friend>,
  public greeting: string,
  public favoriteFruit: string) {}
}