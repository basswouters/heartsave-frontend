import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
import gql from 'graphql-tag'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends Record<string, unknown>> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
const defaultOptions = {} as const

/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  numeric: any
  point: any
  uuid: any
}

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>
  _gt?: InputMaybe<Scalars['Int']>
  _gte?: InputMaybe<Scalars['Int']>
  _in?: InputMaybe<Array<Scalars['Int']>>
  _is_null?: InputMaybe<Scalars['Boolean']>
  _lt?: InputMaybe<Scalars['Int']>
  _lte?: InputMaybe<Scalars['Int']>
  _neq?: InputMaybe<Scalars['Int']>
  _nin?: InputMaybe<Array<Scalars['Int']>>
}

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>
  _gt?: InputMaybe<Scalars['String']>
  _gte?: InputMaybe<Scalars['String']>
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>
  _in?: InputMaybe<Array<Scalars['String']>>
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>
  _is_null?: InputMaybe<Scalars['Boolean']>
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>
  _lt?: InputMaybe<Scalars['String']>
  _lte?: InputMaybe<Scalars['String']>
  _neq?: InputMaybe<Scalars['String']>
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>
  _nin?: InputMaybe<Array<Scalars['String']>>
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>
}

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** columns and relationships of "device_contacts" */
export type Device_Contacts = {
  __typename?: 'device_contacts'
  address: Scalars['String']
  bank_account: Scalars['String']
  /** An object relationship */
  device?: Maybe<Devices>
  device_id?: Maybe<Scalars['uuid']>
  emailaddress: Scalars['String']
  id: Scalars['uuid']
  name: Scalars['String']
  phone_number: Scalars['String']
  zip_code: Scalars['String']
}

/** aggregated selection of "device_contacts" */
export type Device_Contacts_Aggregate = {
  __typename?: 'device_contacts_aggregate'
  aggregate?: Maybe<Device_Contacts_Aggregate_Fields>
  nodes: Device_Contacts[]
}

export type Device_Contacts_Aggregate_Bool_Exp = {
  count?: InputMaybe<Device_Contacts_Aggregate_Bool_Exp_Count>
}

export type Device_Contacts_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Device_Contacts_Select_Column[]>
  distinct?: InputMaybe<Scalars['Boolean']>
  filter?: InputMaybe<Device_Contacts_Bool_Exp>
  predicate: Int_Comparison_Exp
}

/** aggregate fields of "device_contacts" */
export type Device_Contacts_Aggregate_Fields = {
  __typename?: 'device_contacts_aggregate_fields'
  count: Scalars['Int']
  max?: Maybe<Device_Contacts_Max_Fields>
  min?: Maybe<Device_Contacts_Min_Fields>
}

/** aggregate fields of "device_contacts" */
export type Device_Contacts_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Device_Contacts_Select_Column[]>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** order by aggregate values of table "device_contacts" */
export type Device_Contacts_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>
  max?: InputMaybe<Device_Contacts_Max_Order_By>
  min?: InputMaybe<Device_Contacts_Min_Order_By>
}

/** input type for inserting array relation for remote table "device_contacts" */
export type Device_Contacts_Arr_Rel_Insert_Input = {
  data: Device_Contacts_Insert_Input[]
  /** upsert condition */
  on_conflict?: InputMaybe<Device_Contacts_On_Conflict>
}

/** Boolean expression to filter rows from the table "device_contacts". All fields are combined with a logical 'AND'. */
export type Device_Contacts_Bool_Exp = {
  _and?: InputMaybe<Device_Contacts_Bool_Exp[]>
  _not?: InputMaybe<Device_Contacts_Bool_Exp>
  _or?: InputMaybe<Device_Contacts_Bool_Exp[]>
  address?: InputMaybe<String_Comparison_Exp>
  bank_account?: InputMaybe<String_Comparison_Exp>
  device?: InputMaybe<Devices_Bool_Exp>
  device_id?: InputMaybe<Uuid_Comparison_Exp>
  emailaddress?: InputMaybe<String_Comparison_Exp>
  id?: InputMaybe<Uuid_Comparison_Exp>
  name?: InputMaybe<String_Comparison_Exp>
  phone_number?: InputMaybe<String_Comparison_Exp>
  zip_code?: InputMaybe<String_Comparison_Exp>
}

/** unique or primary key constraints on table "device_contacts" */
export enum Device_Contacts_Constraint {
  /** unique or primary key constraint on columns "id" */
  DeviceContactsPkey = 'device_contacts_pkey'
}

/** input type for inserting data into table "device_contacts" */
export type Device_Contacts_Insert_Input = {
  address?: InputMaybe<Scalars['String']>
  bank_account?: InputMaybe<Scalars['String']>
  device?: InputMaybe<Devices_Obj_Rel_Insert_Input>
  device_id?: InputMaybe<Scalars['uuid']>
  emailaddress?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['uuid']>
  name?: InputMaybe<Scalars['String']>
  phone_number?: InputMaybe<Scalars['String']>
  zip_code?: InputMaybe<Scalars['String']>
}

/** aggregate max on columns */
export type Device_Contacts_Max_Fields = {
  __typename?: 'device_contacts_max_fields'
  address?: Maybe<Scalars['String']>
  bank_account?: Maybe<Scalars['String']>
  device_id?: Maybe<Scalars['uuid']>
  emailaddress?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['uuid']>
  name?: Maybe<Scalars['String']>
  phone_number?: Maybe<Scalars['String']>
  zip_code?: Maybe<Scalars['String']>
}

/** order by max() on columns of table "device_contacts" */
export type Device_Contacts_Max_Order_By = {
  address?: InputMaybe<Order_By>
  bank_account?: InputMaybe<Order_By>
  device_id?: InputMaybe<Order_By>
  emailaddress?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  name?: InputMaybe<Order_By>
  phone_number?: InputMaybe<Order_By>
  zip_code?: InputMaybe<Order_By>
}

/** aggregate min on columns */
export type Device_Contacts_Min_Fields = {
  __typename?: 'device_contacts_min_fields'
  address?: Maybe<Scalars['String']>
  bank_account?: Maybe<Scalars['String']>
  device_id?: Maybe<Scalars['uuid']>
  emailaddress?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['uuid']>
  name?: Maybe<Scalars['String']>
  phone_number?: Maybe<Scalars['String']>
  zip_code?: Maybe<Scalars['String']>
}

/** order by min() on columns of table "device_contacts" */
export type Device_Contacts_Min_Order_By = {
  address?: InputMaybe<Order_By>
  bank_account?: InputMaybe<Order_By>
  device_id?: InputMaybe<Order_By>
  emailaddress?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  name?: InputMaybe<Order_By>
  phone_number?: InputMaybe<Order_By>
  zip_code?: InputMaybe<Order_By>
}

/** response of any mutation on the table "device_contacts" */
export type Device_Contacts_Mutation_Response = {
  __typename?: 'device_contacts_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Device_Contacts[]
}

