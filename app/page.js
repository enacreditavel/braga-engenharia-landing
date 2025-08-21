import Image from "next/image";

// app/page.tsx (Next.js 13+ com Tailwind)
export default function Home() {
  return (
    <main className="bg-white text-[#0B2C49]">
      {/* Header */}
      <header className="flex justify-between items-center px-8 py-4 shadow">
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="Logo Braga Engenharia" className="h-12" />
        </div>
        <nav className="hidden md:flex gap-6 text-[#0B2C49] font-medium">
          <a href="#sobre" className="hover:text-[#C62828]">
            Sobre
          </a>
          <a href="#servicos" className="hover:text-[#C62828]">
            Serviços
          </a>
          <a href="#contato" className="hover:text-[#C62828]">
            Contato
          </a>
        </nav>
        <a
          href="#contato"
          className="bg-[#C62828] text-white px-4 py-2 rounded-lg hover:bg-red-700"
        >
          Fale Conosco
        </a>
      </header>

      {/* Hero Section */}
      <section className="h-screen bg-[#F5F5F5] text-center py-20 flex flex-col justify-center items-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Braga Engenharia & Construções
        </h1>
        <p className="text-lg md:text-xl text-[#757575] mb-8">
          Projetando e construindo com qualidade, segurança e inovação.
        </p>
        <a
          href="#contato"
          className="bg-[#C62828] text-white px-6 py-3 rounded-lg text-lg hover:bg-red-700"
        >
          Solicite um Orçamento
        </a>
      </section>

      {/* Sobre */}
      <section id="sobre" className="px-8 py-20 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Sobre Nós</h2>
        <p className="text-[#757575] leading-relaxed">
          A <strong>Braga Engenharia & Construções</strong> atua no mercado de
          engenharia civil oferecendo soluções completas em projetos,
          construções e reformas. Nosso compromisso é entregar obras de
          qualidade, dentro do prazo e com total transparência.
        </p>
      </section>

      {/* Serviços */}
      <section id="servicos" className="bg-[#F5F5F5] px-8 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">
          Nossos Serviços
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-4">Projetos Estruturais</h3>
            <p className="text-[#757575]">
              Desenvolvimento de projetos inovadores e seguros para obras de
              pequeno e grande porte.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-4">Execução de Obras</h3>
            <p className="text-[#757575]">
              Construção civil com foco em qualidade, prazo e sustentabilidade.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-4">
              Reformas & Consultoria
            </h3>
            <p className="text-[#757575]">
              Serviços de reforma, manutenção e consultoria especializada em
              engenharia civil.
            </p>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="px-8 py-20 max-w-4xl mx-auto">
        {/* <h2 className="text-3xl font-bold mb-6">Entre em Contato</h2>
        <p className="text-[#757575] mb-6">
          Fale com nossa equipe e solicite um orçamento sem compromisso.
        </p>
        <form className="grid gap-4">
          <input
            type="text"
            placeholder="Seu Nome"
            className="border border-gray-300 rounded-lg px-4 py-3"
          />
          <input
            type="email"
            placeholder="Seu Email"
            className="border border-gray-300 rounded-lg px-4 py-3"
          />
          <textarea
            placeholder="Sua Mensagem"
            rows={4}
            className="border border-gray-300 rounded-lg px-4 py-3"
          ></textarea>
          <button
            type="submit"
            className="bg-[#C62828] text-white px-6 py-3 rounded-lg hover:bg-red-700"
          >
            Enviar Mensagem
          </button>
        </form> */}
        <a
          href="https://wa.me/5511940717379?text=Olá!%20Gostaria%20de%20um%20orçamento."
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            fill="currentColor"
            className="w-8 h-8"
          >
            <path d="M16.002 3.003c-7.18 0-13 5.82-13 12.997 0 2.293.61 4.532 1.77 6.494L3 29l6.672-1.747A12.9 12.9 0 0016 29c7.18 0 13-5.82 13-13s-5.82-12.997-13-12.997zm0 23.68a10.7 10.7 0 01-5.457-1.504l-.39-.232-3.962 1.037 1.057-3.867-.254-.398A10.63 10.63 0 015.29 16c0-5.907 4.805-10.71 10.712-10.71 5.906 0 10.71 4.803 10.71 10.71 0 5.908-4.804 10.711-10.71 10.711zm5.865-7.96c-.32-.16-1.897-.934-2.19-1.04-.293-.107-.507-.16-.72.16-.213.32-.827 1.04-1.013 1.254-.187.213-.373.24-.693.08-.32-.16-1.351-.498-2.573-1.588-.951-.849-1.594-1.896-1.78-2.216-.187-.32-.02-.493.14-.652.144-.143.32-.373.48-.56.16-.187.213-.32.32-.533.107-.213.054-.4-.027-.56-.08-.16-.72-1.733-.987-2.373-.26-.627-.52-.54-.72-.55-.187-.013-.4-.013-.613-.013-.213 0-.56.08-.853.4-.293.32-1.12 1.093-1.12 2.667 0 1.573 1.147 3.093 1.307 3.307.16.213 2.253 3.44 5.467 4.814.76.327 1.353.52 1.813.667.76.24 1.453.213 2.001.133.613-.093 1.897-.773 2.166-1.52.267-.747.267-1.387.187-1.52-.08-.133-.293-.213-.613-.373z" />
          </svg>
          Solicite um Orçamento via WhatsApp
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-[#0B2C49] text-white text-center py-6">
        <p>
          &copy; {new Date().getFullYear()} Braga Engenharia & Construções.
          Todos os direitos reservados.
        </p>
      </footer>
    </main>
  );
}
