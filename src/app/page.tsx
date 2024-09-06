import Link from "next/link";
import {db} from "@/db"



export default async function Home() {
  const snippets = await db.snippet.findMany();

  const renderSnippets = snippets.map((snippet) => {
    return (
      <Link key={snippet.id}
       className="flex justify-between items-center p-2 border rounded"
       href={`/snippets/${snippet.id}`}>
        <div>{snippet.title}</div>
        <div>View</div>
      </Link>
    );
  });

  return <div>
    <div className="flex m-2 justify-between items-center">
      <h1 className="text-xl font-bold">Snippet</h1>
      <Link href="/snippets/new" className="border p-2 rounded">New</Link>
    </div>
    <div className="flex flex-col gap-2">
    {renderSnippets}
    </div>
    </div>;

  // return <div>
  //   <div className="text-5xl my-10">
  //     <h1>Home</h1>
  //   </div>
  //   <div className="flex flex-col gap-4">
  //     <div className="flex justify-between">
  //       <h2 className="text-4xl ml-7">Snippets</h2>
  //       <button className="border border-red-700 bg-red-500 text-white rounded-md p-2 text-xl w-24 right-0">New</button>
  //     </div>
  //     <button className="border-2 p-2 text-left text-2xl">List Files</button>
  //     <button className="border-2 p-2 text-left text-2xl">Print Folders</button>
  //     <button className="border-2 p-2 text-left text-2xl">Fetch Data</button>
  //   </div>
  // </div>;
}
