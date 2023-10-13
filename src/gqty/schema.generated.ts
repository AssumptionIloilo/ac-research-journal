/**
 * GQty AUTO-GENERATED CODE: PLEASE DO NOT MODIFY MANUALLY
 */

import { SchemaUnionsKey } from 'gqty';

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: string;
  /** A field whose value conforms to the standard internet email address format as specified in HTML Spec: https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address. */
  EmailAddress: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSONObject: any;
}

export interface Media_alt_operator {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}

export interface Media_createdAt_operator {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
}

export interface Media_filename_operator {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}

export interface Media_filesize_operator {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
}

export interface Media_height_operator {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
}

export interface Media_id_operator {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}

export interface Media_mimeType_operator {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}

export interface Media_sizes__sixteenByNineMedium__filename_operator {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}

export interface Media_sizes__sixteenByNineMedium__filesize_operator {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
}

export interface Media_sizes__sixteenByNineMedium__height_operator {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
}

export interface Media_sizes__sixteenByNineMedium__mimeType_operator {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}

export interface Media_sizes__sixteenByNineMedium__url_operator {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}

export interface Media_sizes__sixteenByNineMedium__width_operator {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
}

export interface Media_sizes__thumbnail__filename_operator {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}

export interface Media_sizes__thumbnail__filesize_operator {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
}

export interface Media_sizes__thumbnail__height_operator {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
}

export interface Media_sizes__thumbnail__mimeType_operator {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}

export interface Media_sizes__thumbnail__url_operator {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}

export interface Media_sizes__thumbnail__width_operator {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
}

export interface Media_updatedAt_operator {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
}

export interface Media_url_operator {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}

export interface Media_where {
  AND?: InputMaybe<Array<InputMaybe<Media_where_and>>>;
  OR?: InputMaybe<Array<InputMaybe<Media_where_or>>>;
  alt?: InputMaybe<Media_alt_operator>;
  createdAt?: InputMaybe<Media_createdAt_operator>;
  filename?: InputMaybe<Media_filename_operator>;
  filesize?: InputMaybe<Media_filesize_operator>;
  height?: InputMaybe<Media_height_operator>;
  id?: InputMaybe<Media_id_operator>;
  mimeType?: InputMaybe<Media_mimeType_operator>;
  sizes__sixteenByNineMedium__filename?: InputMaybe<Media_sizes__sixteenByNineMedium__filename_operator>;
  sizes__sixteenByNineMedium__filesize?: InputMaybe<Media_sizes__sixteenByNineMedium__filesize_operator>;
  sizes__sixteenByNineMedium__height?: InputMaybe<Media_sizes__sixteenByNineMedium__height_operator>;
  sizes__sixteenByNineMedium__mimeType?: InputMaybe<Media_sizes__sixteenByNineMedium__mimeType_operator>;
  sizes__sixteenByNineMedium__url?: InputMaybe<Media_sizes__sixteenByNineMedium__url_operator>;
  sizes__sixteenByNineMedium__width?: InputMaybe<Media_sizes__sixteenByNineMedium__width_operator>;
  sizes__thumbnail__filename?: InputMaybe<Media_sizes__thumbnail__filename_operator>;
  sizes__thumbnail__filesize?: InputMaybe<Media_sizes__thumbnail__filesize_operator>;
  sizes__thumbnail__height?: InputMaybe<Media_sizes__thumbnail__height_operator>;
  sizes__thumbnail__mimeType?: InputMaybe<Media_sizes__thumbnail__mimeType_operator>;
  sizes__thumbnail__url?: InputMaybe<Media_sizes__thumbnail__url_operator>;
  sizes__thumbnail__width?: InputMaybe<Media_sizes__thumbnail__width_operator>;
  updatedAt?: InputMaybe<Media_updatedAt_operator>;
  url?: InputMaybe<Media_url_operator>;
  width?: InputMaybe<Media_width_operator>;
}

export interface Media_where_and {
  alt?: InputMaybe<Media_alt_operator>;
  createdAt?: InputMaybe<Media_createdAt_operator>;
  filename?: InputMaybe<Media_filename_operator>;
  filesize?: InputMaybe<Media_filesize_operator>;
  height?: InputMaybe<Media_height_operator>;
  id?: InputMaybe<Media_id_operator>;
  mimeType?: InputMaybe<Media_mimeType_operator>;
  sizes__sixteenByNineMedium__filename?: InputMaybe<Media_sizes__sixteenByNineMedium__filename_operator>;
  sizes__sixteenByNineMedium__filesize?: InputMaybe<Media_sizes__sixteenByNineMedium__filesize_operator>;
  sizes__sixteenByNineMedium__height?: InputMaybe<Media_sizes__sixteenByNineMedium__height_operator>;
  sizes__sixteenByNineMedium__mimeType?: InputMaybe<Media_sizes__sixteenByNineMedium__mimeType_operator>;
  sizes__sixteenByNineMedium__url?: InputMaybe<Media_sizes__sixteenByNineMedium__url_operator>;
  sizes__sixteenByNineMedium__width?: InputMaybe<Media_sizes__sixteenByNineMedium__width_operator>;
  sizes__thumbnail__filename?: InputMaybe<Media_sizes__thumbnail__filename_operator>;
  sizes__thumbnail__filesize?: InputMaybe<Media_sizes__thumbnail__filesize_operator>;
  sizes__thumbnail__height?: InputMaybe<Media_sizes__thumbnail__height_operator>;
  sizes__thumbnail__mimeType?: InputMaybe<Media_sizes__thumbnail__mimeType_operator>;
  sizes__thumbnail__url?: InputMaybe<Media_sizes__thumbnail__url_operator>;
  sizes__thumbnail__width?: InputMaybe<Media_sizes__thumbnail__width_operator>;
  updatedAt?: InputMaybe<Media_updatedAt_operator>;
  url?: InputMaybe<Media_url_operator>;
  width?: InputMaybe<Media_width_operator>;
}

export interface Media_where_or {
  alt?: InputMaybe<Media_alt_operator>;
  createdAt?: InputMaybe<Media_createdAt_operator>;
  filename?: InputMaybe<Media_filename_operator>;
  filesize?: InputMaybe<Media_filesize_operator>;
  height?: InputMaybe<Media_height_operator>;
  id?: InputMaybe<Media_id_operator>;
  mimeType?: InputMaybe<Media_mimeType_operator>;
  sizes__sixteenByNineMedium__filename?: InputMaybe<Media_sizes__sixteenByNineMedium__filename_operator>;
  sizes__sixteenByNineMedium__filesize?: InputMaybe<Media_sizes__sixteenByNineMedium__filesize_operator>;
  sizes__sixteenByNineMedium__height?: InputMaybe<Media_sizes__sixteenByNineMedium__height_operator>;
  sizes__sixteenByNineMedium__mimeType?: InputMaybe<Media_sizes__sixteenByNineMedium__mimeType_operator>;
  sizes__sixteenByNineMedium__url?: InputMaybe<Media_sizes__sixteenByNineMedium__url_operator>;
  sizes__sixteenByNineMedium__width?: InputMaybe<Media_sizes__sixteenByNineMedium__width_operator>;
  sizes__thumbnail__filename?: InputMaybe<Media_sizes__thumbnail__filename_operator>;
  sizes__thumbnail__filesize?: InputMaybe<Media_sizes__thumbnail__filesize_operator>;
  sizes__thumbnail__height?: InputMaybe<Media_sizes__thumbnail__height_operator>;
  sizes__thumbnail__mimeType?: InputMaybe<Media_sizes__thumbnail__mimeType_operator>;
  sizes__thumbnail__url?: InputMaybe<Media_sizes__thumbnail__url_operator>;
  sizes__thumbnail__width?: InputMaybe<Media_sizes__thumbnail__width_operator>;
  updatedAt?: InputMaybe<Media_updatedAt_operator>;
  url?: InputMaybe<Media_url_operator>;
  width?: InputMaybe<Media_width_operator>;
}

export interface Media_width_operator {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
}

export interface NewsTag_id_operator {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}

export interface NewsTag_name_operator {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}

export interface NewsTag_where {
  AND?: InputMaybe<Array<InputMaybe<NewsTag_where_and>>>;
  OR?: InputMaybe<Array<InputMaybe<NewsTag_where_or>>>;
  id?: InputMaybe<NewsTag_id_operator>;
  name?: InputMaybe<NewsTag_name_operator>;
}

export interface NewsTag_where_and {
  id?: InputMaybe<NewsTag_id_operator>;
  name?: InputMaybe<NewsTag_name_operator>;
}

export interface NewsTag_where_or {
  id?: InputMaybe<NewsTag_id_operator>;
  name?: InputMaybe<NewsTag_name_operator>;
}

export enum NewsUpdate_status_MutationInput {
  draft = 'draft',
  published = 'published',
}

export interface News_FeatureImage_alt_operator {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}

export interface News_FeatureImage_createdAt_operator {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
}

export interface News_FeatureImage_filename_operator {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}

export interface News_FeatureImage_filesize_operator {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
}

export interface News_FeatureImage_height_operator {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
}

export interface News_FeatureImage_id_operator {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}

export interface News_FeatureImage_mimeType_operator {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}

export interface News_FeatureImage_sizes__sixteenByNineMedium__filename_operator {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}

export interface News_FeatureImage_sizes__sixteenByNineMedium__filesize_operator {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
}

export interface News_FeatureImage_sizes__sixteenByNineMedium__height_operator {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
}

export interface News_FeatureImage_sizes__sixteenByNineMedium__mimeType_operator {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}

export interface News_FeatureImage_sizes__sixteenByNineMedium__url_operator {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}

export interface News_FeatureImage_sizes__sixteenByNineMedium__width_operator {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
}

export interface News_FeatureImage_sizes__thumbnail__filename_operator {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}

export interface News_FeatureImage_sizes__thumbnail__filesize_operator {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
}

export interface News_FeatureImage_sizes__thumbnail__height_operator {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
}

export interface News_FeatureImage_sizes__thumbnail__mimeType_operator {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}

export interface News_FeatureImage_sizes__thumbnail__url_operator {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}

export interface News_FeatureImage_sizes__thumbnail__width_operator {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
}

export interface News_FeatureImage_updatedAt_operator {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
}

export interface News_FeatureImage_url_operator {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}

export interface News_FeatureImage_where {
  AND?: InputMaybe<Array<InputMaybe<News_FeatureImage_where_and>>>;
  OR?: InputMaybe<Array<InputMaybe<News_FeatureImage_where_or>>>;
  alt?: InputMaybe<News_FeatureImage_alt_operator>;
  createdAt?: InputMaybe<News_FeatureImage_createdAt_operator>;
  filename?: InputMaybe<News_FeatureImage_filename_operator>;
  filesize?: InputMaybe<News_FeatureImage_filesize_operator>;
  height?: InputMaybe<News_FeatureImage_height_operator>;
  id?: InputMaybe<News_FeatureImage_id_operator>;
  mimeType?: InputMaybe<News_FeatureImage_mimeType_operator>;
  sizes__sixteenByNineMedium__filename?: InputMaybe<News_FeatureImage_sizes__sixteenByNineMedium__filename_operator>;
  sizes__sixteenByNineMedium__filesize?: InputMaybe<News_FeatureImage_sizes__sixteenByNineMedium__filesize_operator>;
  sizes__sixteenByNineMedium__height?: InputMaybe<News_FeatureImage_sizes__sixteenByNineMedium__height_operator>;
  sizes__sixteenByNineMedium__mimeType?: InputMaybe<News_FeatureImage_sizes__sixteenByNineMedium__mimeType_operator>;
  sizes__sixteenByNineMedium__url?: InputMaybe<News_FeatureImage_sizes__sixteenByNineMedium__url_operator>;
  sizes__sixteenByNineMedium__width?: InputMaybe<News_FeatureImage_sizes__sixteenByNineMedium__width_operator>;
  sizes__thumbnail__filename?: InputMaybe<News_FeatureImage_sizes__thumbnail__filename_operator>;
  sizes__thumbnail__filesize?: InputMaybe<News_FeatureImage_sizes__thumbnail__filesize_operator>;
  sizes__thumbnail__height?: InputMaybe<News_FeatureImage_sizes__thumbnail__height_operator>;
  sizes__thumbnail__mimeType?: InputMaybe<News_FeatureImage_sizes__thumbnail__mimeType_operator>;
  sizes__thumbnail__url?: InputMaybe<News_FeatureImage_sizes__thumbnail__url_operator>;
  sizes__thumbnail__width?: InputMaybe<News_FeatureImage_sizes__thumbnail__width_operator>;
  updatedAt?: InputMaybe<News_FeatureImage_updatedAt_operator>;
  url?: InputMaybe<News_FeatureImage_url_operator>;
  width?: InputMaybe<News_FeatureImage_width_operator>;
}

export interface News_FeatureImage_where_and {
  alt?: InputMaybe<News_FeatureImage_alt_operator>;
  createdAt?: InputMaybe<News_FeatureImage_createdAt_operator>;
  filename?: InputMaybe<News_FeatureImage_filename_operator>;
  filesize?: InputMaybe<News_FeatureImage_filesize_operator>;
  height?: InputMaybe<News_FeatureImage_height_operator>;
  id?: InputMaybe<News_FeatureImage_id_operator>;
  mimeType?: InputMaybe<News_FeatureImage_mimeType_operator>;
  sizes__sixteenByNineMedium__filename?: InputMaybe<News_FeatureImage_sizes__sixteenByNineMedium__filename_operator>;
  sizes__sixteenByNineMedium__filesize?: InputMaybe<News_FeatureImage_sizes__sixteenByNineMedium__filesize_operator>;
  sizes__sixteenByNineMedium__height?: InputMaybe<News_FeatureImage_sizes__sixteenByNineMedium__height_operator>;
  sizes__sixteenByNineMedium__mimeType?: InputMaybe<News_FeatureImage_sizes__sixteenByNineMedium__mimeType_operator>;
  sizes__sixteenByNineMedium__url?: InputMaybe<News_FeatureImage_sizes__sixteenByNineMedium__url_operator>;
  sizes__sixteenByNineMedium__width?: InputMaybe<News_FeatureImage_sizes__sixteenByNineMedium__width_operator>;
  sizes__thumbnail__filename?: InputMaybe<News_FeatureImage_sizes__thumbnail__filename_operator>;
  sizes__thumbnail__filesize?: InputMaybe<News_FeatureImage_sizes__thumbnail__filesize_operator>;
  sizes__thumbnail__height?: InputMaybe<News_FeatureImage_sizes__thumbnail__height_operator>;
  sizes__thumbnail__mimeType?: InputMaybe<News_FeatureImage_sizes__thumbnail__mimeType_operator>;
  sizes__thumbnail__url?: InputMaybe<News_FeatureImage_sizes__thumbnail__url_operator>;
  sizes__thumbnail__width?: InputMaybe<News_FeatureImage_sizes__thumbnail__width_operator>;
  updatedAt?: InputMaybe<News_FeatureImage_updatedAt_operator>;
  url?: InputMaybe<News_FeatureImage_url_operator>;
  width?: InputMaybe<News_FeatureImage_width_operator>;
}

export interface News_FeatureImage_where_or {
  alt?: InputMaybe<News_FeatureImage_alt_operator>;
  createdAt?: InputMaybe<News_FeatureImage_createdAt_operator>;
  filename?: InputMaybe<News_FeatureImage_filename_operator>;
  filesize?: InputMaybe<News_FeatureImage_filesize_operator>;
  height?: InputMaybe<News_FeatureImage_height_operator>;
  id?: InputMaybe<News_FeatureImage_id_operator>;
  mimeType?: InputMaybe<News_FeatureImage_mimeType_operator>;
  sizes__sixteenByNineMedium__filename?: InputMaybe<News_FeatureImage_sizes__sixteenByNineMedium__filename_operator>;
  sizes__sixteenByNineMedium__filesize?: InputMaybe<News_FeatureImage_sizes__sixteenByNineMedium__filesize_operator>;
  sizes__sixteenByNineMedium__height?: InputMaybe<News_FeatureImage_sizes__sixteenByNineMedium__height_operator>;
  sizes__sixteenByNineMedium__mimeType?: InputMaybe<News_FeatureImage_sizes__sixteenByNineMedium__mimeType_operator>;
  sizes__sixteenByNineMedium__url?: InputMaybe<News_FeatureImage_sizes__sixteenByNineMedium__url_operator>;
  sizes__sixteenByNineMedium__width?: InputMaybe<News_FeatureImage_sizes__sixteenByNineMedium__width_operator>;
  sizes__thumbnail__filename?: InputMaybe<News_FeatureImage_sizes__thumbnail__filename_operator>;
  sizes__thumbnail__filesize?: InputMaybe<News_FeatureImage_sizes__thumbnail__filesize_operator>;
  sizes__thumbnail__height?: InputMaybe<News_FeatureImage_sizes__thumbnail__height_operator>;
  sizes__thumbnail__mimeType?: InputMaybe<News_FeatureImage_sizes__thumbnail__mimeType_operator>;
  sizes__thumbnail__url?: InputMaybe<News_FeatureImage_sizes__thumbnail__url_operator>;
  sizes__thumbnail__width?: InputMaybe<News_FeatureImage_sizes__thumbnail__width_operator>;
  updatedAt?: InputMaybe<News_FeatureImage_updatedAt_operator>;
  url?: InputMaybe<News_FeatureImage_url_operator>;
  width?: InputMaybe<News_FeatureImage_width_operator>;
}

export interface News_FeatureImage_width_operator {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
}

export interface News_author_operator {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  equals?: InputMaybe<Scalars['JSON']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  not_equals?: InputMaybe<Scalars['JSON']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
}

export interface News_content_operator {
  contains?: InputMaybe<Scalars['JSON']>;
  equals?: InputMaybe<Scalars['JSON']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  like?: InputMaybe<Scalars['JSON']>;
  not_equals?: InputMaybe<Scalars['JSON']>;
}

export interface News_createdAt_operator {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
}

export interface News_featureImage_operator {
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  not_equals?: InputMaybe<Scalars['String']>;
}

export interface News_id_operator {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}

export interface News_publishedDate_operator {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
}

export interface News_readTime_operator {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
}

export interface News_slug_operator {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}

export enum News_status {
  draft = 'draft',
  published = 'published',
}

export enum News_status_Input {
  draft = 'draft',
  published = 'published',
}

export enum News_status_MutationInput {
  draft = 'draft',
  published = 'published',
}

export interface News_status_operator {
  all?: InputMaybe<Array<InputMaybe<News_status_Input>>>;
  equals?: InputMaybe<News_status_Input>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<News_status_Input>>>;
  not_equals?: InputMaybe<News_status_Input>;
  not_in?: InputMaybe<Array<InputMaybe<News_status_Input>>>;
}

export interface News_tags_operator {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  equals?: InputMaybe<Scalars['JSON']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  not_equals?: InputMaybe<Scalars['JSON']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
}

export interface News_title_operator {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}

export interface News_updatedAt_operator {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
}

export interface News_where {
  AND?: InputMaybe<Array<InputMaybe<News_where_and>>>;
  OR?: InputMaybe<Array<InputMaybe<News_where_or>>>;
  author?: InputMaybe<News_author_operator>;
  content?: InputMaybe<News_content_operator>;
  createdAt?: InputMaybe<News_createdAt_operator>;
  featureImage?: InputMaybe<News_featureImage_operator>;
  id?: InputMaybe<News_id_operator>;
  publishedDate?: InputMaybe<News_publishedDate_operator>;
  readTime?: InputMaybe<News_readTime_operator>;
  slug?: InputMaybe<News_slug_operator>;
  status?: InputMaybe<News_status_operator>;
  tags?: InputMaybe<News_tags_operator>;
  title?: InputMaybe<News_title_operator>;
  updatedAt?: InputMaybe<News_updatedAt_operator>;
}

export interface News_where_and {
  author?: InputMaybe<News_author_operator>;
  content?: InputMaybe<News_content_operator>;
  createdAt?: InputMaybe<News_createdAt_operator>;
  featureImage?: InputMaybe<News_featureImage_operator>;
  id?: InputMaybe<News_id_operator>;
  publishedDate?: InputMaybe<News_publishedDate_operator>;
  readTime?: InputMaybe<News_readTime_operator>;
  slug?: InputMaybe<News_slug_operator>;
  status?: InputMaybe<News_status_operator>;
  tags?: InputMaybe<News_tags_operator>;
  title?: InputMaybe<News_title_operator>;
  updatedAt?: InputMaybe<News_updatedAt_operator>;
}

export interface News_where_or {
  author?: InputMaybe<News_author_operator>;
  content?: InputMaybe<News_content_operator>;
  createdAt?: InputMaybe<News_createdAt_operator>;
  featureImage?: InputMaybe<News_featureImage_operator>;
  id?: InputMaybe<News_id_operator>;
  publishedDate?: InputMaybe<News_publishedDate_operator>;
  readTime?: InputMaybe<News_readTime_operator>;
  slug?: InputMaybe<News_slug_operator>;
  status?: InputMaybe<News_status_operator>;
  tags?: InputMaybe<News_tags_operator>;
  title?: InputMaybe<News_title_operator>;
  updatedAt?: InputMaybe<News_updatedAt_operator>;
}

export interface PayloadPreferenceUpdate_UserRelationshipInput {
  relationTo?: InputMaybe<PayloadPreferenceUpdate_UserRelationshipInputRelationTo>;
  value?: InputMaybe<Scalars['JSON']>;
}

export enum PayloadPreferenceUpdate_UserRelationshipInputRelationTo {
  users = 'users',
}

export interface PayloadPreference_UserRelationshipInput {
  relationTo?: InputMaybe<PayloadPreference_UserRelationshipInputRelationTo>;
  value?: InputMaybe<Scalars['JSON']>;
}

export enum PayloadPreference_UserRelationshipInputRelationTo {
  users = 'users',
}

export enum PayloadPreference_User_RelationTo {
  users = 'users',
}

export interface PayloadPreference_createdAt_operator {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
}

export interface PayloadPreference_id_operator {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}

export interface PayloadPreference_key_operator {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}

export interface PayloadPreference_updatedAt_operator {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
}

export interface PayloadPreference_user_Relation {
  relationTo?: InputMaybe<PayloadPreference_user_Relation_RelationTo>;
  value?: InputMaybe<Scalars['JSON']>;
}

export enum PayloadPreference_user_Relation_RelationTo {
  users = 'users',
}

export interface PayloadPreference_value_operator {
  contains?: InputMaybe<Scalars['JSON']>;
  equals?: InputMaybe<Scalars['JSON']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  intersects?: InputMaybe<Scalars['JSON']>;
  like?: InputMaybe<Scalars['JSON']>;
  not_equals?: InputMaybe<Scalars['JSON']>;
  within?: InputMaybe<Scalars['JSON']>;
}

export interface PayloadPreference_where {
  AND?: InputMaybe<Array<InputMaybe<PayloadPreference_where_and>>>;
  OR?: InputMaybe<Array<InputMaybe<PayloadPreference_where_or>>>;
  createdAt?: InputMaybe<PayloadPreference_createdAt_operator>;
  id?: InputMaybe<PayloadPreference_id_operator>;
  key?: InputMaybe<PayloadPreference_key_operator>;
  updatedAt?: InputMaybe<PayloadPreference_updatedAt_operator>;
  user?: InputMaybe<PayloadPreference_user_Relation>;
  value?: InputMaybe<PayloadPreference_value_operator>;
}

export interface PayloadPreference_where_and {
  createdAt?: InputMaybe<PayloadPreference_createdAt_operator>;
  id?: InputMaybe<PayloadPreference_id_operator>;
  key?: InputMaybe<PayloadPreference_key_operator>;
  updatedAt?: InputMaybe<PayloadPreference_updatedAt_operator>;
  user?: InputMaybe<PayloadPreference_user_Relation>;
  value?: InputMaybe<PayloadPreference_value_operator>;
}

export interface PayloadPreference_where_or {
  createdAt?: InputMaybe<PayloadPreference_createdAt_operator>;
  id?: InputMaybe<PayloadPreference_id_operator>;
  key?: InputMaybe<PayloadPreference_key_operator>;
  updatedAt?: InputMaybe<PayloadPreference_updatedAt_operator>;
  user?: InputMaybe<PayloadPreference_user_Relation>;
  value?: InputMaybe<PayloadPreference_value_operator>;
}

export enum UserUpdate_role_MutationInput {
  admin = 'admin',
  user = 'user',
}

export interface User_AvatarImage_alt_operator {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}

export interface User_AvatarImage_createdAt_operator {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
}

export interface User_AvatarImage_filename_operator {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}

export interface User_AvatarImage_filesize_operator {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
}

export interface User_AvatarImage_height_operator {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
}

export interface User_AvatarImage_id_operator {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}

export interface User_AvatarImage_mimeType_operator {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}

export interface User_AvatarImage_sizes__sixteenByNineMedium__filename_operator {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}

export interface User_AvatarImage_sizes__sixteenByNineMedium__filesize_operator {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
}

export interface User_AvatarImage_sizes__sixteenByNineMedium__height_operator {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
}

export interface User_AvatarImage_sizes__sixteenByNineMedium__mimeType_operator {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}

export interface User_AvatarImage_sizes__sixteenByNineMedium__url_operator {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}

export interface User_AvatarImage_sizes__sixteenByNineMedium__width_operator {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
}

export interface User_AvatarImage_sizes__thumbnail__filename_operator {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}

export interface User_AvatarImage_sizes__thumbnail__filesize_operator {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
}

export interface User_AvatarImage_sizes__thumbnail__height_operator {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
}

export interface User_AvatarImage_sizes__thumbnail__mimeType_operator {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}

export interface User_AvatarImage_sizes__thumbnail__url_operator {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}

export interface User_AvatarImage_sizes__thumbnail__width_operator {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
}

export interface User_AvatarImage_updatedAt_operator {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
}

export interface User_AvatarImage_url_operator {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}

export interface User_AvatarImage_where {
  AND?: InputMaybe<Array<InputMaybe<User_AvatarImage_where_and>>>;
  OR?: InputMaybe<Array<InputMaybe<User_AvatarImage_where_or>>>;
  alt?: InputMaybe<User_AvatarImage_alt_operator>;
  createdAt?: InputMaybe<User_AvatarImage_createdAt_operator>;
  filename?: InputMaybe<User_AvatarImage_filename_operator>;
  filesize?: InputMaybe<User_AvatarImage_filesize_operator>;
  height?: InputMaybe<User_AvatarImage_height_operator>;
  id?: InputMaybe<User_AvatarImage_id_operator>;
  mimeType?: InputMaybe<User_AvatarImage_mimeType_operator>;
  sizes__sixteenByNineMedium__filename?: InputMaybe<User_AvatarImage_sizes__sixteenByNineMedium__filename_operator>;
  sizes__sixteenByNineMedium__filesize?: InputMaybe<User_AvatarImage_sizes__sixteenByNineMedium__filesize_operator>;
  sizes__sixteenByNineMedium__height?: InputMaybe<User_AvatarImage_sizes__sixteenByNineMedium__height_operator>;
  sizes__sixteenByNineMedium__mimeType?: InputMaybe<User_AvatarImage_sizes__sixteenByNineMedium__mimeType_operator>;
  sizes__sixteenByNineMedium__url?: InputMaybe<User_AvatarImage_sizes__sixteenByNineMedium__url_operator>;
  sizes__sixteenByNineMedium__width?: InputMaybe<User_AvatarImage_sizes__sixteenByNineMedium__width_operator>;
  sizes__thumbnail__filename?: InputMaybe<User_AvatarImage_sizes__thumbnail__filename_operator>;
  sizes__thumbnail__filesize?: InputMaybe<User_AvatarImage_sizes__thumbnail__filesize_operator>;
  sizes__thumbnail__height?: InputMaybe<User_AvatarImage_sizes__thumbnail__height_operator>;
  sizes__thumbnail__mimeType?: InputMaybe<User_AvatarImage_sizes__thumbnail__mimeType_operator>;
  sizes__thumbnail__url?: InputMaybe<User_AvatarImage_sizes__thumbnail__url_operator>;
  sizes__thumbnail__width?: InputMaybe<User_AvatarImage_sizes__thumbnail__width_operator>;
  updatedAt?: InputMaybe<User_AvatarImage_updatedAt_operator>;
  url?: InputMaybe<User_AvatarImage_url_operator>;
  width?: InputMaybe<User_AvatarImage_width_operator>;
}

export interface User_AvatarImage_where_and {
  alt?: InputMaybe<User_AvatarImage_alt_operator>;
  createdAt?: InputMaybe<User_AvatarImage_createdAt_operator>;
  filename?: InputMaybe<User_AvatarImage_filename_operator>;
  filesize?: InputMaybe<User_AvatarImage_filesize_operator>;
  height?: InputMaybe<User_AvatarImage_height_operator>;
  id?: InputMaybe<User_AvatarImage_id_operator>;
  mimeType?: InputMaybe<User_AvatarImage_mimeType_operator>;
  sizes__sixteenByNineMedium__filename?: InputMaybe<User_AvatarImage_sizes__sixteenByNineMedium__filename_operator>;
  sizes__sixteenByNineMedium__filesize?: InputMaybe<User_AvatarImage_sizes__sixteenByNineMedium__filesize_operator>;
  sizes__sixteenByNineMedium__height?: InputMaybe<User_AvatarImage_sizes__sixteenByNineMedium__height_operator>;
  sizes__sixteenByNineMedium__mimeType?: InputMaybe<User_AvatarImage_sizes__sixteenByNineMedium__mimeType_operator>;
  sizes__sixteenByNineMedium__url?: InputMaybe<User_AvatarImage_sizes__sixteenByNineMedium__url_operator>;
  sizes__sixteenByNineMedium__width?: InputMaybe<User_AvatarImage_sizes__sixteenByNineMedium__width_operator>;
  sizes__thumbnail__filename?: InputMaybe<User_AvatarImage_sizes__thumbnail__filename_operator>;
  sizes__thumbnail__filesize?: InputMaybe<User_AvatarImage_sizes__thumbnail__filesize_operator>;
  sizes__thumbnail__height?: InputMaybe<User_AvatarImage_sizes__thumbnail__height_operator>;
  sizes__thumbnail__mimeType?: InputMaybe<User_AvatarImage_sizes__thumbnail__mimeType_operator>;
  sizes__thumbnail__url?: InputMaybe<User_AvatarImage_sizes__thumbnail__url_operator>;
  sizes__thumbnail__width?: InputMaybe<User_AvatarImage_sizes__thumbnail__width_operator>;
  updatedAt?: InputMaybe<User_AvatarImage_updatedAt_operator>;
  url?: InputMaybe<User_AvatarImage_url_operator>;
  width?: InputMaybe<User_AvatarImage_width_operator>;
}

export interface User_AvatarImage_where_or {
  alt?: InputMaybe<User_AvatarImage_alt_operator>;
  createdAt?: InputMaybe<User_AvatarImage_createdAt_operator>;
  filename?: InputMaybe<User_AvatarImage_filename_operator>;
  filesize?: InputMaybe<User_AvatarImage_filesize_operator>;
  height?: InputMaybe<User_AvatarImage_height_operator>;
  id?: InputMaybe<User_AvatarImage_id_operator>;
  mimeType?: InputMaybe<User_AvatarImage_mimeType_operator>;
  sizes__sixteenByNineMedium__filename?: InputMaybe<User_AvatarImage_sizes__sixteenByNineMedium__filename_operator>;
  sizes__sixteenByNineMedium__filesize?: InputMaybe<User_AvatarImage_sizes__sixteenByNineMedium__filesize_operator>;
  sizes__sixteenByNineMedium__height?: InputMaybe<User_AvatarImage_sizes__sixteenByNineMedium__height_operator>;
  sizes__sixteenByNineMedium__mimeType?: InputMaybe<User_AvatarImage_sizes__sixteenByNineMedium__mimeType_operator>;
  sizes__sixteenByNineMedium__url?: InputMaybe<User_AvatarImage_sizes__sixteenByNineMedium__url_operator>;
  sizes__sixteenByNineMedium__width?: InputMaybe<User_AvatarImage_sizes__sixteenByNineMedium__width_operator>;
  sizes__thumbnail__filename?: InputMaybe<User_AvatarImage_sizes__thumbnail__filename_operator>;
  sizes__thumbnail__filesize?: InputMaybe<User_AvatarImage_sizes__thumbnail__filesize_operator>;
  sizes__thumbnail__height?: InputMaybe<User_AvatarImage_sizes__thumbnail__height_operator>;
  sizes__thumbnail__mimeType?: InputMaybe<User_AvatarImage_sizes__thumbnail__mimeType_operator>;
  sizes__thumbnail__url?: InputMaybe<User_AvatarImage_sizes__thumbnail__url_operator>;
  sizes__thumbnail__width?: InputMaybe<User_AvatarImage_sizes__thumbnail__width_operator>;
  updatedAt?: InputMaybe<User_AvatarImage_updatedAt_operator>;
  url?: InputMaybe<User_AvatarImage_url_operator>;
  width?: InputMaybe<User_AvatarImage_width_operator>;
}

export interface User_AvatarImage_width_operator {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
}

export interface User__verified_operator {
  equals?: InputMaybe<Scalars['Boolean']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  not_equals?: InputMaybe<Scalars['Boolean']>;
}

export interface User_avatarImage_operator {
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  not_equals?: InputMaybe<Scalars['String']>;
}

export interface User_createdAt_operator {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
}

export interface User_email_operator {
  all?: InputMaybe<Array<InputMaybe<Scalars['EmailAddress']>>>;
  contains?: InputMaybe<Scalars['EmailAddress']>;
  equals?: InputMaybe<Scalars['EmailAddress']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['EmailAddress']>>>;
  like?: InputMaybe<Scalars['EmailAddress']>;
  not_equals?: InputMaybe<Scalars['EmailAddress']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['EmailAddress']>>>;
}

export interface User_id_operator {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}

export interface User_name_operator {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}

export enum User_role {
  admin = 'admin',
  user = 'user',
}

export enum User_role_Input {
  admin = 'admin',
  user = 'user',
}

export enum User_role_MutationInput {
  admin = 'admin',
  user = 'user',
}

export interface User_role_operator {
  all?: InputMaybe<Array<InputMaybe<User_role_Input>>>;
  equals?: InputMaybe<User_role_Input>;
  in?: InputMaybe<Array<InputMaybe<User_role_Input>>>;
  not_equals?: InputMaybe<User_role_Input>;
  not_in?: InputMaybe<Array<InputMaybe<User_role_Input>>>;
}

export interface User_updatedAt_operator {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
}

export interface User_where {
  AND?: InputMaybe<Array<InputMaybe<User_where_and>>>;
  OR?: InputMaybe<Array<InputMaybe<User_where_or>>>;
  _verified?: InputMaybe<User__verified_operator>;
  avatarImage?: InputMaybe<User_avatarImage_operator>;
  createdAt?: InputMaybe<User_createdAt_operator>;
  email?: InputMaybe<User_email_operator>;
  id?: InputMaybe<User_id_operator>;
  name?: InputMaybe<User_name_operator>;
  role?: InputMaybe<User_role_operator>;
  updatedAt?: InputMaybe<User_updatedAt_operator>;
}

export interface User_where_and {
  _verified?: InputMaybe<User__verified_operator>;
  avatarImage?: InputMaybe<User_avatarImage_operator>;
  createdAt?: InputMaybe<User_createdAt_operator>;
  email?: InputMaybe<User_email_operator>;
  id?: InputMaybe<User_id_operator>;
  name?: InputMaybe<User_name_operator>;
  role?: InputMaybe<User_role_operator>;
  updatedAt?: InputMaybe<User_updatedAt_operator>;
}

export interface User_where_or {
  _verified?: InputMaybe<User__verified_operator>;
  avatarImage?: InputMaybe<User_avatarImage_operator>;
  createdAt?: InputMaybe<User_createdAt_operator>;
  email?: InputMaybe<User_email_operator>;
  id?: InputMaybe<User_id_operator>;
  name?: InputMaybe<User_name_operator>;
  role?: InputMaybe<User_role_operator>;
  updatedAt?: InputMaybe<User_updatedAt_operator>;
}

export interface Volume_VolumeCover_alt_operator {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}

export interface Volume_VolumeCover_createdAt_operator {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
}

export interface Volume_VolumeCover_filename_operator {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}

export interface Volume_VolumeCover_filesize_operator {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
}

export interface Volume_VolumeCover_height_operator {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
}

export interface Volume_VolumeCover_id_operator {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}

export interface Volume_VolumeCover_mimeType_operator {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}

export interface Volume_VolumeCover_sizes__sixteenByNineMedium__filename_operator {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}

export interface Volume_VolumeCover_sizes__sixteenByNineMedium__filesize_operator {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
}

export interface Volume_VolumeCover_sizes__sixteenByNineMedium__height_operator {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
}

export interface Volume_VolumeCover_sizes__sixteenByNineMedium__mimeType_operator {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}

export interface Volume_VolumeCover_sizes__sixteenByNineMedium__url_operator {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}

export interface Volume_VolumeCover_sizes__sixteenByNineMedium__width_operator {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
}

export interface Volume_VolumeCover_sizes__thumbnail__filename_operator {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}

export interface Volume_VolumeCover_sizes__thumbnail__filesize_operator {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
}

export interface Volume_VolumeCover_sizes__thumbnail__height_operator {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
}

export interface Volume_VolumeCover_sizes__thumbnail__mimeType_operator {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}

export interface Volume_VolumeCover_sizes__thumbnail__url_operator {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}

export interface Volume_VolumeCover_sizes__thumbnail__width_operator {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
}

export interface Volume_VolumeCover_updatedAt_operator {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
}

export interface Volume_VolumeCover_url_operator {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}

export interface Volume_VolumeCover_where {
  AND?: InputMaybe<Array<InputMaybe<Volume_VolumeCover_where_and>>>;
  OR?: InputMaybe<Array<InputMaybe<Volume_VolumeCover_where_or>>>;
  alt?: InputMaybe<Volume_VolumeCover_alt_operator>;
  createdAt?: InputMaybe<Volume_VolumeCover_createdAt_operator>;
  filename?: InputMaybe<Volume_VolumeCover_filename_operator>;
  filesize?: InputMaybe<Volume_VolumeCover_filesize_operator>;
  height?: InputMaybe<Volume_VolumeCover_height_operator>;
  id?: InputMaybe<Volume_VolumeCover_id_operator>;
  mimeType?: InputMaybe<Volume_VolumeCover_mimeType_operator>;
  sizes__sixteenByNineMedium__filename?: InputMaybe<Volume_VolumeCover_sizes__sixteenByNineMedium__filename_operator>;
  sizes__sixteenByNineMedium__filesize?: InputMaybe<Volume_VolumeCover_sizes__sixteenByNineMedium__filesize_operator>;
  sizes__sixteenByNineMedium__height?: InputMaybe<Volume_VolumeCover_sizes__sixteenByNineMedium__height_operator>;
  sizes__sixteenByNineMedium__mimeType?: InputMaybe<Volume_VolumeCover_sizes__sixteenByNineMedium__mimeType_operator>;
  sizes__sixteenByNineMedium__url?: InputMaybe<Volume_VolumeCover_sizes__sixteenByNineMedium__url_operator>;
  sizes__sixteenByNineMedium__width?: InputMaybe<Volume_VolumeCover_sizes__sixteenByNineMedium__width_operator>;
  sizes__thumbnail__filename?: InputMaybe<Volume_VolumeCover_sizes__thumbnail__filename_operator>;
  sizes__thumbnail__filesize?: InputMaybe<Volume_VolumeCover_sizes__thumbnail__filesize_operator>;
  sizes__thumbnail__height?: InputMaybe<Volume_VolumeCover_sizes__thumbnail__height_operator>;
  sizes__thumbnail__mimeType?: InputMaybe<Volume_VolumeCover_sizes__thumbnail__mimeType_operator>;
  sizes__thumbnail__url?: InputMaybe<Volume_VolumeCover_sizes__thumbnail__url_operator>;
  sizes__thumbnail__width?: InputMaybe<Volume_VolumeCover_sizes__thumbnail__width_operator>;
  updatedAt?: InputMaybe<Volume_VolumeCover_updatedAt_operator>;
  url?: InputMaybe<Volume_VolumeCover_url_operator>;
  width?: InputMaybe<Volume_VolumeCover_width_operator>;
}

export interface Volume_VolumeCover_where_and {
  alt?: InputMaybe<Volume_VolumeCover_alt_operator>;
  createdAt?: InputMaybe<Volume_VolumeCover_createdAt_operator>;
  filename?: InputMaybe<Volume_VolumeCover_filename_operator>;
  filesize?: InputMaybe<Volume_VolumeCover_filesize_operator>;
  height?: InputMaybe<Volume_VolumeCover_height_operator>;
  id?: InputMaybe<Volume_VolumeCover_id_operator>;
  mimeType?: InputMaybe<Volume_VolumeCover_mimeType_operator>;
  sizes__sixteenByNineMedium__filename?: InputMaybe<Volume_VolumeCover_sizes__sixteenByNineMedium__filename_operator>;
  sizes__sixteenByNineMedium__filesize?: InputMaybe<Volume_VolumeCover_sizes__sixteenByNineMedium__filesize_operator>;
  sizes__sixteenByNineMedium__height?: InputMaybe<Volume_VolumeCover_sizes__sixteenByNineMedium__height_operator>;
  sizes__sixteenByNineMedium__mimeType?: InputMaybe<Volume_VolumeCover_sizes__sixteenByNineMedium__mimeType_operator>;
  sizes__sixteenByNineMedium__url?: InputMaybe<Volume_VolumeCover_sizes__sixteenByNineMedium__url_operator>;
  sizes__sixteenByNineMedium__width?: InputMaybe<Volume_VolumeCover_sizes__sixteenByNineMedium__width_operator>;
  sizes__thumbnail__filename?: InputMaybe<Volume_VolumeCover_sizes__thumbnail__filename_operator>;
  sizes__thumbnail__filesize?: InputMaybe<Volume_VolumeCover_sizes__thumbnail__filesize_operator>;
  sizes__thumbnail__height?: InputMaybe<Volume_VolumeCover_sizes__thumbnail__height_operator>;
  sizes__thumbnail__mimeType?: InputMaybe<Volume_VolumeCover_sizes__thumbnail__mimeType_operator>;
  sizes__thumbnail__url?: InputMaybe<Volume_VolumeCover_sizes__thumbnail__url_operator>;
  sizes__thumbnail__width?: InputMaybe<Volume_VolumeCover_sizes__thumbnail__width_operator>;
  updatedAt?: InputMaybe<Volume_VolumeCover_updatedAt_operator>;
  url?: InputMaybe<Volume_VolumeCover_url_operator>;
  width?: InputMaybe<Volume_VolumeCover_width_operator>;
}

export interface Volume_VolumeCover_where_or {
  alt?: InputMaybe<Volume_VolumeCover_alt_operator>;
  createdAt?: InputMaybe<Volume_VolumeCover_createdAt_operator>;
  filename?: InputMaybe<Volume_VolumeCover_filename_operator>;
  filesize?: InputMaybe<Volume_VolumeCover_filesize_operator>;
  height?: InputMaybe<Volume_VolumeCover_height_operator>;
  id?: InputMaybe<Volume_VolumeCover_id_operator>;
  mimeType?: InputMaybe<Volume_VolumeCover_mimeType_operator>;
  sizes__sixteenByNineMedium__filename?: InputMaybe<Volume_VolumeCover_sizes__sixteenByNineMedium__filename_operator>;
  sizes__sixteenByNineMedium__filesize?: InputMaybe<Volume_VolumeCover_sizes__sixteenByNineMedium__filesize_operator>;
  sizes__sixteenByNineMedium__height?: InputMaybe<Volume_VolumeCover_sizes__sixteenByNineMedium__height_operator>;
  sizes__sixteenByNineMedium__mimeType?: InputMaybe<Volume_VolumeCover_sizes__sixteenByNineMedium__mimeType_operator>;
  sizes__sixteenByNineMedium__url?: InputMaybe<Volume_VolumeCover_sizes__sixteenByNineMedium__url_operator>;
  sizes__sixteenByNineMedium__width?: InputMaybe<Volume_VolumeCover_sizes__sixteenByNineMedium__width_operator>;
  sizes__thumbnail__filename?: InputMaybe<Volume_VolumeCover_sizes__thumbnail__filename_operator>;
  sizes__thumbnail__filesize?: InputMaybe<Volume_VolumeCover_sizes__thumbnail__filesize_operator>;
  sizes__thumbnail__height?: InputMaybe<Volume_VolumeCover_sizes__thumbnail__height_operator>;
  sizes__thumbnail__mimeType?: InputMaybe<Volume_VolumeCover_sizes__thumbnail__mimeType_operator>;
  sizes__thumbnail__url?: InputMaybe<Volume_VolumeCover_sizes__thumbnail__url_operator>;
  sizes__thumbnail__width?: InputMaybe<Volume_VolumeCover_sizes__thumbnail__width_operator>;
  updatedAt?: InputMaybe<Volume_VolumeCover_updatedAt_operator>;
  url?: InputMaybe<Volume_VolumeCover_url_operator>;
  width?: InputMaybe<Volume_VolumeCover_width_operator>;
}

export interface Volume_VolumeCover_width_operator {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
}

export interface Volume_VolumePdf_alt_operator {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}

export interface Volume_VolumePdf_createdAt_operator {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
}

export interface Volume_VolumePdf_filename_operator {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}

export interface Volume_VolumePdf_filesize_operator {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
}

export interface Volume_VolumePdf_height_operator {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
}

export interface Volume_VolumePdf_id_operator {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}

export interface Volume_VolumePdf_mimeType_operator {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}

export interface Volume_VolumePdf_sizes__sixteenByNineMedium__filename_operator {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}

export interface Volume_VolumePdf_sizes__sixteenByNineMedium__filesize_operator {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
}

export interface Volume_VolumePdf_sizes__sixteenByNineMedium__height_operator {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
}

export interface Volume_VolumePdf_sizes__sixteenByNineMedium__mimeType_operator {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}

export interface Volume_VolumePdf_sizes__sixteenByNineMedium__url_operator {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}

export interface Volume_VolumePdf_sizes__sixteenByNineMedium__width_operator {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
}

export interface Volume_VolumePdf_sizes__thumbnail__filename_operator {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}

export interface Volume_VolumePdf_sizes__thumbnail__filesize_operator {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
}

export interface Volume_VolumePdf_sizes__thumbnail__height_operator {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
}

export interface Volume_VolumePdf_sizes__thumbnail__mimeType_operator {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}

export interface Volume_VolumePdf_sizes__thumbnail__url_operator {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}

export interface Volume_VolumePdf_sizes__thumbnail__width_operator {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
}

export interface Volume_VolumePdf_updatedAt_operator {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
}

export interface Volume_VolumePdf_url_operator {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}

export interface Volume_VolumePdf_where {
  AND?: InputMaybe<Array<InputMaybe<Volume_VolumePdf_where_and>>>;
  OR?: InputMaybe<Array<InputMaybe<Volume_VolumePdf_where_or>>>;
  alt?: InputMaybe<Volume_VolumePdf_alt_operator>;
  createdAt?: InputMaybe<Volume_VolumePdf_createdAt_operator>;
  filename?: InputMaybe<Volume_VolumePdf_filename_operator>;
  filesize?: InputMaybe<Volume_VolumePdf_filesize_operator>;
  height?: InputMaybe<Volume_VolumePdf_height_operator>;
  id?: InputMaybe<Volume_VolumePdf_id_operator>;
  mimeType?: InputMaybe<Volume_VolumePdf_mimeType_operator>;
  sizes__sixteenByNineMedium__filename?: InputMaybe<Volume_VolumePdf_sizes__sixteenByNineMedium__filename_operator>;
  sizes__sixteenByNineMedium__filesize?: InputMaybe<Volume_VolumePdf_sizes__sixteenByNineMedium__filesize_operator>;
  sizes__sixteenByNineMedium__height?: InputMaybe<Volume_VolumePdf_sizes__sixteenByNineMedium__height_operator>;
  sizes__sixteenByNineMedium__mimeType?: InputMaybe<Volume_VolumePdf_sizes__sixteenByNineMedium__mimeType_operator>;
  sizes__sixteenByNineMedium__url?: InputMaybe<Volume_VolumePdf_sizes__sixteenByNineMedium__url_operator>;
  sizes__sixteenByNineMedium__width?: InputMaybe<Volume_VolumePdf_sizes__sixteenByNineMedium__width_operator>;
  sizes__thumbnail__filename?: InputMaybe<Volume_VolumePdf_sizes__thumbnail__filename_operator>;
  sizes__thumbnail__filesize?: InputMaybe<Volume_VolumePdf_sizes__thumbnail__filesize_operator>;
  sizes__thumbnail__height?: InputMaybe<Volume_VolumePdf_sizes__thumbnail__height_operator>;
  sizes__thumbnail__mimeType?: InputMaybe<Volume_VolumePdf_sizes__thumbnail__mimeType_operator>;
  sizes__thumbnail__url?: InputMaybe<Volume_VolumePdf_sizes__thumbnail__url_operator>;
  sizes__thumbnail__width?: InputMaybe<Volume_VolumePdf_sizes__thumbnail__width_operator>;
  updatedAt?: InputMaybe<Volume_VolumePdf_updatedAt_operator>;
  url?: InputMaybe<Volume_VolumePdf_url_operator>;
  width?: InputMaybe<Volume_VolumePdf_width_operator>;
}

export interface Volume_VolumePdf_where_and {
  alt?: InputMaybe<Volume_VolumePdf_alt_operator>;
  createdAt?: InputMaybe<Volume_VolumePdf_createdAt_operator>;
  filename?: InputMaybe<Volume_VolumePdf_filename_operator>;
  filesize?: InputMaybe<Volume_VolumePdf_filesize_operator>;
  height?: InputMaybe<Volume_VolumePdf_height_operator>;
  id?: InputMaybe<Volume_VolumePdf_id_operator>;
  mimeType?: InputMaybe<Volume_VolumePdf_mimeType_operator>;
  sizes__sixteenByNineMedium__filename?: InputMaybe<Volume_VolumePdf_sizes__sixteenByNineMedium__filename_operator>;
  sizes__sixteenByNineMedium__filesize?: InputMaybe<Volume_VolumePdf_sizes__sixteenByNineMedium__filesize_operator>;
  sizes__sixteenByNineMedium__height?: InputMaybe<Volume_VolumePdf_sizes__sixteenByNineMedium__height_operator>;
  sizes__sixteenByNineMedium__mimeType?: InputMaybe<Volume_VolumePdf_sizes__sixteenByNineMedium__mimeType_operator>;
  sizes__sixteenByNineMedium__url?: InputMaybe<Volume_VolumePdf_sizes__sixteenByNineMedium__url_operator>;
  sizes__sixteenByNineMedium__width?: InputMaybe<Volume_VolumePdf_sizes__sixteenByNineMedium__width_operator>;
  sizes__thumbnail__filename?: InputMaybe<Volume_VolumePdf_sizes__thumbnail__filename_operator>;
  sizes__thumbnail__filesize?: InputMaybe<Volume_VolumePdf_sizes__thumbnail__filesize_operator>;
  sizes__thumbnail__height?: InputMaybe<Volume_VolumePdf_sizes__thumbnail__height_operator>;
  sizes__thumbnail__mimeType?: InputMaybe<Volume_VolumePdf_sizes__thumbnail__mimeType_operator>;
  sizes__thumbnail__url?: InputMaybe<Volume_VolumePdf_sizes__thumbnail__url_operator>;
  sizes__thumbnail__width?: InputMaybe<Volume_VolumePdf_sizes__thumbnail__width_operator>;
  updatedAt?: InputMaybe<Volume_VolumePdf_updatedAt_operator>;
  url?: InputMaybe<Volume_VolumePdf_url_operator>;
  width?: InputMaybe<Volume_VolumePdf_width_operator>;
}

export interface Volume_VolumePdf_where_or {
  alt?: InputMaybe<Volume_VolumePdf_alt_operator>;
  createdAt?: InputMaybe<Volume_VolumePdf_createdAt_operator>;
  filename?: InputMaybe<Volume_VolumePdf_filename_operator>;
  filesize?: InputMaybe<Volume_VolumePdf_filesize_operator>;
  height?: InputMaybe<Volume_VolumePdf_height_operator>;
  id?: InputMaybe<Volume_VolumePdf_id_operator>;
  mimeType?: InputMaybe<Volume_VolumePdf_mimeType_operator>;
  sizes__sixteenByNineMedium__filename?: InputMaybe<Volume_VolumePdf_sizes__sixteenByNineMedium__filename_operator>;
  sizes__sixteenByNineMedium__filesize?: InputMaybe<Volume_VolumePdf_sizes__sixteenByNineMedium__filesize_operator>;
  sizes__sixteenByNineMedium__height?: InputMaybe<Volume_VolumePdf_sizes__sixteenByNineMedium__height_operator>;
  sizes__sixteenByNineMedium__mimeType?: InputMaybe<Volume_VolumePdf_sizes__sixteenByNineMedium__mimeType_operator>;
  sizes__sixteenByNineMedium__url?: InputMaybe<Volume_VolumePdf_sizes__sixteenByNineMedium__url_operator>;
  sizes__sixteenByNineMedium__width?: InputMaybe<Volume_VolumePdf_sizes__sixteenByNineMedium__width_operator>;
  sizes__thumbnail__filename?: InputMaybe<Volume_VolumePdf_sizes__thumbnail__filename_operator>;
  sizes__thumbnail__filesize?: InputMaybe<Volume_VolumePdf_sizes__thumbnail__filesize_operator>;
  sizes__thumbnail__height?: InputMaybe<Volume_VolumePdf_sizes__thumbnail__height_operator>;
  sizes__thumbnail__mimeType?: InputMaybe<Volume_VolumePdf_sizes__thumbnail__mimeType_operator>;
  sizes__thumbnail__url?: InputMaybe<Volume_VolumePdf_sizes__thumbnail__url_operator>;
  sizes__thumbnail__width?: InputMaybe<Volume_VolumePdf_sizes__thumbnail__width_operator>;
  updatedAt?: InputMaybe<Volume_VolumePdf_updatedAt_operator>;
  url?: InputMaybe<Volume_VolumePdf_url_operator>;
  width?: InputMaybe<Volume_VolumePdf_width_operator>;
}

export interface Volume_VolumePdf_width_operator {
  equals?: InputMaybe<Scalars['Float']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['Float']>;
  greater_than_equal?: InputMaybe<Scalars['Float']>;
  less_than?: InputMaybe<Scalars['Float']>;
  less_than_equal?: InputMaybe<Scalars['Float']>;
  not_equals?: InputMaybe<Scalars['Float']>;
}

export interface Volume_about_operator {
  contains?: InputMaybe<Scalars['JSON']>;
  equals?: InputMaybe<Scalars['JSON']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  like?: InputMaybe<Scalars['JSON']>;
  not_equals?: InputMaybe<Scalars['JSON']>;
}

export interface Volume_createdAt_operator {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
}

export interface Volume_id_operator {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}

export interface Volume_publishedDate_operator {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
}

export interface Volume_slug_operator {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}

export interface Volume_title_operator {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  like?: InputMaybe<Scalars['String']>;
  not_equals?: InputMaybe<Scalars['String']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
}

export interface Volume_updatedAt_operator {
  equals?: InputMaybe<Scalars['DateTime']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  greater_than?: InputMaybe<Scalars['DateTime']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']>;
  less_than?: InputMaybe<Scalars['DateTime']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']>;
  like?: InputMaybe<Scalars['DateTime']>;
  not_equals?: InputMaybe<Scalars['DateTime']>;
}

export interface Volume_volumeCover_operator {
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  not_equals?: InputMaybe<Scalars['String']>;
}

export interface Volume_volumePdf_operator {
  equals?: InputMaybe<Scalars['String']>;
  exists?: InputMaybe<Scalars['Boolean']>;
  not_equals?: InputMaybe<Scalars['String']>;
}

export interface Volume_where {
  AND?: InputMaybe<Array<InputMaybe<Volume_where_and>>>;
  OR?: InputMaybe<Array<InputMaybe<Volume_where_or>>>;
  about?: InputMaybe<Volume_about_operator>;
  createdAt?: InputMaybe<Volume_createdAt_operator>;
  id?: InputMaybe<Volume_id_operator>;
  publishedDate?: InputMaybe<Volume_publishedDate_operator>;
  slug?: InputMaybe<Volume_slug_operator>;
  title?: InputMaybe<Volume_title_operator>;
  updatedAt?: InputMaybe<Volume_updatedAt_operator>;
  volumeCover?: InputMaybe<Volume_volumeCover_operator>;
  volumePdf?: InputMaybe<Volume_volumePdf_operator>;
}

export interface Volume_where_and {
  about?: InputMaybe<Volume_about_operator>;
  createdAt?: InputMaybe<Volume_createdAt_operator>;
  id?: InputMaybe<Volume_id_operator>;
  publishedDate?: InputMaybe<Volume_publishedDate_operator>;
  slug?: InputMaybe<Volume_slug_operator>;
  title?: InputMaybe<Volume_title_operator>;
  updatedAt?: InputMaybe<Volume_updatedAt_operator>;
  volumeCover?: InputMaybe<Volume_volumeCover_operator>;
  volumePdf?: InputMaybe<Volume_volumePdf_operator>;
}

export interface Volume_where_or {
  about?: InputMaybe<Volume_about_operator>;
  createdAt?: InputMaybe<Volume_createdAt_operator>;
  id?: InputMaybe<Volume_id_operator>;
  publishedDate?: InputMaybe<Volume_publishedDate_operator>;
  slug?: InputMaybe<Volume_slug_operator>;
  title?: InputMaybe<Volume_title_operator>;
  updatedAt?: InputMaybe<Volume_updatedAt_operator>;
  volumeCover?: InputMaybe<Volume_volumeCover_operator>;
  volumePdf?: InputMaybe<Volume_volumePdf_operator>;
}

export interface mutationMediaInput {
  alt?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['String']>;
  filename?: InputMaybe<Scalars['String']>;
  filesize?: InputMaybe<Scalars['Float']>;
  height?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
  sizes?: InputMaybe<mutationMedia_SizesInput>;
  updatedAt?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Float']>;
}

export interface mutationMediaUpdateInput {
  alt?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['String']>;
  filename?: InputMaybe<Scalars['String']>;
  filesize?: InputMaybe<Scalars['Float']>;
  height?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
  sizes?: InputMaybe<mutationMediaUpdate_SizesInput>;
  updatedAt?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Float']>;
}

export interface mutationMediaUpdate_SizesInput {
  sixteenByNineMedium?: InputMaybe<mutationMediaUpdate_Sizes_SixteenByNineMediumInput>;
  thumbnail?: InputMaybe<mutationMediaUpdate_Sizes_ThumbnailInput>;
}

export interface mutationMediaUpdate_Sizes_SixteenByNineMediumInput {
  filename?: InputMaybe<Scalars['String']>;
  filesize?: InputMaybe<Scalars['Float']>;
  height?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Float']>;
}

export interface mutationMediaUpdate_Sizes_ThumbnailInput {
  filename?: InputMaybe<Scalars['String']>;
  filesize?: InputMaybe<Scalars['Float']>;
  height?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Float']>;
}

export interface mutationMedia_SizesInput {
  sixteenByNineMedium?: InputMaybe<mutationMedia_Sizes_SixteenByNineMediumInput>;
  thumbnail?: InputMaybe<mutationMedia_Sizes_ThumbnailInput>;
}

export interface mutationMedia_Sizes_SixteenByNineMediumInput {
  filename?: InputMaybe<Scalars['String']>;
  filesize?: InputMaybe<Scalars['Float']>;
  height?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Float']>;
}

export interface mutationMedia_Sizes_ThumbnailInput {
  filename?: InputMaybe<Scalars['String']>;
  filesize?: InputMaybe<Scalars['Float']>;
  height?: InputMaybe<Scalars['Float']>;
  mimeType?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Float']>;
}

export interface mutationNewsInput {
  author?: InputMaybe<Scalars['String']>;
  content?: InputMaybe<Scalars['JSON']>;
  createdAt?: InputMaybe<Scalars['String']>;
  featureImage?: InputMaybe<Scalars['String']>;
  publishedDate?: InputMaybe<Scalars['String']>;
  readTime?: InputMaybe<Scalars['Float']>;
  slug?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<News_status_MutationInput>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['String']>;
}

export interface mutationNewsTagInput {
  name?: InputMaybe<Scalars['String']>;
}

export interface mutationNewsTagUpdateInput {
  name?: InputMaybe<Scalars['String']>;
}

export interface mutationNewsUpdateInput {
  author?: InputMaybe<Scalars['String']>;
  content?: InputMaybe<Scalars['JSON']>;
  createdAt?: InputMaybe<Scalars['String']>;
  featureImage?: InputMaybe<Scalars['String']>;
  publishedDate?: InputMaybe<Scalars['String']>;
  readTime?: InputMaybe<Scalars['Float']>;
  slug?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<NewsUpdate_status_MutationInput>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['String']>;
}

export interface mutationPayloadPreferenceInput {
  createdAt?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<PayloadPreference_UserRelationshipInput>;
  value?: InputMaybe<Scalars['JSON']>;
}

export interface mutationPayloadPreferenceUpdateInput {
  createdAt?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<PayloadPreferenceUpdate_UserRelationshipInput>;
  value?: InputMaybe<Scalars['JSON']>;
}

export interface mutationUserInput {
  _verificationToken?: InputMaybe<Scalars['String']>;
  _verified?: InputMaybe<Scalars['Boolean']>;
  avatarImage?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
  hash?: InputMaybe<Scalars['String']>;
  lockUntil?: InputMaybe<Scalars['String']>;
  loginAttempts?: InputMaybe<Scalars['Float']>;
  name?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  resetPasswordExpiration?: InputMaybe<Scalars['String']>;
  resetPasswordToken?: InputMaybe<Scalars['String']>;
  role: User_role_MutationInput;
  salt?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['String']>;
}

export interface mutationUserUpdateInput {
  _verificationToken?: InputMaybe<Scalars['String']>;
  _verified?: InputMaybe<Scalars['Boolean']>;
  avatarImage?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  hash?: InputMaybe<Scalars['String']>;
  lockUntil?: InputMaybe<Scalars['String']>;
  loginAttempts?: InputMaybe<Scalars['Float']>;
  name?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  resetPasswordExpiration?: InputMaybe<Scalars['String']>;
  resetPasswordToken?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<UserUpdate_role_MutationInput>;
  salt?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['String']>;
}

export interface mutationVolumeInput {
  about?: InputMaybe<Scalars['JSON']>;
  createdAt?: InputMaybe<Scalars['String']>;
  publishedDate?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['String']>;
  volumeCover?: InputMaybe<Scalars['String']>;
  volumePdf?: InputMaybe<Scalars['String']>;
}

export interface mutationVolumeUpdateInput {
  about?: InputMaybe<Scalars['JSON']>;
  createdAt?: InputMaybe<Scalars['String']>;
  publishedDate?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['String']>;
  volumeCover?: InputMaybe<Scalars['String']>;
  volumePdf?: InputMaybe<Scalars['String']>;
}

export const scalarsEnumsHash: import('gqty').ScalarsEnumsHash = {
  Boolean: true,
  DateTime: true,
  EmailAddress: true,
  Float: true,
  Int: true,
  JSON: true,
  JSONObject: true,
  NewsUpdate_status_MutationInput: true,
  News_status: true,
  News_status_Input: true,
  News_status_MutationInput: true,
  PayloadPreferenceUpdate_UserRelationshipInputRelationTo: true,
  PayloadPreference_UserRelationshipInputRelationTo: true,
  PayloadPreference_User_RelationTo: true,
  PayloadPreference_user_Relation_RelationTo: true,
  String: true,
  UserUpdate_role_MutationInput: true,
  User_role: true,
  User_role_Input: true,
  User_role_MutationInput: true,
};
export const generatedSchema = {
  Access: {
    __typename: { __type: 'String!' },
    canAccessAdmin: { __type: 'Boolean!' },
    media: { __type: 'mediaAccess' },
    news: { __type: 'newsAccess' },
    news_tags: { __type: 'news_tagsAccess' },
    payload_preferences: { __type: 'payload_preferencesAccess' },
    users: { __type: 'usersAccess' },
    volumes: { __type: 'volumesAccess' },
  },
  Media: {
    __typename: { __type: 'String!' },
    alt: { __type: 'String' },
    createdAt: { __type: 'DateTime' },
    filename: { __type: 'String' },
    filesize: { __type: 'Float' },
    height: { __type: 'Float' },
    id: { __type: 'String' },
    mimeType: { __type: 'String' },
    sizes: { __type: 'Media_Sizes' },
    updatedAt: { __type: 'DateTime' },
    url: { __type: 'String' },
    width: { __type: 'Float' },
  },
  MediaCreateAccess: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
    where: { __type: 'JSONObject' },
  },
  MediaCreateDocAccess: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
    where: { __type: 'JSONObject' },
  },
  MediaDeleteAccess: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
    where: { __type: 'JSONObject' },
  },
  MediaDeleteDocAccess: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
    where: { __type: 'JSONObject' },
  },
  MediaDocAccessFields: {
    __typename: { __type: 'String!' },
    alt: { __type: 'MediaDocAccessFields_alt' },
    createdAt: { __type: 'MediaDocAccessFields_createdAt' },
    filename: { __type: 'MediaDocAccessFields_filename' },
    filesize: { __type: 'MediaDocAccessFields_filesize' },
    height: { __type: 'MediaDocAccessFields_height' },
    mimeType: { __type: 'MediaDocAccessFields_mimeType' },
    sizes: { __type: 'MediaDocAccessFields_sizes' },
    updatedAt: { __type: 'MediaDocAccessFields_updatedAt' },
    url: { __type: 'MediaDocAccessFields_url' },
    width: { __type: 'MediaDocAccessFields_width' },
  },
  MediaDocAccessFields_alt: {
    __typename: { __type: 'String!' },
    create: { __type: 'MediaDocAccessFields_alt_Create' },
    delete: { __type: 'MediaDocAccessFields_alt_Delete' },
    read: { __type: 'MediaDocAccessFields_alt_Read' },
    update: { __type: 'MediaDocAccessFields_alt_Update' },
  },
  MediaDocAccessFields_alt_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaDocAccessFields_alt_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaDocAccessFields_alt_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaDocAccessFields_alt_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaDocAccessFields_createdAt: {
    __typename: { __type: 'String!' },
    create: { __type: 'MediaDocAccessFields_createdAt_Create' },
    delete: { __type: 'MediaDocAccessFields_createdAt_Delete' },
    read: { __type: 'MediaDocAccessFields_createdAt_Read' },
    update: { __type: 'MediaDocAccessFields_createdAt_Update' },
  },
  MediaDocAccessFields_createdAt_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaDocAccessFields_createdAt_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaDocAccessFields_createdAt_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaDocAccessFields_createdAt_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaDocAccessFields_filename: {
    __typename: { __type: 'String!' },
    create: { __type: 'MediaDocAccessFields_filename_Create' },
    delete: { __type: 'MediaDocAccessFields_filename_Delete' },
    read: { __type: 'MediaDocAccessFields_filename_Read' },
    update: { __type: 'MediaDocAccessFields_filename_Update' },
  },
  MediaDocAccessFields_filename_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaDocAccessFields_filename_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaDocAccessFields_filename_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaDocAccessFields_filename_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaDocAccessFields_filesize: {
    __typename: { __type: 'String!' },
    create: { __type: 'MediaDocAccessFields_filesize_Create' },
    delete: { __type: 'MediaDocAccessFields_filesize_Delete' },
    read: { __type: 'MediaDocAccessFields_filesize_Read' },
    update: { __type: 'MediaDocAccessFields_filesize_Update' },
  },
  MediaDocAccessFields_filesize_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaDocAccessFields_filesize_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaDocAccessFields_filesize_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaDocAccessFields_filesize_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaDocAccessFields_height: {
    __typename: { __type: 'String!' },
    create: { __type: 'MediaDocAccessFields_height_Create' },
    delete: { __type: 'MediaDocAccessFields_height_Delete' },
    read: { __type: 'MediaDocAccessFields_height_Read' },
    update: { __type: 'MediaDocAccessFields_height_Update' },
  },
  MediaDocAccessFields_height_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaDocAccessFields_height_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaDocAccessFields_height_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaDocAccessFields_height_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaDocAccessFields_mimeType: {
    __typename: { __type: 'String!' },
    create: { __type: 'MediaDocAccessFields_mimeType_Create' },
    delete: { __type: 'MediaDocAccessFields_mimeType_Delete' },
    read: { __type: 'MediaDocAccessFields_mimeType_Read' },
    update: { __type: 'MediaDocAccessFields_mimeType_Update' },
  },
  MediaDocAccessFields_mimeType_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaDocAccessFields_mimeType_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaDocAccessFields_mimeType_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaDocAccessFields_mimeType_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaDocAccessFields_sizes: {
    __typename: { __type: 'String!' },
    create: { __type: 'MediaDocAccessFields_sizes_Create' },
    delete: { __type: 'MediaDocAccessFields_sizes_Delete' },
    fields: { __type: 'MediaDocAccessFields_sizes_Fields' },
    read: { __type: 'MediaDocAccessFields_sizes_Read' },
    update: { __type: 'MediaDocAccessFields_sizes_Update' },
  },
  MediaDocAccessFields_sizes_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaDocAccessFields_sizes_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaDocAccessFields_sizes_Fields: {
    __typename: { __type: 'String!' },
    sixteenByNineMedium: {
      __type: 'MediaDocAccessFields_sizes_sixteenByNineMedium',
    },
    thumbnail: { __type: 'MediaDocAccessFields_sizes_thumbnail' },
  },
  MediaDocAccessFields_sizes_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaDocAccessFields_sizes_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaDocAccessFields_sizes_sixteenByNineMedium: {
    __typename: { __type: 'String!' },
    create: { __type: 'MediaDocAccessFields_sizes_sixteenByNineMedium_Create' },
    delete: { __type: 'MediaDocAccessFields_sizes_sixteenByNineMedium_Delete' },
    fields: { __type: 'MediaDocAccessFields_sizes_sixteenByNineMedium_Fields' },
    read: { __type: 'MediaDocAccessFields_sizes_sixteenByNineMedium_Read' },
    update: { __type: 'MediaDocAccessFields_sizes_sixteenByNineMedium_Update' },
  },
  MediaDocAccessFields_sizes_sixteenByNineMedium_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaDocAccessFields_sizes_sixteenByNineMedium_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaDocAccessFields_sizes_sixteenByNineMedium_Fields: {
    __typename: { __type: 'String!' },
    filename: {
      __type: 'MediaDocAccessFields_sizes_sixteenByNineMedium_filename',
    },
    filesize: {
      __type: 'MediaDocAccessFields_sizes_sixteenByNineMedium_filesize',
    },
    height: { __type: 'MediaDocAccessFields_sizes_sixteenByNineMedium_height' },
    mimeType: {
      __type: 'MediaDocAccessFields_sizes_sixteenByNineMedium_mimeType',
    },
    url: { __type: 'MediaDocAccessFields_sizes_sixteenByNineMedium_url' },
    width: { __type: 'MediaDocAccessFields_sizes_sixteenByNineMedium_width' },
  },
  MediaDocAccessFields_sizes_sixteenByNineMedium_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaDocAccessFields_sizes_sixteenByNineMedium_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaDocAccessFields_sizes_sixteenByNineMedium_filename: {
    __typename: { __type: 'String!' },
    create: {
      __type: 'MediaDocAccessFields_sizes_sixteenByNineMedium_filename_Create',
    },
    delete: {
      __type: 'MediaDocAccessFields_sizes_sixteenByNineMedium_filename_Delete',
    },
    read: {
      __type: 'MediaDocAccessFields_sizes_sixteenByNineMedium_filename_Read',
    },
    update: {
      __type: 'MediaDocAccessFields_sizes_sixteenByNineMedium_filename_Update',
    },
  },
  MediaDocAccessFields_sizes_sixteenByNineMedium_filename_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaDocAccessFields_sizes_sixteenByNineMedium_filename_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaDocAccessFields_sizes_sixteenByNineMedium_filename_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaDocAccessFields_sizes_sixteenByNineMedium_filename_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaDocAccessFields_sizes_sixteenByNineMedium_filesize: {
    __typename: { __type: 'String!' },
    create: {
      __type: 'MediaDocAccessFields_sizes_sixteenByNineMedium_filesize_Create',
    },
    delete: {
      __type: 'MediaDocAccessFields_sizes_sixteenByNineMedium_filesize_Delete',
    },
    read: {
      __type: 'MediaDocAccessFields_sizes_sixteenByNineMedium_filesize_Read',
    },
    update: {
      __type: 'MediaDocAccessFields_sizes_sixteenByNineMedium_filesize_Update',
    },
  },
  MediaDocAccessFields_sizes_sixteenByNineMedium_filesize_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaDocAccessFields_sizes_sixteenByNineMedium_filesize_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaDocAccessFields_sizes_sixteenByNineMedium_filesize_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaDocAccessFields_sizes_sixteenByNineMedium_filesize_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaDocAccessFields_sizes_sixteenByNineMedium_height: {
    __typename: { __type: 'String!' },
    create: {
      __type: 'MediaDocAccessFields_sizes_sixteenByNineMedium_height_Create',
    },
    delete: {
      __type: 'MediaDocAccessFields_sizes_sixteenByNineMedium_height_Delete',
    },
    read: {
      __type: 'MediaDocAccessFields_sizes_sixteenByNineMedium_height_Read',
    },
    update: {
      __type: 'MediaDocAccessFields_sizes_sixteenByNineMedium_height_Update',
    },
  },
  MediaDocAccessFields_sizes_sixteenByNineMedium_height_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaDocAccessFields_sizes_sixteenByNineMedium_height_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaDocAccessFields_sizes_sixteenByNineMedium_height_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaDocAccessFields_sizes_sixteenByNineMedium_height_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaDocAccessFields_sizes_sixteenByNineMedium_mimeType: {
    __typename: { __type: 'String!' },
    create: {
      __type: 'MediaDocAccessFields_sizes_sixteenByNineMedium_mimeType_Create',
    },
    delete: {
      __type: 'MediaDocAccessFields_sizes_sixteenByNineMedium_mimeType_Delete',
    },
    read: {
      __type: 'MediaDocAccessFields_sizes_sixteenByNineMedium_mimeType_Read',
    },
    update: {
      __type: 'MediaDocAccessFields_sizes_sixteenByNineMedium_mimeType_Update',
    },
  },
  MediaDocAccessFields_sizes_sixteenByNineMedium_mimeType_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaDocAccessFields_sizes_sixteenByNineMedium_mimeType_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaDocAccessFields_sizes_sixteenByNineMedium_mimeType_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaDocAccessFields_sizes_sixteenByNineMedium_mimeType_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaDocAccessFields_sizes_sixteenByNineMedium_url: {
    __typename: { __type: 'String!' },
    create: {
      __type: 'MediaDocAccessFields_sizes_sixteenByNineMedium_url_Create',
    },
    delete: {
      __type: 'MediaDocAccessFields_sizes_sixteenByNineMedium_url_Delete',
    },
    read: { __type: 'MediaDocAccessFields_sizes_sixteenByNineMedium_url_Read' },
    update: {
      __type: 'MediaDocAccessFields_sizes_sixteenByNineMedium_url_Update',
    },
  },
  MediaDocAccessFields_sizes_sixteenByNineMedium_url_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaDocAccessFields_sizes_sixteenByNineMedium_url_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaDocAccessFields_sizes_sixteenByNineMedium_url_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaDocAccessFields_sizes_sixteenByNineMedium_url_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaDocAccessFields_sizes_sixteenByNineMedium_width: {
    __typename: { __type: 'String!' },
    create: {
      __type: 'MediaDocAccessFields_sizes_sixteenByNineMedium_width_Create',
    },
    delete: {
      __type: 'MediaDocAccessFields_sizes_sixteenByNineMedium_width_Delete',
    },
    read: {
      __type: 'MediaDocAccessFields_sizes_sixteenByNineMedium_width_Read',
    },
    update: {
      __type: 'MediaDocAccessFields_sizes_sixteenByNineMedium_width_Update',
    },
  },
  MediaDocAccessFields_sizes_sixteenByNineMedium_width_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaDocAccessFields_sizes_sixteenByNineMedium_width_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaDocAccessFields_sizes_sixteenByNineMedium_width_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaDocAccessFields_sizes_sixteenByNineMedium_width_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaDocAccessFields_sizes_thumbnail: {
    __typename: { __type: 'String!' },
    create: { __type: 'MediaDocAccessFields_sizes_thumbnail_Create' },
    delete: { __type: 'MediaDocAccessFields_sizes_thumbnail_Delete' },
    fields: { __type: 'MediaDocAccessFields_sizes_thumbnail_Fields' },
    read: { __type: 'MediaDocAccessFields_sizes_thumbnail_Read' },
    update: { __type: 'MediaDocAccessFields_sizes_thumbnail_Update' },
  },
  MediaDocAccessFields_sizes_thumbnail_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaDocAccessFields_sizes_thumbnail_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaDocAccessFields_sizes_thumbnail_Fields: {
    __typename: { __type: 'String!' },
    filename: { __type: 'MediaDocAccessFields_sizes_thumbnail_filename' },
    filesize: { __type: 'MediaDocAccessFields_sizes_thumbnail_filesize' },
    height: { __type: 'MediaDocAccessFields_sizes_thumbnail_height' },
    mimeType: { __type: 'MediaDocAccessFields_sizes_thumbnail_mimeType' },
    url: { __type: 'MediaDocAccessFields_sizes_thumbnail_url' },
    width: { __type: 'MediaDocAccessFields_sizes_thumbnail_width' },
  },
  MediaDocAccessFields_sizes_thumbnail_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaDocAccessFields_sizes_thumbnail_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaDocAccessFields_sizes_thumbnail_filename: {
    __typename: { __type: 'String!' },
    create: { __type: 'MediaDocAccessFields_sizes_thumbnail_filename_Create' },
    delete: { __type: 'MediaDocAccessFields_sizes_thumbnail_filename_Delete' },
    read: { __type: 'MediaDocAccessFields_sizes_thumbnail_filename_Read' },
    update: { __type: 'MediaDocAccessFields_sizes_thumbnail_filename_Update' },
  },
  MediaDocAccessFields_sizes_thumbnail_filename_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaDocAccessFields_sizes_thumbnail_filename_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaDocAccessFields_sizes_thumbnail_filename_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaDocAccessFields_sizes_thumbnail_filename_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaDocAccessFields_sizes_thumbnail_filesize: {
    __typename: { __type: 'String!' },
    create: { __type: 'MediaDocAccessFields_sizes_thumbnail_filesize_Create' },
    delete: { __type: 'MediaDocAccessFields_sizes_thumbnail_filesize_Delete' },
    read: { __type: 'MediaDocAccessFields_sizes_thumbnail_filesize_Read' },
    update: { __type: 'MediaDocAccessFields_sizes_thumbnail_filesize_Update' },
  },
  MediaDocAccessFields_sizes_thumbnail_filesize_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaDocAccessFields_sizes_thumbnail_filesize_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaDocAccessFields_sizes_thumbnail_filesize_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaDocAccessFields_sizes_thumbnail_filesize_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaDocAccessFields_sizes_thumbnail_height: {
    __typename: { __type: 'String!' },
    create: { __type: 'MediaDocAccessFields_sizes_thumbnail_height_Create' },
    delete: { __type: 'MediaDocAccessFields_sizes_thumbnail_height_Delete' },
    read: { __type: 'MediaDocAccessFields_sizes_thumbnail_height_Read' },
    update: { __type: 'MediaDocAccessFields_sizes_thumbnail_height_Update' },
  },
  MediaDocAccessFields_sizes_thumbnail_height_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaDocAccessFields_sizes_thumbnail_height_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaDocAccessFields_sizes_thumbnail_height_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaDocAccessFields_sizes_thumbnail_height_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaDocAccessFields_sizes_thumbnail_mimeType: {
    __typename: { __type: 'String!' },
    create: { __type: 'MediaDocAccessFields_sizes_thumbnail_mimeType_Create' },
    delete: { __type: 'MediaDocAccessFields_sizes_thumbnail_mimeType_Delete' },
    read: { __type: 'MediaDocAccessFields_sizes_thumbnail_mimeType_Read' },
    update: { __type: 'MediaDocAccessFields_sizes_thumbnail_mimeType_Update' },
  },
  MediaDocAccessFields_sizes_thumbnail_mimeType_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaDocAccessFields_sizes_thumbnail_mimeType_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaDocAccessFields_sizes_thumbnail_mimeType_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaDocAccessFields_sizes_thumbnail_mimeType_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaDocAccessFields_sizes_thumbnail_url: {
    __typename: { __type: 'String!' },
    create: { __type: 'MediaDocAccessFields_sizes_thumbnail_url_Create' },
    delete: { __type: 'MediaDocAccessFields_sizes_thumbnail_url_Delete' },
    read: { __type: 'MediaDocAccessFields_sizes_thumbnail_url_Read' },
    update: { __type: 'MediaDocAccessFields_sizes_thumbnail_url_Update' },
  },
  MediaDocAccessFields_sizes_thumbnail_url_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaDocAccessFields_sizes_thumbnail_url_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaDocAccessFields_sizes_thumbnail_url_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaDocAccessFields_sizes_thumbnail_url_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaDocAccessFields_sizes_thumbnail_width: {
    __typename: { __type: 'String!' },
    create: { __type: 'MediaDocAccessFields_sizes_thumbnail_width_Create' },
    delete: { __type: 'MediaDocAccessFields_sizes_thumbnail_width_Delete' },
    read: { __type: 'MediaDocAccessFields_sizes_thumbnail_width_Read' },
    update: { __type: 'MediaDocAccessFields_sizes_thumbnail_width_Update' },
  },
  MediaDocAccessFields_sizes_thumbnail_width_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaDocAccessFields_sizes_thumbnail_width_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaDocAccessFields_sizes_thumbnail_width_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaDocAccessFields_sizes_thumbnail_width_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaDocAccessFields_updatedAt: {
    __typename: { __type: 'String!' },
    create: { __type: 'MediaDocAccessFields_updatedAt_Create' },
    delete: { __type: 'MediaDocAccessFields_updatedAt_Delete' },
    read: { __type: 'MediaDocAccessFields_updatedAt_Read' },
    update: { __type: 'MediaDocAccessFields_updatedAt_Update' },
  },
  MediaDocAccessFields_updatedAt_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaDocAccessFields_updatedAt_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaDocAccessFields_updatedAt_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaDocAccessFields_updatedAt_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaDocAccessFields_url: {
    __typename: { __type: 'String!' },
    create: { __type: 'MediaDocAccessFields_url_Create' },
    delete: { __type: 'MediaDocAccessFields_url_Delete' },
    read: { __type: 'MediaDocAccessFields_url_Read' },
    update: { __type: 'MediaDocAccessFields_url_Update' },
  },
  MediaDocAccessFields_url_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaDocAccessFields_url_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaDocAccessFields_url_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaDocAccessFields_url_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaDocAccessFields_width: {
    __typename: { __type: 'String!' },
    create: { __type: 'MediaDocAccessFields_width_Create' },
    delete: { __type: 'MediaDocAccessFields_width_Delete' },
    read: { __type: 'MediaDocAccessFields_width_Read' },
    update: { __type: 'MediaDocAccessFields_width_Update' },
  },
  MediaDocAccessFields_width_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaDocAccessFields_width_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaDocAccessFields_width_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaDocAccessFields_width_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaFields: {
    __typename: { __type: 'String!' },
    alt: { __type: 'MediaFields_alt' },
    createdAt: { __type: 'MediaFields_createdAt' },
    filename: { __type: 'MediaFields_filename' },
    filesize: { __type: 'MediaFields_filesize' },
    height: { __type: 'MediaFields_height' },
    mimeType: { __type: 'MediaFields_mimeType' },
    sizes: { __type: 'MediaFields_sizes' },
    updatedAt: { __type: 'MediaFields_updatedAt' },
    url: { __type: 'MediaFields_url' },
    width: { __type: 'MediaFields_width' },
  },
  MediaFields_alt: {
    __typename: { __type: 'String!' },
    create: { __type: 'MediaFields_alt_Create' },
    delete: { __type: 'MediaFields_alt_Delete' },
    read: { __type: 'MediaFields_alt_Read' },
    update: { __type: 'MediaFields_alt_Update' },
  },
  MediaFields_alt_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaFields_alt_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaFields_alt_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaFields_alt_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaFields_createdAt: {
    __typename: { __type: 'String!' },
    create: { __type: 'MediaFields_createdAt_Create' },
    delete: { __type: 'MediaFields_createdAt_Delete' },
    read: { __type: 'MediaFields_createdAt_Read' },
    update: { __type: 'MediaFields_createdAt_Update' },
  },
  MediaFields_createdAt_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaFields_createdAt_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaFields_createdAt_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaFields_createdAt_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaFields_filename: {
    __typename: { __type: 'String!' },
    create: { __type: 'MediaFields_filename_Create' },
    delete: { __type: 'MediaFields_filename_Delete' },
    read: { __type: 'MediaFields_filename_Read' },
    update: { __type: 'MediaFields_filename_Update' },
  },
  MediaFields_filename_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaFields_filename_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaFields_filename_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaFields_filename_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaFields_filesize: {
    __typename: { __type: 'String!' },
    create: { __type: 'MediaFields_filesize_Create' },
    delete: { __type: 'MediaFields_filesize_Delete' },
    read: { __type: 'MediaFields_filesize_Read' },
    update: { __type: 'MediaFields_filesize_Update' },
  },
  MediaFields_filesize_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaFields_filesize_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaFields_filesize_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaFields_filesize_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaFields_height: {
    __typename: { __type: 'String!' },
    create: { __type: 'MediaFields_height_Create' },
    delete: { __type: 'MediaFields_height_Delete' },
    read: { __type: 'MediaFields_height_Read' },
    update: { __type: 'MediaFields_height_Update' },
  },
  MediaFields_height_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaFields_height_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaFields_height_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaFields_height_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaFields_mimeType: {
    __typename: { __type: 'String!' },
    create: { __type: 'MediaFields_mimeType_Create' },
    delete: { __type: 'MediaFields_mimeType_Delete' },
    read: { __type: 'MediaFields_mimeType_Read' },
    update: { __type: 'MediaFields_mimeType_Update' },
  },
  MediaFields_mimeType_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaFields_mimeType_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaFields_mimeType_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaFields_mimeType_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaFields_sizes: {
    __typename: { __type: 'String!' },
    create: { __type: 'MediaFields_sizes_Create' },
    delete: { __type: 'MediaFields_sizes_Delete' },
    fields: { __type: 'MediaFields_sizes_Fields' },
    read: { __type: 'MediaFields_sizes_Read' },
    update: { __type: 'MediaFields_sizes_Update' },
  },
  MediaFields_sizes_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaFields_sizes_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaFields_sizes_Fields: {
    __typename: { __type: 'String!' },
    sixteenByNineMedium: { __type: 'MediaFields_sizes_sixteenByNineMedium' },
    thumbnail: { __type: 'MediaFields_sizes_thumbnail' },
  },
  MediaFields_sizes_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaFields_sizes_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaFields_sizes_sixteenByNineMedium: {
    __typename: { __type: 'String!' },
    create: { __type: 'MediaFields_sizes_sixteenByNineMedium_Create' },
    delete: { __type: 'MediaFields_sizes_sixteenByNineMedium_Delete' },
    fields: { __type: 'MediaFields_sizes_sixteenByNineMedium_Fields' },
    read: { __type: 'MediaFields_sizes_sixteenByNineMedium_Read' },
    update: { __type: 'MediaFields_sizes_sixteenByNineMedium_Update' },
  },
  MediaFields_sizes_sixteenByNineMedium_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaFields_sizes_sixteenByNineMedium_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaFields_sizes_sixteenByNineMedium_Fields: {
    __typename: { __type: 'String!' },
    filename: { __type: 'MediaFields_sizes_sixteenByNineMedium_filename' },
    filesize: { __type: 'MediaFields_sizes_sixteenByNineMedium_filesize' },
    height: { __type: 'MediaFields_sizes_sixteenByNineMedium_height' },
    mimeType: { __type: 'MediaFields_sizes_sixteenByNineMedium_mimeType' },
    url: { __type: 'MediaFields_sizes_sixteenByNineMedium_url' },
    width: { __type: 'MediaFields_sizes_sixteenByNineMedium_width' },
  },
  MediaFields_sizes_sixteenByNineMedium_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaFields_sizes_sixteenByNineMedium_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaFields_sizes_sixteenByNineMedium_filename: {
    __typename: { __type: 'String!' },
    create: { __type: 'MediaFields_sizes_sixteenByNineMedium_filename_Create' },
    delete: { __type: 'MediaFields_sizes_sixteenByNineMedium_filename_Delete' },
    read: { __type: 'MediaFields_sizes_sixteenByNineMedium_filename_Read' },
    update: { __type: 'MediaFields_sizes_sixteenByNineMedium_filename_Update' },
  },
  MediaFields_sizes_sixteenByNineMedium_filename_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaFields_sizes_sixteenByNineMedium_filename_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaFields_sizes_sixteenByNineMedium_filename_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaFields_sizes_sixteenByNineMedium_filename_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaFields_sizes_sixteenByNineMedium_filesize: {
    __typename: { __type: 'String!' },
    create: { __type: 'MediaFields_sizes_sixteenByNineMedium_filesize_Create' },
    delete: { __type: 'MediaFields_sizes_sixteenByNineMedium_filesize_Delete' },
    read: { __type: 'MediaFields_sizes_sixteenByNineMedium_filesize_Read' },
    update: { __type: 'MediaFields_sizes_sixteenByNineMedium_filesize_Update' },
  },
  MediaFields_sizes_sixteenByNineMedium_filesize_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaFields_sizes_sixteenByNineMedium_filesize_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaFields_sizes_sixteenByNineMedium_filesize_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaFields_sizes_sixteenByNineMedium_filesize_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaFields_sizes_sixteenByNineMedium_height: {
    __typename: { __type: 'String!' },
    create: { __type: 'MediaFields_sizes_sixteenByNineMedium_height_Create' },
    delete: { __type: 'MediaFields_sizes_sixteenByNineMedium_height_Delete' },
    read: { __type: 'MediaFields_sizes_sixteenByNineMedium_height_Read' },
    update: { __type: 'MediaFields_sizes_sixteenByNineMedium_height_Update' },
  },
  MediaFields_sizes_sixteenByNineMedium_height_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaFields_sizes_sixteenByNineMedium_height_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaFields_sizes_sixteenByNineMedium_height_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaFields_sizes_sixteenByNineMedium_height_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaFields_sizes_sixteenByNineMedium_mimeType: {
    __typename: { __type: 'String!' },
    create: { __type: 'MediaFields_sizes_sixteenByNineMedium_mimeType_Create' },
    delete: { __type: 'MediaFields_sizes_sixteenByNineMedium_mimeType_Delete' },
    read: { __type: 'MediaFields_sizes_sixteenByNineMedium_mimeType_Read' },
    update: { __type: 'MediaFields_sizes_sixteenByNineMedium_mimeType_Update' },
  },
  MediaFields_sizes_sixteenByNineMedium_mimeType_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaFields_sizes_sixteenByNineMedium_mimeType_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaFields_sizes_sixteenByNineMedium_mimeType_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaFields_sizes_sixteenByNineMedium_mimeType_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaFields_sizes_sixteenByNineMedium_url: {
    __typename: { __type: 'String!' },
    create: { __type: 'MediaFields_sizes_sixteenByNineMedium_url_Create' },
    delete: { __type: 'MediaFields_sizes_sixteenByNineMedium_url_Delete' },
    read: { __type: 'MediaFields_sizes_sixteenByNineMedium_url_Read' },
    update: { __type: 'MediaFields_sizes_sixteenByNineMedium_url_Update' },
  },
  MediaFields_sizes_sixteenByNineMedium_url_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaFields_sizes_sixteenByNineMedium_url_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaFields_sizes_sixteenByNineMedium_url_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaFields_sizes_sixteenByNineMedium_url_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaFields_sizes_sixteenByNineMedium_width: {
    __typename: { __type: 'String!' },
    create: { __type: 'MediaFields_sizes_sixteenByNineMedium_width_Create' },
    delete: { __type: 'MediaFields_sizes_sixteenByNineMedium_width_Delete' },
    read: { __type: 'MediaFields_sizes_sixteenByNineMedium_width_Read' },
    update: { __type: 'MediaFields_sizes_sixteenByNineMedium_width_Update' },
  },
  MediaFields_sizes_sixteenByNineMedium_width_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaFields_sizes_sixteenByNineMedium_width_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaFields_sizes_sixteenByNineMedium_width_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaFields_sizes_sixteenByNineMedium_width_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaFields_sizes_thumbnail: {
    __typename: { __type: 'String!' },
    create: { __type: 'MediaFields_sizes_thumbnail_Create' },
    delete: { __type: 'MediaFields_sizes_thumbnail_Delete' },
    fields: { __type: 'MediaFields_sizes_thumbnail_Fields' },
    read: { __type: 'MediaFields_sizes_thumbnail_Read' },
    update: { __type: 'MediaFields_sizes_thumbnail_Update' },
  },
  MediaFields_sizes_thumbnail_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaFields_sizes_thumbnail_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaFields_sizes_thumbnail_Fields: {
    __typename: { __type: 'String!' },
    filename: { __type: 'MediaFields_sizes_thumbnail_filename' },
    filesize: { __type: 'MediaFields_sizes_thumbnail_filesize' },
    height: { __type: 'MediaFields_sizes_thumbnail_height' },
    mimeType: { __type: 'MediaFields_sizes_thumbnail_mimeType' },
    url: { __type: 'MediaFields_sizes_thumbnail_url' },
    width: { __type: 'MediaFields_sizes_thumbnail_width' },
  },
  MediaFields_sizes_thumbnail_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaFields_sizes_thumbnail_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaFields_sizes_thumbnail_filename: {
    __typename: { __type: 'String!' },
    create: { __type: 'MediaFields_sizes_thumbnail_filename_Create' },
    delete: { __type: 'MediaFields_sizes_thumbnail_filename_Delete' },
    read: { __type: 'MediaFields_sizes_thumbnail_filename_Read' },
    update: { __type: 'MediaFields_sizes_thumbnail_filename_Update' },
  },
  MediaFields_sizes_thumbnail_filename_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaFields_sizes_thumbnail_filename_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaFields_sizes_thumbnail_filename_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaFields_sizes_thumbnail_filename_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaFields_sizes_thumbnail_filesize: {
    __typename: { __type: 'String!' },
    create: { __type: 'MediaFields_sizes_thumbnail_filesize_Create' },
    delete: { __type: 'MediaFields_sizes_thumbnail_filesize_Delete' },
    read: { __type: 'MediaFields_sizes_thumbnail_filesize_Read' },
    update: { __type: 'MediaFields_sizes_thumbnail_filesize_Update' },
  },
  MediaFields_sizes_thumbnail_filesize_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaFields_sizes_thumbnail_filesize_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaFields_sizes_thumbnail_filesize_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaFields_sizes_thumbnail_filesize_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaFields_sizes_thumbnail_height: {
    __typename: { __type: 'String!' },
    create: { __type: 'MediaFields_sizes_thumbnail_height_Create' },
    delete: { __type: 'MediaFields_sizes_thumbnail_height_Delete' },
    read: { __type: 'MediaFields_sizes_thumbnail_height_Read' },
    update: { __type: 'MediaFields_sizes_thumbnail_height_Update' },
  },
  MediaFields_sizes_thumbnail_height_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaFields_sizes_thumbnail_height_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaFields_sizes_thumbnail_height_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaFields_sizes_thumbnail_height_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaFields_sizes_thumbnail_mimeType: {
    __typename: { __type: 'String!' },
    create: { __type: 'MediaFields_sizes_thumbnail_mimeType_Create' },
    delete: { __type: 'MediaFields_sizes_thumbnail_mimeType_Delete' },
    read: { __type: 'MediaFields_sizes_thumbnail_mimeType_Read' },
    update: { __type: 'MediaFields_sizes_thumbnail_mimeType_Update' },
  },
  MediaFields_sizes_thumbnail_mimeType_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaFields_sizes_thumbnail_mimeType_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaFields_sizes_thumbnail_mimeType_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaFields_sizes_thumbnail_mimeType_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaFields_sizes_thumbnail_url: {
    __typename: { __type: 'String!' },
    create: { __type: 'MediaFields_sizes_thumbnail_url_Create' },
    delete: { __type: 'MediaFields_sizes_thumbnail_url_Delete' },
    read: { __type: 'MediaFields_sizes_thumbnail_url_Read' },
    update: { __type: 'MediaFields_sizes_thumbnail_url_Update' },
  },
  MediaFields_sizes_thumbnail_url_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaFields_sizes_thumbnail_url_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaFields_sizes_thumbnail_url_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaFields_sizes_thumbnail_url_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaFields_sizes_thumbnail_width: {
    __typename: { __type: 'String!' },
    create: { __type: 'MediaFields_sizes_thumbnail_width_Create' },
    delete: { __type: 'MediaFields_sizes_thumbnail_width_Delete' },
    read: { __type: 'MediaFields_sizes_thumbnail_width_Read' },
    update: { __type: 'MediaFields_sizes_thumbnail_width_Update' },
  },
  MediaFields_sizes_thumbnail_width_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaFields_sizes_thumbnail_width_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaFields_sizes_thumbnail_width_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaFields_sizes_thumbnail_width_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaFields_updatedAt: {
    __typename: { __type: 'String!' },
    create: { __type: 'MediaFields_updatedAt_Create' },
    delete: { __type: 'MediaFields_updatedAt_Delete' },
    read: { __type: 'MediaFields_updatedAt_Read' },
    update: { __type: 'MediaFields_updatedAt_Update' },
  },
  MediaFields_updatedAt_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaFields_updatedAt_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaFields_updatedAt_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaFields_updatedAt_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaFields_url: {
    __typename: { __type: 'String!' },
    create: { __type: 'MediaFields_url_Create' },
    delete: { __type: 'MediaFields_url_Delete' },
    read: { __type: 'MediaFields_url_Read' },
    update: { __type: 'MediaFields_url_Update' },
  },
  MediaFields_url_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaFields_url_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaFields_url_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaFields_url_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaFields_width: {
    __typename: { __type: 'String!' },
    create: { __type: 'MediaFields_width_Create' },
    delete: { __type: 'MediaFields_width_Delete' },
    read: { __type: 'MediaFields_width_Read' },
    update: { __type: 'MediaFields_width_Update' },
  },
  MediaFields_width_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaFields_width_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaFields_width_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaFields_width_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  MediaReadAccess: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
    where: { __type: 'JSONObject' },
  },
  MediaReadDocAccess: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
    where: { __type: 'JSONObject' },
  },
  MediaUpdateAccess: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
    where: { __type: 'JSONObject' },
  },
  MediaUpdateDocAccess: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
    where: { __type: 'JSONObject' },
  },
  Media_Sizes: {
    __typename: { __type: 'String!' },
    sixteenByNineMedium: { __type: 'Media_Sizes_SixteenByNineMedium' },
    thumbnail: { __type: 'Media_Sizes_Thumbnail' },
  },
  Media_Sizes_SixteenByNineMedium: {
    __typename: { __type: 'String!' },
    filename: { __type: 'String' },
    filesize: { __type: 'Float' },
    height: { __type: 'Float' },
    mimeType: { __type: 'String' },
    url: { __type: 'String' },
    width: { __type: 'Float' },
  },
  Media_Sizes_Thumbnail: {
    __typename: { __type: 'String!' },
    filename: { __type: 'String' },
    filesize: { __type: 'Float' },
    height: { __type: 'Float' },
    mimeType: { __type: 'String' },
    url: { __type: 'String' },
    width: { __type: 'Float' },
  },
  Media_alt_operator: {
    all: { __type: '[String]' },
    contains: { __type: 'String' },
    equals: { __type: 'String' },
    exists: { __type: 'Boolean' },
    in: { __type: '[String]' },
    like: { __type: 'String' },
    not_equals: { __type: 'String' },
    not_in: { __type: '[String]' },
  },
  Media_createdAt_operator: {
    equals: { __type: 'DateTime' },
    exists: { __type: 'Boolean' },
    greater_than: { __type: 'DateTime' },
    greater_than_equal: { __type: 'DateTime' },
    less_than: { __type: 'DateTime' },
    less_than_equal: { __type: 'DateTime' },
    like: { __type: 'DateTime' },
    not_equals: { __type: 'DateTime' },
  },
  Media_filename_operator: {
    all: { __type: '[String]' },
    contains: { __type: 'String' },
    equals: { __type: 'String' },
    exists: { __type: 'Boolean' },
    in: { __type: '[String]' },
    like: { __type: 'String' },
    not_equals: { __type: 'String' },
    not_in: { __type: '[String]' },
  },
  Media_filesize_operator: {
    equals: { __type: 'Float' },
    exists: { __type: 'Boolean' },
    greater_than: { __type: 'Float' },
    greater_than_equal: { __type: 'Float' },
    less_than: { __type: 'Float' },
    less_than_equal: { __type: 'Float' },
    not_equals: { __type: 'Float' },
  },
  Media_height_operator: {
    equals: { __type: 'Float' },
    exists: { __type: 'Boolean' },
    greater_than: { __type: 'Float' },
    greater_than_equal: { __type: 'Float' },
    less_than: { __type: 'Float' },
    less_than_equal: { __type: 'Float' },
    not_equals: { __type: 'Float' },
  },
  Media_id_operator: {
    all: { __type: '[String]' },
    contains: { __type: 'String' },
    equals: { __type: 'String' },
    exists: { __type: 'Boolean' },
    in: { __type: '[String]' },
    like: { __type: 'String' },
    not_equals: { __type: 'String' },
    not_in: { __type: '[String]' },
  },
  Media_mimeType_operator: {
    all: { __type: '[String]' },
    contains: { __type: 'String' },
    equals: { __type: 'String' },
    exists: { __type: 'Boolean' },
    in: { __type: '[String]' },
    like: { __type: 'String' },
    not_equals: { __type: 'String' },
    not_in: { __type: '[String]' },
  },
  Media_sizes__sixteenByNineMedium__filename_operator: {
    all: { __type: '[String]' },
    contains: { __type: 'String' },
    equals: { __type: 'String' },
    exists: { __type: 'Boolean' },
    in: { __type: '[String]' },
    like: { __type: 'String' },
    not_equals: { __type: 'String' },
    not_in: { __type: '[String]' },
  },
  Media_sizes__sixteenByNineMedium__filesize_operator: {
    equals: { __type: 'Float' },
    exists: { __type: 'Boolean' },
    greater_than: { __type: 'Float' },
    greater_than_equal: { __type: 'Float' },
    less_than: { __type: 'Float' },
    less_than_equal: { __type: 'Float' },
    not_equals: { __type: 'Float' },
  },
  Media_sizes__sixteenByNineMedium__height_operator: {
    equals: { __type: 'Float' },
    exists: { __type: 'Boolean' },
    greater_than: { __type: 'Float' },
    greater_than_equal: { __type: 'Float' },
    less_than: { __type: 'Float' },
    less_than_equal: { __type: 'Float' },
    not_equals: { __type: 'Float' },
  },
  Media_sizes__sixteenByNineMedium__mimeType_operator: {
    all: { __type: '[String]' },
    contains: { __type: 'String' },
    equals: { __type: 'String' },
    exists: { __type: 'Boolean' },
    in: { __type: '[String]' },
    like: { __type: 'String' },
    not_equals: { __type: 'String' },
    not_in: { __type: '[String]' },
  },
  Media_sizes__sixteenByNineMedium__url_operator: {
    all: { __type: '[String]' },
    contains: { __type: 'String' },
    equals: { __type: 'String' },
    exists: { __type: 'Boolean' },
    in: { __type: '[String]' },
    like: { __type: 'String' },
    not_equals: { __type: 'String' },
    not_in: { __type: '[String]' },
  },
  Media_sizes__sixteenByNineMedium__width_operator: {
    equals: { __type: 'Float' },
    exists: { __type: 'Boolean' },
    greater_than: { __type: 'Float' },
    greater_than_equal: { __type: 'Float' },
    less_than: { __type: 'Float' },
    less_than_equal: { __type: 'Float' },
    not_equals: { __type: 'Float' },
  },
  Media_sizes__thumbnail__filename_operator: {
    all: { __type: '[String]' },
    contains: { __type: 'String' },
    equals: { __type: 'String' },
    exists: { __type: 'Boolean' },
    in: { __type: '[String]' },
    like: { __type: 'String' },
    not_equals: { __type: 'String' },
    not_in: { __type: '[String]' },
  },
  Media_sizes__thumbnail__filesize_operator: {
    equals: { __type: 'Float' },
    exists: { __type: 'Boolean' },
    greater_than: { __type: 'Float' },
    greater_than_equal: { __type: 'Float' },
    less_than: { __type: 'Float' },
    less_than_equal: { __type: 'Float' },
    not_equals: { __type: 'Float' },
  },
  Media_sizes__thumbnail__height_operator: {
    equals: { __type: 'Float' },
    exists: { __type: 'Boolean' },
    greater_than: { __type: 'Float' },
    greater_than_equal: { __type: 'Float' },
    less_than: { __type: 'Float' },
    less_than_equal: { __type: 'Float' },
    not_equals: { __type: 'Float' },
  },
  Media_sizes__thumbnail__mimeType_operator: {
    all: { __type: '[String]' },
    contains: { __type: 'String' },
    equals: { __type: 'String' },
    exists: { __type: 'Boolean' },
    in: { __type: '[String]' },
    like: { __type: 'String' },
    not_equals: { __type: 'String' },
    not_in: { __type: '[String]' },
  },
  Media_sizes__thumbnail__url_operator: {
    all: { __type: '[String]' },
    contains: { __type: 'String' },
    equals: { __type: 'String' },
    exists: { __type: 'Boolean' },
    in: { __type: '[String]' },
    like: { __type: 'String' },
    not_equals: { __type: 'String' },
    not_in: { __type: '[String]' },
  },
  Media_sizes__thumbnail__width_operator: {
    equals: { __type: 'Float' },
    exists: { __type: 'Boolean' },
    greater_than: { __type: 'Float' },
    greater_than_equal: { __type: 'Float' },
    less_than: { __type: 'Float' },
    less_than_equal: { __type: 'Float' },
    not_equals: { __type: 'Float' },
  },
  Media_updatedAt_operator: {
    equals: { __type: 'DateTime' },
    exists: { __type: 'Boolean' },
    greater_than: { __type: 'DateTime' },
    greater_than_equal: { __type: 'DateTime' },
    less_than: { __type: 'DateTime' },
    less_than_equal: { __type: 'DateTime' },
    like: { __type: 'DateTime' },
    not_equals: { __type: 'DateTime' },
  },
  Media_url_operator: {
    all: { __type: '[String]' },
    contains: { __type: 'String' },
    equals: { __type: 'String' },
    exists: { __type: 'Boolean' },
    in: { __type: '[String]' },
    like: { __type: 'String' },
    not_equals: { __type: 'String' },
    not_in: { __type: '[String]' },
  },
  Media_where: {
    AND: { __type: '[Media_where_and]' },
    OR: { __type: '[Media_where_or]' },
    alt: { __type: 'Media_alt_operator' },
    createdAt: { __type: 'Media_createdAt_operator' },
    filename: { __type: 'Media_filename_operator' },
    filesize: { __type: 'Media_filesize_operator' },
    height: { __type: 'Media_height_operator' },
    id: { __type: 'Media_id_operator' },
    mimeType: { __type: 'Media_mimeType_operator' },
    sizes__sixteenByNineMedium__filename: {
      __type: 'Media_sizes__sixteenByNineMedium__filename_operator',
    },
    sizes__sixteenByNineMedium__filesize: {
      __type: 'Media_sizes__sixteenByNineMedium__filesize_operator',
    },
    sizes__sixteenByNineMedium__height: {
      __type: 'Media_sizes__sixteenByNineMedium__height_operator',
    },
    sizes__sixteenByNineMedium__mimeType: {
      __type: 'Media_sizes__sixteenByNineMedium__mimeType_operator',
    },
    sizes__sixteenByNineMedium__url: {
      __type: 'Media_sizes__sixteenByNineMedium__url_operator',
    },
    sizes__sixteenByNineMedium__width: {
      __type: 'Media_sizes__sixteenByNineMedium__width_operator',
    },
    sizes__thumbnail__filename: {
      __type: 'Media_sizes__thumbnail__filename_operator',
    },
    sizes__thumbnail__filesize: {
      __type: 'Media_sizes__thumbnail__filesize_operator',
    },
    sizes__thumbnail__height: {
      __type: 'Media_sizes__thumbnail__height_operator',
    },
    sizes__thumbnail__mimeType: {
      __type: 'Media_sizes__thumbnail__mimeType_operator',
    },
    sizes__thumbnail__url: { __type: 'Media_sizes__thumbnail__url_operator' },
    sizes__thumbnail__width: {
      __type: 'Media_sizes__thumbnail__width_operator',
    },
    updatedAt: { __type: 'Media_updatedAt_operator' },
    url: { __type: 'Media_url_operator' },
    width: { __type: 'Media_width_operator' },
  },
  Media_where_and: {
    alt: { __type: 'Media_alt_operator' },
    createdAt: { __type: 'Media_createdAt_operator' },
    filename: { __type: 'Media_filename_operator' },
    filesize: { __type: 'Media_filesize_operator' },
    height: { __type: 'Media_height_operator' },
    id: { __type: 'Media_id_operator' },
    mimeType: { __type: 'Media_mimeType_operator' },
    sizes__sixteenByNineMedium__filename: {
      __type: 'Media_sizes__sixteenByNineMedium__filename_operator',
    },
    sizes__sixteenByNineMedium__filesize: {
      __type: 'Media_sizes__sixteenByNineMedium__filesize_operator',
    },
    sizes__sixteenByNineMedium__height: {
      __type: 'Media_sizes__sixteenByNineMedium__height_operator',
    },
    sizes__sixteenByNineMedium__mimeType: {
      __type: 'Media_sizes__sixteenByNineMedium__mimeType_operator',
    },
    sizes__sixteenByNineMedium__url: {
      __type: 'Media_sizes__sixteenByNineMedium__url_operator',
    },
    sizes__sixteenByNineMedium__width: {
      __type: 'Media_sizes__sixteenByNineMedium__width_operator',
    },
    sizes__thumbnail__filename: {
      __type: 'Media_sizes__thumbnail__filename_operator',
    },
    sizes__thumbnail__filesize: {
      __type: 'Media_sizes__thumbnail__filesize_operator',
    },
    sizes__thumbnail__height: {
      __type: 'Media_sizes__thumbnail__height_operator',
    },
    sizes__thumbnail__mimeType: {
      __type: 'Media_sizes__thumbnail__mimeType_operator',
    },
    sizes__thumbnail__url: { __type: 'Media_sizes__thumbnail__url_operator' },
    sizes__thumbnail__width: {
      __type: 'Media_sizes__thumbnail__width_operator',
    },
    updatedAt: { __type: 'Media_updatedAt_operator' },
    url: { __type: 'Media_url_operator' },
    width: { __type: 'Media_width_operator' },
  },
  Media_where_or: {
    alt: { __type: 'Media_alt_operator' },
    createdAt: { __type: 'Media_createdAt_operator' },
    filename: { __type: 'Media_filename_operator' },
    filesize: { __type: 'Media_filesize_operator' },
    height: { __type: 'Media_height_operator' },
    id: { __type: 'Media_id_operator' },
    mimeType: { __type: 'Media_mimeType_operator' },
    sizes__sixteenByNineMedium__filename: {
      __type: 'Media_sizes__sixteenByNineMedium__filename_operator',
    },
    sizes__sixteenByNineMedium__filesize: {
      __type: 'Media_sizes__sixteenByNineMedium__filesize_operator',
    },
    sizes__sixteenByNineMedium__height: {
      __type: 'Media_sizes__sixteenByNineMedium__height_operator',
    },
    sizes__sixteenByNineMedium__mimeType: {
      __type: 'Media_sizes__sixteenByNineMedium__mimeType_operator',
    },
    sizes__sixteenByNineMedium__url: {
      __type: 'Media_sizes__sixteenByNineMedium__url_operator',
    },
    sizes__sixteenByNineMedium__width: {
      __type: 'Media_sizes__sixteenByNineMedium__width_operator',
    },
    sizes__thumbnail__filename: {
      __type: 'Media_sizes__thumbnail__filename_operator',
    },
    sizes__thumbnail__filesize: {
      __type: 'Media_sizes__thumbnail__filesize_operator',
    },
    sizes__thumbnail__height: {
      __type: 'Media_sizes__thumbnail__height_operator',
    },
    sizes__thumbnail__mimeType: {
      __type: 'Media_sizes__thumbnail__mimeType_operator',
    },
    sizes__thumbnail__url: { __type: 'Media_sizes__thumbnail__url_operator' },
    sizes__thumbnail__width: {
      __type: 'Media_sizes__thumbnail__width_operator',
    },
    updatedAt: { __type: 'Media_updatedAt_operator' },
    url: { __type: 'Media_url_operator' },
    width: { __type: 'Media_width_operator' },
  },
  Media_width_operator: {
    equals: { __type: 'Float' },
    exists: { __type: 'Boolean' },
    greater_than: { __type: 'Float' },
    greater_than_equal: { __type: 'Float' },
    less_than: { __type: 'Float' },
    less_than_equal: { __type: 'Float' },
    not_equals: { __type: 'Float' },
  },
  News: {
    __typename: { __type: 'String!' },
    author: { __type: 'User' },
    content: { __type: 'JSON', __args: { depth: 'Int' } },
    createdAt: { __type: 'DateTime' },
    featureImage: {
      __type: 'Media',
      __args: { where: 'News_FeatureImage_where' },
    },
    id: { __type: 'String' },
    publishedDate: { __type: 'DateTime' },
    readTime: { __type: 'Float' },
    slug: { __type: 'String' },
    status: { __type: 'News_status' },
    tags: { __type: '[NewsTag!]' },
    title: { __type: 'String!' },
    updatedAt: { __type: 'DateTime' },
  },
  NewsCreateAccess: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
    where: { __type: 'JSONObject' },
  },
  NewsCreateDocAccess: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
    where: { __type: 'JSONObject' },
  },
  NewsDeleteAccess: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
    where: { __type: 'JSONObject' },
  },
  NewsDeleteDocAccess: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
    where: { __type: 'JSONObject' },
  },
  NewsDocAccessFields: {
    __typename: { __type: 'String!' },
    author: { __type: 'NewsDocAccessFields_author' },
    content: { __type: 'NewsDocAccessFields_content' },
    createdAt: { __type: 'NewsDocAccessFields_createdAt' },
    featureImage: { __type: 'NewsDocAccessFields_featureImage' },
    publishedDate: { __type: 'NewsDocAccessFields_publishedDate' },
    readTime: { __type: 'NewsDocAccessFields_readTime' },
    slug: { __type: 'NewsDocAccessFields_slug' },
    status: { __type: 'NewsDocAccessFields_status' },
    tags: { __type: 'NewsDocAccessFields_tags' },
    title: { __type: 'NewsDocAccessFields_title' },
    updatedAt: { __type: 'NewsDocAccessFields_updatedAt' },
  },
  NewsDocAccessFields_author: {
    __typename: { __type: 'String!' },
    create: { __type: 'NewsDocAccessFields_author_Create' },
    delete: { __type: 'NewsDocAccessFields_author_Delete' },
    read: { __type: 'NewsDocAccessFields_author_Read' },
    update: { __type: 'NewsDocAccessFields_author_Update' },
  },
  NewsDocAccessFields_author_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  NewsDocAccessFields_author_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  NewsDocAccessFields_author_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  NewsDocAccessFields_author_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  NewsDocAccessFields_content: {
    __typename: { __type: 'String!' },
    create: { __type: 'NewsDocAccessFields_content_Create' },
    delete: { __type: 'NewsDocAccessFields_content_Delete' },
    read: { __type: 'NewsDocAccessFields_content_Read' },
    update: { __type: 'NewsDocAccessFields_content_Update' },
  },
  NewsDocAccessFields_content_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  NewsDocAccessFields_content_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  NewsDocAccessFields_content_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  NewsDocAccessFields_content_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  NewsDocAccessFields_createdAt: {
    __typename: { __type: 'String!' },
    create: { __type: 'NewsDocAccessFields_createdAt_Create' },
    delete: { __type: 'NewsDocAccessFields_createdAt_Delete' },
    read: { __type: 'NewsDocAccessFields_createdAt_Read' },
    update: { __type: 'NewsDocAccessFields_createdAt_Update' },
  },
  NewsDocAccessFields_createdAt_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  NewsDocAccessFields_createdAt_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  NewsDocAccessFields_createdAt_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  NewsDocAccessFields_createdAt_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  NewsDocAccessFields_featureImage: {
    __typename: { __type: 'String!' },
    create: { __type: 'NewsDocAccessFields_featureImage_Create' },
    delete: { __type: 'NewsDocAccessFields_featureImage_Delete' },
    read: { __type: 'NewsDocAccessFields_featureImage_Read' },
    update: { __type: 'NewsDocAccessFields_featureImage_Update' },
  },
  NewsDocAccessFields_featureImage_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  NewsDocAccessFields_featureImage_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  NewsDocAccessFields_featureImage_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  NewsDocAccessFields_featureImage_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  NewsDocAccessFields_publishedDate: {
    __typename: { __type: 'String!' },
    create: { __type: 'NewsDocAccessFields_publishedDate_Create' },
    delete: { __type: 'NewsDocAccessFields_publishedDate_Delete' },
    read: { __type: 'NewsDocAccessFields_publishedDate_Read' },
    update: { __type: 'NewsDocAccessFields_publishedDate_Update' },
  },
  NewsDocAccessFields_publishedDate_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  NewsDocAccessFields_publishedDate_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  NewsDocAccessFields_publishedDate_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  NewsDocAccessFields_publishedDate_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  NewsDocAccessFields_readTime: {
    __typename: { __type: 'String!' },
    create: { __type: 'NewsDocAccessFields_readTime_Create' },
    delete: { __type: 'NewsDocAccessFields_readTime_Delete' },
    read: { __type: 'NewsDocAccessFields_readTime_Read' },
    update: { __type: 'NewsDocAccessFields_readTime_Update' },
  },
  NewsDocAccessFields_readTime_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  NewsDocAccessFields_readTime_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  NewsDocAccessFields_readTime_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  NewsDocAccessFields_readTime_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  NewsDocAccessFields_slug: {
    __typename: { __type: 'String!' },
    create: { __type: 'NewsDocAccessFields_slug_Create' },
    delete: { __type: 'NewsDocAccessFields_slug_Delete' },
    read: { __type: 'NewsDocAccessFields_slug_Read' },
    update: { __type: 'NewsDocAccessFields_slug_Update' },
  },
  NewsDocAccessFields_slug_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  NewsDocAccessFields_slug_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  NewsDocAccessFields_slug_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  NewsDocAccessFields_slug_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  NewsDocAccessFields_status: {
    __typename: { __type: 'String!' },
    create: { __type: 'NewsDocAccessFields_status_Create' },
    delete: { __type: 'NewsDocAccessFields_status_Delete' },
    read: { __type: 'NewsDocAccessFields_status_Read' },
    update: { __type: 'NewsDocAccessFields_status_Update' },
  },
  NewsDocAccessFields_status_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  NewsDocAccessFields_status_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  NewsDocAccessFields_status_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  NewsDocAccessFields_status_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  NewsDocAccessFields_tags: {
    __typename: { __type: 'String!' },
    create: { __type: 'NewsDocAccessFields_tags_Create' },
    delete: { __type: 'NewsDocAccessFields_tags_Delete' },
    read: { __type: 'NewsDocAccessFields_tags_Read' },
    update: { __type: 'NewsDocAccessFields_tags_Update' },
  },
  NewsDocAccessFields_tags_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  NewsDocAccessFields_tags_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  NewsDocAccessFields_tags_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  NewsDocAccessFields_tags_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  NewsDocAccessFields_title: {
    __typename: { __type: 'String!' },
    create: { __type: 'NewsDocAccessFields_title_Create' },
    delete: { __type: 'NewsDocAccessFields_title_Delete' },
    read: { __type: 'NewsDocAccessFields_title_Read' },
    update: { __type: 'NewsDocAccessFields_title_Update' },
  },
  NewsDocAccessFields_title_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  NewsDocAccessFields_title_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  NewsDocAccessFields_title_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  NewsDocAccessFields_title_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  NewsDocAccessFields_updatedAt: {
    __typename: { __type: 'String!' },
    create: { __type: 'NewsDocAccessFields_updatedAt_Create' },
    delete: { __type: 'NewsDocAccessFields_updatedAt_Delete' },
    read: { __type: 'NewsDocAccessFields_updatedAt_Read' },
    update: { __type: 'NewsDocAccessFields_updatedAt_Update' },
  },
  NewsDocAccessFields_updatedAt_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  NewsDocAccessFields_updatedAt_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  NewsDocAccessFields_updatedAt_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  NewsDocAccessFields_updatedAt_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  NewsFields: {
    __typename: { __type: 'String!' },
    author: { __type: 'NewsFields_author' },
    content: { __type: 'NewsFields_content' },
    createdAt: { __type: 'NewsFields_createdAt' },
    featureImage: { __type: 'NewsFields_featureImage' },
    publishedDate: { __type: 'NewsFields_publishedDate' },
    readTime: { __type: 'NewsFields_readTime' },
    slug: { __type: 'NewsFields_slug' },
    status: { __type: 'NewsFields_status' },
    tags: { __type: 'NewsFields_tags' },
    title: { __type: 'NewsFields_title' },
    updatedAt: { __type: 'NewsFields_updatedAt' },
  },
  NewsFields_author: {
    __typename: { __type: 'String!' },
    create: { __type: 'NewsFields_author_Create' },
    delete: { __type: 'NewsFields_author_Delete' },
    read: { __type: 'NewsFields_author_Read' },
    update: { __type: 'NewsFields_author_Update' },
  },
  NewsFields_author_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  NewsFields_author_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  NewsFields_author_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  NewsFields_author_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  NewsFields_content: {
    __typename: { __type: 'String!' },
    create: { __type: 'NewsFields_content_Create' },
    delete: { __type: 'NewsFields_content_Delete' },
    read: { __type: 'NewsFields_content_Read' },
    update: { __type: 'NewsFields_content_Update' },
  },
  NewsFields_content_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  NewsFields_content_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  NewsFields_content_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  NewsFields_content_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  NewsFields_createdAt: {
    __typename: { __type: 'String!' },
    create: { __type: 'NewsFields_createdAt_Create' },
    delete: { __type: 'NewsFields_createdAt_Delete' },
    read: { __type: 'NewsFields_createdAt_Read' },
    update: { __type: 'NewsFields_createdAt_Update' },
  },
  NewsFields_createdAt_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  NewsFields_createdAt_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  NewsFields_createdAt_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  NewsFields_createdAt_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  NewsFields_featureImage: {
    __typename: { __type: 'String!' },
    create: { __type: 'NewsFields_featureImage_Create' },
    delete: { __type: 'NewsFields_featureImage_Delete' },
    read: { __type: 'NewsFields_featureImage_Read' },
    update: { __type: 'NewsFields_featureImage_Update' },
  },
  NewsFields_featureImage_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  NewsFields_featureImage_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  NewsFields_featureImage_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  NewsFields_featureImage_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  NewsFields_publishedDate: {
    __typename: { __type: 'String!' },
    create: { __type: 'NewsFields_publishedDate_Create' },
    delete: { __type: 'NewsFields_publishedDate_Delete' },
    read: { __type: 'NewsFields_publishedDate_Read' },
    update: { __type: 'NewsFields_publishedDate_Update' },
  },
  NewsFields_publishedDate_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  NewsFields_publishedDate_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  NewsFields_publishedDate_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  NewsFields_publishedDate_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  NewsFields_readTime: {
    __typename: { __type: 'String!' },
    create: { __type: 'NewsFields_readTime_Create' },
    delete: { __type: 'NewsFields_readTime_Delete' },
    read: { __type: 'NewsFields_readTime_Read' },
    update: { __type: 'NewsFields_readTime_Update' },
  },
  NewsFields_readTime_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  NewsFields_readTime_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  NewsFields_readTime_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  NewsFields_readTime_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  NewsFields_slug: {
    __typename: { __type: 'String!' },
    create: { __type: 'NewsFields_slug_Create' },
    delete: { __type: 'NewsFields_slug_Delete' },
    read: { __type: 'NewsFields_slug_Read' },
    update: { __type: 'NewsFields_slug_Update' },
  },
  NewsFields_slug_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  NewsFields_slug_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  NewsFields_slug_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  NewsFields_slug_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  NewsFields_status: {
    __typename: { __type: 'String!' },
    create: { __type: 'NewsFields_status_Create' },
    delete: { __type: 'NewsFields_status_Delete' },
    read: { __type: 'NewsFields_status_Read' },
    update: { __type: 'NewsFields_status_Update' },
  },
  NewsFields_status_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  NewsFields_status_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  NewsFields_status_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  NewsFields_status_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  NewsFields_tags: {
    __typename: { __type: 'String!' },
    create: { __type: 'NewsFields_tags_Create' },
    delete: { __type: 'NewsFields_tags_Delete' },
    read: { __type: 'NewsFields_tags_Read' },
    update: { __type: 'NewsFields_tags_Update' },
  },
  NewsFields_tags_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  NewsFields_tags_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  NewsFields_tags_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  NewsFields_tags_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  NewsFields_title: {
    __typename: { __type: 'String!' },
    create: { __type: 'NewsFields_title_Create' },
    delete: { __type: 'NewsFields_title_Delete' },
    read: { __type: 'NewsFields_title_Read' },
    update: { __type: 'NewsFields_title_Update' },
  },
  NewsFields_title_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  NewsFields_title_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  NewsFields_title_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  NewsFields_title_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  NewsFields_updatedAt: {
    __typename: { __type: 'String!' },
    create: { __type: 'NewsFields_updatedAt_Create' },
    delete: { __type: 'NewsFields_updatedAt_Delete' },
    read: { __type: 'NewsFields_updatedAt_Read' },
    update: { __type: 'NewsFields_updatedAt_Update' },
  },
  NewsFields_updatedAt_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  NewsFields_updatedAt_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  NewsFields_updatedAt_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  NewsFields_updatedAt_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  NewsReadAccess: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
    where: { __type: 'JSONObject' },
  },
  NewsReadDocAccess: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
    where: { __type: 'JSONObject' },
  },
  NewsTag: {
    __typename: { __type: 'String!' },
    id: { __type: 'String' },
    name: { __type: 'String' },
  },
  NewsTag_id_operator: {
    all: { __type: '[String]' },
    contains: { __type: 'String' },
    equals: { __type: 'String' },
    exists: { __type: 'Boolean' },
    in: { __type: '[String]' },
    like: { __type: 'String' },
    not_equals: { __type: 'String' },
    not_in: { __type: '[String]' },
  },
  NewsTag_name_operator: {
    all: { __type: '[String]' },
    contains: { __type: 'String' },
    equals: { __type: 'String' },
    exists: { __type: 'Boolean' },
    in: { __type: '[String]' },
    like: { __type: 'String' },
    not_equals: { __type: 'String' },
    not_in: { __type: '[String]' },
  },
  NewsTag_where: {
    AND: { __type: '[NewsTag_where_and]' },
    OR: { __type: '[NewsTag_where_or]' },
    id: { __type: 'NewsTag_id_operator' },
    name: { __type: 'NewsTag_name_operator' },
  },
  NewsTag_where_and: {
    id: { __type: 'NewsTag_id_operator' },
    name: { __type: 'NewsTag_name_operator' },
  },
  NewsTag_where_or: {
    id: { __type: 'NewsTag_id_operator' },
    name: { __type: 'NewsTag_name_operator' },
  },
  NewsTags: {
    __typename: { __type: 'String!' },
    docs: { __type: '[NewsTag]' },
    hasNextPage: { __type: 'Boolean' },
    hasPrevPage: { __type: 'Boolean' },
    limit: { __type: 'Int' },
    nextPage: { __type: 'Int' },
    offset: { __type: 'Int' },
    page: { __type: 'Int' },
    pagingCounter: { __type: 'Int' },
    prevPage: { __type: 'Int' },
    totalDocs: { __type: 'Int' },
    totalPages: { __type: 'Int' },
  },
  NewsTagsCreateAccess: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
    where: { __type: 'JSONObject' },
  },
  NewsTagsCreateDocAccess: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
    where: { __type: 'JSONObject' },
  },
  NewsTagsDeleteAccess: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
    where: { __type: 'JSONObject' },
  },
  NewsTagsDeleteDocAccess: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
    where: { __type: 'JSONObject' },
  },
  NewsTagsDocAccessFields: {
    __typename: { __type: 'String!' },
    name: { __type: 'NewsTagsDocAccessFields_name' },
  },
  NewsTagsDocAccessFields_name: {
    __typename: { __type: 'String!' },
    create: { __type: 'NewsTagsDocAccessFields_name_Create' },
    delete: { __type: 'NewsTagsDocAccessFields_name_Delete' },
    read: { __type: 'NewsTagsDocAccessFields_name_Read' },
    update: { __type: 'NewsTagsDocAccessFields_name_Update' },
  },
  NewsTagsDocAccessFields_name_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  NewsTagsDocAccessFields_name_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  NewsTagsDocAccessFields_name_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  NewsTagsDocAccessFields_name_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  NewsTagsFields: {
    __typename: { __type: 'String!' },
    name: { __type: 'NewsTagsFields_name' },
  },
  NewsTagsFields_name: {
    __typename: { __type: 'String!' },
    create: { __type: 'NewsTagsFields_name_Create' },
    delete: { __type: 'NewsTagsFields_name_Delete' },
    read: { __type: 'NewsTagsFields_name_Read' },
    update: { __type: 'NewsTagsFields_name_Update' },
  },
  NewsTagsFields_name_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  NewsTagsFields_name_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  NewsTagsFields_name_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  NewsTagsFields_name_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  NewsTagsReadAccess: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
    where: { __type: 'JSONObject' },
  },
  NewsTagsReadDocAccess: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
    where: { __type: 'JSONObject' },
  },
  NewsTagsUpdateAccess: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
    where: { __type: 'JSONObject' },
  },
  NewsTagsUpdateDocAccess: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
    where: { __type: 'JSONObject' },
  },
  NewsUpdateAccess: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
    where: { __type: 'JSONObject' },
  },
  NewsUpdateDocAccess: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
    where: { __type: 'JSONObject' },
  },
  News_FeatureImage_alt_operator: {
    all: { __type: '[String]' },
    contains: { __type: 'String' },
    equals: { __type: 'String' },
    exists: { __type: 'Boolean' },
    in: { __type: '[String]' },
    like: { __type: 'String' },
    not_equals: { __type: 'String' },
    not_in: { __type: '[String]' },
  },
  News_FeatureImage_createdAt_operator: {
    equals: { __type: 'DateTime' },
    exists: { __type: 'Boolean' },
    greater_than: { __type: 'DateTime' },
    greater_than_equal: { __type: 'DateTime' },
    less_than: { __type: 'DateTime' },
    less_than_equal: { __type: 'DateTime' },
    like: { __type: 'DateTime' },
    not_equals: { __type: 'DateTime' },
  },
  News_FeatureImage_filename_operator: {
    all: { __type: '[String]' },
    contains: { __type: 'String' },
    equals: { __type: 'String' },
    exists: { __type: 'Boolean' },
    in: { __type: '[String]' },
    like: { __type: 'String' },
    not_equals: { __type: 'String' },
    not_in: { __type: '[String]' },
  },
  News_FeatureImage_filesize_operator: {
    equals: { __type: 'Float' },
    exists: { __type: 'Boolean' },
    greater_than: { __type: 'Float' },
    greater_than_equal: { __type: 'Float' },
    less_than: { __type: 'Float' },
    less_than_equal: { __type: 'Float' },
    not_equals: { __type: 'Float' },
  },
  News_FeatureImage_height_operator: {
    equals: { __type: 'Float' },
    exists: { __type: 'Boolean' },
    greater_than: { __type: 'Float' },
    greater_than_equal: { __type: 'Float' },
    less_than: { __type: 'Float' },
    less_than_equal: { __type: 'Float' },
    not_equals: { __type: 'Float' },
  },
  News_FeatureImage_id_operator: {
    all: { __type: '[String]' },
    contains: { __type: 'String' },
    equals: { __type: 'String' },
    exists: { __type: 'Boolean' },
    in: { __type: '[String]' },
    like: { __type: 'String' },
    not_equals: { __type: 'String' },
    not_in: { __type: '[String]' },
  },
  News_FeatureImage_mimeType_operator: {
    all: { __type: '[String]' },
    contains: { __type: 'String' },
    equals: { __type: 'String' },
    exists: { __type: 'Boolean' },
    in: { __type: '[String]' },
    like: { __type: 'String' },
    not_equals: { __type: 'String' },
    not_in: { __type: '[String]' },
  },
  News_FeatureImage_sizes__sixteenByNineMedium__filename_operator: {
    all: { __type: '[String]' },
    contains: { __type: 'String' },
    equals: { __type: 'String' },
    exists: { __type: 'Boolean' },
    in: { __type: '[String]' },
    like: { __type: 'String' },
    not_equals: { __type: 'String' },
    not_in: { __type: '[String]' },
  },
  News_FeatureImage_sizes__sixteenByNineMedium__filesize_operator: {
    equals: { __type: 'Float' },
    exists: { __type: 'Boolean' },
    greater_than: { __type: 'Float' },
    greater_than_equal: { __type: 'Float' },
    less_than: { __type: 'Float' },
    less_than_equal: { __type: 'Float' },
    not_equals: { __type: 'Float' },
  },
  News_FeatureImage_sizes__sixteenByNineMedium__height_operator: {
    equals: { __type: 'Float' },
    exists: { __type: 'Boolean' },
    greater_than: { __type: 'Float' },
    greater_than_equal: { __type: 'Float' },
    less_than: { __type: 'Float' },
    less_than_equal: { __type: 'Float' },
    not_equals: { __type: 'Float' },
  },
  News_FeatureImage_sizes__sixteenByNineMedium__mimeType_operator: {
    all: { __type: '[String]' },
    contains: { __type: 'String' },
    equals: { __type: 'String' },
    exists: { __type: 'Boolean' },
    in: { __type: '[String]' },
    like: { __type: 'String' },
    not_equals: { __type: 'String' },
    not_in: { __type: '[String]' },
  },
  News_FeatureImage_sizes__sixteenByNineMedium__url_operator: {
    all: { __type: '[String]' },
    contains: { __type: 'String' },
    equals: { __type: 'String' },
    exists: { __type: 'Boolean' },
    in: { __type: '[String]' },
    like: { __type: 'String' },
    not_equals: { __type: 'String' },
    not_in: { __type: '[String]' },
  },
  News_FeatureImage_sizes__sixteenByNineMedium__width_operator: {
    equals: { __type: 'Float' },
    exists: { __type: 'Boolean' },
    greater_than: { __type: 'Float' },
    greater_than_equal: { __type: 'Float' },
    less_than: { __type: 'Float' },
    less_than_equal: { __type: 'Float' },
    not_equals: { __type: 'Float' },
  },
  News_FeatureImage_sizes__thumbnail__filename_operator: {
    all: { __type: '[String]' },
    contains: { __type: 'String' },
    equals: { __type: 'String' },
    exists: { __type: 'Boolean' },
    in: { __type: '[String]' },
    like: { __type: 'String' },
    not_equals: { __type: 'String' },
    not_in: { __type: '[String]' },
  },
  News_FeatureImage_sizes__thumbnail__filesize_operator: {
    equals: { __type: 'Float' },
    exists: { __type: 'Boolean' },
    greater_than: { __type: 'Float' },
    greater_than_equal: { __type: 'Float' },
    less_than: { __type: 'Float' },
    less_than_equal: { __type: 'Float' },
    not_equals: { __type: 'Float' },
  },
  News_FeatureImage_sizes__thumbnail__height_operator: {
    equals: { __type: 'Float' },
    exists: { __type: 'Boolean' },
    greater_than: { __type: 'Float' },
    greater_than_equal: { __type: 'Float' },
    less_than: { __type: 'Float' },
    less_than_equal: { __type: 'Float' },
    not_equals: { __type: 'Float' },
  },
  News_FeatureImage_sizes__thumbnail__mimeType_operator: {
    all: { __type: '[String]' },
    contains: { __type: 'String' },
    equals: { __type: 'String' },
    exists: { __type: 'Boolean' },
    in: { __type: '[String]' },
    like: { __type: 'String' },
    not_equals: { __type: 'String' },
    not_in: { __type: '[String]' },
  },
  News_FeatureImage_sizes__thumbnail__url_operator: {
    all: { __type: '[String]' },
    contains: { __type: 'String' },
    equals: { __type: 'String' },
    exists: { __type: 'Boolean' },
    in: { __type: '[String]' },
    like: { __type: 'String' },
    not_equals: { __type: 'String' },
    not_in: { __type: '[String]' },
  },
  News_FeatureImage_sizes__thumbnail__width_operator: {
    equals: { __type: 'Float' },
    exists: { __type: 'Boolean' },
    greater_than: { __type: 'Float' },
    greater_than_equal: { __type: 'Float' },
    less_than: { __type: 'Float' },
    less_than_equal: { __type: 'Float' },
    not_equals: { __type: 'Float' },
  },
  News_FeatureImage_updatedAt_operator: {
    equals: { __type: 'DateTime' },
    exists: { __type: 'Boolean' },
    greater_than: { __type: 'DateTime' },
    greater_than_equal: { __type: 'DateTime' },
    less_than: { __type: 'DateTime' },
    less_than_equal: { __type: 'DateTime' },
    like: { __type: 'DateTime' },
    not_equals: { __type: 'DateTime' },
  },
  News_FeatureImage_url_operator: {
    all: { __type: '[String]' },
    contains: { __type: 'String' },
    equals: { __type: 'String' },
    exists: { __type: 'Boolean' },
    in: { __type: '[String]' },
    like: { __type: 'String' },
    not_equals: { __type: 'String' },
    not_in: { __type: '[String]' },
  },
  News_FeatureImage_where: {
    AND: { __type: '[News_FeatureImage_where_and]' },
    OR: { __type: '[News_FeatureImage_where_or]' },
    alt: { __type: 'News_FeatureImage_alt_operator' },
    createdAt: { __type: 'News_FeatureImage_createdAt_operator' },
    filename: { __type: 'News_FeatureImage_filename_operator' },
    filesize: { __type: 'News_FeatureImage_filesize_operator' },
    height: { __type: 'News_FeatureImage_height_operator' },
    id: { __type: 'News_FeatureImage_id_operator' },
    mimeType: { __type: 'News_FeatureImage_mimeType_operator' },
    sizes__sixteenByNineMedium__filename: {
      __type: 'News_FeatureImage_sizes__sixteenByNineMedium__filename_operator',
    },
    sizes__sixteenByNineMedium__filesize: {
      __type: 'News_FeatureImage_sizes__sixteenByNineMedium__filesize_operator',
    },
    sizes__sixteenByNineMedium__height: {
      __type: 'News_FeatureImage_sizes__sixteenByNineMedium__height_operator',
    },
    sizes__sixteenByNineMedium__mimeType: {
      __type: 'News_FeatureImage_sizes__sixteenByNineMedium__mimeType_operator',
    },
    sizes__sixteenByNineMedium__url: {
      __type: 'News_FeatureImage_sizes__sixteenByNineMedium__url_operator',
    },
    sizes__sixteenByNineMedium__width: {
      __type: 'News_FeatureImage_sizes__sixteenByNineMedium__width_operator',
    },
    sizes__thumbnail__filename: {
      __type: 'News_FeatureImage_sizes__thumbnail__filename_operator',
    },
    sizes__thumbnail__filesize: {
      __type: 'News_FeatureImage_sizes__thumbnail__filesize_operator',
    },
    sizes__thumbnail__height: {
      __type: 'News_FeatureImage_sizes__thumbnail__height_operator',
    },
    sizes__thumbnail__mimeType: {
      __type: 'News_FeatureImage_sizes__thumbnail__mimeType_operator',
    },
    sizes__thumbnail__url: {
      __type: 'News_FeatureImage_sizes__thumbnail__url_operator',
    },
    sizes__thumbnail__width: {
      __type: 'News_FeatureImage_sizes__thumbnail__width_operator',
    },
    updatedAt: { __type: 'News_FeatureImage_updatedAt_operator' },
    url: { __type: 'News_FeatureImage_url_operator' },
    width: { __type: 'News_FeatureImage_width_operator' },
  },
  News_FeatureImage_where_and: {
    alt: { __type: 'News_FeatureImage_alt_operator' },
    createdAt: { __type: 'News_FeatureImage_createdAt_operator' },
    filename: { __type: 'News_FeatureImage_filename_operator' },
    filesize: { __type: 'News_FeatureImage_filesize_operator' },
    height: { __type: 'News_FeatureImage_height_operator' },
    id: { __type: 'News_FeatureImage_id_operator' },
    mimeType: { __type: 'News_FeatureImage_mimeType_operator' },
    sizes__sixteenByNineMedium__filename: {
      __type: 'News_FeatureImage_sizes__sixteenByNineMedium__filename_operator',
    },
    sizes__sixteenByNineMedium__filesize: {
      __type: 'News_FeatureImage_sizes__sixteenByNineMedium__filesize_operator',
    },
    sizes__sixteenByNineMedium__height: {
      __type: 'News_FeatureImage_sizes__sixteenByNineMedium__height_operator',
    },
    sizes__sixteenByNineMedium__mimeType: {
      __type: 'News_FeatureImage_sizes__sixteenByNineMedium__mimeType_operator',
    },
    sizes__sixteenByNineMedium__url: {
      __type: 'News_FeatureImage_sizes__sixteenByNineMedium__url_operator',
    },
    sizes__sixteenByNineMedium__width: {
      __type: 'News_FeatureImage_sizes__sixteenByNineMedium__width_operator',
    },
    sizes__thumbnail__filename: {
      __type: 'News_FeatureImage_sizes__thumbnail__filename_operator',
    },
    sizes__thumbnail__filesize: {
      __type: 'News_FeatureImage_sizes__thumbnail__filesize_operator',
    },
    sizes__thumbnail__height: {
      __type: 'News_FeatureImage_sizes__thumbnail__height_operator',
    },
    sizes__thumbnail__mimeType: {
      __type: 'News_FeatureImage_sizes__thumbnail__mimeType_operator',
    },
    sizes__thumbnail__url: {
      __type: 'News_FeatureImage_sizes__thumbnail__url_operator',
    },
    sizes__thumbnail__width: {
      __type: 'News_FeatureImage_sizes__thumbnail__width_operator',
    },
    updatedAt: { __type: 'News_FeatureImage_updatedAt_operator' },
    url: { __type: 'News_FeatureImage_url_operator' },
    width: { __type: 'News_FeatureImage_width_operator' },
  },
  News_FeatureImage_where_or: {
    alt: { __type: 'News_FeatureImage_alt_operator' },
    createdAt: { __type: 'News_FeatureImage_createdAt_operator' },
    filename: { __type: 'News_FeatureImage_filename_operator' },
    filesize: { __type: 'News_FeatureImage_filesize_operator' },
    height: { __type: 'News_FeatureImage_height_operator' },
    id: { __type: 'News_FeatureImage_id_operator' },
    mimeType: { __type: 'News_FeatureImage_mimeType_operator' },
    sizes__sixteenByNineMedium__filename: {
      __type: 'News_FeatureImage_sizes__sixteenByNineMedium__filename_operator',
    },
    sizes__sixteenByNineMedium__filesize: {
      __type: 'News_FeatureImage_sizes__sixteenByNineMedium__filesize_operator',
    },
    sizes__sixteenByNineMedium__height: {
      __type: 'News_FeatureImage_sizes__sixteenByNineMedium__height_operator',
    },
    sizes__sixteenByNineMedium__mimeType: {
      __type: 'News_FeatureImage_sizes__sixteenByNineMedium__mimeType_operator',
    },
    sizes__sixteenByNineMedium__url: {
      __type: 'News_FeatureImage_sizes__sixteenByNineMedium__url_operator',
    },
    sizes__sixteenByNineMedium__width: {
      __type: 'News_FeatureImage_sizes__sixteenByNineMedium__width_operator',
    },
    sizes__thumbnail__filename: {
      __type: 'News_FeatureImage_sizes__thumbnail__filename_operator',
    },
    sizes__thumbnail__filesize: {
      __type: 'News_FeatureImage_sizes__thumbnail__filesize_operator',
    },
    sizes__thumbnail__height: {
      __type: 'News_FeatureImage_sizes__thumbnail__height_operator',
    },
    sizes__thumbnail__mimeType: {
      __type: 'News_FeatureImage_sizes__thumbnail__mimeType_operator',
    },
    sizes__thumbnail__url: {
      __type: 'News_FeatureImage_sizes__thumbnail__url_operator',
    },
    sizes__thumbnail__width: {
      __type: 'News_FeatureImage_sizes__thumbnail__width_operator',
    },
    updatedAt: { __type: 'News_FeatureImage_updatedAt_operator' },
    url: { __type: 'News_FeatureImage_url_operator' },
    width: { __type: 'News_FeatureImage_width_operator' },
  },
  News_FeatureImage_width_operator: {
    equals: { __type: 'Float' },
    exists: { __type: 'Boolean' },
    greater_than: { __type: 'Float' },
    greater_than_equal: { __type: 'Float' },
    less_than: { __type: 'Float' },
    less_than_equal: { __type: 'Float' },
    not_equals: { __type: 'Float' },
  },
  News_author_operator: {
    all: { __type: '[JSON]' },
    equals: { __type: 'JSON' },
    exists: { __type: 'Boolean' },
    in: { __type: '[JSON]' },
    not_equals: { __type: 'JSON' },
    not_in: { __type: '[JSON]' },
  },
  News_content_operator: {
    contains: { __type: 'JSON' },
    equals: { __type: 'JSON' },
    exists: { __type: 'Boolean' },
    like: { __type: 'JSON' },
    not_equals: { __type: 'JSON' },
  },
  News_createdAt_operator: {
    equals: { __type: 'DateTime' },
    exists: { __type: 'Boolean' },
    greater_than: { __type: 'DateTime' },
    greater_than_equal: { __type: 'DateTime' },
    less_than: { __type: 'DateTime' },
    less_than_equal: { __type: 'DateTime' },
    like: { __type: 'DateTime' },
    not_equals: { __type: 'DateTime' },
  },
  News_featureImage_operator: {
    equals: { __type: 'String' },
    exists: { __type: 'Boolean' },
    not_equals: { __type: 'String' },
  },
  News_id_operator: {
    all: { __type: '[String]' },
    contains: { __type: 'String' },
    equals: { __type: 'String' },
    exists: { __type: 'Boolean' },
    in: { __type: '[String]' },
    like: { __type: 'String' },
    not_equals: { __type: 'String' },
    not_in: { __type: '[String]' },
  },
  News_publishedDate_operator: {
    equals: { __type: 'DateTime' },
    exists: { __type: 'Boolean' },
    greater_than: { __type: 'DateTime' },
    greater_than_equal: { __type: 'DateTime' },
    less_than: { __type: 'DateTime' },
    less_than_equal: { __type: 'DateTime' },
    like: { __type: 'DateTime' },
    not_equals: { __type: 'DateTime' },
  },
  News_readTime_operator: {
    equals: { __type: 'Float' },
    exists: { __type: 'Boolean' },
    greater_than: { __type: 'Float' },
    greater_than_equal: { __type: 'Float' },
    less_than: { __type: 'Float' },
    less_than_equal: { __type: 'Float' },
    not_equals: { __type: 'Float' },
  },
  News_slug_operator: {
    all: { __type: '[String]' },
    contains: { __type: 'String' },
    equals: { __type: 'String' },
    exists: { __type: 'Boolean' },
    in: { __type: '[String]' },
    like: { __type: 'String' },
    not_equals: { __type: 'String' },
    not_in: { __type: '[String]' },
  },
  News_status_operator: {
    all: { __type: '[News_status_Input]' },
    equals: { __type: 'News_status_Input' },
    exists: { __type: 'Boolean' },
    in: { __type: '[News_status_Input]' },
    not_equals: { __type: 'News_status_Input' },
    not_in: { __type: '[News_status_Input]' },
  },
  News_tags_operator: {
    all: { __type: '[JSON]' },
    equals: { __type: 'JSON' },
    exists: { __type: 'Boolean' },
    in: { __type: '[JSON]' },
    not_equals: { __type: 'JSON' },
    not_in: { __type: '[JSON]' },
  },
  News_title_operator: {
    all: { __type: '[String]' },
    contains: { __type: 'String' },
    equals: { __type: 'String' },
    in: { __type: '[String]' },
    like: { __type: 'String' },
    not_equals: { __type: 'String' },
    not_in: { __type: '[String]' },
  },
  News_updatedAt_operator: {
    equals: { __type: 'DateTime' },
    exists: { __type: 'Boolean' },
    greater_than: { __type: 'DateTime' },
    greater_than_equal: { __type: 'DateTime' },
    less_than: { __type: 'DateTime' },
    less_than_equal: { __type: 'DateTime' },
    like: { __type: 'DateTime' },
    not_equals: { __type: 'DateTime' },
  },
  News_where: {
    AND: { __type: '[News_where_and]' },
    OR: { __type: '[News_where_or]' },
    author: { __type: 'News_author_operator' },
    content: { __type: 'News_content_operator' },
    createdAt: { __type: 'News_createdAt_operator' },
    featureImage: { __type: 'News_featureImage_operator' },
    id: { __type: 'News_id_operator' },
    publishedDate: { __type: 'News_publishedDate_operator' },
    readTime: { __type: 'News_readTime_operator' },
    slug: { __type: 'News_slug_operator' },
    status: { __type: 'News_status_operator' },
    tags: { __type: 'News_tags_operator' },
    title: { __type: 'News_title_operator' },
    updatedAt: { __type: 'News_updatedAt_operator' },
  },
  News_where_and: {
    author: { __type: 'News_author_operator' },
    content: { __type: 'News_content_operator' },
    createdAt: { __type: 'News_createdAt_operator' },
    featureImage: { __type: 'News_featureImage_operator' },
    id: { __type: 'News_id_operator' },
    publishedDate: { __type: 'News_publishedDate_operator' },
    readTime: { __type: 'News_readTime_operator' },
    slug: { __type: 'News_slug_operator' },
    status: { __type: 'News_status_operator' },
    tags: { __type: 'News_tags_operator' },
    title: { __type: 'News_title_operator' },
    updatedAt: { __type: 'News_updatedAt_operator' },
  },
  News_where_or: {
    author: { __type: 'News_author_operator' },
    content: { __type: 'News_content_operator' },
    createdAt: { __type: 'News_createdAt_operator' },
    featureImage: { __type: 'News_featureImage_operator' },
    id: { __type: 'News_id_operator' },
    publishedDate: { __type: 'News_publishedDate_operator' },
    readTime: { __type: 'News_readTime_operator' },
    slug: { __type: 'News_slug_operator' },
    status: { __type: 'News_status_operator' },
    tags: { __type: 'News_tags_operator' },
    title: { __type: 'News_title_operator' },
    updatedAt: { __type: 'News_updatedAt_operator' },
  },
  PayloadPreference: {
    __typename: { __type: 'String!' },
    createdAt: { __type: 'DateTime' },
    id: { __type: 'String' },
    key: { __type: 'String' },
    updatedAt: { __type: 'DateTime' },
    user: { __type: 'PayloadPreference_User_Relationship!' },
    value: { __type: 'JSON' },
  },
  PayloadPreferenceUpdate_UserRelationshipInput: {
    relationTo: {
      __type: 'PayloadPreferenceUpdate_UserRelationshipInputRelationTo',
    },
    value: { __type: 'JSON' },
  },
  PayloadPreference_User: {
    __typename: { __type: 'String!' },
    $on: { __type: '$PayloadPreference_User!' },
  },
  PayloadPreference_UserRelationshipInput: {
    relationTo: { __type: 'PayloadPreference_UserRelationshipInputRelationTo' },
    value: { __type: 'JSON' },
  },
  PayloadPreference_User_Relationship: {
    __typename: { __type: 'String!' },
    relationTo: { __type: 'PayloadPreference_User_RelationTo' },
    value: { __type: 'PayloadPreference_User' },
  },
  PayloadPreference_createdAt_operator: {
    equals: { __type: 'DateTime' },
    exists: { __type: 'Boolean' },
    greater_than: { __type: 'DateTime' },
    greater_than_equal: { __type: 'DateTime' },
    less_than: { __type: 'DateTime' },
    less_than_equal: { __type: 'DateTime' },
    like: { __type: 'DateTime' },
    not_equals: { __type: 'DateTime' },
  },
  PayloadPreference_id_operator: {
    all: { __type: '[String]' },
    contains: { __type: 'String' },
    equals: { __type: 'String' },
    exists: { __type: 'Boolean' },
    in: { __type: '[String]' },
    like: { __type: 'String' },
    not_equals: { __type: 'String' },
    not_in: { __type: '[String]' },
  },
  PayloadPreference_key_operator: {
    all: { __type: '[String]' },
    contains: { __type: 'String' },
    equals: { __type: 'String' },
    exists: { __type: 'Boolean' },
    in: { __type: '[String]' },
    like: { __type: 'String' },
    not_equals: { __type: 'String' },
    not_in: { __type: '[String]' },
  },
  PayloadPreference_updatedAt_operator: {
    equals: { __type: 'DateTime' },
    exists: { __type: 'Boolean' },
    greater_than: { __type: 'DateTime' },
    greater_than_equal: { __type: 'DateTime' },
    less_than: { __type: 'DateTime' },
    less_than_equal: { __type: 'DateTime' },
    like: { __type: 'DateTime' },
    not_equals: { __type: 'DateTime' },
  },
  PayloadPreference_user_Relation: {
    relationTo: { __type: 'PayloadPreference_user_Relation_RelationTo' },
    value: { __type: 'JSON' },
  },
  PayloadPreference_value_operator: {
    contains: { __type: 'JSON' },
    equals: { __type: 'JSON' },
    exists: { __type: 'Boolean' },
    intersects: { __type: 'JSON' },
    like: { __type: 'JSON' },
    not_equals: { __type: 'JSON' },
    within: { __type: 'JSON' },
  },
  PayloadPreference_where: {
    AND: { __type: '[PayloadPreference_where_and]' },
    OR: { __type: '[PayloadPreference_where_or]' },
    createdAt: { __type: 'PayloadPreference_createdAt_operator' },
    id: { __type: 'PayloadPreference_id_operator' },
    key: { __type: 'PayloadPreference_key_operator' },
    updatedAt: { __type: 'PayloadPreference_updatedAt_operator' },
    user: { __type: 'PayloadPreference_user_Relation' },
    value: { __type: 'PayloadPreference_value_operator' },
  },
  PayloadPreference_where_and: {
    createdAt: { __type: 'PayloadPreference_createdAt_operator' },
    id: { __type: 'PayloadPreference_id_operator' },
    key: { __type: 'PayloadPreference_key_operator' },
    updatedAt: { __type: 'PayloadPreference_updatedAt_operator' },
    user: { __type: 'PayloadPreference_user_Relation' },
    value: { __type: 'PayloadPreference_value_operator' },
  },
  PayloadPreference_where_or: {
    createdAt: { __type: 'PayloadPreference_createdAt_operator' },
    id: { __type: 'PayloadPreference_id_operator' },
    key: { __type: 'PayloadPreference_key_operator' },
    updatedAt: { __type: 'PayloadPreference_updatedAt_operator' },
    user: { __type: 'PayloadPreference_user_Relation' },
    value: { __type: 'PayloadPreference_value_operator' },
  },
  PayloadPreferences: {
    __typename: { __type: 'String!' },
    docs: { __type: '[PayloadPreference]' },
    hasNextPage: { __type: 'Boolean' },
    hasPrevPage: { __type: 'Boolean' },
    limit: { __type: 'Int' },
    nextPage: { __type: 'Int' },
    offset: { __type: 'Int' },
    page: { __type: 'Int' },
    pagingCounter: { __type: 'Int' },
    prevPage: { __type: 'Int' },
    totalDocs: { __type: 'Int' },
    totalPages: { __type: 'Int' },
  },
  PayloadPreferencesCreateAccess: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
    where: { __type: 'JSONObject' },
  },
  PayloadPreferencesCreateDocAccess: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
    where: { __type: 'JSONObject' },
  },
  PayloadPreferencesDeleteAccess: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
    where: { __type: 'JSONObject' },
  },
  PayloadPreferencesDeleteDocAccess: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
    where: { __type: 'JSONObject' },
  },
  PayloadPreferencesDocAccessFields: {
    __typename: { __type: 'String!' },
    createdAt: { __type: 'PayloadPreferencesDocAccessFields_createdAt' },
    key: { __type: 'PayloadPreferencesDocAccessFields_key' },
    updatedAt: { __type: 'PayloadPreferencesDocAccessFields_updatedAt' },
    user: { __type: 'PayloadPreferencesDocAccessFields_user' },
    value: { __type: 'PayloadPreferencesDocAccessFields_value' },
  },
  PayloadPreferencesDocAccessFields_createdAt: {
    __typename: { __type: 'String!' },
    create: { __type: 'PayloadPreferencesDocAccessFields_createdAt_Create' },
    delete: { __type: 'PayloadPreferencesDocAccessFields_createdAt_Delete' },
    read: { __type: 'PayloadPreferencesDocAccessFields_createdAt_Read' },
    update: { __type: 'PayloadPreferencesDocAccessFields_createdAt_Update' },
  },
  PayloadPreferencesDocAccessFields_createdAt_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  PayloadPreferencesDocAccessFields_createdAt_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  PayloadPreferencesDocAccessFields_createdAt_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  PayloadPreferencesDocAccessFields_createdAt_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  PayloadPreferencesDocAccessFields_key: {
    __typename: { __type: 'String!' },
    create: { __type: 'PayloadPreferencesDocAccessFields_key_Create' },
    delete: { __type: 'PayloadPreferencesDocAccessFields_key_Delete' },
    read: { __type: 'PayloadPreferencesDocAccessFields_key_Read' },
    update: { __type: 'PayloadPreferencesDocAccessFields_key_Update' },
  },
  PayloadPreferencesDocAccessFields_key_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  PayloadPreferencesDocAccessFields_key_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  PayloadPreferencesDocAccessFields_key_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  PayloadPreferencesDocAccessFields_key_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  PayloadPreferencesDocAccessFields_updatedAt: {
    __typename: { __type: 'String!' },
    create: { __type: 'PayloadPreferencesDocAccessFields_updatedAt_Create' },
    delete: { __type: 'PayloadPreferencesDocAccessFields_updatedAt_Delete' },
    read: { __type: 'PayloadPreferencesDocAccessFields_updatedAt_Read' },
    update: { __type: 'PayloadPreferencesDocAccessFields_updatedAt_Update' },
  },
  PayloadPreferencesDocAccessFields_updatedAt_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  PayloadPreferencesDocAccessFields_updatedAt_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  PayloadPreferencesDocAccessFields_updatedAt_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  PayloadPreferencesDocAccessFields_updatedAt_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  PayloadPreferencesDocAccessFields_user: {
    __typename: { __type: 'String!' },
    create: { __type: 'PayloadPreferencesDocAccessFields_user_Create' },
    delete: { __type: 'PayloadPreferencesDocAccessFields_user_Delete' },
    read: { __type: 'PayloadPreferencesDocAccessFields_user_Read' },
    update: { __type: 'PayloadPreferencesDocAccessFields_user_Update' },
  },
  PayloadPreferencesDocAccessFields_user_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  PayloadPreferencesDocAccessFields_user_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  PayloadPreferencesDocAccessFields_user_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  PayloadPreferencesDocAccessFields_user_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  PayloadPreferencesDocAccessFields_value: {
    __typename: { __type: 'String!' },
    create: { __type: 'PayloadPreferencesDocAccessFields_value_Create' },
    delete: { __type: 'PayloadPreferencesDocAccessFields_value_Delete' },
    read: { __type: 'PayloadPreferencesDocAccessFields_value_Read' },
    update: { __type: 'PayloadPreferencesDocAccessFields_value_Update' },
  },
  PayloadPreferencesDocAccessFields_value_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  PayloadPreferencesDocAccessFields_value_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  PayloadPreferencesDocAccessFields_value_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  PayloadPreferencesDocAccessFields_value_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  PayloadPreferencesFields: {
    __typename: { __type: 'String!' },
    createdAt: { __type: 'PayloadPreferencesFields_createdAt' },
    key: { __type: 'PayloadPreferencesFields_key' },
    updatedAt: { __type: 'PayloadPreferencesFields_updatedAt' },
    user: { __type: 'PayloadPreferencesFields_user' },
    value: { __type: 'PayloadPreferencesFields_value' },
  },
  PayloadPreferencesFields_createdAt: {
    __typename: { __type: 'String!' },
    create: { __type: 'PayloadPreferencesFields_createdAt_Create' },
    delete: { __type: 'PayloadPreferencesFields_createdAt_Delete' },
    read: { __type: 'PayloadPreferencesFields_createdAt_Read' },
    update: { __type: 'PayloadPreferencesFields_createdAt_Update' },
  },
  PayloadPreferencesFields_createdAt_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  PayloadPreferencesFields_createdAt_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  PayloadPreferencesFields_createdAt_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  PayloadPreferencesFields_createdAt_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  PayloadPreferencesFields_key: {
    __typename: { __type: 'String!' },
    create: { __type: 'PayloadPreferencesFields_key_Create' },
    delete: { __type: 'PayloadPreferencesFields_key_Delete' },
    read: { __type: 'PayloadPreferencesFields_key_Read' },
    update: { __type: 'PayloadPreferencesFields_key_Update' },
  },
  PayloadPreferencesFields_key_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  PayloadPreferencesFields_key_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  PayloadPreferencesFields_key_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  PayloadPreferencesFields_key_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  PayloadPreferencesFields_updatedAt: {
    __typename: { __type: 'String!' },
    create: { __type: 'PayloadPreferencesFields_updatedAt_Create' },
    delete: { __type: 'PayloadPreferencesFields_updatedAt_Delete' },
    read: { __type: 'PayloadPreferencesFields_updatedAt_Read' },
    update: { __type: 'PayloadPreferencesFields_updatedAt_Update' },
  },
  PayloadPreferencesFields_updatedAt_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  PayloadPreferencesFields_updatedAt_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  PayloadPreferencesFields_updatedAt_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  PayloadPreferencesFields_updatedAt_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  PayloadPreferencesFields_user: {
    __typename: { __type: 'String!' },
    create: { __type: 'PayloadPreferencesFields_user_Create' },
    delete: { __type: 'PayloadPreferencesFields_user_Delete' },
    read: { __type: 'PayloadPreferencesFields_user_Read' },
    update: { __type: 'PayloadPreferencesFields_user_Update' },
  },
  PayloadPreferencesFields_user_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  PayloadPreferencesFields_user_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  PayloadPreferencesFields_user_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  PayloadPreferencesFields_user_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  PayloadPreferencesFields_value: {
    __typename: { __type: 'String!' },
    create: { __type: 'PayloadPreferencesFields_value_Create' },
    delete: { __type: 'PayloadPreferencesFields_value_Delete' },
    read: { __type: 'PayloadPreferencesFields_value_Read' },
    update: { __type: 'PayloadPreferencesFields_value_Update' },
  },
  PayloadPreferencesFields_value_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  PayloadPreferencesFields_value_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  PayloadPreferencesFields_value_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  PayloadPreferencesFields_value_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  PayloadPreferencesReadAccess: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
    where: { __type: 'JSONObject' },
  },
  PayloadPreferencesReadDocAccess: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
    where: { __type: 'JSONObject' },
  },
  PayloadPreferencesUpdateAccess: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
    where: { __type: 'JSONObject' },
  },
  PayloadPreferencesUpdateDocAccess: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
    where: { __type: 'JSONObject' },
  },
  User: {
    __typename: { __type: 'String!' },
    _verificationToken: { __type: 'String' },
    _verified: { __type: 'Boolean' },
    avatarImage: {
      __type: 'Media',
      __args: { where: 'User_AvatarImage_where' },
    },
    createdAt: { __type: 'DateTime' },
    email: { __type: 'EmailAddress!' },
    hash: { __type: 'String' },
    id: { __type: 'String' },
    lockUntil: { __type: 'DateTime' },
    loginAttempts: { __type: 'Float' },
    name: { __type: 'String' },
    password: { __type: 'String!' },
    resetPasswordExpiration: { __type: 'DateTime' },
    resetPasswordToken: { __type: 'String' },
    role: { __type: 'User_role!' },
    salt: { __type: 'String' },
    updatedAt: { __type: 'DateTime' },
  },
  User_AvatarImage_alt_operator: {
    all: { __type: '[String]' },
    contains: { __type: 'String' },
    equals: { __type: 'String' },
    exists: { __type: 'Boolean' },
    in: { __type: '[String]' },
    like: { __type: 'String' },
    not_equals: { __type: 'String' },
    not_in: { __type: '[String]' },
  },
  User_AvatarImage_createdAt_operator: {
    equals: { __type: 'DateTime' },
    exists: { __type: 'Boolean' },
    greater_than: { __type: 'DateTime' },
    greater_than_equal: { __type: 'DateTime' },
    less_than: { __type: 'DateTime' },
    less_than_equal: { __type: 'DateTime' },
    like: { __type: 'DateTime' },
    not_equals: { __type: 'DateTime' },
  },
  User_AvatarImage_filename_operator: {
    all: { __type: '[String]' },
    contains: { __type: 'String' },
    equals: { __type: 'String' },
    exists: { __type: 'Boolean' },
    in: { __type: '[String]' },
    like: { __type: 'String' },
    not_equals: { __type: 'String' },
    not_in: { __type: '[String]' },
  },
  User_AvatarImage_filesize_operator: {
    equals: { __type: 'Float' },
    exists: { __type: 'Boolean' },
    greater_than: { __type: 'Float' },
    greater_than_equal: { __type: 'Float' },
    less_than: { __type: 'Float' },
    less_than_equal: { __type: 'Float' },
    not_equals: { __type: 'Float' },
  },
  User_AvatarImage_height_operator: {
    equals: { __type: 'Float' },
    exists: { __type: 'Boolean' },
    greater_than: { __type: 'Float' },
    greater_than_equal: { __type: 'Float' },
    less_than: { __type: 'Float' },
    less_than_equal: { __type: 'Float' },
    not_equals: { __type: 'Float' },
  },
  User_AvatarImage_id_operator: {
    all: { __type: '[String]' },
    contains: { __type: 'String' },
    equals: { __type: 'String' },
    exists: { __type: 'Boolean' },
    in: { __type: '[String]' },
    like: { __type: 'String' },
    not_equals: { __type: 'String' },
    not_in: { __type: '[String]' },
  },
  User_AvatarImage_mimeType_operator: {
    all: { __type: '[String]' },
    contains: { __type: 'String' },
    equals: { __type: 'String' },
    exists: { __type: 'Boolean' },
    in: { __type: '[String]' },
    like: { __type: 'String' },
    not_equals: { __type: 'String' },
    not_in: { __type: '[String]' },
  },
  User_AvatarImage_sizes__sixteenByNineMedium__filename_operator: {
    all: { __type: '[String]' },
    contains: { __type: 'String' },
    equals: { __type: 'String' },
    exists: { __type: 'Boolean' },
    in: { __type: '[String]' },
    like: { __type: 'String' },
    not_equals: { __type: 'String' },
    not_in: { __type: '[String]' },
  },
  User_AvatarImage_sizes__sixteenByNineMedium__filesize_operator: {
    equals: { __type: 'Float' },
    exists: { __type: 'Boolean' },
    greater_than: { __type: 'Float' },
    greater_than_equal: { __type: 'Float' },
    less_than: { __type: 'Float' },
    less_than_equal: { __type: 'Float' },
    not_equals: { __type: 'Float' },
  },
  User_AvatarImage_sizes__sixteenByNineMedium__height_operator: {
    equals: { __type: 'Float' },
    exists: { __type: 'Boolean' },
    greater_than: { __type: 'Float' },
    greater_than_equal: { __type: 'Float' },
    less_than: { __type: 'Float' },
    less_than_equal: { __type: 'Float' },
    not_equals: { __type: 'Float' },
  },
  User_AvatarImage_sizes__sixteenByNineMedium__mimeType_operator: {
    all: { __type: '[String]' },
    contains: { __type: 'String' },
    equals: { __type: 'String' },
    exists: { __type: 'Boolean' },
    in: { __type: '[String]' },
    like: { __type: 'String' },
    not_equals: { __type: 'String' },
    not_in: { __type: '[String]' },
  },
  User_AvatarImage_sizes__sixteenByNineMedium__url_operator: {
    all: { __type: '[String]' },
    contains: { __type: 'String' },
    equals: { __type: 'String' },
    exists: { __type: 'Boolean' },
    in: { __type: '[String]' },
    like: { __type: 'String' },
    not_equals: { __type: 'String' },
    not_in: { __type: '[String]' },
  },
  User_AvatarImage_sizes__sixteenByNineMedium__width_operator: {
    equals: { __type: 'Float' },
    exists: { __type: 'Boolean' },
    greater_than: { __type: 'Float' },
    greater_than_equal: { __type: 'Float' },
    less_than: { __type: 'Float' },
    less_than_equal: { __type: 'Float' },
    not_equals: { __type: 'Float' },
  },
  User_AvatarImage_sizes__thumbnail__filename_operator: {
    all: { __type: '[String]' },
    contains: { __type: 'String' },
    equals: { __type: 'String' },
    exists: { __type: 'Boolean' },
    in: { __type: '[String]' },
    like: { __type: 'String' },
    not_equals: { __type: 'String' },
    not_in: { __type: '[String]' },
  },
  User_AvatarImage_sizes__thumbnail__filesize_operator: {
    equals: { __type: 'Float' },
    exists: { __type: 'Boolean' },
    greater_than: { __type: 'Float' },
    greater_than_equal: { __type: 'Float' },
    less_than: { __type: 'Float' },
    less_than_equal: { __type: 'Float' },
    not_equals: { __type: 'Float' },
  },
  User_AvatarImage_sizes__thumbnail__height_operator: {
    equals: { __type: 'Float' },
    exists: { __type: 'Boolean' },
    greater_than: { __type: 'Float' },
    greater_than_equal: { __type: 'Float' },
    less_than: { __type: 'Float' },
    less_than_equal: { __type: 'Float' },
    not_equals: { __type: 'Float' },
  },
  User_AvatarImage_sizes__thumbnail__mimeType_operator: {
    all: { __type: '[String]' },
    contains: { __type: 'String' },
    equals: { __type: 'String' },
    exists: { __type: 'Boolean' },
    in: { __type: '[String]' },
    like: { __type: 'String' },
    not_equals: { __type: 'String' },
    not_in: { __type: '[String]' },
  },
  User_AvatarImage_sizes__thumbnail__url_operator: {
    all: { __type: '[String]' },
    contains: { __type: 'String' },
    equals: { __type: 'String' },
    exists: { __type: 'Boolean' },
    in: { __type: '[String]' },
    like: { __type: 'String' },
    not_equals: { __type: 'String' },
    not_in: { __type: '[String]' },
  },
  User_AvatarImage_sizes__thumbnail__width_operator: {
    equals: { __type: 'Float' },
    exists: { __type: 'Boolean' },
    greater_than: { __type: 'Float' },
    greater_than_equal: { __type: 'Float' },
    less_than: { __type: 'Float' },
    less_than_equal: { __type: 'Float' },
    not_equals: { __type: 'Float' },
  },
  User_AvatarImage_updatedAt_operator: {
    equals: { __type: 'DateTime' },
    exists: { __type: 'Boolean' },
    greater_than: { __type: 'DateTime' },
    greater_than_equal: { __type: 'DateTime' },
    less_than: { __type: 'DateTime' },
    less_than_equal: { __type: 'DateTime' },
    like: { __type: 'DateTime' },
    not_equals: { __type: 'DateTime' },
  },
  User_AvatarImage_url_operator: {
    all: { __type: '[String]' },
    contains: { __type: 'String' },
    equals: { __type: 'String' },
    exists: { __type: 'Boolean' },
    in: { __type: '[String]' },
    like: { __type: 'String' },
    not_equals: { __type: 'String' },
    not_in: { __type: '[String]' },
  },
  User_AvatarImage_where: {
    AND: { __type: '[User_AvatarImage_where_and]' },
    OR: { __type: '[User_AvatarImage_where_or]' },
    alt: { __type: 'User_AvatarImage_alt_operator' },
    createdAt: { __type: 'User_AvatarImage_createdAt_operator' },
    filename: { __type: 'User_AvatarImage_filename_operator' },
    filesize: { __type: 'User_AvatarImage_filesize_operator' },
    height: { __type: 'User_AvatarImage_height_operator' },
    id: { __type: 'User_AvatarImage_id_operator' },
    mimeType: { __type: 'User_AvatarImage_mimeType_operator' },
    sizes__sixteenByNineMedium__filename: {
      __type: 'User_AvatarImage_sizes__sixteenByNineMedium__filename_operator',
    },
    sizes__sixteenByNineMedium__filesize: {
      __type: 'User_AvatarImage_sizes__sixteenByNineMedium__filesize_operator',
    },
    sizes__sixteenByNineMedium__height: {
      __type: 'User_AvatarImage_sizes__sixteenByNineMedium__height_operator',
    },
    sizes__sixteenByNineMedium__mimeType: {
      __type: 'User_AvatarImage_sizes__sixteenByNineMedium__mimeType_operator',
    },
    sizes__sixteenByNineMedium__url: {
      __type: 'User_AvatarImage_sizes__sixteenByNineMedium__url_operator',
    },
    sizes__sixteenByNineMedium__width: {
      __type: 'User_AvatarImage_sizes__sixteenByNineMedium__width_operator',
    },
    sizes__thumbnail__filename: {
      __type: 'User_AvatarImage_sizes__thumbnail__filename_operator',
    },
    sizes__thumbnail__filesize: {
      __type: 'User_AvatarImage_sizes__thumbnail__filesize_operator',
    },
    sizes__thumbnail__height: {
      __type: 'User_AvatarImage_sizes__thumbnail__height_operator',
    },
    sizes__thumbnail__mimeType: {
      __type: 'User_AvatarImage_sizes__thumbnail__mimeType_operator',
    },
    sizes__thumbnail__url: {
      __type: 'User_AvatarImage_sizes__thumbnail__url_operator',
    },
    sizes__thumbnail__width: {
      __type: 'User_AvatarImage_sizes__thumbnail__width_operator',
    },
    updatedAt: { __type: 'User_AvatarImage_updatedAt_operator' },
    url: { __type: 'User_AvatarImage_url_operator' },
    width: { __type: 'User_AvatarImage_width_operator' },
  },
  User_AvatarImage_where_and: {
    alt: { __type: 'User_AvatarImage_alt_operator' },
    createdAt: { __type: 'User_AvatarImage_createdAt_operator' },
    filename: { __type: 'User_AvatarImage_filename_operator' },
    filesize: { __type: 'User_AvatarImage_filesize_operator' },
    height: { __type: 'User_AvatarImage_height_operator' },
    id: { __type: 'User_AvatarImage_id_operator' },
    mimeType: { __type: 'User_AvatarImage_mimeType_operator' },
    sizes__sixteenByNineMedium__filename: {
      __type: 'User_AvatarImage_sizes__sixteenByNineMedium__filename_operator',
    },
    sizes__sixteenByNineMedium__filesize: {
      __type: 'User_AvatarImage_sizes__sixteenByNineMedium__filesize_operator',
    },
    sizes__sixteenByNineMedium__height: {
      __type: 'User_AvatarImage_sizes__sixteenByNineMedium__height_operator',
    },
    sizes__sixteenByNineMedium__mimeType: {
      __type: 'User_AvatarImage_sizes__sixteenByNineMedium__mimeType_operator',
    },
    sizes__sixteenByNineMedium__url: {
      __type: 'User_AvatarImage_sizes__sixteenByNineMedium__url_operator',
    },
    sizes__sixteenByNineMedium__width: {
      __type: 'User_AvatarImage_sizes__sixteenByNineMedium__width_operator',
    },
    sizes__thumbnail__filename: {
      __type: 'User_AvatarImage_sizes__thumbnail__filename_operator',
    },
    sizes__thumbnail__filesize: {
      __type: 'User_AvatarImage_sizes__thumbnail__filesize_operator',
    },
    sizes__thumbnail__height: {
      __type: 'User_AvatarImage_sizes__thumbnail__height_operator',
    },
    sizes__thumbnail__mimeType: {
      __type: 'User_AvatarImage_sizes__thumbnail__mimeType_operator',
    },
    sizes__thumbnail__url: {
      __type: 'User_AvatarImage_sizes__thumbnail__url_operator',
    },
    sizes__thumbnail__width: {
      __type: 'User_AvatarImage_sizes__thumbnail__width_operator',
    },
    updatedAt: { __type: 'User_AvatarImage_updatedAt_operator' },
    url: { __type: 'User_AvatarImage_url_operator' },
    width: { __type: 'User_AvatarImage_width_operator' },
  },
  User_AvatarImage_where_or: {
    alt: { __type: 'User_AvatarImage_alt_operator' },
    createdAt: { __type: 'User_AvatarImage_createdAt_operator' },
    filename: { __type: 'User_AvatarImage_filename_operator' },
    filesize: { __type: 'User_AvatarImage_filesize_operator' },
    height: { __type: 'User_AvatarImage_height_operator' },
    id: { __type: 'User_AvatarImage_id_operator' },
    mimeType: { __type: 'User_AvatarImage_mimeType_operator' },
    sizes__sixteenByNineMedium__filename: {
      __type: 'User_AvatarImage_sizes__sixteenByNineMedium__filename_operator',
    },
    sizes__sixteenByNineMedium__filesize: {
      __type: 'User_AvatarImage_sizes__sixteenByNineMedium__filesize_operator',
    },
    sizes__sixteenByNineMedium__height: {
      __type: 'User_AvatarImage_sizes__sixteenByNineMedium__height_operator',
    },
    sizes__sixteenByNineMedium__mimeType: {
      __type: 'User_AvatarImage_sizes__sixteenByNineMedium__mimeType_operator',
    },
    sizes__sixteenByNineMedium__url: {
      __type: 'User_AvatarImage_sizes__sixteenByNineMedium__url_operator',
    },
    sizes__sixteenByNineMedium__width: {
      __type: 'User_AvatarImage_sizes__sixteenByNineMedium__width_operator',
    },
    sizes__thumbnail__filename: {
      __type: 'User_AvatarImage_sizes__thumbnail__filename_operator',
    },
    sizes__thumbnail__filesize: {
      __type: 'User_AvatarImage_sizes__thumbnail__filesize_operator',
    },
    sizes__thumbnail__height: {
      __type: 'User_AvatarImage_sizes__thumbnail__height_operator',
    },
    sizes__thumbnail__mimeType: {
      __type: 'User_AvatarImage_sizes__thumbnail__mimeType_operator',
    },
    sizes__thumbnail__url: {
      __type: 'User_AvatarImage_sizes__thumbnail__url_operator',
    },
    sizes__thumbnail__width: {
      __type: 'User_AvatarImage_sizes__thumbnail__width_operator',
    },
    updatedAt: { __type: 'User_AvatarImage_updatedAt_operator' },
    url: { __type: 'User_AvatarImage_url_operator' },
    width: { __type: 'User_AvatarImage_width_operator' },
  },
  User_AvatarImage_width_operator: {
    equals: { __type: 'Float' },
    exists: { __type: 'Boolean' },
    greater_than: { __type: 'Float' },
    greater_than_equal: { __type: 'Float' },
    less_than: { __type: 'Float' },
    less_than_equal: { __type: 'Float' },
    not_equals: { __type: 'Float' },
  },
  User__verified_operator: {
    equals: { __type: 'Boolean' },
    exists: { __type: 'Boolean' },
    not_equals: { __type: 'Boolean' },
  },
  User_avatarImage_operator: {
    equals: { __type: 'String' },
    exists: { __type: 'Boolean' },
    not_equals: { __type: 'String' },
  },
  User_createdAt_operator: {
    equals: { __type: 'DateTime' },
    exists: { __type: 'Boolean' },
    greater_than: { __type: 'DateTime' },
    greater_than_equal: { __type: 'DateTime' },
    less_than: { __type: 'DateTime' },
    less_than_equal: { __type: 'DateTime' },
    like: { __type: 'DateTime' },
    not_equals: { __type: 'DateTime' },
  },
  User_email_operator: {
    all: { __type: '[EmailAddress]' },
    contains: { __type: 'EmailAddress' },
    equals: { __type: 'EmailAddress' },
    in: { __type: '[EmailAddress]' },
    like: { __type: 'EmailAddress' },
    not_equals: { __type: 'EmailAddress' },
    not_in: { __type: '[EmailAddress]' },
  },
  User_id_operator: {
    all: { __type: '[String]' },
    contains: { __type: 'String' },
    equals: { __type: 'String' },
    exists: { __type: 'Boolean' },
    in: { __type: '[String]' },
    like: { __type: 'String' },
    not_equals: { __type: 'String' },
    not_in: { __type: '[String]' },
  },
  User_name_operator: {
    all: { __type: '[String]' },
    contains: { __type: 'String' },
    equals: { __type: 'String' },
    exists: { __type: 'Boolean' },
    in: { __type: '[String]' },
    like: { __type: 'String' },
    not_equals: { __type: 'String' },
    not_in: { __type: '[String]' },
  },
  User_role_operator: {
    all: { __type: '[User_role_Input]' },
    equals: { __type: 'User_role_Input' },
    in: { __type: '[User_role_Input]' },
    not_equals: { __type: 'User_role_Input' },
    not_in: { __type: '[User_role_Input]' },
  },
  User_updatedAt_operator: {
    equals: { __type: 'DateTime' },
    exists: { __type: 'Boolean' },
    greater_than: { __type: 'DateTime' },
    greater_than_equal: { __type: 'DateTime' },
    less_than: { __type: 'DateTime' },
    less_than_equal: { __type: 'DateTime' },
    like: { __type: 'DateTime' },
    not_equals: { __type: 'DateTime' },
  },
  User_where: {
    AND: { __type: '[User_where_and]' },
    OR: { __type: '[User_where_or]' },
    _verified: { __type: 'User__verified_operator' },
    avatarImage: { __type: 'User_avatarImage_operator' },
    createdAt: { __type: 'User_createdAt_operator' },
    email: { __type: 'User_email_operator' },
    id: { __type: 'User_id_operator' },
    name: { __type: 'User_name_operator' },
    role: { __type: 'User_role_operator' },
    updatedAt: { __type: 'User_updatedAt_operator' },
  },
  User_where_and: {
    _verified: { __type: 'User__verified_operator' },
    avatarImage: { __type: 'User_avatarImage_operator' },
    createdAt: { __type: 'User_createdAt_operator' },
    email: { __type: 'User_email_operator' },
    id: { __type: 'User_id_operator' },
    name: { __type: 'User_name_operator' },
    role: { __type: 'User_role_operator' },
    updatedAt: { __type: 'User_updatedAt_operator' },
  },
  User_where_or: {
    _verified: { __type: 'User__verified_operator' },
    avatarImage: { __type: 'User_avatarImage_operator' },
    createdAt: { __type: 'User_createdAt_operator' },
    email: { __type: 'User_email_operator' },
    id: { __type: 'User_id_operator' },
    name: { __type: 'User_name_operator' },
    role: { __type: 'User_role_operator' },
    updatedAt: { __type: 'User_updatedAt_operator' },
  },
  Users: {
    __typename: { __type: 'String!' },
    docs: { __type: '[User]' },
    hasNextPage: { __type: 'Boolean' },
    hasPrevPage: { __type: 'Boolean' },
    limit: { __type: 'Int' },
    nextPage: { __type: 'Int' },
    offset: { __type: 'Int' },
    page: { __type: 'Int' },
    pagingCounter: { __type: 'Int' },
    prevPage: { __type: 'Int' },
    totalDocs: { __type: 'Int' },
    totalPages: { __type: 'Int' },
  },
  UsersCreateAccess: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
    where: { __type: 'JSONObject' },
  },
  UsersCreateDocAccess: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
    where: { __type: 'JSONObject' },
  },
  UsersDeleteAccess: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
    where: { __type: 'JSONObject' },
  },
  UsersDeleteDocAccess: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
    where: { __type: 'JSONObject' },
  },
  UsersDocAccessFields: {
    __typename: { __type: 'String!' },
    _verified: { __type: 'UsersDocAccessFields__verified' },
    avatarImage: { __type: 'UsersDocAccessFields_avatarImage' },
    createdAt: { __type: 'UsersDocAccessFields_createdAt' },
    email: { __type: 'UsersDocAccessFields_email' },
    name: { __type: 'UsersDocAccessFields_name' },
    password: { __type: 'UsersDocAccessFields_password' },
    role: { __type: 'UsersDocAccessFields_role' },
    updatedAt: { __type: 'UsersDocAccessFields_updatedAt' },
  },
  UsersDocAccessFields__verified: {
    __typename: { __type: 'String!' },
    create: { __type: 'UsersDocAccessFields__verified_Create' },
    delete: { __type: 'UsersDocAccessFields__verified_Delete' },
    read: { __type: 'UsersDocAccessFields__verified_Read' },
    update: { __type: 'UsersDocAccessFields__verified_Update' },
  },
  UsersDocAccessFields__verified_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  UsersDocAccessFields__verified_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  UsersDocAccessFields__verified_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  UsersDocAccessFields__verified_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  UsersDocAccessFields_avatarImage: {
    __typename: { __type: 'String!' },
    create: { __type: 'UsersDocAccessFields_avatarImage_Create' },
    delete: { __type: 'UsersDocAccessFields_avatarImage_Delete' },
    read: { __type: 'UsersDocAccessFields_avatarImage_Read' },
    update: { __type: 'UsersDocAccessFields_avatarImage_Update' },
  },
  UsersDocAccessFields_avatarImage_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  UsersDocAccessFields_avatarImage_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  UsersDocAccessFields_avatarImage_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  UsersDocAccessFields_avatarImage_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  UsersDocAccessFields_createdAt: {
    __typename: { __type: 'String!' },
    create: { __type: 'UsersDocAccessFields_createdAt_Create' },
    delete: { __type: 'UsersDocAccessFields_createdAt_Delete' },
    read: { __type: 'UsersDocAccessFields_createdAt_Read' },
    update: { __type: 'UsersDocAccessFields_createdAt_Update' },
  },
  UsersDocAccessFields_createdAt_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  UsersDocAccessFields_createdAt_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  UsersDocAccessFields_createdAt_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  UsersDocAccessFields_createdAt_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  UsersDocAccessFields_email: {
    __typename: { __type: 'String!' },
    create: { __type: 'UsersDocAccessFields_email_Create' },
    delete: { __type: 'UsersDocAccessFields_email_Delete' },
    read: { __type: 'UsersDocAccessFields_email_Read' },
    update: { __type: 'UsersDocAccessFields_email_Update' },
  },
  UsersDocAccessFields_email_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  UsersDocAccessFields_email_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  UsersDocAccessFields_email_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  UsersDocAccessFields_email_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  UsersDocAccessFields_name: {
    __typename: { __type: 'String!' },
    create: { __type: 'UsersDocAccessFields_name_Create' },
    delete: { __type: 'UsersDocAccessFields_name_Delete' },
    read: { __type: 'UsersDocAccessFields_name_Read' },
    update: { __type: 'UsersDocAccessFields_name_Update' },
  },
  UsersDocAccessFields_name_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  UsersDocAccessFields_name_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  UsersDocAccessFields_name_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  UsersDocAccessFields_name_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  UsersDocAccessFields_password: {
    __typename: { __type: 'String!' },
    create: { __type: 'UsersDocAccessFields_password_Create' },
    delete: { __type: 'UsersDocAccessFields_password_Delete' },
    read: { __type: 'UsersDocAccessFields_password_Read' },
    update: { __type: 'UsersDocAccessFields_password_Update' },
  },
  UsersDocAccessFields_password_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  UsersDocAccessFields_password_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  UsersDocAccessFields_password_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  UsersDocAccessFields_password_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  UsersDocAccessFields_role: {
    __typename: { __type: 'String!' },
    create: { __type: 'UsersDocAccessFields_role_Create' },
    delete: { __type: 'UsersDocAccessFields_role_Delete' },
    read: { __type: 'UsersDocAccessFields_role_Read' },
    update: { __type: 'UsersDocAccessFields_role_Update' },
  },
  UsersDocAccessFields_role_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  UsersDocAccessFields_role_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  UsersDocAccessFields_role_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  UsersDocAccessFields_role_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  UsersDocAccessFields_updatedAt: {
    __typename: { __type: 'String!' },
    create: { __type: 'UsersDocAccessFields_updatedAt_Create' },
    delete: { __type: 'UsersDocAccessFields_updatedAt_Delete' },
    read: { __type: 'UsersDocAccessFields_updatedAt_Read' },
    update: { __type: 'UsersDocAccessFields_updatedAt_Update' },
  },
  UsersDocAccessFields_updatedAt_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  UsersDocAccessFields_updatedAt_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  UsersDocAccessFields_updatedAt_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  UsersDocAccessFields_updatedAt_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  UsersFields: {
    __typename: { __type: 'String!' },
    _verified: { __type: 'UsersFields__verified' },
    avatarImage: { __type: 'UsersFields_avatarImage' },
    createdAt: { __type: 'UsersFields_createdAt' },
    email: { __type: 'UsersFields_email' },
    name: { __type: 'UsersFields_name' },
    password: { __type: 'UsersFields_password' },
    role: { __type: 'UsersFields_role' },
    updatedAt: { __type: 'UsersFields_updatedAt' },
  },
  UsersFields__verified: {
    __typename: { __type: 'String!' },
    create: { __type: 'UsersFields__verified_Create' },
    delete: { __type: 'UsersFields__verified_Delete' },
    read: { __type: 'UsersFields__verified_Read' },
    update: { __type: 'UsersFields__verified_Update' },
  },
  UsersFields__verified_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  UsersFields__verified_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  UsersFields__verified_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  UsersFields__verified_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  UsersFields_avatarImage: {
    __typename: { __type: 'String!' },
    create: { __type: 'UsersFields_avatarImage_Create' },
    delete: { __type: 'UsersFields_avatarImage_Delete' },
    read: { __type: 'UsersFields_avatarImage_Read' },
    update: { __type: 'UsersFields_avatarImage_Update' },
  },
  UsersFields_avatarImage_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  UsersFields_avatarImage_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  UsersFields_avatarImage_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  UsersFields_avatarImage_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  UsersFields_createdAt: {
    __typename: { __type: 'String!' },
    create: { __type: 'UsersFields_createdAt_Create' },
    delete: { __type: 'UsersFields_createdAt_Delete' },
    read: { __type: 'UsersFields_createdAt_Read' },
    update: { __type: 'UsersFields_createdAt_Update' },
  },
  UsersFields_createdAt_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  UsersFields_createdAt_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  UsersFields_createdAt_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  UsersFields_createdAt_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  UsersFields_email: {
    __typename: { __type: 'String!' },
    create: { __type: 'UsersFields_email_Create' },
    delete: { __type: 'UsersFields_email_Delete' },
    read: { __type: 'UsersFields_email_Read' },
    update: { __type: 'UsersFields_email_Update' },
  },
  UsersFields_email_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  UsersFields_email_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  UsersFields_email_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  UsersFields_email_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  UsersFields_name: {
    __typename: { __type: 'String!' },
    create: { __type: 'UsersFields_name_Create' },
    delete: { __type: 'UsersFields_name_Delete' },
    read: { __type: 'UsersFields_name_Read' },
    update: { __type: 'UsersFields_name_Update' },
  },
  UsersFields_name_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  UsersFields_name_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  UsersFields_name_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  UsersFields_name_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  UsersFields_password: {
    __typename: { __type: 'String!' },
    create: { __type: 'UsersFields_password_Create' },
    delete: { __type: 'UsersFields_password_Delete' },
    read: { __type: 'UsersFields_password_Read' },
    update: { __type: 'UsersFields_password_Update' },
  },
  UsersFields_password_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  UsersFields_password_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  UsersFields_password_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  UsersFields_password_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  UsersFields_role: {
    __typename: { __type: 'String!' },
    create: { __type: 'UsersFields_role_Create' },
    delete: { __type: 'UsersFields_role_Delete' },
    read: { __type: 'UsersFields_role_Read' },
    update: { __type: 'UsersFields_role_Update' },
  },
  UsersFields_role_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  UsersFields_role_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  UsersFields_role_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  UsersFields_role_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  UsersFields_updatedAt: {
    __typename: { __type: 'String!' },
    create: { __type: 'UsersFields_updatedAt_Create' },
    delete: { __type: 'UsersFields_updatedAt_Delete' },
    read: { __type: 'UsersFields_updatedAt_Read' },
    update: { __type: 'UsersFields_updatedAt_Update' },
  },
  UsersFields_updatedAt_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  UsersFields_updatedAt_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  UsersFields_updatedAt_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  UsersFields_updatedAt_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  UsersReadAccess: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
    where: { __type: 'JSONObject' },
  },
  UsersReadDocAccess: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
    where: { __type: 'JSONObject' },
  },
  UsersUnlockAccess: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
    where: { __type: 'JSONObject' },
  },
  UsersUnlockDocAccess: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
    where: { __type: 'JSONObject' },
  },
  UsersUpdateAccess: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
    where: { __type: 'JSONObject' },
  },
  UsersUpdateDocAccess: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
    where: { __type: 'JSONObject' },
  },
  Volume: {
    __typename: { __type: 'String!' },
    about: { __type: 'JSON', __args: { depth: 'Int' } },
    createdAt: { __type: 'DateTime' },
    id: { __type: 'String' },
    publishedDate: { __type: 'DateTime' },
    slug: { __type: 'String' },
    title: { __type: 'String!' },
    updatedAt: { __type: 'DateTime' },
    volumeCover: {
      __type: 'Media',
      __args: { where: 'Volume_VolumeCover_where' },
    },
    volumePdf: { __type: 'Media', __args: { where: 'Volume_VolumePdf_where' } },
  },
  Volume_VolumeCover_alt_operator: {
    all: { __type: '[String]' },
    contains: { __type: 'String' },
    equals: { __type: 'String' },
    exists: { __type: 'Boolean' },
    in: { __type: '[String]' },
    like: { __type: 'String' },
    not_equals: { __type: 'String' },
    not_in: { __type: '[String]' },
  },
  Volume_VolumeCover_createdAt_operator: {
    equals: { __type: 'DateTime' },
    exists: { __type: 'Boolean' },
    greater_than: { __type: 'DateTime' },
    greater_than_equal: { __type: 'DateTime' },
    less_than: { __type: 'DateTime' },
    less_than_equal: { __type: 'DateTime' },
    like: { __type: 'DateTime' },
    not_equals: { __type: 'DateTime' },
  },
  Volume_VolumeCover_filename_operator: {
    all: { __type: '[String]' },
    contains: { __type: 'String' },
    equals: { __type: 'String' },
    exists: { __type: 'Boolean' },
    in: { __type: '[String]' },
    like: { __type: 'String' },
    not_equals: { __type: 'String' },
    not_in: { __type: '[String]' },
  },
  Volume_VolumeCover_filesize_operator: {
    equals: { __type: 'Float' },
    exists: { __type: 'Boolean' },
    greater_than: { __type: 'Float' },
    greater_than_equal: { __type: 'Float' },
    less_than: { __type: 'Float' },
    less_than_equal: { __type: 'Float' },
    not_equals: { __type: 'Float' },
  },
  Volume_VolumeCover_height_operator: {
    equals: { __type: 'Float' },
    exists: { __type: 'Boolean' },
    greater_than: { __type: 'Float' },
    greater_than_equal: { __type: 'Float' },
    less_than: { __type: 'Float' },
    less_than_equal: { __type: 'Float' },
    not_equals: { __type: 'Float' },
  },
  Volume_VolumeCover_id_operator: {
    all: { __type: '[String]' },
    contains: { __type: 'String' },
    equals: { __type: 'String' },
    exists: { __type: 'Boolean' },
    in: { __type: '[String]' },
    like: { __type: 'String' },
    not_equals: { __type: 'String' },
    not_in: { __type: '[String]' },
  },
  Volume_VolumeCover_mimeType_operator: {
    all: { __type: '[String]' },
    contains: { __type: 'String' },
    equals: { __type: 'String' },
    exists: { __type: 'Boolean' },
    in: { __type: '[String]' },
    like: { __type: 'String' },
    not_equals: { __type: 'String' },
    not_in: { __type: '[String]' },
  },
  Volume_VolumeCover_sizes__sixteenByNineMedium__filename_operator: {
    all: { __type: '[String]' },
    contains: { __type: 'String' },
    equals: { __type: 'String' },
    exists: { __type: 'Boolean' },
    in: { __type: '[String]' },
    like: { __type: 'String' },
    not_equals: { __type: 'String' },
    not_in: { __type: '[String]' },
  },
  Volume_VolumeCover_sizes__sixteenByNineMedium__filesize_operator: {
    equals: { __type: 'Float' },
    exists: { __type: 'Boolean' },
    greater_than: { __type: 'Float' },
    greater_than_equal: { __type: 'Float' },
    less_than: { __type: 'Float' },
    less_than_equal: { __type: 'Float' },
    not_equals: { __type: 'Float' },
  },
  Volume_VolumeCover_sizes__sixteenByNineMedium__height_operator: {
    equals: { __type: 'Float' },
    exists: { __type: 'Boolean' },
    greater_than: { __type: 'Float' },
    greater_than_equal: { __type: 'Float' },
    less_than: { __type: 'Float' },
    less_than_equal: { __type: 'Float' },
    not_equals: { __type: 'Float' },
  },
  Volume_VolumeCover_sizes__sixteenByNineMedium__mimeType_operator: {
    all: { __type: '[String]' },
    contains: { __type: 'String' },
    equals: { __type: 'String' },
    exists: { __type: 'Boolean' },
    in: { __type: '[String]' },
    like: { __type: 'String' },
    not_equals: { __type: 'String' },
    not_in: { __type: '[String]' },
  },
  Volume_VolumeCover_sizes__sixteenByNineMedium__url_operator: {
    all: { __type: '[String]' },
    contains: { __type: 'String' },
    equals: { __type: 'String' },
    exists: { __type: 'Boolean' },
    in: { __type: '[String]' },
    like: { __type: 'String' },
    not_equals: { __type: 'String' },
    not_in: { __type: '[String]' },
  },
  Volume_VolumeCover_sizes__sixteenByNineMedium__width_operator: {
    equals: { __type: 'Float' },
    exists: { __type: 'Boolean' },
    greater_than: { __type: 'Float' },
    greater_than_equal: { __type: 'Float' },
    less_than: { __type: 'Float' },
    less_than_equal: { __type: 'Float' },
    not_equals: { __type: 'Float' },
  },
  Volume_VolumeCover_sizes__thumbnail__filename_operator: {
    all: { __type: '[String]' },
    contains: { __type: 'String' },
    equals: { __type: 'String' },
    exists: { __type: 'Boolean' },
    in: { __type: '[String]' },
    like: { __type: 'String' },
    not_equals: { __type: 'String' },
    not_in: { __type: '[String]' },
  },
  Volume_VolumeCover_sizes__thumbnail__filesize_operator: {
    equals: { __type: 'Float' },
    exists: { __type: 'Boolean' },
    greater_than: { __type: 'Float' },
    greater_than_equal: { __type: 'Float' },
    less_than: { __type: 'Float' },
    less_than_equal: { __type: 'Float' },
    not_equals: { __type: 'Float' },
  },
  Volume_VolumeCover_sizes__thumbnail__height_operator: {
    equals: { __type: 'Float' },
    exists: { __type: 'Boolean' },
    greater_than: { __type: 'Float' },
    greater_than_equal: { __type: 'Float' },
    less_than: { __type: 'Float' },
    less_than_equal: { __type: 'Float' },
    not_equals: { __type: 'Float' },
  },
  Volume_VolumeCover_sizes__thumbnail__mimeType_operator: {
    all: { __type: '[String]' },
    contains: { __type: 'String' },
    equals: { __type: 'String' },
    exists: { __type: 'Boolean' },
    in: { __type: '[String]' },
    like: { __type: 'String' },
    not_equals: { __type: 'String' },
    not_in: { __type: '[String]' },
  },
  Volume_VolumeCover_sizes__thumbnail__url_operator: {
    all: { __type: '[String]' },
    contains: { __type: 'String' },
    equals: { __type: 'String' },
    exists: { __type: 'Boolean' },
    in: { __type: '[String]' },
    like: { __type: 'String' },
    not_equals: { __type: 'String' },
    not_in: { __type: '[String]' },
  },
  Volume_VolumeCover_sizes__thumbnail__width_operator: {
    equals: { __type: 'Float' },
    exists: { __type: 'Boolean' },
    greater_than: { __type: 'Float' },
    greater_than_equal: { __type: 'Float' },
    less_than: { __type: 'Float' },
    less_than_equal: { __type: 'Float' },
    not_equals: { __type: 'Float' },
  },
  Volume_VolumeCover_updatedAt_operator: {
    equals: { __type: 'DateTime' },
    exists: { __type: 'Boolean' },
    greater_than: { __type: 'DateTime' },
    greater_than_equal: { __type: 'DateTime' },
    less_than: { __type: 'DateTime' },
    less_than_equal: { __type: 'DateTime' },
    like: { __type: 'DateTime' },
    not_equals: { __type: 'DateTime' },
  },
  Volume_VolumeCover_url_operator: {
    all: { __type: '[String]' },
    contains: { __type: 'String' },
    equals: { __type: 'String' },
    exists: { __type: 'Boolean' },
    in: { __type: '[String]' },
    like: { __type: 'String' },
    not_equals: { __type: 'String' },
    not_in: { __type: '[String]' },
  },
  Volume_VolumeCover_where: {
    AND: { __type: '[Volume_VolumeCover_where_and]' },
    OR: { __type: '[Volume_VolumeCover_where_or]' },
    alt: { __type: 'Volume_VolumeCover_alt_operator' },
    createdAt: { __type: 'Volume_VolumeCover_createdAt_operator' },
    filename: { __type: 'Volume_VolumeCover_filename_operator' },
    filesize: { __type: 'Volume_VolumeCover_filesize_operator' },
    height: { __type: 'Volume_VolumeCover_height_operator' },
    id: { __type: 'Volume_VolumeCover_id_operator' },
    mimeType: { __type: 'Volume_VolumeCover_mimeType_operator' },
    sizes__sixteenByNineMedium__filename: {
      __type:
        'Volume_VolumeCover_sizes__sixteenByNineMedium__filename_operator',
    },
    sizes__sixteenByNineMedium__filesize: {
      __type:
        'Volume_VolumeCover_sizes__sixteenByNineMedium__filesize_operator',
    },
    sizes__sixteenByNineMedium__height: {
      __type: 'Volume_VolumeCover_sizes__sixteenByNineMedium__height_operator',
    },
    sizes__sixteenByNineMedium__mimeType: {
      __type:
        'Volume_VolumeCover_sizes__sixteenByNineMedium__mimeType_operator',
    },
    sizes__sixteenByNineMedium__url: {
      __type: 'Volume_VolumeCover_sizes__sixteenByNineMedium__url_operator',
    },
    sizes__sixteenByNineMedium__width: {
      __type: 'Volume_VolumeCover_sizes__sixteenByNineMedium__width_operator',
    },
    sizes__thumbnail__filename: {
      __type: 'Volume_VolumeCover_sizes__thumbnail__filename_operator',
    },
    sizes__thumbnail__filesize: {
      __type: 'Volume_VolumeCover_sizes__thumbnail__filesize_operator',
    },
    sizes__thumbnail__height: {
      __type: 'Volume_VolumeCover_sizes__thumbnail__height_operator',
    },
    sizes__thumbnail__mimeType: {
      __type: 'Volume_VolumeCover_sizes__thumbnail__mimeType_operator',
    },
    sizes__thumbnail__url: {
      __type: 'Volume_VolumeCover_sizes__thumbnail__url_operator',
    },
    sizes__thumbnail__width: {
      __type: 'Volume_VolumeCover_sizes__thumbnail__width_operator',
    },
    updatedAt: { __type: 'Volume_VolumeCover_updatedAt_operator' },
    url: { __type: 'Volume_VolumeCover_url_operator' },
    width: { __type: 'Volume_VolumeCover_width_operator' },
  },
  Volume_VolumeCover_where_and: {
    alt: { __type: 'Volume_VolumeCover_alt_operator' },
    createdAt: { __type: 'Volume_VolumeCover_createdAt_operator' },
    filename: { __type: 'Volume_VolumeCover_filename_operator' },
    filesize: { __type: 'Volume_VolumeCover_filesize_operator' },
    height: { __type: 'Volume_VolumeCover_height_operator' },
    id: { __type: 'Volume_VolumeCover_id_operator' },
    mimeType: { __type: 'Volume_VolumeCover_mimeType_operator' },
    sizes__sixteenByNineMedium__filename: {
      __type:
        'Volume_VolumeCover_sizes__sixteenByNineMedium__filename_operator',
    },
    sizes__sixteenByNineMedium__filesize: {
      __type:
        'Volume_VolumeCover_sizes__sixteenByNineMedium__filesize_operator',
    },
    sizes__sixteenByNineMedium__height: {
      __type: 'Volume_VolumeCover_sizes__sixteenByNineMedium__height_operator',
    },
    sizes__sixteenByNineMedium__mimeType: {
      __type:
        'Volume_VolumeCover_sizes__sixteenByNineMedium__mimeType_operator',
    },
    sizes__sixteenByNineMedium__url: {
      __type: 'Volume_VolumeCover_sizes__sixteenByNineMedium__url_operator',
    },
    sizes__sixteenByNineMedium__width: {
      __type: 'Volume_VolumeCover_sizes__sixteenByNineMedium__width_operator',
    },
    sizes__thumbnail__filename: {
      __type: 'Volume_VolumeCover_sizes__thumbnail__filename_operator',
    },
    sizes__thumbnail__filesize: {
      __type: 'Volume_VolumeCover_sizes__thumbnail__filesize_operator',
    },
    sizes__thumbnail__height: {
      __type: 'Volume_VolumeCover_sizes__thumbnail__height_operator',
    },
    sizes__thumbnail__mimeType: {
      __type: 'Volume_VolumeCover_sizes__thumbnail__mimeType_operator',
    },
    sizes__thumbnail__url: {
      __type: 'Volume_VolumeCover_sizes__thumbnail__url_operator',
    },
    sizes__thumbnail__width: {
      __type: 'Volume_VolumeCover_sizes__thumbnail__width_operator',
    },
    updatedAt: { __type: 'Volume_VolumeCover_updatedAt_operator' },
    url: { __type: 'Volume_VolumeCover_url_operator' },
    width: { __type: 'Volume_VolumeCover_width_operator' },
  },
  Volume_VolumeCover_where_or: {
    alt: { __type: 'Volume_VolumeCover_alt_operator' },
    createdAt: { __type: 'Volume_VolumeCover_createdAt_operator' },
    filename: { __type: 'Volume_VolumeCover_filename_operator' },
    filesize: { __type: 'Volume_VolumeCover_filesize_operator' },
    height: { __type: 'Volume_VolumeCover_height_operator' },
    id: { __type: 'Volume_VolumeCover_id_operator' },
    mimeType: { __type: 'Volume_VolumeCover_mimeType_operator' },
    sizes__sixteenByNineMedium__filename: {
      __type:
        'Volume_VolumeCover_sizes__sixteenByNineMedium__filename_operator',
    },
    sizes__sixteenByNineMedium__filesize: {
      __type:
        'Volume_VolumeCover_sizes__sixteenByNineMedium__filesize_operator',
    },
    sizes__sixteenByNineMedium__height: {
      __type: 'Volume_VolumeCover_sizes__sixteenByNineMedium__height_operator',
    },
    sizes__sixteenByNineMedium__mimeType: {
      __type:
        'Volume_VolumeCover_sizes__sixteenByNineMedium__mimeType_operator',
    },
    sizes__sixteenByNineMedium__url: {
      __type: 'Volume_VolumeCover_sizes__sixteenByNineMedium__url_operator',
    },
    sizes__sixteenByNineMedium__width: {
      __type: 'Volume_VolumeCover_sizes__sixteenByNineMedium__width_operator',
    },
    sizes__thumbnail__filename: {
      __type: 'Volume_VolumeCover_sizes__thumbnail__filename_operator',
    },
    sizes__thumbnail__filesize: {
      __type: 'Volume_VolumeCover_sizes__thumbnail__filesize_operator',
    },
    sizes__thumbnail__height: {
      __type: 'Volume_VolumeCover_sizes__thumbnail__height_operator',
    },
    sizes__thumbnail__mimeType: {
      __type: 'Volume_VolumeCover_sizes__thumbnail__mimeType_operator',
    },
    sizes__thumbnail__url: {
      __type: 'Volume_VolumeCover_sizes__thumbnail__url_operator',
    },
    sizes__thumbnail__width: {
      __type: 'Volume_VolumeCover_sizes__thumbnail__width_operator',
    },
    updatedAt: { __type: 'Volume_VolumeCover_updatedAt_operator' },
    url: { __type: 'Volume_VolumeCover_url_operator' },
    width: { __type: 'Volume_VolumeCover_width_operator' },
  },
  Volume_VolumeCover_width_operator: {
    equals: { __type: 'Float' },
    exists: { __type: 'Boolean' },
    greater_than: { __type: 'Float' },
    greater_than_equal: { __type: 'Float' },
    less_than: { __type: 'Float' },
    less_than_equal: { __type: 'Float' },
    not_equals: { __type: 'Float' },
  },
  Volume_VolumePdf_alt_operator: {
    all: { __type: '[String]' },
    contains: { __type: 'String' },
    equals: { __type: 'String' },
    exists: { __type: 'Boolean' },
    in: { __type: '[String]' },
    like: { __type: 'String' },
    not_equals: { __type: 'String' },
    not_in: { __type: '[String]' },
  },
  Volume_VolumePdf_createdAt_operator: {
    equals: { __type: 'DateTime' },
    exists: { __type: 'Boolean' },
    greater_than: { __type: 'DateTime' },
    greater_than_equal: { __type: 'DateTime' },
    less_than: { __type: 'DateTime' },
    less_than_equal: { __type: 'DateTime' },
    like: { __type: 'DateTime' },
    not_equals: { __type: 'DateTime' },
  },
  Volume_VolumePdf_filename_operator: {
    all: { __type: '[String]' },
    contains: { __type: 'String' },
    equals: { __type: 'String' },
    exists: { __type: 'Boolean' },
    in: { __type: '[String]' },
    like: { __type: 'String' },
    not_equals: { __type: 'String' },
    not_in: { __type: '[String]' },
  },
  Volume_VolumePdf_filesize_operator: {
    equals: { __type: 'Float' },
    exists: { __type: 'Boolean' },
    greater_than: { __type: 'Float' },
    greater_than_equal: { __type: 'Float' },
    less_than: { __type: 'Float' },
    less_than_equal: { __type: 'Float' },
    not_equals: { __type: 'Float' },
  },
  Volume_VolumePdf_height_operator: {
    equals: { __type: 'Float' },
    exists: { __type: 'Boolean' },
    greater_than: { __type: 'Float' },
    greater_than_equal: { __type: 'Float' },
    less_than: { __type: 'Float' },
    less_than_equal: { __type: 'Float' },
    not_equals: { __type: 'Float' },
  },
  Volume_VolumePdf_id_operator: {
    all: { __type: '[String]' },
    contains: { __type: 'String' },
    equals: { __type: 'String' },
    exists: { __type: 'Boolean' },
    in: { __type: '[String]' },
    like: { __type: 'String' },
    not_equals: { __type: 'String' },
    not_in: { __type: '[String]' },
  },
  Volume_VolumePdf_mimeType_operator: {
    all: { __type: '[String]' },
    contains: { __type: 'String' },
    equals: { __type: 'String' },
    exists: { __type: 'Boolean' },
    in: { __type: '[String]' },
    like: { __type: 'String' },
    not_equals: { __type: 'String' },
    not_in: { __type: '[String]' },
  },
  Volume_VolumePdf_sizes__sixteenByNineMedium__filename_operator: {
    all: { __type: '[String]' },
    contains: { __type: 'String' },
    equals: { __type: 'String' },
    exists: { __type: 'Boolean' },
    in: { __type: '[String]' },
    like: { __type: 'String' },
    not_equals: { __type: 'String' },
    not_in: { __type: '[String]' },
  },
  Volume_VolumePdf_sizes__sixteenByNineMedium__filesize_operator: {
    equals: { __type: 'Float' },
    exists: { __type: 'Boolean' },
    greater_than: { __type: 'Float' },
    greater_than_equal: { __type: 'Float' },
    less_than: { __type: 'Float' },
    less_than_equal: { __type: 'Float' },
    not_equals: { __type: 'Float' },
  },
  Volume_VolumePdf_sizes__sixteenByNineMedium__height_operator: {
    equals: { __type: 'Float' },
    exists: { __type: 'Boolean' },
    greater_than: { __type: 'Float' },
    greater_than_equal: { __type: 'Float' },
    less_than: { __type: 'Float' },
    less_than_equal: { __type: 'Float' },
    not_equals: { __type: 'Float' },
  },
  Volume_VolumePdf_sizes__sixteenByNineMedium__mimeType_operator: {
    all: { __type: '[String]' },
    contains: { __type: 'String' },
    equals: { __type: 'String' },
    exists: { __type: 'Boolean' },
    in: { __type: '[String]' },
    like: { __type: 'String' },
    not_equals: { __type: 'String' },
    not_in: { __type: '[String]' },
  },
  Volume_VolumePdf_sizes__sixteenByNineMedium__url_operator: {
    all: { __type: '[String]' },
    contains: { __type: 'String' },
    equals: { __type: 'String' },
    exists: { __type: 'Boolean' },
    in: { __type: '[String]' },
    like: { __type: 'String' },
    not_equals: { __type: 'String' },
    not_in: { __type: '[String]' },
  },
  Volume_VolumePdf_sizes__sixteenByNineMedium__width_operator: {
    equals: { __type: 'Float' },
    exists: { __type: 'Boolean' },
    greater_than: { __type: 'Float' },
    greater_than_equal: { __type: 'Float' },
    less_than: { __type: 'Float' },
    less_than_equal: { __type: 'Float' },
    not_equals: { __type: 'Float' },
  },
  Volume_VolumePdf_sizes__thumbnail__filename_operator: {
    all: { __type: '[String]' },
    contains: { __type: 'String' },
    equals: { __type: 'String' },
    exists: { __type: 'Boolean' },
    in: { __type: '[String]' },
    like: { __type: 'String' },
    not_equals: { __type: 'String' },
    not_in: { __type: '[String]' },
  },
  Volume_VolumePdf_sizes__thumbnail__filesize_operator: {
    equals: { __type: 'Float' },
    exists: { __type: 'Boolean' },
    greater_than: { __type: 'Float' },
    greater_than_equal: { __type: 'Float' },
    less_than: { __type: 'Float' },
    less_than_equal: { __type: 'Float' },
    not_equals: { __type: 'Float' },
  },
  Volume_VolumePdf_sizes__thumbnail__height_operator: {
    equals: { __type: 'Float' },
    exists: { __type: 'Boolean' },
    greater_than: { __type: 'Float' },
    greater_than_equal: { __type: 'Float' },
    less_than: { __type: 'Float' },
    less_than_equal: { __type: 'Float' },
    not_equals: { __type: 'Float' },
  },
  Volume_VolumePdf_sizes__thumbnail__mimeType_operator: {
    all: { __type: '[String]' },
    contains: { __type: 'String' },
    equals: { __type: 'String' },
    exists: { __type: 'Boolean' },
    in: { __type: '[String]' },
    like: { __type: 'String' },
    not_equals: { __type: 'String' },
    not_in: { __type: '[String]' },
  },
  Volume_VolumePdf_sizes__thumbnail__url_operator: {
    all: { __type: '[String]' },
    contains: { __type: 'String' },
    equals: { __type: 'String' },
    exists: { __type: 'Boolean' },
    in: { __type: '[String]' },
    like: { __type: 'String' },
    not_equals: { __type: 'String' },
    not_in: { __type: '[String]' },
  },
  Volume_VolumePdf_sizes__thumbnail__width_operator: {
    equals: { __type: 'Float' },
    exists: { __type: 'Boolean' },
    greater_than: { __type: 'Float' },
    greater_than_equal: { __type: 'Float' },
    less_than: { __type: 'Float' },
    less_than_equal: { __type: 'Float' },
    not_equals: { __type: 'Float' },
  },
  Volume_VolumePdf_updatedAt_operator: {
    equals: { __type: 'DateTime' },
    exists: { __type: 'Boolean' },
    greater_than: { __type: 'DateTime' },
    greater_than_equal: { __type: 'DateTime' },
    less_than: { __type: 'DateTime' },
    less_than_equal: { __type: 'DateTime' },
    like: { __type: 'DateTime' },
    not_equals: { __type: 'DateTime' },
  },
  Volume_VolumePdf_url_operator: {
    all: { __type: '[String]' },
    contains: { __type: 'String' },
    equals: { __type: 'String' },
    exists: { __type: 'Boolean' },
    in: { __type: '[String]' },
    like: { __type: 'String' },
    not_equals: { __type: 'String' },
    not_in: { __type: '[String]' },
  },
  Volume_VolumePdf_where: {
    AND: { __type: '[Volume_VolumePdf_where_and]' },
    OR: { __type: '[Volume_VolumePdf_where_or]' },
    alt: { __type: 'Volume_VolumePdf_alt_operator' },
    createdAt: { __type: 'Volume_VolumePdf_createdAt_operator' },
    filename: { __type: 'Volume_VolumePdf_filename_operator' },
    filesize: { __type: 'Volume_VolumePdf_filesize_operator' },
    height: { __type: 'Volume_VolumePdf_height_operator' },
    id: { __type: 'Volume_VolumePdf_id_operator' },
    mimeType: { __type: 'Volume_VolumePdf_mimeType_operator' },
    sizes__sixteenByNineMedium__filename: {
      __type: 'Volume_VolumePdf_sizes__sixteenByNineMedium__filename_operator',
    },
    sizes__sixteenByNineMedium__filesize: {
      __type: 'Volume_VolumePdf_sizes__sixteenByNineMedium__filesize_operator',
    },
    sizes__sixteenByNineMedium__height: {
      __type: 'Volume_VolumePdf_sizes__sixteenByNineMedium__height_operator',
    },
    sizes__sixteenByNineMedium__mimeType: {
      __type: 'Volume_VolumePdf_sizes__sixteenByNineMedium__mimeType_operator',
    },
    sizes__sixteenByNineMedium__url: {
      __type: 'Volume_VolumePdf_sizes__sixteenByNineMedium__url_operator',
    },
    sizes__sixteenByNineMedium__width: {
      __type: 'Volume_VolumePdf_sizes__sixteenByNineMedium__width_operator',
    },
    sizes__thumbnail__filename: {
      __type: 'Volume_VolumePdf_sizes__thumbnail__filename_operator',
    },
    sizes__thumbnail__filesize: {
      __type: 'Volume_VolumePdf_sizes__thumbnail__filesize_operator',
    },
    sizes__thumbnail__height: {
      __type: 'Volume_VolumePdf_sizes__thumbnail__height_operator',
    },
    sizes__thumbnail__mimeType: {
      __type: 'Volume_VolumePdf_sizes__thumbnail__mimeType_operator',
    },
    sizes__thumbnail__url: {
      __type: 'Volume_VolumePdf_sizes__thumbnail__url_operator',
    },
    sizes__thumbnail__width: {
      __type: 'Volume_VolumePdf_sizes__thumbnail__width_operator',
    },
    updatedAt: { __type: 'Volume_VolumePdf_updatedAt_operator' },
    url: { __type: 'Volume_VolumePdf_url_operator' },
    width: { __type: 'Volume_VolumePdf_width_operator' },
  },
  Volume_VolumePdf_where_and: {
    alt: { __type: 'Volume_VolumePdf_alt_operator' },
    createdAt: { __type: 'Volume_VolumePdf_createdAt_operator' },
    filename: { __type: 'Volume_VolumePdf_filename_operator' },
    filesize: { __type: 'Volume_VolumePdf_filesize_operator' },
    height: { __type: 'Volume_VolumePdf_height_operator' },
    id: { __type: 'Volume_VolumePdf_id_operator' },
    mimeType: { __type: 'Volume_VolumePdf_mimeType_operator' },
    sizes__sixteenByNineMedium__filename: {
      __type: 'Volume_VolumePdf_sizes__sixteenByNineMedium__filename_operator',
    },
    sizes__sixteenByNineMedium__filesize: {
      __type: 'Volume_VolumePdf_sizes__sixteenByNineMedium__filesize_operator',
    },
    sizes__sixteenByNineMedium__height: {
      __type: 'Volume_VolumePdf_sizes__sixteenByNineMedium__height_operator',
    },
    sizes__sixteenByNineMedium__mimeType: {
      __type: 'Volume_VolumePdf_sizes__sixteenByNineMedium__mimeType_operator',
    },
    sizes__sixteenByNineMedium__url: {
      __type: 'Volume_VolumePdf_sizes__sixteenByNineMedium__url_operator',
    },
    sizes__sixteenByNineMedium__width: {
      __type: 'Volume_VolumePdf_sizes__sixteenByNineMedium__width_operator',
    },
    sizes__thumbnail__filename: {
      __type: 'Volume_VolumePdf_sizes__thumbnail__filename_operator',
    },
    sizes__thumbnail__filesize: {
      __type: 'Volume_VolumePdf_sizes__thumbnail__filesize_operator',
    },
    sizes__thumbnail__height: {
      __type: 'Volume_VolumePdf_sizes__thumbnail__height_operator',
    },
    sizes__thumbnail__mimeType: {
      __type: 'Volume_VolumePdf_sizes__thumbnail__mimeType_operator',
    },
    sizes__thumbnail__url: {
      __type: 'Volume_VolumePdf_sizes__thumbnail__url_operator',
    },
    sizes__thumbnail__width: {
      __type: 'Volume_VolumePdf_sizes__thumbnail__width_operator',
    },
    updatedAt: { __type: 'Volume_VolumePdf_updatedAt_operator' },
    url: { __type: 'Volume_VolumePdf_url_operator' },
    width: { __type: 'Volume_VolumePdf_width_operator' },
  },
  Volume_VolumePdf_where_or: {
    alt: { __type: 'Volume_VolumePdf_alt_operator' },
    createdAt: { __type: 'Volume_VolumePdf_createdAt_operator' },
    filename: { __type: 'Volume_VolumePdf_filename_operator' },
    filesize: { __type: 'Volume_VolumePdf_filesize_operator' },
    height: { __type: 'Volume_VolumePdf_height_operator' },
    id: { __type: 'Volume_VolumePdf_id_operator' },
    mimeType: { __type: 'Volume_VolumePdf_mimeType_operator' },
    sizes__sixteenByNineMedium__filename: {
      __type: 'Volume_VolumePdf_sizes__sixteenByNineMedium__filename_operator',
    },
    sizes__sixteenByNineMedium__filesize: {
      __type: 'Volume_VolumePdf_sizes__sixteenByNineMedium__filesize_operator',
    },
    sizes__sixteenByNineMedium__height: {
      __type: 'Volume_VolumePdf_sizes__sixteenByNineMedium__height_operator',
    },
    sizes__sixteenByNineMedium__mimeType: {
      __type: 'Volume_VolumePdf_sizes__sixteenByNineMedium__mimeType_operator',
    },
    sizes__sixteenByNineMedium__url: {
      __type: 'Volume_VolumePdf_sizes__sixteenByNineMedium__url_operator',
    },
    sizes__sixteenByNineMedium__width: {
      __type: 'Volume_VolumePdf_sizes__sixteenByNineMedium__width_operator',
    },
    sizes__thumbnail__filename: {
      __type: 'Volume_VolumePdf_sizes__thumbnail__filename_operator',
    },
    sizes__thumbnail__filesize: {
      __type: 'Volume_VolumePdf_sizes__thumbnail__filesize_operator',
    },
    sizes__thumbnail__height: {
      __type: 'Volume_VolumePdf_sizes__thumbnail__height_operator',
    },
    sizes__thumbnail__mimeType: {
      __type: 'Volume_VolumePdf_sizes__thumbnail__mimeType_operator',
    },
    sizes__thumbnail__url: {
      __type: 'Volume_VolumePdf_sizes__thumbnail__url_operator',
    },
    sizes__thumbnail__width: {
      __type: 'Volume_VolumePdf_sizes__thumbnail__width_operator',
    },
    updatedAt: { __type: 'Volume_VolumePdf_updatedAt_operator' },
    url: { __type: 'Volume_VolumePdf_url_operator' },
    width: { __type: 'Volume_VolumePdf_width_operator' },
  },
  Volume_VolumePdf_width_operator: {
    equals: { __type: 'Float' },
    exists: { __type: 'Boolean' },
    greater_than: { __type: 'Float' },
    greater_than_equal: { __type: 'Float' },
    less_than: { __type: 'Float' },
    less_than_equal: { __type: 'Float' },
    not_equals: { __type: 'Float' },
  },
  Volume_about_operator: {
    contains: { __type: 'JSON' },
    equals: { __type: 'JSON' },
    exists: { __type: 'Boolean' },
    like: { __type: 'JSON' },
    not_equals: { __type: 'JSON' },
  },
  Volume_createdAt_operator: {
    equals: { __type: 'DateTime' },
    exists: { __type: 'Boolean' },
    greater_than: { __type: 'DateTime' },
    greater_than_equal: { __type: 'DateTime' },
    less_than: { __type: 'DateTime' },
    less_than_equal: { __type: 'DateTime' },
    like: { __type: 'DateTime' },
    not_equals: { __type: 'DateTime' },
  },
  Volume_id_operator: {
    all: { __type: '[String]' },
    contains: { __type: 'String' },
    equals: { __type: 'String' },
    exists: { __type: 'Boolean' },
    in: { __type: '[String]' },
    like: { __type: 'String' },
    not_equals: { __type: 'String' },
    not_in: { __type: '[String]' },
  },
  Volume_publishedDate_operator: {
    equals: { __type: 'DateTime' },
    exists: { __type: 'Boolean' },
    greater_than: { __type: 'DateTime' },
    greater_than_equal: { __type: 'DateTime' },
    less_than: { __type: 'DateTime' },
    less_than_equal: { __type: 'DateTime' },
    like: { __type: 'DateTime' },
    not_equals: { __type: 'DateTime' },
  },
  Volume_slug_operator: {
    all: { __type: '[String]' },
    contains: { __type: 'String' },
    equals: { __type: 'String' },
    exists: { __type: 'Boolean' },
    in: { __type: '[String]' },
    like: { __type: 'String' },
    not_equals: { __type: 'String' },
    not_in: { __type: '[String]' },
  },
  Volume_title_operator: {
    all: { __type: '[String]' },
    contains: { __type: 'String' },
    equals: { __type: 'String' },
    in: { __type: '[String]' },
    like: { __type: 'String' },
    not_equals: { __type: 'String' },
    not_in: { __type: '[String]' },
  },
  Volume_updatedAt_operator: {
    equals: { __type: 'DateTime' },
    exists: { __type: 'Boolean' },
    greater_than: { __type: 'DateTime' },
    greater_than_equal: { __type: 'DateTime' },
    less_than: { __type: 'DateTime' },
    less_than_equal: { __type: 'DateTime' },
    like: { __type: 'DateTime' },
    not_equals: { __type: 'DateTime' },
  },
  Volume_volumeCover_operator: {
    equals: { __type: 'String' },
    exists: { __type: 'Boolean' },
    not_equals: { __type: 'String' },
  },
  Volume_volumePdf_operator: {
    equals: { __type: 'String' },
    exists: { __type: 'Boolean' },
    not_equals: { __type: 'String' },
  },
  Volume_where: {
    AND: { __type: '[Volume_where_and]' },
    OR: { __type: '[Volume_where_or]' },
    about: { __type: 'Volume_about_operator' },
    createdAt: { __type: 'Volume_createdAt_operator' },
    id: { __type: 'Volume_id_operator' },
    publishedDate: { __type: 'Volume_publishedDate_operator' },
    slug: { __type: 'Volume_slug_operator' },
    title: { __type: 'Volume_title_operator' },
    updatedAt: { __type: 'Volume_updatedAt_operator' },
    volumeCover: { __type: 'Volume_volumeCover_operator' },
    volumePdf: { __type: 'Volume_volumePdf_operator' },
  },
  Volume_where_and: {
    about: { __type: 'Volume_about_operator' },
    createdAt: { __type: 'Volume_createdAt_operator' },
    id: { __type: 'Volume_id_operator' },
    publishedDate: { __type: 'Volume_publishedDate_operator' },
    slug: { __type: 'Volume_slug_operator' },
    title: { __type: 'Volume_title_operator' },
    updatedAt: { __type: 'Volume_updatedAt_operator' },
    volumeCover: { __type: 'Volume_volumeCover_operator' },
    volumePdf: { __type: 'Volume_volumePdf_operator' },
  },
  Volume_where_or: {
    about: { __type: 'Volume_about_operator' },
    createdAt: { __type: 'Volume_createdAt_operator' },
    id: { __type: 'Volume_id_operator' },
    publishedDate: { __type: 'Volume_publishedDate_operator' },
    slug: { __type: 'Volume_slug_operator' },
    title: { __type: 'Volume_title_operator' },
    updatedAt: { __type: 'Volume_updatedAt_operator' },
    volumeCover: { __type: 'Volume_volumeCover_operator' },
    volumePdf: { __type: 'Volume_volumePdf_operator' },
  },
  Volumes: {
    __typename: { __type: 'String!' },
    docs: { __type: '[Volume]' },
    hasNextPage: { __type: 'Boolean' },
    hasPrevPage: { __type: 'Boolean' },
    limit: { __type: 'Int' },
    nextPage: { __type: 'Int' },
    offset: { __type: 'Int' },
    page: { __type: 'Int' },
    pagingCounter: { __type: 'Int' },
    prevPage: { __type: 'Int' },
    totalDocs: { __type: 'Int' },
    totalPages: { __type: 'Int' },
  },
  VolumesCreateAccess: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
    where: { __type: 'JSONObject' },
  },
  VolumesCreateDocAccess: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
    where: { __type: 'JSONObject' },
  },
  VolumesDeleteAccess: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
    where: { __type: 'JSONObject' },
  },
  VolumesDeleteDocAccess: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
    where: { __type: 'JSONObject' },
  },
  VolumesDocAccessFields: {
    __typename: { __type: 'String!' },
    about: { __type: 'VolumesDocAccessFields_about' },
    createdAt: { __type: 'VolumesDocAccessFields_createdAt' },
    publishedDate: { __type: 'VolumesDocAccessFields_publishedDate' },
    slug: { __type: 'VolumesDocAccessFields_slug' },
    title: { __type: 'VolumesDocAccessFields_title' },
    updatedAt: { __type: 'VolumesDocAccessFields_updatedAt' },
    volumeCover: { __type: 'VolumesDocAccessFields_volumeCover' },
    volumePdf: { __type: 'VolumesDocAccessFields_volumePdf' },
  },
  VolumesDocAccessFields_about: {
    __typename: { __type: 'String!' },
    create: { __type: 'VolumesDocAccessFields_about_Create' },
    delete: { __type: 'VolumesDocAccessFields_about_Delete' },
    read: { __type: 'VolumesDocAccessFields_about_Read' },
    update: { __type: 'VolumesDocAccessFields_about_Update' },
  },
  VolumesDocAccessFields_about_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  VolumesDocAccessFields_about_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  VolumesDocAccessFields_about_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  VolumesDocAccessFields_about_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  VolumesDocAccessFields_createdAt: {
    __typename: { __type: 'String!' },
    create: { __type: 'VolumesDocAccessFields_createdAt_Create' },
    delete: { __type: 'VolumesDocAccessFields_createdAt_Delete' },
    read: { __type: 'VolumesDocAccessFields_createdAt_Read' },
    update: { __type: 'VolumesDocAccessFields_createdAt_Update' },
  },
  VolumesDocAccessFields_createdAt_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  VolumesDocAccessFields_createdAt_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  VolumesDocAccessFields_createdAt_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  VolumesDocAccessFields_createdAt_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  VolumesDocAccessFields_publishedDate: {
    __typename: { __type: 'String!' },
    create: { __type: 'VolumesDocAccessFields_publishedDate_Create' },
    delete: { __type: 'VolumesDocAccessFields_publishedDate_Delete' },
    read: { __type: 'VolumesDocAccessFields_publishedDate_Read' },
    update: { __type: 'VolumesDocAccessFields_publishedDate_Update' },
  },
  VolumesDocAccessFields_publishedDate_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  VolumesDocAccessFields_publishedDate_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  VolumesDocAccessFields_publishedDate_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  VolumesDocAccessFields_publishedDate_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  VolumesDocAccessFields_slug: {
    __typename: { __type: 'String!' },
    create: { __type: 'VolumesDocAccessFields_slug_Create' },
    delete: { __type: 'VolumesDocAccessFields_slug_Delete' },
    read: { __type: 'VolumesDocAccessFields_slug_Read' },
    update: { __type: 'VolumesDocAccessFields_slug_Update' },
  },
  VolumesDocAccessFields_slug_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  VolumesDocAccessFields_slug_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  VolumesDocAccessFields_slug_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  VolumesDocAccessFields_slug_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  VolumesDocAccessFields_title: {
    __typename: { __type: 'String!' },
    create: { __type: 'VolumesDocAccessFields_title_Create' },
    delete: { __type: 'VolumesDocAccessFields_title_Delete' },
    read: { __type: 'VolumesDocAccessFields_title_Read' },
    update: { __type: 'VolumesDocAccessFields_title_Update' },
  },
  VolumesDocAccessFields_title_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  VolumesDocAccessFields_title_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  VolumesDocAccessFields_title_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  VolumesDocAccessFields_title_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  VolumesDocAccessFields_updatedAt: {
    __typename: { __type: 'String!' },
    create: { __type: 'VolumesDocAccessFields_updatedAt_Create' },
    delete: { __type: 'VolumesDocAccessFields_updatedAt_Delete' },
    read: { __type: 'VolumesDocAccessFields_updatedAt_Read' },
    update: { __type: 'VolumesDocAccessFields_updatedAt_Update' },
  },
  VolumesDocAccessFields_updatedAt_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  VolumesDocAccessFields_updatedAt_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  VolumesDocAccessFields_updatedAt_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  VolumesDocAccessFields_updatedAt_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  VolumesDocAccessFields_volumeCover: {
    __typename: { __type: 'String!' },
    create: { __type: 'VolumesDocAccessFields_volumeCover_Create' },
    delete: { __type: 'VolumesDocAccessFields_volumeCover_Delete' },
    read: { __type: 'VolumesDocAccessFields_volumeCover_Read' },
    update: { __type: 'VolumesDocAccessFields_volumeCover_Update' },
  },
  VolumesDocAccessFields_volumeCover_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  VolumesDocAccessFields_volumeCover_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  VolumesDocAccessFields_volumeCover_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  VolumesDocAccessFields_volumeCover_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  VolumesDocAccessFields_volumePdf: {
    __typename: { __type: 'String!' },
    create: { __type: 'VolumesDocAccessFields_volumePdf_Create' },
    delete: { __type: 'VolumesDocAccessFields_volumePdf_Delete' },
    read: { __type: 'VolumesDocAccessFields_volumePdf_Read' },
    update: { __type: 'VolumesDocAccessFields_volumePdf_Update' },
  },
  VolumesDocAccessFields_volumePdf_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  VolumesDocAccessFields_volumePdf_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  VolumesDocAccessFields_volumePdf_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  VolumesDocAccessFields_volumePdf_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  VolumesFields: {
    __typename: { __type: 'String!' },
    about: { __type: 'VolumesFields_about' },
    createdAt: { __type: 'VolumesFields_createdAt' },
    publishedDate: { __type: 'VolumesFields_publishedDate' },
    slug: { __type: 'VolumesFields_slug' },
    title: { __type: 'VolumesFields_title' },
    updatedAt: { __type: 'VolumesFields_updatedAt' },
    volumeCover: { __type: 'VolumesFields_volumeCover' },
    volumePdf: { __type: 'VolumesFields_volumePdf' },
  },
  VolumesFields_about: {
    __typename: { __type: 'String!' },
    create: { __type: 'VolumesFields_about_Create' },
    delete: { __type: 'VolumesFields_about_Delete' },
    read: { __type: 'VolumesFields_about_Read' },
    update: { __type: 'VolumesFields_about_Update' },
  },
  VolumesFields_about_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  VolumesFields_about_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  VolumesFields_about_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  VolumesFields_about_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  VolumesFields_createdAt: {
    __typename: { __type: 'String!' },
    create: { __type: 'VolumesFields_createdAt_Create' },
    delete: { __type: 'VolumesFields_createdAt_Delete' },
    read: { __type: 'VolumesFields_createdAt_Read' },
    update: { __type: 'VolumesFields_createdAt_Update' },
  },
  VolumesFields_createdAt_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  VolumesFields_createdAt_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  VolumesFields_createdAt_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  VolumesFields_createdAt_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  VolumesFields_publishedDate: {
    __typename: { __type: 'String!' },
    create: { __type: 'VolumesFields_publishedDate_Create' },
    delete: { __type: 'VolumesFields_publishedDate_Delete' },
    read: { __type: 'VolumesFields_publishedDate_Read' },
    update: { __type: 'VolumesFields_publishedDate_Update' },
  },
  VolumesFields_publishedDate_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  VolumesFields_publishedDate_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  VolumesFields_publishedDate_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  VolumesFields_publishedDate_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  VolumesFields_slug: {
    __typename: { __type: 'String!' },
    create: { __type: 'VolumesFields_slug_Create' },
    delete: { __type: 'VolumesFields_slug_Delete' },
    read: { __type: 'VolumesFields_slug_Read' },
    update: { __type: 'VolumesFields_slug_Update' },
  },
  VolumesFields_slug_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  VolumesFields_slug_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  VolumesFields_slug_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  VolumesFields_slug_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  VolumesFields_title: {
    __typename: { __type: 'String!' },
    create: { __type: 'VolumesFields_title_Create' },
    delete: { __type: 'VolumesFields_title_Delete' },
    read: { __type: 'VolumesFields_title_Read' },
    update: { __type: 'VolumesFields_title_Update' },
  },
  VolumesFields_title_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  VolumesFields_title_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  VolumesFields_title_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  VolumesFields_title_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  VolumesFields_updatedAt: {
    __typename: { __type: 'String!' },
    create: { __type: 'VolumesFields_updatedAt_Create' },
    delete: { __type: 'VolumesFields_updatedAt_Delete' },
    read: { __type: 'VolumesFields_updatedAt_Read' },
    update: { __type: 'VolumesFields_updatedAt_Update' },
  },
  VolumesFields_updatedAt_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  VolumesFields_updatedAt_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  VolumesFields_updatedAt_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  VolumesFields_updatedAt_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  VolumesFields_volumeCover: {
    __typename: { __type: 'String!' },
    create: { __type: 'VolumesFields_volumeCover_Create' },
    delete: { __type: 'VolumesFields_volumeCover_Delete' },
    read: { __type: 'VolumesFields_volumeCover_Read' },
    update: { __type: 'VolumesFields_volumeCover_Update' },
  },
  VolumesFields_volumeCover_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  VolumesFields_volumeCover_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  VolumesFields_volumeCover_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  VolumesFields_volumeCover_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  VolumesFields_volumePdf: {
    __typename: { __type: 'String!' },
    create: { __type: 'VolumesFields_volumePdf_Create' },
    delete: { __type: 'VolumesFields_volumePdf_Delete' },
    read: { __type: 'VolumesFields_volumePdf_Read' },
    update: { __type: 'VolumesFields_volumePdf_Update' },
  },
  VolumesFields_volumePdf_Create: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  VolumesFields_volumePdf_Delete: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  VolumesFields_volumePdf_Read: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  VolumesFields_volumePdf_Update: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
  },
  VolumesReadAccess: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
    where: { __type: 'JSONObject' },
  },
  VolumesReadDocAccess: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
    where: { __type: 'JSONObject' },
  },
  VolumesUpdateAccess: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
    where: { __type: 'JSONObject' },
  },
  VolumesUpdateDocAccess: {
    __typename: { __type: 'String!' },
    permission: { __type: 'Boolean!' },
    where: { __type: 'JSONObject' },
  },
  allMedia: {
    __typename: { __type: 'String!' },
    docs: { __type: '[Media]' },
    hasNextPage: { __type: 'Boolean' },
    hasPrevPage: { __type: 'Boolean' },
    limit: { __type: 'Int' },
    nextPage: { __type: 'Int' },
    offset: { __type: 'Int' },
    page: { __type: 'Int' },
    pagingCounter: { __type: 'Int' },
    prevPage: { __type: 'Int' },
    totalDocs: { __type: 'Int' },
    totalPages: { __type: 'Int' },
  },
  allNews: {
    __typename: { __type: 'String!' },
    docs: { __type: '[News]' },
    hasNextPage: { __type: 'Boolean' },
    hasPrevPage: { __type: 'Boolean' },
    limit: { __type: 'Int' },
    nextPage: { __type: 'Int' },
    offset: { __type: 'Int' },
    page: { __type: 'Int' },
    pagingCounter: { __type: 'Int' },
    prevPage: { __type: 'Int' },
    totalDocs: { __type: 'Int' },
    totalPages: { __type: 'Int' },
  },
  mediaAccess: {
    __typename: { __type: 'String!' },
    create: { __type: 'MediaCreateAccess' },
    delete: { __type: 'MediaDeleteAccess' },
    fields: { __type: 'MediaFields' },
    read: { __type: 'MediaReadAccess' },
    update: { __type: 'MediaUpdateAccess' },
  },
  mediaDocAccess: {
    __typename: { __type: 'String!' },
    create: { __type: 'MediaCreateDocAccess' },
    delete: { __type: 'MediaDeleteDocAccess' },
    fields: { __type: 'MediaDocAccessFields' },
    read: { __type: 'MediaReadDocAccess' },
    update: { __type: 'MediaUpdateDocAccess' },
  },
  mutation: {
    __typename: { __type: 'String!' },
    createMedia: {
      __type: 'Media',
      __args: { data: 'mutationMediaInput!', draft: 'Boolean' },
    },
    createNews: {
      __type: 'News',
      __args: { data: 'mutationNewsInput!', draft: 'Boolean' },
    },
    createNewsTag: {
      __type: 'NewsTag',
      __args: { data: 'mutationNewsTagInput!', draft: 'Boolean' },
    },
    createPayloadPreference: {
      __type: 'PayloadPreference',
      __args: { data: 'mutationPayloadPreferenceInput!', draft: 'Boolean' },
    },
    createUser: {
      __type: 'User',
      __args: { data: 'mutationUserInput!', draft: 'Boolean' },
    },
    createVolume: {
      __type: 'Volume',
      __args: { data: 'mutationVolumeInput!', draft: 'Boolean' },
    },
    deleteMedia: { __type: 'Media', __args: { id: 'String!' } },
    deleteNews: { __type: 'News', __args: { id: 'String!' } },
    deleteNewsTag: { __type: 'NewsTag', __args: { id: 'String!' } },
    deletePayloadPreference: {
      __type: 'PayloadPreference',
      __args: { id: 'String!' },
    },
    deleteUser: { __type: 'User', __args: { id: 'String!' } },
    deleteVolume: { __type: 'Volume', __args: { id: 'String!' } },
    forgotPasswordUser: {
      __type: 'Boolean!',
      __args: { disableEmail: 'Boolean', email: 'String!', expiration: 'Int' },
    },
    loginUser: {
      __type: 'usersLoginResult',
      __args: { email: 'String', password: 'String' },
    },
    logoutUser: { __type: 'String' },
    refreshTokenUser: {
      __type: 'usersRefreshedUser',
      __args: { token: 'String' },
    },
    resetPasswordUser: {
      __type: 'usersResetPassword',
      __args: { password: 'String', token: 'String' },
    },
    unlockUser: { __type: 'Boolean!', __args: { email: 'String!' } },
    updateMedia: {
      __type: 'Media',
      __args: {
        autosave: 'Boolean',
        data: 'mutationMediaUpdateInput!',
        draft: 'Boolean',
        id: 'String!',
      },
    },
    updateNews: {
      __type: 'News',
      __args: {
        autosave: 'Boolean',
        data: 'mutationNewsUpdateInput!',
        draft: 'Boolean',
        id: 'String!',
      },
    },
    updateNewsTag: {
      __type: 'NewsTag',
      __args: {
        autosave: 'Boolean',
        data: 'mutationNewsTagUpdateInput!',
        draft: 'Boolean',
        id: 'String!',
      },
    },
    updatePayloadPreference: {
      __type: 'PayloadPreference',
      __args: {
        autosave: 'Boolean',
        data: 'mutationPayloadPreferenceUpdateInput!',
        draft: 'Boolean',
        id: 'String!',
      },
    },
    updateUser: {
      __type: 'User',
      __args: {
        autosave: 'Boolean',
        data: 'mutationUserUpdateInput!',
        draft: 'Boolean',
        id: 'String!',
      },
    },
    updateVolume: {
      __type: 'Volume',
      __args: {
        autosave: 'Boolean',
        data: 'mutationVolumeUpdateInput!',
        draft: 'Boolean',
        id: 'String!',
      },
    },
    verifyEmailUser: { __type: 'Boolean', __args: { token: 'String' } },
  },
  mutationMediaInput: {
    alt: { __type: 'String' },
    createdAt: { __type: 'String' },
    filename: { __type: 'String' },
    filesize: { __type: 'Float' },
    height: { __type: 'Float' },
    mimeType: { __type: 'String' },
    sizes: { __type: 'mutationMedia_SizesInput' },
    updatedAt: { __type: 'String' },
    url: { __type: 'String' },
    width: { __type: 'Float' },
  },
  mutationMediaUpdateInput: {
    alt: { __type: 'String' },
    createdAt: { __type: 'String' },
    filename: { __type: 'String' },
    filesize: { __type: 'Float' },
    height: { __type: 'Float' },
    mimeType: { __type: 'String' },
    sizes: { __type: 'mutationMediaUpdate_SizesInput' },
    updatedAt: { __type: 'String' },
    url: { __type: 'String' },
    width: { __type: 'Float' },
  },
  mutationMediaUpdate_SizesInput: {
    sixteenByNineMedium: {
      __type: 'mutationMediaUpdate_Sizes_SixteenByNineMediumInput',
    },
    thumbnail: { __type: 'mutationMediaUpdate_Sizes_ThumbnailInput' },
  },
  mutationMediaUpdate_Sizes_SixteenByNineMediumInput: {
    filename: { __type: 'String' },
    filesize: { __type: 'Float' },
    height: { __type: 'Float' },
    mimeType: { __type: 'String' },
    url: { __type: 'String' },
    width: { __type: 'Float' },
  },
  mutationMediaUpdate_Sizes_ThumbnailInput: {
    filename: { __type: 'String' },
    filesize: { __type: 'Float' },
    height: { __type: 'Float' },
    mimeType: { __type: 'String' },
    url: { __type: 'String' },
    width: { __type: 'Float' },
  },
  mutationMedia_SizesInput: {
    sixteenByNineMedium: {
      __type: 'mutationMedia_Sizes_SixteenByNineMediumInput',
    },
    thumbnail: { __type: 'mutationMedia_Sizes_ThumbnailInput' },
  },
  mutationMedia_Sizes_SixteenByNineMediumInput: {
    filename: { __type: 'String' },
    filesize: { __type: 'Float' },
    height: { __type: 'Float' },
    mimeType: { __type: 'String' },
    url: { __type: 'String' },
    width: { __type: 'Float' },
  },
  mutationMedia_Sizes_ThumbnailInput: {
    filename: { __type: 'String' },
    filesize: { __type: 'Float' },
    height: { __type: 'Float' },
    mimeType: { __type: 'String' },
    url: { __type: 'String' },
    width: { __type: 'Float' },
  },
  mutationNewsInput: {
    author: { __type: 'String' },
    content: { __type: 'JSON' },
    createdAt: { __type: 'String' },
    featureImage: { __type: 'String' },
    publishedDate: { __type: 'String' },
    readTime: { __type: 'Float' },
    slug: { __type: 'String' },
    status: { __type: 'News_status_MutationInput' },
    tags: { __type: '[String]' },
    title: { __type: 'String!' },
    updatedAt: { __type: 'String' },
  },
  mutationNewsTagInput: { name: { __type: 'String' } },
  mutationNewsTagUpdateInput: { name: { __type: 'String' } },
  mutationNewsUpdateInput: {
    author: { __type: 'String' },
    content: { __type: 'JSON' },
    createdAt: { __type: 'String' },
    featureImage: { __type: 'String' },
    publishedDate: { __type: 'String' },
    readTime: { __type: 'Float' },
    slug: { __type: 'String' },
    status: { __type: 'NewsUpdate_status_MutationInput' },
    tags: { __type: '[String]' },
    title: { __type: 'String' },
    updatedAt: { __type: 'String' },
  },
  mutationPayloadPreferenceInput: {
    createdAt: { __type: 'String' },
    key: { __type: 'String' },
    updatedAt: { __type: 'String' },
    user: { __type: 'PayloadPreference_UserRelationshipInput' },
    value: { __type: 'JSON' },
  },
  mutationPayloadPreferenceUpdateInput: {
    createdAt: { __type: 'String' },
    key: { __type: 'String' },
    updatedAt: { __type: 'String' },
    user: { __type: 'PayloadPreferenceUpdate_UserRelationshipInput' },
    value: { __type: 'JSON' },
  },
  mutationUserInput: {
    _verificationToken: { __type: 'String' },
    _verified: { __type: 'Boolean' },
    avatarImage: { __type: 'String' },
    createdAt: { __type: 'String' },
    email: { __type: 'String!' },
    hash: { __type: 'String' },
    lockUntil: { __type: 'String' },
    loginAttempts: { __type: 'Float' },
    name: { __type: 'String' },
    password: { __type: 'String!' },
    resetPasswordExpiration: { __type: 'String' },
    resetPasswordToken: { __type: 'String' },
    role: { __type: 'User_role_MutationInput!' },
    salt: { __type: 'String' },
    updatedAt: { __type: 'String' },
  },
  mutationUserUpdateInput: {
    _verificationToken: { __type: 'String' },
    _verified: { __type: 'Boolean' },
    avatarImage: { __type: 'String' },
    createdAt: { __type: 'String' },
    email: { __type: 'String' },
    hash: { __type: 'String' },
    lockUntil: { __type: 'String' },
    loginAttempts: { __type: 'Float' },
    name: { __type: 'String' },
    password: { __type: 'String' },
    resetPasswordExpiration: { __type: 'String' },
    resetPasswordToken: { __type: 'String' },
    role: { __type: 'UserUpdate_role_MutationInput' },
    salt: { __type: 'String' },
    updatedAt: { __type: 'String' },
  },
  mutationVolumeInput: {
    about: { __type: 'JSON' },
    createdAt: { __type: 'String' },
    publishedDate: { __type: 'String' },
    slug: { __type: 'String' },
    title: { __type: 'String!' },
    updatedAt: { __type: 'String' },
    volumeCover: { __type: 'String' },
    volumePdf: { __type: 'String' },
  },
  mutationVolumeUpdateInput: {
    about: { __type: 'JSON' },
    createdAt: { __type: 'String' },
    publishedDate: { __type: 'String' },
    slug: { __type: 'String' },
    title: { __type: 'String' },
    updatedAt: { __type: 'String' },
    volumeCover: { __type: 'String' },
    volumePdf: { __type: 'String' },
  },
  newsAccess: {
    __typename: { __type: 'String!' },
    create: { __type: 'NewsCreateAccess' },
    delete: { __type: 'NewsDeleteAccess' },
    fields: { __type: 'NewsFields' },
    read: { __type: 'NewsReadAccess' },
    update: { __type: 'NewsUpdateAccess' },
  },
  newsDocAccess: {
    __typename: { __type: 'String!' },
    create: { __type: 'NewsCreateDocAccess' },
    delete: { __type: 'NewsDeleteDocAccess' },
    fields: { __type: 'NewsDocAccessFields' },
    read: { __type: 'NewsReadDocAccess' },
    update: { __type: 'NewsUpdateDocAccess' },
  },
  news_tagsAccess: {
    __typename: { __type: 'String!' },
    create: { __type: 'NewsTagsCreateAccess' },
    delete: { __type: 'NewsTagsDeleteAccess' },
    fields: { __type: 'NewsTagsFields' },
    read: { __type: 'NewsTagsReadAccess' },
    update: { __type: 'NewsTagsUpdateAccess' },
  },
  news_tagsDocAccess: {
    __typename: { __type: 'String!' },
    create: { __type: 'NewsTagsCreateDocAccess' },
    delete: { __type: 'NewsTagsDeleteDocAccess' },
    fields: { __type: 'NewsTagsDocAccessFields' },
    read: { __type: 'NewsTagsReadDocAccess' },
    update: { __type: 'NewsTagsUpdateDocAccess' },
  },
  payload_preferencesAccess: {
    __typename: { __type: 'String!' },
    create: { __type: 'PayloadPreferencesCreateAccess' },
    delete: { __type: 'PayloadPreferencesDeleteAccess' },
    fields: { __type: 'PayloadPreferencesFields' },
    read: { __type: 'PayloadPreferencesReadAccess' },
    update: { __type: 'PayloadPreferencesUpdateAccess' },
  },
  payload_preferencesDocAccess: {
    __typename: { __type: 'String!' },
    create: { __type: 'PayloadPreferencesCreateDocAccess' },
    delete: { __type: 'PayloadPreferencesDeleteDocAccess' },
    fields: { __type: 'PayloadPreferencesDocAccessFields' },
    read: { __type: 'PayloadPreferencesReadDocAccess' },
    update: { __type: 'PayloadPreferencesUpdateDocAccess' },
  },
  query: {
    __typename: { __type: 'String!' },
    Access: { __type: 'Access' },
    Media: { __type: 'Media', __args: { draft: 'Boolean', id: 'String!' } },
    News: { __type: 'News', __args: { draft: 'Boolean', id: 'String!' } },
    NewsTag: { __type: 'NewsTag', __args: { draft: 'Boolean', id: 'String!' } },
    NewsTags: {
      __type: 'NewsTags',
      __args: {
        draft: 'Boolean',
        limit: 'Int',
        page: 'Int',
        sort: 'String',
        where: 'NewsTag_where',
      },
    },
    PayloadPreference: {
      __type: 'PayloadPreference',
      __args: { draft: 'Boolean', id: 'String!' },
    },
    PayloadPreferences: {
      __type: 'PayloadPreferences',
      __args: {
        draft: 'Boolean',
        limit: 'Int',
        page: 'Int',
        sort: 'String',
        where: 'PayloadPreference_where',
      },
    },
    User: { __type: 'User', __args: { draft: 'Boolean', id: 'String!' } },
    Users: {
      __type: 'Users',
      __args: {
        draft: 'Boolean',
        limit: 'Int',
        page: 'Int',
        sort: 'String',
        where: 'User_where',
      },
    },
    Volume: { __type: 'Volume', __args: { draft: 'Boolean', id: 'String!' } },
    Volumes: {
      __type: 'Volumes',
      __args: {
        draft: 'Boolean',
        limit: 'Int',
        page: 'Int',
        sort: 'String',
        where: 'Volume_where',
      },
    },
    allMedia: {
      __type: 'allMedia',
      __args: {
        draft: 'Boolean',
        limit: 'Int',
        page: 'Int',
        sort: 'String',
        where: 'Media_where',
      },
    },
    allNews: {
      __type: 'allNews',
      __args: {
        draft: 'Boolean',
        limit: 'Int',
        page: 'Int',
        sort: 'String',
        where: 'News_where',
      },
    },
    docAccessMedia: { __type: 'mediaDocAccess', __args: { id: 'String!' } },
    docAccessNews: { __type: 'newsDocAccess', __args: { id: 'String!' } },
    docAccessNewsTag: {
      __type: 'news_tagsDocAccess',
      __args: { id: 'String!' },
    },
    docAccessPayloadPreference: {
      __type: 'payload_preferencesDocAccess',
      __args: { id: 'String!' },
    },
    docAccessUser: { __type: 'usersDocAccess', __args: { id: 'String!' } },
    docAccessVolume: { __type: 'volumesDocAccess', __args: { id: 'String!' } },
    initializedUser: { __type: 'Boolean' },
    meUser: { __type: 'usersMe' },
  },
  subscription: {},
  usersAccess: {
    __typename: { __type: 'String!' },
    create: { __type: 'UsersCreateAccess' },
    delete: { __type: 'UsersDeleteAccess' },
    fields: { __type: 'UsersFields' },
    read: { __type: 'UsersReadAccess' },
    unlock: { __type: 'UsersUnlockAccess' },
    update: { __type: 'UsersUpdateAccess' },
  },
  usersDocAccess: {
    __typename: { __type: 'String!' },
    create: { __type: 'UsersCreateDocAccess' },
    delete: { __type: 'UsersDeleteDocAccess' },
    fields: { __type: 'UsersDocAccessFields' },
    read: { __type: 'UsersReadDocAccess' },
    unlock: { __type: 'UsersUnlockDocAccess' },
    update: { __type: 'UsersUpdateDocAccess' },
  },
  usersJWT: {
    __typename: { __type: 'String!' },
    collection: { __type: 'String!' },
    email: { __type: 'EmailAddress!' },
  },
  usersLoginResult: {
    __typename: { __type: 'String!' },
    exp: { __type: 'Int' },
    token: { __type: 'String' },
    user: { __type: 'User' },
  },
  usersMe: {
    __typename: { __type: 'String!' },
    collection: { __type: 'String' },
    exp: { __type: 'Int' },
    token: { __type: 'String' },
    user: { __type: 'User' },
  },
  usersRefreshedUser: {
    __typename: { __type: 'String!' },
    exp: { __type: 'Int' },
    refreshedToken: { __type: 'String' },
    user: { __type: 'usersJWT' },
  },
  usersResetPassword: {
    __typename: { __type: 'String!' },
    token: { __type: 'String' },
    user: { __type: 'User' },
  },
  volumesAccess: {
    __typename: { __type: 'String!' },
    create: { __type: 'VolumesCreateAccess' },
    delete: { __type: 'VolumesDeleteAccess' },
    fields: { __type: 'VolumesFields' },
    read: { __type: 'VolumesReadAccess' },
    update: { __type: 'VolumesUpdateAccess' },
  },
  volumesDocAccess: {
    __typename: { __type: 'String!' },
    create: { __type: 'VolumesCreateDocAccess' },
    delete: { __type: 'VolumesDeleteDocAccess' },
    fields: { __type: 'VolumesDocAccessFields' },
    read: { __type: 'VolumesReadDocAccess' },
    update: { __type: 'VolumesUpdateDocAccess' },
  },
  [SchemaUnionsKey]: { PayloadPreference_User: ['User'] },
} as const;

export interface Access {
  __typename?: 'Access';
  canAccessAdmin: ScalarsEnums['Boolean'];
  media?: Maybe<mediaAccess>;
  news?: Maybe<newsAccess>;
  news_tags?: Maybe<news_tagsAccess>;
  payload_preferences?: Maybe<payload_preferencesAccess>;
  users?: Maybe<usersAccess>;
  volumes?: Maybe<volumesAccess>;
}

export interface Media {
  __typename?: 'Media';
  alt?: Maybe<ScalarsEnums['String']>;
  createdAt?: Maybe<ScalarsEnums['DateTime']>;
  filename?: Maybe<ScalarsEnums['String']>;
  filesize?: Maybe<ScalarsEnums['Float']>;
  height?: Maybe<ScalarsEnums['Float']>;
  id?: Maybe<ScalarsEnums['String']>;
  mimeType?: Maybe<ScalarsEnums['String']>;
  sizes?: Maybe<Media_Sizes>;
  updatedAt?: Maybe<ScalarsEnums['DateTime']>;
  url?: Maybe<ScalarsEnums['String']>;
  width?: Maybe<ScalarsEnums['Float']>;
}

export interface MediaCreateAccess {
  __typename?: 'MediaCreateAccess';
  permission: ScalarsEnums['Boolean'];
  where?: Maybe<ScalarsEnums['JSONObject']>;
}

export interface MediaCreateDocAccess {
  __typename?: 'MediaCreateDocAccess';
  permission: ScalarsEnums['Boolean'];
  where?: Maybe<ScalarsEnums['JSONObject']>;
}

export interface MediaDeleteAccess {
  __typename?: 'MediaDeleteAccess';
  permission: ScalarsEnums['Boolean'];
  where?: Maybe<ScalarsEnums['JSONObject']>;
}

export interface MediaDeleteDocAccess {
  __typename?: 'MediaDeleteDocAccess';
  permission: ScalarsEnums['Boolean'];
  where?: Maybe<ScalarsEnums['JSONObject']>;
}

export interface MediaDocAccessFields {
  __typename?: 'MediaDocAccessFields';
  alt?: Maybe<MediaDocAccessFields_alt>;
  createdAt?: Maybe<MediaDocAccessFields_createdAt>;
  filename?: Maybe<MediaDocAccessFields_filename>;
  filesize?: Maybe<MediaDocAccessFields_filesize>;
  height?: Maybe<MediaDocAccessFields_height>;
  mimeType?: Maybe<MediaDocAccessFields_mimeType>;
  sizes?: Maybe<MediaDocAccessFields_sizes>;
  updatedAt?: Maybe<MediaDocAccessFields_updatedAt>;
  url?: Maybe<MediaDocAccessFields_url>;
  width?: Maybe<MediaDocAccessFields_width>;
}

export interface MediaDocAccessFields_alt {
  __typename?: 'MediaDocAccessFields_alt';
  create?: Maybe<MediaDocAccessFields_alt_Create>;
  delete?: Maybe<MediaDocAccessFields_alt_Delete>;
  read?: Maybe<MediaDocAccessFields_alt_Read>;
  update?: Maybe<MediaDocAccessFields_alt_Update>;
}

export interface MediaDocAccessFields_alt_Create {
  __typename?: 'MediaDocAccessFields_alt_Create';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaDocAccessFields_alt_Delete {
  __typename?: 'MediaDocAccessFields_alt_Delete';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaDocAccessFields_alt_Read {
  __typename?: 'MediaDocAccessFields_alt_Read';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaDocAccessFields_alt_Update {
  __typename?: 'MediaDocAccessFields_alt_Update';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaDocAccessFields_createdAt {
  __typename?: 'MediaDocAccessFields_createdAt';
  create?: Maybe<MediaDocAccessFields_createdAt_Create>;
  delete?: Maybe<MediaDocAccessFields_createdAt_Delete>;
  read?: Maybe<MediaDocAccessFields_createdAt_Read>;
  update?: Maybe<MediaDocAccessFields_createdAt_Update>;
}

export interface MediaDocAccessFields_createdAt_Create {
  __typename?: 'MediaDocAccessFields_createdAt_Create';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaDocAccessFields_createdAt_Delete {
  __typename?: 'MediaDocAccessFields_createdAt_Delete';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaDocAccessFields_createdAt_Read {
  __typename?: 'MediaDocAccessFields_createdAt_Read';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaDocAccessFields_createdAt_Update {
  __typename?: 'MediaDocAccessFields_createdAt_Update';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaDocAccessFields_filename {
  __typename?: 'MediaDocAccessFields_filename';
  create?: Maybe<MediaDocAccessFields_filename_Create>;
  delete?: Maybe<MediaDocAccessFields_filename_Delete>;
  read?: Maybe<MediaDocAccessFields_filename_Read>;
  update?: Maybe<MediaDocAccessFields_filename_Update>;
}

export interface MediaDocAccessFields_filename_Create {
  __typename?: 'MediaDocAccessFields_filename_Create';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaDocAccessFields_filename_Delete {
  __typename?: 'MediaDocAccessFields_filename_Delete';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaDocAccessFields_filename_Read {
  __typename?: 'MediaDocAccessFields_filename_Read';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaDocAccessFields_filename_Update {
  __typename?: 'MediaDocAccessFields_filename_Update';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaDocAccessFields_filesize {
  __typename?: 'MediaDocAccessFields_filesize';
  create?: Maybe<MediaDocAccessFields_filesize_Create>;
  delete?: Maybe<MediaDocAccessFields_filesize_Delete>;
  read?: Maybe<MediaDocAccessFields_filesize_Read>;
  update?: Maybe<MediaDocAccessFields_filesize_Update>;
}

export interface MediaDocAccessFields_filesize_Create {
  __typename?: 'MediaDocAccessFields_filesize_Create';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaDocAccessFields_filesize_Delete {
  __typename?: 'MediaDocAccessFields_filesize_Delete';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaDocAccessFields_filesize_Read {
  __typename?: 'MediaDocAccessFields_filesize_Read';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaDocAccessFields_filesize_Update {
  __typename?: 'MediaDocAccessFields_filesize_Update';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaDocAccessFields_height {
  __typename?: 'MediaDocAccessFields_height';
  create?: Maybe<MediaDocAccessFields_height_Create>;
  delete?: Maybe<MediaDocAccessFields_height_Delete>;
  read?: Maybe<MediaDocAccessFields_height_Read>;
  update?: Maybe<MediaDocAccessFields_height_Update>;
}

export interface MediaDocAccessFields_height_Create {
  __typename?: 'MediaDocAccessFields_height_Create';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaDocAccessFields_height_Delete {
  __typename?: 'MediaDocAccessFields_height_Delete';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaDocAccessFields_height_Read {
  __typename?: 'MediaDocAccessFields_height_Read';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaDocAccessFields_height_Update {
  __typename?: 'MediaDocAccessFields_height_Update';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaDocAccessFields_mimeType {
  __typename?: 'MediaDocAccessFields_mimeType';
  create?: Maybe<MediaDocAccessFields_mimeType_Create>;
  delete?: Maybe<MediaDocAccessFields_mimeType_Delete>;
  read?: Maybe<MediaDocAccessFields_mimeType_Read>;
  update?: Maybe<MediaDocAccessFields_mimeType_Update>;
}

export interface MediaDocAccessFields_mimeType_Create {
  __typename?: 'MediaDocAccessFields_mimeType_Create';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaDocAccessFields_mimeType_Delete {
  __typename?: 'MediaDocAccessFields_mimeType_Delete';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaDocAccessFields_mimeType_Read {
  __typename?: 'MediaDocAccessFields_mimeType_Read';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaDocAccessFields_mimeType_Update {
  __typename?: 'MediaDocAccessFields_mimeType_Update';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaDocAccessFields_sizes {
  __typename?: 'MediaDocAccessFields_sizes';
  create?: Maybe<MediaDocAccessFields_sizes_Create>;
  delete?: Maybe<MediaDocAccessFields_sizes_Delete>;
  fields?: Maybe<MediaDocAccessFields_sizes_Fields>;
  read?: Maybe<MediaDocAccessFields_sizes_Read>;
  update?: Maybe<MediaDocAccessFields_sizes_Update>;
}

export interface MediaDocAccessFields_sizes_Create {
  __typename?: 'MediaDocAccessFields_sizes_Create';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaDocAccessFields_sizes_Delete {
  __typename?: 'MediaDocAccessFields_sizes_Delete';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaDocAccessFields_sizes_Fields {
  __typename?: 'MediaDocAccessFields_sizes_Fields';
  sixteenByNineMedium?: Maybe<MediaDocAccessFields_sizes_sixteenByNineMedium>;
  thumbnail?: Maybe<MediaDocAccessFields_sizes_thumbnail>;
}

export interface MediaDocAccessFields_sizes_Read {
  __typename?: 'MediaDocAccessFields_sizes_Read';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaDocAccessFields_sizes_Update {
  __typename?: 'MediaDocAccessFields_sizes_Update';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaDocAccessFields_sizes_sixteenByNineMedium {
  __typename?: 'MediaDocAccessFields_sizes_sixteenByNineMedium';
  create?: Maybe<MediaDocAccessFields_sizes_sixteenByNineMedium_Create>;
  delete?: Maybe<MediaDocAccessFields_sizes_sixteenByNineMedium_Delete>;
  fields?: Maybe<MediaDocAccessFields_sizes_sixteenByNineMedium_Fields>;
  read?: Maybe<MediaDocAccessFields_sizes_sixteenByNineMedium_Read>;
  update?: Maybe<MediaDocAccessFields_sizes_sixteenByNineMedium_Update>;
}

export interface MediaDocAccessFields_sizes_sixteenByNineMedium_Create {
  __typename?: 'MediaDocAccessFields_sizes_sixteenByNineMedium_Create';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaDocAccessFields_sizes_sixteenByNineMedium_Delete {
  __typename?: 'MediaDocAccessFields_sizes_sixteenByNineMedium_Delete';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaDocAccessFields_sizes_sixteenByNineMedium_Fields {
  __typename?: 'MediaDocAccessFields_sizes_sixteenByNineMedium_Fields';
  filename?: Maybe<MediaDocAccessFields_sizes_sixteenByNineMedium_filename>;
  filesize?: Maybe<MediaDocAccessFields_sizes_sixteenByNineMedium_filesize>;
  height?: Maybe<MediaDocAccessFields_sizes_sixteenByNineMedium_height>;
  mimeType?: Maybe<MediaDocAccessFields_sizes_sixteenByNineMedium_mimeType>;
  url?: Maybe<MediaDocAccessFields_sizes_sixteenByNineMedium_url>;
  width?: Maybe<MediaDocAccessFields_sizes_sixteenByNineMedium_width>;
}

export interface MediaDocAccessFields_sizes_sixteenByNineMedium_Read {
  __typename?: 'MediaDocAccessFields_sizes_sixteenByNineMedium_Read';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaDocAccessFields_sizes_sixteenByNineMedium_Update {
  __typename?: 'MediaDocAccessFields_sizes_sixteenByNineMedium_Update';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaDocAccessFields_sizes_sixteenByNineMedium_filename {
  __typename?: 'MediaDocAccessFields_sizes_sixteenByNineMedium_filename';
  create?: Maybe<MediaDocAccessFields_sizes_sixteenByNineMedium_filename_Create>;
  delete?: Maybe<MediaDocAccessFields_sizes_sixteenByNineMedium_filename_Delete>;
  read?: Maybe<MediaDocAccessFields_sizes_sixteenByNineMedium_filename_Read>;
  update?: Maybe<MediaDocAccessFields_sizes_sixteenByNineMedium_filename_Update>;
}

export interface MediaDocAccessFields_sizes_sixteenByNineMedium_filename_Create {
  __typename?: 'MediaDocAccessFields_sizes_sixteenByNineMedium_filename_Create';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaDocAccessFields_sizes_sixteenByNineMedium_filename_Delete {
  __typename?: 'MediaDocAccessFields_sizes_sixteenByNineMedium_filename_Delete';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaDocAccessFields_sizes_sixteenByNineMedium_filename_Read {
  __typename?: 'MediaDocAccessFields_sizes_sixteenByNineMedium_filename_Read';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaDocAccessFields_sizes_sixteenByNineMedium_filename_Update {
  __typename?: 'MediaDocAccessFields_sizes_sixteenByNineMedium_filename_Update';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaDocAccessFields_sizes_sixteenByNineMedium_filesize {
  __typename?: 'MediaDocAccessFields_sizes_sixteenByNineMedium_filesize';
  create?: Maybe<MediaDocAccessFields_sizes_sixteenByNineMedium_filesize_Create>;
  delete?: Maybe<MediaDocAccessFields_sizes_sixteenByNineMedium_filesize_Delete>;
  read?: Maybe<MediaDocAccessFields_sizes_sixteenByNineMedium_filesize_Read>;
  update?: Maybe<MediaDocAccessFields_sizes_sixteenByNineMedium_filesize_Update>;
}

export interface MediaDocAccessFields_sizes_sixteenByNineMedium_filesize_Create {
  __typename?: 'MediaDocAccessFields_sizes_sixteenByNineMedium_filesize_Create';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaDocAccessFields_sizes_sixteenByNineMedium_filesize_Delete {
  __typename?: 'MediaDocAccessFields_sizes_sixteenByNineMedium_filesize_Delete';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaDocAccessFields_sizes_sixteenByNineMedium_filesize_Read {
  __typename?: 'MediaDocAccessFields_sizes_sixteenByNineMedium_filesize_Read';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaDocAccessFields_sizes_sixteenByNineMedium_filesize_Update {
  __typename?: 'MediaDocAccessFields_sizes_sixteenByNineMedium_filesize_Update';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaDocAccessFields_sizes_sixteenByNineMedium_height {
  __typename?: 'MediaDocAccessFields_sizes_sixteenByNineMedium_height';
  create?: Maybe<MediaDocAccessFields_sizes_sixteenByNineMedium_height_Create>;
  delete?: Maybe<MediaDocAccessFields_sizes_sixteenByNineMedium_height_Delete>;
  read?: Maybe<MediaDocAccessFields_sizes_sixteenByNineMedium_height_Read>;
  update?: Maybe<MediaDocAccessFields_sizes_sixteenByNineMedium_height_Update>;
}

export interface MediaDocAccessFields_sizes_sixteenByNineMedium_height_Create {
  __typename?: 'MediaDocAccessFields_sizes_sixteenByNineMedium_height_Create';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaDocAccessFields_sizes_sixteenByNineMedium_height_Delete {
  __typename?: 'MediaDocAccessFields_sizes_sixteenByNineMedium_height_Delete';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaDocAccessFields_sizes_sixteenByNineMedium_height_Read {
  __typename?: 'MediaDocAccessFields_sizes_sixteenByNineMedium_height_Read';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaDocAccessFields_sizes_sixteenByNineMedium_height_Update {
  __typename?: 'MediaDocAccessFields_sizes_sixteenByNineMedium_height_Update';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaDocAccessFields_sizes_sixteenByNineMedium_mimeType {
  __typename?: 'MediaDocAccessFields_sizes_sixteenByNineMedium_mimeType';
  create?: Maybe<MediaDocAccessFields_sizes_sixteenByNineMedium_mimeType_Create>;
  delete?: Maybe<MediaDocAccessFields_sizes_sixteenByNineMedium_mimeType_Delete>;
  read?: Maybe<MediaDocAccessFields_sizes_sixteenByNineMedium_mimeType_Read>;
  update?: Maybe<MediaDocAccessFields_sizes_sixteenByNineMedium_mimeType_Update>;
}

export interface MediaDocAccessFields_sizes_sixteenByNineMedium_mimeType_Create {
  __typename?: 'MediaDocAccessFields_sizes_sixteenByNineMedium_mimeType_Create';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaDocAccessFields_sizes_sixteenByNineMedium_mimeType_Delete {
  __typename?: 'MediaDocAccessFields_sizes_sixteenByNineMedium_mimeType_Delete';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaDocAccessFields_sizes_sixteenByNineMedium_mimeType_Read {
  __typename?: 'MediaDocAccessFields_sizes_sixteenByNineMedium_mimeType_Read';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaDocAccessFields_sizes_sixteenByNineMedium_mimeType_Update {
  __typename?: 'MediaDocAccessFields_sizes_sixteenByNineMedium_mimeType_Update';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaDocAccessFields_sizes_sixteenByNineMedium_url {
  __typename?: 'MediaDocAccessFields_sizes_sixteenByNineMedium_url';
  create?: Maybe<MediaDocAccessFields_sizes_sixteenByNineMedium_url_Create>;
  delete?: Maybe<MediaDocAccessFields_sizes_sixteenByNineMedium_url_Delete>;
  read?: Maybe<MediaDocAccessFields_sizes_sixteenByNineMedium_url_Read>;
  update?: Maybe<MediaDocAccessFields_sizes_sixteenByNineMedium_url_Update>;
}

export interface MediaDocAccessFields_sizes_sixteenByNineMedium_url_Create {
  __typename?: 'MediaDocAccessFields_sizes_sixteenByNineMedium_url_Create';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaDocAccessFields_sizes_sixteenByNineMedium_url_Delete {
  __typename?: 'MediaDocAccessFields_sizes_sixteenByNineMedium_url_Delete';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaDocAccessFields_sizes_sixteenByNineMedium_url_Read {
  __typename?: 'MediaDocAccessFields_sizes_sixteenByNineMedium_url_Read';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaDocAccessFields_sizes_sixteenByNineMedium_url_Update {
  __typename?: 'MediaDocAccessFields_sizes_sixteenByNineMedium_url_Update';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaDocAccessFields_sizes_sixteenByNineMedium_width {
  __typename?: 'MediaDocAccessFields_sizes_sixteenByNineMedium_width';
  create?: Maybe<MediaDocAccessFields_sizes_sixteenByNineMedium_width_Create>;
  delete?: Maybe<MediaDocAccessFields_sizes_sixteenByNineMedium_width_Delete>;
  read?: Maybe<MediaDocAccessFields_sizes_sixteenByNineMedium_width_Read>;
  update?: Maybe<MediaDocAccessFields_sizes_sixteenByNineMedium_width_Update>;
}

export interface MediaDocAccessFields_sizes_sixteenByNineMedium_width_Create {
  __typename?: 'MediaDocAccessFields_sizes_sixteenByNineMedium_width_Create';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaDocAccessFields_sizes_sixteenByNineMedium_width_Delete {
  __typename?: 'MediaDocAccessFields_sizes_sixteenByNineMedium_width_Delete';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaDocAccessFields_sizes_sixteenByNineMedium_width_Read {
  __typename?: 'MediaDocAccessFields_sizes_sixteenByNineMedium_width_Read';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaDocAccessFields_sizes_sixteenByNineMedium_width_Update {
  __typename?: 'MediaDocAccessFields_sizes_sixteenByNineMedium_width_Update';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaDocAccessFields_sizes_thumbnail {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail';
  create?: Maybe<MediaDocAccessFields_sizes_thumbnail_Create>;
  delete?: Maybe<MediaDocAccessFields_sizes_thumbnail_Delete>;
  fields?: Maybe<MediaDocAccessFields_sizes_thumbnail_Fields>;
  read?: Maybe<MediaDocAccessFields_sizes_thumbnail_Read>;
  update?: Maybe<MediaDocAccessFields_sizes_thumbnail_Update>;
}

export interface MediaDocAccessFields_sizes_thumbnail_Create {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_Create';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaDocAccessFields_sizes_thumbnail_Delete {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_Delete';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaDocAccessFields_sizes_thumbnail_Fields {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_Fields';
  filename?: Maybe<MediaDocAccessFields_sizes_thumbnail_filename>;
  filesize?: Maybe<MediaDocAccessFields_sizes_thumbnail_filesize>;
  height?: Maybe<MediaDocAccessFields_sizes_thumbnail_height>;
  mimeType?: Maybe<MediaDocAccessFields_sizes_thumbnail_mimeType>;
  url?: Maybe<MediaDocAccessFields_sizes_thumbnail_url>;
  width?: Maybe<MediaDocAccessFields_sizes_thumbnail_width>;
}

export interface MediaDocAccessFields_sizes_thumbnail_Read {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_Read';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaDocAccessFields_sizes_thumbnail_Update {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_Update';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaDocAccessFields_sizes_thumbnail_filename {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_filename';
  create?: Maybe<MediaDocAccessFields_sizes_thumbnail_filename_Create>;
  delete?: Maybe<MediaDocAccessFields_sizes_thumbnail_filename_Delete>;
  read?: Maybe<MediaDocAccessFields_sizes_thumbnail_filename_Read>;
  update?: Maybe<MediaDocAccessFields_sizes_thumbnail_filename_Update>;
}

export interface MediaDocAccessFields_sizes_thumbnail_filename_Create {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_filename_Create';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaDocAccessFields_sizes_thumbnail_filename_Delete {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_filename_Delete';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaDocAccessFields_sizes_thumbnail_filename_Read {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_filename_Read';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaDocAccessFields_sizes_thumbnail_filename_Update {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_filename_Update';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaDocAccessFields_sizes_thumbnail_filesize {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_filesize';
  create?: Maybe<MediaDocAccessFields_sizes_thumbnail_filesize_Create>;
  delete?: Maybe<MediaDocAccessFields_sizes_thumbnail_filesize_Delete>;
  read?: Maybe<MediaDocAccessFields_sizes_thumbnail_filesize_Read>;
  update?: Maybe<MediaDocAccessFields_sizes_thumbnail_filesize_Update>;
}

export interface MediaDocAccessFields_sizes_thumbnail_filesize_Create {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_filesize_Create';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaDocAccessFields_sizes_thumbnail_filesize_Delete {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_filesize_Delete';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaDocAccessFields_sizes_thumbnail_filesize_Read {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_filesize_Read';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaDocAccessFields_sizes_thumbnail_filesize_Update {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_filesize_Update';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaDocAccessFields_sizes_thumbnail_height {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_height';
  create?: Maybe<MediaDocAccessFields_sizes_thumbnail_height_Create>;
  delete?: Maybe<MediaDocAccessFields_sizes_thumbnail_height_Delete>;
  read?: Maybe<MediaDocAccessFields_sizes_thumbnail_height_Read>;
  update?: Maybe<MediaDocAccessFields_sizes_thumbnail_height_Update>;
}

export interface MediaDocAccessFields_sizes_thumbnail_height_Create {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_height_Create';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaDocAccessFields_sizes_thumbnail_height_Delete {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_height_Delete';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaDocAccessFields_sizes_thumbnail_height_Read {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_height_Read';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaDocAccessFields_sizes_thumbnail_height_Update {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_height_Update';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaDocAccessFields_sizes_thumbnail_mimeType {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_mimeType';
  create?: Maybe<MediaDocAccessFields_sizes_thumbnail_mimeType_Create>;
  delete?: Maybe<MediaDocAccessFields_sizes_thumbnail_mimeType_Delete>;
  read?: Maybe<MediaDocAccessFields_sizes_thumbnail_mimeType_Read>;
  update?: Maybe<MediaDocAccessFields_sizes_thumbnail_mimeType_Update>;
}

export interface MediaDocAccessFields_sizes_thumbnail_mimeType_Create {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_mimeType_Create';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaDocAccessFields_sizes_thumbnail_mimeType_Delete {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_mimeType_Delete';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaDocAccessFields_sizes_thumbnail_mimeType_Read {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_mimeType_Read';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaDocAccessFields_sizes_thumbnail_mimeType_Update {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_mimeType_Update';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaDocAccessFields_sizes_thumbnail_url {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_url';
  create?: Maybe<MediaDocAccessFields_sizes_thumbnail_url_Create>;
  delete?: Maybe<MediaDocAccessFields_sizes_thumbnail_url_Delete>;
  read?: Maybe<MediaDocAccessFields_sizes_thumbnail_url_Read>;
  update?: Maybe<MediaDocAccessFields_sizes_thumbnail_url_Update>;
}

export interface MediaDocAccessFields_sizes_thumbnail_url_Create {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_url_Create';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaDocAccessFields_sizes_thumbnail_url_Delete {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_url_Delete';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaDocAccessFields_sizes_thumbnail_url_Read {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_url_Read';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaDocAccessFields_sizes_thumbnail_url_Update {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_url_Update';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaDocAccessFields_sizes_thumbnail_width {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_width';
  create?: Maybe<MediaDocAccessFields_sizes_thumbnail_width_Create>;
  delete?: Maybe<MediaDocAccessFields_sizes_thumbnail_width_Delete>;
  read?: Maybe<MediaDocAccessFields_sizes_thumbnail_width_Read>;
  update?: Maybe<MediaDocAccessFields_sizes_thumbnail_width_Update>;
}

export interface MediaDocAccessFields_sizes_thumbnail_width_Create {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_width_Create';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaDocAccessFields_sizes_thumbnail_width_Delete {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_width_Delete';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaDocAccessFields_sizes_thumbnail_width_Read {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_width_Read';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaDocAccessFields_sizes_thumbnail_width_Update {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_width_Update';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaDocAccessFields_updatedAt {
  __typename?: 'MediaDocAccessFields_updatedAt';
  create?: Maybe<MediaDocAccessFields_updatedAt_Create>;
  delete?: Maybe<MediaDocAccessFields_updatedAt_Delete>;
  read?: Maybe<MediaDocAccessFields_updatedAt_Read>;
  update?: Maybe<MediaDocAccessFields_updatedAt_Update>;
}

export interface MediaDocAccessFields_updatedAt_Create {
  __typename?: 'MediaDocAccessFields_updatedAt_Create';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaDocAccessFields_updatedAt_Delete {
  __typename?: 'MediaDocAccessFields_updatedAt_Delete';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaDocAccessFields_updatedAt_Read {
  __typename?: 'MediaDocAccessFields_updatedAt_Read';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaDocAccessFields_updatedAt_Update {
  __typename?: 'MediaDocAccessFields_updatedAt_Update';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaDocAccessFields_url {
  __typename?: 'MediaDocAccessFields_url';
  create?: Maybe<MediaDocAccessFields_url_Create>;
  delete?: Maybe<MediaDocAccessFields_url_Delete>;
  read?: Maybe<MediaDocAccessFields_url_Read>;
  update?: Maybe<MediaDocAccessFields_url_Update>;
}

export interface MediaDocAccessFields_url_Create {
  __typename?: 'MediaDocAccessFields_url_Create';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaDocAccessFields_url_Delete {
  __typename?: 'MediaDocAccessFields_url_Delete';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaDocAccessFields_url_Read {
  __typename?: 'MediaDocAccessFields_url_Read';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaDocAccessFields_url_Update {
  __typename?: 'MediaDocAccessFields_url_Update';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaDocAccessFields_width {
  __typename?: 'MediaDocAccessFields_width';
  create?: Maybe<MediaDocAccessFields_width_Create>;
  delete?: Maybe<MediaDocAccessFields_width_Delete>;
  read?: Maybe<MediaDocAccessFields_width_Read>;
  update?: Maybe<MediaDocAccessFields_width_Update>;
}

export interface MediaDocAccessFields_width_Create {
  __typename?: 'MediaDocAccessFields_width_Create';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaDocAccessFields_width_Delete {
  __typename?: 'MediaDocAccessFields_width_Delete';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaDocAccessFields_width_Read {
  __typename?: 'MediaDocAccessFields_width_Read';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaDocAccessFields_width_Update {
  __typename?: 'MediaDocAccessFields_width_Update';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaFields {
  __typename?: 'MediaFields';
  alt?: Maybe<MediaFields_alt>;
  createdAt?: Maybe<MediaFields_createdAt>;
  filename?: Maybe<MediaFields_filename>;
  filesize?: Maybe<MediaFields_filesize>;
  height?: Maybe<MediaFields_height>;
  mimeType?: Maybe<MediaFields_mimeType>;
  sizes?: Maybe<MediaFields_sizes>;
  updatedAt?: Maybe<MediaFields_updatedAt>;
  url?: Maybe<MediaFields_url>;
  width?: Maybe<MediaFields_width>;
}

export interface MediaFields_alt {
  __typename?: 'MediaFields_alt';
  create?: Maybe<MediaFields_alt_Create>;
  delete?: Maybe<MediaFields_alt_Delete>;
  read?: Maybe<MediaFields_alt_Read>;
  update?: Maybe<MediaFields_alt_Update>;
}

export interface MediaFields_alt_Create {
  __typename?: 'MediaFields_alt_Create';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaFields_alt_Delete {
  __typename?: 'MediaFields_alt_Delete';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaFields_alt_Read {
  __typename?: 'MediaFields_alt_Read';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaFields_alt_Update {
  __typename?: 'MediaFields_alt_Update';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaFields_createdAt {
  __typename?: 'MediaFields_createdAt';
  create?: Maybe<MediaFields_createdAt_Create>;
  delete?: Maybe<MediaFields_createdAt_Delete>;
  read?: Maybe<MediaFields_createdAt_Read>;
  update?: Maybe<MediaFields_createdAt_Update>;
}

export interface MediaFields_createdAt_Create {
  __typename?: 'MediaFields_createdAt_Create';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaFields_createdAt_Delete {
  __typename?: 'MediaFields_createdAt_Delete';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaFields_createdAt_Read {
  __typename?: 'MediaFields_createdAt_Read';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaFields_createdAt_Update {
  __typename?: 'MediaFields_createdAt_Update';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaFields_filename {
  __typename?: 'MediaFields_filename';
  create?: Maybe<MediaFields_filename_Create>;
  delete?: Maybe<MediaFields_filename_Delete>;
  read?: Maybe<MediaFields_filename_Read>;
  update?: Maybe<MediaFields_filename_Update>;
}

export interface MediaFields_filename_Create {
  __typename?: 'MediaFields_filename_Create';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaFields_filename_Delete {
  __typename?: 'MediaFields_filename_Delete';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaFields_filename_Read {
  __typename?: 'MediaFields_filename_Read';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaFields_filename_Update {
  __typename?: 'MediaFields_filename_Update';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaFields_filesize {
  __typename?: 'MediaFields_filesize';
  create?: Maybe<MediaFields_filesize_Create>;
  delete?: Maybe<MediaFields_filesize_Delete>;
  read?: Maybe<MediaFields_filesize_Read>;
  update?: Maybe<MediaFields_filesize_Update>;
}

export interface MediaFields_filesize_Create {
  __typename?: 'MediaFields_filesize_Create';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaFields_filesize_Delete {
  __typename?: 'MediaFields_filesize_Delete';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaFields_filesize_Read {
  __typename?: 'MediaFields_filesize_Read';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaFields_filesize_Update {
  __typename?: 'MediaFields_filesize_Update';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaFields_height {
  __typename?: 'MediaFields_height';
  create?: Maybe<MediaFields_height_Create>;
  delete?: Maybe<MediaFields_height_Delete>;
  read?: Maybe<MediaFields_height_Read>;
  update?: Maybe<MediaFields_height_Update>;
}

export interface MediaFields_height_Create {
  __typename?: 'MediaFields_height_Create';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaFields_height_Delete {
  __typename?: 'MediaFields_height_Delete';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaFields_height_Read {
  __typename?: 'MediaFields_height_Read';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaFields_height_Update {
  __typename?: 'MediaFields_height_Update';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaFields_mimeType {
  __typename?: 'MediaFields_mimeType';
  create?: Maybe<MediaFields_mimeType_Create>;
  delete?: Maybe<MediaFields_mimeType_Delete>;
  read?: Maybe<MediaFields_mimeType_Read>;
  update?: Maybe<MediaFields_mimeType_Update>;
}

export interface MediaFields_mimeType_Create {
  __typename?: 'MediaFields_mimeType_Create';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaFields_mimeType_Delete {
  __typename?: 'MediaFields_mimeType_Delete';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaFields_mimeType_Read {
  __typename?: 'MediaFields_mimeType_Read';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaFields_mimeType_Update {
  __typename?: 'MediaFields_mimeType_Update';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaFields_sizes {
  __typename?: 'MediaFields_sizes';
  create?: Maybe<MediaFields_sizes_Create>;
  delete?: Maybe<MediaFields_sizes_Delete>;
  fields?: Maybe<MediaFields_sizes_Fields>;
  read?: Maybe<MediaFields_sizes_Read>;
  update?: Maybe<MediaFields_sizes_Update>;
}

export interface MediaFields_sizes_Create {
  __typename?: 'MediaFields_sizes_Create';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaFields_sizes_Delete {
  __typename?: 'MediaFields_sizes_Delete';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaFields_sizes_Fields {
  __typename?: 'MediaFields_sizes_Fields';
  sixteenByNineMedium?: Maybe<MediaFields_sizes_sixteenByNineMedium>;
  thumbnail?: Maybe<MediaFields_sizes_thumbnail>;
}

export interface MediaFields_sizes_Read {
  __typename?: 'MediaFields_sizes_Read';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaFields_sizes_Update {
  __typename?: 'MediaFields_sizes_Update';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaFields_sizes_sixteenByNineMedium {
  __typename?: 'MediaFields_sizes_sixteenByNineMedium';
  create?: Maybe<MediaFields_sizes_sixteenByNineMedium_Create>;
  delete?: Maybe<MediaFields_sizes_sixteenByNineMedium_Delete>;
  fields?: Maybe<MediaFields_sizes_sixteenByNineMedium_Fields>;
  read?: Maybe<MediaFields_sizes_sixteenByNineMedium_Read>;
  update?: Maybe<MediaFields_sizes_sixteenByNineMedium_Update>;
}

export interface MediaFields_sizes_sixteenByNineMedium_Create {
  __typename?: 'MediaFields_sizes_sixteenByNineMedium_Create';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaFields_sizes_sixteenByNineMedium_Delete {
  __typename?: 'MediaFields_sizes_sixteenByNineMedium_Delete';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaFields_sizes_sixteenByNineMedium_Fields {
  __typename?: 'MediaFields_sizes_sixteenByNineMedium_Fields';
  filename?: Maybe<MediaFields_sizes_sixteenByNineMedium_filename>;
  filesize?: Maybe<MediaFields_sizes_sixteenByNineMedium_filesize>;
  height?: Maybe<MediaFields_sizes_sixteenByNineMedium_height>;
  mimeType?: Maybe<MediaFields_sizes_sixteenByNineMedium_mimeType>;
  url?: Maybe<MediaFields_sizes_sixteenByNineMedium_url>;
  width?: Maybe<MediaFields_sizes_sixteenByNineMedium_width>;
}

export interface MediaFields_sizes_sixteenByNineMedium_Read {
  __typename?: 'MediaFields_sizes_sixteenByNineMedium_Read';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaFields_sizes_sixteenByNineMedium_Update {
  __typename?: 'MediaFields_sizes_sixteenByNineMedium_Update';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaFields_sizes_sixteenByNineMedium_filename {
  __typename?: 'MediaFields_sizes_sixteenByNineMedium_filename';
  create?: Maybe<MediaFields_sizes_sixteenByNineMedium_filename_Create>;
  delete?: Maybe<MediaFields_sizes_sixteenByNineMedium_filename_Delete>;
  read?: Maybe<MediaFields_sizes_sixteenByNineMedium_filename_Read>;
  update?: Maybe<MediaFields_sizes_sixteenByNineMedium_filename_Update>;
}

export interface MediaFields_sizes_sixteenByNineMedium_filename_Create {
  __typename?: 'MediaFields_sizes_sixteenByNineMedium_filename_Create';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaFields_sizes_sixteenByNineMedium_filename_Delete {
  __typename?: 'MediaFields_sizes_sixteenByNineMedium_filename_Delete';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaFields_sizes_sixteenByNineMedium_filename_Read {
  __typename?: 'MediaFields_sizes_sixteenByNineMedium_filename_Read';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaFields_sizes_sixteenByNineMedium_filename_Update {
  __typename?: 'MediaFields_sizes_sixteenByNineMedium_filename_Update';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaFields_sizes_sixteenByNineMedium_filesize {
  __typename?: 'MediaFields_sizes_sixteenByNineMedium_filesize';
  create?: Maybe<MediaFields_sizes_sixteenByNineMedium_filesize_Create>;
  delete?: Maybe<MediaFields_sizes_sixteenByNineMedium_filesize_Delete>;
  read?: Maybe<MediaFields_sizes_sixteenByNineMedium_filesize_Read>;
  update?: Maybe<MediaFields_sizes_sixteenByNineMedium_filesize_Update>;
}

export interface MediaFields_sizes_sixteenByNineMedium_filesize_Create {
  __typename?: 'MediaFields_sizes_sixteenByNineMedium_filesize_Create';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaFields_sizes_sixteenByNineMedium_filesize_Delete {
  __typename?: 'MediaFields_sizes_sixteenByNineMedium_filesize_Delete';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaFields_sizes_sixteenByNineMedium_filesize_Read {
  __typename?: 'MediaFields_sizes_sixteenByNineMedium_filesize_Read';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaFields_sizes_sixteenByNineMedium_filesize_Update {
  __typename?: 'MediaFields_sizes_sixteenByNineMedium_filesize_Update';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaFields_sizes_sixteenByNineMedium_height {
  __typename?: 'MediaFields_sizes_sixteenByNineMedium_height';
  create?: Maybe<MediaFields_sizes_sixteenByNineMedium_height_Create>;
  delete?: Maybe<MediaFields_sizes_sixteenByNineMedium_height_Delete>;
  read?: Maybe<MediaFields_sizes_sixteenByNineMedium_height_Read>;
  update?: Maybe<MediaFields_sizes_sixteenByNineMedium_height_Update>;
}

export interface MediaFields_sizes_sixteenByNineMedium_height_Create {
  __typename?: 'MediaFields_sizes_sixteenByNineMedium_height_Create';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaFields_sizes_sixteenByNineMedium_height_Delete {
  __typename?: 'MediaFields_sizes_sixteenByNineMedium_height_Delete';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaFields_sizes_sixteenByNineMedium_height_Read {
  __typename?: 'MediaFields_sizes_sixteenByNineMedium_height_Read';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaFields_sizes_sixteenByNineMedium_height_Update {
  __typename?: 'MediaFields_sizes_sixteenByNineMedium_height_Update';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaFields_sizes_sixteenByNineMedium_mimeType {
  __typename?: 'MediaFields_sizes_sixteenByNineMedium_mimeType';
  create?: Maybe<MediaFields_sizes_sixteenByNineMedium_mimeType_Create>;
  delete?: Maybe<MediaFields_sizes_sixteenByNineMedium_mimeType_Delete>;
  read?: Maybe<MediaFields_sizes_sixteenByNineMedium_mimeType_Read>;
  update?: Maybe<MediaFields_sizes_sixteenByNineMedium_mimeType_Update>;
}

export interface MediaFields_sizes_sixteenByNineMedium_mimeType_Create {
  __typename?: 'MediaFields_sizes_sixteenByNineMedium_mimeType_Create';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaFields_sizes_sixteenByNineMedium_mimeType_Delete {
  __typename?: 'MediaFields_sizes_sixteenByNineMedium_mimeType_Delete';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaFields_sizes_sixteenByNineMedium_mimeType_Read {
  __typename?: 'MediaFields_sizes_sixteenByNineMedium_mimeType_Read';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaFields_sizes_sixteenByNineMedium_mimeType_Update {
  __typename?: 'MediaFields_sizes_sixteenByNineMedium_mimeType_Update';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaFields_sizes_sixteenByNineMedium_url {
  __typename?: 'MediaFields_sizes_sixteenByNineMedium_url';
  create?: Maybe<MediaFields_sizes_sixteenByNineMedium_url_Create>;
  delete?: Maybe<MediaFields_sizes_sixteenByNineMedium_url_Delete>;
  read?: Maybe<MediaFields_sizes_sixteenByNineMedium_url_Read>;
  update?: Maybe<MediaFields_sizes_sixteenByNineMedium_url_Update>;
}

export interface MediaFields_sizes_sixteenByNineMedium_url_Create {
  __typename?: 'MediaFields_sizes_sixteenByNineMedium_url_Create';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaFields_sizes_sixteenByNineMedium_url_Delete {
  __typename?: 'MediaFields_sizes_sixteenByNineMedium_url_Delete';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaFields_sizes_sixteenByNineMedium_url_Read {
  __typename?: 'MediaFields_sizes_sixteenByNineMedium_url_Read';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaFields_sizes_sixteenByNineMedium_url_Update {
  __typename?: 'MediaFields_sizes_sixteenByNineMedium_url_Update';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaFields_sizes_sixteenByNineMedium_width {
  __typename?: 'MediaFields_sizes_sixteenByNineMedium_width';
  create?: Maybe<MediaFields_sizes_sixteenByNineMedium_width_Create>;
  delete?: Maybe<MediaFields_sizes_sixteenByNineMedium_width_Delete>;
  read?: Maybe<MediaFields_sizes_sixteenByNineMedium_width_Read>;
  update?: Maybe<MediaFields_sizes_sixteenByNineMedium_width_Update>;
}

export interface MediaFields_sizes_sixteenByNineMedium_width_Create {
  __typename?: 'MediaFields_sizes_sixteenByNineMedium_width_Create';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaFields_sizes_sixteenByNineMedium_width_Delete {
  __typename?: 'MediaFields_sizes_sixteenByNineMedium_width_Delete';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaFields_sizes_sixteenByNineMedium_width_Read {
  __typename?: 'MediaFields_sizes_sixteenByNineMedium_width_Read';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaFields_sizes_sixteenByNineMedium_width_Update {
  __typename?: 'MediaFields_sizes_sixteenByNineMedium_width_Update';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaFields_sizes_thumbnail {
  __typename?: 'MediaFields_sizes_thumbnail';
  create?: Maybe<MediaFields_sizes_thumbnail_Create>;
  delete?: Maybe<MediaFields_sizes_thumbnail_Delete>;
  fields?: Maybe<MediaFields_sizes_thumbnail_Fields>;
  read?: Maybe<MediaFields_sizes_thumbnail_Read>;
  update?: Maybe<MediaFields_sizes_thumbnail_Update>;
}

export interface MediaFields_sizes_thumbnail_Create {
  __typename?: 'MediaFields_sizes_thumbnail_Create';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaFields_sizes_thumbnail_Delete {
  __typename?: 'MediaFields_sizes_thumbnail_Delete';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaFields_sizes_thumbnail_Fields {
  __typename?: 'MediaFields_sizes_thumbnail_Fields';
  filename?: Maybe<MediaFields_sizes_thumbnail_filename>;
  filesize?: Maybe<MediaFields_sizes_thumbnail_filesize>;
  height?: Maybe<MediaFields_sizes_thumbnail_height>;
  mimeType?: Maybe<MediaFields_sizes_thumbnail_mimeType>;
  url?: Maybe<MediaFields_sizes_thumbnail_url>;
  width?: Maybe<MediaFields_sizes_thumbnail_width>;
}

export interface MediaFields_sizes_thumbnail_Read {
  __typename?: 'MediaFields_sizes_thumbnail_Read';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaFields_sizes_thumbnail_Update {
  __typename?: 'MediaFields_sizes_thumbnail_Update';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaFields_sizes_thumbnail_filename {
  __typename?: 'MediaFields_sizes_thumbnail_filename';
  create?: Maybe<MediaFields_sizes_thumbnail_filename_Create>;
  delete?: Maybe<MediaFields_sizes_thumbnail_filename_Delete>;
  read?: Maybe<MediaFields_sizes_thumbnail_filename_Read>;
  update?: Maybe<MediaFields_sizes_thumbnail_filename_Update>;
}

export interface MediaFields_sizes_thumbnail_filename_Create {
  __typename?: 'MediaFields_sizes_thumbnail_filename_Create';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaFields_sizes_thumbnail_filename_Delete {
  __typename?: 'MediaFields_sizes_thumbnail_filename_Delete';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaFields_sizes_thumbnail_filename_Read {
  __typename?: 'MediaFields_sizes_thumbnail_filename_Read';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaFields_sizes_thumbnail_filename_Update {
  __typename?: 'MediaFields_sizes_thumbnail_filename_Update';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaFields_sizes_thumbnail_filesize {
  __typename?: 'MediaFields_sizes_thumbnail_filesize';
  create?: Maybe<MediaFields_sizes_thumbnail_filesize_Create>;
  delete?: Maybe<MediaFields_sizes_thumbnail_filesize_Delete>;
  read?: Maybe<MediaFields_sizes_thumbnail_filesize_Read>;
  update?: Maybe<MediaFields_sizes_thumbnail_filesize_Update>;
}

export interface MediaFields_sizes_thumbnail_filesize_Create {
  __typename?: 'MediaFields_sizes_thumbnail_filesize_Create';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaFields_sizes_thumbnail_filesize_Delete {
  __typename?: 'MediaFields_sizes_thumbnail_filesize_Delete';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaFields_sizes_thumbnail_filesize_Read {
  __typename?: 'MediaFields_sizes_thumbnail_filesize_Read';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaFields_sizes_thumbnail_filesize_Update {
  __typename?: 'MediaFields_sizes_thumbnail_filesize_Update';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaFields_sizes_thumbnail_height {
  __typename?: 'MediaFields_sizes_thumbnail_height';
  create?: Maybe<MediaFields_sizes_thumbnail_height_Create>;
  delete?: Maybe<MediaFields_sizes_thumbnail_height_Delete>;
  read?: Maybe<MediaFields_sizes_thumbnail_height_Read>;
  update?: Maybe<MediaFields_sizes_thumbnail_height_Update>;
}

export interface MediaFields_sizes_thumbnail_height_Create {
  __typename?: 'MediaFields_sizes_thumbnail_height_Create';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaFields_sizes_thumbnail_height_Delete {
  __typename?: 'MediaFields_sizes_thumbnail_height_Delete';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaFields_sizes_thumbnail_height_Read {
  __typename?: 'MediaFields_sizes_thumbnail_height_Read';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaFields_sizes_thumbnail_height_Update {
  __typename?: 'MediaFields_sizes_thumbnail_height_Update';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaFields_sizes_thumbnail_mimeType {
  __typename?: 'MediaFields_sizes_thumbnail_mimeType';
  create?: Maybe<MediaFields_sizes_thumbnail_mimeType_Create>;
  delete?: Maybe<MediaFields_sizes_thumbnail_mimeType_Delete>;
  read?: Maybe<MediaFields_sizes_thumbnail_mimeType_Read>;
  update?: Maybe<MediaFields_sizes_thumbnail_mimeType_Update>;
}

export interface MediaFields_sizes_thumbnail_mimeType_Create {
  __typename?: 'MediaFields_sizes_thumbnail_mimeType_Create';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaFields_sizes_thumbnail_mimeType_Delete {
  __typename?: 'MediaFields_sizes_thumbnail_mimeType_Delete';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaFields_sizes_thumbnail_mimeType_Read {
  __typename?: 'MediaFields_sizes_thumbnail_mimeType_Read';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaFields_sizes_thumbnail_mimeType_Update {
  __typename?: 'MediaFields_sizes_thumbnail_mimeType_Update';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaFields_sizes_thumbnail_url {
  __typename?: 'MediaFields_sizes_thumbnail_url';
  create?: Maybe<MediaFields_sizes_thumbnail_url_Create>;
  delete?: Maybe<MediaFields_sizes_thumbnail_url_Delete>;
  read?: Maybe<MediaFields_sizes_thumbnail_url_Read>;
  update?: Maybe<MediaFields_sizes_thumbnail_url_Update>;
}

export interface MediaFields_sizes_thumbnail_url_Create {
  __typename?: 'MediaFields_sizes_thumbnail_url_Create';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaFields_sizes_thumbnail_url_Delete {
  __typename?: 'MediaFields_sizes_thumbnail_url_Delete';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaFields_sizes_thumbnail_url_Read {
  __typename?: 'MediaFields_sizes_thumbnail_url_Read';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaFields_sizes_thumbnail_url_Update {
  __typename?: 'MediaFields_sizes_thumbnail_url_Update';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaFields_sizes_thumbnail_width {
  __typename?: 'MediaFields_sizes_thumbnail_width';
  create?: Maybe<MediaFields_sizes_thumbnail_width_Create>;
  delete?: Maybe<MediaFields_sizes_thumbnail_width_Delete>;
  read?: Maybe<MediaFields_sizes_thumbnail_width_Read>;
  update?: Maybe<MediaFields_sizes_thumbnail_width_Update>;
}

export interface MediaFields_sizes_thumbnail_width_Create {
  __typename?: 'MediaFields_sizes_thumbnail_width_Create';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaFields_sizes_thumbnail_width_Delete {
  __typename?: 'MediaFields_sizes_thumbnail_width_Delete';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaFields_sizes_thumbnail_width_Read {
  __typename?: 'MediaFields_sizes_thumbnail_width_Read';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaFields_sizes_thumbnail_width_Update {
  __typename?: 'MediaFields_sizes_thumbnail_width_Update';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaFields_updatedAt {
  __typename?: 'MediaFields_updatedAt';
  create?: Maybe<MediaFields_updatedAt_Create>;
  delete?: Maybe<MediaFields_updatedAt_Delete>;
  read?: Maybe<MediaFields_updatedAt_Read>;
  update?: Maybe<MediaFields_updatedAt_Update>;
}

export interface MediaFields_updatedAt_Create {
  __typename?: 'MediaFields_updatedAt_Create';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaFields_updatedAt_Delete {
  __typename?: 'MediaFields_updatedAt_Delete';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaFields_updatedAt_Read {
  __typename?: 'MediaFields_updatedAt_Read';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaFields_updatedAt_Update {
  __typename?: 'MediaFields_updatedAt_Update';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaFields_url {
  __typename?: 'MediaFields_url';
  create?: Maybe<MediaFields_url_Create>;
  delete?: Maybe<MediaFields_url_Delete>;
  read?: Maybe<MediaFields_url_Read>;
  update?: Maybe<MediaFields_url_Update>;
}

export interface MediaFields_url_Create {
  __typename?: 'MediaFields_url_Create';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaFields_url_Delete {
  __typename?: 'MediaFields_url_Delete';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaFields_url_Read {
  __typename?: 'MediaFields_url_Read';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaFields_url_Update {
  __typename?: 'MediaFields_url_Update';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaFields_width {
  __typename?: 'MediaFields_width';
  create?: Maybe<MediaFields_width_Create>;
  delete?: Maybe<MediaFields_width_Delete>;
  read?: Maybe<MediaFields_width_Read>;
  update?: Maybe<MediaFields_width_Update>;
}

export interface MediaFields_width_Create {
  __typename?: 'MediaFields_width_Create';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaFields_width_Delete {
  __typename?: 'MediaFields_width_Delete';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaFields_width_Read {
  __typename?: 'MediaFields_width_Read';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaFields_width_Update {
  __typename?: 'MediaFields_width_Update';
  permission: ScalarsEnums['Boolean'];
}

export interface MediaReadAccess {
  __typename?: 'MediaReadAccess';
  permission: ScalarsEnums['Boolean'];
  where?: Maybe<ScalarsEnums['JSONObject']>;
}

export interface MediaReadDocAccess {
  __typename?: 'MediaReadDocAccess';
  permission: ScalarsEnums['Boolean'];
  where?: Maybe<ScalarsEnums['JSONObject']>;
}

export interface MediaUpdateAccess {
  __typename?: 'MediaUpdateAccess';
  permission: ScalarsEnums['Boolean'];
  where?: Maybe<ScalarsEnums['JSONObject']>;
}

export interface MediaUpdateDocAccess {
  __typename?: 'MediaUpdateDocAccess';
  permission: ScalarsEnums['Boolean'];
  where?: Maybe<ScalarsEnums['JSONObject']>;
}

export interface Media_Sizes {
  __typename?: 'Media_Sizes';
  sixteenByNineMedium?: Maybe<Media_Sizes_SixteenByNineMedium>;
  thumbnail?: Maybe<Media_Sizes_Thumbnail>;
}

export interface Media_Sizes_SixteenByNineMedium {
  __typename?: 'Media_Sizes_SixteenByNineMedium';
  filename?: Maybe<ScalarsEnums['String']>;
  filesize?: Maybe<ScalarsEnums['Float']>;
  height?: Maybe<ScalarsEnums['Float']>;
  mimeType?: Maybe<ScalarsEnums['String']>;
  url?: Maybe<ScalarsEnums['String']>;
  width?: Maybe<ScalarsEnums['Float']>;
}

export interface Media_Sizes_Thumbnail {
  __typename?: 'Media_Sizes_Thumbnail';
  filename?: Maybe<ScalarsEnums['String']>;
  filesize?: Maybe<ScalarsEnums['Float']>;
  height?: Maybe<ScalarsEnums['Float']>;
  mimeType?: Maybe<ScalarsEnums['String']>;
  url?: Maybe<ScalarsEnums['String']>;
  width?: Maybe<ScalarsEnums['Float']>;
}

export interface News {
  __typename?: 'News';
  author?: Maybe<User>;
  content: (args?: {
    depth?: Maybe<Scalars['Int']>;
  }) => Maybe<ScalarsEnums['JSON']>;
  createdAt?: Maybe<ScalarsEnums['DateTime']>;
  featureImage: (args?: {
    where?: Maybe<News_FeatureImage_where>;
  }) => Maybe<Media>;
  id?: Maybe<ScalarsEnums['String']>;
  publishedDate?: Maybe<ScalarsEnums['DateTime']>;
  readTime?: Maybe<ScalarsEnums['Float']>;
  slug?: Maybe<ScalarsEnums['String']>;
  status?: Maybe<ScalarsEnums['News_status']>;
  tags?: Maybe<Array<NewsTag>>;
  title: ScalarsEnums['String'];
  updatedAt?: Maybe<ScalarsEnums['DateTime']>;
}

export interface NewsCreateAccess {
  __typename?: 'NewsCreateAccess';
  permission: ScalarsEnums['Boolean'];
  where?: Maybe<ScalarsEnums['JSONObject']>;
}

export interface NewsCreateDocAccess {
  __typename?: 'NewsCreateDocAccess';
  permission: ScalarsEnums['Boolean'];
  where?: Maybe<ScalarsEnums['JSONObject']>;
}

export interface NewsDeleteAccess {
  __typename?: 'NewsDeleteAccess';
  permission: ScalarsEnums['Boolean'];
  where?: Maybe<ScalarsEnums['JSONObject']>;
}

export interface NewsDeleteDocAccess {
  __typename?: 'NewsDeleteDocAccess';
  permission: ScalarsEnums['Boolean'];
  where?: Maybe<ScalarsEnums['JSONObject']>;
}

export interface NewsDocAccessFields {
  __typename?: 'NewsDocAccessFields';
  author?: Maybe<NewsDocAccessFields_author>;
  content?: Maybe<NewsDocAccessFields_content>;
  createdAt?: Maybe<NewsDocAccessFields_createdAt>;
  featureImage?: Maybe<NewsDocAccessFields_featureImage>;
  publishedDate?: Maybe<NewsDocAccessFields_publishedDate>;
  readTime?: Maybe<NewsDocAccessFields_readTime>;
  slug?: Maybe<NewsDocAccessFields_slug>;
  status?: Maybe<NewsDocAccessFields_status>;
  tags?: Maybe<NewsDocAccessFields_tags>;
  title?: Maybe<NewsDocAccessFields_title>;
  updatedAt?: Maybe<NewsDocAccessFields_updatedAt>;
}

export interface NewsDocAccessFields_author {
  __typename?: 'NewsDocAccessFields_author';
  create?: Maybe<NewsDocAccessFields_author_Create>;
  delete?: Maybe<NewsDocAccessFields_author_Delete>;
  read?: Maybe<NewsDocAccessFields_author_Read>;
  update?: Maybe<NewsDocAccessFields_author_Update>;
}

export interface NewsDocAccessFields_author_Create {
  __typename?: 'NewsDocAccessFields_author_Create';
  permission: ScalarsEnums['Boolean'];
}

export interface NewsDocAccessFields_author_Delete {
  __typename?: 'NewsDocAccessFields_author_Delete';
  permission: ScalarsEnums['Boolean'];
}

export interface NewsDocAccessFields_author_Read {
  __typename?: 'NewsDocAccessFields_author_Read';
  permission: ScalarsEnums['Boolean'];
}

export interface NewsDocAccessFields_author_Update {
  __typename?: 'NewsDocAccessFields_author_Update';
  permission: ScalarsEnums['Boolean'];
}

export interface NewsDocAccessFields_content {
  __typename?: 'NewsDocAccessFields_content';
  create?: Maybe<NewsDocAccessFields_content_Create>;
  delete?: Maybe<NewsDocAccessFields_content_Delete>;
  read?: Maybe<NewsDocAccessFields_content_Read>;
  update?: Maybe<NewsDocAccessFields_content_Update>;
}

export interface NewsDocAccessFields_content_Create {
  __typename?: 'NewsDocAccessFields_content_Create';
  permission: ScalarsEnums['Boolean'];
}

export interface NewsDocAccessFields_content_Delete {
  __typename?: 'NewsDocAccessFields_content_Delete';
  permission: ScalarsEnums['Boolean'];
}

export interface NewsDocAccessFields_content_Read {
  __typename?: 'NewsDocAccessFields_content_Read';
  permission: ScalarsEnums['Boolean'];
}

export interface NewsDocAccessFields_content_Update {
  __typename?: 'NewsDocAccessFields_content_Update';
  permission: ScalarsEnums['Boolean'];
}

export interface NewsDocAccessFields_createdAt {
  __typename?: 'NewsDocAccessFields_createdAt';
  create?: Maybe<NewsDocAccessFields_createdAt_Create>;
  delete?: Maybe<NewsDocAccessFields_createdAt_Delete>;
  read?: Maybe<NewsDocAccessFields_createdAt_Read>;
  update?: Maybe<NewsDocAccessFields_createdAt_Update>;
}

export interface NewsDocAccessFields_createdAt_Create {
  __typename?: 'NewsDocAccessFields_createdAt_Create';
  permission: ScalarsEnums['Boolean'];
}

export interface NewsDocAccessFields_createdAt_Delete {
  __typename?: 'NewsDocAccessFields_createdAt_Delete';
  permission: ScalarsEnums['Boolean'];
}

export interface NewsDocAccessFields_createdAt_Read {
  __typename?: 'NewsDocAccessFields_createdAt_Read';
  permission: ScalarsEnums['Boolean'];
}

export interface NewsDocAccessFields_createdAt_Update {
  __typename?: 'NewsDocAccessFields_createdAt_Update';
  permission: ScalarsEnums['Boolean'];
}

export interface NewsDocAccessFields_featureImage {
  __typename?: 'NewsDocAccessFields_featureImage';
  create?: Maybe<NewsDocAccessFields_featureImage_Create>;
  delete?: Maybe<NewsDocAccessFields_featureImage_Delete>;
  read?: Maybe<NewsDocAccessFields_featureImage_Read>;
  update?: Maybe<NewsDocAccessFields_featureImage_Update>;
}

export interface NewsDocAccessFields_featureImage_Create {
  __typename?: 'NewsDocAccessFields_featureImage_Create';
  permission: ScalarsEnums['Boolean'];
}

export interface NewsDocAccessFields_featureImage_Delete {
  __typename?: 'NewsDocAccessFields_featureImage_Delete';
  permission: ScalarsEnums['Boolean'];
}

export interface NewsDocAccessFields_featureImage_Read {
  __typename?: 'NewsDocAccessFields_featureImage_Read';
  permission: ScalarsEnums['Boolean'];
}

export interface NewsDocAccessFields_featureImage_Update {
  __typename?: 'NewsDocAccessFields_featureImage_Update';
  permission: ScalarsEnums['Boolean'];
}

export interface NewsDocAccessFields_publishedDate {
  __typename?: 'NewsDocAccessFields_publishedDate';
  create?: Maybe<NewsDocAccessFields_publishedDate_Create>;
  delete?: Maybe<NewsDocAccessFields_publishedDate_Delete>;
  read?: Maybe<NewsDocAccessFields_publishedDate_Read>;
  update?: Maybe<NewsDocAccessFields_publishedDate_Update>;
}

export interface NewsDocAccessFields_publishedDate_Create {
  __typename?: 'NewsDocAccessFields_publishedDate_Create';
  permission: ScalarsEnums['Boolean'];
}

export interface NewsDocAccessFields_publishedDate_Delete {
  __typename?: 'NewsDocAccessFields_publishedDate_Delete';
  permission: ScalarsEnums['Boolean'];
}

export interface NewsDocAccessFields_publishedDate_Read {
  __typename?: 'NewsDocAccessFields_publishedDate_Read';
  permission: ScalarsEnums['Boolean'];
}

export interface NewsDocAccessFields_publishedDate_Update {
  __typename?: 'NewsDocAccessFields_publishedDate_Update';
  permission: ScalarsEnums['Boolean'];
}

export interface NewsDocAccessFields_readTime {
  __typename?: 'NewsDocAccessFields_readTime';
  create?: Maybe<NewsDocAccessFields_readTime_Create>;
  delete?: Maybe<NewsDocAccessFields_readTime_Delete>;
  read?: Maybe<NewsDocAccessFields_readTime_Read>;
  update?: Maybe<NewsDocAccessFields_readTime_Update>;
}

export interface NewsDocAccessFields_readTime_Create {
  __typename?: 'NewsDocAccessFields_readTime_Create';
  permission: ScalarsEnums['Boolean'];
}

export interface NewsDocAccessFields_readTime_Delete {
  __typename?: 'NewsDocAccessFields_readTime_Delete';
  permission: ScalarsEnums['Boolean'];
}

export interface NewsDocAccessFields_readTime_Read {
  __typename?: 'NewsDocAccessFields_readTime_Read';
  permission: ScalarsEnums['Boolean'];
}

export interface NewsDocAccessFields_readTime_Update {
  __typename?: 'NewsDocAccessFields_readTime_Update';
  permission: ScalarsEnums['Boolean'];
}

export interface NewsDocAccessFields_slug {
  __typename?: 'NewsDocAccessFields_slug';
  create?: Maybe<NewsDocAccessFields_slug_Create>;
  delete?: Maybe<NewsDocAccessFields_slug_Delete>;
  read?: Maybe<NewsDocAccessFields_slug_Read>;
  update?: Maybe<NewsDocAccessFields_slug_Update>;
}

export interface NewsDocAccessFields_slug_Create {
  __typename?: 'NewsDocAccessFields_slug_Create';
  permission: ScalarsEnums['Boolean'];
}

export interface NewsDocAccessFields_slug_Delete {
  __typename?: 'NewsDocAccessFields_slug_Delete';
  permission: ScalarsEnums['Boolean'];
}

export interface NewsDocAccessFields_slug_Read {
  __typename?: 'NewsDocAccessFields_slug_Read';
  permission: ScalarsEnums['Boolean'];
}

export interface NewsDocAccessFields_slug_Update {
  __typename?: 'NewsDocAccessFields_slug_Update';
  permission: ScalarsEnums['Boolean'];
}

export interface NewsDocAccessFields_status {
  __typename?: 'NewsDocAccessFields_status';
  create?: Maybe<NewsDocAccessFields_status_Create>;
  delete?: Maybe<NewsDocAccessFields_status_Delete>;
  read?: Maybe<NewsDocAccessFields_status_Read>;
  update?: Maybe<NewsDocAccessFields_status_Update>;
}

export interface NewsDocAccessFields_status_Create {
  __typename?: 'NewsDocAccessFields_status_Create';
  permission: ScalarsEnums['Boolean'];
}

export interface NewsDocAccessFields_status_Delete {
  __typename?: 'NewsDocAccessFields_status_Delete';
  permission: ScalarsEnums['Boolean'];
}

export interface NewsDocAccessFields_status_Read {
  __typename?: 'NewsDocAccessFields_status_Read';
  permission: ScalarsEnums['Boolean'];
}

export interface NewsDocAccessFields_status_Update {
  __typename?: 'NewsDocAccessFields_status_Update';
  permission: ScalarsEnums['Boolean'];
}

export interface NewsDocAccessFields_tags {
  __typename?: 'NewsDocAccessFields_tags';
  create?: Maybe<NewsDocAccessFields_tags_Create>;
  delete?: Maybe<NewsDocAccessFields_tags_Delete>;
  read?: Maybe<NewsDocAccessFields_tags_Read>;
  update?: Maybe<NewsDocAccessFields_tags_Update>;
}

export interface NewsDocAccessFields_tags_Create {
  __typename?: 'NewsDocAccessFields_tags_Create';
  permission: ScalarsEnums['Boolean'];
}

export interface NewsDocAccessFields_tags_Delete {
  __typename?: 'NewsDocAccessFields_tags_Delete';
  permission: ScalarsEnums['Boolean'];
}

export interface NewsDocAccessFields_tags_Read {
  __typename?: 'NewsDocAccessFields_tags_Read';
  permission: ScalarsEnums['Boolean'];
}

export interface NewsDocAccessFields_tags_Update {
  __typename?: 'NewsDocAccessFields_tags_Update';
  permission: ScalarsEnums['Boolean'];
}

export interface NewsDocAccessFields_title {
  __typename?: 'NewsDocAccessFields_title';
  create?: Maybe<NewsDocAccessFields_title_Create>;
  delete?: Maybe<NewsDocAccessFields_title_Delete>;
  read?: Maybe<NewsDocAccessFields_title_Read>;
  update?: Maybe<NewsDocAccessFields_title_Update>;
}

export interface NewsDocAccessFields_title_Create {
  __typename?: 'NewsDocAccessFields_title_Create';
  permission: ScalarsEnums['Boolean'];
}

export interface NewsDocAccessFields_title_Delete {
  __typename?: 'NewsDocAccessFields_title_Delete';
  permission: ScalarsEnums['Boolean'];
}

export interface NewsDocAccessFields_title_Read {
  __typename?: 'NewsDocAccessFields_title_Read';
  permission: ScalarsEnums['Boolean'];
}

export interface NewsDocAccessFields_title_Update {
  __typename?: 'NewsDocAccessFields_title_Update';
  permission: ScalarsEnums['Boolean'];
}

export interface NewsDocAccessFields_updatedAt {
  __typename?: 'NewsDocAccessFields_updatedAt';
  create?: Maybe<NewsDocAccessFields_updatedAt_Create>;
  delete?: Maybe<NewsDocAccessFields_updatedAt_Delete>;
  read?: Maybe<NewsDocAccessFields_updatedAt_Read>;
  update?: Maybe<NewsDocAccessFields_updatedAt_Update>;
}

export interface NewsDocAccessFields_updatedAt_Create {
  __typename?: 'NewsDocAccessFields_updatedAt_Create';
  permission: ScalarsEnums['Boolean'];
}

export interface NewsDocAccessFields_updatedAt_Delete {
  __typename?: 'NewsDocAccessFields_updatedAt_Delete';
  permission: ScalarsEnums['Boolean'];
}

export interface NewsDocAccessFields_updatedAt_Read {
  __typename?: 'NewsDocAccessFields_updatedAt_Read';
  permission: ScalarsEnums['Boolean'];
}

export interface NewsDocAccessFields_updatedAt_Update {
  __typename?: 'NewsDocAccessFields_updatedAt_Update';
  permission: ScalarsEnums['Boolean'];
}

export interface NewsFields {
  __typename?: 'NewsFields';
  author?: Maybe<NewsFields_author>;
  content?: Maybe<NewsFields_content>;
  createdAt?: Maybe<NewsFields_createdAt>;
  featureImage?: Maybe<NewsFields_featureImage>;
  publishedDate?: Maybe<NewsFields_publishedDate>;
  readTime?: Maybe<NewsFields_readTime>;
  slug?: Maybe<NewsFields_slug>;
  status?: Maybe<NewsFields_status>;
  tags?: Maybe<NewsFields_tags>;
  title?: Maybe<NewsFields_title>;
  updatedAt?: Maybe<NewsFields_updatedAt>;
}

export interface NewsFields_author {
  __typename?: 'NewsFields_author';
  create?: Maybe<NewsFields_author_Create>;
  delete?: Maybe<NewsFields_author_Delete>;
  read?: Maybe<NewsFields_author_Read>;
  update?: Maybe<NewsFields_author_Update>;
}

export interface NewsFields_author_Create {
  __typename?: 'NewsFields_author_Create';
  permission: ScalarsEnums['Boolean'];
}

export interface NewsFields_author_Delete {
  __typename?: 'NewsFields_author_Delete';
  permission: ScalarsEnums['Boolean'];
}

export interface NewsFields_author_Read {
  __typename?: 'NewsFields_author_Read';
  permission: ScalarsEnums['Boolean'];
}

export interface NewsFields_author_Update {
  __typename?: 'NewsFields_author_Update';
  permission: ScalarsEnums['Boolean'];
}

export interface NewsFields_content {
  __typename?: 'NewsFields_content';
  create?: Maybe<NewsFields_content_Create>;
  delete?: Maybe<NewsFields_content_Delete>;
  read?: Maybe<NewsFields_content_Read>;
  update?: Maybe<NewsFields_content_Update>;
}

export interface NewsFields_content_Create {
  __typename?: 'NewsFields_content_Create';
  permission: ScalarsEnums['Boolean'];
}

export interface NewsFields_content_Delete {
  __typename?: 'NewsFields_content_Delete';
  permission: ScalarsEnums['Boolean'];
}

export interface NewsFields_content_Read {
  __typename?: 'NewsFields_content_Read';
  permission: ScalarsEnums['Boolean'];
}

export interface NewsFields_content_Update {
  __typename?: 'NewsFields_content_Update';
  permission: ScalarsEnums['Boolean'];
}

export interface NewsFields_createdAt {
  __typename?: 'NewsFields_createdAt';
  create?: Maybe<NewsFields_createdAt_Create>;
  delete?: Maybe<NewsFields_createdAt_Delete>;
  read?: Maybe<NewsFields_createdAt_Read>;
  update?: Maybe<NewsFields_createdAt_Update>;
}

export interface NewsFields_createdAt_Create {
  __typename?: 'NewsFields_createdAt_Create';
  permission: ScalarsEnums['Boolean'];
}

export interface NewsFields_createdAt_Delete {
  __typename?: 'NewsFields_createdAt_Delete';
  permission: ScalarsEnums['Boolean'];
}

export interface NewsFields_createdAt_Read {
  __typename?: 'NewsFields_createdAt_Read';
  permission: ScalarsEnums['Boolean'];
}

export interface NewsFields_createdAt_Update {
  __typename?: 'NewsFields_createdAt_Update';
  permission: ScalarsEnums['Boolean'];
}

export interface NewsFields_featureImage {
  __typename?: 'NewsFields_featureImage';
  create?: Maybe<NewsFields_featureImage_Create>;
  delete?: Maybe<NewsFields_featureImage_Delete>;
  read?: Maybe<NewsFields_featureImage_Read>;
  update?: Maybe<NewsFields_featureImage_Update>;
}

export interface NewsFields_featureImage_Create {
  __typename?: 'NewsFields_featureImage_Create';
  permission: ScalarsEnums['Boolean'];
}

export interface NewsFields_featureImage_Delete {
  __typename?: 'NewsFields_featureImage_Delete';
  permission: ScalarsEnums['Boolean'];
}

export interface NewsFields_featureImage_Read {
  __typename?: 'NewsFields_featureImage_Read';
  permission: ScalarsEnums['Boolean'];
}

export interface NewsFields_featureImage_Update {
  __typename?: 'NewsFields_featureImage_Update';
  permission: ScalarsEnums['Boolean'];
}

export interface NewsFields_publishedDate {
  __typename?: 'NewsFields_publishedDate';
  create?: Maybe<NewsFields_publishedDate_Create>;
  delete?: Maybe<NewsFields_publishedDate_Delete>;
  read?: Maybe<NewsFields_publishedDate_Read>;
  update?: Maybe<NewsFields_publishedDate_Update>;
}

export interface NewsFields_publishedDate_Create {
  __typename?: 'NewsFields_publishedDate_Create';
  permission: ScalarsEnums['Boolean'];
}

export interface NewsFields_publishedDate_Delete {
  __typename?: 'NewsFields_publishedDate_Delete';
  permission: ScalarsEnums['Boolean'];
}

export interface NewsFields_publishedDate_Read {
  __typename?: 'NewsFields_publishedDate_Read';
  permission: ScalarsEnums['Boolean'];
}

export interface NewsFields_publishedDate_Update {
  __typename?: 'NewsFields_publishedDate_Update';
  permission: ScalarsEnums['Boolean'];
}

export interface NewsFields_readTime {
  __typename?: 'NewsFields_readTime';
  create?: Maybe<NewsFields_readTime_Create>;
  delete?: Maybe<NewsFields_readTime_Delete>;
  read?: Maybe<NewsFields_readTime_Read>;
  update?: Maybe<NewsFields_readTime_Update>;
}

export interface NewsFields_readTime_Create {
  __typename?: 'NewsFields_readTime_Create';
  permission: ScalarsEnums['Boolean'];
}

export interface NewsFields_readTime_Delete {
  __typename?: 'NewsFields_readTime_Delete';
  permission: ScalarsEnums['Boolean'];
}

export interface NewsFields_readTime_Read {
  __typename?: 'NewsFields_readTime_Read';
  permission: ScalarsEnums['Boolean'];
}

export interface NewsFields_readTime_Update {
  __typename?: 'NewsFields_readTime_Update';
  permission: ScalarsEnums['Boolean'];
}

export interface NewsFields_slug {
  __typename?: 'NewsFields_slug';
  create?: Maybe<NewsFields_slug_Create>;
  delete?: Maybe<NewsFields_slug_Delete>;
  read?: Maybe<NewsFields_slug_Read>;
  update?: Maybe<NewsFields_slug_Update>;
}

export interface NewsFields_slug_Create {
  __typename?: 'NewsFields_slug_Create';
  permission: ScalarsEnums['Boolean'];
}

export interface NewsFields_slug_Delete {
  __typename?: 'NewsFields_slug_Delete';
  permission: ScalarsEnums['Boolean'];
}

export interface NewsFields_slug_Read {
  __typename?: 'NewsFields_slug_Read';
  permission: ScalarsEnums['Boolean'];
}

export interface NewsFields_slug_Update {
  __typename?: 'NewsFields_slug_Update';
  permission: ScalarsEnums['Boolean'];
}

export interface NewsFields_status {
  __typename?: 'NewsFields_status';
  create?: Maybe<NewsFields_status_Create>;
  delete?: Maybe<NewsFields_status_Delete>;
  read?: Maybe<NewsFields_status_Read>;
  update?: Maybe<NewsFields_status_Update>;
}

export interface NewsFields_status_Create {
  __typename?: 'NewsFields_status_Create';
  permission: ScalarsEnums['Boolean'];
}

export interface NewsFields_status_Delete {
  __typename?: 'NewsFields_status_Delete';
  permission: ScalarsEnums['Boolean'];
}

export interface NewsFields_status_Read {
  __typename?: 'NewsFields_status_Read';
  permission: ScalarsEnums['Boolean'];
}

export interface NewsFields_status_Update {
  __typename?: 'NewsFields_status_Update';
  permission: ScalarsEnums['Boolean'];
}

export interface NewsFields_tags {
  __typename?: 'NewsFields_tags';
  create?: Maybe<NewsFields_tags_Create>;
  delete?: Maybe<NewsFields_tags_Delete>;
  read?: Maybe<NewsFields_tags_Read>;
  update?: Maybe<NewsFields_tags_Update>;
}

export interface NewsFields_tags_Create {
  __typename?: 'NewsFields_tags_Create';
  permission: ScalarsEnums['Boolean'];
}

export interface NewsFields_tags_Delete {
  __typename?: 'NewsFields_tags_Delete';
  permission: ScalarsEnums['Boolean'];
}

export interface NewsFields_tags_Read {
  __typename?: 'NewsFields_tags_Read';
  permission: ScalarsEnums['Boolean'];
}

export interface NewsFields_tags_Update {
  __typename?: 'NewsFields_tags_Update';
  permission: ScalarsEnums['Boolean'];
}

export interface NewsFields_title {
  __typename?: 'NewsFields_title';
  create?: Maybe<NewsFields_title_Create>;
  delete?: Maybe<NewsFields_title_Delete>;
  read?: Maybe<NewsFields_title_Read>;
  update?: Maybe<NewsFields_title_Update>;
}

export interface NewsFields_title_Create {
  __typename?: 'NewsFields_title_Create';
  permission: ScalarsEnums['Boolean'];
}

export interface NewsFields_title_Delete {
  __typename?: 'NewsFields_title_Delete';
  permission: ScalarsEnums['Boolean'];
}

export interface NewsFields_title_Read {
  __typename?: 'NewsFields_title_Read';
  permission: ScalarsEnums['Boolean'];
}

export interface NewsFields_title_Update {
  __typename?: 'NewsFields_title_Update';
  permission: ScalarsEnums['Boolean'];
}

export interface NewsFields_updatedAt {
  __typename?: 'NewsFields_updatedAt';
  create?: Maybe<NewsFields_updatedAt_Create>;
  delete?: Maybe<NewsFields_updatedAt_Delete>;
  read?: Maybe<NewsFields_updatedAt_Read>;
  update?: Maybe<NewsFields_updatedAt_Update>;
}

export interface NewsFields_updatedAt_Create {
  __typename?: 'NewsFields_updatedAt_Create';
  permission: ScalarsEnums['Boolean'];
}

export interface NewsFields_updatedAt_Delete {
  __typename?: 'NewsFields_updatedAt_Delete';
  permission: ScalarsEnums['Boolean'];
}

export interface NewsFields_updatedAt_Read {
  __typename?: 'NewsFields_updatedAt_Read';
  permission: ScalarsEnums['Boolean'];
}

export interface NewsFields_updatedAt_Update {
  __typename?: 'NewsFields_updatedAt_Update';
  permission: ScalarsEnums['Boolean'];
}

export interface NewsReadAccess {
  __typename?: 'NewsReadAccess';
  permission: ScalarsEnums['Boolean'];
  where?: Maybe<ScalarsEnums['JSONObject']>;
}

export interface NewsReadDocAccess {
  __typename?: 'NewsReadDocAccess';
  permission: ScalarsEnums['Boolean'];
  where?: Maybe<ScalarsEnums['JSONObject']>;
}

export interface NewsTag {
  __typename?: 'NewsTag';
  id?: Maybe<ScalarsEnums['String']>;
  name?: Maybe<ScalarsEnums['String']>;
}

export interface NewsTags {
  __typename?: 'NewsTags';
  docs?: Maybe<Array<Maybe<NewsTag>>>;
  hasNextPage?: Maybe<ScalarsEnums['Boolean']>;
  hasPrevPage?: Maybe<ScalarsEnums['Boolean']>;
  limit?: Maybe<ScalarsEnums['Int']>;
  nextPage?: Maybe<ScalarsEnums['Int']>;
  offset?: Maybe<ScalarsEnums['Int']>;
  page?: Maybe<ScalarsEnums['Int']>;
  pagingCounter?: Maybe<ScalarsEnums['Int']>;
  prevPage?: Maybe<ScalarsEnums['Int']>;
  totalDocs?: Maybe<ScalarsEnums['Int']>;
  totalPages?: Maybe<ScalarsEnums['Int']>;
}

export interface NewsTagsCreateAccess {
  __typename?: 'NewsTagsCreateAccess';
  permission: ScalarsEnums['Boolean'];
  where?: Maybe<ScalarsEnums['JSONObject']>;
}

export interface NewsTagsCreateDocAccess {
  __typename?: 'NewsTagsCreateDocAccess';
  permission: ScalarsEnums['Boolean'];
  where?: Maybe<ScalarsEnums['JSONObject']>;
}

export interface NewsTagsDeleteAccess {
  __typename?: 'NewsTagsDeleteAccess';
  permission: ScalarsEnums['Boolean'];
  where?: Maybe<ScalarsEnums['JSONObject']>;
}

export interface NewsTagsDeleteDocAccess {
  __typename?: 'NewsTagsDeleteDocAccess';
  permission: ScalarsEnums['Boolean'];
  where?: Maybe<ScalarsEnums['JSONObject']>;
}

export interface NewsTagsDocAccessFields {
  __typename?: 'NewsTagsDocAccessFields';
  name?: Maybe<NewsTagsDocAccessFields_name>;
}

export interface NewsTagsDocAccessFields_name {
  __typename?: 'NewsTagsDocAccessFields_name';
  create?: Maybe<NewsTagsDocAccessFields_name_Create>;
  delete?: Maybe<NewsTagsDocAccessFields_name_Delete>;
  read?: Maybe<NewsTagsDocAccessFields_name_Read>;
  update?: Maybe<NewsTagsDocAccessFields_name_Update>;
}

export interface NewsTagsDocAccessFields_name_Create {
  __typename?: 'NewsTagsDocAccessFields_name_Create';
  permission: ScalarsEnums['Boolean'];
}

export interface NewsTagsDocAccessFields_name_Delete {
  __typename?: 'NewsTagsDocAccessFields_name_Delete';
  permission: ScalarsEnums['Boolean'];
}

export interface NewsTagsDocAccessFields_name_Read {
  __typename?: 'NewsTagsDocAccessFields_name_Read';
  permission: ScalarsEnums['Boolean'];
}

export interface NewsTagsDocAccessFields_name_Update {
  __typename?: 'NewsTagsDocAccessFields_name_Update';
  permission: ScalarsEnums['Boolean'];
}

export interface NewsTagsFields {
  __typename?: 'NewsTagsFields';
  name?: Maybe<NewsTagsFields_name>;
}

export interface NewsTagsFields_name {
  __typename?: 'NewsTagsFields_name';
  create?: Maybe<NewsTagsFields_name_Create>;
  delete?: Maybe<NewsTagsFields_name_Delete>;
  read?: Maybe<NewsTagsFields_name_Read>;
  update?: Maybe<NewsTagsFields_name_Update>;
}

export interface NewsTagsFields_name_Create {
  __typename?: 'NewsTagsFields_name_Create';
  permission: ScalarsEnums['Boolean'];
}

export interface NewsTagsFields_name_Delete {
  __typename?: 'NewsTagsFields_name_Delete';
  permission: ScalarsEnums['Boolean'];
}

export interface NewsTagsFields_name_Read {
  __typename?: 'NewsTagsFields_name_Read';
  permission: ScalarsEnums['Boolean'];
}

export interface NewsTagsFields_name_Update {
  __typename?: 'NewsTagsFields_name_Update';
  permission: ScalarsEnums['Boolean'];
}

export interface NewsTagsReadAccess {
  __typename?: 'NewsTagsReadAccess';
  permission: ScalarsEnums['Boolean'];
  where?: Maybe<ScalarsEnums['JSONObject']>;
}

export interface NewsTagsReadDocAccess {
  __typename?: 'NewsTagsReadDocAccess';
  permission: ScalarsEnums['Boolean'];
  where?: Maybe<ScalarsEnums['JSONObject']>;
}

export interface NewsTagsUpdateAccess {
  __typename?: 'NewsTagsUpdateAccess';
  permission: ScalarsEnums['Boolean'];
  where?: Maybe<ScalarsEnums['JSONObject']>;
}

export interface NewsTagsUpdateDocAccess {
  __typename?: 'NewsTagsUpdateDocAccess';
  permission: ScalarsEnums['Boolean'];
  where?: Maybe<ScalarsEnums['JSONObject']>;
}

export interface NewsUpdateAccess {
  __typename?: 'NewsUpdateAccess';
  permission: ScalarsEnums['Boolean'];
  where?: Maybe<ScalarsEnums['JSONObject']>;
}

export interface NewsUpdateDocAccess {
  __typename?: 'NewsUpdateDocAccess';
  permission: ScalarsEnums['Boolean'];
  where?: Maybe<ScalarsEnums['JSONObject']>;
}

export interface PayloadPreference {
  __typename?: 'PayloadPreference';
  createdAt?: Maybe<ScalarsEnums['DateTime']>;
  id?: Maybe<ScalarsEnums['String']>;
  key?: Maybe<ScalarsEnums['String']>;
  updatedAt?: Maybe<ScalarsEnums['DateTime']>;
  user: PayloadPreference_User_Relationship;
  value?: Maybe<ScalarsEnums['JSON']>;
}

export interface PayloadPreference_User {
  __typename?: 'User';
  $on: $PayloadPreference_User;
}

export interface PayloadPreference_User_Relationship {
  __typename?: 'PayloadPreference_User_Relationship';
  relationTo?: Maybe<ScalarsEnums['PayloadPreference_User_RelationTo']>;
  value?: Maybe<PayloadPreference_User>;
}

export interface PayloadPreferences {
  __typename?: 'PayloadPreferences';
  docs?: Maybe<Array<Maybe<PayloadPreference>>>;
  hasNextPage?: Maybe<ScalarsEnums['Boolean']>;
  hasPrevPage?: Maybe<ScalarsEnums['Boolean']>;
  limit?: Maybe<ScalarsEnums['Int']>;
  nextPage?: Maybe<ScalarsEnums['Int']>;
  offset?: Maybe<ScalarsEnums['Int']>;
  page?: Maybe<ScalarsEnums['Int']>;
  pagingCounter?: Maybe<ScalarsEnums['Int']>;
  prevPage?: Maybe<ScalarsEnums['Int']>;
  totalDocs?: Maybe<ScalarsEnums['Int']>;
  totalPages?: Maybe<ScalarsEnums['Int']>;
}

export interface PayloadPreferencesCreateAccess {
  __typename?: 'PayloadPreferencesCreateAccess';
  permission: ScalarsEnums['Boolean'];
  where?: Maybe<ScalarsEnums['JSONObject']>;
}

export interface PayloadPreferencesCreateDocAccess {
  __typename?: 'PayloadPreferencesCreateDocAccess';
  permission: ScalarsEnums['Boolean'];
  where?: Maybe<ScalarsEnums['JSONObject']>;
}

export interface PayloadPreferencesDeleteAccess {
  __typename?: 'PayloadPreferencesDeleteAccess';
  permission: ScalarsEnums['Boolean'];
  where?: Maybe<ScalarsEnums['JSONObject']>;
}

export interface PayloadPreferencesDeleteDocAccess {
  __typename?: 'PayloadPreferencesDeleteDocAccess';
  permission: ScalarsEnums['Boolean'];
  where?: Maybe<ScalarsEnums['JSONObject']>;
}

export interface PayloadPreferencesDocAccessFields {
  __typename?: 'PayloadPreferencesDocAccessFields';
  createdAt?: Maybe<PayloadPreferencesDocAccessFields_createdAt>;
  key?: Maybe<PayloadPreferencesDocAccessFields_key>;
  updatedAt?: Maybe<PayloadPreferencesDocAccessFields_updatedAt>;
  user?: Maybe<PayloadPreferencesDocAccessFields_user>;
  value?: Maybe<PayloadPreferencesDocAccessFields_value>;
}

export interface PayloadPreferencesDocAccessFields_createdAt {
  __typename?: 'PayloadPreferencesDocAccessFields_createdAt';
  create?: Maybe<PayloadPreferencesDocAccessFields_createdAt_Create>;
  delete?: Maybe<PayloadPreferencesDocAccessFields_createdAt_Delete>;
  read?: Maybe<PayloadPreferencesDocAccessFields_createdAt_Read>;
  update?: Maybe<PayloadPreferencesDocAccessFields_createdAt_Update>;
}

export interface PayloadPreferencesDocAccessFields_createdAt_Create {
  __typename?: 'PayloadPreferencesDocAccessFields_createdAt_Create';
  permission: ScalarsEnums['Boolean'];
}

export interface PayloadPreferencesDocAccessFields_createdAt_Delete {
  __typename?: 'PayloadPreferencesDocAccessFields_createdAt_Delete';
  permission: ScalarsEnums['Boolean'];
}

export interface PayloadPreferencesDocAccessFields_createdAt_Read {
  __typename?: 'PayloadPreferencesDocAccessFields_createdAt_Read';
  permission: ScalarsEnums['Boolean'];
}

export interface PayloadPreferencesDocAccessFields_createdAt_Update {
  __typename?: 'PayloadPreferencesDocAccessFields_createdAt_Update';
  permission: ScalarsEnums['Boolean'];
}

export interface PayloadPreferencesDocAccessFields_key {
  __typename?: 'PayloadPreferencesDocAccessFields_key';
  create?: Maybe<PayloadPreferencesDocAccessFields_key_Create>;
  delete?: Maybe<PayloadPreferencesDocAccessFields_key_Delete>;
  read?: Maybe<PayloadPreferencesDocAccessFields_key_Read>;
  update?: Maybe<PayloadPreferencesDocAccessFields_key_Update>;
}

export interface PayloadPreferencesDocAccessFields_key_Create {
  __typename?: 'PayloadPreferencesDocAccessFields_key_Create';
  permission: ScalarsEnums['Boolean'];
}

export interface PayloadPreferencesDocAccessFields_key_Delete {
  __typename?: 'PayloadPreferencesDocAccessFields_key_Delete';
  permission: ScalarsEnums['Boolean'];
}

export interface PayloadPreferencesDocAccessFields_key_Read {
  __typename?: 'PayloadPreferencesDocAccessFields_key_Read';
  permission: ScalarsEnums['Boolean'];
}

export interface PayloadPreferencesDocAccessFields_key_Update {
  __typename?: 'PayloadPreferencesDocAccessFields_key_Update';
  permission: ScalarsEnums['Boolean'];
}

export interface PayloadPreferencesDocAccessFields_updatedAt {
  __typename?: 'PayloadPreferencesDocAccessFields_updatedAt';
  create?: Maybe<PayloadPreferencesDocAccessFields_updatedAt_Create>;
  delete?: Maybe<PayloadPreferencesDocAccessFields_updatedAt_Delete>;
  read?: Maybe<PayloadPreferencesDocAccessFields_updatedAt_Read>;
  update?: Maybe<PayloadPreferencesDocAccessFields_updatedAt_Update>;
}

export interface PayloadPreferencesDocAccessFields_updatedAt_Create {
  __typename?: 'PayloadPreferencesDocAccessFields_updatedAt_Create';
  permission: ScalarsEnums['Boolean'];
}

export interface PayloadPreferencesDocAccessFields_updatedAt_Delete {
  __typename?: 'PayloadPreferencesDocAccessFields_updatedAt_Delete';
  permission: ScalarsEnums['Boolean'];
}

export interface PayloadPreferencesDocAccessFields_updatedAt_Read {
  __typename?: 'PayloadPreferencesDocAccessFields_updatedAt_Read';
  permission: ScalarsEnums['Boolean'];
}

export interface PayloadPreferencesDocAccessFields_updatedAt_Update {
  __typename?: 'PayloadPreferencesDocAccessFields_updatedAt_Update';
  permission: ScalarsEnums['Boolean'];
}

export interface PayloadPreferencesDocAccessFields_user {
  __typename?: 'PayloadPreferencesDocAccessFields_user';
  create?: Maybe<PayloadPreferencesDocAccessFields_user_Create>;
  delete?: Maybe<PayloadPreferencesDocAccessFields_user_Delete>;
  read?: Maybe<PayloadPreferencesDocAccessFields_user_Read>;
  update?: Maybe<PayloadPreferencesDocAccessFields_user_Update>;
}

export interface PayloadPreferencesDocAccessFields_user_Create {
  __typename?: 'PayloadPreferencesDocAccessFields_user_Create';
  permission: ScalarsEnums['Boolean'];
}

export interface PayloadPreferencesDocAccessFields_user_Delete {
  __typename?: 'PayloadPreferencesDocAccessFields_user_Delete';
  permission: ScalarsEnums['Boolean'];
}

export interface PayloadPreferencesDocAccessFields_user_Read {
  __typename?: 'PayloadPreferencesDocAccessFields_user_Read';
  permission: ScalarsEnums['Boolean'];
}

export interface PayloadPreferencesDocAccessFields_user_Update {
  __typename?: 'PayloadPreferencesDocAccessFields_user_Update';
  permission: ScalarsEnums['Boolean'];
}

export interface PayloadPreferencesDocAccessFields_value {
  __typename?: 'PayloadPreferencesDocAccessFields_value';
  create?: Maybe<PayloadPreferencesDocAccessFields_value_Create>;
  delete?: Maybe<PayloadPreferencesDocAccessFields_value_Delete>;
  read?: Maybe<PayloadPreferencesDocAccessFields_value_Read>;
  update?: Maybe<PayloadPreferencesDocAccessFields_value_Update>;
}

export interface PayloadPreferencesDocAccessFields_value_Create {
  __typename?: 'PayloadPreferencesDocAccessFields_value_Create';
  permission: ScalarsEnums['Boolean'];
}

export interface PayloadPreferencesDocAccessFields_value_Delete {
  __typename?: 'PayloadPreferencesDocAccessFields_value_Delete';
  permission: ScalarsEnums['Boolean'];
}

export interface PayloadPreferencesDocAccessFields_value_Read {
  __typename?: 'PayloadPreferencesDocAccessFields_value_Read';
  permission: ScalarsEnums['Boolean'];
}

export interface PayloadPreferencesDocAccessFields_value_Update {
  __typename?: 'PayloadPreferencesDocAccessFields_value_Update';
  permission: ScalarsEnums['Boolean'];
}

export interface PayloadPreferencesFields {
  __typename?: 'PayloadPreferencesFields';
  createdAt?: Maybe<PayloadPreferencesFields_createdAt>;
  key?: Maybe<PayloadPreferencesFields_key>;
  updatedAt?: Maybe<PayloadPreferencesFields_updatedAt>;
  user?: Maybe<PayloadPreferencesFields_user>;
  value?: Maybe<PayloadPreferencesFields_value>;
}

export interface PayloadPreferencesFields_createdAt {
  __typename?: 'PayloadPreferencesFields_createdAt';
  create?: Maybe<PayloadPreferencesFields_createdAt_Create>;
  delete?: Maybe<PayloadPreferencesFields_createdAt_Delete>;
  read?: Maybe<PayloadPreferencesFields_createdAt_Read>;
  update?: Maybe<PayloadPreferencesFields_createdAt_Update>;
}

export interface PayloadPreferencesFields_createdAt_Create {
  __typename?: 'PayloadPreferencesFields_createdAt_Create';
  permission: ScalarsEnums['Boolean'];
}

export interface PayloadPreferencesFields_createdAt_Delete {
  __typename?: 'PayloadPreferencesFields_createdAt_Delete';
  permission: ScalarsEnums['Boolean'];
}

export interface PayloadPreferencesFields_createdAt_Read {
  __typename?: 'PayloadPreferencesFields_createdAt_Read';
  permission: ScalarsEnums['Boolean'];
}

export interface PayloadPreferencesFields_createdAt_Update {
  __typename?: 'PayloadPreferencesFields_createdAt_Update';
  permission: ScalarsEnums['Boolean'];
}

export interface PayloadPreferencesFields_key {
  __typename?: 'PayloadPreferencesFields_key';
  create?: Maybe<PayloadPreferencesFields_key_Create>;
  delete?: Maybe<PayloadPreferencesFields_key_Delete>;
  read?: Maybe<PayloadPreferencesFields_key_Read>;
  update?: Maybe<PayloadPreferencesFields_key_Update>;
}

export interface PayloadPreferencesFields_key_Create {
  __typename?: 'PayloadPreferencesFields_key_Create';
  permission: ScalarsEnums['Boolean'];
}

export interface PayloadPreferencesFields_key_Delete {
  __typename?: 'PayloadPreferencesFields_key_Delete';
  permission: ScalarsEnums['Boolean'];
}

export interface PayloadPreferencesFields_key_Read {
  __typename?: 'PayloadPreferencesFields_key_Read';
  permission: ScalarsEnums['Boolean'];
}

export interface PayloadPreferencesFields_key_Update {
  __typename?: 'PayloadPreferencesFields_key_Update';
  permission: ScalarsEnums['Boolean'];
}

export interface PayloadPreferencesFields_updatedAt {
  __typename?: 'PayloadPreferencesFields_updatedAt';
  create?: Maybe<PayloadPreferencesFields_updatedAt_Create>;
  delete?: Maybe<PayloadPreferencesFields_updatedAt_Delete>;
  read?: Maybe<PayloadPreferencesFields_updatedAt_Read>;
  update?: Maybe<PayloadPreferencesFields_updatedAt_Update>;
}

export interface PayloadPreferencesFields_updatedAt_Create {
  __typename?: 'PayloadPreferencesFields_updatedAt_Create';
  permission: ScalarsEnums['Boolean'];
}

export interface PayloadPreferencesFields_updatedAt_Delete {
  __typename?: 'PayloadPreferencesFields_updatedAt_Delete';
  permission: ScalarsEnums['Boolean'];
}

export interface PayloadPreferencesFields_updatedAt_Read {
  __typename?: 'PayloadPreferencesFields_updatedAt_Read';
  permission: ScalarsEnums['Boolean'];
}

export interface PayloadPreferencesFields_updatedAt_Update {
  __typename?: 'PayloadPreferencesFields_updatedAt_Update';
  permission: ScalarsEnums['Boolean'];
}

export interface PayloadPreferencesFields_user {
  __typename?: 'PayloadPreferencesFields_user';
  create?: Maybe<PayloadPreferencesFields_user_Create>;
  delete?: Maybe<PayloadPreferencesFields_user_Delete>;
  read?: Maybe<PayloadPreferencesFields_user_Read>;
  update?: Maybe<PayloadPreferencesFields_user_Update>;
}

export interface PayloadPreferencesFields_user_Create {
  __typename?: 'PayloadPreferencesFields_user_Create';
  permission: ScalarsEnums['Boolean'];
}

export interface PayloadPreferencesFields_user_Delete {
  __typename?: 'PayloadPreferencesFields_user_Delete';
  permission: ScalarsEnums['Boolean'];
}

export interface PayloadPreferencesFields_user_Read {
  __typename?: 'PayloadPreferencesFields_user_Read';
  permission: ScalarsEnums['Boolean'];
}

export interface PayloadPreferencesFields_user_Update {
  __typename?: 'PayloadPreferencesFields_user_Update';
  permission: ScalarsEnums['Boolean'];
}

export interface PayloadPreferencesFields_value {
  __typename?: 'PayloadPreferencesFields_value';
  create?: Maybe<PayloadPreferencesFields_value_Create>;
  delete?: Maybe<PayloadPreferencesFields_value_Delete>;
  read?: Maybe<PayloadPreferencesFields_value_Read>;
  update?: Maybe<PayloadPreferencesFields_value_Update>;
}

export interface PayloadPreferencesFields_value_Create {
  __typename?: 'PayloadPreferencesFields_value_Create';
  permission: ScalarsEnums['Boolean'];
}

export interface PayloadPreferencesFields_value_Delete {
  __typename?: 'PayloadPreferencesFields_value_Delete';
  permission: ScalarsEnums['Boolean'];
}

export interface PayloadPreferencesFields_value_Read {
  __typename?: 'PayloadPreferencesFields_value_Read';
  permission: ScalarsEnums['Boolean'];
}

export interface PayloadPreferencesFields_value_Update {
  __typename?: 'PayloadPreferencesFields_value_Update';
  permission: ScalarsEnums['Boolean'];
}

export interface PayloadPreferencesReadAccess {
  __typename?: 'PayloadPreferencesReadAccess';
  permission: ScalarsEnums['Boolean'];
  where?: Maybe<ScalarsEnums['JSONObject']>;
}

export interface PayloadPreferencesReadDocAccess {
  __typename?: 'PayloadPreferencesReadDocAccess';
  permission: ScalarsEnums['Boolean'];
  where?: Maybe<ScalarsEnums['JSONObject']>;
}

export interface PayloadPreferencesUpdateAccess {
  __typename?: 'PayloadPreferencesUpdateAccess';
  permission: ScalarsEnums['Boolean'];
  where?: Maybe<ScalarsEnums['JSONObject']>;
}

export interface PayloadPreferencesUpdateDocAccess {
  __typename?: 'PayloadPreferencesUpdateDocAccess';
  permission: ScalarsEnums['Boolean'];
  where?: Maybe<ScalarsEnums['JSONObject']>;
}

export interface User {
  __typename?: 'User';
  _verificationToken?: Maybe<ScalarsEnums['String']>;
  _verified?: Maybe<ScalarsEnums['Boolean']>;
  avatarImage: (args?: {
    where?: Maybe<User_AvatarImage_where>;
  }) => Maybe<Media>;
  createdAt?: Maybe<ScalarsEnums['DateTime']>;
  email: ScalarsEnums['EmailAddress'];
  hash?: Maybe<ScalarsEnums['String']>;
  id?: Maybe<ScalarsEnums['String']>;
  lockUntil?: Maybe<ScalarsEnums['DateTime']>;
  loginAttempts?: Maybe<ScalarsEnums['Float']>;
  name?: Maybe<ScalarsEnums['String']>;
  password: ScalarsEnums['String'];
  resetPasswordExpiration?: Maybe<ScalarsEnums['DateTime']>;
  resetPasswordToken?: Maybe<ScalarsEnums['String']>;
  role: ScalarsEnums['User_role'];
  salt?: Maybe<ScalarsEnums['String']>;
  updatedAt?: Maybe<ScalarsEnums['DateTime']>;
}

export interface Users {
  __typename?: 'Users';
  docs?: Maybe<Array<Maybe<User>>>;
  hasNextPage?: Maybe<ScalarsEnums['Boolean']>;
  hasPrevPage?: Maybe<ScalarsEnums['Boolean']>;
  limit?: Maybe<ScalarsEnums['Int']>;
  nextPage?: Maybe<ScalarsEnums['Int']>;
  offset?: Maybe<ScalarsEnums['Int']>;
  page?: Maybe<ScalarsEnums['Int']>;
  pagingCounter?: Maybe<ScalarsEnums['Int']>;
  prevPage?: Maybe<ScalarsEnums['Int']>;
  totalDocs?: Maybe<ScalarsEnums['Int']>;
  totalPages?: Maybe<ScalarsEnums['Int']>;
}

export interface UsersCreateAccess {
  __typename?: 'UsersCreateAccess';
  permission: ScalarsEnums['Boolean'];
  where?: Maybe<ScalarsEnums['JSONObject']>;
}

export interface UsersCreateDocAccess {
  __typename?: 'UsersCreateDocAccess';
  permission: ScalarsEnums['Boolean'];
  where?: Maybe<ScalarsEnums['JSONObject']>;
}

export interface UsersDeleteAccess {
  __typename?: 'UsersDeleteAccess';
  permission: ScalarsEnums['Boolean'];
  where?: Maybe<ScalarsEnums['JSONObject']>;
}

export interface UsersDeleteDocAccess {
  __typename?: 'UsersDeleteDocAccess';
  permission: ScalarsEnums['Boolean'];
  where?: Maybe<ScalarsEnums['JSONObject']>;
}

export interface UsersDocAccessFields {
  __typename?: 'UsersDocAccessFields';
  _verified?: Maybe<UsersDocAccessFields__verified>;
  avatarImage?: Maybe<UsersDocAccessFields_avatarImage>;
  createdAt?: Maybe<UsersDocAccessFields_createdAt>;
  email?: Maybe<UsersDocAccessFields_email>;
  name?: Maybe<UsersDocAccessFields_name>;
  password?: Maybe<UsersDocAccessFields_password>;
  role?: Maybe<UsersDocAccessFields_role>;
  updatedAt?: Maybe<UsersDocAccessFields_updatedAt>;
}

export interface UsersDocAccessFields__verified {
  __typename?: 'UsersDocAccessFields__verified';
  create?: Maybe<UsersDocAccessFields__verified_Create>;
  delete?: Maybe<UsersDocAccessFields__verified_Delete>;
  read?: Maybe<UsersDocAccessFields__verified_Read>;
  update?: Maybe<UsersDocAccessFields__verified_Update>;
}

export interface UsersDocAccessFields__verified_Create {
  __typename?: 'UsersDocAccessFields__verified_Create';
  permission: ScalarsEnums['Boolean'];
}

export interface UsersDocAccessFields__verified_Delete {
  __typename?: 'UsersDocAccessFields__verified_Delete';
  permission: ScalarsEnums['Boolean'];
}

export interface UsersDocAccessFields__verified_Read {
  __typename?: 'UsersDocAccessFields__verified_Read';
  permission: ScalarsEnums['Boolean'];
}

export interface UsersDocAccessFields__verified_Update {
  __typename?: 'UsersDocAccessFields__verified_Update';
  permission: ScalarsEnums['Boolean'];
}

export interface UsersDocAccessFields_avatarImage {
  __typename?: 'UsersDocAccessFields_avatarImage';
  create?: Maybe<UsersDocAccessFields_avatarImage_Create>;
  delete?: Maybe<UsersDocAccessFields_avatarImage_Delete>;
  read?: Maybe<UsersDocAccessFields_avatarImage_Read>;
  update?: Maybe<UsersDocAccessFields_avatarImage_Update>;
}

export interface UsersDocAccessFields_avatarImage_Create {
  __typename?: 'UsersDocAccessFields_avatarImage_Create';
  permission: ScalarsEnums['Boolean'];
}

export interface UsersDocAccessFields_avatarImage_Delete {
  __typename?: 'UsersDocAccessFields_avatarImage_Delete';
  permission: ScalarsEnums['Boolean'];
}

export interface UsersDocAccessFields_avatarImage_Read {
  __typename?: 'UsersDocAccessFields_avatarImage_Read';
  permission: ScalarsEnums['Boolean'];
}

export interface UsersDocAccessFields_avatarImage_Update {
  __typename?: 'UsersDocAccessFields_avatarImage_Update';
  permission: ScalarsEnums['Boolean'];
}

export interface UsersDocAccessFields_createdAt {
  __typename?: 'UsersDocAccessFields_createdAt';
  create?: Maybe<UsersDocAccessFields_createdAt_Create>;
  delete?: Maybe<UsersDocAccessFields_createdAt_Delete>;
  read?: Maybe<UsersDocAccessFields_createdAt_Read>;
  update?: Maybe<UsersDocAccessFields_createdAt_Update>;
}

export interface UsersDocAccessFields_createdAt_Create {
  __typename?: 'UsersDocAccessFields_createdAt_Create';
  permission: ScalarsEnums['Boolean'];
}

export interface UsersDocAccessFields_createdAt_Delete {
  __typename?: 'UsersDocAccessFields_createdAt_Delete';
  permission: ScalarsEnums['Boolean'];
}

export interface UsersDocAccessFields_createdAt_Read {
  __typename?: 'UsersDocAccessFields_createdAt_Read';
  permission: ScalarsEnums['Boolean'];
}

export interface UsersDocAccessFields_createdAt_Update {
  __typename?: 'UsersDocAccessFields_createdAt_Update';
  permission: ScalarsEnums['Boolean'];
}

export interface UsersDocAccessFields_email {
  __typename?: 'UsersDocAccessFields_email';
  create?: Maybe<UsersDocAccessFields_email_Create>;
  delete?: Maybe<UsersDocAccessFields_email_Delete>;
  read?: Maybe<UsersDocAccessFields_email_Read>;
  update?: Maybe<UsersDocAccessFields_email_Update>;
}

export interface UsersDocAccessFields_email_Create {
  __typename?: 'UsersDocAccessFields_email_Create';
  permission: ScalarsEnums['Boolean'];
}

export interface UsersDocAccessFields_email_Delete {
  __typename?: 'UsersDocAccessFields_email_Delete';
  permission: ScalarsEnums['Boolean'];
}

export interface UsersDocAccessFields_email_Read {
  __typename?: 'UsersDocAccessFields_email_Read';
  permission: ScalarsEnums['Boolean'];
}

export interface UsersDocAccessFields_email_Update {
  __typename?: 'UsersDocAccessFields_email_Update';
  permission: ScalarsEnums['Boolean'];
}

export interface UsersDocAccessFields_name {
  __typename?: 'UsersDocAccessFields_name';
  create?: Maybe<UsersDocAccessFields_name_Create>;
  delete?: Maybe<UsersDocAccessFields_name_Delete>;
  read?: Maybe<UsersDocAccessFields_name_Read>;
  update?: Maybe<UsersDocAccessFields_name_Update>;
}

export interface UsersDocAccessFields_name_Create {
  __typename?: 'UsersDocAccessFields_name_Create';
  permission: ScalarsEnums['Boolean'];
}

export interface UsersDocAccessFields_name_Delete {
  __typename?: 'UsersDocAccessFields_name_Delete';
  permission: ScalarsEnums['Boolean'];
}

export interface UsersDocAccessFields_name_Read {
  __typename?: 'UsersDocAccessFields_name_Read';
  permission: ScalarsEnums['Boolean'];
}

export interface UsersDocAccessFields_name_Update {
  __typename?: 'UsersDocAccessFields_name_Update';
  permission: ScalarsEnums['Boolean'];
}

export interface UsersDocAccessFields_password {
  __typename?: 'UsersDocAccessFields_password';
  create?: Maybe<UsersDocAccessFields_password_Create>;
  delete?: Maybe<UsersDocAccessFields_password_Delete>;
  read?: Maybe<UsersDocAccessFields_password_Read>;
  update?: Maybe<UsersDocAccessFields_password_Update>;
}

export interface UsersDocAccessFields_password_Create {
  __typename?: 'UsersDocAccessFields_password_Create';
  permission: ScalarsEnums['Boolean'];
}

export interface UsersDocAccessFields_password_Delete {
  __typename?: 'UsersDocAccessFields_password_Delete';
  permission: ScalarsEnums['Boolean'];
}

export interface UsersDocAccessFields_password_Read {
  __typename?: 'UsersDocAccessFields_password_Read';
  permission: ScalarsEnums['Boolean'];
}

export interface UsersDocAccessFields_password_Update {
  __typename?: 'UsersDocAccessFields_password_Update';
  permission: ScalarsEnums['Boolean'];
}

export interface UsersDocAccessFields_role {
  __typename?: 'UsersDocAccessFields_role';
  create?: Maybe<UsersDocAccessFields_role_Create>;
  delete?: Maybe<UsersDocAccessFields_role_Delete>;
  read?: Maybe<UsersDocAccessFields_role_Read>;
  update?: Maybe<UsersDocAccessFields_role_Update>;
}

export interface UsersDocAccessFields_role_Create {
  __typename?: 'UsersDocAccessFields_role_Create';
  permission: ScalarsEnums['Boolean'];
}

export interface UsersDocAccessFields_role_Delete {
  __typename?: 'UsersDocAccessFields_role_Delete';
  permission: ScalarsEnums['Boolean'];
}

export interface UsersDocAccessFields_role_Read {
  __typename?: 'UsersDocAccessFields_role_Read';
  permission: ScalarsEnums['Boolean'];
}

export interface UsersDocAccessFields_role_Update {
  __typename?: 'UsersDocAccessFields_role_Update';
  permission: ScalarsEnums['Boolean'];
}

export interface UsersDocAccessFields_updatedAt {
  __typename?: 'UsersDocAccessFields_updatedAt';
  create?: Maybe<UsersDocAccessFields_updatedAt_Create>;
  delete?: Maybe<UsersDocAccessFields_updatedAt_Delete>;
  read?: Maybe<UsersDocAccessFields_updatedAt_Read>;
  update?: Maybe<UsersDocAccessFields_updatedAt_Update>;
}

export interface UsersDocAccessFields_updatedAt_Create {
  __typename?: 'UsersDocAccessFields_updatedAt_Create';
  permission: ScalarsEnums['Boolean'];
}

export interface UsersDocAccessFields_updatedAt_Delete {
  __typename?: 'UsersDocAccessFields_updatedAt_Delete';
  permission: ScalarsEnums['Boolean'];
}

export interface UsersDocAccessFields_updatedAt_Read {
  __typename?: 'UsersDocAccessFields_updatedAt_Read';
  permission: ScalarsEnums['Boolean'];
}

export interface UsersDocAccessFields_updatedAt_Update {
  __typename?: 'UsersDocAccessFields_updatedAt_Update';
  permission: ScalarsEnums['Boolean'];
}

export interface UsersFields {
  __typename?: 'UsersFields';
  _verified?: Maybe<UsersFields__verified>;
  avatarImage?: Maybe<UsersFields_avatarImage>;
  createdAt?: Maybe<UsersFields_createdAt>;
  email?: Maybe<UsersFields_email>;
  name?: Maybe<UsersFields_name>;
  password?: Maybe<UsersFields_password>;
  role?: Maybe<UsersFields_role>;
  updatedAt?: Maybe<UsersFields_updatedAt>;
}

export interface UsersFields__verified {
  __typename?: 'UsersFields__verified';
  create?: Maybe<UsersFields__verified_Create>;
  delete?: Maybe<UsersFields__verified_Delete>;
  read?: Maybe<UsersFields__verified_Read>;
  update?: Maybe<UsersFields__verified_Update>;
}

export interface UsersFields__verified_Create {
  __typename?: 'UsersFields__verified_Create';
  permission: ScalarsEnums['Boolean'];
}

export interface UsersFields__verified_Delete {
  __typename?: 'UsersFields__verified_Delete';
  permission: ScalarsEnums['Boolean'];
}

export interface UsersFields__verified_Read {
  __typename?: 'UsersFields__verified_Read';
  permission: ScalarsEnums['Boolean'];
}

export interface UsersFields__verified_Update {
  __typename?: 'UsersFields__verified_Update';
  permission: ScalarsEnums['Boolean'];
}

export interface UsersFields_avatarImage {
  __typename?: 'UsersFields_avatarImage';
  create?: Maybe<UsersFields_avatarImage_Create>;
  delete?: Maybe<UsersFields_avatarImage_Delete>;
  read?: Maybe<UsersFields_avatarImage_Read>;
  update?: Maybe<UsersFields_avatarImage_Update>;
}

export interface UsersFields_avatarImage_Create {
  __typename?: 'UsersFields_avatarImage_Create';
  permission: ScalarsEnums['Boolean'];
}

export interface UsersFields_avatarImage_Delete {
  __typename?: 'UsersFields_avatarImage_Delete';
  permission: ScalarsEnums['Boolean'];
}

export interface UsersFields_avatarImage_Read {
  __typename?: 'UsersFields_avatarImage_Read';
  permission: ScalarsEnums['Boolean'];
}

export interface UsersFields_avatarImage_Update {
  __typename?: 'UsersFields_avatarImage_Update';
  permission: ScalarsEnums['Boolean'];
}

export interface UsersFields_createdAt {
  __typename?: 'UsersFields_createdAt';
  create?: Maybe<UsersFields_createdAt_Create>;
  delete?: Maybe<UsersFields_createdAt_Delete>;
  read?: Maybe<UsersFields_createdAt_Read>;
  update?: Maybe<UsersFields_createdAt_Update>;
}

export interface UsersFields_createdAt_Create {
  __typename?: 'UsersFields_createdAt_Create';
  permission: ScalarsEnums['Boolean'];
}

export interface UsersFields_createdAt_Delete {
  __typename?: 'UsersFields_createdAt_Delete';
  permission: ScalarsEnums['Boolean'];
}

export interface UsersFields_createdAt_Read {
  __typename?: 'UsersFields_createdAt_Read';
  permission: ScalarsEnums['Boolean'];
}

export interface UsersFields_createdAt_Update {
  __typename?: 'UsersFields_createdAt_Update';
  permission: ScalarsEnums['Boolean'];
}

export interface UsersFields_email {
  __typename?: 'UsersFields_email';
  create?: Maybe<UsersFields_email_Create>;
  delete?: Maybe<UsersFields_email_Delete>;
  read?: Maybe<UsersFields_email_Read>;
  update?: Maybe<UsersFields_email_Update>;
}

export interface UsersFields_email_Create {
  __typename?: 'UsersFields_email_Create';
  permission: ScalarsEnums['Boolean'];
}

export interface UsersFields_email_Delete {
  __typename?: 'UsersFields_email_Delete';
  permission: ScalarsEnums['Boolean'];
}

export interface UsersFields_email_Read {
  __typename?: 'UsersFields_email_Read';
  permission: ScalarsEnums['Boolean'];
}

export interface UsersFields_email_Update {
  __typename?: 'UsersFields_email_Update';
  permission: ScalarsEnums['Boolean'];
}

export interface UsersFields_name {
  __typename?: 'UsersFields_name';
  create?: Maybe<UsersFields_name_Create>;
  delete?: Maybe<UsersFields_name_Delete>;
  read?: Maybe<UsersFields_name_Read>;
  update?: Maybe<UsersFields_name_Update>;
}

export interface UsersFields_name_Create {
  __typename?: 'UsersFields_name_Create';
  permission: ScalarsEnums['Boolean'];
}

export interface UsersFields_name_Delete {
  __typename?: 'UsersFields_name_Delete';
  permission: ScalarsEnums['Boolean'];
}

export interface UsersFields_name_Read {
  __typename?: 'UsersFields_name_Read';
  permission: ScalarsEnums['Boolean'];
}

export interface UsersFields_name_Update {
  __typename?: 'UsersFields_name_Update';
  permission: ScalarsEnums['Boolean'];
}

export interface UsersFields_password {
  __typename?: 'UsersFields_password';
  create?: Maybe<UsersFields_password_Create>;
  delete?: Maybe<UsersFields_password_Delete>;
  read?: Maybe<UsersFields_password_Read>;
  update?: Maybe<UsersFields_password_Update>;
}

export interface UsersFields_password_Create {
  __typename?: 'UsersFields_password_Create';
  permission: ScalarsEnums['Boolean'];
}

export interface UsersFields_password_Delete {
  __typename?: 'UsersFields_password_Delete';
  permission: ScalarsEnums['Boolean'];
}

export interface UsersFields_password_Read {
  __typename?: 'UsersFields_password_Read';
  permission: ScalarsEnums['Boolean'];
}

export interface UsersFields_password_Update {
  __typename?: 'UsersFields_password_Update';
  permission: ScalarsEnums['Boolean'];
}

export interface UsersFields_role {
  __typename?: 'UsersFields_role';
  create?: Maybe<UsersFields_role_Create>;
  delete?: Maybe<UsersFields_role_Delete>;
  read?: Maybe<UsersFields_role_Read>;
  update?: Maybe<UsersFields_role_Update>;
}

export interface UsersFields_role_Create {
  __typename?: 'UsersFields_role_Create';
  permission: ScalarsEnums['Boolean'];
}

export interface UsersFields_role_Delete {
  __typename?: 'UsersFields_role_Delete';
  permission: ScalarsEnums['Boolean'];
}

export interface UsersFields_role_Read {
  __typename?: 'UsersFields_role_Read';
  permission: ScalarsEnums['Boolean'];
}

export interface UsersFields_role_Update {
  __typename?: 'UsersFields_role_Update';
  permission: ScalarsEnums['Boolean'];
}

export interface UsersFields_updatedAt {
  __typename?: 'UsersFields_updatedAt';
  create?: Maybe<UsersFields_updatedAt_Create>;
  delete?: Maybe<UsersFields_updatedAt_Delete>;
  read?: Maybe<UsersFields_updatedAt_Read>;
  update?: Maybe<UsersFields_updatedAt_Update>;
}

export interface UsersFields_updatedAt_Create {
  __typename?: 'UsersFields_updatedAt_Create';
  permission: ScalarsEnums['Boolean'];
}

export interface UsersFields_updatedAt_Delete {
  __typename?: 'UsersFields_updatedAt_Delete';
  permission: ScalarsEnums['Boolean'];
}

export interface UsersFields_updatedAt_Read {
  __typename?: 'UsersFields_updatedAt_Read';
  permission: ScalarsEnums['Boolean'];
}

export interface UsersFields_updatedAt_Update {
  __typename?: 'UsersFields_updatedAt_Update';
  permission: ScalarsEnums['Boolean'];
}

export interface UsersReadAccess {
  __typename?: 'UsersReadAccess';
  permission: ScalarsEnums['Boolean'];
  where?: Maybe<ScalarsEnums['JSONObject']>;
}

export interface UsersReadDocAccess {
  __typename?: 'UsersReadDocAccess';
  permission: ScalarsEnums['Boolean'];
  where?: Maybe<ScalarsEnums['JSONObject']>;
}

export interface UsersUnlockAccess {
  __typename?: 'UsersUnlockAccess';
  permission: ScalarsEnums['Boolean'];
  where?: Maybe<ScalarsEnums['JSONObject']>;
}

export interface UsersUnlockDocAccess {
  __typename?: 'UsersUnlockDocAccess';
  permission: ScalarsEnums['Boolean'];
  where?: Maybe<ScalarsEnums['JSONObject']>;
}

export interface UsersUpdateAccess {
  __typename?: 'UsersUpdateAccess';
  permission: ScalarsEnums['Boolean'];
  where?: Maybe<ScalarsEnums['JSONObject']>;
}

export interface UsersUpdateDocAccess {
  __typename?: 'UsersUpdateDocAccess';
  permission: ScalarsEnums['Boolean'];
  where?: Maybe<ScalarsEnums['JSONObject']>;
}

export interface Volume {
  __typename?: 'Volume';
  about: (args?: {
    depth?: Maybe<Scalars['Int']>;
  }) => Maybe<ScalarsEnums['JSON']>;
  createdAt?: Maybe<ScalarsEnums['DateTime']>;
  id?: Maybe<ScalarsEnums['String']>;
  publishedDate?: Maybe<ScalarsEnums['DateTime']>;
  slug?: Maybe<ScalarsEnums['String']>;
  title: ScalarsEnums['String'];
  updatedAt?: Maybe<ScalarsEnums['DateTime']>;
  volumeCover: (args?: {
    where?: Maybe<Volume_VolumeCover_where>;
  }) => Maybe<Media>;
  volumePdf: (args?: { where?: Maybe<Volume_VolumePdf_where> }) => Maybe<Media>;
}

export interface Volumes {
  __typename?: 'Volumes';
  docs?: Maybe<Array<Maybe<Volume>>>;
  hasNextPage?: Maybe<ScalarsEnums['Boolean']>;
  hasPrevPage?: Maybe<ScalarsEnums['Boolean']>;
  limit?: Maybe<ScalarsEnums['Int']>;
  nextPage?: Maybe<ScalarsEnums['Int']>;
  offset?: Maybe<ScalarsEnums['Int']>;
  page?: Maybe<ScalarsEnums['Int']>;
  pagingCounter?: Maybe<ScalarsEnums['Int']>;
  prevPage?: Maybe<ScalarsEnums['Int']>;
  totalDocs?: Maybe<ScalarsEnums['Int']>;
  totalPages?: Maybe<ScalarsEnums['Int']>;
}

export interface VolumesCreateAccess {
  __typename?: 'VolumesCreateAccess';
  permission: ScalarsEnums['Boolean'];
  where?: Maybe<ScalarsEnums['JSONObject']>;
}

export interface VolumesCreateDocAccess {
  __typename?: 'VolumesCreateDocAccess';
  permission: ScalarsEnums['Boolean'];
  where?: Maybe<ScalarsEnums['JSONObject']>;
}

export interface VolumesDeleteAccess {
  __typename?: 'VolumesDeleteAccess';
  permission: ScalarsEnums['Boolean'];
  where?: Maybe<ScalarsEnums['JSONObject']>;
}

export interface VolumesDeleteDocAccess {
  __typename?: 'VolumesDeleteDocAccess';
  permission: ScalarsEnums['Boolean'];
  where?: Maybe<ScalarsEnums['JSONObject']>;
}

export interface VolumesDocAccessFields {
  __typename?: 'VolumesDocAccessFields';
  about?: Maybe<VolumesDocAccessFields_about>;
  createdAt?: Maybe<VolumesDocAccessFields_createdAt>;
  publishedDate?: Maybe<VolumesDocAccessFields_publishedDate>;
  slug?: Maybe<VolumesDocAccessFields_slug>;
  title?: Maybe<VolumesDocAccessFields_title>;
  updatedAt?: Maybe<VolumesDocAccessFields_updatedAt>;
  volumeCover?: Maybe<VolumesDocAccessFields_volumeCover>;
  volumePdf?: Maybe<VolumesDocAccessFields_volumePdf>;
}

export interface VolumesDocAccessFields_about {
  __typename?: 'VolumesDocAccessFields_about';
  create?: Maybe<VolumesDocAccessFields_about_Create>;
  delete?: Maybe<VolumesDocAccessFields_about_Delete>;
  read?: Maybe<VolumesDocAccessFields_about_Read>;
  update?: Maybe<VolumesDocAccessFields_about_Update>;
}

export interface VolumesDocAccessFields_about_Create {
  __typename?: 'VolumesDocAccessFields_about_Create';
  permission: ScalarsEnums['Boolean'];
}

export interface VolumesDocAccessFields_about_Delete {
  __typename?: 'VolumesDocAccessFields_about_Delete';
  permission: ScalarsEnums['Boolean'];
}

export interface VolumesDocAccessFields_about_Read {
  __typename?: 'VolumesDocAccessFields_about_Read';
  permission: ScalarsEnums['Boolean'];
}

export interface VolumesDocAccessFields_about_Update {
  __typename?: 'VolumesDocAccessFields_about_Update';
  permission: ScalarsEnums['Boolean'];
}

export interface VolumesDocAccessFields_createdAt {
  __typename?: 'VolumesDocAccessFields_createdAt';
  create?: Maybe<VolumesDocAccessFields_createdAt_Create>;
  delete?: Maybe<VolumesDocAccessFields_createdAt_Delete>;
  read?: Maybe<VolumesDocAccessFields_createdAt_Read>;
  update?: Maybe<VolumesDocAccessFields_createdAt_Update>;
}

export interface VolumesDocAccessFields_createdAt_Create {
  __typename?: 'VolumesDocAccessFields_createdAt_Create';
  permission: ScalarsEnums['Boolean'];
}

export interface VolumesDocAccessFields_createdAt_Delete {
  __typename?: 'VolumesDocAccessFields_createdAt_Delete';
  permission: ScalarsEnums['Boolean'];
}

export interface VolumesDocAccessFields_createdAt_Read {
  __typename?: 'VolumesDocAccessFields_createdAt_Read';
  permission: ScalarsEnums['Boolean'];
}

export interface VolumesDocAccessFields_createdAt_Update {
  __typename?: 'VolumesDocAccessFields_createdAt_Update';
  permission: ScalarsEnums['Boolean'];
}

export interface VolumesDocAccessFields_publishedDate {
  __typename?: 'VolumesDocAccessFields_publishedDate';
  create?: Maybe<VolumesDocAccessFields_publishedDate_Create>;
  delete?: Maybe<VolumesDocAccessFields_publishedDate_Delete>;
  read?: Maybe<VolumesDocAccessFields_publishedDate_Read>;
  update?: Maybe<VolumesDocAccessFields_publishedDate_Update>;
}

export interface VolumesDocAccessFields_publishedDate_Create {
  __typename?: 'VolumesDocAccessFields_publishedDate_Create';
  permission: ScalarsEnums['Boolean'];
}

export interface VolumesDocAccessFields_publishedDate_Delete {
  __typename?: 'VolumesDocAccessFields_publishedDate_Delete';
  permission: ScalarsEnums['Boolean'];
}

export interface VolumesDocAccessFields_publishedDate_Read {
  __typename?: 'VolumesDocAccessFields_publishedDate_Read';
  permission: ScalarsEnums['Boolean'];
}

export interface VolumesDocAccessFields_publishedDate_Update {
  __typename?: 'VolumesDocAccessFields_publishedDate_Update';
  permission: ScalarsEnums['Boolean'];
}

export interface VolumesDocAccessFields_slug {
  __typename?: 'VolumesDocAccessFields_slug';
  create?: Maybe<VolumesDocAccessFields_slug_Create>;
  delete?: Maybe<VolumesDocAccessFields_slug_Delete>;
  read?: Maybe<VolumesDocAccessFields_slug_Read>;
  update?: Maybe<VolumesDocAccessFields_slug_Update>;
}

export interface VolumesDocAccessFields_slug_Create {
  __typename?: 'VolumesDocAccessFields_slug_Create';
  permission: ScalarsEnums['Boolean'];
}

export interface VolumesDocAccessFields_slug_Delete {
  __typename?: 'VolumesDocAccessFields_slug_Delete';
  permission: ScalarsEnums['Boolean'];
}

export interface VolumesDocAccessFields_slug_Read {
  __typename?: 'VolumesDocAccessFields_slug_Read';
  permission: ScalarsEnums['Boolean'];
}

export interface VolumesDocAccessFields_slug_Update {
  __typename?: 'VolumesDocAccessFields_slug_Update';
  permission: ScalarsEnums['Boolean'];
}

export interface VolumesDocAccessFields_title {
  __typename?: 'VolumesDocAccessFields_title';
  create?: Maybe<VolumesDocAccessFields_title_Create>;
  delete?: Maybe<VolumesDocAccessFields_title_Delete>;
  read?: Maybe<VolumesDocAccessFields_title_Read>;
  update?: Maybe<VolumesDocAccessFields_title_Update>;
}

export interface VolumesDocAccessFields_title_Create {
  __typename?: 'VolumesDocAccessFields_title_Create';
  permission: ScalarsEnums['Boolean'];
}

export interface VolumesDocAccessFields_title_Delete {
  __typename?: 'VolumesDocAccessFields_title_Delete';
  permission: ScalarsEnums['Boolean'];
}

export interface VolumesDocAccessFields_title_Read {
  __typename?: 'VolumesDocAccessFields_title_Read';
  permission: ScalarsEnums['Boolean'];
}

export interface VolumesDocAccessFields_title_Update {
  __typename?: 'VolumesDocAccessFields_title_Update';
  permission: ScalarsEnums['Boolean'];
}

export interface VolumesDocAccessFields_updatedAt {
  __typename?: 'VolumesDocAccessFields_updatedAt';
  create?: Maybe<VolumesDocAccessFields_updatedAt_Create>;
  delete?: Maybe<VolumesDocAccessFields_updatedAt_Delete>;
  read?: Maybe<VolumesDocAccessFields_updatedAt_Read>;
  update?: Maybe<VolumesDocAccessFields_updatedAt_Update>;
}

export interface VolumesDocAccessFields_updatedAt_Create {
  __typename?: 'VolumesDocAccessFields_updatedAt_Create';
  permission: ScalarsEnums['Boolean'];
}

export interface VolumesDocAccessFields_updatedAt_Delete {
  __typename?: 'VolumesDocAccessFields_updatedAt_Delete';
  permission: ScalarsEnums['Boolean'];
}

export interface VolumesDocAccessFields_updatedAt_Read {
  __typename?: 'VolumesDocAccessFields_updatedAt_Read';
  permission: ScalarsEnums['Boolean'];
}

export interface VolumesDocAccessFields_updatedAt_Update {
  __typename?: 'VolumesDocAccessFields_updatedAt_Update';
  permission: ScalarsEnums['Boolean'];
}

export interface VolumesDocAccessFields_volumeCover {
  __typename?: 'VolumesDocAccessFields_volumeCover';
  create?: Maybe<VolumesDocAccessFields_volumeCover_Create>;
  delete?: Maybe<VolumesDocAccessFields_volumeCover_Delete>;
  read?: Maybe<VolumesDocAccessFields_volumeCover_Read>;
  update?: Maybe<VolumesDocAccessFields_volumeCover_Update>;
}

export interface VolumesDocAccessFields_volumeCover_Create {
  __typename?: 'VolumesDocAccessFields_volumeCover_Create';
  permission: ScalarsEnums['Boolean'];
}

export interface VolumesDocAccessFields_volumeCover_Delete {
  __typename?: 'VolumesDocAccessFields_volumeCover_Delete';
  permission: ScalarsEnums['Boolean'];
}

export interface VolumesDocAccessFields_volumeCover_Read {
  __typename?: 'VolumesDocAccessFields_volumeCover_Read';
  permission: ScalarsEnums['Boolean'];
}

export interface VolumesDocAccessFields_volumeCover_Update {
  __typename?: 'VolumesDocAccessFields_volumeCover_Update';
  permission: ScalarsEnums['Boolean'];
}

export interface VolumesDocAccessFields_volumePdf {
  __typename?: 'VolumesDocAccessFields_volumePdf';
  create?: Maybe<VolumesDocAccessFields_volumePdf_Create>;
  delete?: Maybe<VolumesDocAccessFields_volumePdf_Delete>;
  read?: Maybe<VolumesDocAccessFields_volumePdf_Read>;
  update?: Maybe<VolumesDocAccessFields_volumePdf_Update>;
}

export interface VolumesDocAccessFields_volumePdf_Create {
  __typename?: 'VolumesDocAccessFields_volumePdf_Create';
  permission: ScalarsEnums['Boolean'];
}

export interface VolumesDocAccessFields_volumePdf_Delete {
  __typename?: 'VolumesDocAccessFields_volumePdf_Delete';
  permission: ScalarsEnums['Boolean'];
}

export interface VolumesDocAccessFields_volumePdf_Read {
  __typename?: 'VolumesDocAccessFields_volumePdf_Read';
  permission: ScalarsEnums['Boolean'];
}

export interface VolumesDocAccessFields_volumePdf_Update {
  __typename?: 'VolumesDocAccessFields_volumePdf_Update';
  permission: ScalarsEnums['Boolean'];
}

export interface VolumesFields {
  __typename?: 'VolumesFields';
  about?: Maybe<VolumesFields_about>;
  createdAt?: Maybe<VolumesFields_createdAt>;
  publishedDate?: Maybe<VolumesFields_publishedDate>;
  slug?: Maybe<VolumesFields_slug>;
  title?: Maybe<VolumesFields_title>;
  updatedAt?: Maybe<VolumesFields_updatedAt>;
  volumeCover?: Maybe<VolumesFields_volumeCover>;
  volumePdf?: Maybe<VolumesFields_volumePdf>;
}

export interface VolumesFields_about {
  __typename?: 'VolumesFields_about';
  create?: Maybe<VolumesFields_about_Create>;
  delete?: Maybe<VolumesFields_about_Delete>;
  read?: Maybe<VolumesFields_about_Read>;
  update?: Maybe<VolumesFields_about_Update>;
}

export interface VolumesFields_about_Create {
  __typename?: 'VolumesFields_about_Create';
  permission: ScalarsEnums['Boolean'];
}

export interface VolumesFields_about_Delete {
  __typename?: 'VolumesFields_about_Delete';
  permission: ScalarsEnums['Boolean'];
}

export interface VolumesFields_about_Read {
  __typename?: 'VolumesFields_about_Read';
  permission: ScalarsEnums['Boolean'];
}

export interface VolumesFields_about_Update {
  __typename?: 'VolumesFields_about_Update';
  permission: ScalarsEnums['Boolean'];
}

export interface VolumesFields_createdAt {
  __typename?: 'VolumesFields_createdAt';
  create?: Maybe<VolumesFields_createdAt_Create>;
  delete?: Maybe<VolumesFields_createdAt_Delete>;
  read?: Maybe<VolumesFields_createdAt_Read>;
  update?: Maybe<VolumesFields_createdAt_Update>;
}

export interface VolumesFields_createdAt_Create {
  __typename?: 'VolumesFields_createdAt_Create';
  permission: ScalarsEnums['Boolean'];
}

export interface VolumesFields_createdAt_Delete {
  __typename?: 'VolumesFields_createdAt_Delete';
  permission: ScalarsEnums['Boolean'];
}

export interface VolumesFields_createdAt_Read {
  __typename?: 'VolumesFields_createdAt_Read';
  permission: ScalarsEnums['Boolean'];
}

export interface VolumesFields_createdAt_Update {
  __typename?: 'VolumesFields_createdAt_Update';
  permission: ScalarsEnums['Boolean'];
}

export interface VolumesFields_publishedDate {
  __typename?: 'VolumesFields_publishedDate';
  create?: Maybe<VolumesFields_publishedDate_Create>;
  delete?: Maybe<VolumesFields_publishedDate_Delete>;
  read?: Maybe<VolumesFields_publishedDate_Read>;
  update?: Maybe<VolumesFields_publishedDate_Update>;
}

export interface VolumesFields_publishedDate_Create {
  __typename?: 'VolumesFields_publishedDate_Create';
  permission: ScalarsEnums['Boolean'];
}

export interface VolumesFields_publishedDate_Delete {
  __typename?: 'VolumesFields_publishedDate_Delete';
  permission: ScalarsEnums['Boolean'];
}

export interface VolumesFields_publishedDate_Read {
  __typename?: 'VolumesFields_publishedDate_Read';
  permission: ScalarsEnums['Boolean'];
}

export interface VolumesFields_publishedDate_Update {
  __typename?: 'VolumesFields_publishedDate_Update';
  permission: ScalarsEnums['Boolean'];
}

export interface VolumesFields_slug {
  __typename?: 'VolumesFields_slug';
  create?: Maybe<VolumesFields_slug_Create>;
  delete?: Maybe<VolumesFields_slug_Delete>;
  read?: Maybe<VolumesFields_slug_Read>;
  update?: Maybe<VolumesFields_slug_Update>;
}

export interface VolumesFields_slug_Create {
  __typename?: 'VolumesFields_slug_Create';
  permission: ScalarsEnums['Boolean'];
}

export interface VolumesFields_slug_Delete {
  __typename?: 'VolumesFields_slug_Delete';
  permission: ScalarsEnums['Boolean'];
}

export interface VolumesFields_slug_Read {
  __typename?: 'VolumesFields_slug_Read';
  permission: ScalarsEnums['Boolean'];
}

export interface VolumesFields_slug_Update {
  __typename?: 'VolumesFields_slug_Update';
  permission: ScalarsEnums['Boolean'];
}

export interface VolumesFields_title {
  __typename?: 'VolumesFields_title';
  create?: Maybe<VolumesFields_title_Create>;
  delete?: Maybe<VolumesFields_title_Delete>;
  read?: Maybe<VolumesFields_title_Read>;
  update?: Maybe<VolumesFields_title_Update>;
}

export interface VolumesFields_title_Create {
  __typename?: 'VolumesFields_title_Create';
  permission: ScalarsEnums['Boolean'];
}

export interface VolumesFields_title_Delete {
  __typename?: 'VolumesFields_title_Delete';
  permission: ScalarsEnums['Boolean'];
}

export interface VolumesFields_title_Read {
  __typename?: 'VolumesFields_title_Read';
  permission: ScalarsEnums['Boolean'];
}

export interface VolumesFields_title_Update {
  __typename?: 'VolumesFields_title_Update';
  permission: ScalarsEnums['Boolean'];
}

export interface VolumesFields_updatedAt {
  __typename?: 'VolumesFields_updatedAt';
  create?: Maybe<VolumesFields_updatedAt_Create>;
  delete?: Maybe<VolumesFields_updatedAt_Delete>;
  read?: Maybe<VolumesFields_updatedAt_Read>;
  update?: Maybe<VolumesFields_updatedAt_Update>;
}

export interface VolumesFields_updatedAt_Create {
  __typename?: 'VolumesFields_updatedAt_Create';
  permission: ScalarsEnums['Boolean'];
}

export interface VolumesFields_updatedAt_Delete {
  __typename?: 'VolumesFields_updatedAt_Delete';
  permission: ScalarsEnums['Boolean'];
}

export interface VolumesFields_updatedAt_Read {
  __typename?: 'VolumesFields_updatedAt_Read';
  permission: ScalarsEnums['Boolean'];
}

export interface VolumesFields_updatedAt_Update {
  __typename?: 'VolumesFields_updatedAt_Update';
  permission: ScalarsEnums['Boolean'];
}

export interface VolumesFields_volumeCover {
  __typename?: 'VolumesFields_volumeCover';
  create?: Maybe<VolumesFields_volumeCover_Create>;
  delete?: Maybe<VolumesFields_volumeCover_Delete>;
  read?: Maybe<VolumesFields_volumeCover_Read>;
  update?: Maybe<VolumesFields_volumeCover_Update>;
}

export interface VolumesFields_volumeCover_Create {
  __typename?: 'VolumesFields_volumeCover_Create';
  permission: ScalarsEnums['Boolean'];
}

export interface VolumesFields_volumeCover_Delete {
  __typename?: 'VolumesFields_volumeCover_Delete';
  permission: ScalarsEnums['Boolean'];
}

export interface VolumesFields_volumeCover_Read {
  __typename?: 'VolumesFields_volumeCover_Read';
  permission: ScalarsEnums['Boolean'];
}

export interface VolumesFields_volumeCover_Update {
  __typename?: 'VolumesFields_volumeCover_Update';
  permission: ScalarsEnums['Boolean'];
}

export interface VolumesFields_volumePdf {
  __typename?: 'VolumesFields_volumePdf';
  create?: Maybe<VolumesFields_volumePdf_Create>;
  delete?: Maybe<VolumesFields_volumePdf_Delete>;
  read?: Maybe<VolumesFields_volumePdf_Read>;
  update?: Maybe<VolumesFields_volumePdf_Update>;
}

export interface VolumesFields_volumePdf_Create {
  __typename?: 'VolumesFields_volumePdf_Create';
  permission: ScalarsEnums['Boolean'];
}

export interface VolumesFields_volumePdf_Delete {
  __typename?: 'VolumesFields_volumePdf_Delete';
  permission: ScalarsEnums['Boolean'];
}

export interface VolumesFields_volumePdf_Read {
  __typename?: 'VolumesFields_volumePdf_Read';
  permission: ScalarsEnums['Boolean'];
}

export interface VolumesFields_volumePdf_Update {
  __typename?: 'VolumesFields_volumePdf_Update';
  permission: ScalarsEnums['Boolean'];
}

export interface VolumesReadAccess {
  __typename?: 'VolumesReadAccess';
  permission: ScalarsEnums['Boolean'];
  where?: Maybe<ScalarsEnums['JSONObject']>;
}

export interface VolumesReadDocAccess {
  __typename?: 'VolumesReadDocAccess';
  permission: ScalarsEnums['Boolean'];
  where?: Maybe<ScalarsEnums['JSONObject']>;
}

export interface VolumesUpdateAccess {
  __typename?: 'VolumesUpdateAccess';
  permission: ScalarsEnums['Boolean'];
  where?: Maybe<ScalarsEnums['JSONObject']>;
}

export interface VolumesUpdateDocAccess {
  __typename?: 'VolumesUpdateDocAccess';
  permission: ScalarsEnums['Boolean'];
  where?: Maybe<ScalarsEnums['JSONObject']>;
}

export interface allMedia {
  __typename?: 'allMedia';
  docs?: Maybe<Array<Maybe<Media>>>;
  hasNextPage?: Maybe<ScalarsEnums['Boolean']>;
  hasPrevPage?: Maybe<ScalarsEnums['Boolean']>;
  limit?: Maybe<ScalarsEnums['Int']>;
  nextPage?: Maybe<ScalarsEnums['Int']>;
  offset?: Maybe<ScalarsEnums['Int']>;
  page?: Maybe<ScalarsEnums['Int']>;
  pagingCounter?: Maybe<ScalarsEnums['Int']>;
  prevPage?: Maybe<ScalarsEnums['Int']>;
  totalDocs?: Maybe<ScalarsEnums['Int']>;
  totalPages?: Maybe<ScalarsEnums['Int']>;
}

export interface allNews {
  __typename?: 'allNews';
  docs?: Maybe<Array<Maybe<News>>>;
  hasNextPage?: Maybe<ScalarsEnums['Boolean']>;
  hasPrevPage?: Maybe<ScalarsEnums['Boolean']>;
  limit?: Maybe<ScalarsEnums['Int']>;
  nextPage?: Maybe<ScalarsEnums['Int']>;
  offset?: Maybe<ScalarsEnums['Int']>;
  page?: Maybe<ScalarsEnums['Int']>;
  pagingCounter?: Maybe<ScalarsEnums['Int']>;
  prevPage?: Maybe<ScalarsEnums['Int']>;
  totalDocs?: Maybe<ScalarsEnums['Int']>;
  totalPages?: Maybe<ScalarsEnums['Int']>;
}

export interface mediaAccess {
  __typename?: 'mediaAccess';
  create?: Maybe<MediaCreateAccess>;
  delete?: Maybe<MediaDeleteAccess>;
  fields?: Maybe<MediaFields>;
  read?: Maybe<MediaReadAccess>;
  update?: Maybe<MediaUpdateAccess>;
}

export interface mediaDocAccess {
  __typename?: 'mediaDocAccess';
  create?: Maybe<MediaCreateDocAccess>;
  delete?: Maybe<MediaDeleteDocAccess>;
  fields?: Maybe<MediaDocAccessFields>;
  read?: Maybe<MediaReadDocAccess>;
  update?: Maybe<MediaUpdateDocAccess>;
}

export interface Mutation {
  __typename?: 'Mutation';
  createMedia: (args: {
    data: mutationMediaInput;
    draft?: Maybe<Scalars['Boolean']>;
  }) => Maybe<Media>;
  createNews: (args: {
    data: mutationNewsInput;
    draft?: Maybe<Scalars['Boolean']>;
  }) => Maybe<News>;
  createNewsTag: (args: {
    data: mutationNewsTagInput;
    draft?: Maybe<Scalars['Boolean']>;
  }) => Maybe<NewsTag>;
  createPayloadPreference: (args: {
    data: mutationPayloadPreferenceInput;
    draft?: Maybe<Scalars['Boolean']>;
  }) => Maybe<PayloadPreference>;
  createUser: (args: {
    data: mutationUserInput;
    draft?: Maybe<Scalars['Boolean']>;
  }) => Maybe<User>;
  createVolume: (args: {
    data: mutationVolumeInput;
    draft?: Maybe<Scalars['Boolean']>;
  }) => Maybe<Volume>;
  deleteMedia: (args: { id: Scalars['String'] }) => Maybe<Media>;
  deleteNews: (args: { id: Scalars['String'] }) => Maybe<News>;
  deleteNewsTag: (args: { id: Scalars['String'] }) => Maybe<NewsTag>;
  deletePayloadPreference: (args: {
    id: Scalars['String'];
  }) => Maybe<PayloadPreference>;
  deleteUser: (args: { id: Scalars['String'] }) => Maybe<User>;
  deleteVolume: (args: { id: Scalars['String'] }) => Maybe<Volume>;
  forgotPasswordUser: (args: {
    disableEmail?: Maybe<Scalars['Boolean']>;
    email: Scalars['String'];
    expiration?: Maybe<Scalars['Int']>;
  }) => ScalarsEnums['Boolean'];
  loginUser: (args?: {
    email?: Maybe<Scalars['String']>;
    password?: Maybe<Scalars['String']>;
  }) => Maybe<usersLoginResult>;
  logoutUser?: Maybe<ScalarsEnums['String']>;
  refreshTokenUser: (args?: {
    token?: Maybe<Scalars['String']>;
  }) => Maybe<usersRefreshedUser>;
  resetPasswordUser: (args?: {
    password?: Maybe<Scalars['String']>;
    token?: Maybe<Scalars['String']>;
  }) => Maybe<usersResetPassword>;
  unlockUser: (args: { email: Scalars['String'] }) => ScalarsEnums['Boolean'];
  updateMedia: (args: {
    autosave?: Maybe<Scalars['Boolean']>;
    data: mutationMediaUpdateInput;
    draft?: Maybe<Scalars['Boolean']>;
    id: Scalars['String'];
  }) => Maybe<Media>;
  updateNews: (args: {
    autosave?: Maybe<Scalars['Boolean']>;
    data: mutationNewsUpdateInput;
    draft?: Maybe<Scalars['Boolean']>;
    id: Scalars['String'];
  }) => Maybe<News>;
  updateNewsTag: (args: {
    autosave?: Maybe<Scalars['Boolean']>;
    data: mutationNewsTagUpdateInput;
    draft?: Maybe<Scalars['Boolean']>;
    id: Scalars['String'];
  }) => Maybe<NewsTag>;
  updatePayloadPreference: (args: {
    autosave?: Maybe<Scalars['Boolean']>;
    data: mutationPayloadPreferenceUpdateInput;
    draft?: Maybe<Scalars['Boolean']>;
    id: Scalars['String'];
  }) => Maybe<PayloadPreference>;
  updateUser: (args: {
    autosave?: Maybe<Scalars['Boolean']>;
    data: mutationUserUpdateInput;
    draft?: Maybe<Scalars['Boolean']>;
    id: Scalars['String'];
  }) => Maybe<User>;
  updateVolume: (args: {
    autosave?: Maybe<Scalars['Boolean']>;
    data: mutationVolumeUpdateInput;
    draft?: Maybe<Scalars['Boolean']>;
    id: Scalars['String'];
  }) => Maybe<Volume>;
  verifyEmailUser: (args?: {
    token?: Maybe<Scalars['String']>;
  }) => Maybe<ScalarsEnums['Boolean']>;
}

export interface newsAccess {
  __typename?: 'newsAccess';
  create?: Maybe<NewsCreateAccess>;
  delete?: Maybe<NewsDeleteAccess>;
  fields?: Maybe<NewsFields>;
  read?: Maybe<NewsReadAccess>;
  update?: Maybe<NewsUpdateAccess>;
}

export interface newsDocAccess {
  __typename?: 'newsDocAccess';
  create?: Maybe<NewsCreateDocAccess>;
  delete?: Maybe<NewsDeleteDocAccess>;
  fields?: Maybe<NewsDocAccessFields>;
  read?: Maybe<NewsReadDocAccess>;
  update?: Maybe<NewsUpdateDocAccess>;
}

export interface news_tagsAccess {
  __typename?: 'news_tagsAccess';
  create?: Maybe<NewsTagsCreateAccess>;
  delete?: Maybe<NewsTagsDeleteAccess>;
  fields?: Maybe<NewsTagsFields>;
  read?: Maybe<NewsTagsReadAccess>;
  update?: Maybe<NewsTagsUpdateAccess>;
}

export interface news_tagsDocAccess {
  __typename?: 'news_tagsDocAccess';
  create?: Maybe<NewsTagsCreateDocAccess>;
  delete?: Maybe<NewsTagsDeleteDocAccess>;
  fields?: Maybe<NewsTagsDocAccessFields>;
  read?: Maybe<NewsTagsReadDocAccess>;
  update?: Maybe<NewsTagsUpdateDocAccess>;
}

export interface payload_preferencesAccess {
  __typename?: 'payload_preferencesAccess';
  create?: Maybe<PayloadPreferencesCreateAccess>;
  delete?: Maybe<PayloadPreferencesDeleteAccess>;
  fields?: Maybe<PayloadPreferencesFields>;
  read?: Maybe<PayloadPreferencesReadAccess>;
  update?: Maybe<PayloadPreferencesUpdateAccess>;
}

export interface payload_preferencesDocAccess {
  __typename?: 'payload_preferencesDocAccess';
  create?: Maybe<PayloadPreferencesCreateDocAccess>;
  delete?: Maybe<PayloadPreferencesDeleteDocAccess>;
  fields?: Maybe<PayloadPreferencesDocAccessFields>;
  read?: Maybe<PayloadPreferencesReadDocAccess>;
  update?: Maybe<PayloadPreferencesUpdateDocAccess>;
}

export interface Query {
  __typename?: 'Query';
  Access?: Maybe<Access>;
  Media: (args: {
    draft?: Maybe<Scalars['Boolean']>;
    id: Scalars['String'];
  }) => Maybe<Media>;
  News: (args: {
    draft?: Maybe<Scalars['Boolean']>;
    id: Scalars['String'];
  }) => Maybe<News>;
  NewsTag: (args: {
    draft?: Maybe<Scalars['Boolean']>;
    id: Scalars['String'];
  }) => Maybe<NewsTag>;
  NewsTags: (args?: {
    draft?: Maybe<Scalars['Boolean']>;
    limit?: Maybe<Scalars['Int']>;
    page?: Maybe<Scalars['Int']>;
    sort?: Maybe<Scalars['String']>;
    where?: Maybe<NewsTag_where>;
  }) => Maybe<NewsTags>;
  PayloadPreference: (args: {
    draft?: Maybe<Scalars['Boolean']>;
    id: Scalars['String'];
  }) => Maybe<PayloadPreference>;
  PayloadPreferences: (args?: {
    draft?: Maybe<Scalars['Boolean']>;
    limit?: Maybe<Scalars['Int']>;
    page?: Maybe<Scalars['Int']>;
    sort?: Maybe<Scalars['String']>;
    where?: Maybe<PayloadPreference_where>;
  }) => Maybe<PayloadPreferences>;
  User: (args: {
    draft?: Maybe<Scalars['Boolean']>;
    id: Scalars['String'];
  }) => Maybe<User>;
  Users: (args?: {
    draft?: Maybe<Scalars['Boolean']>;
    limit?: Maybe<Scalars['Int']>;
    page?: Maybe<Scalars['Int']>;
    sort?: Maybe<Scalars['String']>;
    where?: Maybe<User_where>;
  }) => Maybe<Users>;
  Volume: (args: {
    draft?: Maybe<Scalars['Boolean']>;
    id: Scalars['String'];
  }) => Maybe<Volume>;
  Volumes: (args?: {
    draft?: Maybe<Scalars['Boolean']>;
    limit?: Maybe<Scalars['Int']>;
    page?: Maybe<Scalars['Int']>;
    sort?: Maybe<Scalars['String']>;
    where?: Maybe<Volume_where>;
  }) => Maybe<Volumes>;
  allMedia: (args?: {
    draft?: Maybe<Scalars['Boolean']>;
    limit?: Maybe<Scalars['Int']>;
    page?: Maybe<Scalars['Int']>;
    sort?: Maybe<Scalars['String']>;
    where?: Maybe<Media_where>;
  }) => Maybe<allMedia>;
  allNews: (args?: {
    draft?: Maybe<Scalars['Boolean']>;
    limit?: Maybe<Scalars['Int']>;
    page?: Maybe<Scalars['Int']>;
    sort?: Maybe<Scalars['String']>;
    where?: Maybe<News_where>;
  }) => Maybe<allNews>;
  docAccessMedia: (args: { id: Scalars['String'] }) => Maybe<mediaDocAccess>;
  docAccessNews: (args: { id: Scalars['String'] }) => Maybe<newsDocAccess>;
  docAccessNewsTag: (args: {
    id: Scalars['String'];
  }) => Maybe<news_tagsDocAccess>;
  docAccessPayloadPreference: (args: {
    id: Scalars['String'];
  }) => Maybe<payload_preferencesDocAccess>;
  docAccessUser: (args: { id: Scalars['String'] }) => Maybe<usersDocAccess>;
  docAccessVolume: (args: { id: Scalars['String'] }) => Maybe<volumesDocAccess>;
  initializedUser?: Maybe<ScalarsEnums['Boolean']>;
  meUser?: Maybe<usersMe>;
}

export interface Subscription {
  __typename?: 'Subscription';
}

export interface usersAccess {
  __typename?: 'usersAccess';
  create?: Maybe<UsersCreateAccess>;
  delete?: Maybe<UsersDeleteAccess>;
  fields?: Maybe<UsersFields>;
  read?: Maybe<UsersReadAccess>;
  unlock?: Maybe<UsersUnlockAccess>;
  update?: Maybe<UsersUpdateAccess>;
}

export interface usersDocAccess {
  __typename?: 'usersDocAccess';
  create?: Maybe<UsersCreateDocAccess>;
  delete?: Maybe<UsersDeleteDocAccess>;
  fields?: Maybe<UsersDocAccessFields>;
  read?: Maybe<UsersReadDocAccess>;
  unlock?: Maybe<UsersUnlockDocAccess>;
  update?: Maybe<UsersUpdateDocAccess>;
}

export interface usersJWT {
  __typename?: 'usersJWT';
  collection: ScalarsEnums['String'];
  email: ScalarsEnums['EmailAddress'];
}

export interface usersLoginResult {
  __typename?: 'usersLoginResult';
  exp?: Maybe<ScalarsEnums['Int']>;
  token?: Maybe<ScalarsEnums['String']>;
  user?: Maybe<User>;
}

export interface usersMe {
  __typename?: 'usersMe';
  collection?: Maybe<ScalarsEnums['String']>;
  exp?: Maybe<ScalarsEnums['Int']>;
  token?: Maybe<ScalarsEnums['String']>;
  user?: Maybe<User>;
}

export interface usersRefreshedUser {
  __typename?: 'usersRefreshedUser';
  exp?: Maybe<ScalarsEnums['Int']>;
  refreshedToken?: Maybe<ScalarsEnums['String']>;
  user?: Maybe<usersJWT>;
}

export interface usersResetPassword {
  __typename?: 'usersResetPassword';
  token?: Maybe<ScalarsEnums['String']>;
  user?: Maybe<User>;
}

export interface volumesAccess {
  __typename?: 'volumesAccess';
  create?: Maybe<VolumesCreateAccess>;
  delete?: Maybe<VolumesDeleteAccess>;
  fields?: Maybe<VolumesFields>;
  read?: Maybe<VolumesReadAccess>;
  update?: Maybe<VolumesUpdateAccess>;
}

export interface volumesDocAccess {
  __typename?: 'volumesDocAccess';
  create?: Maybe<VolumesCreateDocAccess>;
  delete?: Maybe<VolumesDeleteDocAccess>;
  fields?: Maybe<VolumesDocAccessFields>;
  read?: Maybe<VolumesReadDocAccess>;
  update?: Maybe<VolumesUpdateDocAccess>;
}

export interface $PayloadPreference_User {
  User?: User;
}

export interface GeneratedSchema {
  query: Query;
  mutation: Mutation;
  subscription: Subscription;
}

export type MakeNullable<T> = {
  [K in keyof T]: T[K] | undefined;
};

export interface ScalarsEnums extends MakeNullable<Scalars> {
  NewsUpdate_status_MutationInput: NewsUpdate_status_MutationInput | undefined;
  News_status: News_status | undefined;
  News_status_Input: News_status_Input | undefined;
  News_status_MutationInput: News_status_MutationInput | undefined;
  PayloadPreferenceUpdate_UserRelationshipInputRelationTo:
    | PayloadPreferenceUpdate_UserRelationshipInputRelationTo
    | undefined;
  PayloadPreference_UserRelationshipInputRelationTo:
    | PayloadPreference_UserRelationshipInputRelationTo
    | undefined;
  PayloadPreference_User_RelationTo:
    | PayloadPreference_User_RelationTo
    | undefined;
  PayloadPreference_user_Relation_RelationTo:
    | PayloadPreference_user_Relation_RelationTo
    | undefined;
  UserUpdate_role_MutationInput: UserUpdate_role_MutationInput | undefined;
  User_role: User_role | undefined;
  User_role_Input: User_role_Input | undefined;
  User_role_MutationInput: User_role_MutationInput | undefined;
}
