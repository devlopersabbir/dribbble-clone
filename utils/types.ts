export type TProvider = {
  id: string;
  name: string;
  type: string;
  signinUrl: string;
  callbackUrl: string;
  signinUrlParams?: Record<string, string> | null;
};

export type TUserProfile = {
  name?: string;
  email?: string;
  avaterUrl?: string;
  description?: string;
  githubUrl?: string;
  linkedinUrl?: string;
};
