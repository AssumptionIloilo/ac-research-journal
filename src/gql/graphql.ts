/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
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
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: { input: any; output: any; }
  /** A field whose value conforms to the standard internet email address format as specified in HTML Spec: https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address. */
  EmailAddress: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
  /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSONObject: { input: any; output: any; }
};

export type Access = {
  __typename?: 'Access';
  archive_categories?: Maybe<Archive_CategoriesAccess>;
  archives?: Maybe<ArchivesAccess>;
  canAccessAdmin: Scalars['Boolean']['output'];
  editorial_board?: Maybe<Editorial_BoardAccess>;
  guidelines?: Maybe<GuidelinesAccess>;
  media?: Maybe<MediaAccess>;
  news?: Maybe<NewsAccess>;
  news_tags?: Maybe<News_TagsAccess>;
  payload_preferences?: Maybe<Payload_PreferencesAccess>;
  users?: Maybe<UsersAccess>;
};

export type Archive = {
  __typename?: 'Archive';
  about?: Maybe<Scalars['JSON']['output']>;
  archiveCover?: Maybe<Media>;
  categories?: Maybe<Array<ArchiveCategory>>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  pdf?: Maybe<Media>;
  publishedDate?: Maybe<Scalars['DateTime']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type ArchiveAboutArgs = {
  depth?: InputMaybe<Scalars['Int']['input']>;
};


export type ArchiveArchiveCoverArgs = {
  where?: InputMaybe<Archive_ArchiveCover_Where>;
};


export type ArchivePdfArgs = {
  where?: InputMaybe<Archive_Pdf_Where>;
};

export type ArchiveCategories = {
  __typename?: 'ArchiveCategories';
  docs?: Maybe<Array<Maybe<ArchiveCategory>>>;
  hasNextPage?: Maybe<Scalars['Boolean']['output']>;
  hasPrevPage?: Maybe<Scalars['Boolean']['output']>;
  limit?: Maybe<Scalars['Int']['output']>;
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page?: Maybe<Scalars['Int']['output']>;
  pagingCounter?: Maybe<Scalars['Int']['output']>;
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs?: Maybe<Scalars['Int']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type ArchiveCategoriesCreateAccess = {
  __typename?: 'ArchiveCategoriesCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ArchiveCategoriesCreateDocAccess = {
  __typename?: 'ArchiveCategoriesCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ArchiveCategoriesDeleteAccess = {
  __typename?: 'ArchiveCategoriesDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ArchiveCategoriesDeleteDocAccess = {
  __typename?: 'ArchiveCategoriesDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ArchiveCategoriesDocAccessFields = {
  __typename?: 'ArchiveCategoriesDocAccessFields';
  name?: Maybe<ArchiveCategoriesDocAccessFields_Name>;
};

export type ArchiveCategoriesDocAccessFields_Name = {
  __typename?: 'ArchiveCategoriesDocAccessFields_name';
  create?: Maybe<ArchiveCategoriesDocAccessFields_Name_Create>;
  delete?: Maybe<ArchiveCategoriesDocAccessFields_Name_Delete>;
  read?: Maybe<ArchiveCategoriesDocAccessFields_Name_Read>;
  update?: Maybe<ArchiveCategoriesDocAccessFields_Name_Update>;
};

export type ArchiveCategoriesDocAccessFields_Name_Create = {
  __typename?: 'ArchiveCategoriesDocAccessFields_name_Create';
  permission: Scalars['Boolean']['output'];
};

export type ArchiveCategoriesDocAccessFields_Name_Delete = {
  __typename?: 'ArchiveCategoriesDocAccessFields_name_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ArchiveCategoriesDocAccessFields_Name_Read = {
  __typename?: 'ArchiveCategoriesDocAccessFields_name_Read';
  permission: Scalars['Boolean']['output'];
};

export type ArchiveCategoriesDocAccessFields_Name_Update = {
  __typename?: 'ArchiveCategoriesDocAccessFields_name_Update';
  permission: Scalars['Boolean']['output'];
};

export type ArchiveCategoriesFields = {
  __typename?: 'ArchiveCategoriesFields';
  name?: Maybe<ArchiveCategoriesFields_Name>;
};

export type ArchiveCategoriesFields_Name = {
  __typename?: 'ArchiveCategoriesFields_name';
  create?: Maybe<ArchiveCategoriesFields_Name_Create>;
  delete?: Maybe<ArchiveCategoriesFields_Name_Delete>;
  read?: Maybe<ArchiveCategoriesFields_Name_Read>;
  update?: Maybe<ArchiveCategoriesFields_Name_Update>;
};

export type ArchiveCategoriesFields_Name_Create = {
  __typename?: 'ArchiveCategoriesFields_name_Create';
  permission: Scalars['Boolean']['output'];
};

export type ArchiveCategoriesFields_Name_Delete = {
  __typename?: 'ArchiveCategoriesFields_name_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ArchiveCategoriesFields_Name_Read = {
  __typename?: 'ArchiveCategoriesFields_name_Read';
  permission: Scalars['Boolean']['output'];
};

export type ArchiveCategoriesFields_Name_Update = {
  __typename?: 'ArchiveCategoriesFields_name_Update';
  permission: Scalars['Boolean']['output'];
};

export type ArchiveCategoriesReadAccess = {
  __typename?: 'ArchiveCategoriesReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ArchiveCategoriesReadDocAccess = {
  __typename?: 'ArchiveCategoriesReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ArchiveCategoriesUpdateAccess = {
  __typename?: 'ArchiveCategoriesUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ArchiveCategoriesUpdateDocAccess = {
  __typename?: 'ArchiveCategoriesUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ArchiveCategory = {
  __typename?: 'ArchiveCategory';
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type ArchiveCategory_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ArchiveCategory_Name_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ArchiveCategory_Where = {
  AND?: InputMaybe<Array<InputMaybe<ArchiveCategory_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<ArchiveCategory_Where_Or>>>;
  id?: InputMaybe<ArchiveCategory_Id_Operator>;
  name?: InputMaybe<ArchiveCategory_Name_Operator>;
};

export type ArchiveCategory_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<ArchiveCategory_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<ArchiveCategory_Where_Or>>>;
  id?: InputMaybe<ArchiveCategory_Id_Operator>;
  name?: InputMaybe<ArchiveCategory_Name_Operator>;
};

export type ArchiveCategory_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<ArchiveCategory_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<ArchiveCategory_Where_Or>>>;
  id?: InputMaybe<ArchiveCategory_Id_Operator>;
  name?: InputMaybe<ArchiveCategory_Name_Operator>;
};

export type Archive_ArchiveCover_Alt_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Archive_ArchiveCover_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Archive_ArchiveCover_Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Archive_ArchiveCover_Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Archive_ArchiveCover_Height_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Archive_ArchiveCover_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Archive_ArchiveCover_MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Archive_ArchiveCover_Sizes__SixteenByNineMedium__Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Archive_ArchiveCover_Sizes__SixteenByNineMedium__Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Archive_ArchiveCover_Sizes__SixteenByNineMedium__Height_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Archive_ArchiveCover_Sizes__SixteenByNineMedium__MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Archive_ArchiveCover_Sizes__SixteenByNineMedium__Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Archive_ArchiveCover_Sizes__SixteenByNineMedium__Width_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Archive_ArchiveCover_Sizes__Thumbnail__Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Archive_ArchiveCover_Sizes__Thumbnail__Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Archive_ArchiveCover_Sizes__Thumbnail__Height_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Archive_ArchiveCover_Sizes__Thumbnail__MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Archive_ArchiveCover_Sizes__Thumbnail__Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Archive_ArchiveCover_Sizes__Thumbnail__Width_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Archive_ArchiveCover_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Archive_ArchiveCover_Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Archive_ArchiveCover_Where = {
  AND?: InputMaybe<Array<InputMaybe<Archive_ArchiveCover_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Archive_ArchiveCover_Where_Or>>>;
  alt?: InputMaybe<Archive_ArchiveCover_Alt_Operator>;
  createdAt?: InputMaybe<Archive_ArchiveCover_CreatedAt_Operator>;
  filename?: InputMaybe<Archive_ArchiveCover_Filename_Operator>;
  filesize?: InputMaybe<Archive_ArchiveCover_Filesize_Operator>;
  height?: InputMaybe<Archive_ArchiveCover_Height_Operator>;
  id?: InputMaybe<Archive_ArchiveCover_Id_Operator>;
  mimeType?: InputMaybe<Archive_ArchiveCover_MimeType_Operator>;
  sizes__sixteenByNineMedium__filename?: InputMaybe<Archive_ArchiveCover_Sizes__SixteenByNineMedium__Filename_Operator>;
  sizes__sixteenByNineMedium__filesize?: InputMaybe<Archive_ArchiveCover_Sizes__SixteenByNineMedium__Filesize_Operator>;
  sizes__sixteenByNineMedium__height?: InputMaybe<Archive_ArchiveCover_Sizes__SixteenByNineMedium__Height_Operator>;
  sizes__sixteenByNineMedium__mimeType?: InputMaybe<Archive_ArchiveCover_Sizes__SixteenByNineMedium__MimeType_Operator>;
  sizes__sixteenByNineMedium__url?: InputMaybe<Archive_ArchiveCover_Sizes__SixteenByNineMedium__Url_Operator>;
  sizes__sixteenByNineMedium__width?: InputMaybe<Archive_ArchiveCover_Sizes__SixteenByNineMedium__Width_Operator>;
  sizes__thumbnail__filename?: InputMaybe<Archive_ArchiveCover_Sizes__Thumbnail__Filename_Operator>;
  sizes__thumbnail__filesize?: InputMaybe<Archive_ArchiveCover_Sizes__Thumbnail__Filesize_Operator>;
  sizes__thumbnail__height?: InputMaybe<Archive_ArchiveCover_Sizes__Thumbnail__Height_Operator>;
  sizes__thumbnail__mimeType?: InputMaybe<Archive_ArchiveCover_Sizes__Thumbnail__MimeType_Operator>;
  sizes__thumbnail__url?: InputMaybe<Archive_ArchiveCover_Sizes__Thumbnail__Url_Operator>;
  sizes__thumbnail__width?: InputMaybe<Archive_ArchiveCover_Sizes__Thumbnail__Width_Operator>;
  updatedAt?: InputMaybe<Archive_ArchiveCover_UpdatedAt_Operator>;
  url?: InputMaybe<Archive_ArchiveCover_Url_Operator>;
  width?: InputMaybe<Archive_ArchiveCover_Width_Operator>;
};

export type Archive_ArchiveCover_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<Archive_ArchiveCover_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Archive_ArchiveCover_Where_Or>>>;
  alt?: InputMaybe<Archive_ArchiveCover_Alt_Operator>;
  createdAt?: InputMaybe<Archive_ArchiveCover_CreatedAt_Operator>;
  filename?: InputMaybe<Archive_ArchiveCover_Filename_Operator>;
  filesize?: InputMaybe<Archive_ArchiveCover_Filesize_Operator>;
  height?: InputMaybe<Archive_ArchiveCover_Height_Operator>;
  id?: InputMaybe<Archive_ArchiveCover_Id_Operator>;
  mimeType?: InputMaybe<Archive_ArchiveCover_MimeType_Operator>;
  sizes__sixteenByNineMedium__filename?: InputMaybe<Archive_ArchiveCover_Sizes__SixteenByNineMedium__Filename_Operator>;
  sizes__sixteenByNineMedium__filesize?: InputMaybe<Archive_ArchiveCover_Sizes__SixteenByNineMedium__Filesize_Operator>;
  sizes__sixteenByNineMedium__height?: InputMaybe<Archive_ArchiveCover_Sizes__SixteenByNineMedium__Height_Operator>;
  sizes__sixteenByNineMedium__mimeType?: InputMaybe<Archive_ArchiveCover_Sizes__SixteenByNineMedium__MimeType_Operator>;
  sizes__sixteenByNineMedium__url?: InputMaybe<Archive_ArchiveCover_Sizes__SixteenByNineMedium__Url_Operator>;
  sizes__sixteenByNineMedium__width?: InputMaybe<Archive_ArchiveCover_Sizes__SixteenByNineMedium__Width_Operator>;
  sizes__thumbnail__filename?: InputMaybe<Archive_ArchiveCover_Sizes__Thumbnail__Filename_Operator>;
  sizes__thumbnail__filesize?: InputMaybe<Archive_ArchiveCover_Sizes__Thumbnail__Filesize_Operator>;
  sizes__thumbnail__height?: InputMaybe<Archive_ArchiveCover_Sizes__Thumbnail__Height_Operator>;
  sizes__thumbnail__mimeType?: InputMaybe<Archive_ArchiveCover_Sizes__Thumbnail__MimeType_Operator>;
  sizes__thumbnail__url?: InputMaybe<Archive_ArchiveCover_Sizes__Thumbnail__Url_Operator>;
  sizes__thumbnail__width?: InputMaybe<Archive_ArchiveCover_Sizes__Thumbnail__Width_Operator>;
  updatedAt?: InputMaybe<Archive_ArchiveCover_UpdatedAt_Operator>;
  url?: InputMaybe<Archive_ArchiveCover_Url_Operator>;
  width?: InputMaybe<Archive_ArchiveCover_Width_Operator>;
};

export type Archive_ArchiveCover_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<Archive_ArchiveCover_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Archive_ArchiveCover_Where_Or>>>;
  alt?: InputMaybe<Archive_ArchiveCover_Alt_Operator>;
  createdAt?: InputMaybe<Archive_ArchiveCover_CreatedAt_Operator>;
  filename?: InputMaybe<Archive_ArchiveCover_Filename_Operator>;
  filesize?: InputMaybe<Archive_ArchiveCover_Filesize_Operator>;
  height?: InputMaybe<Archive_ArchiveCover_Height_Operator>;
  id?: InputMaybe<Archive_ArchiveCover_Id_Operator>;
  mimeType?: InputMaybe<Archive_ArchiveCover_MimeType_Operator>;
  sizes__sixteenByNineMedium__filename?: InputMaybe<Archive_ArchiveCover_Sizes__SixteenByNineMedium__Filename_Operator>;
  sizes__sixteenByNineMedium__filesize?: InputMaybe<Archive_ArchiveCover_Sizes__SixteenByNineMedium__Filesize_Operator>;
  sizes__sixteenByNineMedium__height?: InputMaybe<Archive_ArchiveCover_Sizes__SixteenByNineMedium__Height_Operator>;
  sizes__sixteenByNineMedium__mimeType?: InputMaybe<Archive_ArchiveCover_Sizes__SixteenByNineMedium__MimeType_Operator>;
  sizes__sixteenByNineMedium__url?: InputMaybe<Archive_ArchiveCover_Sizes__SixteenByNineMedium__Url_Operator>;
  sizes__sixteenByNineMedium__width?: InputMaybe<Archive_ArchiveCover_Sizes__SixteenByNineMedium__Width_Operator>;
  sizes__thumbnail__filename?: InputMaybe<Archive_ArchiveCover_Sizes__Thumbnail__Filename_Operator>;
  sizes__thumbnail__filesize?: InputMaybe<Archive_ArchiveCover_Sizes__Thumbnail__Filesize_Operator>;
  sizes__thumbnail__height?: InputMaybe<Archive_ArchiveCover_Sizes__Thumbnail__Height_Operator>;
  sizes__thumbnail__mimeType?: InputMaybe<Archive_ArchiveCover_Sizes__Thumbnail__MimeType_Operator>;
  sizes__thumbnail__url?: InputMaybe<Archive_ArchiveCover_Sizes__Thumbnail__Url_Operator>;
  sizes__thumbnail__width?: InputMaybe<Archive_ArchiveCover_Sizes__Thumbnail__Width_Operator>;
  updatedAt?: InputMaybe<Archive_ArchiveCover_UpdatedAt_Operator>;
  url?: InputMaybe<Archive_ArchiveCover_Url_Operator>;
  width?: InputMaybe<Archive_ArchiveCover_Width_Operator>;
};

export type Archive_ArchiveCover_Width_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Archive_Pdf_Alt_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Archive_Pdf_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Archive_Pdf_Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Archive_Pdf_Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Archive_Pdf_Height_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Archive_Pdf_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Archive_Pdf_MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Archive_Pdf_Sizes__SixteenByNineMedium__Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Archive_Pdf_Sizes__SixteenByNineMedium__Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Archive_Pdf_Sizes__SixteenByNineMedium__Height_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Archive_Pdf_Sizes__SixteenByNineMedium__MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Archive_Pdf_Sizes__SixteenByNineMedium__Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Archive_Pdf_Sizes__SixteenByNineMedium__Width_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Archive_Pdf_Sizes__Thumbnail__Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Archive_Pdf_Sizes__Thumbnail__Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Archive_Pdf_Sizes__Thumbnail__Height_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Archive_Pdf_Sizes__Thumbnail__MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Archive_Pdf_Sizes__Thumbnail__Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Archive_Pdf_Sizes__Thumbnail__Width_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Archive_Pdf_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Archive_Pdf_Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Archive_Pdf_Where = {
  AND?: InputMaybe<Array<InputMaybe<Archive_Pdf_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Archive_Pdf_Where_Or>>>;
  alt?: InputMaybe<Archive_Pdf_Alt_Operator>;
  createdAt?: InputMaybe<Archive_Pdf_CreatedAt_Operator>;
  filename?: InputMaybe<Archive_Pdf_Filename_Operator>;
  filesize?: InputMaybe<Archive_Pdf_Filesize_Operator>;
  height?: InputMaybe<Archive_Pdf_Height_Operator>;
  id?: InputMaybe<Archive_Pdf_Id_Operator>;
  mimeType?: InputMaybe<Archive_Pdf_MimeType_Operator>;
  sizes__sixteenByNineMedium__filename?: InputMaybe<Archive_Pdf_Sizes__SixteenByNineMedium__Filename_Operator>;
  sizes__sixteenByNineMedium__filesize?: InputMaybe<Archive_Pdf_Sizes__SixteenByNineMedium__Filesize_Operator>;
  sizes__sixteenByNineMedium__height?: InputMaybe<Archive_Pdf_Sizes__SixteenByNineMedium__Height_Operator>;
  sizes__sixteenByNineMedium__mimeType?: InputMaybe<Archive_Pdf_Sizes__SixteenByNineMedium__MimeType_Operator>;
  sizes__sixteenByNineMedium__url?: InputMaybe<Archive_Pdf_Sizes__SixteenByNineMedium__Url_Operator>;
  sizes__sixteenByNineMedium__width?: InputMaybe<Archive_Pdf_Sizes__SixteenByNineMedium__Width_Operator>;
  sizes__thumbnail__filename?: InputMaybe<Archive_Pdf_Sizes__Thumbnail__Filename_Operator>;
  sizes__thumbnail__filesize?: InputMaybe<Archive_Pdf_Sizes__Thumbnail__Filesize_Operator>;
  sizes__thumbnail__height?: InputMaybe<Archive_Pdf_Sizes__Thumbnail__Height_Operator>;
  sizes__thumbnail__mimeType?: InputMaybe<Archive_Pdf_Sizes__Thumbnail__MimeType_Operator>;
  sizes__thumbnail__url?: InputMaybe<Archive_Pdf_Sizes__Thumbnail__Url_Operator>;
  sizes__thumbnail__width?: InputMaybe<Archive_Pdf_Sizes__Thumbnail__Width_Operator>;
  updatedAt?: InputMaybe<Archive_Pdf_UpdatedAt_Operator>;
  url?: InputMaybe<Archive_Pdf_Url_Operator>;
  width?: InputMaybe<Archive_Pdf_Width_Operator>;
};

export type Archive_Pdf_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<Archive_Pdf_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Archive_Pdf_Where_Or>>>;
  alt?: InputMaybe<Archive_Pdf_Alt_Operator>;
  createdAt?: InputMaybe<Archive_Pdf_CreatedAt_Operator>;
  filename?: InputMaybe<Archive_Pdf_Filename_Operator>;
  filesize?: InputMaybe<Archive_Pdf_Filesize_Operator>;
  height?: InputMaybe<Archive_Pdf_Height_Operator>;
  id?: InputMaybe<Archive_Pdf_Id_Operator>;
  mimeType?: InputMaybe<Archive_Pdf_MimeType_Operator>;
  sizes__sixteenByNineMedium__filename?: InputMaybe<Archive_Pdf_Sizes__SixteenByNineMedium__Filename_Operator>;
  sizes__sixteenByNineMedium__filesize?: InputMaybe<Archive_Pdf_Sizes__SixteenByNineMedium__Filesize_Operator>;
  sizes__sixteenByNineMedium__height?: InputMaybe<Archive_Pdf_Sizes__SixteenByNineMedium__Height_Operator>;
  sizes__sixteenByNineMedium__mimeType?: InputMaybe<Archive_Pdf_Sizes__SixteenByNineMedium__MimeType_Operator>;
  sizes__sixteenByNineMedium__url?: InputMaybe<Archive_Pdf_Sizes__SixteenByNineMedium__Url_Operator>;
  sizes__sixteenByNineMedium__width?: InputMaybe<Archive_Pdf_Sizes__SixteenByNineMedium__Width_Operator>;
  sizes__thumbnail__filename?: InputMaybe<Archive_Pdf_Sizes__Thumbnail__Filename_Operator>;
  sizes__thumbnail__filesize?: InputMaybe<Archive_Pdf_Sizes__Thumbnail__Filesize_Operator>;
  sizes__thumbnail__height?: InputMaybe<Archive_Pdf_Sizes__Thumbnail__Height_Operator>;
  sizes__thumbnail__mimeType?: InputMaybe<Archive_Pdf_Sizes__Thumbnail__MimeType_Operator>;
  sizes__thumbnail__url?: InputMaybe<Archive_Pdf_Sizes__Thumbnail__Url_Operator>;
  sizes__thumbnail__width?: InputMaybe<Archive_Pdf_Sizes__Thumbnail__Width_Operator>;
  updatedAt?: InputMaybe<Archive_Pdf_UpdatedAt_Operator>;
  url?: InputMaybe<Archive_Pdf_Url_Operator>;
  width?: InputMaybe<Archive_Pdf_Width_Operator>;
};

export type Archive_Pdf_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<Archive_Pdf_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Archive_Pdf_Where_Or>>>;
  alt?: InputMaybe<Archive_Pdf_Alt_Operator>;
  createdAt?: InputMaybe<Archive_Pdf_CreatedAt_Operator>;
  filename?: InputMaybe<Archive_Pdf_Filename_Operator>;
  filesize?: InputMaybe<Archive_Pdf_Filesize_Operator>;
  height?: InputMaybe<Archive_Pdf_Height_Operator>;
  id?: InputMaybe<Archive_Pdf_Id_Operator>;
  mimeType?: InputMaybe<Archive_Pdf_MimeType_Operator>;
  sizes__sixteenByNineMedium__filename?: InputMaybe<Archive_Pdf_Sizes__SixteenByNineMedium__Filename_Operator>;
  sizes__sixteenByNineMedium__filesize?: InputMaybe<Archive_Pdf_Sizes__SixteenByNineMedium__Filesize_Operator>;
  sizes__sixteenByNineMedium__height?: InputMaybe<Archive_Pdf_Sizes__SixteenByNineMedium__Height_Operator>;
  sizes__sixteenByNineMedium__mimeType?: InputMaybe<Archive_Pdf_Sizes__SixteenByNineMedium__MimeType_Operator>;
  sizes__sixteenByNineMedium__url?: InputMaybe<Archive_Pdf_Sizes__SixteenByNineMedium__Url_Operator>;
  sizes__sixteenByNineMedium__width?: InputMaybe<Archive_Pdf_Sizes__SixteenByNineMedium__Width_Operator>;
  sizes__thumbnail__filename?: InputMaybe<Archive_Pdf_Sizes__Thumbnail__Filename_Operator>;
  sizes__thumbnail__filesize?: InputMaybe<Archive_Pdf_Sizes__Thumbnail__Filesize_Operator>;
  sizes__thumbnail__height?: InputMaybe<Archive_Pdf_Sizes__Thumbnail__Height_Operator>;
  sizes__thumbnail__mimeType?: InputMaybe<Archive_Pdf_Sizes__Thumbnail__MimeType_Operator>;
  sizes__thumbnail__url?: InputMaybe<Archive_Pdf_Sizes__Thumbnail__Url_Operator>;
  sizes__thumbnail__width?: InputMaybe<Archive_Pdf_Sizes__Thumbnail__Width_Operator>;
  updatedAt?: InputMaybe<Archive_Pdf_UpdatedAt_Operator>;
  url?: InputMaybe<Archive_Pdf_Url_Operator>;
  width?: InputMaybe<Archive_Pdf_Width_Operator>;
};

export type Archive_Pdf_Width_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Archive_About_Operator = {
  contains?: InputMaybe<Scalars['JSON']['input']>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['JSON']['input']>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
};

export type Archive_ArchiveCover_Operator = {
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
};

export type Archive_Categories_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type Archive_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Archive_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Archive_Pdf_Operator = {
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
};

export type Archive_PublishedDate_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Archive_Slug_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Archive_Title_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Archive_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Archive_Where = {
  AND?: InputMaybe<Array<InputMaybe<Archive_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Archive_Where_Or>>>;
  about?: InputMaybe<Archive_About_Operator>;
  archiveCover?: InputMaybe<Archive_ArchiveCover_Operator>;
  categories?: InputMaybe<Archive_Categories_Operator>;
  createdAt?: InputMaybe<Archive_CreatedAt_Operator>;
  id?: InputMaybe<Archive_Id_Operator>;
  pdf?: InputMaybe<Archive_Pdf_Operator>;
  publishedDate?: InputMaybe<Archive_PublishedDate_Operator>;
  slug?: InputMaybe<Archive_Slug_Operator>;
  title?: InputMaybe<Archive_Title_Operator>;
  updatedAt?: InputMaybe<Archive_UpdatedAt_Operator>;
};

export type Archive_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<Archive_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Archive_Where_Or>>>;
  about?: InputMaybe<Archive_About_Operator>;
  archiveCover?: InputMaybe<Archive_ArchiveCover_Operator>;
  categories?: InputMaybe<Archive_Categories_Operator>;
  createdAt?: InputMaybe<Archive_CreatedAt_Operator>;
  id?: InputMaybe<Archive_Id_Operator>;
  pdf?: InputMaybe<Archive_Pdf_Operator>;
  publishedDate?: InputMaybe<Archive_PublishedDate_Operator>;
  slug?: InputMaybe<Archive_Slug_Operator>;
  title?: InputMaybe<Archive_Title_Operator>;
  updatedAt?: InputMaybe<Archive_UpdatedAt_Operator>;
};

export type Archive_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<Archive_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Archive_Where_Or>>>;
  about?: InputMaybe<Archive_About_Operator>;
  archiveCover?: InputMaybe<Archive_ArchiveCover_Operator>;
  categories?: InputMaybe<Archive_Categories_Operator>;
  createdAt?: InputMaybe<Archive_CreatedAt_Operator>;
  id?: InputMaybe<Archive_Id_Operator>;
  pdf?: InputMaybe<Archive_Pdf_Operator>;
  publishedDate?: InputMaybe<Archive_PublishedDate_Operator>;
  slug?: InputMaybe<Archive_Slug_Operator>;
  title?: InputMaybe<Archive_Title_Operator>;
  updatedAt?: InputMaybe<Archive_UpdatedAt_Operator>;
};

