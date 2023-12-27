// import Image from 'next/image'
import { Suspense } from 'react';
import Link from 'next/link'
// import Button from "@/components/button";

export default function Home() {
  return (
    <main className="bg-slate-800 min-h-screen">
      <div className="flex flex-col items-center justify-between p-24 text-slate-200 text-2xl">
        <h1>Test Interview</h1>
        <div className="hover:bg-indigo-500 hover:translate-x-6 m-10 p-2 transition ease-in-out delay-150 duration-300">
            <Link href="/dashboard">Go to menu</Link>
        </div>
      </div>
    </main>
  )
}

