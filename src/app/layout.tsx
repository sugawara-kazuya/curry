import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { cn } from "@/lib/utils"
import BottomNavigation from "@/components/shared/BottomNavigation"

export const metadata: Metadata = {
  title: "カレーアプリ",
  description: "美味しいカレーを見つけよう！",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body
        className={cn(
          "min-h-screen bg-cream-white text-text-dark font-sans antialiased"
        )}
      >
        <div className="relative flex min-h-screen flex-col">
          {children}
          <BottomNavigation />
        </div>
      </body>
    </html>
  )
}
