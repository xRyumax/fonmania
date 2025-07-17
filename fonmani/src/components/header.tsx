import { Search, Store, MapPin, Wrench, CreditCard, Heart, ShoppingCart, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Header() {
  return (
    <header className="bg-[#7100E4] p-4 shadow-lg">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
          {/* Logo */}
          <a href="#" className="text-2xl lg:text-4xl font-bold text-white">
            Fonmania <span className="text-[#FDBD24]">Móvil</span>
          </a>

          {/* Search Bar */}
          <div className="relative w-full lg:w-1/3">
            <Input
              type="text"
              placeholder="¿Qué estás buscando?"
              className="w-full pl-10 pr-20 rounded-full border-0 focus:ring-2 focus:ring-[#FDBD24]"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Button className="absolute right-0 top-0 h-full bg-[#FDBD24] text-[#7100E4] font-bold px-4 rounded-r-full hover:bg-white">
              Buscar
            </Button>
          </div>

          {/* Navigation */}
          <nav className="w-full lg:w-auto">
            <ul className="flex flex-wrap justify-center lg:justify-end gap-2 lg:gap-4 text-sm">
              <li>
                <Button
                  variant="ghost"
                  className="text-white hover:text-[#FDBD24] hover:bg-white/10 text-xs lg:text-sm"
                >
                  <Store className="mr-1 h-4 w-4" /> Tienda
                </Button>
              </li>
              <li>
                <Button
                  variant="ghost"
                  className="text-white hover:text-[#FDBD24] hover:bg-white/10 text-xs lg:text-sm"
                >
                  <MapPin className="mr-1 h-4 w-4" /> Tiendas
                </Button>
              </li>
              <li>
                <Button
                  variant="ghost"
                  className="text-white hover:text-[#FDBD24] hover:bg-white/10 text-xs lg:text-sm"
                >
                  <Wrench className="mr-1 h-4 w-4" /> Servicio
                </Button>
              </li>
              <li>
                <Button
                  variant="ghost"
                  className="text-white hover:text-[#FDBD24] hover:bg-white/10 text-xs lg:text-sm"
                >
                  <CreditCard className="mr-1 h-4 w-4" /> Crédito
                </Button>
              </li>
              <li>
                <Button
                  variant="ghost"
                  className="text-white hover:text-[#FDBD24] hover:bg-white/10 text-xs lg:text-sm"
                >
                  <Heart className="mr-1 h-4 w-4" /> Favoritos
                </Button>
              </li>
              <li className="relative">
                <Button variant="ghost" className="text-white hover:text-[#FDBD24] hover:bg-white/10">
                  <ShoppingCart className="h-5 w-5" />
                  <span className="absolute -top-1 -right-1 bg-[#FDBD24] text-[#7100E4] text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center">
                    1
                  </span>
                </Button>
              </li>
              <li>
                <Button variant="ghost" className="text-white hover:text-[#FDBD24] hover:bg-white/10">
                  <User className="h-5 w-5" />
                </Button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}
