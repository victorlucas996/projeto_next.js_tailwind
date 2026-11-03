import Link from "next/link";

export default function Produtos() {
  return (
    <div className="py-8 max-w-5xl mx-auto px-4 sm:px-6">
      {/* Navegação de Migalhas (Breadcrumb / Link de caminho) */}
      <nav className="mb-6 text-sm text-zinc-500 dark:text-zinc-400">
        <Link href="/" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
          Home
        </Link>
        <span className="mx-2 text-zinc-400 dark:text-zinc-600">/</span>
        <span className="text-blue-500 font-medium">Produtos</span>
      </nav>

      <h1 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white mb-4">
        Produtos
      </h1>

      {/* Conteúdo zerado para início do desenvolvimento */}
      <div className="p-12 border border-dashed border-zinc-300 dark:border-zinc-800 rounded-xl text-center text-zinc-500 text-sm">
        Página de Produtos pronta para novo conteúdo.
      </div>
    </div>
  );
}
