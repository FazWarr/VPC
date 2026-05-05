export default function Home() {
  return (
    <div className="flex min-h-full flex-1 flex-col items-center justify-center bg-zinc-50 px-6 font-sans dark:bg-zinc-950">
      <main className="max-w-lg text-center">
        <p className="text-sm font-medium tracking-wide text-violet-600 dark:text-violet-400">
          VPC · Next.js App Router
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
          Vibe App
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
          If you see this on Vercel, your repo branch and project root are wired
          correctly.
        </p>
      </main>
    </div>
  );
}
