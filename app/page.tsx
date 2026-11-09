import Link from "next/link";

export default function Home() {
  return (
    <div className="py-12 flex flex-col items-center text-center">
      <div className="inline-block bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs px-3 py-1 rounded-full font-semibold uppercase tracking-wider mb-4">
        Projeto Next.JS do Victor
      </div>
      
      <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
        Bem-vindo ao <span className="text-blue-400">Victor | Next.JS</span>
      </h1>
      
      <p className="max-w-2xl text-lg text-zinc-400 mb-10 leading-relaxed">
        Este site foi construído com Next.JS, React e Tailwind CSS. Explore as páginas abaixo para navegar pelo conteúdo e testar as transições de rotas.
      </p>

      {/* Ações / Links principais */}
      <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
        <Link
          href="/sobre"
          className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium shadow-lg shadow-blue-600/20 transition-all hover:scale-[1.02]"
        >
          Conhecer Sobre Nós
        </Link>
        <Link
          href="/produtos"
          className="px-6 py-3 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-100 font-medium border border-zinc-700 transition-all hover:scale-[1.02]"
        >
          Ver Produtos
        </Link>
      </div>

      {/* Cards de Navegação */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl text-left">
        <Link
          href="/sobre"
          className="p-6 rounded-xl bg-zinc-800/50 border border-zinc-700/60 hover:border-blue-500/50 hover:bg-zinc-800 transition-all group"
        >
          <h2 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors flex items-center justify-between">
            Sobre Nós <span>→</span>
          </h2>
          <p className="text-zinc-400 text-sm leading-relaxed">
            Descubra quem somos, nossos objetivos, tecnologias utilizadas e a história deste projeto.
          </p>
        </Link>

        <Link
          href="/produtos"
          className="p-6 rounded-xl bg-zinc-800/50 border border-zinc-700/60 hover:border-blue-500/50 hover:bg-zinc-800 transition-all group"
        >
          <h2 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors flex items-center justify-between">
            Nossos Produtos <span>→</span>
          </h2>
          <p className="text-zinc-400 text-sm leading-relaxed">
            Veja a nossa seleção de produtos e soluções em destaque com detalhes e demonstrações.
          </p>
        </Link>
      </div>
    </div>
  );
}
