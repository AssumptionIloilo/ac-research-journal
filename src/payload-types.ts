/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {
  collections: {
    news: News;
    'news-tags': NewsTag;
    archives: Archive;
    'archive-categories': ArchiveCategory;
    guidelines: Guideline;
    media: Media;
    users: User;
    'payload-preferences': PayloadPreference;
    'payload-migrations': PayloadMigration;
  };
  globals: {
    'editorial-board': EditorialBoard;
  };
}
export interface News {
  id: string;
  featureImage?: string | Media | null;
  title: string;
  author?: (string | null) | User;
  publishedDate?: string | null;
  tags?: (string | NewsTag)[] | null;
  content?:
    | {
        [k: string]: unknown;
      }[]
    | null;
  readTime?: number | null;
  status?: ('draft' | 'published') | null;
  slug?: string | null;
  updatedAt: string;
  createdAt: string;
}
export interface Media {
  id: string;
  alt?: string | null;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
  sizes?: {
    thumbnail?: {
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
    sixteenByNineMedium?: {
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
  };
}
export interface User {
  id: string;
  name?: string | null;
  role: 'admin' | 'user';
  avatarImage?: string | Media | null;
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string | null;
  resetPasswordExpiration?: string | null;
  salt?: string | null;
  hash?: string | null;
  _verified?: boolean | null;
  _verificationToken?: string | null;
  loginAttempts?: number | null;
  lockUntil?: string | null;
  password: string | null;
}
export interface NewsTag {
  id: string;
  name?: string | null;
}
export interface Archive {
  id: string;
  archiveCover?: string | Media | null;
  title: string;
  about?:
    | {
        [k: string]: unknown;
      }[]
    | null;
  publishedDate?: string | null;
  pdf?: string | Media | null;
  categories?: (string | ArchiveCategory)[] | null;
  slug?: string | null;
  updatedAt: string;
  createdAt: string;
}
export interface ArchiveCategory {
  id: string;
  name?: string | null;
}
export interface Guideline {
  id: string;
  title: string;
  content: {
    [k: string]: unknown;
  }[];
  orderNumber?: number | null;
  slug?: string | null;
  updatedAt: string;
  createdAt: string;
}
export interface PayloadPreference {
  id: string;
  user: {
    relationTo: 'users';
    value: string | User;
  };
  key?: string | null;
  value?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
export interface PayloadMigration {
  id: string;
  name?: string | null;
  batch?: number | null;
  updatedAt: string;
  createdAt: string;
}
export interface EditorialBoard {
  id: string;
  boardGroups?:
    | {
        heading: string;
        members?:
          | {
              profileImage?: string | Media | null;
              name: string;
              subtitle: string;
              id?: string | null;
            }[]
          | null;
        id?: string | null;
      }[]
    | null;
  updatedAt?: string | null;
  createdAt?: string | null;
}


declare module 'payload' {
  export interface GeneratedTypes extends Config {}
}