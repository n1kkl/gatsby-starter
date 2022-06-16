export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
};

export type Post = {
    __typename?: 'Post';
    id: Scalars['ID'];
    image?: Maybe<Scalars['String']>;
    title: Scalars['String'];
    slug: Scalars['String'];
    content: Scalars['String'];
    author: User;
    comments?: Maybe<Array<Comment>>;
    createdAt: Scalars['String'];
    updatedAt: Scalars['String'];
};

export type User = {
    __typename?: 'User';
    id: Scalars['ID'];
    firstname: Scalars['String'];
    surname: Scalars['String'];
    createdAt: Scalars['String'];
    updatedAt: Scalars['String'];
};

export type Comment = {
    __typename?: 'Comment';
    id: Scalars['ID'];
    content: Scalars['String'];
    author: User;
    createdAt: Scalars['String'];
    updatedAt: Scalars['String'];
};

export type Query = {
    __typename?: 'Query';
    posts?: Maybe<Array<Post>>;
    users?: Maybe<Array<User>>;
    comments?: Maybe<Array<Comment>>;
    post?: Maybe<Post>;
    user?: Maybe<User>;
    comment?: Maybe<Comment>;
};


export type QueryPostArgs = {
    id: Scalars['ID'];
};


export type QueryUserArgs = {
    id: Scalars['ID'];
};


export type QueryCommentArgs = {
    id: Scalars['ID'];
};