export type Archives = {
  __typename?: 'Archives';
  docs?: Maybe<Array<Maybe<Archive>>>;
  hasNextPage?: Maybe<Scalars['Boolean']['output']>;
  hasPrevPage?: Maybe<Scalars['Boolean']['output']>;
  limit?: Maybe<Scalars['Int']['output']>;
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page?: Maybe<Scalars['Int']['output']>;
  pagingCounter?: Maybe<Scalars['Int']['output']>;
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs?: Maybe<Scalars['Int']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type ArchivesCreateAccess = {
  __typename?: 'ArchivesCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ArchivesCreateDocAccess = {
  __typename?: 'ArchivesCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ArchivesDeleteAccess = {
  __typename?: 'ArchivesDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ArchivesDeleteDocAccess = {
  __typename?: 'ArchivesDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ArchivesDocAccessFields = {
  __typename?: 'ArchivesDocAccessFields';
  about?: Maybe<ArchivesDocAccessFields_About>;
  archiveCover?: Maybe<ArchivesDocAccessFields_ArchiveCover>;
  categories?: Maybe<ArchivesDocAccessFields_Categories>;
  createdAt?: Maybe<ArchivesDocAccessFields_CreatedAt>;
  pdf?: Maybe<ArchivesDocAccessFields_Pdf>;
  publishedDate?: Maybe<ArchivesDocAccessFields_PublishedDate>;
  slug?: Maybe<ArchivesDocAccessFields_Slug>;
  title?: Maybe<ArchivesDocAccessFields_Title>;
  updatedAt?: Maybe<ArchivesDocAccessFields_UpdatedAt>;
};

export type ArchivesDocAccessFields_About = {
  __typename?: 'ArchivesDocAccessFields_about';
  create?: Maybe<ArchivesDocAccessFields_About_Create>;
  delete?: Maybe<ArchivesDocAccessFields_About_Delete>;
  read?: Maybe<ArchivesDocAccessFields_About_Read>;
  update?: Maybe<ArchivesDocAccessFields_About_Update>;
};

export type ArchivesDocAccessFields_About_Create = {
  __typename?: 'ArchivesDocAccessFields_about_Create';
  permission: Scalars['Boolean']['output'];
};

export type ArchivesDocAccessFields_About_Delete = {
  __typename?: 'ArchivesDocAccessFields_about_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ArchivesDocAccessFields_About_Read = {
  __typename?: 'ArchivesDocAccessFields_about_Read';
  permission: Scalars['Boolean']['output'];
};

export type ArchivesDocAccessFields_About_Update = {
  __typename?: 'ArchivesDocAccessFields_about_Update';
  permission: Scalars['Boolean']['output'];
};

export type ArchivesDocAccessFields_ArchiveCover = {
  __typename?: 'ArchivesDocAccessFields_archiveCover';
  create?: Maybe<ArchivesDocAccessFields_ArchiveCover_Create>;
  delete?: Maybe<ArchivesDocAccessFields_ArchiveCover_Delete>;
  read?: Maybe<ArchivesDocAccessFields_ArchiveCover_Read>;
  update?: Maybe<ArchivesDocAccessFields_ArchiveCover_Update>;
};

export type ArchivesDocAccessFields_ArchiveCover_Create = {
  __typename?: 'ArchivesDocAccessFields_archiveCover_Create';
  permission: Scalars['Boolean']['output'];
};

export type ArchivesDocAccessFields_ArchiveCover_Delete = {
  __typename?: 'ArchivesDocAccessFields_archiveCover_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ArchivesDocAccessFields_ArchiveCover_Read = {
  __typename?: 'ArchivesDocAccessFields_archiveCover_Read';
  permission: Scalars['Boolean']['output'];
};

export type ArchivesDocAccessFields_ArchiveCover_Update = {
  __typename?: 'ArchivesDocAccessFields_archiveCover_Update';
  permission: Scalars['Boolean']['output'];
};

export type ArchivesDocAccessFields_Categories = {
  __typename?: 'ArchivesDocAccessFields_categories';
  create?: Maybe<ArchivesDocAccessFields_Categories_Create>;
  delete?: Maybe<ArchivesDocAccessFields_Categories_Delete>;
  read?: Maybe<ArchivesDocAccessFields_Categories_Read>;
  update?: Maybe<ArchivesDocAccessFields_Categories_Update>;
};

export type ArchivesDocAccessFields_Categories_Create = {
  __typename?: 'ArchivesDocAccessFields_categories_Create';
  permission: Scalars['Boolean']['output'];
};

export type ArchivesDocAccessFields_Categories_Delete = {
  __typename?: 'ArchivesDocAccessFields_categories_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ArchivesDocAccessFields_Categories_Read = {
  __typename?: 'ArchivesDocAccessFields_categories_Read';
  permission: Scalars['Boolean']['output'];
};

export type ArchivesDocAccessFields_Categories_Update = {
  __typename?: 'ArchivesDocAccessFields_categories_Update';
  permission: Scalars['Boolean']['output'];
};

export type ArchivesDocAccessFields_CreatedAt = {
  __typename?: 'ArchivesDocAccessFields_createdAt';
  create?: Maybe<ArchivesDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<ArchivesDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<ArchivesDocAccessFields_CreatedAt_Read>;
  update?: Maybe<ArchivesDocAccessFields_CreatedAt_Update>;
};

export type ArchivesDocAccessFields_CreatedAt_Create = {
  __typename?: 'ArchivesDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type ArchivesDocAccessFields_CreatedAt_Delete = {
  __typename?: 'ArchivesDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ArchivesDocAccessFields_CreatedAt_Read = {
  __typename?: 'ArchivesDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type ArchivesDocAccessFields_CreatedAt_Update = {
  __typename?: 'ArchivesDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type ArchivesDocAccessFields_Pdf = {
  __typename?: 'ArchivesDocAccessFields_pdf';
  create?: Maybe<ArchivesDocAccessFields_Pdf_Create>;
  delete?: Maybe<ArchivesDocAccessFields_Pdf_Delete>;
  read?: Maybe<ArchivesDocAccessFields_Pdf_Read>;
  update?: Maybe<ArchivesDocAccessFields_Pdf_Update>;
};

export type ArchivesDocAccessFields_Pdf_Create = {
  __typename?: 'ArchivesDocAccessFields_pdf_Create';
  permission: Scalars['Boolean']['output'];
};

export type ArchivesDocAccessFields_Pdf_Delete = {
  __typename?: 'ArchivesDocAccessFields_pdf_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ArchivesDocAccessFields_Pdf_Read = {
  __typename?: 'ArchivesDocAccessFields_pdf_Read';
  permission: Scalars['Boolean']['output'];
};

export type ArchivesDocAccessFields_Pdf_Update = {
  __typename?: 'ArchivesDocAccessFields_pdf_Update';
  permission: Scalars['Boolean']['output'];
};

export type ArchivesDocAccessFields_PublishedDate = {
  __typename?: 'ArchivesDocAccessFields_publishedDate';
  create?: Maybe<ArchivesDocAccessFields_PublishedDate_Create>;
  delete?: Maybe<ArchivesDocAccessFields_PublishedDate_Delete>;
  read?: Maybe<ArchivesDocAccessFields_PublishedDate_Read>;
  update?: Maybe<ArchivesDocAccessFields_PublishedDate_Update>;
};

export type ArchivesDocAccessFields_PublishedDate_Create = {
  __typename?: 'ArchivesDocAccessFields_publishedDate_Create';
  permission: Scalars['Boolean']['output'];
};

export type ArchivesDocAccessFields_PublishedDate_Delete = {
  __typename?: 'ArchivesDocAccessFields_publishedDate_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ArchivesDocAccessFields_PublishedDate_Read = {
  __typename?: 'ArchivesDocAccessFields_publishedDate_Read';
  permission: Scalars['Boolean']['output'];
};

export type ArchivesDocAccessFields_PublishedDate_Update = {
  __typename?: 'ArchivesDocAccessFields_publishedDate_Update';
  permission: Scalars['Boolean']['output'];
};

export type ArchivesDocAccessFields_Slug = {
  __typename?: 'ArchivesDocAccessFields_slug';
  create?: Maybe<ArchivesDocAccessFields_Slug_Create>;
  delete?: Maybe<ArchivesDocAccessFields_Slug_Delete>;
  read?: Maybe<ArchivesDocAccessFields_Slug_Read>;
  update?: Maybe<ArchivesDocAccessFields_Slug_Update>;
};

export type ArchivesDocAccessFields_Slug_Create = {
  __typename?: 'ArchivesDocAccessFields_slug_Create';
  permission: Scalars['Boolean']['output'];
};

export type ArchivesDocAccessFields_Slug_Delete = {
  __typename?: 'ArchivesDocAccessFields_slug_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ArchivesDocAccessFields_Slug_Read = {
  __typename?: 'ArchivesDocAccessFields_slug_Read';
  permission: Scalars['Boolean']['output'];
};

export type ArchivesDocAccessFields_Slug_Update = {
  __typename?: 'ArchivesDocAccessFields_slug_Update';
  permission: Scalars['Boolean']['output'];
};

export type ArchivesDocAccessFields_Title = {
  __typename?: 'ArchivesDocAccessFields_title';
  create?: Maybe<ArchivesDocAccessFields_Title_Create>;
  delete?: Maybe<ArchivesDocAccessFields_Title_Delete>;
  read?: Maybe<ArchivesDocAccessFields_Title_Read>;
  update?: Maybe<ArchivesDocAccessFields_Title_Update>;
};

export type ArchivesDocAccessFields_Title_Create = {
  __typename?: 'ArchivesDocAccessFields_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type ArchivesDocAccessFields_Title_Delete = {
  __typename?: 'ArchivesDocAccessFields_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ArchivesDocAccessFields_Title_Read = {
  __typename?: 'ArchivesDocAccessFields_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type ArchivesDocAccessFields_Title_Update = {
  __typename?: 'ArchivesDocAccessFields_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type ArchivesDocAccessFields_UpdatedAt = {
  __typename?: 'ArchivesDocAccessFields_updatedAt';
  create?: Maybe<ArchivesDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<ArchivesDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<ArchivesDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<ArchivesDocAccessFields_UpdatedAt_Update>;
};

export type ArchivesDocAccessFields_UpdatedAt_Create = {
  __typename?: 'ArchivesDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type ArchivesDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'ArchivesDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ArchivesDocAccessFields_UpdatedAt_Read = {
  __typename?: 'ArchivesDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type ArchivesDocAccessFields_UpdatedAt_Update = {
  __typename?: 'ArchivesDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type ArchivesFields = {
  __typename?: 'ArchivesFields';
  about?: Maybe<ArchivesFields_About>;
  archiveCover?: Maybe<ArchivesFields_ArchiveCover>;
  categories?: Maybe<ArchivesFields_Categories>;
  createdAt?: Maybe<ArchivesFields_CreatedAt>;
  pdf?: Maybe<ArchivesFields_Pdf>;
  publishedDate?: Maybe<ArchivesFields_PublishedDate>;
  slug?: Maybe<ArchivesFields_Slug>;
  title?: Maybe<ArchivesFields_Title>;
  updatedAt?: Maybe<ArchivesFields_UpdatedAt>;
};

export type ArchivesFields_About = {
  __typename?: 'ArchivesFields_about';
  create?: Maybe<ArchivesFields_About_Create>;
  delete?: Maybe<ArchivesFields_About_Delete>;
  read?: Maybe<ArchivesFields_About_Read>;
  update?: Maybe<ArchivesFields_About_Update>;
};

export type ArchivesFields_About_Create = {
  __typename?: 'ArchivesFields_about_Create';
  permission: Scalars['Boolean']['output'];
};

export type ArchivesFields_About_Delete = {
  __typename?: 'ArchivesFields_about_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ArchivesFields_About_Read = {
  __typename?: 'ArchivesFields_about_Read';
  permission: Scalars['Boolean']['output'];
};

export type ArchivesFields_About_Update = {
  __typename?: 'ArchivesFields_about_Update';
  permission: Scalars['Boolean']['output'];
};

export type ArchivesFields_ArchiveCover = {
  __typename?: 'ArchivesFields_archiveCover';
  create?: Maybe<ArchivesFields_ArchiveCover_Create>;
  delete?: Maybe<ArchivesFields_ArchiveCover_Delete>;
  read?: Maybe<ArchivesFields_ArchiveCover_Read>;
  update?: Maybe<ArchivesFields_ArchiveCover_Update>;
};

export type ArchivesFields_ArchiveCover_Create = {
  __typename?: 'ArchivesFields_archiveCover_Create';
  permission: Scalars['Boolean']['output'];
};

export type ArchivesFields_ArchiveCover_Delete = {
  __typename?: 'ArchivesFields_archiveCover_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ArchivesFields_ArchiveCover_Read = {
  __typename?: 'ArchivesFields_archiveCover_Read';
  permission: Scalars['Boolean']['output'];
};

export type ArchivesFields_ArchiveCover_Update = {
  __typename?: 'ArchivesFields_archiveCover_Update';
  permission: Scalars['Boolean']['output'];
};

export type ArchivesFields_Categories = {
  __typename?: 'ArchivesFields_categories';
  create?: Maybe<ArchivesFields_Categories_Create>;
  delete?: Maybe<ArchivesFields_Categories_Delete>;
  read?: Maybe<ArchivesFields_Categories_Read>;
  update?: Maybe<ArchivesFields_Categories_Update>;
};

export type ArchivesFields_Categories_Create = {
  __typename?: 'ArchivesFields_categories_Create';
  permission: Scalars['Boolean']['output'];
};

export type ArchivesFields_Categories_Delete = {
  __typename?: 'ArchivesFields_categories_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ArchivesFields_Categories_Read = {
  __typename?: 'ArchivesFields_categories_Read';
  permission: Scalars['Boolean']['output'];
};

export type ArchivesFields_Categories_Update = {
  __typename?: 'ArchivesFields_categories_Update';
  permission: Scalars['Boolean']['output'];
};

export type ArchivesFields_CreatedAt = {
  __typename?: 'ArchivesFields_createdAt';
  create?: Maybe<ArchivesFields_CreatedAt_Create>;
  delete?: Maybe<ArchivesFields_CreatedAt_Delete>;
  read?: Maybe<ArchivesFields_CreatedAt_Read>;
  update?: Maybe<ArchivesFields_CreatedAt_Update>;
};

export type ArchivesFields_CreatedAt_Create = {
  __typename?: 'ArchivesFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type ArchivesFields_CreatedAt_Delete = {
  __typename?: 'ArchivesFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ArchivesFields_CreatedAt_Read = {
  __typename?: 'ArchivesFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type ArchivesFields_CreatedAt_Update = {
  __typename?: 'ArchivesFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type ArchivesFields_Pdf = {
  __typename?: 'ArchivesFields_pdf';
  create?: Maybe<ArchivesFields_Pdf_Create>;
  delete?: Maybe<ArchivesFields_Pdf_Delete>;
  read?: Maybe<ArchivesFields_Pdf_Read>;
  update?: Maybe<ArchivesFields_Pdf_Update>;
};

export type ArchivesFields_Pdf_Create = {
  __typename?: 'ArchivesFields_pdf_Create';
  permission: Scalars['Boolean']['output'];
};

export type ArchivesFields_Pdf_Delete = {
  __typename?: 'ArchivesFields_pdf_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ArchivesFields_Pdf_Read = {
  __typename?: 'ArchivesFields_pdf_Read';
  permission: Scalars['Boolean']['output'];
};

export type ArchivesFields_Pdf_Update = {
  __typename?: 'ArchivesFields_pdf_Update';
  permission: Scalars['Boolean']['output'];
};

export type ArchivesFields_PublishedDate = {
  __typename?: 'ArchivesFields_publishedDate';
  create?: Maybe<ArchivesFields_PublishedDate_Create>;
  delete?: Maybe<ArchivesFields_PublishedDate_Delete>;
  read?: Maybe<ArchivesFields_PublishedDate_Read>;
  update?: Maybe<ArchivesFields_PublishedDate_Update>;
};

export type ArchivesFields_PublishedDate_Create = {
  __typename?: 'ArchivesFields_publishedDate_Create';
  permission: Scalars['Boolean']['output'];
};

export type ArchivesFields_PublishedDate_Delete = {
  __typename?: 'ArchivesFields_publishedDate_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ArchivesFields_PublishedDate_Read = {
  __typename?: 'ArchivesFields_publishedDate_Read';
  permission: Scalars['Boolean']['output'];
};

export type ArchivesFields_PublishedDate_Update = {
  __typename?: 'ArchivesFields_publishedDate_Update';
  permission: Scalars['Boolean']['output'];
};

export type ArchivesFields_Slug = {
  __typename?: 'ArchivesFields_slug';
  create?: Maybe<ArchivesFields_Slug_Create>;
  delete?: Maybe<ArchivesFields_Slug_Delete>;
  read?: Maybe<ArchivesFields_Slug_Read>;
  update?: Maybe<ArchivesFields_Slug_Update>;
};

export type ArchivesFields_Slug_Create = {
  __typename?: 'ArchivesFields_slug_Create';
  permission: Scalars['Boolean']['output'];
};

export type ArchivesFields_Slug_Delete = {
  __typename?: 'ArchivesFields_slug_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ArchivesFields_Slug_Read = {
  __typename?: 'ArchivesFields_slug_Read';
  permission: Scalars['Boolean']['output'];
};

export type ArchivesFields_Slug_Update = {
  __typename?: 'ArchivesFields_slug_Update';
  permission: Scalars['Boolean']['output'];
};

export type ArchivesFields_Title = {
  __typename?: 'ArchivesFields_title';
  create?: Maybe<ArchivesFields_Title_Create>;
  delete?: Maybe<ArchivesFields_Title_Delete>;
  read?: Maybe<ArchivesFields_Title_Read>;
  update?: Maybe<ArchivesFields_Title_Update>;
};

export type ArchivesFields_Title_Create = {
  __typename?: 'ArchivesFields_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type ArchivesFields_Title_Delete = {
  __typename?: 'ArchivesFields_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ArchivesFields_Title_Read = {
  __typename?: 'ArchivesFields_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type ArchivesFields_Title_Update = {
  __typename?: 'ArchivesFields_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type ArchivesFields_UpdatedAt = {
  __typename?: 'ArchivesFields_updatedAt';
  create?: Maybe<ArchivesFields_UpdatedAt_Create>;
  delete?: Maybe<ArchivesFields_UpdatedAt_Delete>;
  read?: Maybe<ArchivesFields_UpdatedAt_Read>;
  update?: Maybe<ArchivesFields_UpdatedAt_Update>;
};

export type ArchivesFields_UpdatedAt_Create = {
  __typename?: 'ArchivesFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type ArchivesFields_UpdatedAt_Delete = {
  __typename?: 'ArchivesFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ArchivesFields_UpdatedAt_Read = {
  __typename?: 'ArchivesFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type ArchivesFields_UpdatedAt_Update = {
  __typename?: 'ArchivesFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type ArchivesReadAccess = {
  __typename?: 'ArchivesReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ArchivesReadDocAccess = {
  __typename?: 'ArchivesReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ArchivesUpdateAccess = {
  __typename?: 'ArchivesUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ArchivesUpdateDocAccess = {
  __typename?: 'ArchivesUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type EditorialBoard = {
  __typename?: 'EditorialBoard';
  boardGroups?: Maybe<Array<EditorialBoard_BoardGroups>>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type EditorialBoardDocAccessFields = {
  __typename?: 'EditorialBoardDocAccessFields';
  boardGroups?: Maybe<EditorialBoardDocAccessFields_BoardGroups>;
  createdAt?: Maybe<EditorialBoardDocAccessFields_CreatedAt>;
  updatedAt?: Maybe<EditorialBoardDocAccessFields_UpdatedAt>;
};

export type EditorialBoardDocAccessFields_BoardGroups = {
  __typename?: 'EditorialBoardDocAccessFields_boardGroups';
  create?: Maybe<EditorialBoardDocAccessFields_BoardGroups_Create>;
  delete?: Maybe<EditorialBoardDocAccessFields_BoardGroups_Delete>;
  fields?: Maybe<EditorialBoardDocAccessFields_BoardGroups_Fields>;
  read?: Maybe<EditorialBoardDocAccessFields_BoardGroups_Read>;
  update?: Maybe<EditorialBoardDocAccessFields_BoardGroups_Update>;
};

export type EditorialBoardDocAccessFields_BoardGroups_Create = {
  __typename?: 'EditorialBoardDocAccessFields_boardGroups_Create';
  permission: Scalars['Boolean']['output'];
};

export type EditorialBoardDocAccessFields_BoardGroups_Delete = {
  __typename?: 'EditorialBoardDocAccessFields_boardGroups_Delete';
  permission: Scalars['Boolean']['output'];
};

export type EditorialBoardDocAccessFields_BoardGroups_Fields = {
  __typename?: 'EditorialBoardDocAccessFields_boardGroups_Fields';
  heading?: Maybe<EditorialBoardDocAccessFields_BoardGroups_Heading>;
  id?: Maybe<EditorialBoardDocAccessFields_BoardGroups_Id>;
  members?: Maybe<EditorialBoardDocAccessFields_BoardGroups_Members>;
};

export type EditorialBoardDocAccessFields_BoardGroups_Read = {
  __typename?: 'EditorialBoardDocAccessFields_boardGroups_Read';
  permission: Scalars['Boolean']['output'];
};

export type EditorialBoardDocAccessFields_BoardGroups_Update = {
  __typename?: 'EditorialBoardDocAccessFields_boardGroups_Update';
  permission: Scalars['Boolean']['output'];
};

export type EditorialBoardDocAccessFields_BoardGroups_Heading = {
  __typename?: 'EditorialBoardDocAccessFields_boardGroups_heading';
  create?: Maybe<EditorialBoardDocAccessFields_BoardGroups_Heading_Create>;
  delete?: Maybe<EditorialBoardDocAccessFields_BoardGroups_Heading_Delete>;
  read?: Maybe<EditorialBoardDocAccessFields_BoardGroups_Heading_Read>;
  update?: Maybe<EditorialBoardDocAccessFields_BoardGroups_Heading_Update>;
};

export type EditorialBoardDocAccessFields_BoardGroups_Heading_Create = {
  __typename?: 'EditorialBoardDocAccessFields_boardGroups_heading_Create';
  permission: Scalars['Boolean']['output'];
};

export type EditorialBoardDocAccessFields_BoardGroups_Heading_Delete = {
  __typename?: 'EditorialBoardDocAccessFields_boardGroups_heading_Delete';
  permission: Scalars['Boolean']['output'];
};

export type EditorialBoardDocAccessFields_BoardGroups_Heading_Read = {
  __typename?: 'EditorialBoardDocAccessFields_boardGroups_heading_Read';
  permission: Scalars['Boolean']['output'];
};

export type EditorialBoardDocAccessFields_BoardGroups_Heading_Update = {
  __typename?: 'EditorialBoardDocAccessFields_boardGroups_heading_Update';
  permission: Scalars['Boolean']['output'];
};

export type EditorialBoardDocAccessFields_BoardGroups_Id = {
  __typename?: 'EditorialBoardDocAccessFields_boardGroups_id';
  create?: Maybe<EditorialBoardDocAccessFields_BoardGroups_Id_Create>;
  delete?: Maybe<EditorialBoardDocAccessFields_BoardGroups_Id_Delete>;
  read?: Maybe<EditorialBoardDocAccessFields_BoardGroups_Id_Read>;
  update?: Maybe<EditorialBoardDocAccessFields_BoardGroups_Id_Update>;
};

export type EditorialBoardDocAccessFields_BoardGroups_Id_Create = {
  __typename?: 'EditorialBoardDocAccessFields_boardGroups_id_Create';
  permission: Scalars['Boolean']['output'];
};

export type EditorialBoardDocAccessFields_BoardGroups_Id_Delete = {
  __typename?: 'EditorialBoardDocAccessFields_boardGroups_id_Delete';
  permission: Scalars['Boolean']['output'];
};

export type EditorialBoardDocAccessFields_BoardGroups_Id_Read = {
  __typename?: 'EditorialBoardDocAccessFields_boardGroups_id_Read';
  permission: Scalars['Boolean']['output'];
};

export type EditorialBoardDocAccessFields_BoardGroups_Id_Update = {
  __typename?: 'EditorialBoardDocAccessFields_boardGroups_id_Update';
  permission: Scalars['Boolean']['output'];
};

export type EditorialBoardDocAccessFields_BoardGroups_Members = {
  __typename?: 'EditorialBoardDocAccessFields_boardGroups_members';
  create?: Maybe<EditorialBoardDocAccessFields_BoardGroups_Members_Create>;
  delete?: Maybe<EditorialBoardDocAccessFields_BoardGroups_Members_Delete>;
  fields?: Maybe<EditorialBoardDocAccessFields_BoardGroups_Members_Fields>;
  read?: Maybe<EditorialBoardDocAccessFields_BoardGroups_Members_Read>;
  update?: Maybe<EditorialBoardDocAccessFields_BoardGroups_Members_Update>;
};

export type EditorialBoardDocAccessFields_BoardGroups_Members_Create = {
  __typename?: 'EditorialBoardDocAccessFields_boardGroups_members_Create';
  permission: Scalars['Boolean']['output'];
};

export type EditorialBoardDocAccessFields_BoardGroups_Members_Delete = {
  __typename?: 'EditorialBoardDocAccessFields_boardGroups_members_Delete';
  permission: Scalars['Boolean']['output'];
};

export type EditorialBoardDocAccessFields_BoardGroups_Members_Fields = {
  __typename?: 'EditorialBoardDocAccessFields_boardGroups_members_Fields';
  id?: Maybe<EditorialBoardDocAccessFields_BoardGroups_Members_Id>;
  name?: Maybe<EditorialBoardDocAccessFields_BoardGroups_Members_Name>;
  profileImage?: Maybe<EditorialBoardDocAccessFields_BoardGroups_Members_ProfileImage>;
  subtitle?: Maybe<EditorialBoardDocAccessFields_BoardGroups_Members_Subtitle>;
};

export type EditorialBoardDocAccessFields_BoardGroups_Members_Read = {
  __typename?: 'EditorialBoardDocAccessFields_boardGroups_members_Read';
  permission: Scalars['Boolean']['output'];
};

export type EditorialBoardDocAccessFields_BoardGroups_Members_Update = {
  __typename?: 'EditorialBoardDocAccessFields_boardGroups_members_Update';
  permission: Scalars['Boolean']['output'];
};

export type EditorialBoardDocAccessFields_BoardGroups_Members_Id = {
  __typename?: 'EditorialBoardDocAccessFields_boardGroups_members_id';
  create?: Maybe<EditorialBoardDocAccessFields_BoardGroups_Members_Id_Create>;
  delete?: Maybe<EditorialBoardDocAccessFields_BoardGroups_Members_Id_Delete>;
  read?: Maybe<EditorialBoardDocAccessFields_BoardGroups_Members_Id_Read>;
  update?: Maybe<EditorialBoardDocAccessFields_BoardGroups_Members_Id_Update>;
};

export type EditorialBoardDocAccessFields_BoardGroups_Members_Id_Create = {
  __typename?: 'EditorialBoardDocAccessFields_boardGroups_members_id_Create';
  permission: Scalars['Boolean']['output'];
};

export type EditorialBoardDocAccessFields_BoardGroups_Members_Id_Delete = {
  __typename?: 'EditorialBoardDocAccessFields_boardGroups_members_id_Delete';
  permission: Scalars['Boolean']['output'];
};

export type EditorialBoardDocAccessFields_BoardGroups_Members_Id_Read = {
  __typename?: 'EditorialBoardDocAccessFields_boardGroups_members_id_Read';
  permission: Scalars['Boolean']['output'];
};

export type EditorialBoardDocAccessFields_BoardGroups_Members_Id_Update = {
  __typename?: 'EditorialBoardDocAccessFields_boardGroups_members_id_Update';
  permission: Scalars['Boolean']['output'];
};

export type EditorialBoardDocAccessFields_BoardGroups_Members_Name = {
  __typename?: 'EditorialBoardDocAccessFields_boardGroups_members_name';
  create?: Maybe<EditorialBoardDocAccessFields_BoardGroups_Members_Name_Create>;
  delete?: Maybe<EditorialBoardDocAccessFields_BoardGroups_Members_Name_Delete>;
  read?: Maybe<EditorialBoardDocAccessFields_BoardGroups_Members_Name_Read>;
  update?: Maybe<EditorialBoardDocAccessFields_BoardGroups_Members_Name_Update>;
};

export type EditorialBoardDocAccessFields_BoardGroups_Members_Name_Create = {
  __typename?: 'EditorialBoardDocAccessFields_boardGroups_members_name_Create';
  permission: Scalars['Boolean']['output'];
};

export type EditorialBoardDocAccessFields_BoardGroups_Members_Name_Delete = {
  __typename?: 'EditorialBoardDocAccessFields_boardGroups_members_name_Delete';
  permission: Scalars['Boolean']['output'];
};

export type EditorialBoardDocAccessFields_BoardGroups_Members_Name_Read = {
  __typename?: 'EditorialBoardDocAccessFields_boardGroups_members_name_Read';
  permission: Scalars['Boolean']['output'];
};

export type EditorialBoardDocAccessFields_BoardGroups_Members_Name_Update = {
  __typename?: 'EditorialBoardDocAccessFields_boardGroups_members_name_Update';
  permission: Scalars['Boolean']['output'];
};

export type EditorialBoardDocAccessFields_BoardGroups_Members_ProfileImage = {
  __typename?: 'EditorialBoardDocAccessFields_boardGroups_members_profileImage';
  create?: Maybe<EditorialBoardDocAccessFields_BoardGroups_Members_ProfileImage_Create>;
  delete?: Maybe<EditorialBoardDocAccessFields_BoardGroups_Members_ProfileImage_Delete>;
  read?: Maybe<EditorialBoardDocAccessFields_BoardGroups_Members_ProfileImage_Read>;
  update?: Maybe<EditorialBoardDocAccessFields_BoardGroups_Members_ProfileImage_Update>;
};

export type EditorialBoardDocAccessFields_BoardGroups_Members_ProfileImage_Create = {
  __typename?: 'EditorialBoardDocAccessFields_boardGroups_members_profileImage_Create';
  permission: Scalars['Boolean']['output'];
};

export type EditorialBoardDocAccessFields_BoardGroups_Members_ProfileImage_Delete = {
  __typename?: 'EditorialBoardDocAccessFields_boardGroups_members_profileImage_Delete';
  permission: Scalars['Boolean']['output'];
};

export type EditorialBoardDocAccessFields_BoardGroups_Members_ProfileImage_Read = {
  __typename?: 'EditorialBoardDocAccessFields_boardGroups_members_profileImage_Read';
  permission: Scalars['Boolean']['output'];
};

export type EditorialBoardDocAccessFields_BoardGroups_Members_ProfileImage_Update = {
  __typename?: 'EditorialBoardDocAccessFields_boardGroups_members_profileImage_Update';
  permission: Scalars['Boolean']['output'];
};

export type EditorialBoardDocAccessFields_BoardGroups_Members_Subtitle = {
  __typename?: 'EditorialBoardDocAccessFields_boardGroups_members_subtitle';
  create?: Maybe<EditorialBoardDocAccessFields_BoardGroups_Members_Subtitle_Create>;
  delete?: Maybe<EditorialBoardDocAccessFields_BoardGroups_Members_Subtitle_Delete>;
  read?: Maybe<EditorialBoardDocAccessFields_BoardGroups_Members_Subtitle_Read>;
  update?: Maybe<EditorialBoardDocAccessFields_BoardGroups_Members_Subtitle_Update>;
};

export type EditorialBoardDocAccessFields_BoardGroups_Members_Subtitle_Create = {
  __typename?: 'EditorialBoardDocAccessFields_boardGroups_members_subtitle_Create';
  permission: Scalars['Boolean']['output'];
};

export type EditorialBoardDocAccessFields_BoardGroups_Members_Subtitle_Delete = {
  __typename?: 'EditorialBoardDocAccessFields_boardGroups_members_subtitle_Delete';
  permission: Scalars['Boolean']['output'];
};

export type EditorialBoardDocAccessFields_BoardGroups_Members_Subtitle_Read = {
  __typename?: 'EditorialBoardDocAccessFields_boardGroups_members_subtitle_Read';
  permission: Scalars['Boolean']['output'];
};

export type EditorialBoardDocAccessFields_BoardGroups_Members_Subtitle_Update = {
  __typename?: 'EditorialBoardDocAccessFields_boardGroups_members_subtitle_Update';
  permission: Scalars['Boolean']['output'];
};

export type EditorialBoardDocAccessFields_CreatedAt = {
  __typename?: 'EditorialBoardDocAccessFields_createdAt';
  create?: Maybe<EditorialBoardDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<EditorialBoardDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<EditorialBoardDocAccessFields_CreatedAt_Read>;
  update?: Maybe<EditorialBoardDocAccessFields_CreatedAt_Update>;
};

export type EditorialBoardDocAccessFields_CreatedAt_Create = {
  __typename?: 'EditorialBoardDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type EditorialBoardDocAccessFields_CreatedAt_Delete = {
  __typename?: 'EditorialBoardDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type EditorialBoardDocAccessFields_CreatedAt_Read = {
  __typename?: 'EditorialBoardDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type EditorialBoardDocAccessFields_CreatedAt_Update = {
  __typename?: 'EditorialBoardDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type EditorialBoardDocAccessFields_UpdatedAt = {
  __typename?: 'EditorialBoardDocAccessFields_updatedAt';
  create?: Maybe<EditorialBoardDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<EditorialBoardDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<EditorialBoardDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<EditorialBoardDocAccessFields_UpdatedAt_Update>;
};

export type EditorialBoardDocAccessFields_UpdatedAt_Create = {
  __typename?: 'EditorialBoardDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type EditorialBoardDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'EditorialBoardDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type EditorialBoardDocAccessFields_UpdatedAt_Read = {
  __typename?: 'EditorialBoardDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type EditorialBoardDocAccessFields_UpdatedAt_Update = {
  __typename?: 'EditorialBoardDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type EditorialBoardFields = {
  __typename?: 'EditorialBoardFields';
  boardGroups?: Maybe<EditorialBoardFields_BoardGroups>;
  createdAt?: Maybe<EditorialBoardFields_CreatedAt>;
  updatedAt?: Maybe<EditorialBoardFields_UpdatedAt>;
};

export type EditorialBoardFields_BoardGroups = {
  __typename?: 'EditorialBoardFields_boardGroups';
  create?: Maybe<EditorialBoardFields_BoardGroups_Create>;
  delete?: Maybe<EditorialBoardFields_BoardGroups_Delete>;
  fields?: Maybe<EditorialBoardFields_BoardGroups_Fields>;
  read?: Maybe<EditorialBoardFields_BoardGroups_Read>;
  update?: Maybe<EditorialBoardFields_BoardGroups_Update>;
};

export type EditorialBoardFields_BoardGroups_Create = {
  __typename?: 'EditorialBoardFields_boardGroups_Create';
  permission: Scalars['Boolean']['output'];
};

export type EditorialBoardFields_BoardGroups_Delete = {
  __typename?: 'EditorialBoardFields_boardGroups_Delete';
  permission: Scalars['Boolean']['output'];
};

export type EditorialBoardFields_BoardGroups_Fields = {
  __typename?: 'EditorialBoardFields_boardGroups_Fields';
  heading?: Maybe<EditorialBoardFields_BoardGroups_Heading>;
  id?: Maybe<EditorialBoardFields_BoardGroups_Id>;
  members?: Maybe<EditorialBoardFields_BoardGroups_Members>;
};

export type EditorialBoardFields_BoardGroups_Read = {
  __typename?: 'EditorialBoardFields_boardGroups_Read';
  permission: Scalars['Boolean']['output'];
};

export type EditorialBoardFields_BoardGroups_Update = {
  __typename?: 'EditorialBoardFields_boardGroups_Update';
  permission: Scalars['Boolean']['output'];
};

export type EditorialBoardFields_BoardGroups_Heading = {
  __typename?: 'EditorialBoardFields_boardGroups_heading';
  create?: Maybe<EditorialBoardFields_BoardGroups_Heading_Create>;
  delete?: Maybe<EditorialBoardFields_BoardGroups_Heading_Delete>;
  read?: Maybe<EditorialBoardFields_BoardGroups_Heading_Read>;
  update?: Maybe<EditorialBoardFields_BoardGroups_Heading_Update>;
};

export type EditorialBoardFields_BoardGroups_Heading_Create = {
  __typename?: 'EditorialBoardFields_boardGroups_heading_Create';
  permission: Scalars['Boolean']['output'];
};

export type EditorialBoardFields_BoardGroups_Heading_Delete = {
  __typename?: 'EditorialBoardFields_boardGroups_heading_Delete';
  permission: Scalars['Boolean']['output'];
};

export type EditorialBoardFields_BoardGroups_Heading_Read = {
  __typename?: 'EditorialBoardFields_boardGroups_heading_Read';
  permission: Scalars['Boolean']['output'];
};

export type EditorialBoardFields_BoardGroups_Heading_Update = {
  __typename?: 'EditorialBoardFields_boardGroups_heading_Update';
  permission: Scalars['Boolean']['output'];
};

export type EditorialBoardFields_BoardGroups_Id = {
  __typename?: 'EditorialBoardFields_boardGroups_id';
  create?: Maybe<EditorialBoardFields_BoardGroups_Id_Create>;
  delete?: Maybe<EditorialBoardFields_BoardGroups_Id_Delete>;
  read?: Maybe<EditorialBoardFields_BoardGroups_Id_Read>;
  update?: Maybe<EditorialBoardFields_BoardGroups_Id_Update>;
};

export type EditorialBoardFields_BoardGroups_Id_Create = {
  __typename?: 'EditorialBoardFields_boardGroups_id_Create';
  permission: Scalars['Boolean']['output'];
};

export type EditorialBoardFields_BoardGroups_Id_Delete = {
  __typename?: 'EditorialBoardFields_boardGroups_id_Delete';
  permission: Scalars['Boolean']['output'];
};

export type EditorialBoardFields_BoardGroups_Id_Read = {
  __typename?: 'EditorialBoardFields_boardGroups_id_Read';
  permission: Scalars['Boolean']['output'];
};

export type EditorialBoardFields_BoardGroups_Id_Update = {
  __typename?: 'EditorialBoardFields_boardGroups_id_Update';
  permission: Scalars['Boolean']['output'];
};

export type EditorialBoardFields_BoardGroups_Members = {
  __typename?: 'EditorialBoardFields_boardGroups_members';
  create?: Maybe<EditorialBoardFields_BoardGroups_Members_Create>;
  delete?: Maybe<EditorialBoardFields_BoardGroups_Members_Delete>;
  fields?: Maybe<EditorialBoardFields_BoardGroups_Members_Fields>;
  read?: Maybe<EditorialBoardFields_BoardGroups_Members_Read>;
  update?: Maybe<EditorialBoardFields_BoardGroups_Members_Update>;
};

export type EditorialBoardFields_BoardGroups_Members_Create = {
  __typename?: 'EditorialBoardFields_boardGroups_members_Create';
  permission: Scalars['Boolean']['output'];
};

export type EditorialBoardFields_BoardGroups_Members_Delete = {
  __typename?: 'EditorialBoardFields_boardGroups_members_Delete';
  permission: Scalars['Boolean']['output'];
};

export type EditorialBoardFields_BoardGroups_Members_Fields = {
  __typename?: 'EditorialBoardFields_boardGroups_members_Fields';
  id?: Maybe<EditorialBoardFields_BoardGroups_Members_Id>;
  name?: Maybe<EditorialBoardFields_BoardGroups_Members_Name>;
  profileImage?: Maybe<EditorialBoardFields_BoardGroups_Members_ProfileImage>;
  subtitle?: Maybe<EditorialBoardFields_BoardGroups_Members_Subtitle>;
};

export type EditorialBoardFields_BoardGroups_Members_Read = {
  __typename?: 'EditorialBoardFields_boardGroups_members_Read';
  permission: Scalars['Boolean']['output'];
};

export type EditorialBoardFields_BoardGroups_Members_Update = {
  __typename?: 'EditorialBoardFields_boardGroups_members_Update';
  permission: Scalars['Boolean']['output'];
};

export type EditorialBoardFields_BoardGroups_Members_Id = {
  __typename?: 'EditorialBoardFields_boardGroups_members_id';
  create?: Maybe<EditorialBoardFields_BoardGroups_Members_Id_Create>;
  delete?: Maybe<EditorialBoardFields_BoardGroups_Members_Id_Delete>;
  read?: Maybe<EditorialBoardFields_BoardGroups_Members_Id_Read>;
  update?: Maybe<EditorialBoardFields_BoardGroups_Members_Id_Update>;
};

export type EditorialBoardFields_BoardGroups_Members_Id_Create = {
  __typename?: 'EditorialBoardFields_boardGroups_members_id_Create';
  permission: Scalars['Boolean']['output'];
};

export type EditorialBoardFields_BoardGroups_Members_Id_Delete = {
  __typename?: 'EditorialBoardFields_boardGroups_members_id_Delete';
  permission: Scalars['Boolean']['output'];
};

export type EditorialBoardFields_BoardGroups_Members_Id_Read = {
  __typename?: 'EditorialBoardFields_boardGroups_members_id_Read';
  permission: Scalars['Boolean']['output'];
};

export type EditorialBoardFields_BoardGroups_Members_Id_Update = {
  __typename?: 'EditorialBoardFields_boardGroups_members_id_Update';
  permission: Scalars['Boolean']['output'];
};

export type EditorialBoardFields_BoardGroups_Members_Name = {
  __typename?: 'EditorialBoardFields_boardGroups_members_name';
  create?: Maybe<EditorialBoardFields_BoardGroups_Members_Name_Create>;
  delete?: Maybe<EditorialBoardFields_BoardGroups_Members_Name_Delete>;
  read?: Maybe<EditorialBoardFields_BoardGroups_Members_Name_Read>;
  update?: Maybe<EditorialBoardFields_BoardGroups_Members_Name_Update>;
};

export type EditorialBoardFields_BoardGroups_Members_Name_Create = {
  __typename?: 'EditorialBoardFields_boardGroups_members_name_Create';
  permission: Scalars['Boolean']['output'];
};

export type EditorialBoardFields_BoardGroups_Members_Name_Delete = {
  __typename?: 'EditorialBoardFields_boardGroups_members_name_Delete';
  permission: Scalars['Boolean']['output'];
};

export type EditorialBoardFields_BoardGroups_Members_Name_Read = {
  __typename?: 'EditorialBoardFields_boardGroups_members_name_Read';
  permission: Scalars['Boolean']['output'];
};

export type EditorialBoardFields_BoardGroups_Members_Name_Update = {
  __typename?: 'EditorialBoardFields_boardGroups_members_name_Update';
  permission: Scalars['Boolean']['output'];
};

export type EditorialBoardFields_BoardGroups_Members_ProfileImage = {
  __typename?: 'EditorialBoardFields_boardGroups_members_profileImage';
  create?: Maybe<EditorialBoardFields_BoardGroups_Members_ProfileImage_Create>;
  delete?: Maybe<EditorialBoardFields_BoardGroups_Members_ProfileImage_Delete>;
  read?: Maybe<EditorialBoardFields_BoardGroups_Members_ProfileImage_Read>;
  update?: Maybe<EditorialBoardFields_BoardGroups_Members_ProfileImage_Update>;
};

export type EditorialBoardFields_BoardGroups_Members_ProfileImage_Create = {
  __typename?: 'EditorialBoardFields_boardGroups_members_profileImage_Create';
  permission: Scalars['Boolean']['output'];
};

export type EditorialBoardFields_BoardGroups_Members_ProfileImage_Delete = {
  __typename?: 'EditorialBoardFields_boardGroups_members_profileImage_Delete';
  permission: Scalars['Boolean']['output'];
};

export type EditorialBoardFields_BoardGroups_Members_ProfileImage_Read = {
  __typename?: 'EditorialBoardFields_boardGroups_members_profileImage_Read';
  permission: Scalars['Boolean']['output'];
};

export type EditorialBoardFields_BoardGroups_Members_ProfileImage_Update = {
  __typename?: 'EditorialBoardFields_boardGroups_members_profileImage_Update';
  permission: Scalars['Boolean']['output'];
};

export type EditorialBoardFields_BoardGroups_Members_Subtitle = {
  __typename?: 'EditorialBoardFields_boardGroups_members_subtitle';
  create?: Maybe<EditorialBoardFields_BoardGroups_Members_Subtitle_Create>;
  delete?: Maybe<EditorialBoardFields_BoardGroups_Members_Subtitle_Delete>;
  read?: Maybe<EditorialBoardFields_BoardGroups_Members_Subtitle_Read>;
  update?: Maybe<EditorialBoardFields_BoardGroups_Members_Subtitle_Update>;
};

export type EditorialBoardFields_BoardGroups_Members_Subtitle_Create = {
  __typename?: 'EditorialBoardFields_boardGroups_members_subtitle_Create';
  permission: Scalars['Boolean']['output'];
};

export type EditorialBoardFields_BoardGroups_Members_Subtitle_Delete = {
  __typename?: 'EditorialBoardFields_boardGroups_members_subtitle_Delete';
  permission: Scalars['Boolean']['output'];
};

export type EditorialBoardFields_BoardGroups_Members_Subtitle_Read = {
  __typename?: 'EditorialBoardFields_boardGroups_members_subtitle_Read';
  permission: Scalars['Boolean']['output'];
};

export type EditorialBoardFields_BoardGroups_Members_Subtitle_Update = {
  __typename?: 'EditorialBoardFields_boardGroups_members_subtitle_Update';
  permission: Scalars['Boolean']['output'];
};

export type EditorialBoardFields_CreatedAt = {
  __typename?: 'EditorialBoardFields_createdAt';
  create?: Maybe<EditorialBoardFields_CreatedAt_Create>;
  delete?: Maybe<EditorialBoardFields_CreatedAt_Delete>;
  read?: Maybe<EditorialBoardFields_CreatedAt_Read>;
  update?: Maybe<EditorialBoardFields_CreatedAt_Update>;
};

export type EditorialBoardFields_CreatedAt_Create = {
  __typename?: 'EditorialBoardFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type EditorialBoardFields_CreatedAt_Delete = {
  __typename?: 'EditorialBoardFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type EditorialBoardFields_CreatedAt_Read = {
  __typename?: 'EditorialBoardFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type EditorialBoardFields_CreatedAt_Update = {
  __typename?: 'EditorialBoardFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type EditorialBoardFields_UpdatedAt = {
  __typename?: 'EditorialBoardFields_updatedAt';
  create?: Maybe<EditorialBoardFields_UpdatedAt_Create>;
  delete?: Maybe<EditorialBoardFields_UpdatedAt_Delete>;
  read?: Maybe<EditorialBoardFields_UpdatedAt_Read>;
  update?: Maybe<EditorialBoardFields_UpdatedAt_Update>;
};

export type EditorialBoardFields_UpdatedAt_Create = {
  __typename?: 'EditorialBoardFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type EditorialBoardFields_UpdatedAt_Delete = {
  __typename?: 'EditorialBoardFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type EditorialBoardFields_UpdatedAt_Read = {
  __typename?: 'EditorialBoardFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type EditorialBoardFields_UpdatedAt_Update = {
  __typename?: 'EditorialBoardFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type EditorialBoardReadAccess = {
  __typename?: 'EditorialBoardReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type EditorialBoardReadDocAccess = {
  __typename?: 'EditorialBoardReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type EditorialBoardUpdateAccess = {
  __typename?: 'EditorialBoardUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type EditorialBoardUpdateDocAccess = {
  __typename?: 'EditorialBoardUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type EditorialBoard_BoardGroups = {
  __typename?: 'EditorialBoard_BoardGroups';
  heading?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  members?: Maybe<Array<EditorialBoard_BoardGroups_Members>>;
};

export type EditorialBoard_BoardGroups_Members = {
  __typename?: 'EditorialBoard_BoardGroups_Members';
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  profileImage?: Maybe<Media>;
  subtitle?: Maybe<Scalars['String']['output']>;
};


export type EditorialBoard_BoardGroups_MembersProfileImageArgs = {
  where?: InputMaybe<EditorialBoard_BoardGroups_Members_ProfileImage_Where>;
};

export type EditorialBoard_BoardGroups_Members_ProfileImage_Alt_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type EditorialBoard_BoardGroups_Members_ProfileImage_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type EditorialBoard_BoardGroups_Members_ProfileImage_Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type EditorialBoard_BoardGroups_Members_ProfileImage_Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type EditorialBoard_BoardGroups_Members_ProfileImage_Height_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type EditorialBoard_BoardGroups_Members_ProfileImage_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type EditorialBoard_BoardGroups_Members_ProfileImage_MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type EditorialBoard_BoardGroups_Members_ProfileImage_Sizes__SixteenByNineMedium__Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type EditorialBoard_BoardGroups_Members_ProfileImage_Sizes__SixteenByNineMedium__Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type EditorialBoard_BoardGroups_Members_ProfileImage_Sizes__SixteenByNineMedium__Height_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type EditorialBoard_BoardGroups_Members_ProfileImage_Sizes__SixteenByNineMedium__MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type EditorialBoard_BoardGroups_Members_ProfileImage_Sizes__SixteenByNineMedium__Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type EditorialBoard_BoardGroups_Members_ProfileImage_Sizes__SixteenByNineMedium__Width_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type EditorialBoard_BoardGroups_Members_ProfileImage_Sizes__Thumbnail__Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type EditorialBoard_BoardGroups_Members_ProfileImage_Sizes__Thumbnail__Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type EditorialBoard_BoardGroups_Members_ProfileImage_Sizes__Thumbnail__Height_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type EditorialBoard_BoardGroups_Members_ProfileImage_Sizes__Thumbnail__MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type EditorialBoard_BoardGroups_Members_ProfileImage_Sizes__Thumbnail__Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type EditorialBoard_BoardGroups_Members_ProfileImage_Sizes__Thumbnail__Width_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type EditorialBoard_BoardGroups_Members_ProfileImage_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type EditorialBoard_BoardGroups_Members_ProfileImage_Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type EditorialBoard_BoardGroups_Members_ProfileImage_Where = {
  AND?: InputMaybe<Array<InputMaybe<EditorialBoard_BoardGroups_Members_ProfileImage_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<EditorialBoard_BoardGroups_Members_ProfileImage_Where_Or>>>;
  alt?: InputMaybe<EditorialBoard_BoardGroups_Members_ProfileImage_Alt_Operator>;
  createdAt?: InputMaybe<EditorialBoard_BoardGroups_Members_ProfileImage_CreatedAt_Operator>;
  filename?: InputMaybe<EditorialBoard_BoardGroups_Members_ProfileImage_Filename_Operator>;
  filesize?: InputMaybe<EditorialBoard_BoardGroups_Members_ProfileImage_Filesize_Operator>;
  height?: InputMaybe<EditorialBoard_BoardGroups_Members_ProfileImage_Height_Operator>;
  id?: InputMaybe<EditorialBoard_BoardGroups_Members_ProfileImage_Id_Operator>;
  mimeType?: InputMaybe<EditorialBoard_BoardGroups_Members_ProfileImage_MimeType_Operator>;
  sizes__sixteenByNineMedium__filename?: InputMaybe<EditorialBoard_BoardGroups_Members_ProfileImage_Sizes__SixteenByNineMedium__Filename_Operator>;
  sizes__sixteenByNineMedium__filesize?: InputMaybe<EditorialBoard_BoardGroups_Members_ProfileImage_Sizes__SixteenByNineMedium__Filesize_Operator>;
  sizes__sixteenByNineMedium__height?: InputMaybe<EditorialBoard_BoardGroups_Members_ProfileImage_Sizes__SixteenByNineMedium__Height_Operator>;
  sizes__sixteenByNineMedium__mimeType?: InputMaybe<EditorialBoard_BoardGroups_Members_ProfileImage_Sizes__SixteenByNineMedium__MimeType_Operator>;
  sizes__sixteenByNineMedium__url?: InputMaybe<EditorialBoard_BoardGroups_Members_ProfileImage_Sizes__SixteenByNineMedium__Url_Operator>;
  sizes__sixteenByNineMedium__width?: InputMaybe<EditorialBoard_BoardGroups_Members_ProfileImage_Sizes__SixteenByNineMedium__Width_Operator>;
  sizes__thumbnail__filename?: InputMaybe<EditorialBoard_BoardGroups_Members_ProfileImage_Sizes__Thumbnail__Filename_Operator>;
  sizes__thumbnail__filesize?: InputMaybe<EditorialBoard_BoardGroups_Members_ProfileImage_Sizes__Thumbnail__Filesize_Operator>;
  sizes__thumbnail__height?: InputMaybe<EditorialBoard_BoardGroups_Members_ProfileImage_Sizes__Thumbnail__Height_Operator>;
  sizes__thumbnail__mimeType?: InputMaybe<EditorialBoard_BoardGroups_Members_ProfileImage_Sizes__Thumbnail__MimeType_Operator>;
  sizes__thumbnail__url?: InputMaybe<EditorialBoard_BoardGroups_Members_ProfileImage_Sizes__Thumbnail__Url_Operator>;
  sizes__thumbnail__width?: InputMaybe<EditorialBoard_BoardGroups_Members_ProfileImage_Sizes__Thumbnail__Width_Operator>;
  updatedAt?: InputMaybe<EditorialBoard_BoardGroups_Members_ProfileImage_UpdatedAt_Operator>;
  url?: InputMaybe<EditorialBoard_BoardGroups_Members_ProfileImage_Url_Operator>;
  width?: InputMaybe<EditorialBoard_BoardGroups_Members_ProfileImage_Width_Operator>;
};

export type EditorialBoard_BoardGroups_Members_ProfileImage_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<EditorialBoard_BoardGroups_Members_ProfileImage_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<EditorialBoard_BoardGroups_Members_ProfileImage_Where_Or>>>;
  alt?: InputMaybe<EditorialBoard_BoardGroups_Members_ProfileImage_Alt_Operator>;
  createdAt?: InputMaybe<EditorialBoard_BoardGroups_Members_ProfileImage_CreatedAt_Operator>;
  filename?: InputMaybe<EditorialBoard_BoardGroups_Members_ProfileImage_Filename_Operator>;
  filesize?: InputMaybe<EditorialBoard_BoardGroups_Members_ProfileImage_Filesize_Operator>;
  height?: InputMaybe<EditorialBoard_BoardGroups_Members_ProfileImage_Height_Operator>;
  id?: InputMaybe<EditorialBoard_BoardGroups_Members_ProfileImage_Id_Operator>;
  mimeType?: InputMaybe<EditorialBoard_BoardGroups_Members_ProfileImage_MimeType_Operator>;
  sizes__sixteenByNineMedium__filename?: InputMaybe<EditorialBoard_BoardGroups_Members_ProfileImage_Sizes__SixteenByNineMedium__Filename_Operator>;
  sizes__sixteenByNineMedium__filesize?: InputMaybe<EditorialBoard_BoardGroups_Members_ProfileImage_Sizes__SixteenByNineMedium__Filesize_Operator>;
  sizes__sixteenByNineMedium__height?: InputMaybe<EditorialBoard_BoardGroups_Members_ProfileImage_Sizes__SixteenByNineMedium__Height_Operator>;
  sizes__sixteenByNineMedium__mimeType?: InputMaybe<EditorialBoard_BoardGroups_Members_ProfileImage_Sizes__SixteenByNineMedium__MimeType_Operator>;
  sizes__sixteenByNineMedium__url?: InputMaybe<EditorialBoard_BoardGroups_Members_ProfileImage_Sizes__SixteenByNineMedium__Url_Operator>;
  sizes__sixteenByNineMedium__width?: InputMaybe<EditorialBoard_BoardGroups_Members_ProfileImage_Sizes__SixteenByNineMedium__Width_Operator>;
  sizes__thumbnail__filename?: InputMaybe<EditorialBoard_BoardGroups_Members_ProfileImage_Sizes__Thumbnail__Filename_Operator>;
  sizes__thumbnail__filesize?: InputMaybe<EditorialBoard_BoardGroups_Members_ProfileImage_Sizes__Thumbnail__Filesize_Operator>;
  sizes__thumbnail__height?: InputMaybe<EditorialBoard_BoardGroups_Members_ProfileImage_Sizes__Thumbnail__Height_Operator>;
  sizes__thumbnail__mimeType?: InputMaybe<EditorialBoard_BoardGroups_Members_ProfileImage_Sizes__Thumbnail__MimeType_Operator>;
  sizes__thumbnail__url?: InputMaybe<EditorialBoard_BoardGroups_Members_ProfileImage_Sizes__Thumbnail__Url_Operator>;
  sizes__thumbnail__width?: InputMaybe<EditorialBoard_BoardGroups_Members_ProfileImage_Sizes__Thumbnail__Width_Operator>;
  updatedAt?: InputMaybe<EditorialBoard_BoardGroups_Members_ProfileImage_UpdatedAt_Operator>;
  url?: InputMaybe<EditorialBoard_BoardGroups_Members_ProfileImage_Url_Operator>;
  width?: InputMaybe<EditorialBoard_BoardGroups_Members_ProfileImage_Width_Operator>;
};

export type EditorialBoard_BoardGroups_Members_ProfileImage_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<EditorialBoard_BoardGroups_Members_ProfileImage_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<EditorialBoard_BoardGroups_Members_ProfileImage_Where_Or>>>;
  alt?: InputMaybe<EditorialBoard_BoardGroups_Members_ProfileImage_Alt_Operator>;
  createdAt?: InputMaybe<EditorialBoard_BoardGroups_Members_ProfileImage_CreatedAt_Operator>;
  filename?: InputMaybe<EditorialBoard_BoardGroups_Members_ProfileImage_Filename_Operator>;
  filesize?: InputMaybe<EditorialBoard_BoardGroups_Members_ProfileImage_Filesize_Operator>;
  height?: InputMaybe<EditorialBoard_BoardGroups_Members_ProfileImage_Height_Operator>;
  id?: InputMaybe<EditorialBoard_BoardGroups_Members_ProfileImage_Id_Operator>;
  mimeType?: InputMaybe<EditorialBoard_BoardGroups_Members_ProfileImage_MimeType_Operator>;
  sizes__sixteenByNineMedium__filename?: InputMaybe<EditorialBoard_BoardGroups_Members_ProfileImage_Sizes__SixteenByNineMedium__Filename_Operator>;
  sizes__sixteenByNineMedium__filesize?: InputMaybe<EditorialBoard_BoardGroups_Members_ProfileImage_Sizes__SixteenByNineMedium__Filesize_Operator>;
  sizes__sixteenByNineMedium__height?: InputMaybe<EditorialBoard_BoardGroups_Members_ProfileImage_Sizes__SixteenByNineMedium__Height_Operator>;
  sizes__sixteenByNineMedium__mimeType?: InputMaybe<EditorialBoard_BoardGroups_Members_ProfileImage_Sizes__SixteenByNineMedium__MimeType_Operator>;
  sizes__sixteenByNineMedium__url?: InputMaybe<EditorialBoard_BoardGroups_Members_ProfileImage_Sizes__SixteenByNineMedium__Url_Operator>;
  sizes__sixteenByNineMedium__width?: InputMaybe<EditorialBoard_BoardGroups_Members_ProfileImage_Sizes__SixteenByNineMedium__Width_Operator>;
  sizes__thumbnail__filename?: InputMaybe<EditorialBoard_BoardGroups_Members_ProfileImage_Sizes__Thumbnail__Filename_Operator>;
  sizes__thumbnail__filesize?: InputMaybe<EditorialBoard_BoardGroups_Members_ProfileImage_Sizes__Thumbnail__Filesize_Operator>;
  sizes__thumbnail__height?: InputMaybe<EditorialBoard_BoardGroups_Members_ProfileImage_Sizes__Thumbnail__Height_Operator>;
  sizes__thumbnail__mimeType?: InputMaybe<EditorialBoard_BoardGroups_Members_ProfileImage_Sizes__Thumbnail__MimeType_Operator>;
  sizes__thumbnail__url?: InputMaybe<EditorialBoard_BoardGroups_Members_ProfileImage_Sizes__Thumbnail__Url_Operator>;
  sizes__thumbnail__width?: InputMaybe<EditorialBoard_BoardGroups_Members_ProfileImage_Sizes__Thumbnail__Width_Operator>;
  updatedAt?: InputMaybe<EditorialBoard_BoardGroups_Members_ProfileImage_UpdatedAt_Operator>;
  url?: InputMaybe<EditorialBoard_BoardGroups_Members_ProfileImage_Url_Operator>;
  width?: InputMaybe<EditorialBoard_BoardGroups_Members_ProfileImage_Width_Operator>;
};

export type EditorialBoard_BoardGroups_Members_ProfileImage_Width_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Guideline = {
  __typename?: 'Guideline';
  content: Scalars['JSON']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  orderNumber?: Maybe<Scalars['Float']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type GuidelineContentArgs = {
  depth?: InputMaybe<Scalars['Int']['input']>;
};

export type Guideline_Content_Operator = {
  contains?: InputMaybe<Scalars['JSON']['input']>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  like?: InputMaybe<Scalars['JSON']['input']>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
};

export type Guideline_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Guideline_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Guideline_OrderNumber_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Guideline_Slug_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Guideline_Title_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Guideline_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Guideline_Where = {
  AND?: InputMaybe<Array<InputMaybe<Guideline_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Guideline_Where_Or>>>;
  content?: InputMaybe<Guideline_Content_Operator>;
  createdAt?: InputMaybe<Guideline_CreatedAt_Operator>;
  id?: InputMaybe<Guideline_Id_Operator>;
  orderNumber?: InputMaybe<Guideline_OrderNumber_Operator>;
  slug?: InputMaybe<Guideline_Slug_Operator>;
  title?: InputMaybe<Guideline_Title_Operator>;
  updatedAt?: InputMaybe<Guideline_UpdatedAt_Operator>;
};

export type Guideline_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<Guideline_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Guideline_Where_Or>>>;
  content?: InputMaybe<Guideline_Content_Operator>;
  createdAt?: InputMaybe<Guideline_CreatedAt_Operator>;
  id?: InputMaybe<Guideline_Id_Operator>;
  orderNumber?: InputMaybe<Guideline_OrderNumber_Operator>;
  slug?: InputMaybe<Guideline_Slug_Operator>;
  title?: InputMaybe<Guideline_Title_Operator>;
  updatedAt?: InputMaybe<Guideline_UpdatedAt_Operator>;
};

export type Guideline_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<Guideline_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Guideline_Where_Or>>>;
  content?: InputMaybe<Guideline_Content_Operator>;
  createdAt?: InputMaybe<Guideline_CreatedAt_Operator>;
  id?: InputMaybe<Guideline_Id_Operator>;
  orderNumber?: InputMaybe<Guideline_OrderNumber_Operator>;
  slug?: InputMaybe<Guideline_Slug_Operator>;
  title?: InputMaybe<Guideline_Title_Operator>;
  updatedAt?: InputMaybe<Guideline_UpdatedAt_Operator>;
};

export type Guidelines = {
  __typename?: 'Guidelines';
  docs?: Maybe<Array<Maybe<Guideline>>>;
  hasNextPage?: Maybe<Scalars['Boolean']['output']>;
  hasPrevPage?: Maybe<Scalars['Boolean']['output']>;
  limit?: Maybe<Scalars['Int']['output']>;
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page?: Maybe<Scalars['Int']['output']>;
  pagingCounter?: Maybe<Scalars['Int']['output']>;
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs?: Maybe<Scalars['Int']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type GuidelinesCreateAccess = {
  __typename?: 'GuidelinesCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type GuidelinesCreateDocAccess = {
  __typename?: 'GuidelinesCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type GuidelinesDeleteAccess = {
  __typename?: 'GuidelinesDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type GuidelinesDeleteDocAccess = {
  __typename?: 'GuidelinesDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type GuidelinesDocAccessFields = {
  __typename?: 'GuidelinesDocAccessFields';
  content?: Maybe<GuidelinesDocAccessFields_Content>;
  createdAt?: Maybe<GuidelinesDocAccessFields_CreatedAt>;
  orderNumber?: Maybe<GuidelinesDocAccessFields_OrderNumber>;
  slug?: Maybe<GuidelinesDocAccessFields_Slug>;
  title?: Maybe<GuidelinesDocAccessFields_Title>;
  updatedAt?: Maybe<GuidelinesDocAccessFields_UpdatedAt>;
};

export type GuidelinesDocAccessFields_Content = {
  __typename?: 'GuidelinesDocAccessFields_content';
  create?: Maybe<GuidelinesDocAccessFields_Content_Create>;
  delete?: Maybe<GuidelinesDocAccessFields_Content_Delete>;
  read?: Maybe<GuidelinesDocAccessFields_Content_Read>;
  update?: Maybe<GuidelinesDocAccessFields_Content_Update>;
};

export type GuidelinesDocAccessFields_Content_Create = {
  __typename?: 'GuidelinesDocAccessFields_content_Create';
  permission: Scalars['Boolean']['output'];
};

export type GuidelinesDocAccessFields_Content_Delete = {
  __typename?: 'GuidelinesDocAccessFields_content_Delete';
  permission: Scalars['Boolean']['output'];
};

export type GuidelinesDocAccessFields_Content_Read = {
  __typename?: 'GuidelinesDocAccessFields_content_Read';
  permission: Scalars['Boolean']['output'];
};

export type GuidelinesDocAccessFields_Content_Update = {
  __typename?: 'GuidelinesDocAccessFields_content_Update';
  permission: Scalars['Boolean']['output'];
};

export type GuidelinesDocAccessFields_CreatedAt = {
  __typename?: 'GuidelinesDocAccessFields_createdAt';
  create?: Maybe<GuidelinesDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<GuidelinesDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<GuidelinesDocAccessFields_CreatedAt_Read>;
  update?: Maybe<GuidelinesDocAccessFields_CreatedAt_Update>;
};

export type GuidelinesDocAccessFields_CreatedAt_Create = {
  __typename?: 'GuidelinesDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type GuidelinesDocAccessFields_CreatedAt_Delete = {
  __typename?: 'GuidelinesDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type GuidelinesDocAccessFields_CreatedAt_Read = {
  __typename?: 'GuidelinesDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type GuidelinesDocAccessFields_CreatedAt_Update = {
  __typename?: 'GuidelinesDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type GuidelinesDocAccessFields_OrderNumber = {
  __typename?: 'GuidelinesDocAccessFields_orderNumber';
  create?: Maybe<GuidelinesDocAccessFields_OrderNumber_Create>;
  delete?: Maybe<GuidelinesDocAccessFields_OrderNumber_Delete>;
  read?: Maybe<GuidelinesDocAccessFields_OrderNumber_Read>;
  update?: Maybe<GuidelinesDocAccessFields_OrderNumber_Update>;
};

export type GuidelinesDocAccessFields_OrderNumber_Create = {
  __typename?: 'GuidelinesDocAccessFields_orderNumber_Create';
  permission: Scalars['Boolean']['output'];
};

export type GuidelinesDocAccessFields_OrderNumber_Delete = {
  __typename?: 'GuidelinesDocAccessFields_orderNumber_Delete';
  permission: Scalars['Boolean']['output'];
};

export type GuidelinesDocAccessFields_OrderNumber_Read = {
  __typename?: 'GuidelinesDocAccessFields_orderNumber_Read';
  permission: Scalars['Boolean']['output'];
};

export type GuidelinesDocAccessFields_OrderNumber_Update = {
  __typename?: 'GuidelinesDocAccessFields_orderNumber_Update';
  permission: Scalars['Boolean']['output'];
};

export type GuidelinesDocAccessFields_Slug = {
  __typename?: 'GuidelinesDocAccessFields_slug';
  create?: Maybe<GuidelinesDocAccessFields_Slug_Create>;
  delete?: Maybe<GuidelinesDocAccessFields_Slug_Delete>;
  read?: Maybe<GuidelinesDocAccessFields_Slug_Read>;
  update?: Maybe<GuidelinesDocAccessFields_Slug_Update>;
};

export type GuidelinesDocAccessFields_Slug_Create = {
  __typename?: 'GuidelinesDocAccessFields_slug_Create';
  permission: Scalars['Boolean']['output'];
};

export type GuidelinesDocAccessFields_Slug_Delete = {
  __typename?: 'GuidelinesDocAccessFields_slug_Delete';
  permission: Scalars['Boolean']['output'];
};

export type GuidelinesDocAccessFields_Slug_Read = {
  __typename?: 'GuidelinesDocAccessFields_slug_Read';
  permission: Scalars['Boolean']['output'];
};

export type GuidelinesDocAccessFields_Slug_Update = {
  __typename?: 'GuidelinesDocAccessFields_slug_Update';
  permission: Scalars['Boolean']['output'];
};

export type GuidelinesDocAccessFields_Title = {
  __typename?: 'GuidelinesDocAccessFields_title';
  create?: Maybe<GuidelinesDocAccessFields_Title_Create>;
  delete?: Maybe<GuidelinesDocAccessFields_Title_Delete>;
  read?: Maybe<GuidelinesDocAccessFields_Title_Read>;
  update?: Maybe<GuidelinesDocAccessFields_Title_Update>;
};

export type GuidelinesDocAccessFields_Title_Create = {
  __typename?: 'GuidelinesDocAccessFields_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type GuidelinesDocAccessFields_Title_Delete = {
  __typename?: 'GuidelinesDocAccessFields_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type GuidelinesDocAccessFields_Title_Read = {
  __typename?: 'GuidelinesDocAccessFields_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type GuidelinesDocAccessFields_Title_Update = {
  __typename?: 'GuidelinesDocAccessFields_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type GuidelinesDocAccessFields_UpdatedAt = {
  __typename?: 'GuidelinesDocAccessFields_updatedAt';
  create?: Maybe<GuidelinesDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<GuidelinesDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<GuidelinesDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<GuidelinesDocAccessFields_UpdatedAt_Update>;
};

export type GuidelinesDocAccessFields_UpdatedAt_Create = {
  __typename?: 'GuidelinesDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type GuidelinesDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'GuidelinesDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type GuidelinesDocAccessFields_UpdatedAt_Read = {
  __typename?: 'GuidelinesDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type GuidelinesDocAccessFields_UpdatedAt_Update = {
  __typename?: 'GuidelinesDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type GuidelinesFields = {
  __typename?: 'GuidelinesFields';
  content?: Maybe<GuidelinesFields_Content>;
  createdAt?: Maybe<GuidelinesFields_CreatedAt>;
  orderNumber?: Maybe<GuidelinesFields_OrderNumber>;
  slug?: Maybe<GuidelinesFields_Slug>;
  title?: Maybe<GuidelinesFields_Title>;
  updatedAt?: Maybe<GuidelinesFields_UpdatedAt>;
};

export type GuidelinesFields_Content = {
  __typename?: 'GuidelinesFields_content';
  create?: Maybe<GuidelinesFields_Content_Create>;
  delete?: Maybe<GuidelinesFields_Content_Delete>;
  read?: Maybe<GuidelinesFields_Content_Read>;
  update?: Maybe<GuidelinesFields_Content_Update>;
};

export type GuidelinesFields_Content_Create = {
  __typename?: 'GuidelinesFields_content_Create';
  permission: Scalars['Boolean']['output'];
};

export type GuidelinesFields_Content_Delete = {
  __typename?: 'GuidelinesFields_content_Delete';
  permission: Scalars['Boolean']['output'];
};

export type GuidelinesFields_Content_Read = {
  __typename?: 'GuidelinesFields_content_Read';
  permission: Scalars['Boolean']['output'];
};

export type GuidelinesFields_Content_Update = {
  __typename?: 'GuidelinesFields_content_Update';
  permission: Scalars['Boolean']['output'];
};

export type GuidelinesFields_CreatedAt = {
  __typename?: 'GuidelinesFields_createdAt';
  create?: Maybe<GuidelinesFields_CreatedAt_Create>;
  delete?: Maybe<GuidelinesFields_CreatedAt_Delete>;
  read?: Maybe<GuidelinesFields_CreatedAt_Read>;
  update?: Maybe<GuidelinesFields_CreatedAt_Update>;
};

export type GuidelinesFields_CreatedAt_Create = {
  __typename?: 'GuidelinesFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type GuidelinesFields_CreatedAt_Delete = {
  __typename?: 'GuidelinesFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type GuidelinesFields_CreatedAt_Read = {
  __typename?: 'GuidelinesFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type GuidelinesFields_CreatedAt_Update = {
  __typename?: 'GuidelinesFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type GuidelinesFields_OrderNumber = {
  __typename?: 'GuidelinesFields_orderNumber';
  create?: Maybe<GuidelinesFields_OrderNumber_Create>;
  delete?: Maybe<GuidelinesFields_OrderNumber_Delete>;
  read?: Maybe<GuidelinesFields_OrderNumber_Read>;
  update?: Maybe<GuidelinesFields_OrderNumber_Update>;
};

export type GuidelinesFields_OrderNumber_Create = {
  __typename?: 'GuidelinesFields_orderNumber_Create';
  permission: Scalars['Boolean']['output'];
};

export type GuidelinesFields_OrderNumber_Delete = {
  __typename?: 'GuidelinesFields_orderNumber_Delete';
  permission: Scalars['Boolean']['output'];
};

export type GuidelinesFields_OrderNumber_Read = {
  __typename?: 'GuidelinesFields_orderNumber_Read';
  permission: Scalars['Boolean']['output'];
};

export type GuidelinesFields_OrderNumber_Update = {
  __typename?: 'GuidelinesFields_orderNumber_Update';
  permission: Scalars['Boolean']['output'];
};

export type GuidelinesFields_Slug = {
  __typename?: 'GuidelinesFields_slug';
  create?: Maybe<GuidelinesFields_Slug_Create>;
  delete?: Maybe<GuidelinesFields_Slug_Delete>;
  read?: Maybe<GuidelinesFields_Slug_Read>;
  update?: Maybe<GuidelinesFields_Slug_Update>;
};

export type GuidelinesFields_Slug_Create = {
  __typename?: 'GuidelinesFields_slug_Create';
  permission: Scalars['Boolean']['output'];
};

export type GuidelinesFields_Slug_Delete = {
  __typename?: 'GuidelinesFields_slug_Delete';
  permission: Scalars['Boolean']['output'];
};

export type GuidelinesFields_Slug_Read = {
  __typename?: 'GuidelinesFields_slug_Read';
  permission: Scalars['Boolean']['output'];
};

export type GuidelinesFields_Slug_Update = {
  __typename?: 'GuidelinesFields_slug_Update';
  permission: Scalars['Boolean']['output'];
};

export type GuidelinesFields_Title = {
  __typename?: 'GuidelinesFields_title';
  create?: Maybe<GuidelinesFields_Title_Create>;
  delete?: Maybe<GuidelinesFields_Title_Delete>;
  read?: Maybe<GuidelinesFields_Title_Read>;
  update?: Maybe<GuidelinesFields_Title_Update>;
};

export type GuidelinesFields_Title_Create = {
  __typename?: 'GuidelinesFields_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type GuidelinesFields_Title_Delete = {
  __typename?: 'GuidelinesFields_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type GuidelinesFields_Title_Read = {
  __typename?: 'GuidelinesFields_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type GuidelinesFields_Title_Update = {
  __typename?: 'GuidelinesFields_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type GuidelinesFields_UpdatedAt = {
  __typename?: 'GuidelinesFields_updatedAt';
  create?: Maybe<GuidelinesFields_UpdatedAt_Create>;
  delete?: Maybe<GuidelinesFields_UpdatedAt_Delete>;
  read?: Maybe<GuidelinesFields_UpdatedAt_Read>;
  update?: Maybe<GuidelinesFields_UpdatedAt_Update>;
};

export type GuidelinesFields_UpdatedAt_Create = {
  __typename?: 'GuidelinesFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type GuidelinesFields_UpdatedAt_Delete = {
  __typename?: 'GuidelinesFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type GuidelinesFields_UpdatedAt_Read = {
  __typename?: 'GuidelinesFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type GuidelinesFields_UpdatedAt_Update = {
  __typename?: 'GuidelinesFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type GuidelinesReadAccess = {
  __typename?: 'GuidelinesReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type GuidelinesReadDocAccess = {
  __typename?: 'GuidelinesReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type GuidelinesUpdateAccess = {
  __typename?: 'GuidelinesUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type GuidelinesUpdateDocAccess = {
  __typename?: 'GuidelinesUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Media = {
  __typename?: 'Media';
  alt?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  filename?: Maybe<Scalars['String']['output']>;
  filesize?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  mimeType?: Maybe<Scalars['String']['output']>;
  sizes?: Maybe<Media_Sizes>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

export type MediaCreateAccess = {
  __typename?: 'MediaCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type MediaCreateDocAccess = {
  __typename?: 'MediaCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type MediaDeleteAccess = {
  __typename?: 'MediaDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type MediaDeleteDocAccess = {
  __typename?: 'MediaDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type MediaDocAccessFields = {
  __typename?: 'MediaDocAccessFields';
  alt?: Maybe<MediaDocAccessFields_Alt>;
  createdAt?: Maybe<MediaDocAccessFields_CreatedAt>;
  filename?: Maybe<MediaDocAccessFields_Filename>;
  filesize?: Maybe<MediaDocAccessFields_Filesize>;
  height?: Maybe<MediaDocAccessFields_Height>;
  mimeType?: Maybe<MediaDocAccessFields_MimeType>;
  sizes?: Maybe<MediaDocAccessFields_Sizes>;
  updatedAt?: Maybe<MediaDocAccessFields_UpdatedAt>;
  url?: Maybe<MediaDocAccessFields_Url>;
  width?: Maybe<MediaDocAccessFields_Width>;
};

export type MediaDocAccessFields_Alt = {
  __typename?: 'MediaDocAccessFields_alt';
  create?: Maybe<MediaDocAccessFields_Alt_Create>;
  delete?: Maybe<MediaDocAccessFields_Alt_Delete>;
  read?: Maybe<MediaDocAccessFields_Alt_Read>;
  update?: Maybe<MediaDocAccessFields_Alt_Update>;
};

export type MediaDocAccessFields_Alt_Create = {
  __typename?: 'MediaDocAccessFields_alt_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Alt_Delete = {
  __typename?: 'MediaDocAccessFields_alt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Alt_Read = {
  __typename?: 'MediaDocAccessFields_alt_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Alt_Update = {
  __typename?: 'MediaDocAccessFields_alt_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_CreatedAt = {
  __typename?: 'MediaDocAccessFields_createdAt';
  create?: Maybe<MediaDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<MediaDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<MediaDocAccessFields_CreatedAt_Read>;
  update?: Maybe<MediaDocAccessFields_CreatedAt_Update>;
};

export type MediaDocAccessFields_CreatedAt_Create = {
  __typename?: 'MediaDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_CreatedAt_Delete = {
  __typename?: 'MediaDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_CreatedAt_Read = {
  __typename?: 'MediaDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_CreatedAt_Update = {
  __typename?: 'MediaDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Filename = {
  __typename?: 'MediaDocAccessFields_filename';
  create?: Maybe<MediaDocAccessFields_Filename_Create>;
  delete?: Maybe<MediaDocAccessFields_Filename_Delete>;
  read?: Maybe<MediaDocAccessFields_Filename_Read>;
  update?: Maybe<MediaDocAccessFields_Filename_Update>;
};

export type MediaDocAccessFields_Filename_Create = {
  __typename?: 'MediaDocAccessFields_filename_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Filename_Delete = {
  __typename?: 'MediaDocAccessFields_filename_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Filename_Read = {
  __typename?: 'MediaDocAccessFields_filename_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Filename_Update = {
  __typename?: 'MediaDocAccessFields_filename_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Filesize = {
  __typename?: 'MediaDocAccessFields_filesize';
  create?: Maybe<MediaDocAccessFields_Filesize_Create>;
  delete?: Maybe<MediaDocAccessFields_Filesize_Delete>;
  read?: Maybe<MediaDocAccessFields_Filesize_Read>;
  update?: Maybe<MediaDocAccessFields_Filesize_Update>;
};

export type MediaDocAccessFields_Filesize_Create = {
  __typename?: 'MediaDocAccessFields_filesize_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Filesize_Delete = {
  __typename?: 'MediaDocAccessFields_filesize_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Filesize_Read = {
  __typename?: 'MediaDocAccessFields_filesize_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Filesize_Update = {
  __typename?: 'MediaDocAccessFields_filesize_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Height = {
  __typename?: 'MediaDocAccessFields_height';
  create?: Maybe<MediaDocAccessFields_Height_Create>;
  delete?: Maybe<MediaDocAccessFields_Height_Delete>;
  read?: Maybe<MediaDocAccessFields_Height_Read>;
  update?: Maybe<MediaDocAccessFields_Height_Update>;
};

export type MediaDocAccessFields_Height_Create = {
  __typename?: 'MediaDocAccessFields_height_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Height_Delete = {
  __typename?: 'MediaDocAccessFields_height_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Height_Read = {
  __typename?: 'MediaDocAccessFields_height_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Height_Update = {
  __typename?: 'MediaDocAccessFields_height_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_MimeType = {
  __typename?: 'MediaDocAccessFields_mimeType';
  create?: Maybe<MediaDocAccessFields_MimeType_Create>;
  delete?: Maybe<MediaDocAccessFields_MimeType_Delete>;
  read?: Maybe<MediaDocAccessFields_MimeType_Read>;
  update?: Maybe<MediaDocAccessFields_MimeType_Update>;
};

export type MediaDocAccessFields_MimeType_Create = {
  __typename?: 'MediaDocAccessFields_mimeType_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_MimeType_Delete = {
  __typename?: 'MediaDocAccessFields_mimeType_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_MimeType_Read = {
  __typename?: 'MediaDocAccessFields_mimeType_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_MimeType_Update = {
  __typename?: 'MediaDocAccessFields_mimeType_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes = {
  __typename?: 'MediaDocAccessFields_sizes';
  create?: Maybe<MediaDocAccessFields_Sizes_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Delete>;
  fields?: Maybe<MediaDocAccessFields_Sizes_Fields>;
  read?: Maybe<MediaDocAccessFields_Sizes_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Update>;
};

export type MediaDocAccessFields_Sizes_Create = {
  __typename?: 'MediaDocAccessFields_sizes_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Fields = {
  __typename?: 'MediaDocAccessFields_sizes_Fields';
  sixteenByNineMedium?: Maybe<MediaDocAccessFields_Sizes_SixteenByNineMedium>;
  thumbnail?: Maybe<MediaDocAccessFields_Sizes_Thumbnail>;
};

export type MediaDocAccessFields_Sizes_Read = {
  __typename?: 'MediaDocAccessFields_sizes_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Update = {
  __typename?: 'MediaDocAccessFields_sizes_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_SixteenByNineMedium = {
  __typename?: 'MediaDocAccessFields_sizes_sixteenByNineMedium';
  create?: Maybe<MediaDocAccessFields_Sizes_SixteenByNineMedium_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_SixteenByNineMedium_Delete>;
  fields?: Maybe<MediaDocAccessFields_Sizes_SixteenByNineMedium_Fields>;
  read?: Maybe<MediaDocAccessFields_Sizes_SixteenByNineMedium_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_SixteenByNineMedium_Update>;
};

export type MediaDocAccessFields_Sizes_SixteenByNineMedium_Create = {
  __typename?: 'MediaDocAccessFields_sizes_sixteenByNineMedium_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_SixteenByNineMedium_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_sixteenByNineMedium_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_SixteenByNineMedium_Fields = {
  __typename?: 'MediaDocAccessFields_sizes_sixteenByNineMedium_Fields';
  filename?: Maybe<MediaDocAccessFields_Sizes_SixteenByNineMedium_Filename>;
  filesize?: Maybe<MediaDocAccessFields_Sizes_SixteenByNineMedium_Filesize>;
  height?: Maybe<MediaDocAccessFields_Sizes_SixteenByNineMedium_Height>;
  mimeType?: Maybe<MediaDocAccessFields_Sizes_SixteenByNineMedium_MimeType>;
  url?: Maybe<MediaDocAccessFields_Sizes_SixteenByNineMedium_Url>;
  width?: Maybe<MediaDocAccessFields_Sizes_SixteenByNineMedium_Width>;
};

export type MediaDocAccessFields_Sizes_SixteenByNineMedium_Read = {
  __typename?: 'MediaDocAccessFields_sizes_sixteenByNineMedium_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_SixteenByNineMedium_Update = {
  __typename?: 'MediaDocAccessFields_sizes_sixteenByNineMedium_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_SixteenByNineMedium_Filename = {
  __typename?: 'MediaDocAccessFields_sizes_sixteenByNineMedium_filename';
  create?: Maybe<MediaDocAccessFields_Sizes_SixteenByNineMedium_Filename_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_SixteenByNineMedium_Filename_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_SixteenByNineMedium_Filename_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_SixteenByNineMedium_Filename_Update>;
};

export type MediaDocAccessFields_Sizes_SixteenByNineMedium_Filename_Create = {
  __typename?: 'MediaDocAccessFields_sizes_sixteenByNineMedium_filename_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_SixteenByNineMedium_Filename_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_sixteenByNineMedium_filename_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_SixteenByNineMedium_Filename_Read = {
  __typename?: 'MediaDocAccessFields_sizes_sixteenByNineMedium_filename_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_SixteenByNineMedium_Filename_Update = {
  __typename?: 'MediaDocAccessFields_sizes_sixteenByNineMedium_filename_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_SixteenByNineMedium_Filesize = {
  __typename?: 'MediaDocAccessFields_sizes_sixteenByNineMedium_filesize';
  create?: Maybe<MediaDocAccessFields_Sizes_SixteenByNineMedium_Filesize_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_SixteenByNineMedium_Filesize_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_SixteenByNineMedium_Filesize_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_SixteenByNineMedium_Filesize_Update>;
};

export type MediaDocAccessFields_Sizes_SixteenByNineMedium_Filesize_Create = {
  __typename?: 'MediaDocAccessFields_sizes_sixteenByNineMedium_filesize_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_SixteenByNineMedium_Filesize_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_sixteenByNineMedium_filesize_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_SixteenByNineMedium_Filesize_Read = {
  __typename?: 'MediaDocAccessFields_sizes_sixteenByNineMedium_filesize_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_SixteenByNineMedium_Filesize_Update = {
  __typename?: 'MediaDocAccessFields_sizes_sixteenByNineMedium_filesize_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_SixteenByNineMedium_Height = {
  __typename?: 'MediaDocAccessFields_sizes_sixteenByNineMedium_height';
  create?: Maybe<MediaDocAccessFields_Sizes_SixteenByNineMedium_Height_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_SixteenByNineMedium_Height_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_SixteenByNineMedium_Height_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_SixteenByNineMedium_Height_Update>;
};

export type MediaDocAccessFields_Sizes_SixteenByNineMedium_Height_Create = {
  __typename?: 'MediaDocAccessFields_sizes_sixteenByNineMedium_height_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_SixteenByNineMedium_Height_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_sixteenByNineMedium_height_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_SixteenByNineMedium_Height_Read = {
  __typename?: 'MediaDocAccessFields_sizes_sixteenByNineMedium_height_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_SixteenByNineMedium_Height_Update = {
  __typename?: 'MediaDocAccessFields_sizes_sixteenByNineMedium_height_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_SixteenByNineMedium_MimeType = {
  __typename?: 'MediaDocAccessFields_sizes_sixteenByNineMedium_mimeType';
  create?: Maybe<MediaDocAccessFields_Sizes_SixteenByNineMedium_MimeType_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_SixteenByNineMedium_MimeType_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_SixteenByNineMedium_MimeType_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_SixteenByNineMedium_MimeType_Update>;
};

export type MediaDocAccessFields_Sizes_SixteenByNineMedium_MimeType_Create = {
  __typename?: 'MediaDocAccessFields_sizes_sixteenByNineMedium_mimeType_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_SixteenByNineMedium_MimeType_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_sixteenByNineMedium_mimeType_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_SixteenByNineMedium_MimeType_Read = {
  __typename?: 'MediaDocAccessFields_sizes_sixteenByNineMedium_mimeType_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_SixteenByNineMedium_MimeType_Update = {
  __typename?: 'MediaDocAccessFields_sizes_sixteenByNineMedium_mimeType_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_SixteenByNineMedium_Url = {
  __typename?: 'MediaDocAccessFields_sizes_sixteenByNineMedium_url';
  create?: Maybe<MediaDocAccessFields_Sizes_SixteenByNineMedium_Url_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_SixteenByNineMedium_Url_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_SixteenByNineMedium_Url_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_SixteenByNineMedium_Url_Update>;
};

export type MediaDocAccessFields_Sizes_SixteenByNineMedium_Url_Create = {
  __typename?: 'MediaDocAccessFields_sizes_sixteenByNineMedium_url_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_SixteenByNineMedium_Url_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_sixteenByNineMedium_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_SixteenByNineMedium_Url_Read = {
  __typename?: 'MediaDocAccessFields_sizes_sixteenByNineMedium_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_SixteenByNineMedium_Url_Update = {
  __typename?: 'MediaDocAccessFields_sizes_sixteenByNineMedium_url_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_SixteenByNineMedium_Width = {
  __typename?: 'MediaDocAccessFields_sizes_sixteenByNineMedium_width';
  create?: Maybe<MediaDocAccessFields_Sizes_SixteenByNineMedium_Width_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_SixteenByNineMedium_Width_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_SixteenByNineMedium_Width_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_SixteenByNineMedium_Width_Update>;
};

export type MediaDocAccessFields_Sizes_SixteenByNineMedium_Width_Create = {
  __typename?: 'MediaDocAccessFields_sizes_sixteenByNineMedium_width_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_SixteenByNineMedium_Width_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_sixteenByNineMedium_width_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_SixteenByNineMedium_Width_Read = {
  __typename?: 'MediaDocAccessFields_sizes_sixteenByNineMedium_width_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_SixteenByNineMedium_Width_Update = {
  __typename?: 'MediaDocAccessFields_sizes_sixteenByNineMedium_width_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail';
  create?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Delete>;
  fields?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Fields>;
  read?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Update>;
};

export type MediaDocAccessFields_Sizes_Thumbnail_Create = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Fields = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_Fields';
  filename?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Filename>;
  filesize?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Filesize>;
  height?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Height>;
  mimeType?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_MimeType>;
  url?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Url>;
  width?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Width>;
};

export type MediaDocAccessFields_Sizes_Thumbnail_Read = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Update = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Filename = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_filename';
  create?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Filename_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Filename_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Filename_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Filename_Update>;
};

export type MediaDocAccessFields_Sizes_Thumbnail_Filename_Create = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_filename_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Filename_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_filename_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Filename_Read = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_filename_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Filename_Update = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_filename_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Filesize = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_filesize';
  create?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Filesize_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Filesize_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Filesize_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Filesize_Update>;
};

export type MediaDocAccessFields_Sizes_Thumbnail_Filesize_Create = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_filesize_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Filesize_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_filesize_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Filesize_Read = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_filesize_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Filesize_Update = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_filesize_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Height = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_height';
  create?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Height_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Height_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Height_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Height_Update>;
};

