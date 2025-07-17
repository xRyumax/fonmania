import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative bg-[#7100E4] text-white py-16 lg:py-24 px-4 text-center overflow-hidden rounded-lg mx-4 shadow-xl">
      <div className="absolute inset-0 bg-gradient-to-r from-[#7100E4] to-purple-600 opacity-90"></div>
      <div className="relative container mx-auto z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-8">
          <div className="w-24 h-24 lg:w-32 lg:h-32 bg-[#FDBD24] rounded-full flex items-center justify-center text-4xl lg:text-6xl">
            🐱
          </div>

          <div className="flex-grow max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              #Mi Celu al Crédito <span className="text-[#FDBD24]">aquí en Fonmania</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-8 font-light max-w-3xl mx-auto">
              Financia la tecnología que necesitas con las mejores condiciones.
            </p>
            <Button className="bg-[#FDBD24] text-[#7100E4] font-bold py-3 px-8 rounded-full text-lg hover:bg-white hover:text-[#7100E4] transition duration-300 shadow-lg">
              Solicitar Crédito <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <div className="w-24 h-24 lg:w-32 lg:h-32 bg-[#FDBD24] rounded-full flex items-center justify-center text-4xl lg:text-6xl">
            🐱
          </div>
        </div>
      </div>
    </section>
  )
}
