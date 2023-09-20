"use server";

import { revalidateTag } from "next/cache";

export const handleDelete = async (customerId: string) => {
  const response = await fetch(
    `https://650aa113dfd73d1fab089de1.mockapi.io/customers/${customerId}`,
    {
      method: "DELETE",
    }
  );
  revalidateTag("customers");
  revalidateTag("customer");
};

export const handleEdit = async (formData: FormData, customerId: string) => {
  const customer = {
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
  };
  const response = await fetch(
    `https://650aa113dfd73d1fab089de1.mockapi.io/customers/${customerId}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(customer),
    }
  );
  revalidateTag("customers");
  revalidateTag("customer");
};
