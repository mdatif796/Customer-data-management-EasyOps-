"use client";
import React, { useTransition } from "react";
import {
  Button,
  Dialog,
  DialogBody,
  Card,
  Input,
} from "@material-tailwind/react";
import { useRouter } from "next/navigation";
import { handleEdit } from "./action";

export default function CustomerDialog({ customer }: any) {
  const [open, setOpen] = React.useState(false);
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const handleOpen = () => setOpen(!open);
  const handleEditForm = async (formData: FormData) => {
    startTransition(async () => {
      await handleEdit(formData, customer.id);
      setOpen(!open);
      router.push("/customer/" + customer.id);
    });
  };

  return (
    <>
      <Button onClick={handleOpen} variant="gradient" className="sm:w-1/3">
        Edit
      </Button>
      <Dialog
        className="flex items-center flex-col"
        open={open}
        handler={handleOpen}
      >
        <DialogBody>
          <Card color="transparent" shadow={false}>
            <form
              action={handleEditForm}
              className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96 "
            >
              <div className="mb-4 flex flex-col gap-6">
                <Input
                  defaultValue={customer.name}
                  crossOrigin={""}
                  size="lg"
                  label="Name"
                  name="name"
                />
                <Input
                  crossOrigin={""}
                  defaultValue={customer.email}
                  name="email"
                  size="lg"
                  label="Email"
                />
                <Input
                  crossOrigin={""}
                  defaultValue={customer.phone}
                  size="lg"
                  name="phone"
                  label="Phone"
                />
                <Button
                  variant="gradient"
                  onClick={handleOpen}
                  className="mr-1 tracking-widest"
                >
                  <span>Cancel</span>
                </Button>
                <Button
                  disabled={isPending}
                  type="submit"
                  variant="gradient"
                  color="red"
                  className="tracking-widest"
                >
                  <span>{isPending ? "Editing..." : "Edit"}</span>
                </Button>
              </div>
            </form>
          </Card>
        </DialogBody>
      </Dialog>
    </>
  );
}
