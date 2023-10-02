import Link from "next/link";

export default function Products() {
  return (
    <div>
      <h1>Products</h1>
      <div className="flex flex-col items-center justify-center gap-3 mt-10">
        <Link href={"/products/1"}>Product 1</Link>
        <Link href={"/products/2"}>Products 2</Link>
        <Link href={"/products/3"}>Products 3</Link>
      </div>
    </div>
  );
}
