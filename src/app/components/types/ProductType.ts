export interface Product {
  id: string;
  heading: string;
  subheading: string;
  image: string;
  price: {
    originalPrice: number;
    discountedPrice: number;
  };
}


export interface Cards {
  image: string;
  heading: string;
  alt: string;
  department: string;
  originalPrice: string;
  discountedPrice: string;
  detailsLink: string;
}

export interface IProducts {
  id: string;
  heading: string;
  subheading: string;
  image: {
    asset: {
      _ref: string;
      _type: string;
    };
  };
  price: {
    originalPrice: string;
    discountedPrice: string;
  };
}



// Define types for the API response
export type Address = {
  name: string;
  phone: string;
  addressLine1: string;
  addressLine2?: string;
  cityLocality: string;
  stateProvince: string;
  postalCode: string;
  countryCode: string;
  addressResidentialIndicator: "yes" | "no";
};
export type unit = "ounce" | "gram" | "kilogram" | "pound";
export type dimensionUnit = "inch" | "centimeter";

export type Package = {
  weight: {
    value: number;
    unit: unit;
  };
  dimensions: {
    height: number;
    width: number;
    length: number;
    unit: dimensionUnit;
  };
};

export type Rate = {
  rateId: string;
  rateType: string;
  carrierId: string;
  shippingAmount: {
    currency: string;
    amount: number;
  };
  serviceType: string;
  serviceCode: string;
  trackable: boolean;
  carrierFriendlyName: string;
  validationStatus: string;
  warningMessages?: string[];
};


export interface trackingObjType {
  trackingNumber: string;
  labelId: string;
  carrierCode: string;
}

export interface TrackingData {
  trackingNumber?: string;
  statusDescription?: string;
  carrierStatusDescription?: string;
  estimatedDeliveryDate?: string;
  actualDeliveryDate?: string;
}
