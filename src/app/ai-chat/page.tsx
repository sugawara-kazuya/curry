import AiChatPage from '@/components/ai-chat/AiChatPage'

export default function AiChatRoutePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 bg-primary-orange p-4 text-center text-text-light shadow-md">
        <h1 className="text-xl font-bold">AIカレー診断</h1>
      </header>
      <main className="flex-grow p-md pb-24">
        <AiChatPage />
      </main>
    </div>
  )
}