/** on_conflict condition type for table "device_contacts" */
export type Device_Contacts_On_Conflict = {
  constraint: Device_Contacts_Constraint
  update_columns?: Device_Contacts_Update_Column[]
  where?: InputMaybe<Device_Contacts_Bool_Exp>
}

/** Ordering options when selecting data from "device_contacts". */
export type Device_Contacts_Order_By = {
  address?: InputMaybe<Order_By>
  bank_account?: InputMaybe<Order_By>
  device?: InputMaybe<Devices_Order_By>
  device_id?: InputMaybe<Order_By>
  emailaddress?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  name?: InputMaybe<Order_By>
  phone_number?: InputMaybe<Order_By>
  zip_code?: InputMaybe<Order_By>
}

/** primary key columns input for table: device_contacts */
export type Device_Contacts_Pk_Columns_Input = {
  id: Scalars['uuid']
}

/** select columns of table "device_contacts" */
export enum Device_Contacts_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  BankAccount = 'bank_account',
  /** column name */
  DeviceId = 'device_id',
  /** column name */
  Emailaddress = 'emailaddress',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  PhoneNumber = 'phone_number',
  /** column name */
  ZipCode = 'zip_code'
}

/** input type for updating data in table "device_contacts" */
export type Device_Contacts_Set_Input = {
  address?: InputMaybe<Scalars['String']>
  bank_account?: InputMaybe<Scalars['String']>
  device_id?: InputMaybe<Scalars['uuid']>
  emailaddress?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['uuid']>
  name?: InputMaybe<Scalars['String']>
  phone_number?: InputMaybe<Scalars['String']>
  zip_code?: InputMaybe<Scalars['String']>
}

/** Streaming cursor of the table "device_contacts" */
export type Device_Contacts_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Device_Contacts_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Device_Contacts_Stream_Cursor_Value_Input = {
  address?: InputMaybe<Scalars['String']>
  bank_account?: InputMaybe<Scalars['String']>
  device_id?: InputMaybe<Scalars['uuid']>
  emailaddress?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['uuid']>
  name?: InputMaybe<Scalars['String']>
  phone_number?: InputMaybe<Scalars['String']>
  zip_code?: InputMaybe<Scalars['String']>
}

/** update columns of table "device_contacts" */
export enum Device_Contacts_Update_Column {
  /** column name */
  Address = 'address',
  /** column name */
  BankAccount = 'bank_account',
  /** column name */
  DeviceId = 'device_id',
  /** column name */
  Emailaddress = 'emailaddress',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  PhoneNumber = 'phone_number',
  /** column name */
  ZipCode = 'zip_code'
}

export type Device_Contacts_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Device_Contacts_Set_Input>
  where: Device_Contacts_Bool_Exp
}

/** columns and relationships of "device_data_aed" */
export type Device_Data_Aed = {
  __typename?: 'device_data_aed'
  device_id: Scalars['uuid']
  id: Scalars['uuid']
  manufacturer: Scalars['uuid']
  type: Scalars['String']
}

/** aggregated selection of "device_data_aed" */
export type Device_Data_Aed_Aggregate = {
  __typename?: 'device_data_aed_aggregate'
  aggregate?: Maybe<Device_Data_Aed_Aggregate_Fields>
  nodes: Device_Data_Aed[]
}

/** aggregate fields of "device_data_aed" */
export type Device_Data_Aed_Aggregate_Fields = {
  __typename?: 'device_data_aed_aggregate_fields'
  count: Scalars['Int']
  max?: Maybe<Device_Data_Aed_Max_Fields>
  min?: Maybe<Device_Data_Aed_Min_Fields>
}

/** aggregate fields of "device_data_aed" */
export type Device_Data_Aed_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Device_Data_Aed_Select_Column[]>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** Boolean expression to filter rows from the table "device_data_aed". All fields are combined with a logical 'AND'. */
export type Device_Data_Aed_Bool_Exp = {
  _and?: InputMaybe<Device_Data_Aed_Bool_Exp[]>
  _not?: InputMaybe<Device_Data_Aed_Bool_Exp>
  _or?: InputMaybe<Device_Data_Aed_Bool_Exp[]>
  device_id?: InputMaybe<Uuid_Comparison_Exp>
  id?: InputMaybe<Uuid_Comparison_Exp>
  manufacturer?: InputMaybe<Uuid_Comparison_Exp>
  type?: InputMaybe<String_Comparison_Exp>
}

/** unique or primary key constraints on table "device_data_aed" */
export enum Device_Data_Aed_Constraint {
  /** unique or primary key constraint on columns "id" */
  DeviceDataAedPkey = 'device_data_aed_pkey'
}

/** input type for inserting data into table "device_data_aed" */
export type Device_Data_Aed_Insert_Input = {
  device_id?: InputMaybe<Scalars['uuid']>
  id?: InputMaybe<Scalars['uuid']>
  manufacturer?: InputMaybe<Scalars['uuid']>
  type?: InputMaybe<Scalars['String']>
}

/** aggregate max on columns */
export type Device_Data_Aed_Max_Fields = {
  __typename?: 'device_data_aed_max_fields'
  device_id?: Maybe<Scalars['uuid']>
  id?: Maybe<Scalars['uuid']>
  manufacturer?: Maybe<Scalars['uuid']>
  type?: Maybe<Scalars['String']>
}

/** aggregate min on columns */
export type Device_Data_Aed_Min_Fields = {
  __typename?: 'device_data_aed_min_fields'
  device_id?: Maybe<Scalars['uuid']>
  id?: Maybe<Scalars['uuid']>
  manufacturer?: Maybe<Scalars['uuid']>
  type?: Maybe<Scalars['String']>
}

/** response of any mutation on the table "device_data_aed" */
export type Device_Data_Aed_Mutation_Response = {
  __typename?: 'device_data_aed_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Device_Data_Aed[]
}

/** on_conflict condition type for table "device_data_aed" */
export type Device_Data_Aed_On_Conflict = {
  constraint: Device_Data_Aed_Constraint
  update_columns?: Device_Data_Aed_Update_Column[]
  where?: InputMaybe<Device_Data_Aed_Bool_Exp>
}

/** Ordering options when selecting data from "device_data_aed". */
export type Device_Data_Aed_Order_By = {
  device_id?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  manufacturer?: InputMaybe<Order_By>
  type?: InputMaybe<Order_By>
}

/** primary key columns input for table: device_data_aed */
export type Device_Data_Aed_Pk_Columns_Input = {
  id: Scalars['uuid']
}

/** select columns of table "device_data_aed" */
export enum Device_Data_Aed_Select_Column {
  /** column name */
  DeviceId = 'device_id',
  /** column name */
  Id = 'id',
  /** column name */
  Manufacturer = 'manufacturer',
  /** column name */
  Type = 'type'
}