export type MediaDocAccessFields_Sizes_Thumbnail_Height_Create = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_height_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Height_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_height_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Height_Read = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_height_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Height_Update = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_height_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_MimeType = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_mimeType';
  create?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_MimeType_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_MimeType_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_MimeType_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_MimeType_Update>;
};

export type MediaDocAccessFields_Sizes_Thumbnail_MimeType_Create = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_mimeType_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_MimeType_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_mimeType_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_MimeType_Read = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_mimeType_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_MimeType_Update = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_mimeType_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Url = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_url';
  create?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Url_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Url_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Url_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Url_Update>;
};

export type MediaDocAccessFields_Sizes_Thumbnail_Url_Create = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_url_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Url_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Url_Read = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Url_Update = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_url_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Width = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_width';
  create?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Width_Create>;
  delete?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Width_Delete>;
  read?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Width_Read>;
  update?: Maybe<MediaDocAccessFields_Sizes_Thumbnail_Width_Update>;
};

export type MediaDocAccessFields_Sizes_Thumbnail_Width_Create = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_width_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Width_Delete = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_width_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Width_Read = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_width_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Sizes_Thumbnail_Width_Update = {
  __typename?: 'MediaDocAccessFields_sizes_thumbnail_width_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_UpdatedAt = {
  __typename?: 'MediaDocAccessFields_updatedAt';
  create?: Maybe<MediaDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<MediaDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<MediaDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<MediaDocAccessFields_UpdatedAt_Update>;
};

