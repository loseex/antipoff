export type AuthResponseModel = {
  id: string;
  token: string;
};

export type AuthRequestPayload = {
  username: string;
  email: string;
  password: string;
};
