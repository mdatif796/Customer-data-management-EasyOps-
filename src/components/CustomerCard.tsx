"use client";

import Link from "next/link";

export function CustomerCard({ customer }: any) {
  return (
    <Link href={"/customer/" + customer.id}>
      <div className="p-5 w-auto   bg-gray-50 rounded-md shadow-xl flex flex-col ">
        <h1 className="text-md sm:text-lg  font-bold mb-10">
          <span className="text-teal-600 inline-block w-16 sm:w-20 ">
            Name :{" "}
          </span>
          {customer.name}
        </h1>
        <h1 className="text-md sm:text-lg  font-bold mb-10">
          <span className="text-teal-600 inline-block w-16 sm:w-20 ">
            Email :{" "}
          </span>
          {customer.email}
        </h1>
        <h1 className="text-md sm:text-lg  font-bold mb-10">
          <span className="text-teal-600 inline-block w-16 sm:w-20 ">
            Phone :{" "}
          </span>
          {customer.phone}
        </h1>
      </div>
    </Link>
  );
}
