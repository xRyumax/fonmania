import { Filter, ShoppingCart, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function ProductSection() {
  const categories = [
    { name: "Celulares", count: 52, active: true },
    { name: "Accesorios", count: 1, active: false },
    { name: "Repuestos", count: 0, active: false },
    { name: "Tablets", count: 0, active: false },
    { name: "Otros", count: 1, active: false },
  ]

  const products = [
    {
      name: "Motorola Moto G75 5G",
      price: 380,
      originalPrice: 450,
      rating: 4.5,
      reviews: 127,
      buyers: 98,
      badges: ["NUEVO", "OFERTA", "ENVÍO GRATIS"],
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Honor Magic 7 Lite 5G (256GB)",
      price: 450,
      originalPrice: 540,
      rating: 4.5,
      reviews: 105,
      buyers: 96,
      badges: ["NUEVO", "OFERTA", "ENVÍO GRATIS"],
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Apple Honor 400 Lite",
      price: 350,
      originalPrice: 420,
      rating: 4.5,
      reviews: 122,
      buyers: 93,
      badges: ["NUEVO", "OFERTA", "ENVÍO GRATIS"],
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Samsung A26 5G (8GB/256GB)",
      price: 1110,
      originalPrice: 1150,
      rating: 4.5,
      reviews: 128,
      buyers: 92,
      badges: ["NUEVO", "ENVÍO GRATIS"],
      image: "/placeholder.svg?height=200&width=200",
    },
  ]

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case "NUEVO":
        return "bg-green-500"
      case "OFERTA":
        return "bg-red-500"
      case "ENVÍO GRATIS":
        return "bg-blue-500"
      default:
        return "bg-gray-500"
    }
  }

  return (
    <section className="py-16 px-4 bg-white rounded-lg mx-4 shadow-md">
      <div className="container mx-auto">
        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-8">
          {categories.map((category, index) => (
            <Button
              key={index}
              variant={category.active ? "default" : "secondary"}
              className={`rounded-full ${
                category.active
                  ? "bg-[#7100E4] text-white hover:bg-[#FDBD24] hover:text-[#7100E4]"
                  : "bg-gray-200 text-black hover:bg-[#FDBD24] hover:text-[#7100E4]"
              } transition duration-300`}
            >
              {category.name} <span className="ml-2 text-sm opacity-80">{category.count} productos</span>
            </Button>
          ))}
        </div>

        {/* Filter/Sort Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
          <div className="flex items-center mb-4 sm:mb-0 gap-2">
            <Filter className="text-[#7100E4] h-5 w-5" />
            <span className="font-semibold text-black">Ordenar por:</span>
            <Select defaultValue="bestsellers">
              <SelectTrigger className="w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="bestsellers">Más vendidos</SelectItem>
                <SelectItem value="price-low">Precio: Menor a Mayor</SelectItem>
                <SelectItem value="price-high">Precio: Mayor a Menor</SelectItem>
                <SelectItem value="newest">Novedades</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="text-gray-600">
            <span className="font-semibold text-black">{products.length} productos</span> encontrados
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-4">
                {/* Badges */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {product.badges.map((badge, badgeIndex) => (
                    <Badge key={badgeIndex} className={`${getBadgeColor(badge)} text-white text-xs font-bold`}>
                      {badge}
                    </Badge>
                  ))}
                </div>

                {/* Product Image */}
                <div className="aspect-square mb-4 bg-gray-100 rounded-lg flex items-center justify-center">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-contain rounded-lg"
                  />
                </div>

                {/* Product Info */}
                <h3 className="text-lg font-semibold text-black mb-2 line-clamp-2">{product.name}</h3>

                {/* Rating */}
                <div className="flex items-center justify-center mb-2 text-[#FDBD24]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`h-4 w-4 ${i < Math.floor(product.rating) ? "fill-current" : ""}`} />
                  ))}
                  <span className="text-gray-600 text-sm ml-2">({product.reviews})</span>
                </div>

                {/* Price */}
                <div className="text-center mb-2">
                  <div className="text-xl font-bold text-[#7100E4]">S/. {product.price}</div>
                  <div className="text-gray-500 line-through text-sm">S/. {product.originalPrice}</div>
                </div>

                <p className="text-gray-600 text-sm text-center mb-4">{product.buyers} compraron</p>

                {/* Add to Cart Button */}
                <Button className="w-full bg-[#7100E4] text-white font-bold rounded-full hover:bg-[#FDBD24] hover:text-[#7100E4] transition duration-300">
                  <ShoppingCart className="mr-2 h-4 w-4" /> Agregar
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
