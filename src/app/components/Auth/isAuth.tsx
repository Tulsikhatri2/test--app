"use client";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect } from "react";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const publicRoutes = ["/","/auth/login", "/auth/register"];
  const pathName = usePathname();
  const token = localStorage.getItem("token");
  const router = useRouter();

  useEffect(() => {
    if (!token || token == "undefined") {
      if (!publicRoutes.includes(pathName)) {
        router.push("/auth/login");
      }
    } else {
      if (publicRoutes.includes(pathName)) {
        router.push("/dashboard");
      } else {
        router.push(pathName);
      }
    }
  }, [token, pathName,publicRoutes,router]);

  return <div>{children}</div>;
};

export default Layout;
