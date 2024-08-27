"use client";
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();
  const handleBack = () => {
    router.push("/dashboard");
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button
        className="bg-blue-500 rounded px-4 py-2 text-white"
        onClick={handleBack}
      >
        Back
      </button>
      <h1>Settings</h1>
    </main>
  );
}
