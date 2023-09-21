import NotFound from "@/components/NotFound";
import Customer from "./Customer";

const customer = async ({ params }: { params: { customerId: string } }) => {
  const response = await fetch(
    `https://650aa113dfd73d1fab089de1.mockapi.io/customers/${params.customerId}`,
    {
      next: {
        tags: ["customer"],
      },
    }
  );
  const res = await response.json();
  if (!res?.name) {
    return <NotFound />;
  }

  return (
    <>
      <Customer customer={res} />
    </>
  );
};

export default customer;