export type MediaDocAccessFields_UpdatedAt_Create = {
  __typename?: 'MediaDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'MediaDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_UpdatedAt_Read = {
  __typename?: 'MediaDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_UpdatedAt_Update = {
  __typename?: 'MediaDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Url = {
  __typename?: 'MediaDocAccessFields_url';
  create?: Maybe<MediaDocAccessFields_Url_Create>;
  delete?: Maybe<MediaDocAccessFields_Url_Delete>;
  read?: Maybe<MediaDocAccessFields_Url_Read>;
  update?: Maybe<MediaDocAccessFields_Url_Update>;
};

export type MediaDocAccessFields_Url_Create = {
  __typename?: 'MediaDocAccessFields_url_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Url_Delete = {
  __typename?: 'MediaDocAccessFields_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Url_Read = {
  __typename?: 'MediaDocAccessFields_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Url_Update = {
  __typename?: 'MediaDocAccessFields_url_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Width = {
  __typename?: 'MediaDocAccessFields_width';
  create?: Maybe<MediaDocAccessFields_Width_Create>;
  delete?: Maybe<MediaDocAccessFields_Width_Delete>;
  read?: Maybe<MediaDocAccessFields_Width_Read>;
  update?: Maybe<MediaDocAccessFields_Width_Update>;
};

export type MediaDocAccessFields_Width_Create = {
  __typename?: 'MediaDocAccessFields_width_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Width_Delete = {
  __typename?: 'MediaDocAccessFields_width_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Width_Read = {
  __typename?: 'MediaDocAccessFields_width_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Width_Update = {
  __typename?: 'MediaDocAccessFields_width_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields = {
  __typename?: 'MediaFields';
  alt?: Maybe<MediaFields_Alt>;
  createdAt?: Maybe<MediaFields_CreatedAt>;
  filename?: Maybe<MediaFields_Filename>;
  filesize?: Maybe<MediaFields_Filesize>;
  height?: Maybe<MediaFields_Height>;
  mimeType?: Maybe<MediaFields_MimeType>;
  sizes?: Maybe<MediaFields_Sizes>;
  updatedAt?: Maybe<MediaFields_UpdatedAt>;
  url?: Maybe<MediaFields_Url>;
  width?: Maybe<MediaFields_Width>;
};

export type MediaFields_Alt = {
  __typename?: 'MediaFields_alt';
  create?: Maybe<MediaFields_Alt_Create>;
  delete?: Maybe<MediaFields_Alt_Delete>;
  read?: Maybe<MediaFields_Alt_Read>;
  update?: Maybe<MediaFields_Alt_Update>;
};

export type MediaFields_Alt_Create = {
  __typename?: 'MediaFields_alt_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Alt_Delete = {
  __typename?: 'MediaFields_alt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Alt_Read = {
  __typename?: 'MediaFields_alt_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Alt_Update = {
  __typename?: 'MediaFields_alt_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_CreatedAt = {
  __typename?: 'MediaFields_createdAt';
  create?: Maybe<MediaFields_CreatedAt_Create>;
  delete?: Maybe<MediaFields_CreatedAt_Delete>;
  read?: Maybe<MediaFields_CreatedAt_Read>;
  update?: Maybe<MediaFields_CreatedAt_Update>;
};

export type MediaFields_CreatedAt_Create = {
  __typename?: 'MediaFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_CreatedAt_Delete = {
  __typename?: 'MediaFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_CreatedAt_Read = {
  __typename?: 'MediaFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_CreatedAt_Update = {
  __typename?: 'MediaFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Filename = {
  __typename?: 'MediaFields_filename';
  create?: Maybe<MediaFields_Filename_Create>;
  delete?: Maybe<MediaFields_Filename_Delete>;
  read?: Maybe<MediaFields_Filename_Read>;
  update?: Maybe<MediaFields_Filename_Update>;
};

export type MediaFields_Filename_Create = {
  __typename?: 'MediaFields_filename_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Filename_Delete = {
  __typename?: 'MediaFields_filename_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Filename_Read = {
  __typename?: 'MediaFields_filename_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Filename_Update = {
  __typename?: 'MediaFields_filename_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Filesize = {
  __typename?: 'MediaFields_filesize';
  create?: Maybe<MediaFields_Filesize_Create>;
  delete?: Maybe<MediaFields_Filesize_Delete>;
  read?: Maybe<MediaFields_Filesize_Read>;
  update?: Maybe<MediaFields_Filesize_Update>;
};

export type MediaFields_Filesize_Create = {
  __typename?: 'MediaFields_filesize_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Filesize_Delete = {
  __typename?: 'MediaFields_filesize_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Filesize_Read = {
  __typename?: 'MediaFields_filesize_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Filesize_Update = {
  __typename?: 'MediaFields_filesize_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Height = {
  __typename?: 'MediaFields_height';
  create?: Maybe<MediaFields_Height_Create>;
  delete?: Maybe<MediaFields_Height_Delete>;
  read?: Maybe<MediaFields_Height_Read>;
  update?: Maybe<MediaFields_Height_Update>;
};

export type MediaFields_Height_Create = {
  __typename?: 'MediaFields_height_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Height_Delete = {
  __typename?: 'MediaFields_height_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Height_Read = {
  __typename?: 'MediaFields_height_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Height_Update = {
  __typename?: 'MediaFields_height_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_MimeType = {
  __typename?: 'MediaFields_mimeType';
  create?: Maybe<MediaFields_MimeType_Create>;
  delete?: Maybe<MediaFields_MimeType_Delete>;
  read?: Maybe<MediaFields_MimeType_Read>;
  update?: Maybe<MediaFields_MimeType_Update>;
};

export type MediaFields_MimeType_Create = {
  __typename?: 'MediaFields_mimeType_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_MimeType_Delete = {
  __typename?: 'MediaFields_mimeType_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_MimeType_Read = {
  __typename?: 'MediaFields_mimeType_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_MimeType_Update = {
  __typename?: 'MediaFields_mimeType_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes = {
  __typename?: 'MediaFields_sizes';
  create?: Maybe<MediaFields_Sizes_Create>;
  delete?: Maybe<MediaFields_Sizes_Delete>;
  fields?: Maybe<MediaFields_Sizes_Fields>;
  read?: Maybe<MediaFields_Sizes_Read>;
  update?: Maybe<MediaFields_Sizes_Update>;
};

export type MediaFields_Sizes_Create = {
  __typename?: 'MediaFields_sizes_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Delete = {
  __typename?: 'MediaFields_sizes_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Fields = {
  __typename?: 'MediaFields_sizes_Fields';
  sixteenByNineMedium?: Maybe<MediaFields_Sizes_SixteenByNineMedium>;
  thumbnail?: Maybe<MediaFields_Sizes_Thumbnail>;
};

export type MediaFields_Sizes_Read = {
  __typename?: 'MediaFields_sizes_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Update = {
  __typename?: 'MediaFields_sizes_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_SixteenByNineMedium = {
  __typename?: 'MediaFields_sizes_sixteenByNineMedium';
  create?: Maybe<MediaFields_Sizes_SixteenByNineMedium_Create>;
  delete?: Maybe<MediaFields_Sizes_SixteenByNineMedium_Delete>;
  fields?: Maybe<MediaFields_Sizes_SixteenByNineMedium_Fields>;
  read?: Maybe<MediaFields_Sizes_SixteenByNineMedium_Read>;
  update?: Maybe<MediaFields_Sizes_SixteenByNineMedium_Update>;
};

export type MediaFields_Sizes_SixteenByNineMedium_Create = {
  __typename?: 'MediaFields_sizes_sixteenByNineMedium_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_SixteenByNineMedium_Delete = {
  __typename?: 'MediaFields_sizes_sixteenByNineMedium_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_SixteenByNineMedium_Fields = {
  __typename?: 'MediaFields_sizes_sixteenByNineMedium_Fields';
  filename?: Maybe<MediaFields_Sizes_SixteenByNineMedium_Filename>;
  filesize?: Maybe<MediaFields_Sizes_SixteenByNineMedium_Filesize>;
  height?: Maybe<MediaFields_Sizes_SixteenByNineMedium_Height>;
  mimeType?: Maybe<MediaFields_Sizes_SixteenByNineMedium_MimeType>;
  url?: Maybe<MediaFields_Sizes_SixteenByNineMedium_Url>;
  width?: Maybe<MediaFields_Sizes_SixteenByNineMedium_Width>;
};

export type MediaFields_Sizes_SixteenByNineMedium_Read = {
  __typename?: 'MediaFields_sizes_sixteenByNineMedium_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_SixteenByNineMedium_Update = {
  __typename?: 'MediaFields_sizes_sixteenByNineMedium_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_SixteenByNineMedium_Filename = {
  __typename?: 'MediaFields_sizes_sixteenByNineMedium_filename';
  create?: Maybe<MediaFields_Sizes_SixteenByNineMedium_Filename_Create>;
  delete?: Maybe<MediaFields_Sizes_SixteenByNineMedium_Filename_Delete>;
  read?: Maybe<MediaFields_Sizes_SixteenByNineMedium_Filename_Read>;
  update?: Maybe<MediaFields_Sizes_SixteenByNineMedium_Filename_Update>;
};

export type MediaFields_Sizes_SixteenByNineMedium_Filename_Create = {
  __typename?: 'MediaFields_sizes_sixteenByNineMedium_filename_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_SixteenByNineMedium_Filename_Delete = {
  __typename?: 'MediaFields_sizes_sixteenByNineMedium_filename_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_SixteenByNineMedium_Filename_Read = {
  __typename?: 'MediaFields_sizes_sixteenByNineMedium_filename_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_SixteenByNineMedium_Filename_Update = {
  __typename?: 'MediaFields_sizes_sixteenByNineMedium_filename_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_SixteenByNineMedium_Filesize = {
  __typename?: 'MediaFields_sizes_sixteenByNineMedium_filesize';
  create?: Maybe<MediaFields_Sizes_SixteenByNineMedium_Filesize_Create>;
  delete?: Maybe<MediaFields_Sizes_SixteenByNineMedium_Filesize_Delete>;
  read?: Maybe<MediaFields_Sizes_SixteenByNineMedium_Filesize_Read>;
  update?: Maybe<MediaFields_Sizes_SixteenByNineMedium_Filesize_Update>;
};

export type MediaFields_Sizes_SixteenByNineMedium_Filesize_Create = {
  __typename?: 'MediaFields_sizes_sixteenByNineMedium_filesize_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_SixteenByNineMedium_Filesize_Delete = {
  __typename?: 'MediaFields_sizes_sixteenByNineMedium_filesize_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_SixteenByNineMedium_Filesize_Read = {
  __typename?: 'MediaFields_sizes_sixteenByNineMedium_filesize_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_SixteenByNineMedium_Filesize_Update = {
  __typename?: 'MediaFields_sizes_sixteenByNineMedium_filesize_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_SixteenByNineMedium_Height = {
  __typename?: 'MediaFields_sizes_sixteenByNineMedium_height';
  create?: Maybe<MediaFields_Sizes_SixteenByNineMedium_Height_Create>;
  delete?: Maybe<MediaFields_Sizes_SixteenByNineMedium_Height_Delete>;
  read?: Maybe<MediaFields_Sizes_SixteenByNineMedium_Height_Read>;
  update?: Maybe<MediaFields_Sizes_SixteenByNineMedium_Height_Update>;
};

export type MediaFields_Sizes_SixteenByNineMedium_Height_Create = {
  __typename?: 'MediaFields_sizes_sixteenByNineMedium_height_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_SixteenByNineMedium_Height_Delete = {
  __typename?: 'MediaFields_sizes_sixteenByNineMedium_height_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_SixteenByNineMedium_Height_Read = {
  __typename?: 'MediaFields_sizes_sixteenByNineMedium_height_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_SixteenByNineMedium_Height_Update = {
  __typename?: 'MediaFields_sizes_sixteenByNineMedium_height_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_SixteenByNineMedium_MimeType = {
  __typename?: 'MediaFields_sizes_sixteenByNineMedium_mimeType';
  create?: Maybe<MediaFields_Sizes_SixteenByNineMedium_MimeType_Create>;
  delete?: Maybe<MediaFields_Sizes_SixteenByNineMedium_MimeType_Delete>;
  read?: Maybe<MediaFields_Sizes_SixteenByNineMedium_MimeType_Read>;
  update?: Maybe<MediaFields_Sizes_SixteenByNineMedium_MimeType_Update>;
};

export type MediaFields_Sizes_SixteenByNineMedium_MimeType_Create = {
  __typename?: 'MediaFields_sizes_sixteenByNineMedium_mimeType_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_SixteenByNineMedium_MimeType_Delete = {
  __typename?: 'MediaFields_sizes_sixteenByNineMedium_mimeType_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_SixteenByNineMedium_MimeType_Read = {
  __typename?: 'MediaFields_sizes_sixteenByNineMedium_mimeType_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_SixteenByNineMedium_MimeType_Update = {
  __typename?: 'MediaFields_sizes_sixteenByNineMedium_mimeType_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_SixteenByNineMedium_Url = {
  __typename?: 'MediaFields_sizes_sixteenByNineMedium_url';
  create?: Maybe<MediaFields_Sizes_SixteenByNineMedium_Url_Create>;
  delete?: Maybe<MediaFields_Sizes_SixteenByNineMedium_Url_Delete>;
  read?: Maybe<MediaFields_Sizes_SixteenByNineMedium_Url_Read>;
  update?: Maybe<MediaFields_Sizes_SixteenByNineMedium_Url_Update>;
};

export type MediaFields_Sizes_SixteenByNineMedium_Url_Create = {
  __typename?: 'MediaFields_sizes_sixteenByNineMedium_url_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_SixteenByNineMedium_Url_Delete = {
  __typename?: 'MediaFields_sizes_sixteenByNineMedium_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_SixteenByNineMedium_Url_Read = {
  __typename?: 'MediaFields_sizes_sixteenByNineMedium_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_SixteenByNineMedium_Url_Update = {
  __typename?: 'MediaFields_sizes_sixteenByNineMedium_url_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_SixteenByNineMedium_Width = {
  __typename?: 'MediaFields_sizes_sixteenByNineMedium_width';
  create?: Maybe<MediaFields_Sizes_SixteenByNineMedium_Width_Create>;
  delete?: Maybe<MediaFields_Sizes_SixteenByNineMedium_Width_Delete>;
  read?: Maybe<MediaFields_Sizes_SixteenByNineMedium_Width_Read>;
  update?: Maybe<MediaFields_Sizes_SixteenByNineMedium_Width_Update>;
};

export type MediaFields_Sizes_SixteenByNineMedium_Width_Create = {
  __typename?: 'MediaFields_sizes_sixteenByNineMedium_width_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_SixteenByNineMedium_Width_Delete = {
  __typename?: 'MediaFields_sizes_sixteenByNineMedium_width_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_SixteenByNineMedium_Width_Read = {
  __typename?: 'MediaFields_sizes_sixteenByNineMedium_width_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_SixteenByNineMedium_Width_Update = {
  __typename?: 'MediaFields_sizes_sixteenByNineMedium_width_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail = {
  __typename?: 'MediaFields_sizes_thumbnail';
  create?: Maybe<MediaFields_Sizes_Thumbnail_Create>;
  delete?: Maybe<MediaFields_Sizes_Thumbnail_Delete>;
  fields?: Maybe<MediaFields_Sizes_Thumbnail_Fields>;
  read?: Maybe<MediaFields_Sizes_Thumbnail_Read>;
  update?: Maybe<MediaFields_Sizes_Thumbnail_Update>;
};

export type MediaFields_Sizes_Thumbnail_Create = {
  __typename?: 'MediaFields_sizes_thumbnail_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Delete = {
  __typename?: 'MediaFields_sizes_thumbnail_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Fields = {
  __typename?: 'MediaFields_sizes_thumbnail_Fields';
  filename?: Maybe<MediaFields_Sizes_Thumbnail_Filename>;
  filesize?: Maybe<MediaFields_Sizes_Thumbnail_Filesize>;
  height?: Maybe<MediaFields_Sizes_Thumbnail_Height>;
  mimeType?: Maybe<MediaFields_Sizes_Thumbnail_MimeType>;
  url?: Maybe<MediaFields_Sizes_Thumbnail_Url>;
  width?: Maybe<MediaFields_Sizes_Thumbnail_Width>;
};

export type MediaFields_Sizes_Thumbnail_Read = {
  __typename?: 'MediaFields_sizes_thumbnail_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Update = {
  __typename?: 'MediaFields_sizes_thumbnail_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Filename = {
  __typename?: 'MediaFields_sizes_thumbnail_filename';
  create?: Maybe<MediaFields_Sizes_Thumbnail_Filename_Create>;
  delete?: Maybe<MediaFields_Sizes_Thumbnail_Filename_Delete>;
  read?: Maybe<MediaFields_Sizes_Thumbnail_Filename_Read>;
  update?: Maybe<MediaFields_Sizes_Thumbnail_Filename_Update>;
};

export type MediaFields_Sizes_Thumbnail_Filename_Create = {
  __typename?: 'MediaFields_sizes_thumbnail_filename_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Filename_Delete = {
  __typename?: 'MediaFields_sizes_thumbnail_filename_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Filename_Read = {
  __typename?: 'MediaFields_sizes_thumbnail_filename_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Filename_Update = {
  __typename?: 'MediaFields_sizes_thumbnail_filename_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Filesize = {
  __typename?: 'MediaFields_sizes_thumbnail_filesize';
  create?: Maybe<MediaFields_Sizes_Thumbnail_Filesize_Create>;
  delete?: Maybe<MediaFields_Sizes_Thumbnail_Filesize_Delete>;
  read?: Maybe<MediaFields_Sizes_Thumbnail_Filesize_Read>;
  update?: Maybe<MediaFields_Sizes_Thumbnail_Filesize_Update>;
};

export type MediaFields_Sizes_Thumbnail_Filesize_Create = {
  __typename?: 'MediaFields_sizes_thumbnail_filesize_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Filesize_Delete = {
  __typename?: 'MediaFields_sizes_thumbnail_filesize_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Filesize_Read = {
  __typename?: 'MediaFields_sizes_thumbnail_filesize_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Filesize_Update = {
  __typename?: 'MediaFields_sizes_thumbnail_filesize_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Height = {
  __typename?: 'MediaFields_sizes_thumbnail_height';
  create?: Maybe<MediaFields_Sizes_Thumbnail_Height_Create>;
  delete?: Maybe<MediaFields_Sizes_Thumbnail_Height_Delete>;
  read?: Maybe<MediaFields_Sizes_Thumbnail_Height_Read>;
  update?: Maybe<MediaFields_Sizes_Thumbnail_Height_Update>;
};

export type MediaFields_Sizes_Thumbnail_Height_Create = {
  __typename?: 'MediaFields_sizes_thumbnail_height_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Height_Delete = {
  __typename?: 'MediaFields_sizes_thumbnail_height_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Height_Read = {
  __typename?: 'MediaFields_sizes_thumbnail_height_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Height_Update = {
  __typename?: 'MediaFields_sizes_thumbnail_height_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_MimeType = {
  __typename?: 'MediaFields_sizes_thumbnail_mimeType';
  create?: Maybe<MediaFields_Sizes_Thumbnail_MimeType_Create>;
  delete?: Maybe<MediaFields_Sizes_Thumbnail_MimeType_Delete>;
  read?: Maybe<MediaFields_Sizes_Thumbnail_MimeType_Read>;
  update?: Maybe<MediaFields_Sizes_Thumbnail_MimeType_Update>;
};

export type MediaFields_Sizes_Thumbnail_MimeType_Create = {
  __typename?: 'MediaFields_sizes_thumbnail_mimeType_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_MimeType_Delete = {
  __typename?: 'MediaFields_sizes_thumbnail_mimeType_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_MimeType_Read = {
  __typename?: 'MediaFields_sizes_thumbnail_mimeType_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_MimeType_Update = {
  __typename?: 'MediaFields_sizes_thumbnail_mimeType_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Url = {
  __typename?: 'MediaFields_sizes_thumbnail_url';
  create?: Maybe<MediaFields_Sizes_Thumbnail_Url_Create>;
  delete?: Maybe<MediaFields_Sizes_Thumbnail_Url_Delete>;
  read?: Maybe<MediaFields_Sizes_Thumbnail_Url_Read>;
  update?: Maybe<MediaFields_Sizes_Thumbnail_Url_Update>;
};

export type MediaFields_Sizes_Thumbnail_Url_Create = {
  __typename?: 'MediaFields_sizes_thumbnail_url_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Url_Delete = {
  __typename?: 'MediaFields_sizes_thumbnail_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Url_Read = {
  __typename?: 'MediaFields_sizes_thumbnail_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Url_Update = {
  __typename?: 'MediaFields_sizes_thumbnail_url_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Width = {
  __typename?: 'MediaFields_sizes_thumbnail_width';
  create?: Maybe<MediaFields_Sizes_Thumbnail_Width_Create>;
  delete?: Maybe<MediaFields_Sizes_Thumbnail_Width_Delete>;
  read?: Maybe<MediaFields_Sizes_Thumbnail_Width_Read>;
  update?: Maybe<MediaFields_Sizes_Thumbnail_Width_Update>;
};

export type MediaFields_Sizes_Thumbnail_Width_Create = {
  __typename?: 'MediaFields_sizes_thumbnail_width_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Width_Delete = {
  __typename?: 'MediaFields_sizes_thumbnail_width_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Width_Read = {
  __typename?: 'MediaFields_sizes_thumbnail_width_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Sizes_Thumbnail_Width_Update = {
  __typename?: 'MediaFields_sizes_thumbnail_width_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_UpdatedAt = {
  __typename?: 'MediaFields_updatedAt';
  create?: Maybe<MediaFields_UpdatedAt_Create>;
  delete?: Maybe<MediaFields_UpdatedAt_Delete>;
  read?: Maybe<MediaFields_UpdatedAt_Read>;
  update?: Maybe<MediaFields_UpdatedAt_Update>;
};

export type MediaFields_UpdatedAt_Create = {
  __typename?: 'MediaFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_UpdatedAt_Delete = {
  __typename?: 'MediaFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_UpdatedAt_Read = {
  __typename?: 'MediaFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_UpdatedAt_Update = {
  __typename?: 'MediaFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Url = {
  __typename?: 'MediaFields_url';
  create?: Maybe<MediaFields_Url_Create>;
  delete?: Maybe<MediaFields_Url_Delete>;
  read?: Maybe<MediaFields_Url_Read>;
  update?: Maybe<MediaFields_Url_Update>;
};

export type MediaFields_Url_Create = {
  __typename?: 'MediaFields_url_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Url_Delete = {
  __typename?: 'MediaFields_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Url_Read = {
  __typename?: 'MediaFields_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Url_Update = {
  __typename?: 'MediaFields_url_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Width = {
  __typename?: 'MediaFields_width';
  create?: Maybe<MediaFields_Width_Create>;
  delete?: Maybe<MediaFields_Width_Delete>;
  read?: Maybe<MediaFields_Width_Read>;
  update?: Maybe<MediaFields_Width_Update>;
};

export type MediaFields_Width_Create = {
  __typename?: 'MediaFields_width_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Width_Delete = {
  __typename?: 'MediaFields_width_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Width_Read = {
  __typename?: 'MediaFields_width_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Width_Update = {
  __typename?: 'MediaFields_width_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaReadAccess = {
  __typename?: 'MediaReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type MediaReadDocAccess = {
  __typename?: 'MediaReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type MediaUpdateAccess = {
  __typename?: 'MediaUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type MediaUpdateDocAccess = {
  __typename?: 'MediaUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Media_Sizes = {
  __typename?: 'Media_Sizes';
  sixteenByNineMedium?: Maybe<Media_Sizes_SixteenByNineMedium>;
  thumbnail?: Maybe<Media_Sizes_Thumbnail>;
};

export type Media_Sizes_SixteenByNineMedium = {
  __typename?: 'Media_Sizes_SixteenByNineMedium';
  filename?: Maybe<Scalars['String']['output']>;
  filesize?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  mimeType?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

export type Media_Sizes_Thumbnail = {
  __typename?: 'Media_Sizes_Thumbnail';
  filename?: Maybe<Scalars['String']['output']>;
  filesize?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  mimeType?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

export type Media_Alt_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Media_Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_Height_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Sizes__SixteenByNineMedium__Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Sizes__SixteenByNineMedium__Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_Sizes__SixteenByNineMedium__Height_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_Sizes__SixteenByNineMedium__MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Sizes__SixteenByNineMedium__Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Sizes__SixteenByNineMedium__Width_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_Sizes__Thumbnail__Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Sizes__Thumbnail__Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_Sizes__Thumbnail__Height_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_Sizes__Thumbnail__MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Sizes__Thumbnail__Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Sizes__Thumbnail__Width_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Media_Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Where = {
  AND?: InputMaybe<Array<InputMaybe<Media_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Media_Where_Or>>>;
  alt?: InputMaybe<Media_Alt_Operator>;
  createdAt?: InputMaybe<Media_CreatedAt_Operator>;
  filename?: InputMaybe<Media_Filename_Operator>;
  filesize?: InputMaybe<Media_Filesize_Operator>;
  height?: InputMaybe<Media_Height_Operator>;
  id?: InputMaybe<Media_Id_Operator>;
  mimeType?: InputMaybe<Media_MimeType_Operator>;
  sizes__sixteenByNineMedium__filename?: InputMaybe<Media_Sizes__SixteenByNineMedium__Filename_Operator>;
  sizes__sixteenByNineMedium__filesize?: InputMaybe<Media_Sizes__SixteenByNineMedium__Filesize_Operator>;
  sizes__sixteenByNineMedium__height?: InputMaybe<Media_Sizes__SixteenByNineMedium__Height_Operator>;
  sizes__sixteenByNineMedium__mimeType?: InputMaybe<Media_Sizes__SixteenByNineMedium__MimeType_Operator>;
  sizes__sixteenByNineMedium__url?: InputMaybe<Media_Sizes__SixteenByNineMedium__Url_Operator>;
  sizes__sixteenByNineMedium__width?: InputMaybe<Media_Sizes__SixteenByNineMedium__Width_Operator>;
  sizes__thumbnail__filename?: InputMaybe<Media_Sizes__Thumbnail__Filename_Operator>;
  sizes__thumbnail__filesize?: InputMaybe<Media_Sizes__Thumbnail__Filesize_Operator>;
  sizes__thumbnail__height?: InputMaybe<Media_Sizes__Thumbnail__Height_Operator>;
  sizes__thumbnail__mimeType?: InputMaybe<Media_Sizes__Thumbnail__MimeType_Operator>;
  sizes__thumbnail__url?: InputMaybe<Media_Sizes__Thumbnail__Url_Operator>;
  sizes__thumbnail__width?: InputMaybe<Media_Sizes__Thumbnail__Width_Operator>;
  updatedAt?: InputMaybe<Media_UpdatedAt_Operator>;
  url?: InputMaybe<Media_Url_Operator>;
  width?: InputMaybe<Media_Width_Operator>;
};

export type Media_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<Media_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Media_Where_Or>>>;
  alt?: InputMaybe<Media_Alt_Operator>;
  createdAt?: InputMaybe<Media_CreatedAt_Operator>;
  filename?: InputMaybe<Media_Filename_Operator>;
  filesize?: InputMaybe<Media_Filesize_Operator>;
  height?: InputMaybe<Media_Height_Operator>;
  id?: InputMaybe<Media_Id_Operator>;
  mimeType?: InputMaybe<Media_MimeType_Operator>;
  sizes__sixteenByNineMedium__filename?: InputMaybe<Media_Sizes__SixteenByNineMedium__Filename_Operator>;
  sizes__sixteenByNineMedium__filesize?: InputMaybe<Media_Sizes__SixteenByNineMedium__Filesize_Operator>;
  sizes__sixteenByNineMedium__height?: InputMaybe<Media_Sizes__SixteenByNineMedium__Height_Operator>;
  sizes__sixteenByNineMedium__mimeType?: InputMaybe<Media_Sizes__SixteenByNineMedium__MimeType_Operator>;
  sizes__sixteenByNineMedium__url?: InputMaybe<Media_Sizes__SixteenByNineMedium__Url_Operator>;
  sizes__sixteenByNineMedium__width?: InputMaybe<Media_Sizes__SixteenByNineMedium__Width_Operator>;
  sizes__thumbnail__filename?: InputMaybe<Media_Sizes__Thumbnail__Filename_Operator>;
  sizes__thumbnail__filesize?: InputMaybe<Media_Sizes__Thumbnail__Filesize_Operator>;
  sizes__thumbnail__height?: InputMaybe<Media_Sizes__Thumbnail__Height_Operator>;
  sizes__thumbnail__mimeType?: InputMaybe<Media_Sizes__Thumbnail__MimeType_Operator>;
  sizes__thumbnail__url?: InputMaybe<Media_Sizes__Thumbnail__Url_Operator>;
  sizes__thumbnail__width?: InputMaybe<Media_Sizes__Thumbnail__Width_Operator>;
  updatedAt?: InputMaybe<Media_UpdatedAt_Operator>;
  url?: InputMaybe<Media_Url_Operator>;
  width?: InputMaybe<Media_Width_Operator>;
};

export type Media_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<Media_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Media_Where_Or>>>;
  alt?: InputMaybe<Media_Alt_Operator>;
  createdAt?: InputMaybe<Media_CreatedAt_Operator>;
  filename?: InputMaybe<Media_Filename_Operator>;
  filesize?: InputMaybe<Media_Filesize_Operator>;
  height?: InputMaybe<Media_Height_Operator>;
  id?: InputMaybe<Media_Id_Operator>;
  mimeType?: InputMaybe<Media_MimeType_Operator>;
  sizes__sixteenByNineMedium__filename?: InputMaybe<Media_Sizes__SixteenByNineMedium__Filename_Operator>;
  sizes__sixteenByNineMedium__filesize?: InputMaybe<Media_Sizes__SixteenByNineMedium__Filesize_Operator>;
  sizes__sixteenByNineMedium__height?: InputMaybe<Media_Sizes__SixteenByNineMedium__Height_Operator>;
  sizes__sixteenByNineMedium__mimeType?: InputMaybe<Media_Sizes__SixteenByNineMedium__MimeType_Operator>;
  sizes__sixteenByNineMedium__url?: InputMaybe<Media_Sizes__SixteenByNineMedium__Url_Operator>;
  sizes__sixteenByNineMedium__width?: InputMaybe<Media_Sizes__SixteenByNineMedium__Width_Operator>;
  sizes__thumbnail__filename?: InputMaybe<Media_Sizes__Thumbnail__Filename_Operator>;
  sizes__thumbnail__filesize?: InputMaybe<Media_Sizes__Thumbnail__Filesize_Operator>;
  sizes__thumbnail__height?: InputMaybe<Media_Sizes__Thumbnail__Height_Operator>;
  sizes__thumbnail__mimeType?: InputMaybe<Media_Sizes__Thumbnail__MimeType_Operator>;
  sizes__thumbnail__url?: InputMaybe<Media_Sizes__Thumbnail__Url_Operator>;
  sizes__thumbnail__width?: InputMaybe<Media_Sizes__Thumbnail__Width_Operator>;
  updatedAt?: InputMaybe<Media_UpdatedAt_Operator>;
  url?: InputMaybe<Media_Url_Operator>;
  width?: InputMaybe<Media_Width_Operator>;
};

export type Media_Width_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createArchive?: Maybe<Archive>;
  createArchiveCategory?: Maybe<ArchiveCategory>;
  createGuideline?: Maybe<Guideline>;
  createMedia?: Maybe<Media>;
  createNews?: Maybe<News>;
  createNewsTag?: Maybe<NewsTag>;
  createPayloadPreference?: Maybe<PayloadPreference>;
  createUser?: Maybe<User>;
  deleteArchive?: Maybe<Archive>;
  deleteArchiveCategory?: Maybe<ArchiveCategory>;
  deleteGuideline?: Maybe<Guideline>;
  deleteMedia?: Maybe<Media>;
  deleteNews?: Maybe<News>;
  deleteNewsTag?: Maybe<NewsTag>;
  deletePayloadPreference?: Maybe<PayloadPreference>;
  deleteUser?: Maybe<User>;
  forgotPasswordUser: Scalars['Boolean']['output'];
  loginUser?: Maybe<UsersLoginResult>;
  logoutUser?: Maybe<Scalars['String']['output']>;
  refreshTokenUser?: Maybe<UsersRefreshedUser>;
  resetPasswordUser?: Maybe<UsersResetPassword>;
  unlockUser: Scalars['Boolean']['output'];
  updateArchive?: Maybe<Archive>;
  updateArchiveCategory?: Maybe<ArchiveCategory>;
  updateEditorialBoard?: Maybe<EditorialBoard>;
  updateGuideline?: Maybe<Guideline>;
  updateMedia?: Maybe<Media>;
  updateNews?: Maybe<News>;
  updateNewsTag?: Maybe<NewsTag>;
  updatePayloadPreference?: Maybe<PayloadPreference>;
  updateUser?: Maybe<User>;
  verifyEmailUser?: Maybe<Scalars['Boolean']['output']>;
};