/** input type for updating data in table "device_data_aed" */
export type Device_Data_Aed_Set_Input = {
  device_id?: InputMaybe<Scalars['uuid']>
  id?: InputMaybe<Scalars['uuid']>
  manufacturer?: InputMaybe<Scalars['uuid']>
  type?: InputMaybe<Scalars['String']>
}

/** Streaming cursor of the table "device_data_aed" */
export type Device_Data_Aed_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Device_Data_Aed_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Device_Data_Aed_Stream_Cursor_Value_Input = {
  device_id?: InputMaybe<Scalars['uuid']>
  id?: InputMaybe<Scalars['uuid']>
  manufacturer?: InputMaybe<Scalars['uuid']>
  type?: InputMaybe<Scalars['String']>
}

/** update columns of table "device_data_aed" */
export enum Device_Data_Aed_Update_Column {
  /** column name */
  DeviceId = 'device_id',
  /** column name */
  Id = 'id',
  /** column name */
  Manufacturer = 'manufacturer',
  /** column name */
  Type = 'type'
}

export type Device_Data_Aed_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Device_Data_Aed_Set_Input>
  where: Device_Data_Aed_Bool_Exp
}

/** columns and relationships of "device_data_outdoor" */
export type Device_Data_Outdoor = {
  __typename?: 'device_data_outdoor'
  article_number?: Maybe<Scalars['String']>
  /** An object relationship */
  device: Devices
  device_id: Scalars['uuid']
  entry_code?: Maybe<Scalars['String']>
  id: Scalars['uuid']
  manufacturer: Scalars['uuid']
  type: Scalars['String']
}

/** aggregated selection of "device_data_outdoor" */
export type Device_Data_Outdoor_Aggregate = {
  __typename?: 'device_data_outdoor_aggregate'
  aggregate?: Maybe<Device_Data_Outdoor_Aggregate_Fields>
  nodes: Device_Data_Outdoor[]
}

export type Device_Data_Outdoor_Aggregate_Bool_Exp = {
  count?: InputMaybe<Device_Data_Outdoor_Aggregate_Bool_Exp_Count>
}

export type Device_Data_Outdoor_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Device_Data_Outdoor_Select_Column[]>
  distinct?: InputMaybe<Scalars['Boolean']>
  filter?: InputMaybe<Device_Data_Outdoor_Bool_Exp>
  predicate: Int_Comparison_Exp
}

/** aggregate fields of "device_data_outdoor" */
export type Device_Data_Outdoor_Aggregate_Fields = {
  __typename?: 'device_data_outdoor_aggregate_fields'
  count: Scalars['Int']
  max?: Maybe<Device_Data_Outdoor_Max_Fields>
  min?: Maybe<Device_Data_Outdoor_Min_Fields>
}

/** aggregate fields of "device_data_outdoor" */
export type Device_Data_Outdoor_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Device_Data_Outdoor_Select_Column[]>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** order by aggregate values of table "device_data_outdoor" */
export type Device_Data_Outdoor_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>
  max?: InputMaybe<Device_Data_Outdoor_Max_Order_By>
  min?: InputMaybe<Device_Data_Outdoor_Min_Order_By>
}

/** input type for inserting array relation for remote table "device_data_outdoor" */
export type Device_Data_Outdoor_Arr_Rel_Insert_Input = {
  data: Device_Data_Outdoor_Insert_Input[]
  /** upsert condition */
  on_conflict?: InputMaybe<Device_Data_Outdoor_On_Conflict>
}

/** Boolean expression to filter rows from the table "device_data_outdoor". All fields are combined with a logical 'AND'. */
export type Device_Data_Outdoor_Bool_Exp = {
  _and?: InputMaybe<Device_Data_Outdoor_Bool_Exp[]>
  _not?: InputMaybe<Device_Data_Outdoor_Bool_Exp>
  _or?: InputMaybe<Device_Data_Outdoor_Bool_Exp[]>
  article_number?: InputMaybe<String_Comparison_Exp>
  device?: InputMaybe<Devices_Bool_Exp>
  device_id?: InputMaybe<Uuid_Comparison_Exp>
  entry_code?: InputMaybe<String_Comparison_Exp>
  id?: InputMaybe<Uuid_Comparison_Exp>
  manufacturer?: InputMaybe<Uuid_Comparison_Exp>
  type?: InputMaybe<String_Comparison_Exp>
}

/** unique or primary key constraints on table "device_data_outdoor" */
export enum Device_Data_Outdoor_Constraint {
  /** unique or primary key constraint on columns "id" */
  DeviceDataPkey = 'device_data_pkey'
}

/** input type for inserting data into table "device_data_outdoor" */
export type Device_Data_Outdoor_Insert_Input = {
  article_number?: InputMaybe<Scalars['String']>
  device?: InputMaybe<Devices_Obj_Rel_Insert_Input>
  device_id?: InputMaybe<Scalars['uuid']>
  entry_code?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['uuid']>
  manufacturer?: InputMaybe<Scalars['uuid']>
  type?: InputMaybe<Scalars['String']>
}

/** aggregate max on columns */
export type Device_Data_Outdoor_Max_Fields = {
  __typename?: 'device_data_outdoor_max_fields'
  article_number?: Maybe<Scalars['String']>
  device_id?: Maybe<Scalars['uuid']>
  entry_code?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['uuid']>
  manufacturer?: Maybe<Scalars['uuid']>
  type?: Maybe<Scalars['String']>
}

/** order by max() on columns of table "device_data_outdoor" */
export type Device_Data_Outdoor_Max_Order_By = {
  article_number?: InputMaybe<Order_By>
  device_id?: InputMaybe<Order_By>
  entry_code?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  manufacturer?: InputMaybe<Order_By>
  type?: InputMaybe<Order_By>
}

/** aggregate min on columns */
export type Device_Data_Outdoor_Min_Fields = {
  __typename?: 'device_data_outdoor_min_fields'
  article_number?: Maybe<Scalars['String']>
  device_id?: Maybe<Scalars['uuid']>
  entry_code?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['uuid']>
  manufacturer?: Maybe<Scalars['uuid']>
  type?: Maybe<Scalars['String']>
}

/** order by min() on columns of table "device_data_outdoor" */
export type Device_Data_Outdoor_Min_Order_By = {
  article_number?: InputMaybe<Order_By>
  device_id?: InputMaybe<Order_By>
  entry_code?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  manufacturer?: InputMaybe<Order_By>
  type?: InputMaybe<Order_By>
}

/** response of any mutation on the table "device_data_outdoor" */
export type Device_Data_Outdoor_Mutation_Response = {
  __typename?: 'device_data_outdoor_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Device_Data_Outdoor[]
}

/** on_conflict condition type for table "device_data_outdoor" */
export type Device_Data_Outdoor_On_Conflict = {
  constraint: Device_Data_Outdoor_Constraint
  update_columns?: Device_Data_Outdoor_Update_Column[]
  where?: InputMaybe<Device_Data_Outdoor_Bool_Exp>
}

