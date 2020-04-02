export interface Roles {
  subscriber?: boolean;
  editor?: boolean;
  admin?: boolean;
}


export interface User {
  uid: string;
  email: string;
  roles: Roles;
  displayName: string;
  photoURL: string;
  emailVerified: boolean;
}