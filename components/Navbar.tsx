import Link from "next/link";
const Navbar = () => {
  return (
    <div className="flex justify-between items-center md:mx-10">
      <Link href={"/"}>Home</Link>
      <Link href={"/cart"}>Cart</Link>
      <Link href={"/checkout"}>Checkout</Link>
      <Link href={"/products"}>Products</Link>
      <Link href={"/search?q=test"}>Search</Link>
    </div>
  );
};

export default Navbar;
