"use client";
import { useRouter } from "next/navigation";
import { formSubmit } from "./action";
import { Button, Card, Input, Typography } from "@material-tailwind/react";
import React, { useTransition } from "react";

const AddCustomer = () => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const handleAction = async (e: FormData) => {
    startTransition(async () => {
      await formSubmit(e);
      router.push("/");
    });
  };

  return (
    <Card
      className="h-screen flex items-center justify-center"
      color="transparent"
      shadow={false}
    >
      <Typography variant="h4" color="blue-gray">
        Add Customer
      </Typography>
      <form
        action={handleAction}
        className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
      >
        <div className="mb-4 flex flex-col gap-6">
          <Input crossOrigin={""} required size="lg" label="Name" name="name" />
          <Input
            crossOrigin={""}
            required
            size="lg"
            label="Email"
            name="email"
          />
          <Input
            crossOrigin={""}
            required
            size="lg"
            label="Phone"
            name="phone"
          />
        </div>
        <Button
          disabled={isPending}
          type="submit"
          className="mt-6 tracking-widest"
          fullWidth
        >
          {isPending ? "Adding..." : "Add Customer"}
        </Button>
      </form>
    </Card>
  );
};

export default AddCustomer;