/** Ordering options when selecting data from "device_data_outdoor". */
export type Device_Data_Outdoor_Order_By = {
  article_number?: InputMaybe<Order_By>
  device?: InputMaybe<Devices_Order_By>
  device_id?: InputMaybe<Order_By>
  entry_code?: InputMaybe<Order_By>
  id?: InputMaybe<Order_By>
  manufacturer?: InputMaybe<Order_By>
  type?: InputMaybe<Order_By>
}

/** primary key columns input for table: device_data_outdoor */
export type Device_Data_Outdoor_Pk_Columns_Input = {
  id: Scalars['uuid']
}

/** select columns of table "device_data_outdoor" */
export enum Device_Data_Outdoor_Select_Column {
  /** column name */
  ArticleNumber = 'article_number',
  /** column name */
  DeviceId = 'device_id',
  /** column name */
  EntryCode = 'entry_code',
  /** column name */
  Id = 'id',
  /** column name */
  Manufacturer = 'manufacturer',
  /** column name */
  Type = 'type'
}

/** input type for updating data in table "device_data_outdoor" */
export type Device_Data_Outdoor_Set_Input = {
  article_number?: InputMaybe<Scalars['String']>
  device_id?: InputMaybe<Scalars['uuid']>
  entry_code?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['uuid']>
  manufacturer?: InputMaybe<Scalars['uuid']>
  type?: InputMaybe<Scalars['String']>
}

/** Streaming cursor of the table "device_data_outdoor" */
export type Device_Data_Outdoor_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Device_Data_Outdoor_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Device_Data_Outdoor_Stream_Cursor_Value_Input = {
  article_number?: InputMaybe<Scalars['String']>
  device_id?: InputMaybe<Scalars['uuid']>
  entry_code?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['uuid']>
  manufacturer?: InputMaybe<Scalars['uuid']>
  type?: InputMaybe<Scalars['String']>
}

/** update columns of table "device_data_outdoor" */
export enum Device_Data_Outdoor_Update_Column {
  /** column name */
  ArticleNumber = 'article_number',
  /** column name */
  DeviceId = 'device_id',
  /** column name */
  EntryCode = 'entry_code',
  /** column name */
  Id = 'id',
  /** column name */
  Manufacturer = 'manufacturer',
  /** column name */
  Type = 'type'
}

export type Device_Data_Outdoor_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Device_Data_Outdoor_Set_Input>
  where: Device_Data_Outdoor_Bool_Exp
}

/** columns and relationships of "devices" */
export type Devices = {
  __typename?: 'devices'
  address: Scalars['String']
  description: Scalars['String']
  /** An array relationship */
  device_contacts: Device_Contacts[]
  /** An aggregate relationship */
  device_contacts_aggregate: Device_Contacts_Aggregate
  /** An array relationship */
  device_data_outdoors: Device_Data_Outdoor[]
  /** An aggregate relationship */
  device_data_outdoors_aggregate: Device_Data_Outdoor_Aggregate
  id: Scalars['uuid']
  latitude?: Maybe<Scalars['numeric']>
  location?: Maybe<Scalars['point']>
  number: Scalars['Int']
  owner: Scalars['String']
  zip_code: Scalars['String']
}

