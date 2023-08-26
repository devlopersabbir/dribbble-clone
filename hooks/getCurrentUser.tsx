import { authOptions } from "@/lib";
import { ISessionInterface } from "@/utils";
import { getServerSession } from "next-auth";

export const getCurrentUser = async () => {
  const session = (await getServerSession(authOptions)) as ISessionInterface;
  return session;
};
