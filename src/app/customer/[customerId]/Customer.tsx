"use client";

import React, { useState } from "react";
import { handleDelete } from "./action";
import { useRouter } from "next/navigation";
import CustomerDialog from "./CustomerDialog";
import { Button } from "@material-tailwind/react";

const Customer = ({ customer }: any) => {
  const router = useRouter();
  const [isDeleting, setIsDeleting] = useState(false);
  const handleClick = async () => {
    setIsDeleting(true);
    await handleDelete(customer.id);
    setIsDeleting(false);
    router.push("/");
  };
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="p-5 w-[100%] sm:w-[600px]  bg-gray-50 rounded-md shadow-xl flex flex-col ">
        <h1 className="text-lg sm:text-2xl font-bold mb-10">
          <span className="text-teal-600 inline-block w-20 sm:w-28">
            Name :{" "}
          </span>
          {customer.name}
        </h1>
        <h1 className="text-lg sm:text-2xl font-bold mb-10">
          <span className="text-teal-600 inline-block w-20 sm:w-28">
            Email :{" "}
          </span>
          {customer.email}
        </h1>
        <h1 className="text-lg sm:text-2xl font-bold mb-10">
          <span className="text-teal-600 inline-block w-20 sm:w-28">
            Phone :{" "}
          </span>
          {customer.phone}
        </h1>
        <div className="flex flex-col sm:flex-row sm:justify-between">
          <Button
            onClick={handleClick}
            className="bg-red-300 sm:w-1/3 mb-3 sm:mb-0 tracking-widest"
          >
            {isDeleting ? "Deleting..." : "Delete"}
          </Button>
          <CustomerDialog customer={customer} />
        </div>
      </div>
    </div>
  );
};

export default Customer;