/** columns and relationships of "devices" */
export type DevicesDevice_ContactsArgs = {
  distinct_on?: InputMaybe<Device_Contacts_Select_Column[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Device_Contacts_Order_By[]>
  where?: InputMaybe<Device_Contacts_Bool_Exp>
}

/** columns and relationships of "devices" */
export type DevicesDevice_Contacts_AggregateArgs = {
  distinct_on?: InputMaybe<Device_Contacts_Select_Column[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Device_Contacts_Order_By[]>
  where?: InputMaybe<Device_Contacts_Bool_Exp>
}

/** columns and relationships of "devices" */
export type DevicesDevice_Data_OutdoorsArgs = {
  distinct_on?: InputMaybe<Device_Data_Outdoor_Select_Column[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Device_Data_Outdoor_Order_By[]>
  where?: InputMaybe<Device_Data_Outdoor_Bool_Exp>
}

/** columns and relationships of "devices" */
export type DevicesDevice_Data_Outdoors_AggregateArgs = {
  distinct_on?: InputMaybe<Device_Data_Outdoor_Select_Column[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Device_Data_Outdoor_Order_By[]>
  where?: InputMaybe<Device_Data_Outdoor_Bool_Exp>
}

/** aggregated selection of "devices" */
export type Devices_Aggregate = {
  __typename?: 'devices_aggregate'
  aggregate?: Maybe<Devices_Aggregate_Fields>
  nodes: Devices[]
}

/** aggregate fields of "devices" */
export type Devices_Aggregate_Fields = {
  __typename?: 'devices_aggregate_fields'
  avg?: Maybe<Devices_Avg_Fields>
  count: Scalars['Int']
  max?: Maybe<Devices_Max_Fields>
  min?: Maybe<Devices_Min_Fields>
  stddev?: Maybe<Devices_Stddev_Fields>
  stddev_pop?: Maybe<Devices_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Devices_Stddev_Samp_Fields>
  sum?: Maybe<Devices_Sum_Fields>
  var_pop?: Maybe<Devices_Var_Pop_Fields>
  var_samp?: Maybe<Devices_Var_Samp_Fields>
  variance?: Maybe<Devices_Variance_Fields>
}

/** aggregate fields of "devices" */
export type Devices_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Devices_Select_Column[]>
  distinct?: InputMaybe<Scalars['Boolean']>
}

/** aggregate avg on columns */
export type Devices_Avg_Fields = {
  __typename?: 'devices_avg_fields'
  latitude?: Maybe<Scalars['Float']>
  number?: Maybe<Scalars['Float']>
}

/** Boolean expression to filter rows from the table "devices". All fields are combined with a logical 'AND'. */
export type Devices_Bool_Exp = {
  _and?: InputMaybe<Devices_Bool_Exp[]>
  _not?: InputMaybe<Devices_Bool_Exp>
  _or?: InputMaybe<Devices_Bool_Exp[]>
  address?: InputMaybe<String_Comparison_Exp>
  description?: InputMaybe<String_Comparison_Exp>
  device_contacts?: InputMaybe<Device_Contacts_Bool_Exp>
  device_contacts_aggregate?: InputMaybe<Device_Contacts_Aggregate_Bool_Exp>
  device_data_outdoors?: InputMaybe<Device_Data_Outdoor_Bool_Exp>
  device_data_outdoors_aggregate?: InputMaybe<Device_Data_Outdoor_Aggregate_Bool_Exp>
  id?: InputMaybe<Uuid_Comparison_Exp>
  latitude?: InputMaybe<Numeric_Comparison_Exp>
  location?: InputMaybe<Point_Comparison_Exp>
  number?: InputMaybe<Int_Comparison_Exp>
  owner?: InputMaybe<String_Comparison_Exp>
  zip_code?: InputMaybe<String_Comparison_Exp>
}

/** unique or primary key constraints on table "devices" */
export enum Devices_Constraint {
  /** unique or primary key constraint on columns "id" */
  DevicesPkey = 'devices_pkey'
}

/** input type for incrementing numeric columns in table "devices" */
export type Devices_Inc_Input = {
  latitude?: InputMaybe<Scalars['numeric']>
  number?: InputMaybe<Scalars['Int']>
}

/** input type for inserting data into table "devices" */
export type Devices_Insert_Input = {
  address?: InputMaybe<Scalars['String']>
  description?: InputMaybe<Scalars['String']>
  device_contacts?: InputMaybe<Device_Contacts_Arr_Rel_Insert_Input>
  device_data_outdoors?: InputMaybe<Device_Data_Outdoor_Arr_Rel_Insert_Input>
  id?: InputMaybe<Scalars['uuid']>
  latitude?: InputMaybe<Scalars['numeric']>
  location?: InputMaybe<Scalars['point']>
  number?: InputMaybe<Scalars['Int']>
  owner?: InputMaybe<Scalars['String']>
  zip_code?: InputMaybe<Scalars['String']>
}

/** aggregate max on columns */
export type Devices_Max_Fields = {
  __typename?: 'devices_max_fields'
  address?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['uuid']>
  latitude?: Maybe<Scalars['numeric']>
  number?: Maybe<Scalars['Int']>
  owner?: Maybe<Scalars['String']>
  zip_code?: Maybe<Scalars['String']>
}

/** aggregate min on columns */
export type Devices_Min_Fields = {
  __typename?: 'devices_min_fields'
  address?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['uuid']>
  latitude?: Maybe<Scalars['numeric']>
  number?: Maybe<Scalars['Int']>
  owner?: Maybe<Scalars['String']>
  zip_code?: Maybe<Scalars['String']>
}

/** response of any mutation on the table "devices" */
export type Devices_Mutation_Response = {
  __typename?: 'devices_mutation_response'
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']
  /** data from the rows affected by the mutation */
  returning: Devices[]
}

/** input type for inserting object relation for remote table "devices" */
export type Devices_Obj_Rel_Insert_Input = {
  data: Devices_Insert_Input
  /** upsert condition */
  on_conflict?: InputMaybe<Devices_On_Conflict>
}

/** on_conflict condition type for table "devices" */
export type Devices_On_Conflict = {
  constraint: Devices_Constraint
  update_columns?: Devices_Update_Column[]
  where?: InputMaybe<Devices_Bool_Exp>
}

/** Ordering options when selecting data from "devices". */
export type Devices_Order_By = {
  address?: InputMaybe<Order_By>
  description?: InputMaybe<Order_By>
  device_contacts_aggregate?: InputMaybe<Device_Contacts_Aggregate_Order_By>
  device_data_outdoors_aggregate?: InputMaybe<Device_Data_Outdoor_Aggregate_Order_By>
  id?: InputMaybe<Order_By>
  latitude?: InputMaybe<Order_By>
  location?: InputMaybe<Order_By>
  number?: InputMaybe<Order_By>
  owner?: InputMaybe<Order_By>
  zip_code?: InputMaybe<Order_By>
}

/** primary key columns input for table: devices */
export type Devices_Pk_Columns_Input = {
  id: Scalars['uuid']
}

/** select columns of table "devices" */
export enum Devices_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Latitude = 'latitude',
  /** column name */
  Location = 'location',
  /** column name */
  Number = 'number',
  /** column name */
  Owner = 'owner',
  /** column name */
  ZipCode = 'zip_code'
}

/** input type for updating data in table "devices" */
export type Devices_Set_Input = {
  address?: InputMaybe<Scalars['String']>
  description?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['uuid']>
  latitude?: InputMaybe<Scalars['numeric']>
  location?: InputMaybe<Scalars['point']>
  number?: InputMaybe<Scalars['Int']>
  owner?: InputMaybe<Scalars['String']>
  zip_code?: InputMaybe<Scalars['String']>
}

/** aggregate stddev on columns */
export type Devices_Stddev_Fields = {
  __typename?: 'devices_stddev_fields'
  latitude?: Maybe<Scalars['Float']>
  number?: Maybe<Scalars['Float']>
}

/** aggregate stddev_pop on columns */
export type Devices_Stddev_Pop_Fields = {
  __typename?: 'devices_stddev_pop_fields'
  latitude?: Maybe<Scalars['Float']>
  number?: Maybe<Scalars['Float']>
}

/** aggregate stddev_samp on columns */
export type Devices_Stddev_Samp_Fields = {
  __typename?: 'devices_stddev_samp_fields'
  latitude?: Maybe<Scalars['Float']>
  number?: Maybe<Scalars['Float']>
}

/** Streaming cursor of the table "devices" */
export type Devices_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Devices_Stream_Cursor_Value_Input
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>
}

/** Initial value of the column from where the streaming should start */
export type Devices_Stream_Cursor_Value_Input = {
  address?: InputMaybe<Scalars['String']>
  description?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['uuid']>
  latitude?: InputMaybe<Scalars['numeric']>
  location?: InputMaybe<Scalars['point']>
  number?: InputMaybe<Scalars['Int']>
  owner?: InputMaybe<Scalars['String']>
  zip_code?: InputMaybe<Scalars['String']>
}

/** aggregate sum on columns */
export type Devices_Sum_Fields = {
  __typename?: 'devices_sum_fields'
  latitude?: Maybe<Scalars['numeric']>
  number?: Maybe<Scalars['Int']>
}

/** update columns of table "devices" */
export enum Devices_Update_Column {
  /** column name */
  Address = 'address',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Latitude = 'latitude',
  /** column name */
  Location = 'location',
  /** column name */
  Number = 'number',
  /** column name */
  Owner = 'owner',
  /** column name */
  ZipCode = 'zip_code'
}

export type Devices_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Devices_Inc_Input>
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Devices_Set_Input>
  where: Devices_Bool_Exp
}

/** aggregate var_pop on columns */
export type Devices_Var_Pop_Fields = {
  __typename?: 'devices_var_pop_fields'
  latitude?: Maybe<Scalars['Float']>
  number?: Maybe<Scalars['Float']>
}

/** aggregate var_samp on columns */
export type Devices_Var_Samp_Fields = {
  __typename?: 'devices_var_samp_fields'
  latitude?: Maybe<Scalars['Float']>
  number?: Maybe<Scalars['Float']>
}

