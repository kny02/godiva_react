import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navLinkClass =
  'font-sans text-lg font-light text-white max-[1024px]:block max-[1024px]:border-b max-[1024px]:border-white/10 max-[1024px]:px-6 max-[1024px]:py-[18px]'

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60)
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsNavOpen(false)
  }, [location])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[1000] h-25 text-white transition-colors duration-[250ms] ease-in-out ${
        isScrolled ? 'bg-brand-dark' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto grid h-full w-full max-w-360 grid-cols-[1fr_auto_1fr] items-center px-10">
        <div className="flex items-center gap-6 justify-self-start">
          <button
            type="button"
            className="hidden cursor-pointer max-[1024px]:block"
            aria-label="메뉴 열기"
            onClick={() => setIsNavOpen(prev => !prev)}
          >
            ☰
          </button>
          <nav
            className={`flex gap-6 max-[1024px]:fixed max-[1024px]:top-25 max-[1024px]:left-0 max-[1024px]:w-full max-[1024px]:flex-col max-[1024px]:gap-0 max-[1024px]:bg-brand-dark max-[1024px]:transition-[transform,opacity] max-[1024px]:duration-[250ms] max-[1024px]:ease-in-out ${
              isNavOpen
                ? 'max-[1024px]:pointer-events-auto max-[1024px]:translate-y-0 max-[1024px]:opacity-100'
                : 'max-[1024px]:pointer-events-none max-[1024px]:-translate-y-full max-[1024px]:opacity-0'
            }`}
          >
            <div className="group relative flex items-center max-[1024px]:flex-col max-[1024px]:items-stretch">
              <a href="#" className={navLinkClass}>Collection</a>
              <ul className="absolute top-full left-1/2 min-w-40 -translate-x-1/2 -translate-y-1.5 bg-brand-dark py-2 opacity-0 pointer-events-none transition-[opacity,transform] duration-200 ease-in-out group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100 max-[1024px]:static max-[1024px]:min-w-0 max-[1024px]:translate-x-0 max-[1024px]:translate-y-0 max-[1024px]:bg-transparent max-[1024px]:py-0 max-[1024px]:pointer-events-auto max-[1024px]:opacity-100">
                {['Chocolate', 'Cake', 'Bakery', 'Icecream'].map(item => (
                  <li key={item}>
                    <a
                      href="#"
                      className="block whitespace-nowrap px-6 py-3 text-center font-sans text-base font-normal text-white transition-colors duration-200 ease-in-out hover:text-brand-gold max-[1024px]:border-b max-[1024px]:border-white/5 max-[1024px]:py-3.5 max-[1024px]:pr-6 max-[1024px]:pl-12 max-[1024px]:text-[15px] max-[1024px]:text-white/70"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <a href="#" className={navLinkClass}>Gifts</a>
            <a href="#" className={navLinkClass}>Event</a>
            <Link to="/about" className={navLinkClass}>About</Link>
          </nav>
        </div>

        <Link to="/" className="mt-6 justify-self-center">
          <img src="/assets/images/common/logo.png" alt="GODIVA" />
        </Link>

        <div className="flex items-center gap-6 justify-self-end">
          <button type="button" aria-label="검색" className="cursor-pointer">
            <img className="h-6 w-6" src="/assets/images/common/search_icon.png" alt="검색" />
          </button>
          <button type="button" aria-label="장바구니" className="cursor-pointer">
            <img className="h-6 w-6" src="/assets/images/common/cart_icon.png" alt="장바구니" />
          </button>
        </div>
      </div>
    </header>
  )
}
