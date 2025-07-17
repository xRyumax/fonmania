import { Search, Store, MapPin, Wrench, CreditCard, Heart, ShoppingCart, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image";

export function Header() {
  return (
    <header className="flex items-center justify-center py-4 bg-white shadow-md">
      <div className="w-40 sm:w-56 md:w-64 lg:w-72 xl:w-80 2xl:w-96">
        <Image src="/logo.svg" alt="Logo Fonmania" width={800} height={384} priority className="w-full h-auto" />
      </div>
    </header>
  );
}
