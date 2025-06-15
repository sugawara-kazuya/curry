"use client"

import { User, Heart, History, Settings } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function MyPage() {
  return (
    <div className="space-y-md">
      {/* プロフィールセクション */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-4">
            <Avatar className="h-20 w-20">
              <AvatarImage src="/placeholder-user.jpg" alt="ユーザー" />
              <AvatarFallback>
                <User className="h-10 w-10" />
              </AvatarFallback>
            </Avatar>
            <div>
              <CardTitle className="text-xl">カレー太郎</CardTitle>
              <CardDescription>カレー愛好家</CardDescription>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* メニューセクション */}
      <div className="space-y-2">
        <Card className="cursor-pointer transition-colors hover:bg-accent">
          <CardContent className="flex items-center justify-between p-4">
            <div className="flex items-center gap-3">
              <Heart className="h-5 w-5 text-spice-red" />
              <span className="font-medium">お気に入りカレー</span>
            </div>
            <span className="text-sm text-text-muted">12件</span>
          </CardContent>
        </Card>

        <Card className="cursor-pointer transition-colors hover:bg-accent">
          <CardContent className="flex items-center justify-between p-4">
            <div className="flex items-center gap-3">
              <History className="h-5 w-5 text-warm-brown" />
              <span className="font-medium">注文履歴</span>
            </div>
            <span className="text-sm text-text-muted">24件</span>
          </CardContent>
        </Card>

        <Card className="cursor-pointer transition-colors hover:bg-accent">
          <CardContent className="flex items-center justify-between p-4">
            <div className="flex items-center gap-3">
              <Settings className="h-5 w-5 text-text-muted" />
              <span className="font-medium">設定</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* ログアウトボタン */}
      <div className="pt-4">
        <Button variant="outline" className="w-full">
          ログアウト
        </Button>
      </div>
    </div>
  )
}