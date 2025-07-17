import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function NewsletterSection() {
  return (
    <section className="bg-[#FDBD24] text-[#7100E4] py-16 px-4 text-center rounded-lg mx-4 shadow-md">
      <div className="container mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold mb-6">¡No te Pierdas Nuestras Ofertas Exclusivas!</h2>
        <p className="text-lg lg:text-xl mb-8 max-w-2xl mx-auto">
          Suscríbete a nuestro boletín para recibir las últimas noticias y promociones directamente en tu bandeja de
          entrada.
        </p>
        <form className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-xl mx-auto">
          <Input
            type="email"
            placeholder="Tu correo electrónico"
            className="rounded-full border-2 border-[#7100E4] focus:ring-2 focus:ring-[#7100E4] text-black"
          />
          <Button
            type="submit"
            className="bg-[#7100E4] text-white font-bold rounded-full hover:bg-black transition duration-300 shadow-lg w-full sm:w-auto px-8"
          >
            Suscribirme
          </Button>
        </form>
      </div>
    </section>
  )
}
