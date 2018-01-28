import { Name } from './name.model';
import { Friend } from './friend.model';

export interface User {
  _id: string,
  index:number,
  guid: string,
  isActive: boolean,
  balance: string,
  picture: string,
  age: number,
  eyeColor: string,
  name: Name,
  company: string,
  email: string,
  phone: string,
  address: string,
  about: string,
  registered: string,
  latitude: string,
  longitude: string,
  tags: Array<string>,
  range: Array<number>,
  friends: Array<Friend>,
  greeting: string,
  favoriteFruit: string
}