/** aggregate variance on columns */
export type Devices_Variance_Fields = {
  __typename?: 'devices_variance_fields'
  latitude?: Maybe<Scalars['Float']>
  number?: Maybe<Scalars['Float']>
}

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root'
  /** delete data from the table: "device_contacts" */
  delete_device_contacts?: Maybe<Device_Contacts_Mutation_Response>
  /** delete single row from the table: "device_contacts" */
  delete_device_contacts_by_pk?: Maybe<Device_Contacts>
  /** delete data from the table: "device_data_aed" */
  delete_device_data_aed?: Maybe<Device_Data_Aed_Mutation_Response>
  /** delete single row from the table: "device_data_aed" */
  delete_device_data_aed_by_pk?: Maybe<Device_Data_Aed>
  /** delete data from the table: "device_data_outdoor" */
  delete_device_data_outdoor?: Maybe<Device_Data_Outdoor_Mutation_Response>
  /** delete single row from the table: "device_data_outdoor" */
  delete_device_data_outdoor_by_pk?: Maybe<Device_Data_Outdoor>
  /** delete data from the table: "devices" */
  delete_devices?: Maybe<Devices_Mutation_Response>
  /** delete single row from the table: "devices" */
  delete_devices_by_pk?: Maybe<Devices>
  /** insert data into the table: "device_contacts" */
  insert_device_contacts?: Maybe<Device_Contacts_Mutation_Response>
  /** insert a single row into the table: "device_contacts" */
  insert_device_contacts_one?: Maybe<Device_Contacts>
  /** insert data into the table: "device_data_aed" */
  insert_device_data_aed?: Maybe<Device_Data_Aed_Mutation_Response>
  /** insert a single row into the table: "device_data_aed" */
  insert_device_data_aed_one?: Maybe<Device_Data_Aed>
  /** insert data into the table: "device_data_outdoor" */
  insert_device_data_outdoor?: Maybe<Device_Data_Outdoor_Mutation_Response>
  /** insert a single row into the table: "device_data_outdoor" */
  insert_device_data_outdoor_one?: Maybe<Device_Data_Outdoor>
  /** insert data into the table: "devices" */
  insert_devices?: Maybe<Devices_Mutation_Response>
  /** insert a single row into the table: "devices" */
  insert_devices_one?: Maybe<Devices>
  /** update data of the table: "device_contacts" */
  update_device_contacts?: Maybe<Device_Contacts_Mutation_Response>
  /** update single row of the table: "device_contacts" */
  update_device_contacts_by_pk?: Maybe<Device_Contacts>
  /** update multiples rows of table: "device_contacts" */
  update_device_contacts_many?: Maybe<Array<Maybe<Device_Contacts_Mutation_Response>>>
  /** update data of the table: "device_data_aed" */
  update_device_data_aed?: Maybe<Device_Data_Aed_Mutation_Response>
  /** update single row of the table: "device_data_aed" */
  update_device_data_aed_by_pk?: Maybe<Device_Data_Aed>
  /** update multiples rows of table: "device_data_aed" */
  update_device_data_aed_many?: Maybe<Array<Maybe<Device_Data_Aed_Mutation_Response>>>
  /** update data of the table: "device_data_outdoor" */
  update_device_data_outdoor?: Maybe<Device_Data_Outdoor_Mutation_Response>
  /** update single row of the table: "device_data_outdoor" */
  update_device_data_outdoor_by_pk?: Maybe<Device_Data_Outdoor>
  /** update multiples rows of table: "device_data_outdoor" */
  update_device_data_outdoor_many?: Maybe<Array<Maybe<Device_Data_Outdoor_Mutation_Response>>>
  /** update data of the table: "devices" */
  update_devices?: Maybe<Devices_Mutation_Response>
  /** update single row of the table: "devices" */
  update_devices_by_pk?: Maybe<Devices>
  /** update multiples rows of table: "devices" */
  update_devices_many?: Maybe<Array<Maybe<Devices_Mutation_Response>>>
}

