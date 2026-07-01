import { ReactNode } from 'react'
import { Squares } from "./squares-background"
import Icon from "@/components/ui/icon"

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
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
        <a
          href="tel:+79537207563"
          className="flex items-center gap-2 bg-[#FF4D00] hover:bg-[#e04400] transition-colors text-white font-semibold px-4 py-2 rounded-full text-sm"
        >
          <Icon name="Phone" size={15} />
          +7 953 720-75-63
        </a>
      </header>
      <div className="relative z-20 h-full">
        {children}
      </div>
    </div>
  )
}