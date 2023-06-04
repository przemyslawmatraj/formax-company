
import { useState } from 'react';
import services from'@config/services.json';

const Services = () => {
    return <section className="container mx-auto mt-[var(--space-2xl-3xl)] px-5">
    <h2 className="h2 text-center capitalize">Nasza oferta</h2>
    <p className="text-gray-500 text-center mt-[var(--space-xs-s)] mb-[var(--space-l-xl)] max-w-[700px] mx-auto">Oferujemy szeroki zakres prac remontowo-budowlanych, dopasowanych do indywidualnych potrzeb naszych klientów. Dbamy o terminowość i jakość realizacji każdego zlecenia, zapewniając spełnienie Państwa najbardziej wymagających oczekiwań.</p>
    <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] lg:grid-cols-3 gap-14 mt-6">
        {services.map((service) => (
            <article className="bg-white rounded-lg" key={service.name}>
                <img loading="lazy" src={ service.image } alt={ service.name } className="w-full h-48 object-cover object-center rounded-lg" />
                <h3 className="h3 mt-4">{ service.name }</h3>
                <p className="text-gray-500 mt-2">{ service.description}</p>
                <a href={ service.url } className="uppercase font-semibold text-red-600 mt-5 block">Zobacz</a>
            </article>
        ))}
    </div>
</section>
}

export default Services;