"use client";

import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();
  const handleBack = () => {
    router.push("/");
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button
        className="bg-blue-500 rounded px-4 py-2 text-white"
        onClick={handleBack}
      >
        Back
      </button>
      <h1>Dashboard</h1>
    </main>
  );
} 
