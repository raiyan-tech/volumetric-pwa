"use client"

import Link from "next/link"
import { useSession, signOut } from "next-auth/react"
import { Button } from "./ui/button"

export function Header() {
  const { data: session } = useSession()

  return (
    <header className="w-full border-b">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link href="/" className="font-bold">
          Volumetric PWA
        </Link>
        <nav className="flex items-center gap-4">
          {session ? (
            <>
              <span>{session.user?.email}</span>
              <Button
                variant="outline"
                onClick={() => signOut()}
              >
                Sign Out
              </Button>
            </>
          ) : (
            <>
              <Link href="/auth/login">
                <Button variant="ghost">Login</Button>
              </Link>
              <Link href="/auth/signup">
                <Button>Sign Up</Button>
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  )
} 