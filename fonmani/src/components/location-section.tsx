export function LocationSection() {
  return (
    <section className="py-16 px-4 bg-white rounded-lg mx-4 shadow-md text-center">
      <div className="container mx-auto">
        <h2 className="text-3xl lg:text-5xl font-bold text-[#7100E4] mb-6">
          Encuéntranos en Arequipa{" "}
          <span className="text-[#FDBD24] inline-block transform rotate-12 text-2xl lg:text-4xl">📍</span>
        </h2>
        <p className="text-lg md:text-xl lg:text-2xl mb-10 max-w-3xl mx-auto font-light text-gray-700">
          Visítanos en nuestra tienda física o ubícanos fácilmente con nuestro mapa interactivo. ¡Te esperamos!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="rounded-lg overflow-hidden shadow-lg border-2 border-[#7100E4]">
            <img
              src="/placeholder.svg?height=400&width=600"
              alt="Tienda Fonmania Móvil"
              className="w-full h-64 md:h-80 object-cover"
            />
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg border-2 border-[#7100E4]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3828.618641199321!2d-71.53835638520267!3d-16.40248268864703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91490215a7b6a12f%3A0x7052a2b0e6e7d6b!2sAv.%20El%C3%ADas%20Aguirre%20304-306%2C%20Miraflores%2004001%2C%20Per%C3%BA!5e0!3m2!1ses-419!2spe!4v1678901234567!5m2!1ses-419!2spe"
              width="100%"
              height="320"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa Fonmania"
              className="w-full h-64 md:h-80"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}
