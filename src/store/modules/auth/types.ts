export interface AuthState {
  token: string;
}

export interface ResultState {
  data: AuthState;
  error: boolean;
}