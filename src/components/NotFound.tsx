import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div>
        <h2>Not Found</h2>
        <p>Could not find requested resource</p>
        <Link href="/">Return Home</Link>
      </div>
    </div>
  );
}
