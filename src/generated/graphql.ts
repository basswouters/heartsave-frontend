import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  numeric: any;
  point: any;
  timestamptz: any;
  uuid: any;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "address" */
export type Address = {
  __typename?: 'address';
  /** An array relationship */
  contacts: Array<Contact>;
  /** An aggregate relationship */
  contacts_aggregate: Contact_Aggregate;
  house_number: Scalars['numeric'];
  house_number_addition?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  /** An array relationship */
  locations: Array<Location>;
  /** An aggregate relationship */
  locations_aggregate: Location_Aggregate;
  street: Scalars['String'];
  zipcode: Scalars['String'];
};


/** columns and relationships of "address" */
export type AddressContactsArgs = {
  distinct_on?: InputMaybe<Array<Contact_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Contact_Order_By>>;
  where?: InputMaybe<Contact_Bool_Exp>;
};


/** columns and relationships of "address" */
export type AddressContacts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Contact_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Contact_Order_By>>;
  where?: InputMaybe<Contact_Bool_Exp>;
};


/** columns and relationships of "address" */
export type AddressLocationsArgs = {
  distinct_on?: InputMaybe<Array<Location_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Location_Order_By>>;
  where?: InputMaybe<Location_Bool_Exp>;
};


/** columns and relationships of "address" */
export type AddressLocations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Location_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Location_Order_By>>;
  where?: InputMaybe<Location_Bool_Exp>;
};

/** aggregated selection of "address" */
export type Address_Aggregate = {
  __typename?: 'address_aggregate';
  aggregate?: Maybe<Address_Aggregate_Fields>;
  nodes: Array<Address>;
};

/** aggregate fields of "address" */
export type Address_Aggregate_Fields = {
  __typename?: 'address_aggregate_fields';
  avg?: Maybe<Address_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Address_Max_Fields>;
  min?: Maybe<Address_Min_Fields>;
  stddev?: Maybe<Address_Stddev_Fields>;
  stddev_pop?: Maybe<Address_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Address_Stddev_Samp_Fields>;
  sum?: Maybe<Address_Sum_Fields>;
  var_pop?: Maybe<Address_Var_Pop_Fields>;
  var_samp?: Maybe<Address_Var_Samp_Fields>;
  variance?: Maybe<Address_Variance_Fields>;
};


