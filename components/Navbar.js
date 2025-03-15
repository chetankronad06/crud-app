import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-slate-800 px-8 py-3 shadow-lg rounded-lg">
      <Link className="text-white font-bold text-xl tracking-wide hover:text-gray-300 transition duration-300" href={"/"}>
        CRUD
      </Link>
      <Link className="bg-white text-slate-800 font-medium px-4 py-2 rounded-md shadow-md hover:bg-gray-200 transition duration-300" href={"/addTopic"}>
        + Add Topic
      </Link>
    </nav>
  );
  
}