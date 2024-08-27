export default function Layout({ children }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Layout</h1>
      {children}
    </main>
  );
}
