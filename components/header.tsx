"use client"

import { useState } from 'react'
import { Montserrat } from "next/font/google";
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Button } from "@/components/ui/button"

const font = Montserrat({
    weight: "600",
    subsets: ["latin"],
  });

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Rights & Laws', href: '/rights-and-laws' },
  { name: 'Relief Schemes', href: '/relief-schemes' },
  { name: 'History & Culture', href: '/history-culture' },
  { name: 'Constitution', href: '/constitution' },
  { name: 'Feedback', href: '/feedback' },
  { name: 'Chat', href: 'https://nagrik-ai.vercel.app' },
  { name: 'About', href: '/about' },
]

export default function Header() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
        <Link href="/" className="flex items-center md:px-14">
        <div className="relative h-12 w-12 mr-4">
        <Image fill alt="Logo" src="/logo.png" />
        </div>
        <h1 className={cn("text-xl md:text-3xl font-bold text-black", font.className)}>
          Nagrik AI
        </h1>
      </Link>
      <div className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  pathname === item.href
                    ? 'bg-white text-gray-800'
                    : 'text-gray-800 hover:bg-white/80 hover:text-gray-600'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="flex items-center space-x-4">
           
            <Button
              variant="ghost"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </Button>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden mt-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block py-2 text-base font-medium transition-colors hover:text-primary ${
                  pathname === item.href ? 'text-primary' : 'text-muted-foreground'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  )
}

