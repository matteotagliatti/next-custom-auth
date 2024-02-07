import { getSession, login, logout } from "@/lib";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getSession();

  return (
    <main className="mx-auto max-w-xl p-4 space-y-4">
      <form
        className="flex gap-4 p-4 border"
        action={async (formData) => {
          "use server";
          await login(formData);
          redirect("/");
        }}
      >
        <input
          className="border border-black p-2 rounded"
          required
          type="email"
          name="email"
          placeholder="Email"
        />
        <button
          className="border rounded-full w-full hover:bg-slate-300"
          type="submit"
        >
          Login
        </button>
      </form>
      <form
        action={async () => {
          "use server";
          await logout();
          redirect("/");
        }}
      >
        <button
          className="border rounded-full w-full hover:bg-slate-300 py-2"
          type="submit"
        >
          Logout
        </button>
      </form>
      <pre className="bg-black text-white rounded p-4">
        {JSON.stringify(session, null, 2)}
      </pre>
    </main>
  );
}
