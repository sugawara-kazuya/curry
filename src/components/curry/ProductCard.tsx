import Image from "next/image"

// As per spec: interface CurryProduct
interface CurryProduct {
  id: string
  name: string
  price: number
  imageUrl: string
  spiceLevel: 1 | 2 | 3 | 4 | 5
}

interface ProductCardProps {
  product: CurryProduct
}

const SpiceLevel = ({ level }: { level: number }) => (
  <div className="flex items-center gap-1">
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <div key={i} className={`h-2 w-2 rounded-full ${i < level ? "bg-spice-red" : "bg-mild-green opacity-30"}`} />
      ))}
    </div>
    <span className="text-xs font-medium text-text-muted">{["甘口", "中辛", "辛口", "大辛", "激辛"][level - 1]}</span>
  </div>
)

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="w-full overflow-hidden rounded-lg bg-white shadow-md transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-lg">
      <div className="relative h-40 w-full">
        <Image
          src={product.imageUrl || "/placeholder.svg"}
          alt={product.name}
          fill
          style={{ objectFit: "cover" }}
          className="rounded-t-md"
        />
      </div>
      <div className="p-md">
        <h3 className="text-lg font-bold text-text-dark">{product.name}</h3>
        <div className="my-sm">
          <SpiceLevel level={product.spiceLevel} />
        </div>
        <p className="text-xl font-bold text-primary-orange">¥{product.price.toLocaleString()}</p>
      </div>
    </div>
  )
}