export type MutationCreateArchiveArgs = {
  data: MutationArchiveInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateArchiveCategoryArgs = {
  data: MutationArchiveCategoryInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateGuidelineArgs = {
  data: MutationGuidelineInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateMediaArgs = {
  data: MutationMediaInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateNewsArgs = {
  data: MutationNewsInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateNewsTagArgs = {
  data: MutationNewsTagInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreatePayloadPreferenceArgs = {
  data: MutationPayloadPreferenceInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateUserArgs = {
  data: MutationUserInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationDeleteArchiveArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteArchiveCategoryArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteGuidelineArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteMediaArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteNewsArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteNewsTagArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeletePayloadPreferenceArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['String']['input'];
};


export type MutationForgotPasswordUserArgs = {
  disableEmail?: InputMaybe<Scalars['Boolean']['input']>;
  email: Scalars['String']['input'];
  expiration?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationLoginUserArgs = {
  email?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
};


export type MutationRefreshTokenUserArgs = {
  token?: InputMaybe<Scalars['String']['input']>;
};


export type MutationResetPasswordUserArgs = {
  password?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUnlockUserArgs = {
  email: Scalars['String']['input'];
};


export type MutationUpdateArchiveArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationArchiveUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
};


export type MutationUpdateArchiveCategoryArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationArchiveCategoryUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
};


export type MutationUpdateEditorialBoardArgs = {
  data: MutationEditorialBoardInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUpdateGuidelineArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationGuidelineUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
};


export type MutationUpdateMediaArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationMediaUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
};


export type MutationUpdateNewsArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationNewsUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
};


export type MutationUpdateNewsTagArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationNewsTagUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
};


export type MutationUpdatePayloadPreferenceArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationPayloadPreferenceUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
};


export type MutationUpdateUserArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationUserUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
};


export type MutationVerifyEmailUserArgs = {
  token?: InputMaybe<Scalars['String']['input']>;
};

export type News = {
  __typename?: 'News';
  author?: Maybe<User>;
  content?: Maybe<Scalars['JSON']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  featureImage?: Maybe<Media>;
  id?: Maybe<Scalars['String']['output']>;
  publishedDate?: Maybe<Scalars['DateTime']['output']>;
  readTime?: Maybe<Scalars['Float']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  status?: Maybe<News_Status>;
  tags?: Maybe<Array<NewsTag>>;
  title: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type NewsContentArgs = {
  depth?: InputMaybe<Scalars['Int']['input']>;
};


export type NewsFeatureImageArgs = {
  where?: InputMaybe<News_FeatureImage_Where>;
};

export type NewsCreateAccess = {
  __typename?: 'NewsCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type NewsCreateDocAccess = {
  __typename?: 'NewsCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type NewsDeleteAccess = {
  __typename?: 'NewsDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type NewsDeleteDocAccess = {
  __typename?: 'NewsDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type NewsDocAccessFields = {
  __typename?: 'NewsDocAccessFields';
  author?: Maybe<NewsDocAccessFields_Author>;
  content?: Maybe<NewsDocAccessFields_Content>;
  createdAt?: Maybe<NewsDocAccessFields_CreatedAt>;
  featureImage?: Maybe<NewsDocAccessFields_FeatureImage>;
  publishedDate?: Maybe<NewsDocAccessFields_PublishedDate>;
  readTime?: Maybe<NewsDocAccessFields_ReadTime>;
  slug?: Maybe<NewsDocAccessFields_Slug>;
  status?: Maybe<NewsDocAccessFields_Status>;
  tags?: Maybe<NewsDocAccessFields_Tags>;
  title?: Maybe<NewsDocAccessFields_Title>;
  updatedAt?: Maybe<NewsDocAccessFields_UpdatedAt>;
};

export type NewsDocAccessFields_Author = {
  __typename?: 'NewsDocAccessFields_author';
  create?: Maybe<NewsDocAccessFields_Author_Create>;
  delete?: Maybe<NewsDocAccessFields_Author_Delete>;
  read?: Maybe<NewsDocAccessFields_Author_Read>;
  update?: Maybe<NewsDocAccessFields_Author_Update>;
};

export type NewsDocAccessFields_Author_Create = {
  __typename?: 'NewsDocAccessFields_author_Create';
  permission: Scalars['Boolean']['output'];
};

export type NewsDocAccessFields_Author_Delete = {
  __typename?: 'NewsDocAccessFields_author_Delete';
  permission: Scalars['Boolean']['output'];
};

export type NewsDocAccessFields_Author_Read = {
  __typename?: 'NewsDocAccessFields_author_Read';
  permission: Scalars['Boolean']['output'];
};

export type NewsDocAccessFields_Author_Update = {
  __typename?: 'NewsDocAccessFields_author_Update';
  permission: Scalars['Boolean']['output'];
};

export type NewsDocAccessFields_Content = {
  __typename?: 'NewsDocAccessFields_content';
  create?: Maybe<NewsDocAccessFields_Content_Create>;
  delete?: Maybe<NewsDocAccessFields_Content_Delete>;
  read?: Maybe<NewsDocAccessFields_Content_Read>;
  update?: Maybe<NewsDocAccessFields_Content_Update>;
};

export type NewsDocAccessFields_Content_Create = {
  __typename?: 'NewsDocAccessFields_content_Create';
  permission: Scalars['Boolean']['output'];
};

export type NewsDocAccessFields_Content_Delete = {
  __typename?: 'NewsDocAccessFields_content_Delete';
  permission: Scalars['Boolean']['output'];
};

export type NewsDocAccessFields_Content_Read = {
  __typename?: 'NewsDocAccessFields_content_Read';
  permission: Scalars['Boolean']['output'];
};

export type NewsDocAccessFields_Content_Update = {
  __typename?: 'NewsDocAccessFields_content_Update';
  permission: Scalars['Boolean']['output'];
};

export type NewsDocAccessFields_CreatedAt = {
  __typename?: 'NewsDocAccessFields_createdAt';
  create?: Maybe<NewsDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<NewsDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<NewsDocAccessFields_CreatedAt_Read>;
  update?: Maybe<NewsDocAccessFields_CreatedAt_Update>;
};

export type NewsDocAccessFields_CreatedAt_Create = {
  __typename?: 'NewsDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type NewsDocAccessFields_CreatedAt_Delete = {
  __typename?: 'NewsDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type NewsDocAccessFields_CreatedAt_Read = {
  __typename?: 'NewsDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type NewsDocAccessFields_CreatedAt_Update = {
  __typename?: 'NewsDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type NewsDocAccessFields_FeatureImage = {
  __typename?: 'NewsDocAccessFields_featureImage';
  create?: Maybe<NewsDocAccessFields_FeatureImage_Create>;
  delete?: Maybe<NewsDocAccessFields_FeatureImage_Delete>;
  read?: Maybe<NewsDocAccessFields_FeatureImage_Read>;
  update?: Maybe<NewsDocAccessFields_FeatureImage_Update>;
};

export type NewsDocAccessFields_FeatureImage_Create = {
  __typename?: 'NewsDocAccessFields_featureImage_Create';
  permission: Scalars['Boolean']['output'];
};

export type NewsDocAccessFields_FeatureImage_Delete = {
  __typename?: 'NewsDocAccessFields_featureImage_Delete';
  permission: Scalars['Boolean']['output'];
};

export type NewsDocAccessFields_FeatureImage_Read = {
  __typename?: 'NewsDocAccessFields_featureImage_Read';
  permission: Scalars['Boolean']['output'];
};

export type NewsDocAccessFields_FeatureImage_Update = {
  __typename?: 'NewsDocAccessFields_featureImage_Update';
  permission: Scalars['Boolean']['output'];
};

export type NewsDocAccessFields_PublishedDate = {
  __typename?: 'NewsDocAccessFields_publishedDate';
  create?: Maybe<NewsDocAccessFields_PublishedDate_Create>;
  delete?: Maybe<NewsDocAccessFields_PublishedDate_Delete>;
  read?: Maybe<NewsDocAccessFields_PublishedDate_Read>;
  update?: Maybe<NewsDocAccessFields_PublishedDate_Update>;
};

export type NewsDocAccessFields_PublishedDate_Create = {
  __typename?: 'NewsDocAccessFields_publishedDate_Create';
  permission: Scalars['Boolean']['output'];
};

export type NewsDocAccessFields_PublishedDate_Delete = {
  __typename?: 'NewsDocAccessFields_publishedDate_Delete';
  permission: Scalars['Boolean']['output'];
};

export type NewsDocAccessFields_PublishedDate_Read = {
  __typename?: 'NewsDocAccessFields_publishedDate_Read';
  permission: Scalars['Boolean']['output'];
};

export type NewsDocAccessFields_PublishedDate_Update = {
  __typename?: 'NewsDocAccessFields_publishedDate_Update';
  permission: Scalars['Boolean']['output'];
};

export type NewsDocAccessFields_ReadTime = {
  __typename?: 'NewsDocAccessFields_readTime';
  create?: Maybe<NewsDocAccessFields_ReadTime_Create>;
  delete?: Maybe<NewsDocAccessFields_ReadTime_Delete>;
  read?: Maybe<NewsDocAccessFields_ReadTime_Read>;
  update?: Maybe<NewsDocAccessFields_ReadTime_Update>;
};

export type NewsDocAccessFields_ReadTime_Create = {
  __typename?: 'NewsDocAccessFields_readTime_Create';
  permission: Scalars['Boolean']['output'];
};

export type NewsDocAccessFields_ReadTime_Delete = {
  __typename?: 'NewsDocAccessFields_readTime_Delete';
  permission: Scalars['Boolean']['output'];
};

export type NewsDocAccessFields_ReadTime_Read = {
  __typename?: 'NewsDocAccessFields_readTime_Read';
  permission: Scalars['Boolean']['output'];
};

export type NewsDocAccessFields_ReadTime_Update = {
  __typename?: 'NewsDocAccessFields_readTime_Update';
  permission: Scalars['Boolean']['output'];
};

export type NewsDocAccessFields_Slug = {
  __typename?: 'NewsDocAccessFields_slug';
  create?: Maybe<NewsDocAccessFields_Slug_Create>;
  delete?: Maybe<NewsDocAccessFields_Slug_Delete>;
  read?: Maybe<NewsDocAccessFields_Slug_Read>;
  update?: Maybe<NewsDocAccessFields_Slug_Update>;
};

export type NewsDocAccessFields_Slug_Create = {
  __typename?: 'NewsDocAccessFields_slug_Create';
  permission: Scalars['Boolean']['output'];
};

export type NewsDocAccessFields_Slug_Delete = {
  __typename?: 'NewsDocAccessFields_slug_Delete';
  permission: Scalars['Boolean']['output'];
};

export type NewsDocAccessFields_Slug_Read = {
  __typename?: 'NewsDocAccessFields_slug_Read';
  permission: Scalars['Boolean']['output'];
};

export type NewsDocAccessFields_Slug_Update = {
  __typename?: 'NewsDocAccessFields_slug_Update';
  permission: Scalars['Boolean']['output'];
};

export type NewsDocAccessFields_Status = {
  __typename?: 'NewsDocAccessFields_status';
  create?: Maybe<NewsDocAccessFields_Status_Create>;
  delete?: Maybe<NewsDocAccessFields_Status_Delete>;
  read?: Maybe<NewsDocAccessFields_Status_Read>;
  update?: Maybe<NewsDocAccessFields_Status_Update>;
};

export type NewsDocAccessFields_Status_Create = {
  __typename?: 'NewsDocAccessFields_status_Create';
  permission: Scalars['Boolean']['output'];
};

export type NewsDocAccessFields_Status_Delete = {
  __typename?: 'NewsDocAccessFields_status_Delete';
  permission: Scalars['Boolean']['output'];
};

export type NewsDocAccessFields_Status_Read = {
  __typename?: 'NewsDocAccessFields_status_Read';
  permission: Scalars['Boolean']['output'];
};

export type NewsDocAccessFields_Status_Update = {
  __typename?: 'NewsDocAccessFields_status_Update';
  permission: Scalars['Boolean']['output'];
};

export type NewsDocAccessFields_Tags = {
  __typename?: 'NewsDocAccessFields_tags';
  create?: Maybe<NewsDocAccessFields_Tags_Create>;
  delete?: Maybe<NewsDocAccessFields_Tags_Delete>;
  read?: Maybe<NewsDocAccessFields_Tags_Read>;
  update?: Maybe<NewsDocAccessFields_Tags_Update>;
};

export type NewsDocAccessFields_Tags_Create = {
  __typename?: 'NewsDocAccessFields_tags_Create';
  permission: Scalars['Boolean']['output'];
};

export type NewsDocAccessFields_Tags_Delete = {
  __typename?: 'NewsDocAccessFields_tags_Delete';
  permission: Scalars['Boolean']['output'];
};

export type NewsDocAccessFields_Tags_Read = {
  __typename?: 'NewsDocAccessFields_tags_Read';
  permission: Scalars['Boolean']['output'];
};

export type NewsDocAccessFields_Tags_Update = {
  __typename?: 'NewsDocAccessFields_tags_Update';
  permission: Scalars['Boolean']['output'];
};

export type NewsDocAccessFields_Title = {
  __typename?: 'NewsDocAccessFields_title';
  create?: Maybe<NewsDocAccessFields_Title_Create>;
  delete?: Maybe<NewsDocAccessFields_Title_Delete>;
  read?: Maybe<NewsDocAccessFields_Title_Read>;
  update?: Maybe<NewsDocAccessFields_Title_Update>;
};

export type NewsDocAccessFields_Title_Create = {
  __typename?: 'NewsDocAccessFields_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type NewsDocAccessFields_Title_Delete = {
  __typename?: 'NewsDocAccessFields_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type NewsDocAccessFields_Title_Read = {
  __typename?: 'NewsDocAccessFields_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type NewsDocAccessFields_Title_Update = {
  __typename?: 'NewsDocAccessFields_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type NewsDocAccessFields_UpdatedAt = {
  __typename?: 'NewsDocAccessFields_updatedAt';
  create?: Maybe<NewsDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<NewsDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<NewsDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<NewsDocAccessFields_UpdatedAt_Update>;
};

export type NewsDocAccessFields_UpdatedAt_Create = {
  __typename?: 'NewsDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type NewsDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'NewsDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type NewsDocAccessFields_UpdatedAt_Read = {
  __typename?: 'NewsDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type NewsDocAccessFields_UpdatedAt_Update = {
  __typename?: 'NewsDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type NewsFields = {
  __typename?: 'NewsFields';
  author?: Maybe<NewsFields_Author>;
  content?: Maybe<NewsFields_Content>;
  createdAt?: Maybe<NewsFields_CreatedAt>;
  featureImage?: Maybe<NewsFields_FeatureImage>;
  publishedDate?: Maybe<NewsFields_PublishedDate>;
  readTime?: Maybe<NewsFields_ReadTime>;
  slug?: Maybe<NewsFields_Slug>;
  status?: Maybe<NewsFields_Status>;
  tags?: Maybe<NewsFields_Tags>;
  title?: Maybe<NewsFields_Title>;
  updatedAt?: Maybe<NewsFields_UpdatedAt>;
};

export type NewsFields_Author = {
  __typename?: 'NewsFields_author';
  create?: Maybe<NewsFields_Author_Create>;
  delete?: Maybe<NewsFields_Author_Delete>;
  read?: Maybe<NewsFields_Author_Read>;
  update?: Maybe<NewsFields_Author_Update>;
};

export type NewsFields_Author_Create = {
  __typename?: 'NewsFields_author_Create';
  permission: Scalars['Boolean']['output'];
};

export type NewsFields_Author_Delete = {
  __typename?: 'NewsFields_author_Delete';
  permission: Scalars['Boolean']['output'];
};

export type NewsFields_Author_Read = {
  __typename?: 'NewsFields_author_Read';
  permission: Scalars['Boolean']['output'];
};

export type NewsFields_Author_Update = {
  __typename?: 'NewsFields_author_Update';
  permission: Scalars['Boolean']['output'];
};

export type NewsFields_Content = {
  __typename?: 'NewsFields_content';
  create?: Maybe<NewsFields_Content_Create>;
  delete?: Maybe<NewsFields_Content_Delete>;
  read?: Maybe<NewsFields_Content_Read>;
  update?: Maybe<NewsFields_Content_Update>;
};

export type NewsFields_Content_Create = {
  __typename?: 'NewsFields_content_Create';
  permission: Scalars['Boolean']['output'];
};

export type NewsFields_Content_Delete = {
  __typename?: 'NewsFields_content_Delete';
  permission: Scalars['Boolean']['output'];
};

export type NewsFields_Content_Read = {
  __typename?: 'NewsFields_content_Read';
  permission: Scalars['Boolean']['output'];
};

export type NewsFields_Content_Update = {
  __typename?: 'NewsFields_content_Update';
  permission: Scalars['Boolean']['output'];
};

export type NewsFields_CreatedAt = {
  __typename?: 'NewsFields_createdAt';
  create?: Maybe<NewsFields_CreatedAt_Create>;
  delete?: Maybe<NewsFields_CreatedAt_Delete>;
  read?: Maybe<NewsFields_CreatedAt_Read>;
  update?: Maybe<NewsFields_CreatedAt_Update>;
};

export type NewsFields_CreatedAt_Create = {
  __typename?: 'NewsFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type NewsFields_CreatedAt_Delete = {
  __typename?: 'NewsFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type NewsFields_CreatedAt_Read = {
  __typename?: 'NewsFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type NewsFields_CreatedAt_Update = {
  __typename?: 'NewsFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type NewsFields_FeatureImage = {
  __typename?: 'NewsFields_featureImage';
  create?: Maybe<NewsFields_FeatureImage_Create>;
  delete?: Maybe<NewsFields_FeatureImage_Delete>;
  read?: Maybe<NewsFields_FeatureImage_Read>;
  update?: Maybe<NewsFields_FeatureImage_Update>;
};

export type NewsFields_FeatureImage_Create = {
  __typename?: 'NewsFields_featureImage_Create';
  permission: Scalars['Boolean']['output'];
};

export type NewsFields_FeatureImage_Delete = {
  __typename?: 'NewsFields_featureImage_Delete';
  permission: Scalars['Boolean']['output'];
};

export type NewsFields_FeatureImage_Read = {
  __typename?: 'NewsFields_featureImage_Read';
  permission: Scalars['Boolean']['output'];
};

export type NewsFields_FeatureImage_Update = {
  __typename?: 'NewsFields_featureImage_Update';
  permission: Scalars['Boolean']['output'];
};

export type NewsFields_PublishedDate = {
  __typename?: 'NewsFields_publishedDate';
  create?: Maybe<NewsFields_PublishedDate_Create>;
  delete?: Maybe<NewsFields_PublishedDate_Delete>;
  read?: Maybe<NewsFields_PublishedDate_Read>;
  update?: Maybe<NewsFields_PublishedDate_Update>;
};

export type NewsFields_PublishedDate_Create = {
  __typename?: 'NewsFields_publishedDate_Create';
  permission: Scalars['Boolean']['output'];
};

export type NewsFields_PublishedDate_Delete = {
  __typename?: 'NewsFields_publishedDate_Delete';
  permission: Scalars['Boolean']['output'];
};

export type NewsFields_PublishedDate_Read = {
  __typename?: 'NewsFields_publishedDate_Read';
  permission: Scalars['Boolean']['output'];
};

export type NewsFields_PublishedDate_Update = {
  __typename?: 'NewsFields_publishedDate_Update';
  permission: Scalars['Boolean']['output'];
};

export type NewsFields_ReadTime = {
  __typename?: 'NewsFields_readTime';
  create?: Maybe<NewsFields_ReadTime_Create>;
  delete?: Maybe<NewsFields_ReadTime_Delete>;
  read?: Maybe<NewsFields_ReadTime_Read>;
  update?: Maybe<NewsFields_ReadTime_Update>;
};

export type NewsFields_ReadTime_Create = {
  __typename?: 'NewsFields_readTime_Create';
  permission: Scalars['Boolean']['output'];
};

export type NewsFields_ReadTime_Delete = {
  __typename?: 'NewsFields_readTime_Delete';
  permission: Scalars['Boolean']['output'];
};

export type NewsFields_ReadTime_Read = {
  __typename?: 'NewsFields_readTime_Read';
  permission: Scalars['Boolean']['output'];
};

export type NewsFields_ReadTime_Update = {
  __typename?: 'NewsFields_readTime_Update';
  permission: Scalars['Boolean']['output'];
};

export type NewsFields_Slug = {
  __typename?: 'NewsFields_slug';
  create?: Maybe<NewsFields_Slug_Create>;
  delete?: Maybe<NewsFields_Slug_Delete>;
  read?: Maybe<NewsFields_Slug_Read>;
  update?: Maybe<NewsFields_Slug_Update>;
};

export type NewsFields_Slug_Create = {
  __typename?: 'NewsFields_slug_Create';
  permission: Scalars['Boolean']['output'];
};

export type NewsFields_Slug_Delete = {
  __typename?: 'NewsFields_slug_Delete';
  permission: Scalars['Boolean']['output'];
};

export type NewsFields_Slug_Read = {
  __typename?: 'NewsFields_slug_Read';
  permission: Scalars['Boolean']['output'];
};

export type NewsFields_Slug_Update = {
  __typename?: 'NewsFields_slug_Update';
  permission: Scalars['Boolean']['output'];
};

export type NewsFields_Status = {
  __typename?: 'NewsFields_status';
  create?: Maybe<NewsFields_Status_Create>;
  delete?: Maybe<NewsFields_Status_Delete>;
  read?: Maybe<NewsFields_Status_Read>;
  update?: Maybe<NewsFields_Status_Update>;
};

export type NewsFields_Status_Create = {
  __typename?: 'NewsFields_status_Create';
  permission: Scalars['Boolean']['output'];
};

export type NewsFields_Status_Delete = {
  __typename?: 'NewsFields_status_Delete';
  permission: Scalars['Boolean']['output'];
};

export type NewsFields_Status_Read = {
  __typename?: 'NewsFields_status_Read';
  permission: Scalars['Boolean']['output'];
};

export type NewsFields_Status_Update = {
  __typename?: 'NewsFields_status_Update';
  permission: Scalars['Boolean']['output'];
};

export type NewsFields_Tags = {
  __typename?: 'NewsFields_tags';
  create?: Maybe<NewsFields_Tags_Create>;
  delete?: Maybe<NewsFields_Tags_Delete>;
  read?: Maybe<NewsFields_Tags_Read>;
  update?: Maybe<NewsFields_Tags_Update>;
};

export type NewsFields_Tags_Create = {
  __typename?: 'NewsFields_tags_Create';
  permission: Scalars['Boolean']['output'];
};

export type NewsFields_Tags_Delete = {
  __typename?: 'NewsFields_tags_Delete';
  permission: Scalars['Boolean']['output'];
};

export type NewsFields_Tags_Read = {
  __typename?: 'NewsFields_tags_Read';
  permission: Scalars['Boolean']['output'];
};

export type NewsFields_Tags_Update = {
  __typename?: 'NewsFields_tags_Update';
  permission: Scalars['Boolean']['output'];
};

export type NewsFields_Title = {
  __typename?: 'NewsFields_title';
  create?: Maybe<NewsFields_Title_Create>;
  delete?: Maybe<NewsFields_Title_Delete>;
  read?: Maybe<NewsFields_Title_Read>;
  update?: Maybe<NewsFields_Title_Update>;
};

export type NewsFields_Title_Create = {
  __typename?: 'NewsFields_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type NewsFields_Title_Delete = {
  __typename?: 'NewsFields_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type NewsFields_Title_Read = {
  __typename?: 'NewsFields_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type NewsFields_Title_Update = {
  __typename?: 'NewsFields_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type NewsFields_UpdatedAt = {
  __typename?: 'NewsFields_updatedAt';
  create?: Maybe<NewsFields_UpdatedAt_Create>;
  delete?: Maybe<NewsFields_UpdatedAt_Delete>;
  read?: Maybe<NewsFields_UpdatedAt_Read>;
  update?: Maybe<NewsFields_UpdatedAt_Update>;
};

export type NewsFields_UpdatedAt_Create = {
  __typename?: 'NewsFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type NewsFields_UpdatedAt_Delete = {
  __typename?: 'NewsFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type NewsFields_UpdatedAt_Read = {
  __typename?: 'NewsFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type NewsFields_UpdatedAt_Update = {
  __typename?: 'NewsFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type NewsReadAccess = {
  __typename?: 'NewsReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type NewsReadDocAccess = {
  __typename?: 'NewsReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type NewsTag = {
  __typename?: 'NewsTag';
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type NewsTag_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type NewsTag_Name_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type NewsTag_Where = {
  AND?: InputMaybe<Array<InputMaybe<NewsTag_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<NewsTag_Where_Or>>>;
  id?: InputMaybe<NewsTag_Id_Operator>;
  name?: InputMaybe<NewsTag_Name_Operator>;
};

export type NewsTag_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<NewsTag_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<NewsTag_Where_Or>>>;
  id?: InputMaybe<NewsTag_Id_Operator>;
  name?: InputMaybe<NewsTag_Name_Operator>;
};

export type NewsTag_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<NewsTag_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<NewsTag_Where_Or>>>;
  id?: InputMaybe<NewsTag_Id_Operator>;
  name?: InputMaybe<NewsTag_Name_Operator>;
};

export type NewsTags = {
  __typename?: 'NewsTags';
  docs?: Maybe<Array<Maybe<NewsTag>>>;
  hasNextPage?: Maybe<Scalars['Boolean']['output']>;
  hasPrevPage?: Maybe<Scalars['Boolean']['output']>;
  limit?: Maybe<Scalars['Int']['output']>;
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page?: Maybe<Scalars['Int']['output']>;
  pagingCounter?: Maybe<Scalars['Int']['output']>;
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs?: Maybe<Scalars['Int']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type NewsTagsCreateAccess = {
  __typename?: 'NewsTagsCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type NewsTagsCreateDocAccess = {
  __typename?: 'NewsTagsCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type NewsTagsDeleteAccess = {
  __typename?: 'NewsTagsDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type NewsTagsDeleteDocAccess = {
  __typename?: 'NewsTagsDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type NewsTagsDocAccessFields = {
  __typename?: 'NewsTagsDocAccessFields';
  name?: Maybe<NewsTagsDocAccessFields_Name>;
};

export type NewsTagsDocAccessFields_Name = {
  __typename?: 'NewsTagsDocAccessFields_name';
  create?: Maybe<NewsTagsDocAccessFields_Name_Create>;
  delete?: Maybe<NewsTagsDocAccessFields_Name_Delete>;
  read?: Maybe<NewsTagsDocAccessFields_Name_Read>;
  update?: Maybe<NewsTagsDocAccessFields_Name_Update>;
};

export type NewsTagsDocAccessFields_Name_Create = {
  __typename?: 'NewsTagsDocAccessFields_name_Create';
  permission: Scalars['Boolean']['output'];
};

export type NewsTagsDocAccessFields_Name_Delete = {
  __typename?: 'NewsTagsDocAccessFields_name_Delete';
  permission: Scalars['Boolean']['output'];
};

export type NewsTagsDocAccessFields_Name_Read = {
  __typename?: 'NewsTagsDocAccessFields_name_Read';
  permission: Scalars['Boolean']['output'];
};

export type NewsTagsDocAccessFields_Name_Update = {
  __typename?: 'NewsTagsDocAccessFields_name_Update';
  permission: Scalars['Boolean']['output'];
};

export type NewsTagsFields = {
  __typename?: 'NewsTagsFields';
  name?: Maybe<NewsTagsFields_Name>;
};

export type NewsTagsFields_Name = {
  __typename?: 'NewsTagsFields_name';
  create?: Maybe<NewsTagsFields_Name_Create>;
  delete?: Maybe<NewsTagsFields_Name_Delete>;
  read?: Maybe<NewsTagsFields_Name_Read>;
  update?: Maybe<NewsTagsFields_Name_Update>;
};

export type NewsTagsFields_Name_Create = {
  __typename?: 'NewsTagsFields_name_Create';
  permission: Scalars['Boolean']['output'];
};

export type NewsTagsFields_Name_Delete = {
  __typename?: 'NewsTagsFields_name_Delete';
  permission: Scalars['Boolean']['output'];
};

export type NewsTagsFields_Name_Read = {
  __typename?: 'NewsTagsFields_name_Read';
  permission: Scalars['Boolean']['output'];
};

export type NewsTagsFields_Name_Update = {
  __typename?: 'NewsTagsFields_name_Update';
  permission: Scalars['Boolean']['output'];
};

export type NewsTagsReadAccess = {
  __typename?: 'NewsTagsReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type NewsTagsReadDocAccess = {
  __typename?: 'NewsTagsReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type NewsTagsUpdateAccess = {
  __typename?: 'NewsTagsUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type NewsTagsUpdateDocAccess = {
  __typename?: 'NewsTagsUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type NewsUpdateAccess = {
  __typename?: 'NewsUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type NewsUpdateDocAccess = {
  __typename?: 'NewsUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export enum NewsUpdate_Status_MutationInput {
  Draft = 'draft',
  Published = 'published'
}

export type News_FeatureImage_Alt_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type News_FeatureImage_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type News_FeatureImage_Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type News_FeatureImage_Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type News_FeatureImage_Height_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type News_FeatureImage_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type News_FeatureImage_MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type News_FeatureImage_Sizes__SixteenByNineMedium__Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type News_FeatureImage_Sizes__SixteenByNineMedium__Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type News_FeatureImage_Sizes__SixteenByNineMedium__Height_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type News_FeatureImage_Sizes__SixteenByNineMedium__MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type News_FeatureImage_Sizes__SixteenByNineMedium__Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type News_FeatureImage_Sizes__SixteenByNineMedium__Width_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type News_FeatureImage_Sizes__Thumbnail__Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type News_FeatureImage_Sizes__Thumbnail__Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type News_FeatureImage_Sizes__Thumbnail__Height_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type News_FeatureImage_Sizes__Thumbnail__MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type News_FeatureImage_Sizes__Thumbnail__Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type News_FeatureImage_Sizes__Thumbnail__Width_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type News_FeatureImage_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type News_FeatureImage_Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type News_FeatureImage_Where = {
  AND?: InputMaybe<Array<InputMaybe<News_FeatureImage_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<News_FeatureImage_Where_Or>>>;
  alt?: InputMaybe<News_FeatureImage_Alt_Operator>;
  createdAt?: InputMaybe<News_FeatureImage_CreatedAt_Operator>;
  filename?: InputMaybe<News_FeatureImage_Filename_Operator>;
  filesize?: InputMaybe<News_FeatureImage_Filesize_Operator>;
  height?: InputMaybe<News_FeatureImage_Height_Operator>;
  id?: InputMaybe<News_FeatureImage_Id_Operator>;
  mimeType?: InputMaybe<News_FeatureImage_MimeType_Operator>;
  sizes__sixteenByNineMedium__filename?: InputMaybe<News_FeatureImage_Sizes__SixteenByNineMedium__Filename_Operator>;
  sizes__sixteenByNineMedium__filesize?: InputMaybe<News_FeatureImage_Sizes__SixteenByNineMedium__Filesize_Operator>;
  sizes__sixteenByNineMedium__height?: InputMaybe<News_FeatureImage_Sizes__SixteenByNineMedium__Height_Operator>;
  sizes__sixteenByNineMedium__mimeType?: InputMaybe<News_FeatureImage_Sizes__SixteenByNineMedium__MimeType_Operator>;
  sizes__sixteenByNineMedium__url?: InputMaybe<News_FeatureImage_Sizes__SixteenByNineMedium__Url_Operator>;
  sizes__sixteenByNineMedium__width?: InputMaybe<News_FeatureImage_Sizes__SixteenByNineMedium__Width_Operator>;
  sizes__thumbnail__filename?: InputMaybe<News_FeatureImage_Sizes__Thumbnail__Filename_Operator>;
  sizes__thumbnail__filesize?: InputMaybe<News_FeatureImage_Sizes__Thumbnail__Filesize_Operator>;
  sizes__thumbnail__height?: InputMaybe<News_FeatureImage_Sizes__Thumbnail__Height_Operator>;
  sizes__thumbnail__mimeType?: InputMaybe<News_FeatureImage_Sizes__Thumbnail__MimeType_Operator>;
  sizes__thumbnail__url?: InputMaybe<News_FeatureImage_Sizes__Thumbnail__Url_Operator>;
  sizes__thumbnail__width?: InputMaybe<News_FeatureImage_Sizes__Thumbnail__Width_Operator>;
  updatedAt?: InputMaybe<News_FeatureImage_UpdatedAt_Operator>;
  url?: InputMaybe<News_FeatureImage_Url_Operator>;
  width?: InputMaybe<News_FeatureImage_Width_Operator>;
};

export type News_FeatureImage_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<News_FeatureImage_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<News_FeatureImage_Where_Or>>>;
  alt?: InputMaybe<News_FeatureImage_Alt_Operator>;
  createdAt?: InputMaybe<News_FeatureImage_CreatedAt_Operator>;
  filename?: InputMaybe<News_FeatureImage_Filename_Operator>;
  filesize?: InputMaybe<News_FeatureImage_Filesize_Operator>;
  height?: InputMaybe<News_FeatureImage_Height_Operator>;
  id?: InputMaybe<News_FeatureImage_Id_Operator>;
  mimeType?: InputMaybe<News_FeatureImage_MimeType_Operator>;
  sizes__sixteenByNineMedium__filename?: InputMaybe<News_FeatureImage_Sizes__SixteenByNineMedium__Filename_Operator>;
  sizes__sixteenByNineMedium__filesize?: InputMaybe<News_FeatureImage_Sizes__SixteenByNineMedium__Filesize_Operator>;
  sizes__sixteenByNineMedium__height?: InputMaybe<News_FeatureImage_Sizes__SixteenByNineMedium__Height_Operator>;
  sizes__sixteenByNineMedium__mimeType?: InputMaybe<News_FeatureImage_Sizes__SixteenByNineMedium__MimeType_Operator>;
  sizes__sixteenByNineMedium__url?: InputMaybe<News_FeatureImage_Sizes__SixteenByNineMedium__Url_Operator>;
  sizes__sixteenByNineMedium__width?: InputMaybe<News_FeatureImage_Sizes__SixteenByNineMedium__Width_Operator>;
  sizes__thumbnail__filename?: InputMaybe<News_FeatureImage_Sizes__Thumbnail__Filename_Operator>;
  sizes__thumbnail__filesize?: InputMaybe<News_FeatureImage_Sizes__Thumbnail__Filesize_Operator>;
  sizes__thumbnail__height?: InputMaybe<News_FeatureImage_Sizes__Thumbnail__Height_Operator>;
  sizes__thumbnail__mimeType?: InputMaybe<News_FeatureImage_Sizes__Thumbnail__MimeType_Operator>;
  sizes__thumbnail__url?: InputMaybe<News_FeatureImage_Sizes__Thumbnail__Url_Operator>;
  sizes__thumbnail__width?: InputMaybe<News_FeatureImage_Sizes__Thumbnail__Width_Operator>;
  updatedAt?: InputMaybe<News_FeatureImage_UpdatedAt_Operator>;
  url?: InputMaybe<News_FeatureImage_Url_Operator>;
  width?: InputMaybe<News_FeatureImage_Width_Operator>;
};

export type News_FeatureImage_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<News_FeatureImage_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<News_FeatureImage_Where_Or>>>;
  alt?: InputMaybe<News_FeatureImage_Alt_Operator>;
  createdAt?: InputMaybe<News_FeatureImage_CreatedAt_Operator>;
  filename?: InputMaybe<News_FeatureImage_Filename_Operator>;
  filesize?: InputMaybe<News_FeatureImage_Filesize_Operator>;
  height?: InputMaybe<News_FeatureImage_Height_Operator>;
  id?: InputMaybe<News_FeatureImage_Id_Operator>;
  mimeType?: InputMaybe<News_FeatureImage_MimeType_Operator>;
  sizes__sixteenByNineMedium__filename?: InputMaybe<News_FeatureImage_Sizes__SixteenByNineMedium__Filename_Operator>;
  sizes__sixteenByNineMedium__filesize?: InputMaybe<News_FeatureImage_Sizes__SixteenByNineMedium__Filesize_Operator>;
  sizes__sixteenByNineMedium__height?: InputMaybe<News_FeatureImage_Sizes__SixteenByNineMedium__Height_Operator>;
  sizes__sixteenByNineMedium__mimeType?: InputMaybe<News_FeatureImage_Sizes__SixteenByNineMedium__MimeType_Operator>;
  sizes__sixteenByNineMedium__url?: InputMaybe<News_FeatureImage_Sizes__SixteenByNineMedium__Url_Operator>;
  sizes__sixteenByNineMedium__width?: InputMaybe<News_FeatureImage_Sizes__SixteenByNineMedium__Width_Operator>;
  sizes__thumbnail__filename?: InputMaybe<News_FeatureImage_Sizes__Thumbnail__Filename_Operator>;
  sizes__thumbnail__filesize?: InputMaybe<News_FeatureImage_Sizes__Thumbnail__Filesize_Operator>;
  sizes__thumbnail__height?: InputMaybe<News_FeatureImage_Sizes__Thumbnail__Height_Operator>;
  sizes__thumbnail__mimeType?: InputMaybe<News_FeatureImage_Sizes__Thumbnail__MimeType_Operator>;
  sizes__thumbnail__url?: InputMaybe<News_FeatureImage_Sizes__Thumbnail__Url_Operator>;
  sizes__thumbnail__width?: InputMaybe<News_FeatureImage_Sizes__Thumbnail__Width_Operator>;
  updatedAt?: InputMaybe<News_FeatureImage_UpdatedAt_Operator>;
  url?: InputMaybe<News_FeatureImage_Url_Operator>;
  width?: InputMaybe<News_FeatureImage_Width_Operator>;
};

export type News_FeatureImage_Width_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type News_Author_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type News_Content_Operator = {
  contains?: InputMaybe<Scalars['JSON']['input']>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['JSON']['input']>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
};

export type News_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type News_FeatureImage_Operator = {
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
};

export type News_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type News_PublishedDate_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type News_ReadTime_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type News_Slug_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export enum News_Status {
  Draft = 'draft',
  Published = 'published'
}

export enum News_Status_Input {
  Draft = 'draft',
  Published = 'published'
}

export enum News_Status_MutationInput {
  Draft = 'draft',
  Published = 'published'
}

export type News_Status_Operator = {
  all?: InputMaybe<Array<InputMaybe<News_Status_Input>>>;
  equals?: InputMaybe<News_Status_Input>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<News_Status_Input>>>;
  not_equals?: InputMaybe<News_Status_Input>;
  not_in?: InputMaybe<Array<InputMaybe<News_Status_Input>>>;
};

export type News_Tags_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type News_Title_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type News_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type News_Where = {
  AND?: InputMaybe<Array<InputMaybe<News_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<News_Where_Or>>>;
  author?: InputMaybe<News_Author_Operator>;
  content?: InputMaybe<News_Content_Operator>;
  createdAt?: InputMaybe<News_CreatedAt_Operator>;
  featureImage?: InputMaybe<News_FeatureImage_Operator>;
  id?: InputMaybe<News_Id_Operator>;
  publishedDate?: InputMaybe<News_PublishedDate_Operator>;
  readTime?: InputMaybe<News_ReadTime_Operator>;
  slug?: InputMaybe<News_Slug_Operator>;
  status?: InputMaybe<News_Status_Operator>;
  tags?: InputMaybe<News_Tags_Operator>;
  title?: InputMaybe<News_Title_Operator>;
  updatedAt?: InputMaybe<News_UpdatedAt_Operator>;
};

export type News_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<News_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<News_Where_Or>>>;
  author?: InputMaybe<News_Author_Operator>;
  content?: InputMaybe<News_Content_Operator>;
  createdAt?: InputMaybe<News_CreatedAt_Operator>;
  featureImage?: InputMaybe<News_FeatureImage_Operator>;
  id?: InputMaybe<News_Id_Operator>;
  publishedDate?: InputMaybe<News_PublishedDate_Operator>;
  readTime?: InputMaybe<News_ReadTime_Operator>;
  slug?: InputMaybe<News_Slug_Operator>;
  status?: InputMaybe<News_Status_Operator>;
  tags?: InputMaybe<News_Tags_Operator>;
  title?: InputMaybe<News_Title_Operator>;
  updatedAt?: InputMaybe<News_UpdatedAt_Operator>;
};

export type News_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<News_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<News_Where_Or>>>;
  author?: InputMaybe<News_Author_Operator>;
  content?: InputMaybe<News_Content_Operator>;
  createdAt?: InputMaybe<News_CreatedAt_Operator>;
  featureImage?: InputMaybe<News_FeatureImage_Operator>;
  id?: InputMaybe<News_Id_Operator>;
  publishedDate?: InputMaybe<News_PublishedDate_Operator>;
  readTime?: InputMaybe<News_ReadTime_Operator>;
  slug?: InputMaybe<News_Slug_Operator>;
  status?: InputMaybe<News_Status_Operator>;
  tags?: InputMaybe<News_Tags_Operator>;
  title?: InputMaybe<News_Title_Operator>;
  updatedAt?: InputMaybe<News_UpdatedAt_Operator>;
};

