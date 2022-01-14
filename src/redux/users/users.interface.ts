export interface IUsers {
  id: number;
  name: string;
  username: string;
  email: string;
  address: IUserAddress;
  geo: IUsersGeolocation;
  phone: string;
  website: string;
  company: IUsersCompany;
}

export interface IUsersGeolocation {
  lat: string;
  lng: string;
}

export interface IUsersCompany {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface IUserAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
}
