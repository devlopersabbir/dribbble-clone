import { createUserMutation, getUserQuery } from "@/graphql";
import { GraphQLClient } from "graphql-request";

const isProduction = process.env.NODE_ENV === "production";

const apiUrl = isProduction
  ? process.env.NEXT_PUBLIC_GRAPHBASE_API_URL || ""
  : "http://127.0.0.1:4000/graphql";
const apiKey = isProduction
  ? process.env.NEXT_PUBLIC_GRAPHBASE_API_KEY || ""
  : "letmein";
const serverUrl = isProduction
  ? process.env.NEXT_PUBLIC_SERVER_URL
  : "http://localhost:3000";

const client = new GraphQLClient(apiUrl);
export const makeGraphQLRequest = async (query: string, varibales: {}) => {
  try {
    return await client.request(query, varibales);
  } catch (error) {
    throw error;
  }
};

export const getUser = (email: string) => {
  return makeGraphQLRequest(getUserQuery, { email });
};

export const createUser = (name: string, email: string, avaterurl: string) => {
  const varibales = {
    input: {
      name,
      email,
      avaterurl,
    },
  };

  return makeGraphQLRequest(createUserMutation, varibales);
};