export type PayloadPreference = {
  __typename?: 'PayloadPreference';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  user: PayloadPreference_User_Relationship;
  value?: Maybe<Scalars['JSON']['output']>;
};

export type PayloadPreferenceUpdate_UserRelationshipInput = {
  relationTo?: InputMaybe<PayloadPreferenceUpdate_UserRelationshipInputRelationTo>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export enum PayloadPreferenceUpdate_UserRelationshipInputRelationTo {
  Users = 'users'
}

export type PayloadPreference_User = User;

export type PayloadPreference_UserRelationshipInput = {
  relationTo?: InputMaybe<PayloadPreference_UserRelationshipInputRelationTo>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export enum PayloadPreference_UserRelationshipInputRelationTo {
  Users = 'users'
}

export enum PayloadPreference_User_RelationTo {
  Users = 'users'
}

export type PayloadPreference_User_Relationship = {
  __typename?: 'PayloadPreference_User_Relationship';
  relationTo?: Maybe<PayloadPreference_User_RelationTo>;
  value?: Maybe<PayloadPreference_User>;
};

export type PayloadPreference_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PayloadPreference_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PayloadPreference_Key_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PayloadPreference_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PayloadPreference_User_Relation = {
  relationTo?: InputMaybe<PayloadPreference_User_Relation_RelationTo>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export enum PayloadPreference_User_Relation_RelationTo {
  Users = 'users'
}

export type PayloadPreference_Value_Operator = {
  contains?: InputMaybe<Scalars['JSON']['input']>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  intersects?: InputMaybe<Scalars['JSON']['input']>;
  like?: InputMaybe<Scalars['JSON']['input']>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  within?: InputMaybe<Scalars['JSON']['input']>;
};

export type PayloadPreference_Where = {
  AND?: InputMaybe<Array<InputMaybe<PayloadPreference_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<PayloadPreference_Where_Or>>>;
  createdAt?: InputMaybe<PayloadPreference_CreatedAt_Operator>;
  id?: InputMaybe<PayloadPreference_Id_Operator>;
  key?: InputMaybe<PayloadPreference_Key_Operator>;
  updatedAt?: InputMaybe<PayloadPreference_UpdatedAt_Operator>;
  user?: InputMaybe<PayloadPreference_User_Relation>;
  value?: InputMaybe<PayloadPreference_Value_Operator>;
};

export type PayloadPreference_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<PayloadPreference_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<PayloadPreference_Where_Or>>>;
  createdAt?: InputMaybe<PayloadPreference_CreatedAt_Operator>;
  id?: InputMaybe<PayloadPreference_Id_Operator>;
  key?: InputMaybe<PayloadPreference_Key_Operator>;
  updatedAt?: InputMaybe<PayloadPreference_UpdatedAt_Operator>;
  user?: InputMaybe<PayloadPreference_User_Relation>;
  value?: InputMaybe<PayloadPreference_Value_Operator>;
};

export type PayloadPreference_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<PayloadPreference_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<PayloadPreference_Where_Or>>>;
  createdAt?: InputMaybe<PayloadPreference_CreatedAt_Operator>;
  id?: InputMaybe<PayloadPreference_Id_Operator>;
  key?: InputMaybe<PayloadPreference_Key_Operator>;
  updatedAt?: InputMaybe<PayloadPreference_UpdatedAt_Operator>;
  user?: InputMaybe<PayloadPreference_User_Relation>;
  value?: InputMaybe<PayloadPreference_Value_Operator>;
};

export type PayloadPreferences = {
  __typename?: 'PayloadPreferences';
  docs?: Maybe<Array<Maybe<PayloadPreference>>>;
  hasNextPage?: Maybe<Scalars['Boolean']['output']>;
  hasPrevPage?: Maybe<Scalars['Boolean']['output']>;
  limit?: Maybe<Scalars['Int']['output']>;
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page?: Maybe<Scalars['Int']['output']>;
  pagingCounter?: Maybe<Scalars['Int']['output']>;
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs?: Maybe<Scalars['Int']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type PayloadPreferencesCreateAccess = {
  __typename?: 'PayloadPreferencesCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreferencesCreateDocAccess = {
  __typename?: 'PayloadPreferencesCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreferencesDeleteAccess = {
  __typename?: 'PayloadPreferencesDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreferencesDeleteDocAccess = {
  __typename?: 'PayloadPreferencesDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreferencesDocAccessFields = {
  __typename?: 'PayloadPreferencesDocAccessFields';
  createdAt?: Maybe<PayloadPreferencesDocAccessFields_CreatedAt>;
  key?: Maybe<PayloadPreferencesDocAccessFields_Key>;
  updatedAt?: Maybe<PayloadPreferencesDocAccessFields_UpdatedAt>;
  user?: Maybe<PayloadPreferencesDocAccessFields_User>;
  value?: Maybe<PayloadPreferencesDocAccessFields_Value>;
};

export type PayloadPreferencesDocAccessFields_CreatedAt = {
  __typename?: 'PayloadPreferencesDocAccessFields_createdAt';
  create?: Maybe<PayloadPreferencesDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<PayloadPreferencesDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<PayloadPreferencesDocAccessFields_CreatedAt_Read>;
  update?: Maybe<PayloadPreferencesDocAccessFields_CreatedAt_Update>;
};

export type PayloadPreferencesDocAccessFields_CreatedAt_Create = {
  __typename?: 'PayloadPreferencesDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_CreatedAt_Delete = {
  __typename?: 'PayloadPreferencesDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_CreatedAt_Read = {
  __typename?: 'PayloadPreferencesDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_CreatedAt_Update = {
  __typename?: 'PayloadPreferencesDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Key = {
  __typename?: 'PayloadPreferencesDocAccessFields_key';
  create?: Maybe<PayloadPreferencesDocAccessFields_Key_Create>;
  delete?: Maybe<PayloadPreferencesDocAccessFields_Key_Delete>;
  read?: Maybe<PayloadPreferencesDocAccessFields_Key_Read>;
  update?: Maybe<PayloadPreferencesDocAccessFields_Key_Update>;
};

export type PayloadPreferencesDocAccessFields_Key_Create = {
  __typename?: 'PayloadPreferencesDocAccessFields_key_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Key_Delete = {
  __typename?: 'PayloadPreferencesDocAccessFields_key_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Key_Read = {
  __typename?: 'PayloadPreferencesDocAccessFields_key_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Key_Update = {
  __typename?: 'PayloadPreferencesDocAccessFields_key_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_UpdatedAt = {
  __typename?: 'PayloadPreferencesDocAccessFields_updatedAt';
  create?: Maybe<PayloadPreferencesDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<PayloadPreferencesDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<PayloadPreferencesDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<PayloadPreferencesDocAccessFields_UpdatedAt_Update>;
};

export type PayloadPreferencesDocAccessFields_UpdatedAt_Create = {
  __typename?: 'PayloadPreferencesDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'PayloadPreferencesDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_UpdatedAt_Read = {
  __typename?: 'PayloadPreferencesDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_UpdatedAt_Update = {
  __typename?: 'PayloadPreferencesDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_User = {
  __typename?: 'PayloadPreferencesDocAccessFields_user';
  create?: Maybe<PayloadPreferencesDocAccessFields_User_Create>;
  delete?: Maybe<PayloadPreferencesDocAccessFields_User_Delete>;
  read?: Maybe<PayloadPreferencesDocAccessFields_User_Read>;
  update?: Maybe<PayloadPreferencesDocAccessFields_User_Update>;
};

export type PayloadPreferencesDocAccessFields_User_Create = {
  __typename?: 'PayloadPreferencesDocAccessFields_user_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_User_Delete = {
  __typename?: 'PayloadPreferencesDocAccessFields_user_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_User_Read = {
  __typename?: 'PayloadPreferencesDocAccessFields_user_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_User_Update = {
  __typename?: 'PayloadPreferencesDocAccessFields_user_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Value = {
  __typename?: 'PayloadPreferencesDocAccessFields_value';
  create?: Maybe<PayloadPreferencesDocAccessFields_Value_Create>;
  delete?: Maybe<PayloadPreferencesDocAccessFields_Value_Delete>;
  read?: Maybe<PayloadPreferencesDocAccessFields_Value_Read>;
  update?: Maybe<PayloadPreferencesDocAccessFields_Value_Update>;
};

export type PayloadPreferencesDocAccessFields_Value_Create = {
  __typename?: 'PayloadPreferencesDocAccessFields_value_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Value_Delete = {
  __typename?: 'PayloadPreferencesDocAccessFields_value_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Value_Read = {
  __typename?: 'PayloadPreferencesDocAccessFields_value_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Value_Update = {
  __typename?: 'PayloadPreferencesDocAccessFields_value_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields = {
  __typename?: 'PayloadPreferencesFields';
  createdAt?: Maybe<PayloadPreferencesFields_CreatedAt>;
  key?: Maybe<PayloadPreferencesFields_Key>;
  updatedAt?: Maybe<PayloadPreferencesFields_UpdatedAt>;
  user?: Maybe<PayloadPreferencesFields_User>;
  value?: Maybe<PayloadPreferencesFields_Value>;
};

export type PayloadPreferencesFields_CreatedAt = {
  __typename?: 'PayloadPreferencesFields_createdAt';
  create?: Maybe<PayloadPreferencesFields_CreatedAt_Create>;
  delete?: Maybe<PayloadPreferencesFields_CreatedAt_Delete>;
  read?: Maybe<PayloadPreferencesFields_CreatedAt_Read>;
  update?: Maybe<PayloadPreferencesFields_CreatedAt_Update>;
};

export type PayloadPreferencesFields_CreatedAt_Create = {
  __typename?: 'PayloadPreferencesFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_CreatedAt_Delete = {
  __typename?: 'PayloadPreferencesFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_CreatedAt_Read = {
  __typename?: 'PayloadPreferencesFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_CreatedAt_Update = {
  __typename?: 'PayloadPreferencesFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Key = {
  __typename?: 'PayloadPreferencesFields_key';
  create?: Maybe<PayloadPreferencesFields_Key_Create>;
  delete?: Maybe<PayloadPreferencesFields_Key_Delete>;
  read?: Maybe<PayloadPreferencesFields_Key_Read>;
  update?: Maybe<PayloadPreferencesFields_Key_Update>;
};

export type PayloadPreferencesFields_Key_Create = {
  __typename?: 'PayloadPreferencesFields_key_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Key_Delete = {
  __typename?: 'PayloadPreferencesFields_key_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Key_Read = {
  __typename?: 'PayloadPreferencesFields_key_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Key_Update = {
  __typename?: 'PayloadPreferencesFields_key_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_UpdatedAt = {
  __typename?: 'PayloadPreferencesFields_updatedAt';
  create?: Maybe<PayloadPreferencesFields_UpdatedAt_Create>;
  delete?: Maybe<PayloadPreferencesFields_UpdatedAt_Delete>;
  read?: Maybe<PayloadPreferencesFields_UpdatedAt_Read>;
  update?: Maybe<PayloadPreferencesFields_UpdatedAt_Update>;
};

export type PayloadPreferencesFields_UpdatedAt_Create = {
  __typename?: 'PayloadPreferencesFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_UpdatedAt_Delete = {
  __typename?: 'PayloadPreferencesFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_UpdatedAt_Read = {
  __typename?: 'PayloadPreferencesFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_UpdatedAt_Update = {
  __typename?: 'PayloadPreferencesFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_User = {
  __typename?: 'PayloadPreferencesFields_user';
  create?: Maybe<PayloadPreferencesFields_User_Create>;
  delete?: Maybe<PayloadPreferencesFields_User_Delete>;
  read?: Maybe<PayloadPreferencesFields_User_Read>;
  update?: Maybe<PayloadPreferencesFields_User_Update>;
};

export type PayloadPreferencesFields_User_Create = {
  __typename?: 'PayloadPreferencesFields_user_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_User_Delete = {
  __typename?: 'PayloadPreferencesFields_user_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_User_Read = {
  __typename?: 'PayloadPreferencesFields_user_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_User_Update = {
  __typename?: 'PayloadPreferencesFields_user_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Value = {
  __typename?: 'PayloadPreferencesFields_value';
  create?: Maybe<PayloadPreferencesFields_Value_Create>;
  delete?: Maybe<PayloadPreferencesFields_Value_Delete>;
  read?: Maybe<PayloadPreferencesFields_Value_Read>;
  update?: Maybe<PayloadPreferencesFields_Value_Update>;
};

export type PayloadPreferencesFields_Value_Create = {
  __typename?: 'PayloadPreferencesFields_value_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Value_Delete = {
  __typename?: 'PayloadPreferencesFields_value_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Value_Read = {
  __typename?: 'PayloadPreferencesFields_value_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Value_Update = {
  __typename?: 'PayloadPreferencesFields_value_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesReadAccess = {
  __typename?: 'PayloadPreferencesReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreferencesReadDocAccess = {
  __typename?: 'PayloadPreferencesReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreferencesUpdateAccess = {
  __typename?: 'PayloadPreferencesUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreferencesUpdateDocAccess = {
  __typename?: 'PayloadPreferencesUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Query = {
  __typename?: 'Query';
  Access?: Maybe<Access>;
  Archive?: Maybe<Archive>;
  ArchiveCategories?: Maybe<ArchiveCategories>;
  ArchiveCategory?: Maybe<ArchiveCategory>;
  Archives?: Maybe<Archives>;
  EditorialBoard?: Maybe<EditorialBoard>;
  Guideline?: Maybe<Guideline>;
  Guidelines?: Maybe<Guidelines>;
  Media?: Maybe<Media>;
  News?: Maybe<News>;
  NewsTag?: Maybe<NewsTag>;
  NewsTags?: Maybe<NewsTags>;
  PayloadPreference?: Maybe<PayloadPreference>;
  PayloadPreferences?: Maybe<PayloadPreferences>;
  User?: Maybe<User>;
  Users?: Maybe<Users>;
  allMedia?: Maybe<AllMedia>;
  allNews?: Maybe<AllNews>;
  docAccessArchive?: Maybe<ArchivesDocAccess>;
  docAccessArchiveCategory?: Maybe<Archive_CategoriesDocAccess>;
  docAccessEditorialBoard?: Maybe<Editorial_BoardDocAccess>;
  docAccessGuideline?: Maybe<GuidelinesDocAccess>;
  docAccessMedia?: Maybe<MediaDocAccess>;
  docAccessNews?: Maybe<NewsDocAccess>;
  docAccessNewsTag?: Maybe<News_TagsDocAccess>;
  docAccessPayloadPreference?: Maybe<Payload_PreferencesDocAccess>;
  docAccessUser?: Maybe<UsersDocAccess>;
  initializedUser?: Maybe<Scalars['Boolean']['output']>;
  meUser?: Maybe<UsersMe>;
};


export type QueryArchiveArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
};


export type QueryArchiveCategoriesArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<ArchiveCategory_Where>;
};


export type QueryArchiveCategoryArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
};