/** mutation root */
export type Mutation_RootDelete_Device_ContactsArgs = {
  where: Device_Contacts_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Device_Contacts_By_PkArgs = {
  id: Scalars['uuid']
}

/** mutation root */
export type Mutation_RootDelete_Device_Data_AedArgs = {
  where: Device_Data_Aed_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Device_Data_Aed_By_PkArgs = {
  id: Scalars['uuid']
}

/** mutation root */
export type Mutation_RootDelete_Device_Data_OutdoorArgs = {
  where: Device_Data_Outdoor_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Device_Data_Outdoor_By_PkArgs = {
  id: Scalars['uuid']
}

/** mutation root */
export type Mutation_RootDelete_DevicesArgs = {
  where: Devices_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_Devices_By_PkArgs = {
  id: Scalars['uuid']
}

/** mutation root */
export type Mutation_RootInsert_Device_ContactsArgs = {
  objects: Device_Contacts_Insert_Input[]
  on_conflict?: InputMaybe<Device_Contacts_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Device_Contacts_OneArgs = {
  object: Device_Contacts_Insert_Input
  on_conflict?: InputMaybe<Device_Contacts_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Device_Data_AedArgs = {
  objects: Device_Data_Aed_Insert_Input[]
  on_conflict?: InputMaybe<Device_Data_Aed_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Device_Data_Aed_OneArgs = {
  object: Device_Data_Aed_Insert_Input
  on_conflict?: InputMaybe<Device_Data_Aed_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Device_Data_OutdoorArgs = {
  objects: Device_Data_Outdoor_Insert_Input[]
  on_conflict?: InputMaybe<Device_Data_Outdoor_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Device_Data_Outdoor_OneArgs = {
  object: Device_Data_Outdoor_Insert_Input
  on_conflict?: InputMaybe<Device_Data_Outdoor_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_DevicesArgs = {
  objects: Devices_Insert_Input[]
  on_conflict?: InputMaybe<Devices_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_Devices_OneArgs = {
  object: Devices_Insert_Input
  on_conflict?: InputMaybe<Devices_On_Conflict>
}

/** mutation root */
export type Mutation_RootUpdate_Device_ContactsArgs = {
  _set?: InputMaybe<Device_Contacts_Set_Input>
  where: Device_Contacts_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Device_Contacts_By_PkArgs = {
  _set?: InputMaybe<Device_Contacts_Set_Input>
  pk_columns: Device_Contacts_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Device_Contacts_ManyArgs = {
  updates: Device_Contacts_Updates[]
}

/** mutation root */
export type Mutation_RootUpdate_Device_Data_AedArgs = {
  _set?: InputMaybe<Device_Data_Aed_Set_Input>
  where: Device_Data_Aed_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Device_Data_Aed_By_PkArgs = {
  _set?: InputMaybe<Device_Data_Aed_Set_Input>
  pk_columns: Device_Data_Aed_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Device_Data_Aed_ManyArgs = {
  updates: Device_Data_Aed_Updates[]
}

/** mutation root */
export type Mutation_RootUpdate_Device_Data_OutdoorArgs = {
  _set?: InputMaybe<Device_Data_Outdoor_Set_Input>
  where: Device_Data_Outdoor_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Device_Data_Outdoor_By_PkArgs = {
  _set?: InputMaybe<Device_Data_Outdoor_Set_Input>
  pk_columns: Device_Data_Outdoor_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Device_Data_Outdoor_ManyArgs = {
  updates: Device_Data_Outdoor_Updates[]
}

/** mutation root */
export type Mutation_RootUpdate_DevicesArgs = {
  _inc?: InputMaybe<Devices_Inc_Input>
  _set?: InputMaybe<Devices_Set_Input>
  where: Devices_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_Devices_By_PkArgs = {
  _inc?: InputMaybe<Devices_Inc_Input>
  _set?: InputMaybe<Devices_Set_Input>
  pk_columns: Devices_Pk_Columns_Input
}

/** mutation root */
export type Mutation_RootUpdate_Devices_ManyArgs = {
  updates: Devices_Updates[]
}

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['numeric']>
  _gt?: InputMaybe<Scalars['numeric']>
  _gte?: InputMaybe<Scalars['numeric']>
  _in?: InputMaybe<Array<Scalars['numeric']>>
  _is_null?: InputMaybe<Scalars['Boolean']>
  _lt?: InputMaybe<Scalars['numeric']>
  _lte?: InputMaybe<Scalars['numeric']>
  _neq?: InputMaybe<Scalars['numeric']>
  _nin?: InputMaybe<Array<Scalars['numeric']>>
}

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
  _eq?: InputMaybe<Scalars['point']>
  _gt?: InputMaybe<Scalars['point']>
  _gte?: InputMaybe<Scalars['point']>
  _in?: InputMaybe<Array<Scalars['point']>>
  _is_null?: InputMaybe<Scalars['Boolean']>
  _lt?: InputMaybe<Scalars['point']>
  _lte?: InputMaybe<Scalars['point']>
  _neq?: InputMaybe<Scalars['point']>
  _nin?: InputMaybe<Array<Scalars['point']>>
}

export type Query_Root = {
  __typename?: 'query_root'
  /** An array relationship */
  device_contacts: Device_Contacts[]
  /** An aggregate relationship */
  device_contacts_aggregate: Device_Contacts_Aggregate
  /** fetch data from the table: "device_contacts" using primary key columns */
  device_contacts_by_pk?: Maybe<Device_Contacts>
  /** fetch data from the table: "device_data_aed" */
  device_data_aed: Device_Data_Aed[]
  /** fetch aggregated fields from the table: "device_data_aed" */
  device_data_aed_aggregate: Device_Data_Aed_Aggregate
  /** fetch data from the table: "device_data_aed" using primary key columns */
  device_data_aed_by_pk?: Maybe<Device_Data_Aed>
  /** fetch data from the table: "device_data_outdoor" */
  device_data_outdoor: Device_Data_Outdoor[]
  /** fetch aggregated fields from the table: "device_data_outdoor" */
  device_data_outdoor_aggregate: Device_Data_Outdoor_Aggregate
  /** fetch data from the table: "device_data_outdoor" using primary key columns */
  device_data_outdoor_by_pk?: Maybe<Device_Data_Outdoor>
  /** fetch data from the table: "devices" */
  devices: Devices[]
  /** fetch aggregated fields from the table: "devices" */
  devices_aggregate: Devices_Aggregate
  /** fetch data from the table: "devices" using primary key columns */
  devices_by_pk?: Maybe<Devices>
}

export type Query_RootDevice_ContactsArgs = {
  distinct_on?: InputMaybe<Device_Contacts_Select_Column[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Device_Contacts_Order_By[]>
  where?: InputMaybe<Device_Contacts_Bool_Exp>
}

export type Query_RootDevice_Contacts_AggregateArgs = {
  distinct_on?: InputMaybe<Device_Contacts_Select_Column[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Device_Contacts_Order_By[]>
  where?: InputMaybe<Device_Contacts_Bool_Exp>
}

export type Query_RootDevice_Contacts_By_PkArgs = {
  id: Scalars['uuid']
}

export type Query_RootDevice_Data_AedArgs = {
  distinct_on?: InputMaybe<Device_Data_Aed_Select_Column[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Device_Data_Aed_Order_By[]>
  where?: InputMaybe<Device_Data_Aed_Bool_Exp>
}

export type Query_RootDevice_Data_Aed_AggregateArgs = {
  distinct_on?: InputMaybe<Device_Data_Aed_Select_Column[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Device_Data_Aed_Order_By[]>
  where?: InputMaybe<Device_Data_Aed_Bool_Exp>
}

export type Query_RootDevice_Data_Aed_By_PkArgs = {
  id: Scalars['uuid']
}

export type Query_RootDevice_Data_OutdoorArgs = {
  distinct_on?: InputMaybe<Device_Data_Outdoor_Select_Column[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Device_Data_Outdoor_Order_By[]>
  where?: InputMaybe<Device_Data_Outdoor_Bool_Exp>
}

export type Query_RootDevice_Data_Outdoor_AggregateArgs = {
  distinct_on?: InputMaybe<Device_Data_Outdoor_Select_Column[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Device_Data_Outdoor_Order_By[]>
  where?: InputMaybe<Device_Data_Outdoor_Bool_Exp>
}

export type Query_RootDevice_Data_Outdoor_By_PkArgs = {
  id: Scalars['uuid']
}

export type Query_RootDevicesArgs = {
  distinct_on?: InputMaybe<Devices_Select_Column[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Devices_Order_By[]>
  where?: InputMaybe<Devices_Bool_Exp>
}

export type Query_RootDevices_AggregateArgs = {
  distinct_on?: InputMaybe<Devices_Select_Column[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Devices_Order_By[]>
  where?: InputMaybe<Devices_Bool_Exp>
}

export type Query_RootDevices_By_PkArgs = {
  id: Scalars['uuid']
}

export type Subscription_Root = {
  __typename?: 'subscription_root'
  /** An array relationship */
  device_contacts: Device_Contacts[]
  /** An aggregate relationship */
  device_contacts_aggregate: Device_Contacts_Aggregate
  /** fetch data from the table: "device_contacts" using primary key columns */
  device_contacts_by_pk?: Maybe<Device_Contacts>
  /** fetch data from the table in a streaming manner: "device_contacts" */
  device_contacts_stream: Device_Contacts[]
  /** fetch data from the table: "device_data_aed" */
  device_data_aed: Device_Data_Aed[]
  /** fetch aggregated fields from the table: "device_data_aed" */
  device_data_aed_aggregate: Device_Data_Aed_Aggregate
  /** fetch data from the table: "device_data_aed" using primary key columns */
  device_data_aed_by_pk?: Maybe<Device_Data_Aed>
  /** fetch data from the table in a streaming manner: "device_data_aed" */
  device_data_aed_stream: Device_Data_Aed[]
  /** fetch data from the table: "device_data_outdoor" */
  device_data_outdoor: Device_Data_Outdoor[]
  /** fetch aggregated fields from the table: "device_data_outdoor" */
  device_data_outdoor_aggregate: Device_Data_Outdoor_Aggregate
  /** fetch data from the table: "device_data_outdoor" using primary key columns */
  device_data_outdoor_by_pk?: Maybe<Device_Data_Outdoor>
  /** fetch data from the table in a streaming manner: "device_data_outdoor" */
  device_data_outdoor_stream: Device_Data_Outdoor[]
  /** fetch data from the table: "devices" */
  devices: Devices[]
  /** fetch aggregated fields from the table: "devices" */
  devices_aggregate: Devices_Aggregate
  /** fetch data from the table: "devices" using primary key columns */
  devices_by_pk?: Maybe<Devices>
  /** fetch data from the table in a streaming manner: "devices" */
  devices_stream: Devices[]
}

export type Subscription_RootDevice_ContactsArgs = {
  distinct_on?: InputMaybe<Device_Contacts_Select_Column[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Device_Contacts_Order_By[]>
  where?: InputMaybe<Device_Contacts_Bool_Exp>
}

export type Subscription_RootDevice_Contacts_AggregateArgs = {
  distinct_on?: InputMaybe<Device_Contacts_Select_Column[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Device_Contacts_Order_By[]>
  where?: InputMaybe<Device_Contacts_Bool_Exp>
}

export type Subscription_RootDevice_Contacts_By_PkArgs = {
  id: Scalars['uuid']
}

export type Subscription_RootDevice_Contacts_StreamArgs = {
  batch_size: Scalars['Int']
  cursor: Array<InputMaybe<Device_Contacts_Stream_Cursor_Input>>
  where?: InputMaybe<Device_Contacts_Bool_Exp>
}

export type Subscription_RootDevice_Data_AedArgs = {
  distinct_on?: InputMaybe<Device_Data_Aed_Select_Column[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Device_Data_Aed_Order_By[]>
  where?: InputMaybe<Device_Data_Aed_Bool_Exp>
}

export type Subscription_RootDevice_Data_Aed_AggregateArgs = {
  distinct_on?: InputMaybe<Device_Data_Aed_Select_Column[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Device_Data_Aed_Order_By[]>
  where?: InputMaybe<Device_Data_Aed_Bool_Exp>
}

export type Subscription_RootDevice_Data_Aed_By_PkArgs = {
  id: Scalars['uuid']
}

export type Subscription_RootDevice_Data_Aed_StreamArgs = {
  batch_size: Scalars['Int']
  cursor: Array<InputMaybe<Device_Data_Aed_Stream_Cursor_Input>>
  where?: InputMaybe<Device_Data_Aed_Bool_Exp>
}

export type Subscription_RootDevice_Data_OutdoorArgs = {
  distinct_on?: InputMaybe<Device_Data_Outdoor_Select_Column[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Device_Data_Outdoor_Order_By[]>
  where?: InputMaybe<Device_Data_Outdoor_Bool_Exp>
}

export type Subscription_RootDevice_Data_Outdoor_AggregateArgs = {
  distinct_on?: InputMaybe<Device_Data_Outdoor_Select_Column[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Device_Data_Outdoor_Order_By[]>
  where?: InputMaybe<Device_Data_Outdoor_Bool_Exp>
}

export type Subscription_RootDevice_Data_Outdoor_By_PkArgs = {
  id: Scalars['uuid']
}

export type Subscription_RootDevice_Data_Outdoor_StreamArgs = {
  batch_size: Scalars['Int']
  cursor: Array<InputMaybe<Device_Data_Outdoor_Stream_Cursor_Input>>
  where?: InputMaybe<Device_Data_Outdoor_Bool_Exp>
}

export type Subscription_RootDevicesArgs = {
  distinct_on?: InputMaybe<Devices_Select_Column[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Devices_Order_By[]>
  where?: InputMaybe<Devices_Bool_Exp>
}

export type Subscription_RootDevices_AggregateArgs = {
  distinct_on?: InputMaybe<Devices_Select_Column[]>
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  order_by?: InputMaybe<Devices_Order_By[]>
  where?: InputMaybe<Devices_Bool_Exp>
}

export type Subscription_RootDevices_By_PkArgs = {
  id: Scalars['uuid']
}

export type Subscription_RootDevices_StreamArgs = {
  batch_size: Scalars['Int']
  cursor: Array<InputMaybe<Devices_Stream_Cursor_Input>>
  where?: InputMaybe<Devices_Bool_Exp>
}

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']>
  _gt?: InputMaybe<Scalars['uuid']>
  _gte?: InputMaybe<Scalars['uuid']>
  _in?: InputMaybe<Array<Scalars['uuid']>>
  _is_null?: InputMaybe<Scalars['Boolean']>
  _lt?: InputMaybe<Scalars['uuid']>
  _lte?: InputMaybe<Scalars['uuid']>
  _neq?: InputMaybe<Scalars['uuid']>
  _nin?: InputMaybe<Array<Scalars['uuid']>>
}

export type GetDevicesQueryVariables = Exact<Record<string, never>>

export type GetDevicesQuery = { __typename?: 'query_root', devices: Array<{ __typename?: 'devices', id: any, address: string, owner: string, zip_code: string, description: string, device_contacts: Array<{ __typename?: 'device_contacts', address: string, bank_account: string, emailaddress: string, name: string, phone_number: string, zip_code: string }> }> }

export const GetDevicesDocument = gql`
    query getDevices {
  devices {
    id
    address
    owner
    zip_code
    description
    device_contacts {
      address
      bank_account
      emailaddress
      name
      phone_number
      zip_code
    }
  }
}
    `

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
export function useGetDevicesQuery (baseOptions?: Apollo.QueryHookOptions<GetDevicesQuery, GetDevicesQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }

  return Apollo.useQuery<GetDevicesQuery, GetDevicesQueryVariables>(GetDevicesDocument, options)
}
export function useGetDevicesLazyQuery (baseOptions?: Apollo.LazyQueryHookOptions<GetDevicesQuery, GetDevicesQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }

  return Apollo.useLazyQuery<GetDevicesQuery, GetDevicesQueryVariables>(GetDevicesDocument, options)
}
export type GetDevicesQueryHookResult = ReturnType<typeof useGetDevicesQuery>
export type GetDevicesLazyQueryHookResult = ReturnType<typeof useGetDevicesLazyQuery>
export type GetDevicesQueryResult = Apollo.QueryResult<GetDevicesQuery, GetDevicesQueryVariables>

export const GetDevices = gql`
    query getDevices {
  devices {
    id
    address
    owner
    zip_code
    description
    device_contacts {
      address
      bank_account
      emailaddress
      name
      phone_number
      zip_code
    }
  }
}
    `
