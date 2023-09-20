import { CustomerCard } from "@/components/CustomerCard";

export default async function Home() {
  const response = await fetch(
    "https://650aa113dfd73d1fab089de1.mockapi.io/customers",
    {
      next: {
        tags: ["customers"],
      },
    }
  );
  const res = await response.json();
  return (
    <div className="w-[95%] sm:w-9/12 mx-auto mt-28">
      <div className=" grid md:grid-cols-2 grid-cols-1 gap-10 place-content-between">
        {res.map((customer: any) => (
          <CustomerCard key={customer.id} customer={customer} />
        ))}
      </div>
    </div>
  );
}