export type QueryArchivesArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Archive_Where>;
};


export type QueryEditorialBoardArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryGuidelineArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
};


export type QueryGuidelinesArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Guideline_Where>;
};


export type QueryMediaArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
};


export type QueryNewsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
};


export type QueryNewsTagArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
};


export type QueryNewsTagsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<NewsTag_Where>;
};


export type QueryPayloadPreferenceArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
};


export type QueryPayloadPreferencesArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<PayloadPreference_Where>;
};


export type QueryUserArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['String']['input'];
};


export type QueryUsersArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<User_Where>;
};


export type QueryAllMediaArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Media_Where>;
};


export type QueryAllNewsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<News_Where>;
};


export type QueryDocAccessArchiveArgs = {
  id: Scalars['String']['input'];
};


export type QueryDocAccessArchiveCategoryArgs = {
  id: Scalars['String']['input'];
};


export type QueryDocAccessGuidelineArgs = {
  id: Scalars['String']['input'];
};


export type QueryDocAccessMediaArgs = {
  id: Scalars['String']['input'];
};


export type QueryDocAccessNewsArgs = {
  id: Scalars['String']['input'];
};


export type QueryDocAccessNewsTagArgs = {
  id: Scalars['String']['input'];
};


export type QueryDocAccessPayloadPreferenceArgs = {
  id: Scalars['String']['input'];
};


export type QueryDocAccessUserArgs = {
  id: Scalars['String']['input'];
};

export type User = {
  __typename?: 'User';
  _verificationToken?: Maybe<Scalars['String']['output']>;
  _verified?: Maybe<Scalars['Boolean']['output']>;
  avatarImage?: Maybe<Media>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email: Scalars['EmailAddress']['output'];
  hash?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  lockUntil?: Maybe<Scalars['DateTime']['output']>;
  loginAttempts?: Maybe<Scalars['Float']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  password: Scalars['String']['output'];
  resetPasswordExpiration?: Maybe<Scalars['DateTime']['output']>;
  resetPasswordToken?: Maybe<Scalars['String']['output']>;
  role: User_Role;
  salt?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type UserAvatarImageArgs = {
  where?: InputMaybe<User_AvatarImage_Where>;
};

export enum UserUpdate_Role_MutationInput {
  Admin = 'admin',
  User = 'user'
}

export type User_AvatarImage_Alt_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type User_AvatarImage_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type User_AvatarImage_Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type User_AvatarImage_Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type User_AvatarImage_Height_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type User_AvatarImage_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type User_AvatarImage_MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type User_AvatarImage_Sizes__SixteenByNineMedium__Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type User_AvatarImage_Sizes__SixteenByNineMedium__Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type User_AvatarImage_Sizes__SixteenByNineMedium__Height_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type User_AvatarImage_Sizes__SixteenByNineMedium__MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type User_AvatarImage_Sizes__SixteenByNineMedium__Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type User_AvatarImage_Sizes__SixteenByNineMedium__Width_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type User_AvatarImage_Sizes__Thumbnail__Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type User_AvatarImage_Sizes__Thumbnail__Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type User_AvatarImage_Sizes__Thumbnail__Height_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type User_AvatarImage_Sizes__Thumbnail__MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type User_AvatarImage_Sizes__Thumbnail__Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type User_AvatarImage_Sizes__Thumbnail__Width_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type User_AvatarImage_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type User_AvatarImage_Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type User_AvatarImage_Where = {
  AND?: InputMaybe<Array<InputMaybe<User_AvatarImage_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<User_AvatarImage_Where_Or>>>;
  alt?: InputMaybe<User_AvatarImage_Alt_Operator>;
  createdAt?: InputMaybe<User_AvatarImage_CreatedAt_Operator>;
  filename?: InputMaybe<User_AvatarImage_Filename_Operator>;
  filesize?: InputMaybe<User_AvatarImage_Filesize_Operator>;
  height?: InputMaybe<User_AvatarImage_Height_Operator>;
  id?: InputMaybe<User_AvatarImage_Id_Operator>;
  mimeType?: InputMaybe<User_AvatarImage_MimeType_Operator>;
  sizes__sixteenByNineMedium__filename?: InputMaybe<User_AvatarImage_Sizes__SixteenByNineMedium__Filename_Operator>;
  sizes__sixteenByNineMedium__filesize?: InputMaybe<User_AvatarImage_Sizes__SixteenByNineMedium__Filesize_Operator>;
  sizes__sixteenByNineMedium__height?: InputMaybe<User_AvatarImage_Sizes__SixteenByNineMedium__Height_Operator>;
  sizes__sixteenByNineMedium__mimeType?: InputMaybe<User_AvatarImage_Sizes__SixteenByNineMedium__MimeType_Operator>;
  sizes__sixteenByNineMedium__url?: InputMaybe<User_AvatarImage_Sizes__SixteenByNineMedium__Url_Operator>;
  sizes__sixteenByNineMedium__width?: InputMaybe<User_AvatarImage_Sizes__SixteenByNineMedium__Width_Operator>;
  sizes__thumbnail__filename?: InputMaybe<User_AvatarImage_Sizes__Thumbnail__Filename_Operator>;
  sizes__thumbnail__filesize?: InputMaybe<User_AvatarImage_Sizes__Thumbnail__Filesize_Operator>;
  sizes__thumbnail__height?: InputMaybe<User_AvatarImage_Sizes__Thumbnail__Height_Operator>;
  sizes__thumbnail__mimeType?: InputMaybe<User_AvatarImage_Sizes__Thumbnail__MimeType_Operator>;
  sizes__thumbnail__url?: InputMaybe<User_AvatarImage_Sizes__Thumbnail__Url_Operator>;
  sizes__thumbnail__width?: InputMaybe<User_AvatarImage_Sizes__Thumbnail__Width_Operator>;
  updatedAt?: InputMaybe<User_AvatarImage_UpdatedAt_Operator>;
  url?: InputMaybe<User_AvatarImage_Url_Operator>;
  width?: InputMaybe<User_AvatarImage_Width_Operator>;
};

export type User_AvatarImage_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<User_AvatarImage_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<User_AvatarImage_Where_Or>>>;
  alt?: InputMaybe<User_AvatarImage_Alt_Operator>;
  createdAt?: InputMaybe<User_AvatarImage_CreatedAt_Operator>;
  filename?: InputMaybe<User_AvatarImage_Filename_Operator>;
  filesize?: InputMaybe<User_AvatarImage_Filesize_Operator>;
  height?: InputMaybe<User_AvatarImage_Height_Operator>;
  id?: InputMaybe<User_AvatarImage_Id_Operator>;
  mimeType?: InputMaybe<User_AvatarImage_MimeType_Operator>;
  sizes__sixteenByNineMedium__filename?: InputMaybe<User_AvatarImage_Sizes__SixteenByNineMedium__Filename_Operator>;
  sizes__sixteenByNineMedium__filesize?: InputMaybe<User_AvatarImage_Sizes__SixteenByNineMedium__Filesize_Operator>;
  sizes__sixteenByNineMedium__height?: InputMaybe<User_AvatarImage_Sizes__SixteenByNineMedium__Height_Operator>;
  sizes__sixteenByNineMedium__mimeType?: InputMaybe<User_AvatarImage_Sizes__SixteenByNineMedium__MimeType_Operator>;
  sizes__sixteenByNineMedium__url?: InputMaybe<User_AvatarImage_Sizes__SixteenByNineMedium__Url_Operator>;
  sizes__sixteenByNineMedium__width?: InputMaybe<User_AvatarImage_Sizes__SixteenByNineMedium__Width_Operator>;
  sizes__thumbnail__filename?: InputMaybe<User_AvatarImage_Sizes__Thumbnail__Filename_Operator>;
  sizes__thumbnail__filesize?: InputMaybe<User_AvatarImage_Sizes__Thumbnail__Filesize_Operator>;
  sizes__thumbnail__height?: InputMaybe<User_AvatarImage_Sizes__Thumbnail__Height_Operator>;
  sizes__thumbnail__mimeType?: InputMaybe<User_AvatarImage_Sizes__Thumbnail__MimeType_Operator>;
  sizes__thumbnail__url?: InputMaybe<User_AvatarImage_Sizes__Thumbnail__Url_Operator>;
  sizes__thumbnail__width?: InputMaybe<User_AvatarImage_Sizes__Thumbnail__Width_Operator>;
  updatedAt?: InputMaybe<User_AvatarImage_UpdatedAt_Operator>;
  url?: InputMaybe<User_AvatarImage_Url_Operator>;
  width?: InputMaybe<User_AvatarImage_Width_Operator>;
};

export type User_AvatarImage_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<User_AvatarImage_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<User_AvatarImage_Where_Or>>>;
  alt?: InputMaybe<User_AvatarImage_Alt_Operator>;
  createdAt?: InputMaybe<User_AvatarImage_CreatedAt_Operator>;
  filename?: InputMaybe<User_AvatarImage_Filename_Operator>;
  filesize?: InputMaybe<User_AvatarImage_Filesize_Operator>;
  height?: InputMaybe<User_AvatarImage_Height_Operator>;
  id?: InputMaybe<User_AvatarImage_Id_Operator>;
  mimeType?: InputMaybe<User_AvatarImage_MimeType_Operator>;
  sizes__sixteenByNineMedium__filename?: InputMaybe<User_AvatarImage_Sizes__SixteenByNineMedium__Filename_Operator>;
  sizes__sixteenByNineMedium__filesize?: InputMaybe<User_AvatarImage_Sizes__SixteenByNineMedium__Filesize_Operator>;
  sizes__sixteenByNineMedium__height?: InputMaybe<User_AvatarImage_Sizes__SixteenByNineMedium__Height_Operator>;
  sizes__sixteenByNineMedium__mimeType?: InputMaybe<User_AvatarImage_Sizes__SixteenByNineMedium__MimeType_Operator>;
  sizes__sixteenByNineMedium__url?: InputMaybe<User_AvatarImage_Sizes__SixteenByNineMedium__Url_Operator>;
  sizes__sixteenByNineMedium__width?: InputMaybe<User_AvatarImage_Sizes__SixteenByNineMedium__Width_Operator>;
  sizes__thumbnail__filename?: InputMaybe<User_AvatarImage_Sizes__Thumbnail__Filename_Operator>;
  sizes__thumbnail__filesize?: InputMaybe<User_AvatarImage_Sizes__Thumbnail__Filesize_Operator>;
  sizes__thumbnail__height?: InputMaybe<User_AvatarImage_Sizes__Thumbnail__Height_Operator>;
  sizes__thumbnail__mimeType?: InputMaybe<User_AvatarImage_Sizes__Thumbnail__MimeType_Operator>;
  sizes__thumbnail__url?: InputMaybe<User_AvatarImage_Sizes__Thumbnail__Url_Operator>;
  sizes__thumbnail__width?: InputMaybe<User_AvatarImage_Sizes__Thumbnail__Width_Operator>;
  updatedAt?: InputMaybe<User_AvatarImage_UpdatedAt_Operator>;
  url?: InputMaybe<User_AvatarImage_Url_Operator>;
  width?: InputMaybe<User_AvatarImage_Width_Operator>;
};

export type User_AvatarImage_Width_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type User__Verified_Operator = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  not_equals?: InputMaybe<Scalars['Boolean']['input']>;
};

export type User_AvatarImage_Operator = {
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
};

export type User_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type User_Email_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['EmailAddress']['input']>>>;
  contains?: InputMaybe<Scalars['EmailAddress']['input']>;
  equals?: InputMaybe<Scalars['EmailAddress']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['EmailAddress']['input']>>>;
  like?: InputMaybe<Scalars['EmailAddress']['input']>;
  not_equals?: InputMaybe<Scalars['EmailAddress']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['EmailAddress']['input']>>>;
};

export type User_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type User_Name_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export enum User_Role {
  Admin = 'admin',
  User = 'user'
}

export enum User_Role_Input {
  Admin = 'admin',
  User = 'user'
}

export enum User_Role_MutationInput {
  Admin = 'admin',
  User = 'user'
}

export type User_Role_Operator = {
  all?: InputMaybe<Array<InputMaybe<User_Role_Input>>>;
  equals?: InputMaybe<User_Role_Input>;
  in?: InputMaybe<Array<InputMaybe<User_Role_Input>>>;
  not_equals?: InputMaybe<User_Role_Input>;
  not_in?: InputMaybe<Array<InputMaybe<User_Role_Input>>>;
};

export type User_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type User_Where = {
  AND?: InputMaybe<Array<InputMaybe<User_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<User_Where_Or>>>;
  _verified?: InputMaybe<User__Verified_Operator>;
  avatarImage?: InputMaybe<User_AvatarImage_Operator>;
  createdAt?: InputMaybe<User_CreatedAt_Operator>;
  email?: InputMaybe<User_Email_Operator>;
  id?: InputMaybe<User_Id_Operator>;
  name?: InputMaybe<User_Name_Operator>;
  role?: InputMaybe<User_Role_Operator>;
  updatedAt?: InputMaybe<User_UpdatedAt_Operator>;
};

export type User_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<User_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<User_Where_Or>>>;
  _verified?: InputMaybe<User__Verified_Operator>;
  avatarImage?: InputMaybe<User_AvatarImage_Operator>;
  createdAt?: InputMaybe<User_CreatedAt_Operator>;
  email?: InputMaybe<User_Email_Operator>;
  id?: InputMaybe<User_Id_Operator>;
  name?: InputMaybe<User_Name_Operator>;
  role?: InputMaybe<User_Role_Operator>;
  updatedAt?: InputMaybe<User_UpdatedAt_Operator>;
};

export type User_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<User_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<User_Where_Or>>>;
  _verified?: InputMaybe<User__Verified_Operator>;
  avatarImage?: InputMaybe<User_AvatarImage_Operator>;
  createdAt?: InputMaybe<User_CreatedAt_Operator>;
  email?: InputMaybe<User_Email_Operator>;
  id?: InputMaybe<User_Id_Operator>;
  name?: InputMaybe<User_Name_Operator>;
  role?: InputMaybe<User_Role_Operator>;
  updatedAt?: InputMaybe<User_UpdatedAt_Operator>;
};

