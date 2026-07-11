import { useLayoutEffect, useRef, useState } from 'react'

const PRODUCTS = [
  { src: '/assets/images/product/classic-gold.png', name: '클래식 골드 12개입' },
  { src: '/assets/images/product/royal-biscuit.png', name: '로얄 비스킷 32개입' },
  { src: '/assets/images/product/gcube-milk.png', name: '지큐브 밀크 24개입' },
]

export default function Product() {
  const [scrollRatio, setScrollRatio] = useState(0)
  const [barOffset, setBarOffset] = useState(0)
  const hasInteracted = useRef(false)
  const firstCardRef = useRef(null)
  const barWrapRef = useRef(null)

  useLayoutEffect(() => {
    const syncOffset = () => {
      if (!firstCardRef.current || !barWrapRef.current) return
      const cardLeft = firstCardRef.current.getBoundingClientRect().left
      const wrapLeft = barWrapRef.current.getBoundingClientRect().left
      setBarOffset(cardLeft - wrapLeft)
    }
    syncOffset()
    window.addEventListener('resize', syncOffset)
    return () => window.removeEventListener('resize', syncOffset)
  }, [])

  const markInteracted = () => {
    hasInteracted.current = true
  }

  const handleMobileScroll = (e) => {
    if (!hasInteracted.current) return
    const { scrollLeft, scrollWidth } = e.currentTarget
    const maxScroll = scrollWidth - e.currentTarget.clientWidth
    const ratio = maxScroll > 0 ? scrollLeft / maxScroll : 0
    setScrollRatio(ratio < 0.01 ? 0 : ratio)
  }

  return (
    <section className="overflow-x-hidden py-35 text-center max-[1440px]:py-30 max-[1024px]:py-20 max-[768px]:py-15">
      <div className="mx-auto w-full max-w-360 px-10">
        <div className="mb-[143px] flex justify-between text-left [align-items:last_baseline] max-[768px]:mb-[65px] max-[768px]:flex-col max-[768px]:items-center">
          <div className="max-[768px]:text-center">
            <h2 className="text-left font-cormorant text-[96px] font-medium max-[1440px]:text-5xl max-[1200px]:text-[40px] max-[1024px]:text-[34px] max-[768px]:mt-[70px] max-[768px]:text-center max-[768px]:text-[40px] max-[768px]:font-medium">
              Product
            </h2>
            <p className="text-left font-pretendard text-xl text-brand-text-sub max-[768px]:mt-[15px] max-[768px]:text-center max-[768px]:text-[18px]">고디바의 깊은 풍미를 만나보세요.</p>
          </div>
          <a href="#" className="flex items-center gap-1 text-lg text-brand-text-sub max-[768px]:hidden">
            더 많은 제품 보기{' '}
            <img src="/assets/images/common/more_icon.png" alt="" />
          </a>
        </div>

        {/* Desktop: 3-column grid */}
        <div className="relative grid grid-cols-[repeat(3,345px)] justify-end gap-[47px] pb-10 text-left before:absolute before:top-[276px] before:h-[328px] before:left-0 before:right-[calc((100%_-_100vw)/2)] before:z-0 before:bg-brand-gold before:content-[''] max-[1024px]:grid-cols-[repeat(2,345px)] max-[1024px]:pb-8 max-[1024px]:before:top-auto max-[1024px]:before:h-[calc(346px*0.5_+_147px)] max-[768px]:hidden">
          {PRODUCTS.map(({ src, name }) => (
            <article key={name} className="relative z-[1]">
              <img className="block h-[346px] w-[345px] cursor-pointer object-cover" src={src} alt={name} />
              <p className="mt-9 font-pretendard text-[32px] font-light text-white">{name}</p>
              <a
                href="#"
                className="mt-[13px] inline-flex h-[46px] items-center justify-center whitespace-nowrap border border-white p-[10px] font-cormorant text-[16px] font-semibold tracking-[1.5px] text-white outline outline-1 outline-offset-[-4px] outline-white transition-colors duration-200 ease-in-out hover:bg-white hover:text-brand-gold"
              >
                VIEW DETAILS
              </a>
            </article>
          ))}
          <img
            src="/assets/images/common/productarrow.png"
            alt="이전 제품 보기"
            className="absolute right-[76px] top-[524px] z-[1] h-[60px] w-[60px] -scale-x-100 opacity-20 max-[1024px]:hidden"
          />
          <img
            src="/assets/images/common/productarrow.png"
            alt="더 많은 제품 보기"
            className="absolute right-0 top-[524px] z-[1] h-[60px] w-[60px] max-[1024px]:hidden"
          />
        </div>

        {/* Mobile: horizontal peek carousel */}
        <div className="hidden max-[768px]:block text-left">
          <div
            className="-mx-10 mb-[55px] flex snap-x snap-mandatory gap-4 overflow-x-auto px-[calc((100vw-300px)/2)] [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            onScroll={handleMobileScroll}
            onTouchStart={markInteracted}
            onPointerDown={markInteracted}
            onWheel={markInteracted}
          >
            {PRODUCTS.map(({ src, name }, i) => (
              <article key={name} ref={i === 0 ? firstCardRef : undefined} className="relative w-[300px] flex-none snap-center">
                <img className="block h-[320px] w-[300px] object-cover" src={src} alt={name} />
                <div className="pointer-events-none absolute inset-0 bg-black/20" />
                <div className="absolute left-[23px] right-4 top-[23px] flex items-center justify-between">
                  <span className="font-pretendard text-[16px] font-semibold text-white">{name}</span>
                  <img src="/assets/images/common/product+_icon.png" alt={`${name} 더보기`} className="h-[35px] w-[35px]" />
                </div>
                <div className="absolute left-[23px] top-[70px] h-px w-[260px] bg-white/70" />
              </article>
            ))}
          </div>
          {/* Scroll progress indicator */}
          <div ref={barWrapRef} className="-mx-10">
            <div className="relative h-[3px] w-[300px] bg-brand-line" style={{ marginLeft: barOffset }}>
              <div
                className="absolute top-0 left-0 h-full w-1/5 bg-brand-dark transition-transform duration-300"
                style={{ transform: `translateX(${scrollRatio * 400}%)` }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
