import { useLayoutEffect, useRef, useState } from 'react'

const PRODUCTS = [
  { src: '/assets/images/product/classic-gold.png', name: '클래식 골드 12개입' },
  { src: '/assets/images/product/royal-biscuit.png', name: '로얄 비스킷 32개입' },
  { src: '/assets/images/product/gcube-milk.png', name: '지큐브 밀크 24개입' },
  { src: encodeURI('/assets/images/product/태블릿 밀크 카카오.jpg'), name: '태블릿 밀크 카카오' },
  { src: encodeURI('/assets/images/product/펄 다크 초콜릿.jpg'), name: '펄 다크 초콜릿' },
  { src: encodeURI('/assets/images/product/하트오브골드 6개입.jpg'), name: '하트오브골드 6개입' },
]

const VISIBLE_COUNT = 3
const MAX_START_INDEX = PRODUCTS.length - VISIBLE_COUNT
const CARD_WIDTH = 345
const CARD_GAP = 47
const STEP = CARD_WIDTH + CARD_GAP
const MOBILE_CARD_WIDTH = 300
const MOBILE_CARD_GAP = 16
const MOBILE_STEP = MOBILE_CARD_WIDTH + MOBILE_CARD_GAP

export default function Product() {
  const [scrollRatio, setScrollRatio] = useState(0)
  const [barOffset, setBarOffset] = useState(0)
  const [startIndex, setStartIndex] = useState(0)
  const [dragOffset, setDragOffset] = useState(0)
  const [isDesktopDragging, setIsDesktopDragging] = useState(false)
  const hasInteracted = useRef(false)
  const firstCardRef = useRef(null)
  const barWrapRef = useRef(null)
  const isDraggingRef = useRef(false)
  const dragStartXRef = useRef(0)
  const dragStartScrollRef = useRef(0)
  const isDesktopDraggingRef = useRef(false)
  const desktopDragStartXRef = useRef(0)
  const isPrevDisabled = startIndex === 0
  const isNextDisabled = startIndex === MAX_START_INDEX

  const handlePrev = () => {
    if (isPrevDisabled) return
    setStartIndex(i => i - 1)
  }

  const handleNext = () => {
    if (isNextDisabled) return
    setStartIndex(i => i + 1)
  }

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

  const handleDesktopPointerDown = (e) => {
    if (e.pointerType !== 'mouse') return
    isDesktopDraggingRef.current = true
    desktopDragStartXRef.current = e.clientX
    setIsDesktopDragging(true)
    setDragOffset(0)
    e.currentTarget.setPointerCapture(e.pointerId)
  }

  const handleDesktopPointerMove = (e) => {
    if (!isDesktopDraggingRef.current) return
    let delta = e.clientX - desktopDragStartXRef.current
    if (isPrevDisabled) delta = Math.min(delta, 0)
    if (isNextDisabled) delta = Math.max(delta, 0)
    setDragOffset(delta)
  }

  const handleDesktopPointerUp = (e) => {
    if (!isDesktopDraggingRef.current) return
    isDesktopDraggingRef.current = false
    setIsDesktopDragging(false)
    if (e.currentTarget.hasPointerCapture(e.pointerId)) {
      e.currentTarget.releasePointerCapture(e.pointerId)
    }
    const threshold = STEP / 4
    setDragOffset(current => {
      if (current <= -threshold && !isNextDisabled) {
        setStartIndex(i => Math.min(i + 1, MAX_START_INDEX))
      } else if (current >= threshold && !isPrevDisabled) {
        setStartIndex(i => Math.max(i - 1, 0))
      }
      return 0
    })
  }

  const handleTrackPointerDown = (e) => {
    markInteracted()
    if (e.pointerType !== 'mouse') return
    isDraggingRef.current = true
    dragStartXRef.current = e.clientX
    dragStartScrollRef.current = e.currentTarget.scrollLeft
    // scroll-snap fights direct scrollLeft assignment during a raw drag, snapping
    // it back to the nearest point on every write — disable it until pointerup.
    e.currentTarget.style.scrollSnapType = 'none'
    e.currentTarget.style.scrollBehavior = 'auto'
    e.currentTarget.setPointerCapture(e.pointerId)
  }

  const handleTrackPointerMove = (e) => {
    if (!isDraggingRef.current) return
    e.currentTarget.scrollLeft = dragStartScrollRef.current - (e.clientX - dragStartXRef.current)
  }

  const handleTrackPointerUp = (e) => {
    if (!isDraggingRef.current) return
    isDraggingRef.current = false
    const el = e.currentTarget
    el.style.scrollSnapType = ''
    el.style.scrollBehavior = ''
    if (el.hasPointerCapture(e.pointerId)) {
      el.releasePointerCapture(e.pointerId)
    }

    const dragDistance = el.scrollLeft - dragStartScrollRef.current
    const threshold = MOBILE_STEP / 4
    let targetScroll = dragStartScrollRef.current
    if (dragDistance > threshold) {
      targetScroll = dragStartScrollRef.current + MOBILE_STEP
    } else if (dragDistance < -threshold) {
      targetScroll = dragStartScrollRef.current - MOBILE_STEP
    }
    const maxScroll = el.scrollWidth - el.clientWidth
    targetScroll = Math.max(0, Math.min(targetScroll, maxScroll))
    el.scrollTo({ left: targetScroll, behavior: 'smooth' })
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

        {/* Desktop: sliding 3-card track */}
        <div className="relative pb-10 text-left before:absolute before:top-[276px] before:h-[328px] before:left-0 before:right-[calc((100%_-_100vw)/2)] before:z-0 before:bg-brand-gold before:content-[''] max-[1024px]:pb-8 max-[1024px]:before:top-auto max-[1024px]:before:h-[calc(346px*0.5_+_147px)] max-[768px]:hidden">
          <div className="ml-auto w-[1129px] overflow-hidden max-[1024px]:w-[737px]">
            <div
              className={`flex cursor-grab gap-[47px] select-none ${isDesktopDragging ? '' : 'transition-transform duration-500 ease-in-out'}`}
              style={{ transform: `translateX(${-(startIndex * STEP) + dragOffset}px)` }}
              onPointerDown={handleDesktopPointerDown}
              onPointerMove={handleDesktopPointerMove}
              onPointerUp={handleDesktopPointerUp}
              onPointerLeave={handleDesktopPointerUp}
            >
              {PRODUCTS.map(({ src, name }) => (
                <article key={name} className="relative z-[1] w-[345px] flex-none">
                  <img className="block h-[346px] w-[345px] cursor-pointer object-cover" src={src} alt={name} draggable={false} />
                  <p className="mt-9 font-pretendard text-[32px] font-light text-white">{name}</p>
                  <a
                    href="#"
                    className="mt-[13px] inline-flex h-[46px] items-center justify-center whitespace-nowrap border border-white p-[10px] font-cormorant text-[16px] font-semibold tracking-[1.5px] text-white outline outline-1 outline-offset-[-4px] outline-white transition-colors duration-200 ease-in-out hover:bg-white hover:text-brand-gold"
                  >
                    VIEW DETAILS
                  </a>
                </article>
              ))}
            </div>
          </div>
          <button
            type="button"
            aria-label="이전 제품 보기"
            onClick={handlePrev}
            disabled={isPrevDisabled}
            className={`absolute right-[76px] top-[524px] z-[1] h-[60px] w-[60px] max-[1024px]:hidden ${isPrevDisabled ? 'cursor-default opacity-20' : 'cursor-pointer opacity-100'}`}
          >
            <img src="/assets/images/common/productarrow.png" alt="" className="h-full w-full -scale-x-100" />
          </button>
          <button
            type="button"
            aria-label="다음 제품 보기"
            onClick={handleNext}
            disabled={isNextDisabled}
            className={`absolute right-0 top-[524px] z-[1] h-[60px] w-[60px] max-[1024px]:hidden ${isNextDisabled ? 'cursor-default opacity-20' : 'cursor-pointer opacity-100'}`}
          >
            <img src="/assets/images/common/productarrow.png" alt="" className="h-full w-full" />
          </button>
        </div>

        {/* Mobile: horizontal peek carousel */}
        <div className="hidden max-[768px]:block text-left">
          <div
            className="-mx-10 mb-[55px] flex cursor-grab snap-x snap-mandatory snap-always scroll-smooth gap-4 overflow-x-auto px-[calc((100vw-300px)/2)] select-none [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            onScroll={handleMobileScroll}
            onTouchStart={markInteracted}
            onWheel={markInteracted}
            onPointerDown={handleTrackPointerDown}
            onPointerMove={handleTrackPointerMove}
            onPointerUp={handleTrackPointerUp}
            onPointerLeave={handleTrackPointerUp}
          >
            {PRODUCTS.map(({ src, name }, i) => (
              <article key={name} ref={i === 0 ? firstCardRef : undefined} className="relative w-[300px] flex-none snap-center">
                <img className="block h-[320px] w-[300px] object-cover" src={src} alt={name} draggable={false} />
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
