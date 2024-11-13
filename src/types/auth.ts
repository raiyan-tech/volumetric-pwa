export interface User {
  id: string;
  email: string;
  name?: string;
  image?: string;
  role: 'user' | 'admin';
}

export interface Session {
  user: User;
  expires: string;
}

export interface AuthConfig {
  providers: {
    google: boolean;
    facebook: boolean;
    email: boolean;
  };
  twoFactorAuth: boolean;
} 