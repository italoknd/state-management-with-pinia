export interface Address {
  country: string;
  state: string;
  city: string;
  neighborhood: string;
  street: string;
  house_number: string | number;
  complement?: string;
}
