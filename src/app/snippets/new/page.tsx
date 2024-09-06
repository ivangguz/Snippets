'use client';
import Inputs from "@/components/Inputs";
import { useFormState } from "react-dom";
import * as actions from "@/actions"

export default function SnippetCreatePage() {
  const [formState, action] = useFormState(actions.createSnippet, {message: ''})

  return (
    <form action={action}>
      <h3 className="font-bold m-3">Create a Snippet</h3>
      <div className="flex flex-col gap-4">
        {/* Primer Input */}
        <Inputs tag="title">Title</Inputs>
        {/* Segundo Input */}
        <Inputs tag="code" as="textarea">Code</Inputs>
        <div>
          {formState.message ? <div className="my-2 p-2 bg-red-200 border rounded border-red-400">{formState.message}</div> : null}
        </div>
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
