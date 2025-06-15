import { ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const mockProducts = [
  {
    id: "1",
    name: "カレースパイスセット",
    description: "本格カレーに欠かせない5種類のスパイスセット",
    price: 2980,
    imageUrl: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "2",
    name: "カレー粉セット",
    description: "さまざまな辛さを3種類のカレー粉",
    price: 1500,
    imageUrl: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "3",
    name: "レトルトカレー詰め合わせ",
    description: "人気のレトルトカレーをお得なセットに",
    price: 3200,
    imageUrl: "/placeholder.svg?height=200&width=300",
  },
]

export default function ShopPage() {
  return (
    <div>
      <h2 className="mb-lg text-2xl font-bold text-warm-brown">おすすめ商品</h2>
      <div className="grid grid-cols-1 gap-md md:grid-cols-2 lg:grid-cols-3">
        {mockProducts.map((product) => (
          <Card key={product.id} className="overflow-hidden">
            <CardHeader className="p-0">
              <div className="relative h-48 w-full">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="h-full w-full object-cover"
                />
              </div>
            </CardHeader>
            <CardContent className="p-4">
              <CardTitle className="text-lg">{product.name}</CardTitle>
              <CardDescription className="mt-2">{product.description}</CardDescription>
            </CardContent>
            <CardFooter className="flex items-center justify-between p-4">
              <p className="text-xl font-bold text-primary-orange">¥{product.price.toLocaleString()}</p>
              <Button size="sm" className="gap-2">
                <ShoppingBag className="h-4 w-4" />
                購入
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}