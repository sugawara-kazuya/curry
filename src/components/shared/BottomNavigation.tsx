"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { User, BotMessageSquare, ShoppingCart, List, type LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

type NavItemConfig = {
  href: string
  label: string
  icon: LucideIcon
}

const navItems: NavItemConfig[] = [
  { href: "/", label: "一覧", icon: List },
  { href: "/ai-chat", label: "AIチャット", icon: BotMessageSquare },
  { href: "/shop", label: "購入", icon: ShoppingCart },
  { href: "/profile", label: "マイページ", icon: User },
]

export default function BottomNavigation() {
  const pathname = usePathname()

  return (
    <footer className="fixed bottom-0 left-0 right-0 z-[1000] h-20 border-t-2 border-primary-orange bg-gradient-to-b from-cream-white to-cream-white-gradient-end shadow-nav">
      <nav className="mx-auto flex h-full max-w-mobile items-center justify-around px-md py-sm">
        {navItems.map((item) => {
          const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href))
          const IconComponent = item.icon
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex cursor-pointer flex-col items-center rounded-md p-xs min-w-nav-item transition-all duration-200 ease-in-out",
                isActive ? "bg-primary-orange text-text-light -translate-y-0.5" : "text-text-muted",
              )}
              aria-current={isActive ? "page" : undefined}
            >
              <IconComponent
                className={cn(
                  "mb-xs h-6 w-6",
                  isActive ? "text-text-light" : "text-text-muted",
                )}
                strokeWidth={1.5}
              />
              <span
                className={cn(
                  "text-center text-xs font-semibold",
                  isActive ? "text-text-light" : "text-text-muted",
                )}
              >
                {item.label}
              </span>
            </Link>
          )
        })}
      </nav>
    </footer>
  )
}