/* User interface */
export interface IGeo {
  lat: string,
  lng: string
}

export interface IAddress {
  street: string,
  suite: string,
  city: string,
  zipcode: string,
  geo: IGeo
}

export interface ICompany {
  name: string,
  catchPhrase: string,
  bs: string
}

export interface IUser {
  id: number,
  name: string,
  username: string,
  email: string,
  address: IAddress,
  phone: string,
  website: string,
  company: ICompany,
}

/* Article interface */
export interface IArticle {
  userId: number,
  id: number,
  title: string,
  body: string
}

/* Redux action interfaces */

/**
 * Action interface of counter reducer.
 */
export interface ICounterAction {
  type: string,
  payload?: number
}

/**
 * Action interface of article reducer.
 */
export interface IArticleAction {
  type: string,
  payload: IArticle[]
}

export interface ArticleState {
  data: IArticle[];
}

export interface IUserAction {
  type: string,
  payload: IUser
}

export interface IAuthState {
  logged: boolean,
  user: IUser | null
}
