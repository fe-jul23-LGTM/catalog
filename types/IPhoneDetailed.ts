import { IPhone } from './IPhone';

export interface IDescription {
  title: string;
  text: string;
}

export interface IPhoneDetailed {
  id: string;
  namespaceId: string;
  name: string;
  capacityAvailable: string[];
  capacity: string;
  priceRegular: number;
  priceDiscount: number;
  colorsAvailable: string[];
  color: string;
  images: string[];
  description: {
    title: string;
    text: string;
  }[];
  screen: string;
  resolution: string;
  processor: string;
  ram: string;
  camera: string;
  zoom: string;
  cell: string[];
}

export interface IPhoneCartResponseType {
  product: IPhone;
  selectedProduct: IPhoneDetailed;
  details: IPhoneDetailed[];
}