export type Users = {
  __typename?: 'Users';
  docs?: Maybe<Array<Maybe<User>>>;
  hasNextPage?: Maybe<Scalars['Boolean']['output']>;
  hasPrevPage?: Maybe<Scalars['Boolean']['output']>;
  limit?: Maybe<Scalars['Int']['output']>;
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page?: Maybe<Scalars['Int']['output']>;
  pagingCounter?: Maybe<Scalars['Int']['output']>;
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs?: Maybe<Scalars['Int']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type UsersCreateAccess = {
  __typename?: 'UsersCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersCreateDocAccess = {
  __typename?: 'UsersCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersDeleteAccess = {
  __typename?: 'UsersDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersDeleteDocAccess = {
  __typename?: 'UsersDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersDocAccessFields = {
  __typename?: 'UsersDocAccessFields';
  _verified?: Maybe<UsersDocAccessFields__Verified>;
  avatarImage?: Maybe<UsersDocAccessFields_AvatarImage>;
  createdAt?: Maybe<UsersDocAccessFields_CreatedAt>;
  email?: Maybe<UsersDocAccessFields_Email>;
  name?: Maybe<UsersDocAccessFields_Name>;
  password?: Maybe<UsersDocAccessFields_Password>;
  role?: Maybe<UsersDocAccessFields_Role>;
  updatedAt?: Maybe<UsersDocAccessFields_UpdatedAt>;
};

export type UsersDocAccessFields__Verified = {
  __typename?: 'UsersDocAccessFields__verified';
  create?: Maybe<UsersDocAccessFields__Verified_Create>;
  delete?: Maybe<UsersDocAccessFields__Verified_Delete>;
  read?: Maybe<UsersDocAccessFields__Verified_Read>;
  update?: Maybe<UsersDocAccessFields__Verified_Update>;
};

export type UsersDocAccessFields__Verified_Create = {
  __typename?: 'UsersDocAccessFields__verified_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields__Verified_Delete = {
  __typename?: 'UsersDocAccessFields__verified_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields__Verified_Read = {
  __typename?: 'UsersDocAccessFields__verified_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields__Verified_Update = {
  __typename?: 'UsersDocAccessFields__verified_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_AvatarImage = {
  __typename?: 'UsersDocAccessFields_avatarImage';
  create?: Maybe<UsersDocAccessFields_AvatarImage_Create>;
  delete?: Maybe<UsersDocAccessFields_AvatarImage_Delete>;
  read?: Maybe<UsersDocAccessFields_AvatarImage_Read>;
  update?: Maybe<UsersDocAccessFields_AvatarImage_Update>;
};

export type UsersDocAccessFields_AvatarImage_Create = {
  __typename?: 'UsersDocAccessFields_avatarImage_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_AvatarImage_Delete = {
  __typename?: 'UsersDocAccessFields_avatarImage_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_AvatarImage_Read = {
  __typename?: 'UsersDocAccessFields_avatarImage_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_AvatarImage_Update = {
  __typename?: 'UsersDocAccessFields_avatarImage_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_CreatedAt = {
  __typename?: 'UsersDocAccessFields_createdAt';
  create?: Maybe<UsersDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<UsersDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<UsersDocAccessFields_CreatedAt_Read>;
  update?: Maybe<UsersDocAccessFields_CreatedAt_Update>;
};

export type UsersDocAccessFields_CreatedAt_Create = {
  __typename?: 'UsersDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_CreatedAt_Delete = {
  __typename?: 'UsersDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_CreatedAt_Read = {
  __typename?: 'UsersDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_CreatedAt_Update = {
  __typename?: 'UsersDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Email = {
  __typename?: 'UsersDocAccessFields_email';
  create?: Maybe<UsersDocAccessFields_Email_Create>;
  delete?: Maybe<UsersDocAccessFields_Email_Delete>;
  read?: Maybe<UsersDocAccessFields_Email_Read>;
  update?: Maybe<UsersDocAccessFields_Email_Update>;
};

export type UsersDocAccessFields_Email_Create = {
  __typename?: 'UsersDocAccessFields_email_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Email_Delete = {
  __typename?: 'UsersDocAccessFields_email_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Email_Read = {
  __typename?: 'UsersDocAccessFields_email_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Email_Update = {
  __typename?: 'UsersDocAccessFields_email_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Name = {
  __typename?: 'UsersDocAccessFields_name';
  create?: Maybe<UsersDocAccessFields_Name_Create>;
  delete?: Maybe<UsersDocAccessFields_Name_Delete>;
  read?: Maybe<UsersDocAccessFields_Name_Read>;
  update?: Maybe<UsersDocAccessFields_Name_Update>;
};

export type UsersDocAccessFields_Name_Create = {
  __typename?: 'UsersDocAccessFields_name_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Name_Delete = {
  __typename?: 'UsersDocAccessFields_name_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Name_Read = {
  __typename?: 'UsersDocAccessFields_name_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Name_Update = {
  __typename?: 'UsersDocAccessFields_name_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Password = {
  __typename?: 'UsersDocAccessFields_password';
  create?: Maybe<UsersDocAccessFields_Password_Create>;
  delete?: Maybe<UsersDocAccessFields_Password_Delete>;
  read?: Maybe<UsersDocAccessFields_Password_Read>;
  update?: Maybe<UsersDocAccessFields_Password_Update>;
};

export type UsersDocAccessFields_Password_Create = {
  __typename?: 'UsersDocAccessFields_password_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Password_Delete = {
  __typename?: 'UsersDocAccessFields_password_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Password_Read = {
  __typename?: 'UsersDocAccessFields_password_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Password_Update = {
  __typename?: 'UsersDocAccessFields_password_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Role = {
  __typename?: 'UsersDocAccessFields_role';
  create?: Maybe<UsersDocAccessFields_Role_Create>;
  delete?: Maybe<UsersDocAccessFields_Role_Delete>;
  read?: Maybe<UsersDocAccessFields_Role_Read>;
  update?: Maybe<UsersDocAccessFields_Role_Update>;
};

export type UsersDocAccessFields_Role_Create = {
  __typename?: 'UsersDocAccessFields_role_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Role_Delete = {
  __typename?: 'UsersDocAccessFields_role_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Role_Read = {
  __typename?: 'UsersDocAccessFields_role_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Role_Update = {
  __typename?: 'UsersDocAccessFields_role_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_UpdatedAt = {
  __typename?: 'UsersDocAccessFields_updatedAt';
  create?: Maybe<UsersDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<UsersDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<UsersDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<UsersDocAccessFields_UpdatedAt_Update>;
};

export type UsersDocAccessFields_UpdatedAt_Create = {
  __typename?: 'UsersDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'UsersDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_UpdatedAt_Read = {
  __typename?: 'UsersDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_UpdatedAt_Update = {
  __typename?: 'UsersDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields = {
  __typename?: 'UsersFields';
  _verified?: Maybe<UsersFields__Verified>;
  avatarImage?: Maybe<UsersFields_AvatarImage>;
  createdAt?: Maybe<UsersFields_CreatedAt>;
  email?: Maybe<UsersFields_Email>;
  name?: Maybe<UsersFields_Name>;
  password?: Maybe<UsersFields_Password>;
  role?: Maybe<UsersFields_Role>;
  updatedAt?: Maybe<UsersFields_UpdatedAt>;
};

export type UsersFields__Verified = {
  __typename?: 'UsersFields__verified';
  create?: Maybe<UsersFields__Verified_Create>;
  delete?: Maybe<UsersFields__Verified_Delete>;
  read?: Maybe<UsersFields__Verified_Read>;
  update?: Maybe<UsersFields__Verified_Update>;
};

export type UsersFields__Verified_Create = {
  __typename?: 'UsersFields__verified_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields__Verified_Delete = {
  __typename?: 'UsersFields__verified_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields__Verified_Read = {
  __typename?: 'UsersFields__verified_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields__Verified_Update = {
  __typename?: 'UsersFields__verified_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_AvatarImage = {
  __typename?: 'UsersFields_avatarImage';
  create?: Maybe<UsersFields_AvatarImage_Create>;
  delete?: Maybe<UsersFields_AvatarImage_Delete>;
  read?: Maybe<UsersFields_AvatarImage_Read>;
  update?: Maybe<UsersFields_AvatarImage_Update>;
};

export type UsersFields_AvatarImage_Create = {
  __typename?: 'UsersFields_avatarImage_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_AvatarImage_Delete = {
  __typename?: 'UsersFields_avatarImage_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_AvatarImage_Read = {
  __typename?: 'UsersFields_avatarImage_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_AvatarImage_Update = {
  __typename?: 'UsersFields_avatarImage_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_CreatedAt = {
  __typename?: 'UsersFields_createdAt';
  create?: Maybe<UsersFields_CreatedAt_Create>;
  delete?: Maybe<UsersFields_CreatedAt_Delete>;
  read?: Maybe<UsersFields_CreatedAt_Read>;
  update?: Maybe<UsersFields_CreatedAt_Update>;
};

export type UsersFields_CreatedAt_Create = {
  __typename?: 'UsersFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_CreatedAt_Delete = {
  __typename?: 'UsersFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_CreatedAt_Read = {
  __typename?: 'UsersFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_CreatedAt_Update = {
  __typename?: 'UsersFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Email = {
  __typename?: 'UsersFields_email';
  create?: Maybe<UsersFields_Email_Create>;
  delete?: Maybe<UsersFields_Email_Delete>;
  read?: Maybe<UsersFields_Email_Read>;
  update?: Maybe<UsersFields_Email_Update>;
};

export type UsersFields_Email_Create = {
  __typename?: 'UsersFields_email_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Email_Delete = {
  __typename?: 'UsersFields_email_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Email_Read = {
  __typename?: 'UsersFields_email_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Email_Update = {
  __typename?: 'UsersFields_email_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Name = {
  __typename?: 'UsersFields_name';
  create?: Maybe<UsersFields_Name_Create>;
  delete?: Maybe<UsersFields_Name_Delete>;
  read?: Maybe<UsersFields_Name_Read>;
  update?: Maybe<UsersFields_Name_Update>;
};

export type UsersFields_Name_Create = {
  __typename?: 'UsersFields_name_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Name_Delete = {
  __typename?: 'UsersFields_name_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Name_Read = {
  __typename?: 'UsersFields_name_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Name_Update = {
  __typename?: 'UsersFields_name_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Password = {
  __typename?: 'UsersFields_password';
  create?: Maybe<UsersFields_Password_Create>;
  delete?: Maybe<UsersFields_Password_Delete>;
  read?: Maybe<UsersFields_Password_Read>;
  update?: Maybe<UsersFields_Password_Update>;
};

export type UsersFields_Password_Create = {
  __typename?: 'UsersFields_password_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Password_Delete = {
  __typename?: 'UsersFields_password_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Password_Read = {
  __typename?: 'UsersFields_password_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Password_Update = {
  __typename?: 'UsersFields_password_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Role = {
  __typename?: 'UsersFields_role';
  create?: Maybe<UsersFields_Role_Create>;
  delete?: Maybe<UsersFields_Role_Delete>;
  read?: Maybe<UsersFields_Role_Read>;
  update?: Maybe<UsersFields_Role_Update>;
};

export type UsersFields_Role_Create = {
  __typename?: 'UsersFields_role_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Role_Delete = {
  __typename?: 'UsersFields_role_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Role_Read = {
  __typename?: 'UsersFields_role_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Role_Update = {
  __typename?: 'UsersFields_role_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_UpdatedAt = {
  __typename?: 'UsersFields_updatedAt';
  create?: Maybe<UsersFields_UpdatedAt_Create>;
  delete?: Maybe<UsersFields_UpdatedAt_Delete>;
  read?: Maybe<UsersFields_UpdatedAt_Read>;
  update?: Maybe<UsersFields_UpdatedAt_Update>;
};

export type UsersFields_UpdatedAt_Create = {
  __typename?: 'UsersFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_UpdatedAt_Delete = {
  __typename?: 'UsersFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_UpdatedAt_Read = {
  __typename?: 'UsersFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_UpdatedAt_Update = {
  __typename?: 'UsersFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersReadAccess = {
  __typename?: 'UsersReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersReadDocAccess = {
  __typename?: 'UsersReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersUnlockAccess = {
  __typename?: 'UsersUnlockAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersUnlockDocAccess = {
  __typename?: 'UsersUnlockDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersUpdateAccess = {
  __typename?: 'UsersUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersUpdateDocAccess = {
  __typename?: 'UsersUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type AllMedia = {
  __typename?: 'allMedia';
  docs?: Maybe<Array<Maybe<Media>>>;
  hasNextPage?: Maybe<Scalars['Boolean']['output']>;
  hasPrevPage?: Maybe<Scalars['Boolean']['output']>;
  limit?: Maybe<Scalars['Int']['output']>;
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page?: Maybe<Scalars['Int']['output']>;
  pagingCounter?: Maybe<Scalars['Int']['output']>;
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs?: Maybe<Scalars['Int']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type AllNews = {
  __typename?: 'allNews';
  docs?: Maybe<Array<Maybe<News>>>;
  hasNextPage?: Maybe<Scalars['Boolean']['output']>;
  hasPrevPage?: Maybe<Scalars['Boolean']['output']>;
  limit?: Maybe<Scalars['Int']['output']>;
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page?: Maybe<Scalars['Int']['output']>;
  pagingCounter?: Maybe<Scalars['Int']['output']>;
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs?: Maybe<Scalars['Int']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type Archive_CategoriesAccess = {
  __typename?: 'archive_categoriesAccess';
  create?: Maybe<ArchiveCategoriesCreateAccess>;
  delete?: Maybe<ArchiveCategoriesDeleteAccess>;
  fields?: Maybe<ArchiveCategoriesFields>;
  read?: Maybe<ArchiveCategoriesReadAccess>;
  update?: Maybe<ArchiveCategoriesUpdateAccess>;
};

export type Archive_CategoriesDocAccess = {
  __typename?: 'archive_categoriesDocAccess';
  create?: Maybe<ArchiveCategoriesCreateDocAccess>;
  delete?: Maybe<ArchiveCategoriesDeleteDocAccess>;
  fields?: Maybe<ArchiveCategoriesDocAccessFields>;
  read?: Maybe<ArchiveCategoriesReadDocAccess>;
  update?: Maybe<ArchiveCategoriesUpdateDocAccess>;
};

export type ArchivesAccess = {
  __typename?: 'archivesAccess';
  create?: Maybe<ArchivesCreateAccess>;
  delete?: Maybe<ArchivesDeleteAccess>;
  fields?: Maybe<ArchivesFields>;
  read?: Maybe<ArchivesReadAccess>;
  update?: Maybe<ArchivesUpdateAccess>;
};

export type ArchivesDocAccess = {
  __typename?: 'archivesDocAccess';
  create?: Maybe<ArchivesCreateDocAccess>;
  delete?: Maybe<ArchivesDeleteDocAccess>;
  fields?: Maybe<ArchivesDocAccessFields>;
  read?: Maybe<ArchivesReadDocAccess>;
  update?: Maybe<ArchivesUpdateDocAccess>;
};

export type Editorial_BoardAccess = {
  __typename?: 'editorial_boardAccess';
  fields?: Maybe<EditorialBoardFields>;
  read?: Maybe<EditorialBoardReadAccess>;
  update?: Maybe<EditorialBoardUpdateAccess>;
};

export type Editorial_BoardDocAccess = {
  __typename?: 'editorial_boardDocAccess';
  fields?: Maybe<EditorialBoardDocAccessFields>;
  read?: Maybe<EditorialBoardReadDocAccess>;
  update?: Maybe<EditorialBoardUpdateDocAccess>;
};

export type GuidelinesAccess = {
  __typename?: 'guidelinesAccess';
  create?: Maybe<GuidelinesCreateAccess>;
  delete?: Maybe<GuidelinesDeleteAccess>;
  fields?: Maybe<GuidelinesFields>;
  read?: Maybe<GuidelinesReadAccess>;
  update?: Maybe<GuidelinesUpdateAccess>;
};

export type GuidelinesDocAccess = {
  __typename?: 'guidelinesDocAccess';
  create?: Maybe<GuidelinesCreateDocAccess>;
  delete?: Maybe<GuidelinesDeleteDocAccess>;
  fields?: Maybe<GuidelinesDocAccessFields>;
  read?: Maybe<GuidelinesReadDocAccess>;
  update?: Maybe<GuidelinesUpdateDocAccess>;
};

export type MediaAccess = {
  __typename?: 'mediaAccess';
  create?: Maybe<MediaCreateAccess>;
  delete?: Maybe<MediaDeleteAccess>;
  fields?: Maybe<MediaFields>;
  read?: Maybe<MediaReadAccess>;
  update?: Maybe<MediaUpdateAccess>;
};

export type MediaDocAccess = {
  __typename?: 'mediaDocAccess';
  create?: Maybe<MediaCreateDocAccess>;
  delete?: Maybe<MediaDeleteDocAccess>;
  fields?: Maybe<MediaDocAccessFields>;
  read?: Maybe<MediaReadDocAccess>;
  update?: Maybe<MediaUpdateDocAccess>;
};

export type MutationArchiveCategoryInput = {
  name?: InputMaybe<Scalars['String']['input']>;
};

export type MutationArchiveCategoryUpdateInput = {
  name?: InputMaybe<Scalars['String']['input']>;
};

export type MutationArchiveInput = {
  about?: InputMaybe<Scalars['JSON']['input']>;
  archiveCover?: InputMaybe<Scalars['String']['input']>;
  categories?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  pdf?: InputMaybe<Scalars['String']['input']>;
  publishedDate?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationArchiveUpdateInput = {
  about?: InputMaybe<Scalars['JSON']['input']>;
  archiveCover?: InputMaybe<Scalars['String']['input']>;
  categories?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  pdf?: InputMaybe<Scalars['String']['input']>;
  publishedDate?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationEditorialBoardInput = {
  boardGroups?: InputMaybe<Array<InputMaybe<MutationEditorialBoard_BoardGroupsInput>>>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationEditorialBoard_BoardGroupsInput = {
  heading: Scalars['String']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  members?: InputMaybe<Array<InputMaybe<MutationEditorialBoard_BoardGroups_MembersInput>>>;
};

export type MutationEditorialBoard_BoardGroups_MembersInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  profileImage?: InputMaybe<Scalars['String']['input']>;
  subtitle: Scalars['String']['input'];
};

export type MutationGuidelineInput = {
  content: Scalars['JSON']['input'];
  createdAt?: InputMaybe<Scalars['String']['input']>;
  orderNumber?: InputMaybe<Scalars['Float']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationGuidelineUpdateInput = {
  content?: InputMaybe<Scalars['JSON']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  orderNumber?: InputMaybe<Scalars['Float']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationMediaInput = {
  alt?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  filename?: InputMaybe<Scalars['String']['input']>;
  filesize?: InputMaybe<Scalars['Float']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  sizes?: InputMaybe<MutationMedia_SizesInput>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type MutationMediaUpdateInput = {
  alt?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  filename?: InputMaybe<Scalars['String']['input']>;
  filesize?: InputMaybe<Scalars['Float']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  sizes?: InputMaybe<MutationMediaUpdate_SizesInput>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type MutationMediaUpdate_SizesInput = {
  sixteenByNineMedium?: InputMaybe<MutationMediaUpdate_Sizes_SixteenByNineMediumInput>;
  thumbnail?: InputMaybe<MutationMediaUpdate_Sizes_ThumbnailInput>;
};

export type MutationMediaUpdate_Sizes_SixteenByNineMediumInput = {
  filename?: InputMaybe<Scalars['String']['input']>;
  filesize?: InputMaybe<Scalars['Float']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type MutationMediaUpdate_Sizes_ThumbnailInput = {
  filename?: InputMaybe<Scalars['String']['input']>;
  filesize?: InputMaybe<Scalars['Float']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type MutationMedia_SizesInput = {
  sixteenByNineMedium?: InputMaybe<MutationMedia_Sizes_SixteenByNineMediumInput>;
  thumbnail?: InputMaybe<MutationMedia_Sizes_ThumbnailInput>;
};

export type MutationMedia_Sizes_SixteenByNineMediumInput = {
  filename?: InputMaybe<Scalars['String']['input']>;
  filesize?: InputMaybe<Scalars['Float']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type MutationMedia_Sizes_ThumbnailInput = {
  filename?: InputMaybe<Scalars['String']['input']>;
  filesize?: InputMaybe<Scalars['Float']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type MutationNewsInput = {
  author?: InputMaybe<Scalars['String']['input']>;
  content?: InputMaybe<Scalars['JSON']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  featureImage?: InputMaybe<Scalars['String']['input']>;
  publishedDate?: InputMaybe<Scalars['String']['input']>;
  readTime?: InputMaybe<Scalars['Float']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<News_Status_MutationInput>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationNewsTagInput = {
  name?: InputMaybe<Scalars['String']['input']>;
};

export type MutationNewsTagUpdateInput = {
  name?: InputMaybe<Scalars['String']['input']>;
};

export type MutationNewsUpdateInput = {
  author?: InputMaybe<Scalars['String']['input']>;
  content?: InputMaybe<Scalars['JSON']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  featureImage?: InputMaybe<Scalars['String']['input']>;
  publishedDate?: InputMaybe<Scalars['String']['input']>;
  readTime?: InputMaybe<Scalars['Float']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<NewsUpdate_Status_MutationInput>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationPayloadPreferenceInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<PayloadPreference_UserRelationshipInput>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export type MutationPayloadPreferenceUpdateInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<PayloadPreferenceUpdate_UserRelationshipInput>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export type MutationUserInput = {
  _verificationToken?: InputMaybe<Scalars['String']['input']>;
  _verified?: InputMaybe<Scalars['Boolean']['input']>;
  avatarImage?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  hash?: InputMaybe<Scalars['String']['input']>;
  lockUntil?: InputMaybe<Scalars['String']['input']>;
  loginAttempts?: InputMaybe<Scalars['Float']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
  resetPasswordExpiration?: InputMaybe<Scalars['String']['input']>;
  resetPasswordToken?: InputMaybe<Scalars['String']['input']>;
  role: User_Role_MutationInput;
  salt?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationUserUpdateInput = {
  _verificationToken?: InputMaybe<Scalars['String']['input']>;
  _verified?: InputMaybe<Scalars['Boolean']['input']>;
  avatarImage?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  hash?: InputMaybe<Scalars['String']['input']>;
  lockUntil?: InputMaybe<Scalars['String']['input']>;
  loginAttempts?: InputMaybe<Scalars['Float']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  resetPasswordExpiration?: InputMaybe<Scalars['String']['input']>;
  resetPasswordToken?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<UserUpdate_Role_MutationInput>;
  salt?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type NewsAccess = {
  __typename?: 'newsAccess';
  create?: Maybe<NewsCreateAccess>;
  delete?: Maybe<NewsDeleteAccess>;
  fields?: Maybe<NewsFields>;
  read?: Maybe<NewsReadAccess>;
  update?: Maybe<NewsUpdateAccess>;
};

export type NewsDocAccess = {
  __typename?: 'newsDocAccess';
  create?: Maybe<NewsCreateDocAccess>;
  delete?: Maybe<NewsDeleteDocAccess>;
  fields?: Maybe<NewsDocAccessFields>;
  read?: Maybe<NewsReadDocAccess>;
  update?: Maybe<NewsUpdateDocAccess>;
};

export type News_TagsAccess = {
  __typename?: 'news_tagsAccess';
  create?: Maybe<NewsTagsCreateAccess>;
  delete?: Maybe<NewsTagsDeleteAccess>;
  fields?: Maybe<NewsTagsFields>;
  read?: Maybe<NewsTagsReadAccess>;
  update?: Maybe<NewsTagsUpdateAccess>;
};

export type News_TagsDocAccess = {
  __typename?: 'news_tagsDocAccess';
  create?: Maybe<NewsTagsCreateDocAccess>;
  delete?: Maybe<NewsTagsDeleteDocAccess>;
  fields?: Maybe<NewsTagsDocAccessFields>;
  read?: Maybe<NewsTagsReadDocAccess>;
  update?: Maybe<NewsTagsUpdateDocAccess>;
};

export type Payload_PreferencesAccess = {
  __typename?: 'payload_preferencesAccess';
  create?: Maybe<PayloadPreferencesCreateAccess>;
  delete?: Maybe<PayloadPreferencesDeleteAccess>;
  fields?: Maybe<PayloadPreferencesFields>;
  read?: Maybe<PayloadPreferencesReadAccess>;
  update?: Maybe<PayloadPreferencesUpdateAccess>;
};

export type Payload_PreferencesDocAccess = {
  __typename?: 'payload_preferencesDocAccess';
  create?: Maybe<PayloadPreferencesCreateDocAccess>;
  delete?: Maybe<PayloadPreferencesDeleteDocAccess>;
  fields?: Maybe<PayloadPreferencesDocAccessFields>;
  read?: Maybe<PayloadPreferencesReadDocAccess>;
  update?: Maybe<PayloadPreferencesUpdateDocAccess>;
};

export type UsersAccess = {
  __typename?: 'usersAccess';
  create?: Maybe<UsersCreateAccess>;
  delete?: Maybe<UsersDeleteAccess>;
  fields?: Maybe<UsersFields>;
  read?: Maybe<UsersReadAccess>;
  unlock?: Maybe<UsersUnlockAccess>;
  update?: Maybe<UsersUpdateAccess>;
};

export type UsersDocAccess = {
  __typename?: 'usersDocAccess';
  create?: Maybe<UsersCreateDocAccess>;
  delete?: Maybe<UsersDeleteDocAccess>;
  fields?: Maybe<UsersDocAccessFields>;
  read?: Maybe<UsersReadDocAccess>;
  unlock?: Maybe<UsersUnlockDocAccess>;
  update?: Maybe<UsersUpdateDocAccess>;
};

export type UsersJwt = {
  __typename?: 'usersJWT';
  collection: Scalars['String']['output'];
  email: Scalars['EmailAddress']['output'];
};

export type UsersLoginResult = {
  __typename?: 'usersLoginResult';
  exp?: Maybe<Scalars['Int']['output']>;
  token?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

export type UsersMe = {
  __typename?: 'usersMe';
  collection?: Maybe<Scalars['String']['output']>;
  exp?: Maybe<Scalars['Int']['output']>;
  token?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

export type UsersRefreshedUser = {
  __typename?: 'usersRefreshedUser';
  exp?: Maybe<Scalars['Int']['output']>;
  refreshedToken?: Maybe<Scalars['String']['output']>;
  user?: Maybe<UsersJwt>;
};

export type UsersResetPassword = {
  __typename?: 'usersResetPassword';
  token?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

export type GetEditorialBoardQueryVariables = Exact<{ [key: string]: never; }>;


export type GetEditorialBoardQuery = { __typename?: 'Query', EditorialBoard?: { __typename?: 'EditorialBoard', boardGroups?: Array<{ __typename?: 'EditorialBoard_BoardGroups', id?: string | null, heading?: string | null, members?: Array<{ __typename?: 'EditorialBoard_BoardGroups_Members', id?: string | null, name?: string | null, subtitle?: string | null, profileImage?: { __typename?: 'Media', url?: string | null } | null }> | null }> | null } | null };

export type GetArchivesQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  categories?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>> | InputMaybe<Scalars['JSON']['input']>>;
  title?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetArchivesQuery = { __typename?: 'Query', Archives?: { __typename?: 'Archives', docs?: Array<{ __typename?: 'Archive', id?: string | null, title: string, slug?: string | null, about?: any | null, publishedDate?: any | null, archiveCover?: { __typename?: 'Media', alt?: string | null, url?: string | null } | null } | null> | null } | null };

export type GetArchiveCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetArchiveCategoriesQuery = { __typename?: 'Query', ArchiveCategories?: { __typename?: 'ArchiveCategories', docs?: Array<{ __typename?: 'ArchiveCategory', id?: string | null, name?: string | null } | null> | null } | null };

export type GetArchiveBySlugQueryVariables = Exact<{
  slug?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetArchiveBySlugQuery = { __typename?: 'Query', Archives?: { __typename?: 'Archives', docs?: Array<{ __typename?: 'Archive', id?: string | null, slug?: string | null, title: string, about?: any | null, publishedDate?: any | null, pdf?: { __typename?: 'Media', url?: string | null, alt?: string | null } | null, archiveCover?: { __typename?: 'Media', alt?: string | null, url?: string | null } | null } | null> | null } | null };

export type GetGuidelinesQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetGuidelinesQuery = { __typename?: 'Query', Guidelines?: { __typename?: 'Guidelines', docs?: Array<{ __typename?: 'Guideline', id?: string | null, title: string, orderNumber?: number | null, slug?: string | null, updatedAt?: any | null } | null> | null } | null };

export type GetGuidelineQueryVariables = Exact<{
  slug?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetGuidelineQuery = { __typename?: 'Query', Guidelines?: { __typename?: 'Guidelines', docs?: Array<{ __typename?: 'Guideline', id?: string | null, title: string, orderNumber?: number | null, slug?: string | null, updatedAt?: any | null, content: any } | null> | null } | null };

export type GetHomeNewsQueryVariables = Exact<{
  newsLimit: Scalars['Int']['input'];
}>;


export type GetHomeNewsQuery = { __typename?: 'Query', news?: { __typename?: 'allNews', docs?: Array<{ __typename?: 'News', id?: string | null, title: string, publishedDate?: any | null, readTime?: number | null, slug?: string | null, featureImage?: { __typename?: 'Media', alt?: string | null, url?: string | null } | null } | null> | null } | null };

export type GetFeaturedArchiveQueryVariables = Exact<{ [key: string]: never; }>;


export type GetFeaturedArchiveQuery = { __typename?: 'Query', featuredArchive?: { __typename?: 'Archives', docs?: Array<{ __typename?: 'Archive', id?: string | null, title: string, about?: any | null, slug?: string | null, publishedDate?: any | null, pdf?: { __typename?: 'Media', url?: string | null, alt?: string | null } | null, archiveCover?: { __typename?: 'Media', alt?: string | null, url?: string | null } | null } | null> | null } | null };

export type GetMainNewsQueryVariables = Exact<{
  mainNewsTagId?: InputMaybe<Scalars['JSON']['input']>;
}>;


export type GetMainNewsQuery = { __typename?: 'Query', allNews?: { __typename?: 'allNews', totalPages?: number | null, hasNextPage?: boolean | null, hasPrevPage?: boolean | null, docs?: Array<{ __typename?: 'News', id?: string | null, slug?: string | null, publishedDate?: any | null, createdAt?: any | null, title: string, content?: any | null, featureImage?: { __typename?: 'Media', url?: string | null, alt?: string | null } | null } | null> | null } | null };

export type GetAllNewsQueryVariables = Exact<{
  limit: Scalars['Int']['input'];
  tagIds?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>> | InputMaybe<Scalars['JSON']['input']>>;
  page?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetAllNewsQuery = { __typename?: 'Query', allNews?: { __typename?: 'allNews', totalPages?: number | null, hasNextPage?: boolean | null, hasPrevPage?: boolean | null, docs?: Array<{ __typename?: 'News', id?: string | null, slug?: string | null, publishedDate?: any | null, createdAt?: any | null, title: string, content?: any | null, featureImage?: { __typename?: 'Media', url?: string | null, alt?: string | null } | null } | null> | null } | null };

export type GetNewsTagsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetNewsTagsQuery = { __typename?: 'Query', NewsTags?: { __typename?: 'NewsTags', docs?: Array<{ __typename?: 'NewsTag', id?: string | null, name?: string | null } | null> | null } | null };

export type AllNewsSlugsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllNewsSlugsQuery = { __typename?: 'Query', allNews?: { __typename?: 'allNews', docs?: Array<{ __typename?: 'News', slug?: string | null } | null> | null } | null };

export type NewsPageBySlugQueryVariables = Exact<{
  slug?: InputMaybe<Scalars['String']['input']>;
}>;


export type NewsPageBySlugQuery = { __typename?: 'Query', allNews?: { __typename?: 'allNews', docs?: Array<{ __typename?: 'News', id?: string | null, title: string, publishedDate?: any | null, updatedAt?: any | null, createdAt?: any | null, readTime?: number | null, content?: any | null, tags?: Array<{ __typename?: 'NewsTag', id?: string | null, name?: string | null }> | null, author?: { __typename?: 'User', name?: string | null, avatarImage?: { __typename?: 'Media', url?: string | null } | null } | null, featureImage?: { __typename?: 'Media', url?: string | null, alt?: string | null } | null } | null> | null } | null };


export const GetEditorialBoardDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetEditorialBoard"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"EditorialBoard"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"boardGroups"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"heading"}},{"kind":"Field","name":{"kind":"Name","value":"members"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"profileImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetEditorialBoardQuery, GetEditorialBoardQueryVariables>;
export const GetArchivesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getArchives"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"defaultValue":{"kind":"IntValue","value":"10"}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"defaultValue":{"kind":"IntValue","value":"1"}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"categories"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"JSON"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"title"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Archives"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"StringValue","value":"publishedDate","block":false}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"categories"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"in"},"value":{"kind":"Variable","name":{"kind":"Name","value":"categories"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"title"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"like"},"value":{"kind":"Variable","name":{"kind":"Name","value":"title"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"docs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"archiveCover"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"about"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"depth"},"value":{"kind":"IntValue","value":"1"}}]},{"kind":"Field","name":{"kind":"Name","value":"publishedDate"}}]}}]}}]}}]} as unknown as DocumentNode<GetArchivesQuery, GetArchivesQueryVariables>;
export const GetArchiveCategoriesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getArchiveCategories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ArchiveCategories"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"100000"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"docs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<GetArchiveCategoriesQuery, GetArchiveCategoriesQueryVariables>;
export const GetArchiveBySlugDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getArchiveBySlug"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Archives"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"1"}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"slug"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"equals"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"docs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"pdf"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"archiveCover"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"about"}},{"kind":"Field","name":{"kind":"Name","value":"publishedDate"}}]}}]}}]}}]} as unknown as DocumentNode<GetArchiveBySlugQuery, GetArchiveBySlugQueryVariables>;
export const GetGuidelinesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getGuidelines"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"defaultValue":{"kind":"IntValue","value":"99999"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Guidelines"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"StringValue","value":"orderNumber","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"docs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"orderNumber"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]} as unknown as DocumentNode<GetGuidelinesQuery, GetGuidelinesQueryVariables>;
export const GetGuidelineDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getGuideline"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Guidelines"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"1"}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"slug"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"equals"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"docs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"orderNumber"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"content"}}]}}]}}]}}]} as unknown as DocumentNode<GetGuidelineQuery, GetGuidelineQueryVariables>;
export const GetHomeNewsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getHomeNews"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"newsLimit"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"news"},"name":{"kind":"Name","value":"allNews"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"newsLimit"}}},{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"StringValue","value":"publishedDate","block":false}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"status"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"equals"},"value":{"kind":"EnumValue","value":"published"}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"docs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"publishedDate"}},{"kind":"Field","name":{"kind":"Name","value":"readTime"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"featureImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetHomeNewsQuery, GetHomeNewsQueryVariables>;
export const GetFeaturedArchiveDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getFeaturedArchive"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"featuredArchive"},"name":{"kind":"Name","value":"Archives"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"1"}},{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"StringValue","value":"publishedDate","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"docs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"about"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"pdf"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}}]}},{"kind":"Field","name":{"kind":"Name","value":"archiveCover"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"publishedDate"}}]}}]}}]}}]} as unknown as DocumentNode<GetFeaturedArchiveQuery, GetFeaturedArchiveQueryVariables>;
export const GetMainNewsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetMainNews"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"mainNewsTagId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"JSON"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allNews"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"tags"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"equals"},"value":{"kind":"Variable","name":{"kind":"Name","value":"mainNewsTagId"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"status"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"equals"},"value":{"kind":"EnumValue","value":"published"}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"StringValue","value":"publishedDate","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalPages"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasPrevPage"}},{"kind":"Field","name":{"kind":"Name","value":"docs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"publishedDate"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"featureImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetMainNewsQuery, GetMainNewsQueryVariables>;
export const GetAllNewsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllNews"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"tagIds"}},"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"JSON"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"page"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allNews"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"Variable","name":{"kind":"Name","value":"page"}}},{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"StringValue","value":"publishedDate","block":false}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"tags"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"in"},"value":{"kind":"Variable","name":{"kind":"Name","value":"tagIds"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"status"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"equals"},"value":{"kind":"EnumValue","value":"published"}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalPages"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasPrevPage"}},{"kind":"Field","name":{"kind":"Name","value":"docs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"publishedDate"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"featureImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetAllNewsQuery, GetAllNewsQueryVariables>;
export const GetNewsTagsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetNewsTags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"NewsTags"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"99999"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"docs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<GetNewsTagsQuery, GetNewsTagsQueryVariables>;
export const AllNewsSlugsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AllNewsSlugs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allNews"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"page"},"value":{"kind":"IntValue","value":"0"}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"99999"}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"status"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"equals"},"value":{"kind":"EnumValue","value":"published"}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"docs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}}]}}]} as unknown as DocumentNode<AllNewsSlugsQuery, AllNewsSlugsQueryVariables>;
export const NewsPageBySlugDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"NewsPageBySlug"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allNews"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"1"}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"slug"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"equals"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"docs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"publishedDate"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"readTime"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"avatarImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"featureImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}}]}}]}}]}}]}}]} as unknown as DocumentNode<NewsPageBySlugQuery, NewsPageBySlugQueryVariables>;