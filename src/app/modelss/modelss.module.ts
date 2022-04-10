import { Input } from './../todoapp/todoapp.page';
export interface ApiResponseInterface {
  // responsee: {
  address: {
    city: string;
    geo: {
      lat: number;
      lng: number;
    };
    street: string;
    suite: string;
    zipcode: number;
  };
  company: {
    bs: string;
    catchPhrase: string;
    name: string;
  };
  email: string;
  id: number;
  name: string;
  phone: number;
  username: string;
  website: string;
// };
}
export interface AppStateInterface {
  apireducer: ApiStateInterface[];
}
export interface ApiStateInterface{
  loading: boolean;
  error: string;
  todo: Input[];
}
