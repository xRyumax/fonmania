import { MapPin, Calendar, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-4 mt-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
          {/* Brand */}
          <div>
            <a href="#" className="text-2xl lg:text-3xl font-bold text-white mb-4 inline-block">
              Fonmania <span className="text-[#FDBD24]">Móvil</span>
            </a>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              Especialistas en tecnología con más de 3 años de experiencia. Tu dispositivo en las mejores manos
              profesionales.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <Facebook className="h-6 w-6 hover:text-[#FDBD24] transition duration-300 cursor-pointer" />
              <Twitter className="h-6 w-6 hover:text-[#FDBD24] transition duration-300 cursor-pointer" />
              <Instagram className="h-6 w-6 hover:text-[#FDBD24] transition duration-300 cursor-pointer" />
              <Linkedin className="h-6 w-6 hover:text-[#FDBD24] transition duration-300 cursor-pointer" />
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xl text-[#FDBD24] font-semibold mb-4">Navegación</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#" className="hover:text-white transition duration-200">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition duration-200">
                  Tienda
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition duration-200">
                  Servicio Técnico
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition duration-200">
                  Nosotros
                </a>
              </li>
            </ul>
          </div>

          {/* Schedule */}
          <div>
            <h3 className="text-xl text-[#FDBD24] font-semibold mb-4">Horario de Atención</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center justify-center md:justify-start gap-2">
                <Calendar className="h-5 w-5" />
                <div>
                  <p className="font-semibold">Lunes a Viernes</p>
                  <p className="text-sm">9:00 am - 8:00 pm</p>
                </div>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2">
                <Calendar className="h-5 w-5" />
                <div>
                  <p className="font-semibold">Sábado a Domingo</p>
                  <p className="text-sm">9:00 am - 6:00 pm</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl text-[#FDBD24] font-semibold mb-4">Contacto</h3>
            <div className="space-y-2 text-gray-300 text-sm">
              <p className="flex items-center justify-center md:justify-start gap-2">
                <MapPin className="h-4 w-4" />
                Av. Elias Aguirre 304 - 306 Interior A2
              </p>
              <p className="flex items-center justify-center md:justify-start gap-2">
                <MapPin className="h-4 w-4" />
                Av. Elias Aguirre 320 Tienda 4
              </p>
              <p className="flex items-center justify-center md:justify-start gap-2">
                <Phone className="h-4 w-4" />
                <a
                  href="https://wa.me/+51935881969"
                  target="_blank"
                  className="hover:text-white transition duration-200"
                  rel="noreferrer"
                >
                  +51 935 881 969
                </a>
              </p>
              <p className="text-gray-500 text-xs">(Click para Whatsapp)</p>
              <p className="flex items-center justify-center md:justify-start gap-2">
                <Mail className="h-4 w-4" />
                info@fonmaniamovil.com
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-sm text-gray-500">&copy; 2025 Fonmania Móvil. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
