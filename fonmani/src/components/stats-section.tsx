import { Wrench, ThumbsUp, Clock, Award, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function StatsSection() {
  const stats = [
    { icon: Wrench, number: "5000+", label: "Dispositivos Reparados" },
    { icon: ThumbsUp, number: "98%", label: "Clientes Satisfechos" },
    { icon: Clock, number: "24h", label: "Tiempo Promedio" },
    { icon: Award, number: "3 años", label: "De Experiencia" },
  ]

  return (
    <section className="py-16 px-4 bg-white rounded-lg mx-4 shadow-md">
      <div className="container mx-auto text-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <Card key={index} className="border-gray-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <stat.icon className="h-12 w-12 text-[#7100E4] mx-auto mb-4" />
                <p className="text-3xl font-bold text-black mb-2">{stat.number}</p>
                <p className="text-gray-600">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <h2 className="text-3xl lg:text-5xl font-bold text-black mb-6">
          Los mejores <span className="text-[#7100E4]">celulares</span> al mejor precio{" "}
          <span className="text-[#FDBD24] inline-block transform rotate-12 text-2xl lg:text-4xl">💰</span>
        </h2>

        <Button className="bg-gradient-to-r from-[#7100E4] to-purple-600 text-white font-bold py-3 px-8 rounded-full text-lg hover:opacity-90 transition duration-300 shadow-lg">
          <Star className="mr-2 h-5 w-5" /> Productos Destacados <Star className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </section>
  )
}
