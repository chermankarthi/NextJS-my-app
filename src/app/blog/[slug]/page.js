import { Props } from "next/script";

export default function Slug({ params }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Slug</h1>
      <p>{params.slug}</p>
    </main>
  );
}
