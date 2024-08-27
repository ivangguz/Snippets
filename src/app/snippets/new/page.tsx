import { db } from "@/db";
import { redirect } from "next/navigation";
import Inputs from "@/components/Inputs";

export default function SnippetCreatePage() {
  async function createSnippet(formData: FormData) {
    //This needs to be a server action
    "use server"; //If nextjs see this he will know this is a server action

    //Check the users inputs and make sure theyre valid
    const title = formData.get("title") as string;
    const code = formData.get("code") as string;

    //Create a new record in the database
    const snippet = await db.snippet.create({
      data: {
        title,
        code,
      },
    });
    console.log(snippet);

    //Redirect the user back to the root user
    redirect("/");
  }

  return (
    <form action={createSnippet}>
      <h3 className="font-bold m-3">Create a Snippet</h3>
      <div className="flex flex-col gap-4">
        {/* Primer Input */}
        <Inputs tag="title">Title</Inputs>
        {/* Segundo Input */}
        <Inputs tag="code" as="textarea">Code</Inputs>
        <button
          type="submit"
          className=" rounded p-2 bg-blue-200 my-2 w-20 mx-auto"
        >
          Create
        </button>
      </div>
    </form>
  );
}
