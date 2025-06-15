import MyPage from '@/components/profile/MyPage'

export default function ProfileRoutePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 bg-primary-orange p-4 text-center text-text-light shadow-md">
        <h1 className="text-xl font-bold">マイページ</h1>
      </header>
      <main className="flex-grow p-md pb-24">
        <MyPage />
      </main>
    </div>
  )
}