"use client";
import { TProvider } from "@/utils";
import { getProviders, signIn } from "next-auth/react";
import { useEffect, useState } from "react";

type TProviders = Record<string, TProvider>;

const AuthProvider = () => {
  const [providers, setProviders] = useState<TProviders | null>(null);

  useEffect(() => {
    const getAuthProvider = async () => {
      try {
        const res = await getProviders();
        setProviders(res);
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    };
    getAuthProvider();
  }, []);

  if (providers) {
    return (
      <div>
        {Object.values(providers).map((provider: TProvider, index: number) => (
          <button onClick={() => signIn(provider?.id)} key={index}>
            {provider.id}
          </button>
        ))}
      </div>
    );
  }
};

export default AuthProvider;
