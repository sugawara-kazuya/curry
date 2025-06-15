"use client"

import { Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

// サンプルのAI応答（Markdown形式）
const sampleAiMarkdownResponse = `
### おすすめカレー診断結果

あなたにぴったりのカレーは **「シーフードとココナッツミルクの南国風カレー」** です！

#### 特徴
*   **辛さ**: 🌶️🌶️ (中辛)
*   **主な具材**: エビ、イカ、ホタテ、パプリカ、ココナッツミルク
*   **風味**: ココナッツの甘みとスパイスの刺激が絶妙なバランス

#### おすすめポイント
*   魚介の旨味がたっぷり！
*   ココナッツミルクでマイルドな口当たり。
*   彩り豊かで見た目も楽しめます。

**レシピのヒント:**
1.  玉ねぎをじっくり炒めて甘みを引き出します。
2.  シーフードは火を通しすぎないのがコツ。
3.  仕上げにナンプラーを少し加えると、より本格的な風味に！

ぜひお試しくださいね！
`

export default function AiChatPage() {
  return (
    <div className="flex h-[calc(100vh-160px)] flex-col">
      <h2 className="mb-lg text-2xl font-bold text-warm-brown">AIチャット</h2>
      <div className="flex-grow space-y-md overflow-y-auto rounded-lg bg-white/50 p-md">
        {/* AI Message - Markdown */}
        <div className="prose prose-sm max-w-none rounded-md border border-warm-brown/20 bg-cream-white p-md shadow-sm prose-headings:text-warm-brown prose-strong:text-primary-orange">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{sampleAiMarkdownResponse}</ReactMarkdown>
        </div>

        {/* User Message */}
        <div className="flex justify-end">
          <div className="max-w-[280px] rounded-lg bg-primary-orange p-3 text-white shadow-sm">
            <p className="text-sm">野菜たっぷりの辛口カレーが食べたいな</p>
          </div>
        </div>
      </div>
      <div className="mt-4 flex items-center gap-2 border-t border-warm-brown/20 pt-4">
        <Input
          type="text"
          placeholder="メッセージを入力..."
          className="h-12 flex-grow rounded-full border-warm-brown/50 bg-white focus-visible:ring-primary-orange"
        />
        <Button
          size="icon"
          className="h-10 w-10 flex-shrink-0 rounded-full bg-primary-orange hover:bg-secondary-yellow"
        >
          <Send className="h-5 w-5" />
        </Button>
      </div>
    </div>
  )
}