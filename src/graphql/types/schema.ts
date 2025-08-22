// @ts-nocheck
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
  DateTime: { input: any; output: any; }
  DateTimeUtc: { input: any; output: any; }
  Time: { input: any; output: any; }
  Upload: { input: any; output: any; }
};

/** The address. */
export type Address = {
  __typename?: 'Address';
  /** The city. */
  city: Scalars['String']['output'];
  /** The coordinates. */
  coordinates: Point;
  /** The country. */
  country: Scalars['String']['output'];
  /** The creation date and time. */
  createdAt: Scalars['DateTimeUtc']['output'];
  /** The Google Place ID. */
  googlePlaceId?: Maybe<Scalars['ID']['output']>;
  /** The address ID. */
  id: Scalars['ID']['output'];
  /** The number. */
  number: Scalars['String']['output'];
  /** The parking ID. */
  parkingId: Scalars['ID']['output'];
  /** The postcode. */
  postcode: Scalars['String']['output'];
  /** The region. */
  region: Scalars['String']['output'];
  /** The street. */
  street: Scalars['String']['output'];
  /** The address type. */
  type: AddressType;
  /** The update date and time. */
  updatedAt: Scalars['DateTimeUtc']['output'];
};

/** A paginated list of Address items. */
export type AddressPaginator = {
  __typename?: 'AddressPaginator';
  /** A list of Address items. */
  data: Array<Address>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/** The address payload. */
export type AddressPayload = {
  __typename?: 'AddressPayload';
  /** The city. */
  city: Scalars['String']['output'];
  /** The coordinates. */
  coordinates: PointPayload;
  /** The country. */
  country: Scalars['String']['output'];
  /** The creation date and time. */
  createdAt: Scalars['DateTimeUtc']['output'];
  /** The Google Place ID. */
  googlePlaceId?: Maybe<Scalars['ID']['output']>;
  /** The address ID. */
  id: Scalars['ID']['output'];
  /** The number. */
  number: Scalars['String']['output'];
  /** The parking ID. */
  parkingId: Scalars['ID']['output'];
  /** The postcode. */
  postcode: Scalars['String']['output'];
  /** The region. */
  region: Scalars['String']['output'];
  /** The street. */
  street: Scalars['String']['output'];
  /** The address type. */
  type: AddressType;
  /** The update date and time. */
  updatedAt: Scalars['DateTimeUtc']['output'];
};

/** The address types. */
export enum AddressType {
  /** The basic type. */
  Basic = 'BASIC',
  /** The entry type. */
  Entry = 'ENTRY',
  /** The exit type. */
  Exit = 'EXIT'
}

/** The availability. */
export type Availability = {
  __typename?: 'Availability';
  /** The creation date and time. */
  createdAt: Scalars['DateTimeUtc']['output'];
  /** The active days. */
  days?: Maybe<Array<Scalars['String']['output']>>;
  /** The end time. */
  endTime: Scalars['Time']['output'];
  /** The availability ID. */
  id: Scalars['ID']['output'];
  /** The name. */
  name: Scalars['String']['output'];
  /** The parking ID. */
  parkingId: Scalars['ID']['output'];
  /** The parking spot ID. */
  spotId?: Maybe<Scalars['ID']['output']>;
  /** The start time. */
  startTime: Scalars['Time']['output'];
  /** The availability type. */
  type: AvailabilityType;
  /** The update date and time. */
  updatedAt: Scalars['DateTimeUtc']['output'];
};

/** The availability filters input. */
export type AvailabilityFiltersInput = {
  /** The end time. */
  endAt?: InputMaybe<Scalars['String']['input']>;
  /** The parking ID. */
  parkingId?: InputMaybe<Scalars['ID']['input']>;
  /** The parking spot ID. */
  spotId?: InputMaybe<Scalars['ID']['input']>;
  /** The start time. */
  startAt?: InputMaybe<Scalars['String']['input']>;
  /** The availability type. */
  type?: InputMaybe<AvailabilityType>;
};

/** A paginated list of Availability items. */
export type AvailabilityPaginator = {
  __typename?: 'AvailabilityPaginator';
  /** A list of Availability items. */
  data: Array<Availability>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/** The availability payload. */
export type AvailabilityPayload = {
  __typename?: 'AvailabilityPayload';
  /** The creation date and time. */
  createdAt: Scalars['DateTimeUtc']['output'];
  /** The active days. */
  days?: Maybe<Array<Scalars['String']['output']>>;
  /** The end time. */
  endTime: Scalars['Time']['output'];
  /** The availability ID. */
  id: Scalars['ID']['output'];
  /** The name. */
  name: Scalars['String']['output'];
  /** The parking ID. */
  parkingId: Scalars['ID']['output'];
  /** The parking spot ID. */
  spotId?: Maybe<Scalars['ID']['output']>;
  /** The start time. */
  startTime: Scalars['Time']['output'];
  /** The availability type. */
  type: AvailabilityType;
  /** The update date and time. */
  updatedAt: Scalars['DateTimeUtc']['output'];
};

/** The availability types. */
export enum AvailabilityType {
  /** The available type. */
  Available = 'AVAILABLE',
  /** The unavailable type. */
  Unavailable = 'UNAVAILABLE'
}

/** The bank account. */
export type BankAccount = {
  __typename?: 'BankAccount';
  /** The currency. */
  currency?: Maybe<Scalars['String']['output']>;
  /** The bank account ID. */
  id: Scalars['ID']['output'];
  /** The default flag. */
  isDefault: Scalars['Boolean']['output'];
  /** The name. */
  name: Scalars['String']['output'];
  /** The account number. */
  number: Scalars['String']['output'];
  /** The verification date and time. */
  verifiedAt?: Maybe<Scalars['DateTimeUtc']['output']>;
};

/** A paginated list of BankAccount items. */
export type BankAccountPaginator = {
  __typename?: 'BankAccountPaginator';
  /** A list of BankAccount items. */
  data: Array<BankAccount>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/** The bank account payload. */
export type BankAccountPayload = {
  __typename?: 'BankAccountPayload';
  /** The currency. */
  currency?: Maybe<Scalars['String']['output']>;
  /** The bank account ID. */
  id: Scalars['ID']['output'];
  /** The default flag. */
  isDefault: Scalars['Boolean']['output'];
  /** The name. */
  name: Scalars['String']['output'];
  /** The account number. */
  number: Scalars['String']['output'];
  /** The verification date and time. */
  verifiedAt?: Maybe<Scalars['DateTimeUtc']['output']>;
};

/** The billing. */
export type Billing = {
  __typename?: 'Billing';
  /** The apartment number. */
  apartmentNumber?: Maybe<Scalars['String']['output']>;
  /** The bank account ID. */
  bankAccountId?: Maybe<Scalars['ID']['output']>;
  /** The building number. */
  buildingNumber?: Maybe<Scalars['String']['output']>;
  /** The city. */
  city?: Maybe<Scalars['String']['output']>;
  /** The creation date and time. */
  createdAt?: Maybe<Scalars['DateTimeUtc']['output']>;
  /** The billing currency. */
  currency: PaymentCurrency;
  /** The earned balance. */
  earnedBalance: Scalars['Int']['output'];
  /** The billing ID. */
  id: Scalars['ID']['output'];
  /** The invoice email. */
  invoiceEmail?: Maybe<Scalars['String']['output']>;
  /** The default flag. */
  isDefault: Scalars['Boolean']['output'];
  /** The monthly billing flag. */
  isMonthlyBilling: Scalars['Boolean']['output'];
  /** The VAT invoice request flag. */
  isVatInvoiceRequested: Scalars['Boolean']['output'];
  /** The entity name. */
  name: Scalars['String']['output'];
  /** The postcode. */
  postcode?: Maybe<Scalars['String']['output']>;
  /** The street. */
  street?: Maybe<Scalars['String']['output']>;
  /** The update date and time. */
  updatedAt?: Maybe<Scalars['DateTimeUtc']['output']>;
  /** The VAT number. */
  vatNumber?: Maybe<Scalars['String']['output']>;
  /** The verification date and time. */
  verifiedAt?: Maybe<Scalars['DateTimeUtc']['output']>;
  /** The withdrawable balance. */
  withdrawableBalance: Scalars['Int']['output'];
  /** The withdrawn balance. */
  withdrawnBalance: Scalars['Int']['output'];
};

/** A paginated list of Billing items. */
export type BillingPaginator = {
  __typename?: 'BillingPaginator';
  /** A list of Billing items. */
  data: Array<Billing>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/** The billing payload. */
export type BillingPayload = {
  __typename?: 'BillingPayload';
  /** The apartment number. */
  apartmentNumber?: Maybe<Scalars['String']['output']>;
  /** The bank account ID. */
  bankAccountId?: Maybe<Scalars['ID']['output']>;
  /** The building number. */
  buildingNumber?: Maybe<Scalars['String']['output']>;
  /** The city. */
  city?: Maybe<Scalars['String']['output']>;
  /** The creation date and time. */
  createdAt?: Maybe<Scalars['DateTimeUtc']['output']>;
  /** The billing currency. */
  currency: PaymentCurrency;
  /** The earned balance. */
  earnedBalance: Scalars['Int']['output'];
  /** The billing ID. */
  id: Scalars['ID']['output'];
  /** The invoice email. */
  invoiceEmail?: Maybe<Scalars['String']['output']>;
  /** The default flag. */
  isDefault: Scalars['Boolean']['output'];
  /** The monthly billing flag. */
  isMonthlyBilling: Scalars['Boolean']['output'];
  /** The VAT invoice request flag. */
  isVatInvoiceRequested: Scalars['Boolean']['output'];
  /** The entity name. */
  name: Scalars['String']['output'];
  /** The postcode. */
  postcode?: Maybe<Scalars['String']['output']>;
  /** The street. */
  street?: Maybe<Scalars['String']['output']>;
  /** The update date and time. */
  updatedAt?: Maybe<Scalars['DateTimeUtc']['output']>;
  /** The VAT number. */
  vatNumber?: Maybe<Scalars['String']['output']>;
  /** The verification date and time. */
  verifiedAt?: Maybe<Scalars['DateTimeUtc']['output']>;
  /** The withdrawable balance. */
  withdrawableBalance: Scalars['Int']['output'];
  /** The withdrawn balance. */
  withdrawnBalance: Scalars['Int']['output'];
};

/** The blik. */
export type Blik = {
  __typename?: 'Blik';
  /** The creation date and time. */
  createdAt: Scalars['DateTimeUtc']['output'];
  /** The expires date and time. */
  expiresAt: Scalars['DateTimeUtc']['output'];
  /** The blik ID. */
  id: Scalars['ID']['output'];
  /** The label. */
  label: Scalars['String']['output'];
  /** The update date and time. */
  updatedAt: Scalars['DateTimeUtc']['output'];
};

/** The button. */
export type Button = {
  __typename?: 'Button';
  /** The creation date and time. */
  createdAt?: Maybe<Scalars['DateTimeUtc']['output']>;
  /** The button ID. */
  id: Scalars['ID']['output'];
  /** The label. */
  label: ButtonLabel;
  /** The name. */
  name?: Maybe<Scalars['String']['output']>;
  /** The pilot ID. */
  pilotId: Scalars['ID']['output'];
  /** The update date and time. */
  updatedAt?: Maybe<Scalars['DateTimeUtc']['output']>;
  /** The button's user. */
  user: User;
};

/** The gete remote button labels. */
export enum ButtonLabel {
  /** The A label. */
  A = 'A',
  /** The B label. */
  B = 'B',
  /** The C label. */
  C = 'C',
  /** The D label. */
  D = 'D'
}

/** The button payload. */
export type ButtonPayload = {
  __typename?: 'ButtonPayload';
  /** The creation date and time. */
  createdAt?: Maybe<Scalars['DateTimeUtc']['output']>;
  /** The button ID. */
  id: Scalars['ID']['output'];
  /** The label. */
  label: ButtonLabel;
  /** The name. */
  name?: Maybe<Scalars['String']['output']>;
  /** The pilot ID. */
  pilotId: Scalars['ID']['output'];
  /** The update date and time. */
  updatedAt?: Maybe<Scalars['DateTimeUtc']['output']>;
  /** The user ID. */
  userId: Scalars['ID']['output'];
};

/** Input for changing image position. */
export type ChangeImagePositionInput = {
  /** The image ID. */
  id: Scalars['ID']['input'];
  /** The image position. */
  position: Scalars['Int']['input'];
};

/** The create address input. */
export type CreateAddressInput = {
  /** The city. */
  city: Scalars['String']['input'];
  /** The country. */
  country: Scalars['String']['input'];
  /** The Google Place ID. */
  googlePlaceId?: InputMaybe<Scalars['String']['input']>;
  /** The latitude. */
  latitude: Scalars['Float']['input'];
  /** The longitude. */
  longitude: Scalars['Float']['input'];
  /** The number. */
  number: Scalars['String']['input'];
  /** The parking ID. */
  parkingId: Scalars['ID']['input'];
  /** The postcode. */
  postcode: Scalars['String']['input'];
  /** The region. */
  region: Scalars['String']['input'];
  /** The street. */
  street: Scalars['String']['input'];
  /** The address type. */
  type: AddressType;
};

/** The create availability input. */
export type CreateAvailabilityInput = {
  /** The active days. */
  days?: InputMaybe<Array<Scalars['String']['input']>>;
  /** The end time. */
  endTime: Scalars['String']['input'];
  /** The name. */
  name: Scalars['String']['input'];
  /** The parking ID. */
  parkingId: Scalars['ID']['input'];
  /** The parking spot ID. */
  spotId?: InputMaybe<Scalars['ID']['input']>;
  /** The start time. */
  startTime: Scalars['String']['input'];
  /** The availability type. */
  type: AvailabilityType;
};

/** The create bank account input. */
export type CreateBankAccountInput = {
  /** The name. */
  name: Scalars['String']['input'];
  /** The number. */
  number: Scalars['String']['input'];
};

/** The create billing input. */
export type CreateBillingInput = {
  /** The apartment number. */
  apartmentNumber?: InputMaybe<Scalars['String']['input']>;
  /** The bank account ID. */
  bankAccountId?: InputMaybe<Scalars['ID']['input']>;
  /** The building number. */
  buildingNumber?: InputMaybe<Scalars['String']['input']>;
  /** The city. */
  city?: InputMaybe<Scalars['String']['input']>;
  /** The billing currency. */
  currency: PaymentCurrency;
  /** The invoice email. */
  invoiceEmail?: InputMaybe<Scalars['String']['input']>;
  /** The monthly billing flag. */
  isMonthlyBilling: Scalars['Boolean']['input'];
  /** The VAT invoice request flag. */
  isVatInvoiceRequested: Scalars['Boolean']['input'];
  /** The name. */
  name: Scalars['String']['input'];
  /** The postcode. */
  postcode?: InputMaybe<Scalars['String']['input']>;
  /** The street. */
  street?: InputMaybe<Scalars['String']['input']>;
  /** The VAT number. */
  vatNumber?: InputMaybe<Scalars['String']['input']>;
};

/** The create issue input. */
export type CreateIssueInput = {
  /** The description. */
  description: Scalars['String']['input'];
  /** The occurrence date and time. */
  occurredAt?: InputMaybe<Scalars['String']['input']>;
  /** The subject ID. */
  subjectableId?: InputMaybe<Scalars['ID']['input']>;
  /** The subject type. */
  subjectableType?: InputMaybe<Scalars['String']['input']>;
  /** The title. */
  title: Scalars['String']['input'];
  /** The issue type. */
  type: IssueType;
};

/** The create many spots input. */
export type CreateManySpotsInput = {
  /** The height (cm). */
  height: Scalars['Int']['input'];
  /** The length (cm). */
  length: Scalars['Int']['input'];
  /** The number. */
  number?: InputMaybe<Scalars['String']['input']>;
  /** The parking ID. */
  parkingId: Scalars['ID']['input'];
  /** The quantity. */
  quantity: Scalars['Int']['input'];
  /** The width (cm). */
  width: Scalars['Int']['input'];
};

/** The create organization input. */
export type CreateOrganizationInput = {
  /** The description. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** The name. */
  name: Scalars['String']['input'];
  /** The organization type. */
  type: OrganizationType;
};

/** The create parking input. */
export type CreateParkingInput = {
  /** The billing ID. */
  billingId?: InputMaybe<Scalars['ID']['input']>;
  /** The weekend end day. */
  calendarWeekendEndDay?: InputMaybe<Scalars['Int']['input']>;
  /** The weekend end time. */
  calendarWeekendEndTime?: InputMaybe<Scalars['String']['input']>;
  /** The weekend start day. */
  calendarWeekendStartDay?: InputMaybe<Scalars['Int']['input']>;
  /** The weekend start time. */
  calendarWeekendStartTime?: InputMaybe<Scalars['String']['input']>;
  /** The height (cm). */
  height: Scalars['Int']['input'];
  /** Organization parking flag. */
  isOrganizationParking?: InputMaybe<Scalars['Boolean']['input']>;
  /** The length (cm). */
  length: Scalars['Int']['input'];
  /** The name. */
  name: Scalars['String']['input'];
  /** The note. */
  note?: InputMaybe<Scalars['String']['input']>;
  /** The organization ID. */
  organizationId?: InputMaybe<Scalars['ID']['input']>;
  /** The terms acceptance. */
  terms: Scalars['Boolean']['input'];
  /** The width (cm). */
  width: Scalars['Int']['input'];
};

/** The create pilot input. */
export type CreatePilotInput = {
  /** The name. */
  name: Scalars['String']['input'];
};

/** The create price input. */
export type CreatePriceInput = {
  /** The active days. */
  days?: InputMaybe<Array<Scalars['String']['input']>>;
  /** The end time. */
  endTime: Scalars['String']['input'];
  /** The name. */
  name: Scalars['String']['input'];
  /** The parking ID. */
  parkingId: Scalars['ID']['input'];
  /** The price period. */
  period: PricePeriod;
  /** The first period price (cents). */
  priceFirstPeriod: Scalars['Int']['input'];
  /** The next periods price (cents). */
  priceNextPeriods: Scalars['Int']['input'];
  /** The parking spot ID. */
  spotId?: InputMaybe<Scalars['ID']['input']>;
  /** The start time. */
  startTime: Scalars['String']['input'];
};

/** The create spot input. */
export type CreateSpotInput = {
  /** The height (cm). */
  height: Scalars['Int']['input'];
  /** The length (cm). */
  length: Scalars['Int']['input'];
  /** The number. */
  number: Scalars['String']['input'];
  /** The parking ID. */
  parkingId: Scalars['ID']['input'];
  /** The width (cm). */
  width: Scalars['Int']['input'];
};

/** The create vehicle input. */
export type CreateVehicleInput = {
  /** The billing ID. */
  billingId?: InputMaybe<Scalars['ID']['input']>;
  /** The name. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** The registration number. */
  registrationNumber: Scalars['String']['input'];
};

/** The email verification response. */
export type EmailVerificationResponse = {
  __typename?: 'EmailVerificationResponse';
  /** The verification status. */
  status: EmailVerificationStatus;
};

/** The email verification statuses. */
export enum EmailVerificationStatus {
  /** The verified email status. */
  Verified = 'VERIFIED'
}

/** The estimate parking reservation amount input. */
export type EstimateParkingReservationAmountInput = {
  /** The billing ID. */
  billingId?: InputMaybe<Scalars['ID']['input']>;
  /** The custom end time. */
  customEndAt?: InputMaybe<Scalars['DateTimeUtc']['input']>;
  /** The parking ID. */
  parkingId: Scalars['ID']['input'];
  /** The rental period. */
  rentalPeriod: ReservationRentalPeriod;
  /** The spot ID. */
  spotId?: InputMaybe<Scalars['ID']['input']>;
  /** The start time. */
  startAt?: InputMaybe<Scalars['DateTimeUtc']['input']>;
};

/** The estimate parking reservation amount payload. */
export type EstimateParkingReservationAmountPayload = {
  __typename?: 'EstimateParkingReservationAmountPayload';
  /** The estimate reservation amount. */
  amount: Scalars['Int']['output'];
};

/** The extend reservation input. */
export type ExtendReservationInput = {
  /** The Blik remember flag. */
  blikRemember?: InputMaybe<Scalars['Boolean']['input']>;
  /** The Blik token. */
  blikToken?: InputMaybe<Scalars['String']['input']>;
  /** The custom end time. */
  customEndAt?: InputMaybe<Scalars['DateTimeUtc']['input']>;
  /** The reservation ID. */
  id: Scalars['ID']['input'];
  /** The payment method. */
  paymentMethod: PaymentMethod;
  /** The rental period. */
  rentalPeriod: ReservationRentalPeriod;
};

/** The forgot password input. */
export type ForgotPasswordInput = {
  /** The email. */
  email: Scalars['String']['input'];
  /** The reset password URL. */
  resetPasswordUrl?: InputMaybe<ResetPasswordUrlInput>;
};

/** The forgot password response. */
export type ForgotPasswordResponse = {
  __typename?: 'ForgotPasswordResponse';
  /** The reset message. */
  message?: Maybe<Scalars['String']['output']>;
  /** The reset status. */
  status: ForgotPasswordStatus;
};

/** The forgot password statuses. */
export enum ForgotPasswordStatus {
  /** The sent email status. */
  EmailSent = 'EMAIL_SENT'
}

/** The authentication token response. */
export type GenerateAuthenticationTokenResponse = {
  __typename?: 'GenerateAuthenticationTokenResponse';
  /** The authentication token. */
  token: Scalars['String']['output'];
};

/** The image. */
export type Image = {
  __typename?: 'Image';
  /** The creation date and time. */
  createdAt: Scalars['DateTimeUtc']['output'];
  /** The image ID. */
  id: Scalars['ID']['output'];
  /** The resource ID. */
  imageableId: Scalars['ID']['output'];
  /** The resource type. */
  imageableType: Resource;
  /** The primary flag. */
  isPrimary: Scalars['Boolean']['output'];
  /** The large image URL. */
  largePath?: Maybe<Scalars['String']['output']>;
  /** The medium image URL. */
  mediumPath?: Maybe<Scalars['String']['output']>;
  /** The original image URL. */
  originalPath: Scalars['String']['output'];
  /** The position. */
  position: Scalars['Int']['output'];
  /** The small image URL. */
  smallPath?: Maybe<Scalars['String']['output']>;
  /** The image status. */
  status: ImageStatus;
  /** The update date and time. */
  updatedAt: Scalars['DateTimeUtc']['output'];
};

/** The image filters input. */
export type ImageFiltersInput = {
  /** The resource type. */
  resource: Resource;
  /** The resource ID. */
  resourceId: Scalars['ID']['input'];
};

/** A paginated list of Image items. */
export type ImagePaginator = {
  __typename?: 'ImagePaginator';
  /** A list of Image items. */
  data: Array<Image>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/** The image payload. */
export type ImagePayload = {
  __typename?: 'ImagePayload';
  /** The creation date and time. */
  createdAt: Scalars['DateTimeUtc']['output'];
  /** The image ID. */
  id: Scalars['ID']['output'];
  /** The resource ID. */
  imageableId: Scalars['ID']['output'];
  /** The resource type. */
  imageableType: Resource;
  /** The primary flag. */
  isPrimary: Scalars['Boolean']['output'];
  /** The large image URL. */
  largePath?: Maybe<Scalars['String']['output']>;
  /** The medium image URL. */
  mediumPath?: Maybe<Scalars['String']['output']>;
  /** The original image URL. */
  originalPath: Scalars['String']['output'];
  /** The position. */
  position: Scalars['Int']['output'];
  /** The small image URL. */
  smallPath?: Maybe<Scalars['String']['output']>;
  /** The image status. */
  status: ImageStatus;
  /** The update date and time. */
  updatedAt: Scalars['DateTimeUtc']['output'];
};

/** The image sizes. */
export enum ImageSize {
  /** The large size. */
  Large = 'LARGE',
  /** The medium size. */
  Medium = 'MEDIUM',
  /** The small size. */
  Small = 'SMALL'
}

/** The image statuses. */
export enum ImageStatus {
  /** The converted status. */
  Converted = 'CONVERTED',
  /** The uploaded status. */
  Uploaded = 'UPLOADED'
}

/** The issue. */
export type Issue = {
  __typename?: 'Issue';
  /** The creation date and time. */
  createdAt?: Maybe<Scalars['DateTimeUtc']['output']>;
  /** The description. */
  description: Scalars['String']['output'];
  /** The issue ID. */
  id: Scalars['ID']['output'];
  /** The issue's images. */
  images?: Maybe<Array<Image>>;
  /** The issue number. */
  number: Scalars['String']['output'];
  /** The occurrence date and time. */
  occurredAt?: Maybe<Scalars['DateTimeUtc']['output']>;
  /** The issue's primary image. */
  primaryImage?: Maybe<Image>;
  /** The reason. */
  reason?: Maybe<Scalars['String']['output']>;
  /** The report date and time. */
  reportedAt?: Maybe<Scalars['DateTimeUtc']['output']>;
  /** The resolution date and time. */
  resolvedAt?: Maybe<Scalars['DateTimeUtc']['output']>;
  /** The issue status. */
  status: IssueStatus;
  /** The subject ID. */
  subjectableId?: Maybe<Scalars['ID']['output']>;
  /** The subject type. */
  subjectableType?: Maybe<Scalars['String']['output']>;
  /** The title. */
  title: Scalars['String']['output'];
  /** The issue type. */
  type: IssueType;
  /** The update date and time. */
  updatedAt?: Maybe<Scalars['DateTimeUtc']['output']>;
  /** The issue's user. */
  user: User;
};

/** The issue filters input. */
export type IssueFiltersInput = {
  number?: InputMaybe<Scalars['String']['input']>;
  /** The issue status. */
  status?: InputMaybe<IssueStatus>;
  /** The subject ID. */
  subjectableId?: InputMaybe<Scalars['ID']['input']>;
  /** The subject type. */
  subjectableType?: InputMaybe<Scalars['String']['input']>;
  /** The issue type. */
  type?: InputMaybe<IssueType>;
};

/** A paginated list of Issue items. */
export type IssuePaginator = {
  __typename?: 'IssuePaginator';
  /** A list of Issue items. */
  data: Array<Issue>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/** The issue payload. */
export type IssuePayload = {
  __typename?: 'IssuePayload';
  /** The creation date and time. */
  createdAt?: Maybe<Scalars['DateTimeUtc']['output']>;
  /** The description. */
  description: Scalars['String']['output'];
  /** The issue ID. */
  id: Scalars['ID']['output'];
  /** The issue number. */
  number: Scalars['String']['output'];
  /** The occurrence date and time. */
  occurredAt?: Maybe<Scalars['DateTimeUtc']['output']>;
  /** The reason. */
  reason?: Maybe<Scalars['String']['output']>;
  /** The report date and time. */
  reportedAt?: Maybe<Scalars['DateTimeUtc']['output']>;
  /** The resolution date and time. */
  resolvedAt?: Maybe<Scalars['DateTimeUtc']['output']>;
  /** The issue status. */
  status: IssueStatus;
  /** The subject ID. */
  subjectableId?: Maybe<Scalars['ID']['output']>;
  /** The subject type. */
  subjectableType?: Maybe<Scalars['String']['output']>;
  /** The title. */
  title: Scalars['String']['output'];
  /** The issue type. */
  type: IssueType;
  /** The update date and time. */
  updatedAt?: Maybe<Scalars['DateTimeUtc']['output']>;
  /** The user ID. */
  userId: Scalars['ID']['output'];
};

/** The issue statuses. */
export enum IssueStatus {
  /** The closed status. */
  Closed = 'CLOSED',
  /** The in progress status. */
  InProgress = 'IN_PROGRESS',
  /** The pending status. */
  Pending = 'PENDING',
  /** The resolved status. */
  Resolved = 'RESOLVED'
}

/** The issue types. */
export enum IssueType {
  /** The account type. */
  AccountIssue = 'ACCOUNT_ISSUE',
  /** The closed parking type. */
  ClosedParking = 'CLOSED_PARKING',
  /** The occupied spot type. */
  OccupiedSpot = 'OCCUPIED_SPOT',
  /** The other type. */
  Other = 'OTHER',
  /** The payment type. */
  PaymentIssue = 'PAYMENT_ISSUE',
  /** The refund claim type. */
  RefundClaim = 'REFUND_CLAIM',
  /** The terms violation type. */
  TermsViolation = 'TERMS_VIOLATION',
  /** The user complaint type. */
  UserComplaint = 'USER_COMPLAINT'
}

/** The languages. */
export enum Language {
  /** The English language. */
  English = 'ENGLISH',
  /** The Polish language. */
  Polish = 'POLISH'
}

/** The login response. */
export type LoginResponse = {
  __typename?: 'LoginResponse';
  /** The authentication token. */
  token?: Maybe<Scalars['String']['output']>;
};

/** The logout response. */
export type LogoutResponse = {
  __typename?: 'LogoutResponse';
  /** The logout status. */
  status: Scalars['String']['output'];
};

/** The organization member roles. */
export enum MemberRole {
  /** The administrator role. */
  Administrator = 'ADMINISTRATOR',
  /** The member role. */
  Member = 'MEMBER',
  /** The owner role. */
  Owner = 'OWNER'
}

/** The membership. */
export type Membership = {
  __typename?: 'Membership';
  /** The creation date and time. */
  createdAt?: Maybe<Scalars['DateTimeUtc']['output']>;
  /** The membership's organization. */
  organization: Organization;
  /** The member role. */
  role: MemberRole;
  /** The update date and time. */
  updatedAt?: Maybe<Scalars['DateTimeUtc']['output']>;
  /** The membership's user. */
  user: User;
};

/** The membership filters input. */
export type MembershipFiltersInput = {
  /** The user ID. */
  userId: Scalars['ID']['input'];
};

/** A paginated list of Membership items. */
export type MembershipPaginator = {
  __typename?: 'MembershipPaginator';
  /** A list of Membership items. */
  data: Array<Membership>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/** The fields available for modifying data through mutations. */
export type Mutation = {
  __typename?: 'Mutation';
  /** Activates the pilot. */
  activatePilot: PilotPayload;
  /** Sets the vehicle status as active. */
  activateVehicle?: Maybe<VehiclePayload>;
  /** Changes the image position. */
  changeImagePosition: Scalars['ID']['output'];
  /** Completes the current reservation */
  completeReservation: ReservationPayload;
  /** Creates an address. */
  createAddress?: Maybe<AddressPayload>;
  /** Creates an availability. */
  createAvailability?: Maybe<AvailabilityPayload>;
  /** Creates a bank account. */
  createBankAccount?: Maybe<BankAccountPayload>;
  /** Creates a billing. */
  createBilling: BillingPayload;
  /** Creates an issue. */
  createIssue?: Maybe<IssuePayload>;
  /** Creates multiple spots. */
  createManySpots: Array<SpotPayload>;
  /** Creates an organization. */
  createOrganization?: Maybe<OrganizationPayload>;
  /** Creates a parking. */
  createParking?: Maybe<ParkingPayload>;
  /** Creates the pilot. */
  createPilot: PilotPayload;
  /** Creates a price. */
  createPrice?: Maybe<PricePayload>;
  /** Creates a spot. */
  createSpot?: Maybe<SpotPayload>;
  /** Creates a vehicle. */
  createVehicle?: Maybe<VehiclePayload>;
  /** Deactivates the parking. */
  deactivateParking?: Maybe<ParkingPayload>;
  /** Deactivates the pilot. */
  deactivatePilot: PilotPayload;
  /** Sets the vehicle status as inactive. */
  deactivateVehicle?: Maybe<VehiclePayload>;
  /** Deletes the address. */
  deleteAddress?: Maybe<Address>;
  /** Deletes the availability. */
  deleteAvailability?: Maybe<Availability>;
  /** Deletes the bank account. */
  deleteBankAccount?: Maybe<BankAccount>;
  /** Deletes the billing. */
  deleteBilling?: Maybe<Billing>;
  /** Deletes the image. */
  deleteImage: Scalars['ID']['output'];
  /** Deletes the parking. */
  deleteParking?: Maybe<Parking>;
  /** Deletes the pilot. */
  deletePilot: Pilot;
  /** Deletes the price. */
  deletePrice: Scalars['ID']['output'];
  /** Deletes the spot. */
  deleteSpot?: Maybe<Spot>;
  /** Estimates the amount for parking reservation */
  estimateParkingReservationAmount?: Maybe<EstimateParkingReservationAmountPayload>;
  /** Extends the existing parking reservation. */
  extendReservation?: Maybe<ReservationResponsePayload>;
  /** Starts the password reset. */
  forgotPassword: ForgotPasswordResponse;
  /** Generates an authentication token. */
  generateAuthenticationToken: GenerateAuthenticationTokenResponse;
  /** Authenticates a user. */
  loginUser: LoginResponse;
  /** Authenticates a user with a token. */
  loginUserWithToken: LoginResponse;
  /** Logs out the user. */
  logoutUser: LogoutResponse;
  /** Marks the bank account as default. */
  markBankAccountAsDefault?: Maybe<BankAccountPayload>;
  /** Marks the pilot as default. */
  markPilotAsDefault: PilotPayload;
  /** Marks the vehicle as primary. */
  markVehicleAsPrimary?: Maybe<VehiclePayload>;
  /** Registers a user. */
  registerUser?: Maybe<RegisterResponse>;
  /** Requests a balance top-up. */
  requestBalanceTopUp?: Maybe<PaymentPayload>;
  /** Resends the email verification. */
  resendEmailVerification: ResendEmailVerificationResponse;
  /** Reserves any available parking spot on the given parking. */
  reserveParking?: Maybe<ReservationResponsePayload>;
  /** Reserves the given parking spot. */
  reserveParkingSpot?: Maybe<ReservationResponsePayload>;
  /** Resets the password. */
  resetPassword: ResetPasswordResponse;
  /** Retries the parking verification. */
  retryParkingVerification?: Maybe<ParkingPayload>;
  /** Marks the image as primary. */
  setPrimaryImage: Scalars['ID']['output'];
  /** Updates the billing. */
  updateBilling?: Maybe<BillingPayload>;
  /** Updates the button. */
  updateButton: ButtonPayload;
  /** Updates the parking. */
  updateParking?: Maybe<Parking>;
  /** Updates the password. */
  updatePassword: UpdatePasswordResponse;
  /** Updates the pilot. */
  updatePilot: PilotPayload;
  /** Updates the spot. */
  updateSpot?: Maybe<Spot>;
  /** Updates the vehicle. */
  updateVehicle?: Maybe<VehiclePayload>;
  /** Uploads an image. */
  uploadImage: Scalars['String']['output'];
  /** Uploads multiple images. */
  uploadMultipleImages: Scalars['String']['output'];
  /** Verifies the email. */
  verifyEmail: EmailVerificationResponse;
};


/** The fields available for modifying data through mutations. */
export type MutationActivatePilotArgs = {
  id: Scalars['ID']['input'];
};


/** The fields available for modifying data through mutations. */
export type MutationActivateVehicleArgs = {
  id: Scalars['ID']['input'];
};


/** The fields available for modifying data through mutations. */
export type MutationChangeImagePositionArgs = {
  input: ChangeImagePositionInput;
};


/** The fields available for modifying data through mutations. */
export type MutationCompleteReservationArgs = {
  id: Scalars['ID']['input'];
};


/** The fields available for modifying data through mutations. */
export type MutationCreateAddressArgs = {
  input: CreateAddressInput;
};


/** The fields available for modifying data through mutations. */
export type MutationCreateAvailabilityArgs = {
  input: CreateAvailabilityInput;
};


/** The fields available for modifying data through mutations. */
export type MutationCreateBankAccountArgs = {
  input: CreateBankAccountInput;
};


/** The fields available for modifying data through mutations. */
export type MutationCreateBillingArgs = {
  input: CreateBillingInput;
};


/** The fields available for modifying data through mutations. */
export type MutationCreateIssueArgs = {
  input: CreateIssueInput;
};


/** The fields available for modifying data through mutations. */
export type MutationCreateManySpotsArgs = {
  input: CreateManySpotsInput;
};


/** The fields available for modifying data through mutations. */
export type MutationCreateOrganizationArgs = {
  input: CreateOrganizationInput;
};


/** The fields available for modifying data through mutations. */
export type MutationCreateParkingArgs = {
  input: CreateParkingInput;
};


/** The fields available for modifying data through mutations. */
export type MutationCreatePilotArgs = {
  input: CreatePilotInput;
};


/** The fields available for modifying data through mutations. */
export type MutationCreatePriceArgs = {
  input: CreatePriceInput;
};


/** The fields available for modifying data through mutations. */
export type MutationCreateSpotArgs = {
  input: CreateSpotInput;
};


/** The fields available for modifying data through mutations. */
export type MutationCreateVehicleArgs = {
  input: CreateVehicleInput;
};


/** The fields available for modifying data through mutations. */
export type MutationDeactivateParkingArgs = {
  id: Scalars['ID']['input'];
};


/** The fields available for modifying data through mutations. */
export type MutationDeactivatePilotArgs = {
  id: Scalars['ID']['input'];
};


/** The fields available for modifying data through mutations. */
export type MutationDeactivateVehicleArgs = {
  id: Scalars['ID']['input'];
};


/** The fields available for modifying data through mutations. */
export type MutationDeleteAddressArgs = {
  id: Scalars['ID']['input'];
};


/** The fields available for modifying data through mutations. */
export type MutationDeleteAvailabilityArgs = {
  id: Scalars['ID']['input'];
};


/** The fields available for modifying data through mutations. */
export type MutationDeleteBankAccountArgs = {
  id: Scalars['ID']['input'];
};


/** The fields available for modifying data through mutations. */
export type MutationDeleteBillingArgs = {
  id: Scalars['ID']['input'];
};


/** The fields available for modifying data through mutations. */
export type MutationDeleteImageArgs = {
  id: Scalars['ID']['input'];
};


/** The fields available for modifying data through mutations. */
export type MutationDeleteParkingArgs = {
  id: Scalars['ID']['input'];
};


/** The fields available for modifying data through mutations. */
export type MutationDeletePilotArgs = {
  id: Scalars['ID']['input'];
};


/** The fields available for modifying data through mutations. */
export type MutationDeletePriceArgs = {
  id: Scalars['ID']['input'];
};


/** The fields available for modifying data through mutations. */
export type MutationDeleteSpotArgs = {
  id: Scalars['ID']['input'];
};


/** The fields available for modifying data through mutations. */
export type MutationEstimateParkingReservationAmountArgs = {
  input: EstimateParkingReservationAmountInput;
};


/** The fields available for modifying data through mutations. */
export type MutationExtendReservationArgs = {
  input: ExtendReservationInput;
};


/** The fields available for modifying data through mutations. */
export type MutationForgotPasswordArgs = {
  input: ForgotPasswordInput;
};


/** The fields available for modifying data through mutations. */
export type MutationLoginUserArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


/** The fields available for modifying data through mutations. */
export type MutationLoginUserWithTokenArgs = {
  token: Scalars['String']['input'];
};


/** The fields available for modifying data through mutations. */
export type MutationMarkBankAccountAsDefaultArgs = {
  id: Scalars['ID']['input'];
};


/** The fields available for modifying data through mutations. */
export type MutationMarkPilotAsDefaultArgs = {
  id: Scalars['ID']['input'];
};


/** The fields available for modifying data through mutations. */
export type MutationMarkVehicleAsPrimaryArgs = {
  id: Scalars['ID']['input'];
};


/** The fields available for modifying data through mutations. */
export type MutationRegisterUserArgs = {
  email: Scalars['String']['input'];
  language: Language;
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  terms: Scalars['Boolean']['input'];
};


/** The fields available for modifying data through mutations. */
export type MutationRequestBalanceTopUpArgs = {
  input: TopUpAccountBalanceUpInput;
};


/** The fields available for modifying data through mutations. */
export type MutationResendEmailVerificationArgs = {
  input: ResendEmailVerificationInput;
};


/** The fields available for modifying data through mutations. */
export type MutationReserveParkingArgs = {
  input: ReserveParkingInput;
};


/** The fields available for modifying data through mutations. */
export type MutationReserveParkingSpotArgs = {
  input: ReserveParkingSpotInput;
};


/** The fields available for modifying data through mutations. */
export type MutationResetPasswordArgs = {
  input: ResetPasswordInput;
};


/** The fields available for modifying data through mutations. */
export type MutationRetryParkingVerificationArgs = {
  id: Scalars['ID']['input'];
};


/** The fields available for modifying data through mutations. */
export type MutationSetPrimaryImageArgs = {
  id: Scalars['ID']['input'];
};


/** The fields available for modifying data through mutations. */
export type MutationUpdateBillingArgs = {
  input: UpdateBillingInput;
};


/** The fields available for modifying data through mutations. */
export type MutationUpdateButtonArgs = {
  input: UpdateButtonInput;
};


/** The fields available for modifying data through mutations. */
export type MutationUpdateParkingArgs = {
  input: UpdateParkingInput;
};


/** The fields available for modifying data through mutations. */
export type MutationUpdatePasswordArgs = {
  input: UpdatePasswordInput;
};


/** The fields available for modifying data through mutations. */
export type MutationUpdatePilotArgs = {
  input: UpdatePilotInput;
};


/** The fields available for modifying data through mutations. */
export type MutationUpdateSpotArgs = {
  input: UpdateSpotInput;
};


/** The fields available for modifying data through mutations. */
export type MutationUpdateVehicleArgs = {
  input: UpdateVehicleInput;
};


/** The fields available for modifying data through mutations. */
export type MutationUploadImageArgs = {
  input: UploadImageInput;
};


/** The fields available for modifying data through mutations. */
export type MutationUploadMultipleImagesArgs = {
  input: UploadMultipleImagesInput;
};


/** The fields available for modifying data through mutations. */
export type MutationVerifyEmailArgs = {
  input: VerifyEmailInput;
};

/** The order. */
export type Order = {
  __typename?: 'Order';
  /** The creation date and time. */
  createdAt?: Maybe<Scalars['DateTimeUtc']['output']>;
  /** The currency. */
  currency: PaymentCurrency;
  /** The gross amount. */
  grossAmount: Scalars['Int']['output'];
  /** The order ID. */
  id: Scalars['ID']['output'];
  /** The net amount. */
  netAmount: Scalars['Int']['output'];
  /** The order number. */
  number: Scalars['String']['output'];
  /** The order's payment. */
  payment?: Maybe<Payment>;
  /** The product type. */
  product: OrderProduct;
  /** The reservation ID. */
  reservationId: Scalars['ID']['output'];
  /** The order status. */
  status: OrderStatus;
  /** The update date and time. */
  updatedAt?: Maybe<Scalars['DateTimeUtc']['output']>;
  /** The VAT amount. */
  vatAmount: Scalars['Int']['output'];
  /** The VAT rate. */
  vatRate: Scalars['Int']['output'];
};

/** Allows ordering a list of records. */
export type OrderByClause = {
  /** The column that is used for ordering. */
  column: Scalars['String']['input'];
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Aggregate functions when ordering by a relation without specifying a column. */
export enum OrderByRelationAggregateFunction {
  /** Amount of items. */
  Count = 'COUNT'
}

/** Aggregate functions when ordering by a relation that may specify a column. */
export enum OrderByRelationWithColumnAggregateFunction {
  /** Average. */
  Avg = 'AVG',
  /** Amount of items. */
  Count = 'COUNT',
  /** Maximum. */
  Max = 'MAX',
  /** Minimum. */
  Min = 'MIN',
  /** Sum. */
  Sum = 'SUM'
}

/** A paginated list of Order items. */
export type OrderPaginator = {
  __typename?: 'OrderPaginator';
  /** A list of Order items. */
  data: Array<Order>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/** The order products. */
export enum OrderProduct {
  /** The balance top-up product. */
  BalanceTopUp = 'BALANCE_TOP_UP',
  /** The parking spot rental product. */
  ParkingSpotRental = 'PARKING_SPOT_RENTAL',
  /** The parking spot rental extension product. */
  ParkingSpotRentalExtension = 'PARKING_SPOT_RENTAL_EXTENSION'
}

/** The order statuses. */
export enum OrderStatus {
  /** The cancelled status. */
  Cancelled = 'CANCELLED',
  /** The completed status. */
  Completed = 'COMPLETED',
  /** The fulfilled status. */
  Fulfilled = 'FULFILLED',
  /** The paid status. */
  Paid = 'PAID',
  /** The placed status. */
  Placed = 'PLACED'
}

/** The organization. */
export type Organization = {
  __typename?: 'Organization';
  /** The creation date and time. */
  createdAt: Scalars['DateTimeUtc']['output'];
  /** The description. */
  description?: Maybe<Scalars['String']['output']>;
  /** The organization ID. */
  id: Scalars['ID']['output'];
  /** The name. */
  name: Scalars['String']['output'];
  /** The status. */
  status: OrganizationStatus;
  /** The type. */
  type: OrganizationType;
  /** The update date and time. */
  updatedAt: Scalars['DateTimeUtc']['output'];
};

/** A paginated list of Organization items. */
export type OrganizationPaginator = {
  __typename?: 'OrganizationPaginator';
  /** A list of Organization items. */
  data: Array<Organization>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/** The organization payload. */
export type OrganizationPayload = {
  __typename?: 'OrganizationPayload';
  /** The creation date and time. */
  createdAt: Scalars['DateTimeUtc']['output'];
  /** The description. */
  description?: Maybe<Scalars['String']['output']>;
  /** The organization ID. */
  id: Scalars['ID']['output'];
  /** The name. */
  name: Scalars['String']['output'];
  /** The status. */
  status: OrganizationStatus;
  /** The type. */
  type: OrganizationType;
  /** The update date and time. */
  updatedAt: Scalars['DateTimeUtc']['output'];
};

/** The organization statuses. */
export enum OrganizationStatus {
  /** The active status. */
  Active = 'ACTIVE',
  /** The inactive status. */
  Inactive = 'INACTIVE',
  /** The pending status. */
  Pending = 'PENDING'
}

/** The organization types. */
export enum OrganizationType {
  /** The community type. */
  Community = 'COMMUNITY',
  /** The company type. */
  Company = 'COMPANY',
  /** The other type. */
  Other = 'OTHER'
}

/** Information about pagination using a fully featured paginator. */
export type PaginatorInfo = {
  __typename?: 'PaginatorInfo';
  /** Number of items in the current page. */
  count: Scalars['Int']['output'];
  /** Index of the current page. */
  currentPage: Scalars['Int']['output'];
  /** Index of the first item in the current page. */
  firstItem?: Maybe<Scalars['Int']['output']>;
  /** Are there more pages after this one? */
  hasMorePages: Scalars['Boolean']['output'];
  /** Index of the last item in the current page. */
  lastItem?: Maybe<Scalars['Int']['output']>;
  /** Index of the last available page. */
  lastPage: Scalars['Int']['output'];
  /** Number of items per page. */
  perPage: Scalars['Int']['output'];
  /** Number of total available items. */
  total: Scalars['Int']['output'];
};

/** The parking. */
export type Parking = {
  __typename?: 'Parking';
  /** The parking's addresses. */
  addresses?: Maybe<Array<Address>>;
  /** The number of available spots. */
  availableSpots: Scalars['Int']['output'];
  /** The parking's billing. */
  billing: Billing;
  /** The weekend end day. */
  calendarWeekendEndDay?: Maybe<Scalars['Int']['output']>;
  /** The weekend end time. */
  calendarWeekendEndTime?: Maybe<Scalars['String']['output']>;
  /** The weekend start day. */
  calendarWeekendStartDay?: Maybe<Scalars['Int']['output']>;
  /** The weekend start time. */
  calendarWeekendStartTime?: Maybe<Scalars['String']['output']>;
  /** The creation date and time. */
  createdAt: Scalars['DateTimeUtc']['output'];
  /** The height. */
  height: Scalars['Int']['output'];
  /** The parking ID. */
  id: Scalars['ID']['output'];
  /** The identifier. */
  identifier: Scalars['String']['output'];
  /** The parking's images. */
  images?: Maybe<Array<Image>>;
  /** The latest verification. */
  latestVerification?: Maybe<Verification>;
  /** The length. */
  length: Scalars['Int']['output'];
  /** The name. */
  name: Scalars['String']['output'];
  /** The note. */
  note?: Maybe<Scalars['String']['output']>;
  /** The parking's primary image. */
  primaryImage?: Maybe<Image>;
  /** The parking's spots. */
  spots?: Maybe<Array<Spot>>;
  /** The parking state. */
  state: ParkingState;
  /** The parking status. */
  status: ParkingStatus;
  /** The total number of spots. */
  totalSpots: Scalars['Int']['output'];
  /** The update date and time. */
  updatedAt: Scalars['DateTimeUtc']['output'];
  /** The width. */
  width: Scalars['Int']['output'];
};

/** The parking filters input. */
export type ParkingFiltersInput = {
  /** The parking state. */
  state?: InputMaybe<ParkingState>;
  /** The parking status. */
  status?: InputMaybe<ParkingStatus>;
  /** The user ID. */
  userId?: InputMaybe<Scalars['ID']['input']>;
};

/** A paginated list of Parking items. */
export type ParkingPaginator = {
  __typename?: 'ParkingPaginator';
  /** A list of Parking items. */
  data: Array<Parking>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/** The parking payload. */
export type ParkingPayload = {
  __typename?: 'ParkingPayload';
  /** The billing ID. */
  billingId: Scalars['ID']['output'];
  /** The weekend end day. */
  calendarWeekendEndDay?: Maybe<Scalars['Int']['output']>;
  /** The weekend end time. */
  calendarWeekendEndTime?: Maybe<Scalars['String']['output']>;
  /** The weekend start day. */
  calendarWeekendStartDay?: Maybe<Scalars['Int']['output']>;
  /** The weekend start time. */
  calendarWeekendStartTime?: Maybe<Scalars['String']['output']>;
  /** The creation date and time. */
  createdAt: Scalars['DateTimeUtc']['output'];
  /** The height. */
  height: Scalars['Int']['output'];
  /** The parking ID. */
  id: Scalars['ID']['output'];
  /** The identifier. */
  identifier: Scalars['String']['output'];
  /** The length. */
  length: Scalars['Int']['output'];
  /** The name. */
  name: Scalars['String']['output'];
  /** The note. */
  note?: Maybe<Scalars['String']['output']>;
  /** The parking state. */
  state: ParkingState;
  /** The parking status. */
  status: ParkingStatus;
  /** The update date and time. */
  updatedAt: Scalars['DateTimeUtc']['output'];
  /** The width. */
  width: Scalars['Int']['output'];
};

/** The parking states. */
export enum ParkingState {
  /** The free state. */
  Free = 'FREE',
  /** The full state. */
  Full = 'FULL'
}

/** The parking statuses. */
export enum ParkingStatus {
  /** The active status. */
  Active = 'ACTIVE',
  /** The inactive status. */
  Inactive = 'INACTIVE',
  /** The pending status. */
  PendingVerification = 'PENDING_VERIFICATION',
  /** The rejected verification status. */
  RejectedVerification = 'REJECTED_VERIFICATION'
}

/** The payment. */
export type Payment = {
  __typename?: 'Payment';
  /** The amount. */
  amount: Scalars['Int']['output'];
  /** The creation date and time. */
  createdAt?: Maybe<Scalars['DateTimeUtc']['output']>;
  /** The currency. */
  currency: PaymentCurrency;
  /** The external ID. */
  externalId?: Maybe<Scalars['ID']['output']>;
  /** The payment gateway. */
  gateway: PaymentGateway;
  /** The payment ID. */
  id: Scalars['ID']['output'];
  /** The order ID. */
  orderId: Scalars['ID']['output'];
  /** The payment document URL. */
  paymentDocumentUrl?: Maybe<Scalars['String']['output']>;
  /** The payment status. */
  status: PaymentStatus;
  /** The update date and time. */
  updatedAt?: Maybe<Scalars['DateTimeUtc']['output']>;
};

/** The payment currencies. */
export enum PaymentCurrency {
  /** The EUR currency. */
  Eur = 'EUR',
  /** The PLN currency. */
  Pln = 'PLN'
}

/** The payment gateways. */
export enum PaymentGateway {
  /** The balance gateway. */
  Balance = 'BALANCE',
  /** The fake gateway. */
  Fake = 'FAKE',
  /** The Paynow gateway. */
  Paynow = 'PAYNOW',
  /** The Tpay gateway. */
  Tpay = 'TPAY'
}

/** The payment methods. */
export enum PaymentMethod {
  /** The blik method. */
  Blik = 'BLIK',
  /** The blik method without code. */
  BlikWithoutCode = 'BLIK_WITHOUT_CODE',
  /** The redirect method. */
  Redirect = 'REDIRECT',
  /** The wallet method. */
  Wallet = 'WALLET'
}

/** A paginated list of Payment items. */
export type PaymentPaginator = {
  __typename?: 'PaymentPaginator';
  /** A list of Payment items. */
  data: Array<Payment>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/** The payment payload. */
export type PaymentPayload = {
  __typename?: 'PaymentPayload';
  /** The URL for payment. */
  paymentUrl?: Maybe<Scalars['String']['output']>;
  /** The payment status. */
  status: PaymentStatus;
};

/** The payment statuses. */
export enum PaymentStatus {
  /** The failed status. */
  Failed = 'FAILED',
  /** The pending status. */
  Pending = 'PENDING',
  /** The refunded status. */
  Refunded = 'REFUNDED',
  /** The succeeded status. */
  Succeeded = 'SUCCEEDED'
}

/** The pdf paper format. */
export enum PdfPaperFormat {
  /** The a3 paper format. */
  A3 = 'A3',
  /** The a4 paper format. */
  A4 = 'A4',
  /** The a5 paper format. */
  A5 = 'A5',
  /** The a6 paper format. */
  A6 = 'A6',
  /** The b1 paper format. */
  B1 = 'B1',
  /** The b2 paper format. */
  B2 = 'B2',
  /** The b3 paper format. */
  B3 = 'B3',
  /** The b4 paper format. */
  B4 = 'B4',
  /** The b5 paper format. */
  B5 = 'B5',
  /** The 250x250 paper format. */
  Format_250X250 = 'FORMAT_250X250',
  /** The 350x350 paper format. */
  Format_350X350 = 'FORMAT_350X350',
  /** The 500x500 paper format. */
  Format_500X500 = 'FORMAT_500X500',
  /** The 1000x1000 paper format. */
  Format_1000X1000 = 'FORMAT_1000X1000',
  /** The 1000x1500 paper format. */
  Format_1000X1500 = 'FORMAT_1000X1500',
  /** The 1000x2000 paper format. */
  Format_1000X2000 = 'FORMAT_1000X2000'
}

/** The pdf paper orientation. */
export enum PdfPaperOrientation {
  /** The landscape paper orientation. */
  Landscape = 'LANDSCAPE',
  /** The portrait paper orientation. */
  Portrait = 'PORTRAIT'
}

/** The pilot. */
export type Pilot = {
  __typename?: 'Pilot';
  /** The pilot's buttons. */
  buttons?: Maybe<Array<Maybe<Button>>>;
  /** The creation date and time. */
  createdAt?: Maybe<Scalars['DateTimeUtc']['output']>;
  /** The pilot ID. */
  id: Scalars['ID']['output'];
  /** The active flag. */
  isActive: Scalars['Boolean']['output'];
  /** The default flag. */
  isDefault: Scalars['Boolean']['output'];
  /** The name. */
  name: Scalars['String']['output'];
  /** The update date and time. */
  updatedAt?: Maybe<Scalars['DateTimeUtc']['output']>;
  /** The pilot's user. */
  user: User;
};

/** The pilot filters input. */
export type PilotFiltersInput = {
  /** The active flag. */
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  /** The default flag. */
  isDefault?: InputMaybe<Scalars['Boolean']['input']>;
};

/** A paginated list of Pilot items. */
export type PilotPaginator = {
  __typename?: 'PilotPaginator';
  /** A list of Pilot items. */
  data: Array<Pilot>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/** The pilot payload. */
export type PilotPayload = {
  __typename?: 'PilotPayload';
  /** The creation date and time. */
  createdAt?: Maybe<Scalars['DateTimeUtc']['output']>;
  /** The pilot ID. */
  id: Scalars['ID']['output'];
  /** The active flag. */
  isActive: Scalars['Boolean']['output'];
  /** The default flag. */
  isDefault: Scalars['Boolean']['output'];
  /** The name. */
  name: Scalars['String']['output'];
  /** The update date and time. */
  updatedAt?: Maybe<Scalars['DateTimeUtc']['output']>;
  /** The user ID. */
  userId: Scalars['ID']['output'];
};

/** The coordinates. */
export type Point = {
  __typename?: 'Point';
  /** The latitude. */
  latitude: Scalars['Float']['output'];
  /** The longitude. */
  longitude: Scalars['Float']['output'];
};

/** The coordinates payload. */
export type PointPayload = {
  __typename?: 'PointPayload';
  /** The latitude. */
  latitude: Scalars['Float']['output'];
  /** The longitude. */
  longitude: Scalars['Float']['output'];
};

/** The price. */
export type Price = {
  __typename?: 'Price';
  /** The creation date and time. */
  createdAt: Scalars['DateTimeUtc']['output'];
  /** The active days. */
  days: Array<Maybe<Scalars['String']['output']>>;
  /** The end time. */
  endTime: Scalars['Time']['output'];
  /** The price ID. */
  id: Scalars['ID']['output'];
  /** The default flag. */
  isDefault: Scalars['Boolean']['output'];
  /** The name. */
  name: Scalars['String']['output'];
  /** The parking ID. */
  parkingId: Scalars['ID']['output'];
  /** The period. */
  period: PricePeriod;
  /** The price for the first period. */
  priceFirstPeriod: Scalars['Int']['output'];
  /** The price for next periods. */
  priceNextPeriods: Scalars['Int']['output'];
  /** The parking spot ID. */
  spotId?: Maybe<Scalars['ID']['output']>;
  /** The start time. */
  startTime: Scalars['Time']['output'];
  /** The update date and time. */
  updatedAt: Scalars['DateTimeUtc']['output'];
};

/** A paginated list of Price items. */
export type PricePaginator = {
  __typename?: 'PricePaginator';
  /** A list of Price items. */
  data: Array<Price>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/** The price payload. */
export type PricePayload = {
  __typename?: 'PricePayload';
  /** The creation date and time. */
  createdAt: Scalars['DateTimeUtc']['output'];
  /** The active days. */
  days: Array<Maybe<Scalars['String']['output']>>;
  /** The end time. */
  endTime: Scalars['Time']['output'];
  /** The price ID. */
  id: Scalars['ID']['output'];
  /** The default flag. */
  isDefault: Scalars['Boolean']['output'];
  /** The name. */
  name: Scalars['String']['output'];
  /** The parking ID. */
  parkingId: Scalars['ID']['output'];
  /** The period. */
  period: PricePeriod;
  /** The price for the first period. */
  priceFirstPeriod: Scalars['Int']['output'];
  /** The price for next periods. */
  priceNextPeriods: Scalars['Int']['output'];
  /** The parking spot ID. */
  spotId?: Maybe<Scalars['ID']['output']>;
  /** The start time. */
  startTime: Scalars['Time']['output'];
  /** The update date and time. */
  updatedAt: Scalars['DateTimeUtc']['output'];
};

/** The price periods. */
export enum PricePeriod {
  /** The full day period. */
  FullDay = 'FULL_DAY',
  /** The half day daytime period. */
  HalfDayDaytime = 'HALF_DAY_DAYTIME',
  /** The half day nighttime period. */
  HalfDayNighttime = 'HALF_DAY_NIGHTTIME',
  /** The half hour period. */
  HalfHour = 'HALF_HOUR',
  /** The month period. */
  Month = 'MONTH',
  /** The one hour period. */
  OneHour = 'ONE_HOUR',
  /** The week period. */
  Week = 'WEEK',
  /** The weekend period. */
  Weekend = 'WEEKEND'
}

/** The price filters input. */
export type PricesFiltersInput = {
  /** The parking ID. */
  parkingId?: InputMaybe<Scalars['ID']['input']>;
  /** The user ID. */
  userId?: InputMaybe<Scalars['ID']['input']>;
};

/** The fields available at the top level of queries. */
export type Query = {
  __typename?: 'Query';
  /** Returns the active reservation. */
  activeReservation?: Maybe<Reservation>;
  /** Returns the address. */
  address?: Maybe<Address>;
  /** Returns the list of addresses. */
  addresses: AddressPaginator;
  /** Returns the list of availabilities. */
  availabilities: AvailabilityPaginator;
  /** Returns the availability. */
  availability?: Maybe<Availability>;
  /** Returns the bank account. */
  bankAccount?: Maybe<BankAccount>;
  /** Returns the list of bank accounts. */
  bankAccounts: BankAccountPaginator;
  /** Returns the billing. */
  billing?: Maybe<Billing>;
  /** Returns the list of billings. */
  billings: BillingPaginator;
  /** Returns the image. */
  image?: Maybe<Image>;
  /** Returns the list of images. */
  images: ImagePaginator;
  /** Returns the issue. */
  issue: Issue;
  /** Returns the list of issues. */
  issues: IssuePaginator;
  me?: Maybe<User>;
  /** Returns the membership. */
  membership?: Maybe<Membership>;
  /** Returns the memberships. */
  memberships: MembershipPaginator;
  /** Returns the list of orders. */
  orders: OrderPaginator;
  /** Returns the list of organizations. */
  organizations: OrganizationPaginator;
  /** Returns the parking. */
  parking?: Maybe<Parking>;
  /** Returns the parking by identifier. */
  parkingByIdentifier?: Maybe<Parking>;
  /** Returns the list of parking images. */
  parkingImages?: Maybe<Array<ImagePayload>>;
  /** Returns the list of parkings. */
  parkings: ParkingPaginator;
  /** Returns the payment. */
  payment?: Maybe<Payment>;
  /** Returns the list of payments. */
  payments: PaymentPaginator;
  /** Returns the pilot. */
  pilot?: Maybe<Pilot>;
  /** Returns the list of pilots. */
  pilots: PilotPaginator;
  /** Returns the price. */
  price?: Maybe<Price>;
  /** Returns the list of prices. */
  prices: PricePaginator;
  /** Returns the list of related issues. */
  relatedIssues: IssuePaginator;
  /** Returns the reservation. */
  reservation?: Maybe<Reservation>;
  /** Returns the list of reservations. */
  reservations: ReservationPaginator;
  /** Returns the sign. */
  sign?: Maybe<Sign>;
  /** Returns the list of signs. */
  signs: SignPaginator;
  /** Returns the spot. */
  spot?: Maybe<Spot>;
  /** Returns the spot by parking identifier and spot number. */
  spotByParkingIdentifier?: Maybe<SpotPayload>;
  /** Returns the list of spots. */
  spots: SpotPaginator;
  /** Returns the vehicle. */
  vehicle?: Maybe<Vehicle>;
  /** Returns the list of vehicles. */
  vehicles: VehiclePaginator;
};


/** The fields available at the top level of queries. */
export type QueryAddressArgs = {
  id: Scalars['ID']['input'];
};


/** The fields available at the top level of queries. */
export type QueryAddressesArgs = {
  first?: Scalars['Int']['input'];
  orderBy?: InputMaybe<Array<QueryAddressesOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


/** The fields available at the top level of queries. */
export type QueryAvailabilitiesArgs = {
  filter?: InputMaybe<AvailabilityFiltersInput>;
  first?: Scalars['Int']['input'];
  orderBy?: InputMaybe<Array<QueryAvailabilitiesOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


/** The fields available at the top level of queries. */
export type QueryAvailabilityArgs = {
  id: Scalars['ID']['input'];
};


/** The fields available at the top level of queries. */
export type QueryBankAccountArgs = {
  id: Scalars['ID']['input'];
};


/** The fields available at the top level of queries. */
export type QueryBankAccountsArgs = {
  first?: Scalars['Int']['input'];
  orderBy?: InputMaybe<Array<QueryBankAccountsOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


/** The fields available at the top level of queries. */
export type QueryBillingArgs = {
  id: Scalars['ID']['input'];
};


/** The fields available at the top level of queries. */
export type QueryBillingsArgs = {
  first?: Scalars['Int']['input'];
  orderBy?: InputMaybe<Array<QueryBillingsOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


/** The fields available at the top level of queries. */
export type QueryImageArgs = {
  id: Scalars['ID']['input'];
};


/** The fields available at the top level of queries. */
export type QueryImagesArgs = {
  filter?: InputMaybe<ImageFiltersInput>;
  first?: Scalars['Int']['input'];
  orderBy?: InputMaybe<Array<QueryImagesOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


/** The fields available at the top level of queries. */
export type QueryIssueArgs = {
  id: Scalars['ID']['input'];
};


/** The fields available at the top level of queries. */
export type QueryIssuesArgs = {
  filter?: InputMaybe<IssueFiltersInput>;
  first?: Scalars['Int']['input'];
  orderBy?: InputMaybe<Array<QueryIssuesOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


/** The fields available at the top level of queries. */
export type QueryMembershipArgs = {
  id: Scalars['ID']['input'];
};


/** The fields available at the top level of queries. */
export type QueryMembershipsArgs = {
  filter?: InputMaybe<MembershipFiltersInput>;
  first?: Scalars['Int']['input'];
  orderBy?: InputMaybe<Array<QueryMembershipsOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


/** The fields available at the top level of queries. */
export type QueryOrdersArgs = {
  first?: Scalars['Int']['input'];
  orderBy?: InputMaybe<Array<QueryOrdersOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


/** The fields available at the top level of queries. */
export type QueryOrganizationsArgs = {
  first?: Scalars['Int']['input'];
  orderBy?: InputMaybe<Array<QueryOrganizationsOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


/** The fields available at the top level of queries. */
export type QueryParkingArgs = {
  id: Scalars['ID']['input'];
};


/** The fields available at the top level of queries. */
export type QueryParkingByIdentifierArgs = {
  identifier: Scalars['String']['input'];
};


/** The fields available at the top level of queries. */
export type QueryParkingImagesArgs = {
  id: Scalars['ID']['input'];
};


/** The fields available at the top level of queries. */
export type QueryParkingsArgs = {
  filter?: InputMaybe<ParkingFiltersInput>;
  first?: Scalars['Int']['input'];
  orderBy?: InputMaybe<Array<QueryParkingsOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


/** The fields available at the top level of queries. */
export type QueryPaymentArgs = {
  id: Scalars['ID']['input'];
};


/** The fields available at the top level of queries. */
export type QueryPaymentsArgs = {
  first?: Scalars['Int']['input'];
  orderBy?: InputMaybe<Array<QueryPaymentsOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


/** The fields available at the top level of queries. */
export type QueryPilotArgs = {
  id: Scalars['ID']['input'];
};


/** The fields available at the top level of queries. */
export type QueryPilotsArgs = {
  filter?: InputMaybe<PilotFiltersInput>;
  first?: Scalars['Int']['input'];
  orderBy?: InputMaybe<Array<QueryPilotsOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


/** The fields available at the top level of queries. */
export type QueryPriceArgs = {
  id: Scalars['ID']['input'];
};


/** The fields available at the top level of queries. */
export type QueryPricesArgs = {
  filter?: InputMaybe<PricesFiltersInput>;
  first?: Scalars['Int']['input'];
  orderBy?: InputMaybe<Array<QueryPricesOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


/** The fields available at the top level of queries. */
export type QueryRelatedIssuesArgs = {
  filter?: InputMaybe<RelatedIssuesFiltersInput>;
  first?: Scalars['Int']['input'];
  orderBy?: InputMaybe<Array<QueryRelatedIssuesOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


/** The fields available at the top level of queries. */
export type QueryReservationArgs = {
  id: Scalars['ID']['input'];
};


/** The fields available at the top level of queries. */
export type QueryReservationsArgs = {
  filter?: InputMaybe<ReservationFiltersInput>;
  first?: Scalars['Int']['input'];
  orderBy?: InputMaybe<Array<QueryReservationsOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


/** The fields available at the top level of queries. */
export type QuerySignArgs = {
  id: Scalars['ID']['input'];
};


/** The fields available at the top level of queries. */
export type QuerySignsArgs = {
  filter?: InputMaybe<SignFiltersInput>;
  first?: Scalars['Int']['input'];
  orderBy?: InputMaybe<Array<QuerySignsOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


/** The fields available at the top level of queries. */
export type QuerySpotArgs = {
  id: Scalars['ID']['input'];
};


/** The fields available at the top level of queries. */
export type QuerySpotByParkingIdentifierArgs = {
  input: SpotByParkingIdentifierInput;
};


/** The fields available at the top level of queries. */
export type QuerySpotsArgs = {
  first?: Scalars['Int']['input'];
  orderBy?: InputMaybe<Array<QuerySpotsOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
};


/** The fields available at the top level of queries. */
export type QueryVehicleArgs = {
  id: Scalars['ID']['input'];
};


/** The fields available at the top level of queries. */
export type QueryVehiclesArgs = {
  filter?: InputMaybe<VehicleFiltersInput>;
  first?: Scalars['Int']['input'];
  orderBy?: InputMaybe<Array<QueryVehiclesOrderByOrderByClause>>;
  page?: InputMaybe<Scalars['Int']['input']>;
};

/** Allowed column names for Query.addresses.orderBy. */
export enum QueryAddressesOrderByColumn {
  CreatedAt = 'CREATED_AT'
}

/** Order by clause for Query.addresses.orderBy. */
export type QueryAddressesOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryAddressesOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Allowed column names for Query.availabilities.orderBy. */
export enum QueryAvailabilitiesOrderByColumn {
  CreatedAt = 'CREATED_AT'
}

/** Order by clause for Query.availabilities.orderBy. */
export type QueryAvailabilitiesOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryAvailabilitiesOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Allowed column names for Query.bankAccounts.orderBy. */
export enum QueryBankAccountsOrderByColumn {
  CreatedAt = 'CREATED_AT'
}

/** Order by clause for Query.bankAccounts.orderBy. */
export type QueryBankAccountsOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryBankAccountsOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Allowed column names for Query.billings.orderBy. */
export enum QueryBillingsOrderByColumn {
  CreatedAt = 'CREATED_AT'
}

/** Order by clause for Query.billings.orderBy. */
export type QueryBillingsOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryBillingsOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Allowed column names for Query.images.orderBy. */
export enum QueryImagesOrderByColumn {
  Position = 'POSITION'
}

/** Order by clause for Query.images.orderBy. */
export type QueryImagesOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryImagesOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Allowed column names for Query.issues.orderBy. */
export enum QueryIssuesOrderByColumn {
  CreatedAt = 'CREATED_AT'
}

/** Order by clause for Query.issues.orderBy. */
export type QueryIssuesOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryIssuesOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Allowed column names for Query.memberships.orderBy. */
export enum QueryMembershipsOrderByColumn {
  CreatedAt = 'CREATED_AT'
}

/** Order by clause for Query.memberships.orderBy. */
export type QueryMembershipsOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryMembershipsOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Allowed column names for Query.orders.orderBy. */
export enum QueryOrdersOrderByColumn {
  CreatedAt = 'CREATED_AT'
}

/** Order by clause for Query.orders.orderBy. */
export type QueryOrdersOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryOrdersOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Allowed column names for Query.organizations.orderBy. */
export enum QueryOrganizationsOrderByColumn {
  CreatedAt = 'CREATED_AT'
}

/** Order by clause for Query.organizations.orderBy. */
export type QueryOrganizationsOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryOrganizationsOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Allowed column names for Query.parkings.orderBy. */
export enum QueryParkingsOrderByColumn {
  CreatedAt = 'CREATED_AT'
}

/** Order by clause for Query.parkings.orderBy. */
export type QueryParkingsOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryParkingsOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Allowed column names for Query.payments.orderBy. */
export enum QueryPaymentsOrderByColumn {
  CreatedAt = 'CREATED_AT'
}

/** Order by clause for Query.payments.orderBy. */
export type QueryPaymentsOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryPaymentsOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Allowed column names for Query.pilots.orderBy. */
export enum QueryPilotsOrderByColumn {
  CreatedAt = 'CREATED_AT'
}

/** Order by clause for Query.pilots.orderBy. */
export type QueryPilotsOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryPilotsOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Allowed column names for Query.prices.orderBy. */
export enum QueryPricesOrderByColumn {
  CreatedAt = 'CREATED_AT'
}

/** Order by clause for Query.prices.orderBy. */
export type QueryPricesOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryPricesOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Allowed column names for Query.relatedIssues.orderBy. */
export enum QueryRelatedIssuesOrderByColumn {
  CreatedAt = 'CREATED_AT'
}

/** Order by clause for Query.relatedIssues.orderBy. */
export type QueryRelatedIssuesOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryRelatedIssuesOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Allowed column names for Query.reservations.orderBy. */
export enum QueryReservationsOrderByColumn {
  CreatedAt = 'CREATED_AT'
}

/** Order by clause for Query.reservations.orderBy. */
export type QueryReservationsOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryReservationsOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Allowed column names for Query.signs.orderBy. */
export enum QuerySignsOrderByColumn {
  CreatedAt = 'CREATED_AT'
}

/** Order by clause for Query.signs.orderBy. */
export type QuerySignsOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QuerySignsOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Allowed column names for Query.spots.orderBy. */
export enum QuerySpotsOrderByColumn {
  CreatedAt = 'CREATED_AT'
}

/** Order by clause for Query.spots.orderBy. */
export type QuerySpotsOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QuerySpotsOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Allowed column names for Query.vehicles.orderBy. */
export enum QueryVehiclesOrderByColumn {
  CreatedAt = 'CREATED_AT',
  IsPrimary = 'IS_PRIMARY'
}

/** Order by clause for Query.vehicles.orderBy. */
export type QueryVehiclesOrderByOrderByClause = {
  /** The column that is used for ordering. */
  column: QueryVehiclesOrderByColumn;
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** The register response. */
export type RegisterResponse = {
  __typename?: 'RegisterResponse';
  /** The user ID. */
  id: Scalars['ID']['output'];
  /** The registration status. */
  status?: Maybe<Scalars['String']['output']>;
};

/** The related issues filters input. */
export type RelatedIssuesFiltersInput = {
  /** The subject ID. */
  subjectableId?: InputMaybe<Scalars['ID']['input']>;
};

/** The resend email verification input. */
export type ResendEmailVerificationInput = {
  /** The email. */
  email: Scalars['String']['input'];
  /** The verification URL. */
  verificationUrl?: InputMaybe<VerificationUrlInput>;
};

/** The resend email verification response. */
export type ResendEmailVerificationResponse = {
  __typename?: 'ResendEmailVerificationResponse';
  /** The resend status. */
  status: ResendEmailVerificationStatus;
};

/** The resend email verification statuses. */
export enum ResendEmailVerificationStatus {
  /** The sent email status. */
  EmailSent = 'EMAIL_SENT'
}

/** The reservation. */
export type Reservation = {
  __typename?: 'Reservation';
  /** The creation date and time. */
  createdAt: Scalars['DateTimeUtc']['output'];
  /** The deletion date and time. */
  deletedAt?: Maybe<Scalars['DateTimeUtc']['output']>;
  /** The end date and time. */
  endAt: Scalars['DateTimeUtc']['output'];
  /** The reservation ID. */
  id: Scalars['ID']['output'];
  /** The reservation's images. */
  images?: Maybe<Array<Image>>;
  /** The reservation's order. */
  order?: Maybe<Order>;
  /** The reservation's parking. */
  parking: Parking;
  /** The parking ID. */
  parkingId: Scalars['ID']['output'];
  /** The reservation's primary image. */
  primaryImage?: Maybe<Image>;
  /** The parking spot ID. */
  spotId?: Maybe<Scalars['ID']['output']>;
  /** The start date and time. */
  startAt: Scalars['DateTimeUtc']['output'];
  /** The reservation status. */
  status: ReservationStatus;
  /** The update date and time. */
  updatedAt: Scalars['DateTimeUtc']['output'];
};

/** The reservation date input. */
export type ReservationDateInput = {
  /** The start date and time. */
  from?: InputMaybe<Scalars['DateTimeUtc']['input']>;
  /** The end date and time. */
  to?: InputMaybe<Scalars['DateTimeUtc']['input']>;
};

/** The reservation filters input. */
export type ReservationFiltersInput = {
  /** The start date before. */
  endAt?: InputMaybe<Scalars['DateTimeUtc']['input']>;
  /** The parking ID. */
  parkingId?: InputMaybe<Scalars['ID']['input']>;
  /** The parking spot ID. */
  spotId?: InputMaybe<Scalars['ID']['input']>;
  /** The start date after. */
  startAt?: InputMaybe<Scalars['DateTimeUtc']['input']>;
  /** The reservation status. */
  status?: InputMaybe<ReservationStatus>;
  /** The user ID. */
  userId?: InputMaybe<Scalars['ID']['input']>;
};

/** A paginated list of Reservation items. */
export type ReservationPaginator = {
  __typename?: 'ReservationPaginator';
  /** A list of Reservation items. */
  data: Array<Reservation>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/** The reservation payload. */
export type ReservationPayload = {
  __typename?: 'ReservationPayload';
  /** The creation date and time. */
  createdAt: Scalars['DateTimeUtc']['output'];
  /** The deletion date and time. */
  deletedAt?: Maybe<Scalars['DateTimeUtc']['output']>;
  /** The end date and time. */
  endAt: Scalars['DateTimeUtc']['output'];
  /** The reservation ID. */
  id: Scalars['ID']['output'];
  /** The parking ID. */
  parkingId: Scalars['ID']['output'];
  /** The parking spot ID. */
  spotId?: Maybe<Scalars['ID']['output']>;
  /** The start date and time. */
  startAt: Scalars['DateTimeUtc']['output'];
  /** The reservation status. */
  status: ReservationStatus;
  /** The update date and time. */
  updatedAt: Scalars['DateTimeUtc']['output'];
};

/** The reservation rental periods. */
export enum ReservationRentalPeriod {
  /** The custom period. */
  Custom = 'CUSTOM',
  /** The half hour period. */
  HalfHour = 'HALF_HOUR',
  /** The one hour period. */
  OneHour = 'ONE_HOUR',
  /** The two hour period. */
  TwoHours = 'TWO_HOURS'
}

/** The reservation response messages. */
export enum ReservationResponseMessage {
  /** The user already has an active or pending reservation. */
  ActiveReservationExists = 'ACTIVE_RESERVATION_EXISTS',
  /** The no available spot message. */
  NoAvailableSpot = 'NO_AVAILABLE_SPOT',
  /** The other message. */
  Other = 'OTHER',
  /** The parking not found message. */
  ParkingNotFound = 'PARKING_NOT_FOUND',
  /** The payment failed message. */
  PaymentFailed = 'PAYMENT_FAILED',
  /** The reserved message. */
  Reserved = 'RESERVED',
  /** The spot not found message. */
  SpotNotFound = 'SPOT_NOT_FOUND',
  /** The spot taken message. */
  SpotTaken = 'SPOT_TAKEN',
  /** The waiting for payment message. */
  WaitingForPayment = 'WAITING_FOR_PAYMENT'
}

/** The reservation response payload. */
export type ReservationResponsePayload = {
  __typename?: 'ReservationResponsePayload';
  /** The reservation amount. */
  amount?: Maybe<Scalars['Int']['output']>;
  /** The reservation start date and time. */
  from?: Maybe<Scalars['DateTimeUtc']['output']>;
  /** The reservation message. */
  message: ReservationResponseMessage;
  /** The parking ID. */
  parkingId?: Maybe<Scalars['ID']['output']>;
  /** The payment URL. */
  paymentUrl?: Maybe<Scalars['String']['output']>;
  /** The reservation ID. */
  reservationId?: Maybe<Scalars['ID']['output']>;
  /** The spot ID. */
  spotId?: Maybe<Scalars['ID']['output']>;
  /** The reservation status. */
  status: ReservationResponseStatus;
  /** The reservation end date and time. */
  to?: Maybe<Scalars['DateTimeUtc']['output']>;
};

/** The reservation response statuses. */
export enum ReservationResponseStatus {
  /** The failure status. */
  Failure = 'FAILURE',
  /** The success status. */
  Success = 'SUCCESS'
}

/** The reservation statuses. */
export enum ReservationStatus {
  /** The active status. */
  Active = 'ACTIVE',
  /** The cancelled status. */
  Cancelled = 'CANCELLED',
  /** The completed status. */
  Completed = 'COMPLETED',
  /** The confirmed status. */
  Confirmed = 'CONFIRMED',
  /** The expired status. */
  Expired = 'EXPIRED',
  /** The pending status. */
  Pending = 'PENDING'
}

/** The reserve parking input. */
export type ReserveParkingInput = {
  /** The billing ID. */
  billingId: Scalars['ID']['input'];
  /** The Blik remember flag. */
  blikRemember?: InputMaybe<Scalars['Boolean']['input']>;
  /** The Blik token. */
  blikToken?: InputMaybe<Scalars['String']['input']>;
  /** The custom end time. */
  customEndAt?: InputMaybe<Scalars['DateTimeUtc']['input']>;
  /** The parking ID. */
  parkingId: Scalars['ID']['input'];
  /** The payment method. */
  paymentMethod: PaymentMethod;
  /** The registration number. */
  registrationNumber?: InputMaybe<Scalars['String']['input']>;
  /** The rental period. */
  rentalPeriod: ReservationRentalPeriod;
  /** The parking spot number. */
  spotNumber?: InputMaybe<Scalars['String']['input']>;
  /** The terms acceptance. */
  terms: Scalars['Boolean']['input'];
  /** The vehicle ID. */
  vehicleId?: InputMaybe<Scalars['ID']['input']>;
};

/** The reserve parking spot input. */
export type ReserveParkingSpotInput = {
  /** The billing ID. */
  billingId: Scalars['ID']['input'];
  /** The Blik remember flag. */
  blikRemember?: InputMaybe<Scalars['Boolean']['input']>;
  /** The Blik token. */
  blikToken?: InputMaybe<Scalars['String']['input']>;
  /** The custom end time. */
  customEndAt?: InputMaybe<Scalars['DateTimeUtc']['input']>;
  /** The payment method. */
  paymentMethod: PaymentMethod;
  /** The registration number. */
  registrationNumber?: InputMaybe<Scalars['String']['input']>;
  /** The rental period. */
  rentalPeriod: ReservationRentalPeriod;
  /** The parking spot ID. */
  spotId: Scalars['ID']['input'];
  /** The terms acceptance. */
  terms: Scalars['Boolean']['input'];
  /** The vehicle ID. */
  vehicleId?: InputMaybe<Scalars['ID']['input']>;
};

/** The reset password input. */
export type ResetPasswordInput = {
  /** The email. */
  email: Scalars['String']['input'];
  /** The new password. */
  password: Scalars['String']['input'];
  /** The reset token. */
  token: Scalars['String']['input'];
};

/** The reset password response. */
export type ResetPasswordResponse = {
  __typename?: 'ResetPasswordResponse';
  /** The reset message. */
  message?: Maybe<Scalars['String']['output']>;
  /** The reset status. */
  status: ResetPasswordStatus;
};

/** The reset password statuses. */
export enum ResetPasswordStatus {
  /** The reset password status. */
  PasswordReset = 'PASSWORD_RESET'
}

/** The reset password URL input. */
export type ResetPasswordUrlInput = {
  /** The base URL. */
  url: Scalars['String']['input'];
};

/** The resource types. */
export enum Resource {
  /** The activity type. */
  Activity = 'ACTIVITY',
  /** The address type. */
  Address = 'ADDRESS',
  /** The availability type. */
  Availability = 'AVAILABILITY',
  /** The bank account type. */
  BankAccount = 'BANK_ACCOUNT',
  /** The billing type. */
  Billing = 'BILLING',
  /** The button type. */
  Button = 'BUTTON',
  /** The geolocation type. */
  Geolocation = 'GEOLOCATION',
  /** The image type. */
  Image = 'IMAGE',
  /** The invitation type. */
  Invitation = 'INVITATION',
  /** The issue type. */
  Issue = 'ISSUE',
  /** The membership type. */
  Membership = 'MEMBERSHIP',
  /** The order type. */
  Order = 'ORDER',
  /** The organization type. */
  Organization = 'ORGANIZATION',
  /** The parking type. */
  Parking = 'PARKING',
  /** The partner type. */
  Partner = 'PARTNER',
  /** The payment type. */
  Payment = 'PAYMENT',
  /** The payment document type. */
  PaymentDocument = 'PAYMENT_DOCUMENT',
  /** The pilot type. */
  Pilot = 'PILOT',
  /** The price type. */
  Price = 'PRICE',
  /** The reservation type. */
  Reservation = 'RESERVATION',
  /** The sign type. */
  Sign = 'SIGN',
  /** The spot type. */
  Spot = 'SPOT',
  /** The token type. */
  Token = 'TOKEN',
  /** The transaction type. */
  Transaction = 'TRANSACTION',
  /** The user type. */
  User = 'USER',
  /** The vehicle type. */
  Vehicle = 'VEHICLE',
  /** The verification type. */
  Verification = 'VERIFICATION',
  /** The withdrawal type. */
  Withdrawal = 'WITHDRAWAL'
}

/** The sign. */
export type Sign = {
  __typename?: 'Sign';
  /** The creation date and time. */
  createdAt?: Maybe<Scalars['DateTimeUtc']['output']>;
  /** The format. */
  format: PdfPaperFormat;
  /** The sign ID. */
  id: Scalars['ID']['output'];
  /** The orientation. */
  orientation: PdfPaperOrientation;
  /** The PDF Path. */
  pdfPath?: Maybe<Scalars['String']['output']>;
  /** The sign ID. */
  signableId?: Maybe<Scalars['ID']['output']>;
  /** The sign type. */
  signableType?: Maybe<Scalars['String']['output']>;
  /** The status. */
  status?: Maybe<SignStatus>;
  /** The template. */
  template: SignTemplate;
  /** The type. */
  type: SignType;
  /** The update date and time. */
  updatedAt?: Maybe<Scalars['DateTimeUtc']['output']>;
  /** The sign's user. */
  user: User;
};

/** The sign filters input. */
export type SignFiltersInput = {
  /** The sign type. */
  type?: InputMaybe<SignType>;
};

/** A paginated list of Sign items. */
export type SignPaginator = {
  __typename?: 'SignPaginator';
  /** A list of Sign items. */
  data: Array<Sign>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/** The sign statuses. */
export enum SignStatus {
  /** The completed status. */
  Completed = 'COMPLETED',
  /** The failed status. */
  Failed = 'FAILED',
  /** The generated status. */
  Generated = 'GENERATED',
  /** The prepared status. */
  Prepared = 'PREPARED'
}

/** The sign pdf templates. */
export enum SignTemplate {
  /** The blue spot sign 250x250 pdf template. */
  BlueSpotSign250X250 = 'BLUE_SPOT_SIGN250X250',
  /** The blue spot sign 350x350 pdf template. */
  BlueSpotSign350X350 = 'BLUE_SPOT_SIGN350X350',
  /** The blue spot sign 500x500 pdf template. */
  BlueSpotSign500X500 = 'BLUE_SPOT_SIGN500X500',
  /** The blue terms sign b1 pdf template. */
  BlueTermsSignB1 = 'BLUE_TERMS_SIGN_B1',
  /** The blue terms sign b2 pdf template. */
  BlueTermsSignB2 = 'BLUE_TERMS_SIGN_B2',
  /** The blue terms sign b3 pdf template. */
  BlueTermsSignB3 = 'BLUE_TERMS_SIGN_B3',
  /** The blue terms sign b4 pdf template. */
  BlueTermsSignB4 = 'BLUE_TERMS_SIGN_B4',
  /** The fake sign pdf template. */
  Fake = 'FAKE',
  /** The info pro parking banner 1000x1000 pdf template. */
  InfoProParkingBanner1000X1000 = 'INFO_PRO_PARKING_BANNER1000X1000',
  /** The info pro parking banner 1000x1500 pdf template. */
  InfoProParkingBanner1000X1500 = 'INFO_PRO_PARKING_BANNER1000X1500',
  /** The info pro parking banner 1000x2000 pdf template. */
  InfoProParkingBanner1000X2000 = 'INFO_PRO_PARKING_BANNER1000X2000',
  /** The info pro parking sign b1 pdf template. */
  InfoProParkingSignB1 = 'INFO_PRO_PARKING_SIGN_B1',
  /** The info pro parking sign b2 pdf template. */
  InfoProParkingSignB2 = 'INFO_PRO_PARKING_SIGN_B2',
  /** The info pro parking sign b3 pdf template. */
  InfoProParkingSignB3 = 'INFO_PRO_PARKING_SIGN_B3',
  /** The info pro parking sign b4 pdf template. */
  InfoProParkingSignB4 = 'INFO_PRO_PARKING_SIGN_B4',
  /** The info pro parking sign b5 pdf template. */
  InfoProParkingSignB5 = 'INFO_PRO_PARKING_SIGN_B5',
  /** The qr easy parking banner 1000x1000 pdf template. */
  QrEasyParkingBanner1000X1000 = 'QR_EASY_PARKING_BANNER1000X1000',
  /** The qr easy parking banner 1000x1500 pdf template. */
  QrEasyParkingBanner1000X1500 = 'QR_EASY_PARKING_BANNER1000X1500',
  /** The qr easy parking banner 1000x2000 pdf template. */
  QrEasyParkingBanner1000X2000 = 'QR_EASY_PARKING_BANNER1000X2000',
  /** The qr easy parking sign b1 pdf template. */
  QrEasyParkingSignB1 = 'QR_EASY_PARKING_SIGN_B1',
  /** The qr easy parking sign b2 pdf template. */
  QrEasyParkingSignB2 = 'QR_EASY_PARKING_SIGN_B2',
  /** The qr easy parking sign b3 pdf template. */
  QrEasyParkingSignB3 = 'QR_EASY_PARKING_SIGN_B3',
  /** The qr easy parking sign b4 pdf template. */
  QrEasyParkingSignB4 = 'QR_EASY_PARKING_SIGN_B4',
  /** The qr easy parking sign b5 pdf template. */
  QrEasyParkingSignB5 = 'QR_EASY_PARKING_SIGN_B5',
  /** The standard banner 1000x1000 pdf template. */
  StandardParkingBanner1000X1000 = 'STANDARD_PARKING_BANNER1000X1000',
  /** The standard banner 1000x1500 pdf template. */
  StandardParkingBanner1000X1500 = 'STANDARD_PARKING_BANNER1000X1500',
  /** The standard banner 1000x2000 pdf template. */
  StandardParkingBanner1000X2000 = 'STANDARD_PARKING_BANNER1000X2000',
  /** The standard sign b1 pdf template. */
  StandardParkingSignB1 = 'STANDARD_PARKING_SIGN_B1',
  /** The standard sign b2 pdf template. */
  StandardParkingSignB2 = 'STANDARD_PARKING_SIGN_B2',
  /** The standard sign b3 pdf template. */
  StandardParkingSignB3 = 'STANDARD_PARKING_SIGN_B3',
  /** The standard sign b4 pdf template. */
  StandardParkingSignB4 = 'STANDARD_PARKING_SIGN_B4',
  /** The standard sign b5 pdf template. */
  StandardParkingSignB5 = 'STANDARD_PARKING_SIGN_B5',
  /** The white spot sign 250x250 pdf template. */
  WhiteSpotSign250X250 = 'WHITE_SPOT_SIGN250X250',
  /** The white spot sign 350x350 pdf template. */
  WhiteSpotSign350X350 = 'WHITE_SPOT_SIGN350X350',
  /** The blue spot sign 500x500 pdf template. */
  WhiteSpotSign500X500 = 'WHITE_SPOT_SIGN500X500',
  /** The white terms sign b1 pdf template. */
  WhiteTermsSignB1 = 'WHITE_TERMS_SIGN_B1',
  /** The white terms sign b2 pdf template. */
  WhiteTermsSignB2 = 'WHITE_TERMS_SIGN_B2',
  /** The white terms sign b3 pdf template. */
  WhiteTermsSignB3 = 'WHITE_TERMS_SIGN_B3',
  /** The white terms sign b4 pdf template. */
  WhiteTermsSignB4 = 'WHITE_TERMS_SIGN_B4'
}

/** The sign types. */
export enum SignType {
  /** The parking type. */
  Parking = 'PARKING',
  /** The parking spot type. */
  ParkingSpot = 'PARKING_SPOT',
  /** The price list type. */
  PriceList = 'PRICE_LIST',
  /** The terms type. */
  Terms = 'TERMS'
}

/** Directions for ordering a list of records. */
export enum SortOrder {
  /** Sort records in ascending order. */
  Asc = 'ASC',
  /** Sort records in descending order. */
  Desc = 'DESC'
}

/** The parking spot. */
export type Spot = {
  __typename?: 'Spot';
  /** The billing ID. */
  billingId: Scalars['ID']['output'];
  /** The creation date and time. */
  createdAt: Scalars['DateTimeUtc']['output'];
  /** The height. */
  height: Scalars['Int']['output'];
  /** The spot ID. */
  id: Scalars['ID']['output'];
  /** The spot's images. */
  images?: Maybe<Array<Image>>;
  /** The length. */
  length: Scalars['Int']['output'];
  /** The number. */
  number: Scalars['String']['output'];
  /** The parking ID. */
  parkingId: Scalars['ID']['output'];
  /** The spot's primary image. */
  primaryImage?: Maybe<Image>;
  /** The reservation date and time. */
  reservedAt: Scalars['DateTimeUtc']['output'];
  /** The spot state. */
  state: SpotState;
  /** The spot status. */
  status: SpotStatus;
  /** The update date and time. */
  updatedAt: Scalars['DateTimeUtc']['output'];
  /** The width. */
  width: Scalars['Int']['output'];
};

/** The input for finding a spot by parking identifier and spot number. */
export type SpotByParkingIdentifierInput = {
  /** The parking identifier. */
  identifier: Scalars['String']['input'];
  /** The spot number. */
  number: Scalars['String']['input'];
};

/** A paginated list of Spot items. */
export type SpotPaginator = {
  __typename?: 'SpotPaginator';
  /** A list of Spot items. */
  data: Array<Spot>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/** The parking spot payload. */
export type SpotPayload = {
  __typename?: 'SpotPayload';
  /** The billing ID. */
  billingId?: Maybe<Scalars['ID']['output']>;
  /** The creation date and time. */
  createdAt: Scalars['DateTimeUtc']['output'];
  /** The height. */
  height: Scalars['Int']['output'];
  /** The spot ID. */
  id: Scalars['ID']['output'];
  /** The length. */
  length: Scalars['Int']['output'];
  /** The number. */
  number: Scalars['String']['output'];
  /** The parking ID. */
  parkingId: Scalars['ID']['output'];
  /** The reservation date and time. */
  reservedAt: Scalars['DateTimeUtc']['output'];
  /** The spot state. */
  state: SpotState;
  /** The spot status. */
  status: SpotStatus;
  /** The update date and time. */
  updatedAt: Scalars['DateTimeUtc']['output'];
  /** The width. */
  width: Scalars['Int']['output'];
};

/** The spot states. */
export enum SpotState {
  /** The available state. */
  Available = 'AVAILABLE',
  /** The occupied state. */
  Occupied = 'OCCUPIED',
  /** The reserved state. */
  Reserved = 'RESERVED'
}

/** The spot statuses. */
export enum SpotStatus {
  /** The active status. */
  Active = 'ACTIVE',
  /** The inactive status. */
  Inactive = 'INACTIVE'
}

/** The Europe timezones. */
export enum Timezone {
  /** The Amsterdam timezone. */
  Amsterdam = 'AMSTERDAM',
  /** The Andorra timezone. */
  Andorra = 'ANDORRA',
  /** The Astrakhan timezone. */
  Astrakhan = 'ASTRAKHAN',
  /** The Athens timezone. */
  Athens = 'ATHENS',
  /** The Belgrade timezone. */
  Belgrade = 'BELGRADE',
  /** The Berlin timezone. */
  Berlin = 'BERLIN',
  /** The Bratislava timezone. */
  Bratislava = 'BRATISLAVA',
  /** The Brussels timezone. */
  Brussels = 'BRUSSELS',
  /** The Bucharest timezone. */
  Bucharest = 'BUCHAREST',
  /** The Budapest timezone. */
  Budapest = 'BUDAPEST',
  /** The Busingen timezone. */
  Busingen = 'BUSINGEN',
  /** The Chisinau timezone. */
  Chisinau = 'CHISINAU',
  /** The Copenhagen timezone. */
  Copenhagen = 'COPENHAGEN',
  /** The Dublin timezone. */
  Dublin = 'DUBLIN',
  /** The Gibraltar timezone. */
  Gibraltar = 'GIBRALTAR',
  /** The Guernsey timezone. */
  Guernsey = 'GUERNSEY',
  /** The Helsinki timezone. */
  Helsinki = 'HELSINKI',
  /** The Isle of Man timezone. */
  IsleOfMan = 'ISLE_OF_MAN',
  /** The Istanbul timezone. */
  Istanbul = 'ISTANBUL',
  /** The Jersey timezone. */
  Jersey = 'JERSEY',
  /** The Kaliningrad timezone. */
  Kaliningrad = 'KALININGRAD',
  /** The Kirov timezone. */
  Kirov = 'KIROV',
  /** The Kyiv timezone. */
  Kyiv = 'KYIV',
  /** The Lisbon timezone. */
  Lisbon = 'LISBON',
  /** The Ljubljana timezone. */
  Ljubljana = 'LJUBLJANA',
  /** The London timezone. */
  London = 'LONDON',
  /** The Luxembourg timezone. */
  Luxembourg = 'LUXEMBOURG',
  /** The Madrid timezone. */
  Madrid = 'MADRID',
  /** The Malta timezone. */
  Malta = 'MALTA',
  /** The Mariehamn timezone. */
  Mariehamn = 'MARIEHAMN',
  /** The Minsk timezone. */
  Minsk = 'MINSK',
  /** The Monaco timezone. */
  Monaco = 'MONACO',
  /** The Moscow timezone. */
  Moscow = 'MOSCOW',
  /** The Oslo timezone. */
  Oslo = 'OSLO',
  /** The Paris timezone. */
  Paris = 'PARIS',
  /** The Podgorica timezone. */
  Podgorica = 'PODGORICA',
  /** The Prague timezone. */
  Prague = 'PRAGUE',
  /** The Riga timezone. */
  Riga = 'RIGA',
  /** The Rome timezone. */
  Rome = 'ROME',
  /** The Samara timezone. */
  Samara = 'SAMARA',
  /** The San Marino timezone. */
  SanMarino = 'SAN_MARINO',
  /** The Sarajevo timezone. */
  Sarajevo = 'SARAJEVO',
  /** The Saratov timezone. */
  Saratov = 'SARATOV',
  /** The Simferopol timezone. */
  Simferopol = 'SIMFEROPOL',
  /** The Skopje timezone. */
  Skopje = 'SKOPJE',
  /** The Sofia timezone. */
  Sofia = 'SOFIA',
  /** The Stockholm timezone. */
  Stockholm = 'STOCKHOLM',
  /** The Tallinn timezone. */
  Tallinn = 'TALLINN',
  /** The Tirane timezone. */
  Tirane = 'TIRANE',
  /** The Ulyanovsk timezone. */
  Ulyanovsk = 'ULYANOVSK',
  /** The Uzhgorod timezone. */
  Uzhgorod = 'UZHGOROD',
  /** The Vaduz timezone. */
  Vaduz = 'VADUZ',
  /** The Vatican timezone. */
  Vatican = 'VATICAN',
  /** The Vienna timezone. */
  Vienna = 'VIENNA',
  /** The Vilnius timezone. */
  Vilnius = 'VILNIUS',
  /** The Volgograd timezone. */
  Volgograd = 'VOLGOGRAD',
  /** The Warsaw timezone. */
  Warsaw = 'WARSAW',
  /** The Zagreb timezone. */
  Zagreb = 'ZAGREB',
  /** The Zurich timezone. */
  Zurich = 'ZURICH'
}

/** The balance top-up request input. */
export type TopUpAccountBalanceUpInput = {
  /** The amount. */
  amount: Scalars['Int']['input'];
  /** The billing ID. */
  billingId: Scalars['ID']['input'];
  /** The Blik remember flag. */
  blikRemember?: InputMaybe<Scalars['Boolean']['input']>;
  /** The Blik token. */
  blikToken?: InputMaybe<Scalars['String']['input']>;
  /** The payment method. */
  paymentMethod: PaymentMethod;
};

/** The transaction. */
export type Transaction = {
  __typename?: 'Transaction';
  /** The amount. */
  amount: Scalars['Int']['output'];
  /** The balance. */
  balance: Scalars['Int']['output'];
  /** The billing ID. */
  billingId?: Maybe<Scalars['ID']['output']>;
  /** The creation date and time. */
  createdAt: Scalars['DateTimeUtc']['output'];
  /** The currency. */
  currency: PaymentCurrency;
  /** The transaction ID. */
  id: Scalars['ID']['output'];
  /** The processing date and time. */
  processedAt: Scalars['DateTimeUtc']['output'];
  /** The reservation ID. */
  reservationId?: Maybe<Scalars['ID']['output']>;
  /** The transaction type. */
  type: TransactionType;
  /** The update date and time. */
  updatedAt: Scalars['DateTimeUtc']['output'];
};

/** The transaction types. */
export enum TransactionType {
  /** The deposit type. */
  Deposit = 'DEPOSIT',
  /** The payment type. */
  Payment = 'PAYMENT',
  /** The withdrawal type. */
  Withdrawal = 'WITHDRAWAL'
}

/** Specify if you want to include or exclude trashed results from a query. */
export enum Trashed {
  /** Only return trashed results. */
  Only = 'ONLY',
  /** Return both trashed and non-trashed results. */
  With = 'WITH',
  /** Only return non-trashed results. */
  Without = 'WITHOUT'
}

/** The update billing input. */
export type UpdateBillingInput = {
  /** The apartment number. */
  apartmentNumber?: InputMaybe<Scalars['String']['input']>;
  /** The bank account ID. */
  bankAccountId?: InputMaybe<Scalars['ID']['input']>;
  /** The building number. */
  buildingNumber?: InputMaybe<Scalars['String']['input']>;
  /** The city. */
  city?: InputMaybe<Scalars['String']['input']>;
  /** The billing currency. */
  currency: PaymentCurrency;
  /** The billing ID. */
  id: Scalars['ID']['input'];
  /** The invoice email. */
  invoiceEmail?: InputMaybe<Scalars['String']['input']>;
  /** The monthly billing flag. */
  isMonthlyBilling: Scalars['Boolean']['input'];
  /** The VAT invoice request flag. */
  isVatInvoiceRequested: Scalars['Boolean']['input'];
  /** The name. */
  name: Scalars['String']['input'];
  /** The postcode. */
  postcode?: InputMaybe<Scalars['String']['input']>;
  /** The street. */
  street?: InputMaybe<Scalars['String']['input']>;
  /** The VAT number. */
  vatNumber?: InputMaybe<Scalars['String']['input']>;
};

/** The update button input. */
export type UpdateButtonInput = {
  /** The button ID. */
  id: Scalars['ID']['input'];
  /** The name. */
  name: Scalars['String']['input'];
  /** The pilot ID. */
  pilotId: Scalars['ID']['input'];
};

/** The update parking input. */
export type UpdateParkingInput = {
  /** The weekend end day. */
  calendarWeekendEndDay?: InputMaybe<Scalars['Int']['input']>;
  /** The weekend end time. */
  calendarWeekendEndTime?: InputMaybe<Scalars['String']['input']>;
  /** The weekend start day. */
  calendarWeekendStartDay?: InputMaybe<Scalars['Int']['input']>;
  /** The weekend start time. */
  calendarWeekendStartTime?: InputMaybe<Scalars['String']['input']>;
  /** The height (cm). */
  height: Scalars['Int']['input'];
  /** The parking ID. */
  id: Scalars['ID']['input'];
  /** The length (cm). */
  length: Scalars['Int']['input'];
  /** The name. */
  name: Scalars['String']['input'];
  /** The note. */
  note?: InputMaybe<Scalars['String']['input']>;
  /** The width (cm). */
  width: Scalars['Int']['input'];
};

/** The update password input. */
export type UpdatePasswordInput = {
  /** The current password. */
  currentPassword: Scalars['String']['input'];
  /** The new password. */
  password: Scalars['String']['input'];
};

/** The update password response. */
export type UpdatePasswordResponse = {
  __typename?: 'UpdatePasswordResponse';
  /** The update status. */
  status: UpdatePasswordStatus;
};

/** The update password statuses. */
export enum UpdatePasswordStatus {
  /** The updated password status. */
  PasswordUpdated = 'PASSWORD_UPDATED'
}

/** The update pilot input. */
export type UpdatePilotInput = {
  /** The pilot ID. */
  id: Scalars['ID']['input'];
  /** The name. */
  name: Scalars['String']['input'];
};

/** The update spot input. */
export type UpdateSpotInput = {
  /** The height (cm). */
  height: Scalars['Int']['input'];
  /** The spot ID. */
  id: Scalars['ID']['input'];
  /** The length (cm). */
  length: Scalars['Int']['input'];
  /** The width (cm). */
  width: Scalars['Int']['input'];
};

/** The update vehicle input. */
export type UpdateVehicleInput = {
  /** The billing ID. */
  billingId: Scalars['ID']['input'];
  /** The vehicle ID. */
  id: Scalars['ID']['input'];
  /** The name. */
  name: Scalars['String']['input'];
};

/** Input for uploading a single image. */
export type UploadImageInput = {
  /** The image file. */
  file: Scalars['Upload']['input'];
  /** The image resource type. */
  resource: Resource;
  /** The resource ID. */
  resourceId: Scalars['ID']['input'];
};

/** Input for uploading multiple images. */
export type UploadMultipleImagesInput = {
  /** The image files. */
  files: Array<Scalars['Upload']['input']>;
  /** The image resource type. */
  resource: Resource;
  /** The resource ID. */
  resourceId: Scalars['ID']['input'];
};

/** The user. */
export type User = {
  __typename?: 'User';
  /** The account balance. */
  balance: Scalars['Int']['output'];
  /** The user's bank accounts. */
  bankAccounts?: Maybe<Array<BankAccount>>;
  /** The user's billing profiles. */
  billings?: Maybe<Array<Billing>>;
  /** The birthdate. */
  birthdayOn?: Maybe<Scalars['DateTimeUtc']['output']>;
  /** The user's Blik payment method. */
  blik?: Maybe<Blik>;
  /** The user ID. */
  id: Scalars['ID']['output'];
  /** The user language. */
  language: Language;
  /** The full name. */
  name: Scalars['String']['output'];
  /** The user's organizations. */
  organizations?: Maybe<Array<Organization>>;
  /** The user's parkings. */
  parkings?: Maybe<Array<Parking>>;
  /** The referral code. */
  referral?: Maybe<Scalars['String']['output']>;
  /** The user role. */
  role: UserRole;
  /** The account status. */
  status: UserStatus;
  /** The user timezone. */
  timezone: Timezone;
  /** The user's transactions. */
  transactions?: Maybe<Array<Transaction>>;
  /** The user's vehicles. */
  vehicles?: Maybe<Array<Vehicle>>;
};

/** The user roles. */
export enum UserRole {
  /** The administrator role. */
  Administrator = 'ADMINISTRATOR',
  /** The operator role. */
  Operator = 'OPERATOR',
  /** The owner role. */
  Owner = 'OWNER',
  /** The partner role. */
  Partner = 'PARTNER',
  /** The renter role. */
  Renter = 'RENTER'
}

/** The user statuses. */
export enum UserStatus {
  /** The active status. */
  Active = 'ACTIVE',
  /** The banned status. */
  Banned = 'BANNED',
  /** The inactive status. */
  Inactive = 'INACTIVE'
}

/** The vehicle. */
export type Vehicle = {
  __typename?: 'Vehicle';
  /** The billing ID. */
  billingId: Scalars['ID']['output'];
  /** The creation date and time. */
  createdAt: Scalars['DateTimeUtc']['output'];
  /** The vehicle ID. */
  id: Scalars['ID']['output'];
  /** The primary flag. */
  isPrimary: Scalars['Boolean']['output'];
  /** The name. */
  name: Scalars['String']['output'];
  /** The registration number. */
  registrationNumber: Scalars['String']['output'];
  /** The vehicle status. */
  status: VehicleStatus;
  /** The update date and time. */
  updatedAt: Scalars['DateTimeUtc']['output'];
};

/** The vehicle filters input. */
export type VehicleFiltersInput = {
  /** The vehicle status. */
  status?: InputMaybe<VehicleStatus>;
  /** The user ID. */
  userId?: InputMaybe<Scalars['ID']['input']>;
};

/** A paginated list of Vehicle items. */
export type VehiclePaginator = {
  __typename?: 'VehiclePaginator';
  /** A list of Vehicle items. */
  data: Array<Vehicle>;
  /** Pagination information about the list of items. */
  paginatorInfo: PaginatorInfo;
};

/** The vehicle payload. */
export type VehiclePayload = {
  __typename?: 'VehiclePayload';
  /** The billing ID. */
  billingId: Scalars['ID']['output'];
  /** The creation date and time. */
  createdAt: Scalars['DateTimeUtc']['output'];
  /** The vehicle ID. */
  id: Scalars['ID']['output'];
  /** The primary flag. */
  isPrimary: Scalars['Boolean']['output'];
  /** The name. */
  name: Scalars['String']['output'];
  /** The registration number. */
  registrationNumber: Scalars['String']['output'];
  /** The vehicle status. */
  status: VehicleStatus;
  /** The update date and time. */
  updatedAt: Scalars['DateTimeUtc']['output'];
};

/** The vehicle statuses. */
export enum VehicleStatus {
  /** The active status. */
  Active = 'ACTIVE',
  /** The inactive status. */
  Inactive = 'INACTIVE'
}

/** The verification. */
export type Verification = {
  __typename?: 'Verification';
  /** The creation date and time. */
  createdAt: Scalars['DateTimeUtc']['output'];
  /** The verification ID. */
  id: Scalars['ID']['output'];
  /** The reason. */
  reason?: Maybe<Scalars['String']['output']>;
  /** The verification status. */
  status: VerificationStatus;
  /** The update date and time. */
  updatedAt: Scalars['DateTimeUtc']['output'];
  /** The verified entity ID. */
  verifiableId: Scalars['ID']['output'];
  /** The verified entity type. */
  verifiableType: Scalars['String']['output'];
};

/** The statuses. */
export enum VerificationStatus {
  /** The accepted status. */
  Accepted = 'ACCEPTED',
  /** The pending status. */
  Pending = 'PENDING',
  /** The rejected status. */
  Rejected = 'REJECTED'
}

/** The verification URL input. */
export type VerificationUrlInput = {
  /** The base URL. */
  url: Scalars['String']['input'];
};

/** The verify email input. */
export type VerifyEmailInput = {
  /** The expiration timestamp. */
  expires?: InputMaybe<Scalars['Int']['input']>;
  /** The verification hash. */
  hash: Scalars['String']['input'];
  /** The user ID. */
  id: Scalars['ID']['input'];
  /** The verification signature. */
  signature?: InputMaybe<Scalars['String']['input']>;
};
