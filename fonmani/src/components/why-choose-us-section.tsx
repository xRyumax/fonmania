import { Shield, Truck, Headphones } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function WhyChooseUsSection() {
  const features = [
    {
      icon: Shield,
      title: "Garantía y Confianza",
      description: "Todos nuestros productos cuentan con garantía y soporte técnico.",
    },
    {
      icon: Truck,
      title: "Envío Rápido y Seguro",
      description: "Recibe tus compras en la puerta de tu casa en tiempo récord.",
    },
    {
      icon: Headphones,
      title: "Soporte al Cliente",
      description: "Estamos aquí para ayudarte en cada paso de tu compra.",
    },
  ]

  return (
    <section className="py-16 px-4 bg-[#7100E4] text-white rounded-lg mx-4 shadow-md">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-12">¿Por Qué Elegir Fonmania Móvil?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-[#7100E4]/90 border-[#FDBD24] text-white">
              <CardContent className="p-6 text-center">
                <feature.icon className="h-12 w-12 text-[#FDBD24] mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-lg">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
