import { useRouter } from "next/router";
import { useEffect } from "react";

const logout = () => {
  const router = useRouter();
  useEffect(() => {
    localStorage.clear();

    router.push("/");
  }, []);

  return null;
};

export default logout;
