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
        <h2 className="text-3xl font-bold mb-6">Entre em Contato</h2>
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
        </form>
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
