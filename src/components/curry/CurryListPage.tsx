import ProductCard from './ProductCard'

const mockCurries = [
  {
    id: "1",
    name: "とろけるビーフカレー",
    price: 1280,
    imageUrl: "/placeholder.svg?height=160&width=300",
    spiceLevel: 2,
  },
  {
    id: "2",
    name: "本格バターチキンカレー",
    price: 1450,
    imageUrl: "/placeholder.svg?height=160&width=300",
    spiceLevel: 1,
  },
  {
    id: "3",
    name: "情熱のキーマカレー",
    price: 1100,
    imageUrl: "/placeholder.svg?height=160&width=300",
    spiceLevel: 4,
  },
  {
    id: "4",
    name: "彩り野菜のグリーンカレー",
    price: 1350,
    imageUrl: "/placeholder.svg?height=160&width=300",
    spiceLevel: 3,
  },
]

export default function CurryListPage() {
  return (
    <div>
      <h2 className="mb-lg text-2xl font-bold text-warm-brown">カレー一覧</h2>
      <div className="grid grid-cols-1 gap-md sm:grid-cols-2">
        {mockCurries.map((curry) => (
          <ProductCard key={curry.id} product={curry} />
        ))}
      </div>
    </div>
  )
}