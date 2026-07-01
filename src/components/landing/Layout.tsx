import { useState, ReactNode } from 'react'
import { Squares } from "./squares-background"
import Icon from "@/components/ui/icon"

interface LayoutProps {
  children: ReactNode
  onNavClick?: (index: number) => void
}

const NAV_LINKS = [
  { label: 'Примеры работ', index: 2 },
  { label: 'Отзывы', index: 4 },
]

export default function Layout({ children, onNavClick }: LayoutProps) {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleNav = (index: number) => {
    onNavClick?.(index)
    setMenuOpen(false)
  }

  return (
    <div className="h-screen overflow-hidden bg-black relative">
      <div className="absolute inset-0 z-10">
        <Squares
          direction="diagonal"
          speed={0.5}
          squareSize={40}
          borderColor="#333"
          hoverFillColor="#222"
        />
      </div>

      <header className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 md:px-12 py-4">
        <span className="text-white font-bold text-lg tracking-tight">Натяжные потолки · Ярославль</span>

        <nav className="hidden md:flex items-center gap-6 mr-6">
          {NAV_LINKS.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNav(link.index)}
              className="text-neutral-300 hover:text-white text-sm font-medium transition-colors"
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="tel:+79537207563"
            className="flex items-center gap-2 bg-[#FF4D00] hover:bg-[#e04400] transition-colors text-white font-semibold px-4 py-2 rounded-full text-sm"
          >
            <Icon name="Phone" size={15} />
            <span className="hidden sm:inline">+7 953 720-75-63</span>
          </a>
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Меню"
          >
            <Icon name={menuOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-30 bg-black/95 flex flex-col items-center justify-center gap-8 md:hidden">
          {NAV_LINKS.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNav(link.index)}
              className="text-white text-2xl font-semibold hover:text-[#FF4D00] transition-colors"
            >
              {link.label}
            </button>
          ))}
          <a
            href="tel:+79537207563"
            className="flex items-center gap-2 bg-[#FF4D00] text-white font-semibold px-6 py-3 rounded-full text-lg mt-4"
            onClick={() => setMenuOpen(false)}
          >
            <Icon name="Phone" size={18} />
            +7 953 720-75-63
          </a>
        </div>
      )}

      <div className="relative z-20 h-full">
        {children}
      </div>
    </div>
  )
}
