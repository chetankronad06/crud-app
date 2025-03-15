import Link from "next/link";
import RemoveBtn from "./RemoveButton";
import { HiPencilAlt } from "react-icons/hi";

const getTopics = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/topics", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading topics: ", error);
    return null; // Ensure function returns null if an error occurs
  }
};

export default async function TopicsList() {
  const data = await getTopics();

  if (!data || !data.topics || data.topics.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-6 border border-gray-300 rounded-lg bg-gray-100 shadow-md">
        <h2 className="text-xl font-semibold text-gray-700">No Topics Available</h2>
        <p className="text-gray-500">Start by adding some topics to see them here.</p>
      </div>
    );
  }
  

  return (
    <>
      {data.topics.map((t) => (
        <div
          key={t._id}
          className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start"
        >
          <div>
            <h2 className="font-bold text-2xl">{t.title}</h2>
            <div>{t.description}</div>
          </div>

          <div className="flex gap-2">
            <RemoveBtn id={t._id}/>
            <Link href={`/editTopic/${t._id}`}>
              <HiPencilAlt size={24} />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}
