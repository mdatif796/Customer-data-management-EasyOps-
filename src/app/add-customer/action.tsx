"use server";

import { revalidateTag } from "next/cache";

export const formSubmit = async (e: FormData) => {
  const formData = {
    name: e.get("name"),
    email: e.get("email"),
    phone: e.get("phone"),
  };
  const response = await fetch(
    "https://650aa113dfd73d1fab089de1.mockapi.io/customers",
    {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(formData),
      cache: "no-cache",
    }
  );
  revalidateTag("customers");
};
