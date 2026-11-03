import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-zinc-800 text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Canto superior esquerdo: victor | Next.js */}
        <Link 
          href="/" 
          className="text-xl font-bold tracking-tight hover:text-zinc-300 transition-colors flex items-center gap-2"
        >
          <span>Victor</span>
          <span className="text-zinc-500 font-normal">|</span>
          <span className="text-blue-400">Next.js</span>
        </Link>

        {/* Canto superior direito: HOME | SOBRE NÓS | PRODUTOS */}
        <nav className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm font-semibold tracking-wider text-zinc-300">
          <Link 
            href="/" 
            className="hover:text-white transition-colors uppercase"
          >
            HOME
          </Link>
          <span className="text-zinc-600 font-normal select-none">|</span>
          <Link 
            href="/sobre" 
            className="hover:text-white transition-colors uppercase"
          >
            SOBRE NÓS
          </Link>
          <span className="text-zinc-600 font-normal select-none">|</span>
          <Link 
            href="/produtos" 
            className="hover:text-white transition-colors uppercase"
          >
            PRODUTOS
          </Link>
        </nav>
      </div>
    </header>
  );
}
