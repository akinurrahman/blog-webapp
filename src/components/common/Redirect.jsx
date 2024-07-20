"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Redirect = ({ href, children, className }) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(href);
  };
  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  );
};

export default Redirect;
