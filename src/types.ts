export interface SiigoConfig {
  username: string;
  accessKey: string;
  baseUrl: string;
  partnerId: string;
}

export interface SiigoToken {
  access_token: string;
  expires_in: number;
  token_type: string;
  scope: string;
}

export interface SiigoCustomer {
  id?: string;
  type?: 'Customer' | 'Supplier' | 'Other';
  person_type: 'Person' | 'Company';
  id_type: string;
  identification: string;
  check_digit?: string;
  name: string[];
  commercial_name?: string;
  branch_office?: number;
  active?: boolean;
  vat_responsible?: boolean;
  fiscal_responsibilities?: Array<{ code: string }>;
  address: {
    address: string;
    city: {
      country_code: string;
      state_code: string;
      city_code: string;
    };
    postal_code?: string;
  };
  phones: Array<{
    indicative?: string;
    number: string;
    extension?: string;
  }>;
  contacts: Array<{
    first_name: string;
    last_name: string;
    email: string;
    phone?: {
      indicative?: string;
      number?: string;
      extension?: string;
    };
  }>;
  comments?: string;
  related_users?: {
    seller_id?: number;
    collector_id?: number;
  };
}

export interface SiigoProduct {
  id?: string;
  code: string;
  name: string;
  account_group: number;
  type?: 'Product' | 'Service' | 'ConsumerGood';
  stock_control?: boolean;
  active?: boolean;
  tax_classification?: 'Taxed' | 'Exempt' | 'Excluded';
  tax_included?: boolean;
  tax_consumption_value?: number;
  taxes?: Array<{
    id: number;
    milliliters?: number;
    rate?: number;
  }>;
  prices?: Array<{
    currency_code: string;
    price_list: Array<{
      position: number;
      value: number;
    }>;
  }>;
  unit?: string;
  unit_label?: string;
  reference?: string;
  description?: string;
  additional_fields?: {
    barcode?: string;
    brand?: string;
    tariff?: string;
    model?: string;
  };
}

export interface SiigoInvoice {
  id?: string;
  document: {
    id: number;
    number?: number;
  };
  date: string;
  customer: {
    person_type?: string;
    id_type?: string;
    identification: string;
    branch_office?: number;
    name?: string[];
    address?: any;
    phones?: any[];
    contacts?: any[];
  };
  cost_center?: number;
  currency?: {
    code: string;
    exchange_rate: number;
  };
  seller: number;
  observations?: string;
  items: Array<{
    code: string;
    description?: string;
    quantity: number;
    price: number;
    discount?: number;
    taxes?: Array<{ id: number }>;
  }>;
  payments: Array<{
    id: number;
    value: number;
    due_date?: string;
  }>;
  stamp?: {
    send: boolean;
  };
  mail?: {
    send: boolean;
  };
  global_discounts?: Array<{
    id: number;
    percentage?: number;
    value?: number;
  }>;
  additional_fields?: any;
}

export interface SiigoApiResponse<T> {
  data?: T;
  pagination?: {
    page: number;
    page_size: number;
    total_results: number;
  };
  results?: T[];
  _links?: any;
  errors?: Array<{
    Code: string;
    Message: string;
    Params?: string[];
    Detail?: string;
  }>;
  Status?: number;
}