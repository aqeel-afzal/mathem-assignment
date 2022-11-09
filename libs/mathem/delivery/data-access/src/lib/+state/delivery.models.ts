export interface DeliveryEntity {
  id: string | number;
  data: string;
}

export interface DeliveryDateEntity {
  id: string;
  value: string;
}

export interface DeliveryTimeEntity {
  deliveryTimeId: string;
  deliveryDate: string;
  startTime: string;
  stopTime: string;
  inHomeAvailable: boolean;
}