/** aggregate fields of "address" */
export type Address_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Address_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Address_Avg_Fields = {
  __typename?: 'address_avg_fields';
  house_number?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "address". All fields are combined with a logical 'AND'. */
export type Address_Bool_Exp = {
  _and?: InputMaybe<Array<Address_Bool_Exp>>;
  _not?: InputMaybe<Address_Bool_Exp>;
  _or?: InputMaybe<Array<Address_Bool_Exp>>;
  contacts?: InputMaybe<Contact_Bool_Exp>;
  contacts_aggregate?: InputMaybe<Contact_Aggregate_Bool_Exp>;
  house_number?: InputMaybe<Numeric_Comparison_Exp>;
  house_number_addition?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  locations?: InputMaybe<Location_Bool_Exp>;
  locations_aggregate?: InputMaybe<Location_Aggregate_Bool_Exp>;
  street?: InputMaybe<String_Comparison_Exp>;
  zipcode?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "address" */
export enum Address_Constraint {
  /** unique or primary key constraint on columns "id" */
  AddresssPkey = 'addresss_pkey'
}

/** input type for incrementing numeric columns in table "address" */
export type Address_Inc_Input = {
  house_number?: InputMaybe<Scalars['numeric']>;
};

/** input type for inserting data into table "address" */
export type Address_Insert_Input = {
  contacts?: InputMaybe<Contact_Arr_Rel_Insert_Input>;
  house_number?: InputMaybe<Scalars['numeric']>;
  house_number_addition?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  locations?: InputMaybe<Location_Arr_Rel_Insert_Input>;
  street?: InputMaybe<Scalars['String']>;
  zipcode?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Address_Max_Fields = {
  __typename?: 'address_max_fields';
  house_number?: Maybe<Scalars['numeric']>;
  house_number_addition?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  street?: Maybe<Scalars['String']>;
  zipcode?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Address_Min_Fields = {
  __typename?: 'address_min_fields';
  house_number?: Maybe<Scalars['numeric']>;
  house_number_addition?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  street?: Maybe<Scalars['String']>;
  zipcode?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "address" */
export type Address_Mutation_Response = {
  __typename?: 'address_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Address>;
};

/** input type for inserting object relation for remote table "address" */
export type Address_Obj_Rel_Insert_Input = {
  data: Address_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Address_On_Conflict>;
};

/** on_conflict condition type for table "address" */
export type Address_On_Conflict = {
  constraint: Address_Constraint;
  update_columns?: Array<Address_Update_Column>;
  where?: InputMaybe<Address_Bool_Exp>;
};

/** Ordering options when selecting data from "address". */
export type Address_Order_By = {
  contacts_aggregate?: InputMaybe<Contact_Aggregate_Order_By>;
  house_number?: InputMaybe<Order_By>;
  house_number_addition?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  locations_aggregate?: InputMaybe<Location_Aggregate_Order_By>;
  street?: InputMaybe<Order_By>;
  zipcode?: InputMaybe<Order_By>;
};

/** primary key columns input for table: address */
export type Address_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "address" */
export enum Address_Select_Column {
  /** column name */
  HouseNumber = 'house_number',
  /** column name */
  HouseNumberAddition = 'house_number_addition',
  /** column name */
  Id = 'id',
  /** column name */
  Street = 'street',
  /** column name */
  Zipcode = 'zipcode'
}

/** input type for updating data in table "address" */
export type Address_Set_Input = {
  house_number?: InputMaybe<Scalars['numeric']>;
  house_number_addition?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  street?: InputMaybe<Scalars['String']>;
  zipcode?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Address_Stddev_Fields = {
  __typename?: 'address_stddev_fields';
  house_number?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Address_Stddev_Pop_Fields = {
  __typename?: 'address_stddev_pop_fields';
  house_number?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Address_Stddev_Samp_Fields = {
  __typename?: 'address_stddev_samp_fields';
  house_number?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "address" */
export type Address_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Address_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Address_Stream_Cursor_Value_Input = {
  house_number?: InputMaybe<Scalars['numeric']>;
  house_number_addition?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  street?: InputMaybe<Scalars['String']>;
  zipcode?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type Address_Sum_Fields = {
  __typename?: 'address_sum_fields';
  house_number?: Maybe<Scalars['numeric']>;
};

/** update columns of table "address" */
export enum Address_Update_Column {
  /** column name */
  HouseNumber = 'house_number',
  /** column name */
  HouseNumberAddition = 'house_number_addition',
  /** column name */
  Id = 'id',
  /** column name */
  Street = 'street',
  /** column name */
  Zipcode = 'zipcode'
}

export type Address_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Address_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Address_Set_Input>;
  where: Address_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Address_Var_Pop_Fields = {
  __typename?: 'address_var_pop_fields';
  house_number?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Address_Var_Samp_Fields = {
  __typename?: 'address_var_samp_fields';
  house_number?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Address_Variance_Fields = {
  __typename?: 'address_variance_fields';
  house_number?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "aed" */
export type Aed = {
  __typename?: 'aed';
  created_at: Scalars['timestamptz'];
  /** An object relationship */
  device?: Maybe<Device>;
  id: Scalars['uuid'];
  lifespan_aed?: Maybe<Scalars['Int']>;
  lifespan_battery: Scalars['Int'];
  lifespan_electrode: Scalars['Int'];
  manufacturer: Scalars['String'];
  type: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "aed" */
export type Aed_Aggregate = {
  __typename?: 'aed_aggregate';
  aggregate?: Maybe<Aed_Aggregate_Fields>;
  nodes: Array<Aed>;
};

/** aggregate fields of "aed" */
export type Aed_Aggregate_Fields = {
  __typename?: 'aed_aggregate_fields';
  avg?: Maybe<Aed_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Aed_Max_Fields>;
  min?: Maybe<Aed_Min_Fields>;
  stddev?: Maybe<Aed_Stddev_Fields>;
  stddev_pop?: Maybe<Aed_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Aed_Stddev_Samp_Fields>;
  sum?: Maybe<Aed_Sum_Fields>;
  var_pop?: Maybe<Aed_Var_Pop_Fields>;
  var_samp?: Maybe<Aed_Var_Samp_Fields>;
  variance?: Maybe<Aed_Variance_Fields>;
};


/** aggregate fields of "aed" */
export type Aed_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Aed_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Aed_Avg_Fields = {
  __typename?: 'aed_avg_fields';
  lifespan_aed?: Maybe<Scalars['Float']>;
  lifespan_battery?: Maybe<Scalars['Float']>;
  lifespan_electrode?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "aed". All fields are combined with a logical 'AND'. */
export type Aed_Bool_Exp = {
  _and?: InputMaybe<Array<Aed_Bool_Exp>>;
  _not?: InputMaybe<Aed_Bool_Exp>;
  _or?: InputMaybe<Array<Aed_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  device?: InputMaybe<Device_Bool_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  lifespan_aed?: InputMaybe<Int_Comparison_Exp>;
  lifespan_battery?: InputMaybe<Int_Comparison_Exp>;
  lifespan_electrode?: InputMaybe<Int_Comparison_Exp>;
  manufacturer?: InputMaybe<String_Comparison_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "aed" */
export enum Aed_Constraint {
  /** unique or primary key constraint on columns "id" */
  AedPkey = 'aed_pkey'
}

/** input type for incrementing numeric columns in table "aed" */
export type Aed_Inc_Input = {
  lifespan_aed?: InputMaybe<Scalars['Int']>;
  lifespan_battery?: InputMaybe<Scalars['Int']>;
  lifespan_electrode?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "aed" */
export type Aed_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  device?: InputMaybe<Device_Obj_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['uuid']>;
  lifespan_aed?: InputMaybe<Scalars['Int']>;
  lifespan_battery?: InputMaybe<Scalars['Int']>;
  lifespan_electrode?: InputMaybe<Scalars['Int']>;
  manufacturer?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Aed_Max_Fields = {
  __typename?: 'aed_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  lifespan_aed?: Maybe<Scalars['Int']>;
  lifespan_battery?: Maybe<Scalars['Int']>;
  lifespan_electrode?: Maybe<Scalars['Int']>;
  manufacturer?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Aed_Min_Fields = {
  __typename?: 'aed_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  lifespan_aed?: Maybe<Scalars['Int']>;
  lifespan_battery?: Maybe<Scalars['Int']>;
  lifespan_electrode?: Maybe<Scalars['Int']>;
  manufacturer?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "aed" */
export type Aed_Mutation_Response = {
  __typename?: 'aed_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Aed>;
};

/** input type for inserting object relation for remote table "aed" */
export type Aed_Obj_Rel_Insert_Input = {
  data: Aed_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Aed_On_Conflict>;
};

/** on_conflict condition type for table "aed" */
export type Aed_On_Conflict = {
  constraint: Aed_Constraint;
  update_columns?: Array<Aed_Update_Column>;
  where?: InputMaybe<Aed_Bool_Exp>;
};

/** Ordering options when selecting data from "aed". */
export type Aed_Order_By = {
  created_at?: InputMaybe<Order_By>;
  device?: InputMaybe<Device_Order_By>;
  id?: InputMaybe<Order_By>;
  lifespan_aed?: InputMaybe<Order_By>;
  lifespan_battery?: InputMaybe<Order_By>;
  lifespan_electrode?: InputMaybe<Order_By>;
  manufacturer?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: aed */
export type Aed_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "aed" */
export enum Aed_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  LifespanAed = 'lifespan_aed',
  /** column name */
  LifespanBattery = 'lifespan_battery',
  /** column name */
  LifespanElectrode = 'lifespan_electrode',
  /** column name */
  Manufacturer = 'manufacturer',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "aed" */
export type Aed_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  lifespan_aed?: InputMaybe<Scalars['Int']>;
  lifespan_battery?: InputMaybe<Scalars['Int']>;
  lifespan_electrode?: InputMaybe<Scalars['Int']>;
  manufacturer?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Aed_Stddev_Fields = {
  __typename?: 'aed_stddev_fields';
  lifespan_aed?: Maybe<Scalars['Float']>;
  lifespan_battery?: Maybe<Scalars['Float']>;
  lifespan_electrode?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Aed_Stddev_Pop_Fields = {
  __typename?: 'aed_stddev_pop_fields';
  lifespan_aed?: Maybe<Scalars['Float']>;
  lifespan_battery?: Maybe<Scalars['Float']>;
  lifespan_electrode?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Aed_Stddev_Samp_Fields = {
  __typename?: 'aed_stddev_samp_fields';
  lifespan_aed?: Maybe<Scalars['Float']>;
  lifespan_battery?: Maybe<Scalars['Float']>;
  lifespan_electrode?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "aed" */
export type Aed_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Aed_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Aed_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  lifespan_aed?: InputMaybe<Scalars['Int']>;
  lifespan_battery?: InputMaybe<Scalars['Int']>;
  lifespan_electrode?: InputMaybe<Scalars['Int']>;
  manufacturer?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate sum on columns */
export type Aed_Sum_Fields = {
  __typename?: 'aed_sum_fields';
  lifespan_aed?: Maybe<Scalars['Int']>;
  lifespan_battery?: Maybe<Scalars['Int']>;
  lifespan_electrode?: Maybe<Scalars['Int']>;
};

/** update columns of table "aed" */
export enum Aed_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  LifespanAed = 'lifespan_aed',
  /** column name */
  LifespanBattery = 'lifespan_battery',
  /** column name */
  LifespanElectrode = 'lifespan_electrode',
  /** column name */
  Manufacturer = 'manufacturer',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Aed_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Aed_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Aed_Set_Input>;
  where: Aed_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Aed_Var_Pop_Fields = {
  __typename?: 'aed_var_pop_fields';
  lifespan_aed?: Maybe<Scalars['Float']>;
  lifespan_battery?: Maybe<Scalars['Float']>;
  lifespan_electrode?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Aed_Var_Samp_Fields = {
  __typename?: 'aed_var_samp_fields';
  lifespan_aed?: Maybe<Scalars['Float']>;
  lifespan_battery?: Maybe<Scalars['Float']>;
  lifespan_electrode?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Aed_Variance_Fields = {
  __typename?: 'aed_variance_fields';
  lifespan_aed?: Maybe<Scalars['Float']>;
  lifespan_battery?: Maybe<Scalars['Float']>;
  lifespan_electrode?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "case" */
export type Case = {
  __typename?: 'case';
  article_number: Scalars['String'];
  battery_aa: Scalars['Int'];
  battery_aaa: Scalars['Int'];
  created_at: Scalars['timestamptz'];
  /** An object relationship */
  device?: Maybe<Device>;
  entry_code: Scalars['String'];
  id: Scalars['uuid'];
  lifespan: Scalars['Int'];
  manufacturer: Scalars['String'];
  posting_date?: Maybe<Scalars['timestamptz']>;
  type: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "case" */
export type Case_Aggregate = {
  __typename?: 'case_aggregate';
  aggregate?: Maybe<Case_Aggregate_Fields>;
  nodes: Array<Case>;
};

/** aggregate fields of "case" */
export type Case_Aggregate_Fields = {
  __typename?: 'case_aggregate_fields';
  avg?: Maybe<Case_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Case_Max_Fields>;
  min?: Maybe<Case_Min_Fields>;
  stddev?: Maybe<Case_Stddev_Fields>;
  stddev_pop?: Maybe<Case_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Case_Stddev_Samp_Fields>;
  sum?: Maybe<Case_Sum_Fields>;
  var_pop?: Maybe<Case_Var_Pop_Fields>;
  var_samp?: Maybe<Case_Var_Samp_Fields>;
  variance?: Maybe<Case_Variance_Fields>;
};


/** aggregate fields of "case" */
export type Case_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Case_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Case_Avg_Fields = {
  __typename?: 'case_avg_fields';
  battery_aa?: Maybe<Scalars['Float']>;
  battery_aaa?: Maybe<Scalars['Float']>;
  lifespan?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "case". All fields are combined with a logical 'AND'. */
export type Case_Bool_Exp = {
  _and?: InputMaybe<Array<Case_Bool_Exp>>;
  _not?: InputMaybe<Case_Bool_Exp>;
  _or?: InputMaybe<Array<Case_Bool_Exp>>;
  article_number?: InputMaybe<String_Comparison_Exp>;
  battery_aa?: InputMaybe<Int_Comparison_Exp>;
  battery_aaa?: InputMaybe<Int_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  device?: InputMaybe<Device_Bool_Exp>;
  entry_code?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  lifespan?: InputMaybe<Int_Comparison_Exp>;
  manufacturer?: InputMaybe<String_Comparison_Exp>;
  posting_date?: InputMaybe<Timestamptz_Comparison_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "case" */
export enum Case_Constraint {
  /** unique or primary key constraint on columns "id" */
  CasePkey = 'case_pkey'
}

/** input type for incrementing numeric columns in table "case" */
export type Case_Inc_Input = {
  battery_aa?: InputMaybe<Scalars['Int']>;
  battery_aaa?: InputMaybe<Scalars['Int']>;
  lifespan?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "case" */
export type Case_Insert_Input = {
  article_number?: InputMaybe<Scalars['String']>;
  battery_aa?: InputMaybe<Scalars['Int']>;
  battery_aaa?: InputMaybe<Scalars['Int']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  device?: InputMaybe<Device_Obj_Rel_Insert_Input>;
  entry_code?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  lifespan?: InputMaybe<Scalars['Int']>;
  manufacturer?: InputMaybe<Scalars['String']>;
  posting_date?: InputMaybe<Scalars['timestamptz']>;
  type?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Case_Max_Fields = {
  __typename?: 'case_max_fields';
  article_number?: Maybe<Scalars['String']>;
  battery_aa?: Maybe<Scalars['Int']>;
  battery_aaa?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  entry_code?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  lifespan?: Maybe<Scalars['Int']>;
  manufacturer?: Maybe<Scalars['String']>;
  posting_date?: Maybe<Scalars['timestamptz']>;
  type?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Case_Min_Fields = {
  __typename?: 'case_min_fields';
  article_number?: Maybe<Scalars['String']>;
  battery_aa?: Maybe<Scalars['Int']>;
  battery_aaa?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  entry_code?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  lifespan?: Maybe<Scalars['Int']>;
  manufacturer?: Maybe<Scalars['String']>;
  posting_date?: Maybe<Scalars['timestamptz']>;
  type?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "case" */
export type Case_Mutation_Response = {
  __typename?: 'case_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Case>;
};

/** input type for inserting object relation for remote table "case" */
export type Case_Obj_Rel_Insert_Input = {
  data: Case_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Case_On_Conflict>;
};

/** on_conflict condition type for table "case" */
export type Case_On_Conflict = {
  constraint: Case_Constraint;
  update_columns?: Array<Case_Update_Column>;
  where?: InputMaybe<Case_Bool_Exp>;
};

/** Ordering options when selecting data from "case". */
export type Case_Order_By = {
  article_number?: InputMaybe<Order_By>;
  battery_aa?: InputMaybe<Order_By>;
  battery_aaa?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  device?: InputMaybe<Device_Order_By>;
  entry_code?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  lifespan?: InputMaybe<Order_By>;
  manufacturer?: InputMaybe<Order_By>;
  posting_date?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: case */
export type Case_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "case" */
export enum Case_Select_Column {
  /** column name */
  ArticleNumber = 'article_number',
  /** column name */
  BatteryAa = 'battery_aa',
  /** column name */
  BatteryAaa = 'battery_aaa',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  EntryCode = 'entry_code',
  /** column name */
  Id = 'id',
  /** column name */
  Lifespan = 'lifespan',
  /** column name */
  Manufacturer = 'manufacturer',
  /** column name */
  PostingDate = 'posting_date',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "case" */
export type Case_Set_Input = {
  article_number?: InputMaybe<Scalars['String']>;
  battery_aa?: InputMaybe<Scalars['Int']>;
  battery_aaa?: InputMaybe<Scalars['Int']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  entry_code?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  lifespan?: InputMaybe<Scalars['Int']>;
  manufacturer?: InputMaybe<Scalars['String']>;
  posting_date?: InputMaybe<Scalars['timestamptz']>;
  type?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Case_Stddev_Fields = {
  __typename?: 'case_stddev_fields';
  battery_aa?: Maybe<Scalars['Float']>;
  battery_aaa?: Maybe<Scalars['Float']>;
  lifespan?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Case_Stddev_Pop_Fields = {
  __typename?: 'case_stddev_pop_fields';
  battery_aa?: Maybe<Scalars['Float']>;
  battery_aaa?: Maybe<Scalars['Float']>;
  lifespan?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Case_Stddev_Samp_Fields = {
  __typename?: 'case_stddev_samp_fields';
  battery_aa?: Maybe<Scalars['Float']>;
  battery_aaa?: Maybe<Scalars['Float']>;
  lifespan?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "case" */
export type Case_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Case_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Case_Stream_Cursor_Value_Input = {
  article_number?: InputMaybe<Scalars['String']>;
  battery_aa?: InputMaybe<Scalars['Int']>;
  battery_aaa?: InputMaybe<Scalars['Int']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  entry_code?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  lifespan?: InputMaybe<Scalars['Int']>;
  manufacturer?: InputMaybe<Scalars['String']>;
  posting_date?: InputMaybe<Scalars['timestamptz']>;
  type?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate sum on columns */
export type Case_Sum_Fields = {
  __typename?: 'case_sum_fields';
  battery_aa?: Maybe<Scalars['Int']>;
  battery_aaa?: Maybe<Scalars['Int']>;
  lifespan?: Maybe<Scalars['Int']>;
};

/** update columns of table "case" */
export enum Case_Update_Column {
  /** column name */
  ArticleNumber = 'article_number',
  /** column name */
  BatteryAa = 'battery_aa',
  /** column name */
  BatteryAaa = 'battery_aaa',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  EntryCode = 'entry_code',
  /** column name */
  Id = 'id',
  /** column name */
  Lifespan = 'lifespan',
  /** column name */
  Manufacturer = 'manufacturer',
  /** column name */
  PostingDate = 'posting_date',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Case_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Case_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Case_Set_Input>;
  where: Case_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Case_Var_Pop_Fields = {
  __typename?: 'case_var_pop_fields';
  battery_aa?: Maybe<Scalars['Float']>;
  battery_aaa?: Maybe<Scalars['Float']>;
  lifespan?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Case_Var_Samp_Fields = {
  __typename?: 'case_var_samp_fields';
  battery_aa?: Maybe<Scalars['Float']>;
  battery_aaa?: Maybe<Scalars['Float']>;
  lifespan?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Case_Variance_Fields = {
  __typename?: 'case_variance_fields';
  battery_aa?: Maybe<Scalars['Float']>;
  battery_aaa?: Maybe<Scalars['Float']>;
  lifespan?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "contact" */
export type Contact = {
  __typename?: 'contact';
  /** An object relationship */
  address?: Maybe<Address>;
  address_id?: Maybe<Scalars['uuid']>;
  bank_account?: Maybe<Scalars['String']>;
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  /** An array relationship */
  location_contacts: Array<Location_Contact>;
  /** An aggregate relationship */
  location_contacts_aggregate: Location_Contact_Aggregate;
  name: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "contact" */
export type ContactLocation_ContactsArgs = {
  distinct_on?: InputMaybe<Array<Location_Contact_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Location_Contact_Order_By>>;
  where?: InputMaybe<Location_Contact_Bool_Exp>;
};


/** columns and relationships of "contact" */
export type ContactLocation_Contacts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Location_Contact_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Location_Contact_Order_By>>;
  where?: InputMaybe<Location_Contact_Bool_Exp>;
};

/** aggregated selection of "contact" */
export type Contact_Aggregate = {
  __typename?: 'contact_aggregate';
  aggregate?: Maybe<Contact_Aggregate_Fields>;
  nodes: Array<Contact>;
};

export type Contact_Aggregate_Bool_Exp = {
  count?: InputMaybe<Contact_Aggregate_Bool_Exp_Count>;
};

export type Contact_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Contact_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Contact_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "contact" */
export type Contact_Aggregate_Fields = {
  __typename?: 'contact_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Contact_Max_Fields>;
  min?: Maybe<Contact_Min_Fields>;
};


/** aggregate fields of "contact" */
export type Contact_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Contact_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "contact" */
export type Contact_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Contact_Max_Order_By>;
  min?: InputMaybe<Contact_Min_Order_By>;
};

/** input type for inserting array relation for remote table "contact" */
export type Contact_Arr_Rel_Insert_Input = {
  data: Array<Contact_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Contact_On_Conflict>;
};

/** Boolean expression to filter rows from the table "contact". All fields are combined with a logical 'AND'. */
export type Contact_Bool_Exp = {
  _and?: InputMaybe<Array<Contact_Bool_Exp>>;
  _not?: InputMaybe<Contact_Bool_Exp>;
  _or?: InputMaybe<Array<Contact_Bool_Exp>>;
  address?: InputMaybe<Address_Bool_Exp>;
  address_id?: InputMaybe<Uuid_Comparison_Exp>;
  bank_account?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  location_contacts?: InputMaybe<Location_Contact_Bool_Exp>;
  location_contacts_aggregate?: InputMaybe<Location_Contact_Aggregate_Bool_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "contact" */
export enum Contact_Constraint {
  /** unique or primary key constraint on columns "id" */
  ContactsPkey = 'contacts_pkey'
}

/** input type for inserting data into table "contact" */
export type Contact_Insert_Input = {
  address?: InputMaybe<Address_Obj_Rel_Insert_Input>;
  address_id?: InputMaybe<Scalars['uuid']>;
  bank_account?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  location_contacts?: InputMaybe<Location_Contact_Arr_Rel_Insert_Input>;
  name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Contact_Max_Fields = {
  __typename?: 'contact_max_fields';
  address_id?: Maybe<Scalars['uuid']>;
  bank_account?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "contact" */
export type Contact_Max_Order_By = {
  address_id?: InputMaybe<Order_By>;
  bank_account?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Contact_Min_Fields = {
  __typename?: 'contact_min_fields';
  address_id?: Maybe<Scalars['uuid']>;
  bank_account?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "contact" */
export type Contact_Min_Order_By = {
  address_id?: InputMaybe<Order_By>;
  bank_account?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "contact" */
export type Contact_Mutation_Response = {
  __typename?: 'contact_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Contact>;
};

/** input type for inserting object relation for remote table "contact" */
export type Contact_Obj_Rel_Insert_Input = {
  data: Contact_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Contact_On_Conflict>;
};

/** on_conflict condition type for table "contact" */
export type Contact_On_Conflict = {
  constraint: Contact_Constraint;
  update_columns?: Array<Contact_Update_Column>;
  where?: InputMaybe<Contact_Bool_Exp>;
};

/** Ordering options when selecting data from "contact". */
export type Contact_Order_By = {
  address?: InputMaybe<Address_Order_By>;
  address_id?: InputMaybe<Order_By>;
  bank_account?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  location_contacts_aggregate?: InputMaybe<Location_Contact_Aggregate_Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: contact */
export type Contact_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "contact" */
export enum Contact_Select_Column {
  /** column name */
  AddressId = 'address_id',
  /** column name */
  BankAccount = 'bank_account',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "contact" */
export type Contact_Set_Input = {
  address_id?: InputMaybe<Scalars['uuid']>;
  bank_account?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** Streaming cursor of the table "contact" */
export type Contact_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Contact_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Contact_Stream_Cursor_Value_Input = {
  address_id?: InputMaybe<Scalars['uuid']>;
  bank_account?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "contact" */
export enum Contact_Update_Column {
  /** column name */
  AddressId = 'address_id',
  /** column name */
  BankAccount = 'bank_account',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Contact_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Contact_Set_Input>;
  where: Contact_Bool_Exp;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** columns and relationships of "device" */
export type Device = {
  __typename?: 'device';
  /** An object relationship */
  aed: Aed;
  aed_id: Scalars['uuid'];
  /** An object relationship */
  case: Case;
  case_id: Scalars['uuid'];
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  /** An object relationship */
  location: Location;
  location_id: Scalars['uuid'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "device" */
export type Device_Aggregate = {
  __typename?: 'device_aggregate';
  aggregate?: Maybe<Device_Aggregate_Fields>;
  nodes: Array<Device>;
};

export type Device_Aggregate_Bool_Exp = {
  count?: InputMaybe<Device_Aggregate_Bool_Exp_Count>;
};

export type Device_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Device_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Device_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "device" */
export type Device_Aggregate_Fields = {
  __typename?: 'device_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Device_Max_Fields>;
  min?: Maybe<Device_Min_Fields>;
};


/** aggregate fields of "device" */
export type Device_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Device_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "device" */
export type Device_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Device_Max_Order_By>;
  min?: InputMaybe<Device_Min_Order_By>;
};

/** input type for inserting array relation for remote table "device" */
export type Device_Arr_Rel_Insert_Input = {
  data: Array<Device_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Device_On_Conflict>;
};

/** Boolean expression to filter rows from the table "device". All fields are combined with a logical 'AND'. */
export type Device_Bool_Exp = {
  _and?: InputMaybe<Array<Device_Bool_Exp>>;
  _not?: InputMaybe<Device_Bool_Exp>;
  _or?: InputMaybe<Array<Device_Bool_Exp>>;
  aed?: InputMaybe<Aed_Bool_Exp>;
  aed_id?: InputMaybe<Uuid_Comparison_Exp>;
  case?: InputMaybe<Case_Bool_Exp>;
  case_id?: InputMaybe<Uuid_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  location?: InputMaybe<Location_Bool_Exp>;
  location_id?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "device" */
export enum Device_Constraint {
  /** unique or primary key constraint on columns "aed_id" */
  DeviceAedIdKey = 'device_aed_id_key',
  /** unique or primary key constraint on columns "case_id" */
  DeviceCaseIdKey = 'device_case_id_key',
  /** unique or primary key constraint on columns "id" */
  DevicePkey = 'device_pkey'
}

/** input type for inserting data into table "device" */
export type Device_Insert_Input = {
  aed?: InputMaybe<Aed_Obj_Rel_Insert_Input>;
  aed_id?: InputMaybe<Scalars['uuid']>;
  case?: InputMaybe<Case_Obj_Rel_Insert_Input>;
  case_id?: InputMaybe<Scalars['uuid']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  location?: InputMaybe<Location_Obj_Rel_Insert_Input>;
  location_id?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Device_Max_Fields = {
  __typename?: 'device_max_fields';
  aed_id?: Maybe<Scalars['uuid']>;
  case_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  location_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "device" */
export type Device_Max_Order_By = {
  aed_id?: InputMaybe<Order_By>;
  case_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  location_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Device_Min_Fields = {
  __typename?: 'device_min_fields';
  aed_id?: Maybe<Scalars['uuid']>;
  case_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  location_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "device" */
export type Device_Min_Order_By = {
  aed_id?: InputMaybe<Order_By>;
  case_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  location_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "device" */
export type Device_Mutation_Response = {
  __typename?: 'device_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Device>;
};

/** input type for inserting object relation for remote table "device" */
export type Device_Obj_Rel_Insert_Input = {
  data: Device_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Device_On_Conflict>;
};

/** on_conflict condition type for table "device" */
export type Device_On_Conflict = {
  constraint: Device_Constraint;
  update_columns?: Array<Device_Update_Column>;
  where?: InputMaybe<Device_Bool_Exp>;
};

/** Ordering options when selecting data from "device". */
export type Device_Order_By = {
  aed?: InputMaybe<Aed_Order_By>;
  aed_id?: InputMaybe<Order_By>;
  case?: InputMaybe<Case_Order_By>;
  case_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  location?: InputMaybe<Location_Order_By>;
  location_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: device */
export type Device_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "device" */
export enum Device_Select_Column {
  /** column name */
  AedId = 'aed_id',
  /** column name */
  CaseId = 'case_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  LocationId = 'location_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "device" */
export type Device_Set_Input = {
  aed_id?: InputMaybe<Scalars['uuid']>;
  case_id?: InputMaybe<Scalars['uuid']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  location_id?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** Streaming cursor of the table "device" */
export type Device_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Device_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Device_Stream_Cursor_Value_Input = {
  aed_id?: InputMaybe<Scalars['uuid']>;
  case_id?: InputMaybe<Scalars['uuid']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  location_id?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "device" */
export enum Device_Update_Column {
  /** column name */
  AedId = 'aed_id',
  /** column name */
  CaseId = 'case_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  LocationId = 'location_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Device_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Device_Set_Input>;
  where: Device_Bool_Exp;
};

/** columns and relationships of "location" */
export type Location = {
  __typename?: 'location';
  /** An object relationship */
  address?: Maybe<Address>;
  address_id?: Maybe<Scalars['uuid']>;
  coordinates?: Maybe<Scalars['point']>;
  created_at: Scalars['timestamptz'];
  /** An array relationship */
  devices: Array<Device>;
  /** An aggregate relationship */
  devices_aggregate: Device_Aggregate;
  id: Scalars['uuid'];
  /** An array relationship */
  location_contacts: Array<Location_Contact>;
  /** An aggregate relationship */
  location_contacts_aggregate: Location_Contact_Aggregate;
  serial_number?: Maybe<Scalars['Int']>;
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "location" */
export type LocationDevicesArgs = {
  distinct_on?: InputMaybe<Array<Device_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Device_Order_By>>;
  where?: InputMaybe<Device_Bool_Exp>;
};


/** columns and relationships of "location" */
export type LocationDevices_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Device_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Device_Order_By>>;
  where?: InputMaybe<Device_Bool_Exp>;
};


/** columns and relationships of "location" */
export type LocationLocation_ContactsArgs = {
  distinct_on?: InputMaybe<Array<Location_Contact_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Location_Contact_Order_By>>;
  where?: InputMaybe<Location_Contact_Bool_Exp>;
};


/** columns and relationships of "location" */
export type LocationLocation_Contacts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Location_Contact_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Location_Contact_Order_By>>;
  where?: InputMaybe<Location_Contact_Bool_Exp>;
};

/** aggregated selection of "location" */
export type Location_Aggregate = {
  __typename?: 'location_aggregate';
  aggregate?: Maybe<Location_Aggregate_Fields>;
  nodes: Array<Location>;
};

export type Location_Aggregate_Bool_Exp = {
  count?: InputMaybe<Location_Aggregate_Bool_Exp_Count>;
};

export type Location_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Location_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Location_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "location" */
export type Location_Aggregate_Fields = {
  __typename?: 'location_aggregate_fields';
  avg?: Maybe<Location_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Location_Max_Fields>;
  min?: Maybe<Location_Min_Fields>;
  stddev?: Maybe<Location_Stddev_Fields>;
  stddev_pop?: Maybe<Location_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Location_Stddev_Samp_Fields>;
  sum?: Maybe<Location_Sum_Fields>;
  var_pop?: Maybe<Location_Var_Pop_Fields>;
  var_samp?: Maybe<Location_Var_Samp_Fields>;
  variance?: Maybe<Location_Variance_Fields>;
};


/** aggregate fields of "location" */
export type Location_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Location_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "location" */
export type Location_Aggregate_Order_By = {
  avg?: InputMaybe<Location_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Location_Max_Order_By>;
  min?: InputMaybe<Location_Min_Order_By>;
  stddev?: InputMaybe<Location_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Location_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Location_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Location_Sum_Order_By>;
  var_pop?: InputMaybe<Location_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Location_Var_Samp_Order_By>;
  variance?: InputMaybe<Location_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "location" */
export type Location_Arr_Rel_Insert_Input = {
  data: Array<Location_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Location_On_Conflict>;
};

/** aggregate avg on columns */
export type Location_Avg_Fields = {
  __typename?: 'location_avg_fields';
  serial_number?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "location" */
export type Location_Avg_Order_By = {
  serial_number?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "location". All fields are combined with a logical 'AND'. */
export type Location_Bool_Exp = {
  _and?: InputMaybe<Array<Location_Bool_Exp>>;
  _not?: InputMaybe<Location_Bool_Exp>;
  _or?: InputMaybe<Array<Location_Bool_Exp>>;
  address?: InputMaybe<Address_Bool_Exp>;
  address_id?: InputMaybe<Uuid_Comparison_Exp>;
  coordinates?: InputMaybe<Point_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  devices?: InputMaybe<Device_Bool_Exp>;
  devices_aggregate?: InputMaybe<Device_Aggregate_Bool_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  location_contacts?: InputMaybe<Location_Contact_Bool_Exp>;
  location_contacts_aggregate?: InputMaybe<Location_Contact_Aggregate_Bool_Exp>;
  serial_number?: InputMaybe<Int_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "location" */
export enum Location_Constraint {
  /** unique or primary key constraint on columns "id" */
  LocationsPkey = 'locations_pkey'
}

/** Bridge table for location and contacts */
export type Location_Contact = {
  __typename?: 'location_contact';
  /** An object relationship */
  contact: Contact;
  contact_id: Scalars['uuid'];
  id: Scalars['uuid'];
  /** An object relationship */
  location: Location;
  location_id: Scalars['uuid'];
};

/** aggregated selection of "location_contact" */
export type Location_Contact_Aggregate = {
  __typename?: 'location_contact_aggregate';
  aggregate?: Maybe<Location_Contact_Aggregate_Fields>;
  nodes: Array<Location_Contact>;
};

export type Location_Contact_Aggregate_Bool_Exp = {
  count?: InputMaybe<Location_Contact_Aggregate_Bool_Exp_Count>;
};

export type Location_Contact_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Location_Contact_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Location_Contact_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "location_contact" */
export type Location_Contact_Aggregate_Fields = {
  __typename?: 'location_contact_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Location_Contact_Max_Fields>;
  min?: Maybe<Location_Contact_Min_Fields>;
};


/** aggregate fields of "location_contact" */
export type Location_Contact_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Location_Contact_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "location_contact" */
export type Location_Contact_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Location_Contact_Max_Order_By>;
  min?: InputMaybe<Location_Contact_Min_Order_By>;
};

/** input type for inserting array relation for remote table "location_contact" */
export type Location_Contact_Arr_Rel_Insert_Input = {
  data: Array<Location_Contact_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Location_Contact_On_Conflict>;
};

/** Boolean expression to filter rows from the table "location_contact". All fields are combined with a logical 'AND'. */
export type Location_Contact_Bool_Exp = {
  _and?: InputMaybe<Array<Location_Contact_Bool_Exp>>;
  _not?: InputMaybe<Location_Contact_Bool_Exp>;
  _or?: InputMaybe<Array<Location_Contact_Bool_Exp>>;
  contact?: InputMaybe<Contact_Bool_Exp>;
  contact_id?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  location?: InputMaybe<Location_Bool_Exp>;
  location_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "location_contact" */
export enum Location_Contact_Constraint {
  /** unique or primary key constraint on columns "id" */
  LocationContactPkey = 'location_contact_pkey'
}

/** input type for inserting data into table "location_contact" */
export type Location_Contact_Insert_Input = {
  contact?: InputMaybe<Contact_Obj_Rel_Insert_Input>;
  contact_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  location?: InputMaybe<Location_Obj_Rel_Insert_Input>;
  location_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Location_Contact_Max_Fields = {
  __typename?: 'location_contact_max_fields';
  contact_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  location_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "location_contact" */
export type Location_Contact_Max_Order_By = {
  contact_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  location_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Location_Contact_Min_Fields = {
  __typename?: 'location_contact_min_fields';
  contact_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  location_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "location_contact" */
export type Location_Contact_Min_Order_By = {
  contact_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  location_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "location_contact" */
export type Location_Contact_Mutation_Response = {
  __typename?: 'location_contact_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Location_Contact>;
};

/** on_conflict condition type for table "location_contact" */
export type Location_Contact_On_Conflict = {
  constraint: Location_Contact_Constraint;
  update_columns?: Array<Location_Contact_Update_Column>;
  where?: InputMaybe<Location_Contact_Bool_Exp>;
};

/** Ordering options when selecting data from "location_contact". */
export type Location_Contact_Order_By = {
  contact?: InputMaybe<Contact_Order_By>;
  contact_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  location?: InputMaybe<Location_Order_By>;
  location_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: location_contact */
export type Location_Contact_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "location_contact" */
export enum Location_Contact_Select_Column {
  /** column name */
  ContactId = 'contact_id',
  /** column name */
  Id = 'id',
  /** column name */
  LocationId = 'location_id'
}

/** input type for updating data in table "location_contact" */
export type Location_Contact_Set_Input = {
  contact_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  location_id?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "location_contact" */
export type Location_Contact_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Location_Contact_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Location_Contact_Stream_Cursor_Value_Input = {
  contact_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  location_id?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "location_contact" */
export enum Location_Contact_Update_Column {
  /** column name */
  ContactId = 'contact_id',
  /** column name */
  Id = 'id',
  /** column name */
  LocationId = 'location_id'
}

export type Location_Contact_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Location_Contact_Set_Input>;
  where: Location_Contact_Bool_Exp;
};

/** input type for incrementing numeric columns in table "location" */
export type Location_Inc_Input = {
  serial_number?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "location" */
export type Location_Insert_Input = {
  address?: InputMaybe<Address_Obj_Rel_Insert_Input>;
  address_id?: InputMaybe<Scalars['uuid']>;
  coordinates?: InputMaybe<Scalars['point']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  devices?: InputMaybe<Device_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['uuid']>;
  location_contacts?: InputMaybe<Location_Contact_Arr_Rel_Insert_Input>;
  serial_number?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Location_Max_Fields = {
  __typename?: 'location_max_fields';
  address_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  serial_number?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "location" */
export type Location_Max_Order_By = {
  address_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  serial_number?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Location_Min_Fields = {
  __typename?: 'location_min_fields';
  address_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  serial_number?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "location" */
export type Location_Min_Order_By = {
  address_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  serial_number?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "location" */
export type Location_Mutation_Response = {
  __typename?: 'location_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Location>;
};

/** input type for inserting object relation for remote table "location" */
export type Location_Obj_Rel_Insert_Input = {
  data: Location_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Location_On_Conflict>;
};

/** on_conflict condition type for table "location" */
export type Location_On_Conflict = {
  constraint: Location_Constraint;
  update_columns?: Array<Location_Update_Column>;
  where?: InputMaybe<Location_Bool_Exp>;
};

/** Ordering options when selecting data from "location". */
export type Location_Order_By = {
  address?: InputMaybe<Address_Order_By>;
  address_id?: InputMaybe<Order_By>;
  coordinates?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  devices_aggregate?: InputMaybe<Device_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  location_contacts_aggregate?: InputMaybe<Location_Contact_Aggregate_Order_By>;
  serial_number?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: location */
export type Location_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "location" */
export enum Location_Select_Column {
  /** column name */
  AddressId = 'address_id',
  /** column name */
  Coordinates = 'coordinates',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  SerialNumber = 'serial_number',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "location" */
export type Location_Set_Input = {
  address_id?: InputMaybe<Scalars['uuid']>;
  coordinates?: InputMaybe<Scalars['point']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  serial_number?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Location_Stddev_Fields = {
  __typename?: 'location_stddev_fields';
  serial_number?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "location" */
export type Location_Stddev_Order_By = {
  serial_number?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Location_Stddev_Pop_Fields = {
  __typename?: 'location_stddev_pop_fields';
  serial_number?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "location" */
export type Location_Stddev_Pop_Order_By = {
  serial_number?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Location_Stddev_Samp_Fields = {
  __typename?: 'location_stddev_samp_fields';
  serial_number?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "location" */
export type Location_Stddev_Samp_Order_By = {
  serial_number?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "location" */
export type Location_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Location_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Location_Stream_Cursor_Value_Input = {
  address_id?: InputMaybe<Scalars['uuid']>;
  coordinates?: InputMaybe<Scalars['point']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  serial_number?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate sum on columns */
export type Location_Sum_Fields = {
  __typename?: 'location_sum_fields';
  serial_number?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "location" */
export type Location_Sum_Order_By = {
  serial_number?: InputMaybe<Order_By>;
};

/** update columns of table "location" */
export enum Location_Update_Column {
  /** column name */
  AddressId = 'address_id',
  /** column name */
  Coordinates = 'coordinates',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  SerialNumber = 'serial_number',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Location_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Location_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Location_Set_Input>;
  where: Location_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Location_Var_Pop_Fields = {
  __typename?: 'location_var_pop_fields';
  serial_number?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "location" */
export type Location_Var_Pop_Order_By = {
  serial_number?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Location_Var_Samp_Fields = {
  __typename?: 'location_var_samp_fields';
  serial_number?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "location" */
export type Location_Var_Samp_Order_By = {
  serial_number?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Location_Variance_Fields = {
  __typename?: 'location_variance_fields';
  serial_number?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "location" */
export type Location_Variance_Order_By = {
  serial_number?: InputMaybe<Order_By>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "address" */
  delete_address?: Maybe<Address_Mutation_Response>;
  /** delete single row from the table: "address" */
  delete_address_by_pk?: Maybe<Address>;
  /** delete data from the table: "aed" */
  delete_aed?: Maybe<Aed_Mutation_Response>;
  /** delete single row from the table: "aed" */
  delete_aed_by_pk?: Maybe<Aed>;
  /** delete data from the table: "case" */
  delete_case?: Maybe<Case_Mutation_Response>;
  /** delete single row from the table: "case" */
  delete_case_by_pk?: Maybe<Case>;
  /** delete data from the table: "contact" */
  delete_contact?: Maybe<Contact_Mutation_Response>;
  /** delete single row from the table: "contact" */
  delete_contact_by_pk?: Maybe<Contact>;
  /** delete data from the table: "device" */
  delete_device?: Maybe<Device_Mutation_Response>;
  /** delete single row from the table: "device" */
  delete_device_by_pk?: Maybe<Device>;
  /** delete data from the table: "location" */
  delete_location?: Maybe<Location_Mutation_Response>;
  /** delete single row from the table: "location" */
  delete_location_by_pk?: Maybe<Location>;
  /** delete data from the table: "location_contact" */
  delete_location_contact?: Maybe<Location_Contact_Mutation_Response>;
  /** delete single row from the table: "location_contact" */
  delete_location_contact_by_pk?: Maybe<Location_Contact>;
  /** insert data into the table: "address" */
  insert_address?: Maybe<Address_Mutation_Response>;
  /** insert a single row into the table: "address" */
  insert_address_one?: Maybe<Address>;
  /** insert data into the table: "aed" */
  insert_aed?: Maybe<Aed_Mutation_Response>;
  /** insert a single row into the table: "aed" */
  insert_aed_one?: Maybe<Aed>;
  /** insert data into the table: "case" */
  insert_case?: Maybe<Case_Mutation_Response>;
  /** insert a single row into the table: "case" */
  insert_case_one?: Maybe<Case>;
  /** insert data into the table: "contact" */
  insert_contact?: Maybe<Contact_Mutation_Response>;
  /** insert a single row into the table: "contact" */
  insert_contact_one?: Maybe<Contact>;
  /** insert data into the table: "device" */
  insert_device?: Maybe<Device_Mutation_Response>;
  /** insert a single row into the table: "device" */
  insert_device_one?: Maybe<Device>;
  /** insert data into the table: "location" */
  insert_location?: Maybe<Location_Mutation_Response>;
  /** insert data into the table: "location_contact" */
  insert_location_contact?: Maybe<Location_Contact_Mutation_Response>;
  /** insert a single row into the table: "location_contact" */
  insert_location_contact_one?: Maybe<Location_Contact>;
  /** insert a single row into the table: "location" */
  insert_location_one?: Maybe<Location>;
  /** update data of the table: "address" */
  update_address?: Maybe<Address_Mutation_Response>;
  /** update single row of the table: "address" */
  update_address_by_pk?: Maybe<Address>;
  /** update multiples rows of table: "address" */
  update_address_many?: Maybe<Array<Maybe<Address_Mutation_Response>>>;
  /** update data of the table: "aed" */
  update_aed?: Maybe<Aed_Mutation_Response>;
  /** update single row of the table: "aed" */
  update_aed_by_pk?: Maybe<Aed>;
  /** update multiples rows of table: "aed" */
  update_aed_many?: Maybe<Array<Maybe<Aed_Mutation_Response>>>;
  /** update data of the table: "case" */
  update_case?: Maybe<Case_Mutation_Response>;
  /** update single row of the table: "case" */
  update_case_by_pk?: Maybe<Case>;
  /** update multiples rows of table: "case" */
  update_case_many?: Maybe<Array<Maybe<Case_Mutation_Response>>>;
  /** update data of the table: "contact" */
  update_contact?: Maybe<Contact_Mutation_Response>;
  /** update single row of the table: "contact" */
  update_contact_by_pk?: Maybe<Contact>;
  /** update multiples rows of table: "contact" */
  update_contact_many?: Maybe<Array<Maybe<Contact_Mutation_Response>>>;
  /** update data of the table: "device" */
  update_device?: Maybe<Device_Mutation_Response>;
  /** update single row of the table: "device" */
  update_device_by_pk?: Maybe<Device>;
  /** update multiples rows of table: "device" */
  update_device_many?: Maybe<Array<Maybe<Device_Mutation_Response>>>;
  /** update data of the table: "location" */
  update_location?: Maybe<Location_Mutation_Response>;
  /** update single row of the table: "location" */
  update_location_by_pk?: Maybe<Location>;
  /** update data of the table: "location_contact" */
  update_location_contact?: Maybe<Location_Contact_Mutation_Response>;
  /** update single row of the table: "location_contact" */
  update_location_contact_by_pk?: Maybe<Location_Contact>;
  /** update multiples rows of table: "location_contact" */
  update_location_contact_many?: Maybe<Array<Maybe<Location_Contact_Mutation_Response>>>;
  /** update multiples rows of table: "location" */
  update_location_many?: Maybe<Array<Maybe<Location_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_AddressArgs = {
  where: Address_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Address_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_AedArgs = {
  where: Aed_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Aed_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_CaseArgs = {
  where: Case_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Case_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_ContactArgs = {
  where: Contact_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Contact_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_DeviceArgs = {
  where: Device_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Device_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_LocationArgs = {
  where: Location_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Location_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Location_ContactArgs = {
  where: Location_Contact_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Location_Contact_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootInsert_AddressArgs = {
  objects: Array<Address_Insert_Input>;
  on_conflict?: InputMaybe<Address_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Address_OneArgs = {
  object: Address_Insert_Input;
  on_conflict?: InputMaybe<Address_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_AedArgs = {
  objects: Array<Aed_Insert_Input>;
  on_conflict?: InputMaybe<Aed_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Aed_OneArgs = {
  object: Aed_Insert_Input;
  on_conflict?: InputMaybe<Aed_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_CaseArgs = {
  objects: Array<Case_Insert_Input>;
  on_conflict?: InputMaybe<Case_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Case_OneArgs = {
  object: Case_Insert_Input;
  on_conflict?: InputMaybe<Case_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ContactArgs = {
  objects: Array<Contact_Insert_Input>;
  on_conflict?: InputMaybe<Contact_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Contact_OneArgs = {
  object: Contact_Insert_Input;
  on_conflict?: InputMaybe<Contact_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_DeviceArgs = {
  objects: Array<Device_Insert_Input>;
  on_conflict?: InputMaybe<Device_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Device_OneArgs = {
  object: Device_Insert_Input;
  on_conflict?: InputMaybe<Device_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_LocationArgs = {
  objects: Array<Location_Insert_Input>;
  on_conflict?: InputMaybe<Location_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Location_ContactArgs = {
  objects: Array<Location_Contact_Insert_Input>;
  on_conflict?: InputMaybe<Location_Contact_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Location_Contact_OneArgs = {
  object: Location_Contact_Insert_Input;
  on_conflict?: InputMaybe<Location_Contact_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Location_OneArgs = {
  object: Location_Insert_Input;
  on_conflict?: InputMaybe<Location_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_AddressArgs = {
  _inc?: InputMaybe<Address_Inc_Input>;
  _set?: InputMaybe<Address_Set_Input>;
  where: Address_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Address_By_PkArgs = {
  _inc?: InputMaybe<Address_Inc_Input>;
  _set?: InputMaybe<Address_Set_Input>;
  pk_columns: Address_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Address_ManyArgs = {
  updates: Array<Address_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_AedArgs = {
  _inc?: InputMaybe<Aed_Inc_Input>;
  _set?: InputMaybe<Aed_Set_Input>;
  where: Aed_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Aed_By_PkArgs = {
  _inc?: InputMaybe<Aed_Inc_Input>;
  _set?: InputMaybe<Aed_Set_Input>;
  pk_columns: Aed_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Aed_ManyArgs = {
  updates: Array<Aed_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_CaseArgs = {
  _inc?: InputMaybe<Case_Inc_Input>;
  _set?: InputMaybe<Case_Set_Input>;
  where: Case_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Case_By_PkArgs = {
  _inc?: InputMaybe<Case_Inc_Input>;
  _set?: InputMaybe<Case_Set_Input>;
  pk_columns: Case_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Case_ManyArgs = {
  updates: Array<Case_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_ContactArgs = {
  _set?: InputMaybe<Contact_Set_Input>;
  where: Contact_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Contact_By_PkArgs = {
  _set?: InputMaybe<Contact_Set_Input>;
  pk_columns: Contact_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Contact_ManyArgs = {
  updates: Array<Contact_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_DeviceArgs = {
  _set?: InputMaybe<Device_Set_Input>;
  where: Device_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Device_By_PkArgs = {
  _set?: InputMaybe<Device_Set_Input>;
  pk_columns: Device_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Device_ManyArgs = {
  updates: Array<Device_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_LocationArgs = {
  _inc?: InputMaybe<Location_Inc_Input>;
  _set?: InputMaybe<Location_Set_Input>;
  where: Location_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Location_By_PkArgs = {
  _inc?: InputMaybe<Location_Inc_Input>;
  _set?: InputMaybe<Location_Set_Input>;
  pk_columns: Location_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Location_ContactArgs = {
  _set?: InputMaybe<Location_Contact_Set_Input>;
  where: Location_Contact_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Location_Contact_By_PkArgs = {
  _set?: InputMaybe<Location_Contact_Set_Input>;
  pk_columns: Location_Contact_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Location_Contact_ManyArgs = {
  updates: Array<Location_Contact_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Location_ManyArgs = {
  updates: Array<Location_Updates>;
};

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['numeric']>;
  _gt?: InputMaybe<Scalars['numeric']>;
  _gte?: InputMaybe<Scalars['numeric']>;
  _in?: InputMaybe<Array<Scalars['numeric']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['numeric']>;
  _lte?: InputMaybe<Scalars['numeric']>;
  _neq?: InputMaybe<Scalars['numeric']>;
  _nin?: InputMaybe<Array<Scalars['numeric']>>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** Boolean expression to compare columns of type "point". All fields are combined with logical 'AND'. */
export type Point_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['point']>;
  _gt?: InputMaybe<Scalars['point']>;
  _gte?: InputMaybe<Scalars['point']>;
  _in?: InputMaybe<Array<Scalars['point']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['point']>;
  _lte?: InputMaybe<Scalars['point']>;
  _neq?: InputMaybe<Scalars['point']>;
  _nin?: InputMaybe<Array<Scalars['point']>>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "address" */
  address: Array<Address>;
  /** fetch aggregated fields from the table: "address" */
  address_aggregate: Address_Aggregate;
  /** fetch data from the table: "address" using primary key columns */
  address_by_pk?: Maybe<Address>;
  /** fetch data from the table: "aed" */
  aed: Array<Aed>;
  /** fetch aggregated fields from the table: "aed" */
  aed_aggregate: Aed_Aggregate;
  /** fetch data from the table: "aed" using primary key columns */
  aed_by_pk?: Maybe<Aed>;
  /** fetch data from the table: "case" */
  case: Array<Case>;
  /** fetch aggregated fields from the table: "case" */
  case_aggregate: Case_Aggregate;
  /** fetch data from the table: "case" using primary key columns */
  case_by_pk?: Maybe<Case>;
  /** fetch data from the table: "contact" */
  contact: Array<Contact>;
  /** fetch aggregated fields from the table: "contact" */
  contact_aggregate: Contact_Aggregate;
  /** fetch data from the table: "contact" using primary key columns */
  contact_by_pk?: Maybe<Contact>;
  /** fetch data from the table: "device" */
  device: Array<Device>;
  /** fetch aggregated fields from the table: "device" */
  device_aggregate: Device_Aggregate;
  /** fetch data from the table: "device" using primary key columns */
  device_by_pk?: Maybe<Device>;
  /** fetch data from the table: "location" */
  location: Array<Location>;
  /** fetch aggregated fields from the table: "location" */
  location_aggregate: Location_Aggregate;
  /** fetch data from the table: "location" using primary key columns */
  location_by_pk?: Maybe<Location>;
  /** fetch data from the table: "location_contact" */
  location_contact: Array<Location_Contact>;
  /** fetch aggregated fields from the table: "location_contact" */
  location_contact_aggregate: Location_Contact_Aggregate;
  /** fetch data from the table: "location_contact" using primary key columns */
  location_contact_by_pk?: Maybe<Location_Contact>;
};


export type Query_RootAddressArgs = {
  distinct_on?: InputMaybe<Array<Address_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Address_Order_By>>;
  where?: InputMaybe<Address_Bool_Exp>;
};


export type Query_RootAddress_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Address_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Address_Order_By>>;
  where?: InputMaybe<Address_Bool_Exp>;
};


export type Query_RootAddress_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootAedArgs = {
  distinct_on?: InputMaybe<Array<Aed_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Aed_Order_By>>;
  where?: InputMaybe<Aed_Bool_Exp>;
};


export type Query_RootAed_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Aed_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Aed_Order_By>>;
  where?: InputMaybe<Aed_Bool_Exp>;
};


export type Query_RootAed_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootCaseArgs = {
  distinct_on?: InputMaybe<Array<Case_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Case_Order_By>>;
  where?: InputMaybe<Case_Bool_Exp>;
};


export type Query_RootCase_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Case_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Case_Order_By>>;
  where?: InputMaybe<Case_Bool_Exp>;
};


export type Query_RootCase_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootContactArgs = {
  distinct_on?: InputMaybe<Array<Contact_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Contact_Order_By>>;
  where?: InputMaybe<Contact_Bool_Exp>;
};


export type Query_RootContact_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Contact_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Contact_Order_By>>;
  where?: InputMaybe<Contact_Bool_Exp>;
};


export type Query_RootContact_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootDeviceArgs = {
  distinct_on?: InputMaybe<Array<Device_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Device_Order_By>>;
  where?: InputMaybe<Device_Bool_Exp>;
};


export type Query_RootDevice_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Device_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Device_Order_By>>;
  where?: InputMaybe<Device_Bool_Exp>;
};


export type Query_RootDevice_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootLocationArgs = {
  distinct_on?: InputMaybe<Array<Location_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Location_Order_By>>;
  where?: InputMaybe<Location_Bool_Exp>;
};


export type Query_RootLocation_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Location_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Location_Order_By>>;
  where?: InputMaybe<Location_Bool_Exp>;
};


export type Query_RootLocation_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootLocation_ContactArgs = {
  distinct_on?: InputMaybe<Array<Location_Contact_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Location_Contact_Order_By>>;
  where?: InputMaybe<Location_Contact_Bool_Exp>;
};


export type Query_RootLocation_Contact_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Location_Contact_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Location_Contact_Order_By>>;
  where?: InputMaybe<Location_Contact_Bool_Exp>;
};


export type Query_RootLocation_Contact_By_PkArgs = {
  id: Scalars['uuid'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "address" */
  address: Array<Address>;
  /** fetch aggregated fields from the table: "address" */
  address_aggregate: Address_Aggregate;
  /** fetch data from the table: "address" using primary key columns */
  address_by_pk?: Maybe<Address>;
  /** fetch data from the table in a streaming manner: "address" */
  address_stream: Array<Address>;
  /** fetch data from the table: "aed" */
  aed: Array<Aed>;
  /** fetch aggregated fields from the table: "aed" */
  aed_aggregate: Aed_Aggregate;
  /** fetch data from the table: "aed" using primary key columns */
  aed_by_pk?: Maybe<Aed>;
  /** fetch data from the table in a streaming manner: "aed" */
  aed_stream: Array<Aed>;
  /** fetch data from the table: "case" */
  case: Array<Case>;
  /** fetch aggregated fields from the table: "case" */
  case_aggregate: Case_Aggregate;
  /** fetch data from the table: "case" using primary key columns */
  case_by_pk?: Maybe<Case>;
  /** fetch data from the table in a streaming manner: "case" */
  case_stream: Array<Case>;
  /** fetch data from the table: "contact" */
  contact: Array<Contact>;
  /** fetch aggregated fields from the table: "contact" */
  contact_aggregate: Contact_Aggregate;
  /** fetch data from the table: "contact" using primary key columns */
  contact_by_pk?: Maybe<Contact>;
  /** fetch data from the table in a streaming manner: "contact" */
  contact_stream: Array<Contact>;
  /** fetch data from the table: "device" */
  device: Array<Device>;
  /** fetch aggregated fields from the table: "device" */
  device_aggregate: Device_Aggregate;
  /** fetch data from the table: "device" using primary key columns */
  device_by_pk?: Maybe<Device>;
  /** fetch data from the table in a streaming manner: "device" */
  device_stream: Array<Device>;
  /** fetch data from the table: "location" */
  location: Array<Location>;
  /** fetch aggregated fields from the table: "location" */
  location_aggregate: Location_Aggregate;
  /** fetch data from the table: "location" using primary key columns */
  location_by_pk?: Maybe<Location>;
  /** fetch data from the table: "location_contact" */
  location_contact: Array<Location_Contact>;
  /** fetch aggregated fields from the table: "location_contact" */
  location_contact_aggregate: Location_Contact_Aggregate;
  /** fetch data from the table: "location_contact" using primary key columns */
  location_contact_by_pk?: Maybe<Location_Contact>;
  /** fetch data from the table in a streaming manner: "location_contact" */
  location_contact_stream: Array<Location_Contact>;
  /** fetch data from the table in a streaming manner: "location" */
  location_stream: Array<Location>;
};


export type Subscription_RootAddressArgs = {
  distinct_on?: InputMaybe<Array<Address_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Address_Order_By>>;
  where?: InputMaybe<Address_Bool_Exp>;
};


export type Subscription_RootAddress_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Address_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Address_Order_By>>;
  where?: InputMaybe<Address_Bool_Exp>;
};


export type Subscription_RootAddress_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootAddress_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Address_Stream_Cursor_Input>>;
  where?: InputMaybe<Address_Bool_Exp>;
};


export type Subscription_RootAedArgs = {
  distinct_on?: InputMaybe<Array<Aed_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Aed_Order_By>>;
  where?: InputMaybe<Aed_Bool_Exp>;
};


export type Subscription_RootAed_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Aed_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Aed_Order_By>>;
  where?: InputMaybe<Aed_Bool_Exp>;
};


export type Subscription_RootAed_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootAed_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Aed_Stream_Cursor_Input>>;
  where?: InputMaybe<Aed_Bool_Exp>;
};


export type Subscription_RootCaseArgs = {
  distinct_on?: InputMaybe<Array<Case_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Case_Order_By>>;
  where?: InputMaybe<Case_Bool_Exp>;
};


export type Subscription_RootCase_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Case_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Case_Order_By>>;
  where?: InputMaybe<Case_Bool_Exp>;
};


export type Subscription_RootCase_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootCase_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Case_Stream_Cursor_Input>>;
  where?: InputMaybe<Case_Bool_Exp>;
};


export type Subscription_RootContactArgs = {
  distinct_on?: InputMaybe<Array<Contact_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Contact_Order_By>>;
  where?: InputMaybe<Contact_Bool_Exp>;
};


export type Subscription_RootContact_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Contact_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Contact_Order_By>>;
  where?: InputMaybe<Contact_Bool_Exp>;
};


export type Subscription_RootContact_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootContact_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Contact_Stream_Cursor_Input>>;
  where?: InputMaybe<Contact_Bool_Exp>;
};


export type Subscription_RootDeviceArgs = {
  distinct_on?: InputMaybe<Array<Device_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Device_Order_By>>;
  where?: InputMaybe<Device_Bool_Exp>;
};


export type Subscription_RootDevice_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Device_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Device_Order_By>>;
  where?: InputMaybe<Device_Bool_Exp>;
};


export type Subscription_RootDevice_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootDevice_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Device_Stream_Cursor_Input>>;
  where?: InputMaybe<Device_Bool_Exp>;
};


export type Subscription_RootLocationArgs = {
  distinct_on?: InputMaybe<Array<Location_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Location_Order_By>>;
  where?: InputMaybe<Location_Bool_Exp>;
};


export type Subscription_RootLocation_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Location_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Location_Order_By>>;
  where?: InputMaybe<Location_Bool_Exp>;
};


export type Subscription_RootLocation_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootLocation_ContactArgs = {
  distinct_on?: InputMaybe<Array<Location_Contact_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Location_Contact_Order_By>>;
  where?: InputMaybe<Location_Contact_Bool_Exp>;
};


export type Subscription_RootLocation_Contact_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Location_Contact_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Location_Contact_Order_By>>;
  where?: InputMaybe<Location_Contact_Bool_Exp>;
};


export type Subscription_RootLocation_Contact_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootLocation_Contact_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Location_Contact_Stream_Cursor_Input>>;
  where?: InputMaybe<Location_Contact_Bool_Exp>;
};


export type Subscription_RootLocation_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Location_Stream_Cursor_Input>>;
  where?: InputMaybe<Location_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};

export type GetDevicesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetDevicesQuery = { __typename?: 'query_root', device: Array<{ __typename?: 'device', id: any }> };

export type AddLocationMutationVariables = Exact<{
  data?: InputMaybe<Location_Insert_Input>;
}>;


export type AddLocationMutation = { __typename?: 'mutation_root', insert_location_one?: { __typename?: 'location', id: any } | null };


export const GetDevicesDocument = gql`
    query getDevices {
  device {
    id
  }
}
    `;

/**
 * __useGetDevicesQuery__
 *
 * To run a query within a React component, call `useGetDevicesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDevicesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDevicesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetDevicesQuery(baseOptions?: Apollo.QueryHookOptions<GetDevicesQuery, GetDevicesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetDevicesQuery, GetDevicesQueryVariables>(GetDevicesDocument, options);
      }
export function useGetDevicesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetDevicesQuery, GetDevicesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetDevicesQuery, GetDevicesQueryVariables>(GetDevicesDocument, options);
        }
export type GetDevicesQueryHookResult = ReturnType<typeof useGetDevicesQuery>;
export type GetDevicesLazyQueryHookResult = ReturnType<typeof useGetDevicesLazyQuery>;
export type GetDevicesQueryResult = Apollo.QueryResult<GetDevicesQuery, GetDevicesQueryVariables>;
export const AddLocationDocument = gql`
    mutation addLocation($data: location_insert_input = {}) {
  insert_location_one(object: $data) {
    id
  }
}
    `;
export type AddLocationMutationFn = Apollo.MutationFunction<AddLocationMutation, AddLocationMutationVariables>;

/**
 * __useAddLocationMutation__
 *
 * To run a mutation, you first call `useAddLocationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddLocationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addLocationMutation, { data, loading, error }] = useAddLocationMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useAddLocationMutation(baseOptions?: Apollo.MutationHookOptions<AddLocationMutation, AddLocationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddLocationMutation, AddLocationMutationVariables>(AddLocationDocument, options);
      }
export type AddLocationMutationHookResult = ReturnType<typeof useAddLocationMutation>;
export type AddLocationMutationResult = Apollo.MutationResult<AddLocationMutation>;
export type AddLocationMutationOptions = Apollo.BaseMutationOptions<AddLocationMutation, AddLocationMutationVariables>;