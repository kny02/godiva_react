import { useState, useEffect, useRef, useCallback } from 'react'

const SLIDE_DATA = [
  {
    bg: '/assets/images/common/banner1.png',
    mobileBg: '/assets/images/common/mobilebanner1.png',
    title: <>A Century of<br />Chocolate Heritage</>,
    desc: <>Crafted since 1926 with artisanal tradition and rich flavor, <br />discover a special collection celebrating Godiva's 100th anniversary.</>,
  },
  {
    bg: '/assets/images/common/banner2.png',
    mobileBg: '/assets/images/common/mobilebanner2.png',
    title: 'A New Beginning of Sweetness',
    desc: <>Experience the rich flavor of our Triple Chocolate Cake,<br />crafted with the perfect harmony of three distinct chocolates.</>,
  },
  {
    bg: '/assets/images/common/banner3.png',
    mobileBg: '/assets/images/common/mobilebanner3.png',
    title: <>A Special Gift<br />Inspired by Spring</>,
    desc: <>Celebrate the warmth and beauty of the season with our limited-edition Spring Gift Collection, available for a limited time only.</>,
  },
]

const INTERVAL = 5000
const TOTAL = SLIDE_DATA.length

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [contentVisible, setContentVisible] = useState(true)
  const timerRef = useRef(null)

  const goTo = useCallback((index) => {
    const next = ((index % TOTAL) + TOTAL) % TOTAL
    setContentVisible(false)
    setTimeout(() => {
      setCurrent(next)
      setContentVisible(true)
    }, 200)
  }, [])

  const startAuto = useCallback(() => {
    timerRef.current = setInterval(() => {
      setCurrent(prev => {
        const next = (prev + 1) % TOTAL
        setContentVisible(false)
        setTimeout(() => setContentVisible(true), 200)
        return next
      })
    }, INTERVAL)
  }, [])

  const stopAuto = useCallback(() => {
    clearInterval(timerRef.current)
    timerRef.current = null
  }, [])

  useEffect(() => {
    if (isPlaying) startAuto()
    return stopAuto
  }, [isPlaying, startAuto, stopAuto])

  const handlePrev = () => {
    stopAuto()
    goTo(current - 1)
    if (isPlaying) startAuto()
  }

  const handleNext = () => {
    stopAuto()
    goTo(current + 1)
    if (isPlaying) startAuto()
  }

  const handleTogglePlay = () => {
    setIsPlaying(prev => !prev)
  }

  return (
    <section className="relative h-screen min-h-[720px] overflow-hidden bg-brand-dark text-white after:pointer-events-none after:absolute after:inset-0 after:bg-[linear-gradient(to_bottom,transparent_40%,rgba(0,0,0,0.55)_100%)] after:content-['']">
      <div className="absolute inset-0">
        {SLIDE_DATA.map((slide, i) => (
          <div key={i} className={`absolute inset-0 opacity-0 transition-opacity duration-[900ms] ease-in-out ${i === current ? 'opacity-100' : ''}`}>
            {/* 데스크탑 배경 */}
            <div
              className={`absolute inset-0 bg-cover bg-center ${slide.mobileBg ? 'max-[768px]:hidden' : ''}`}
              style={{ backgroundImage: `url('${slide.bg}')` }}
            />
            {/* 모바일 배경 */}
            {slide.mobileBg && (
              <div
                className="absolute inset-0 bg-cover bg-center hidden max-[768px]:block"
                style={{ backgroundImage: `url('${slide.mobileBg}')` }}
              />
            )}
          </div>
        ))}
      </div>

      {current === 2 && (
        <div className="pointer-events-none absolute inset-x-0 top-0 h-60 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.35),transparent)]" />
      )}

      <div
        className={`absolute inset-x-0 bottom-15 z-[1] mx-auto w-full max-w-360 px-10 transition-opacity duration-200 ease-in-out max-[1024px]:bottom-25 max-[768px]:bottom-20 ${
          contentVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <h1 className="mb-[46px] font-cormorant text-7xl leading-none font-bold max-[1440px]:text-8xl max-[1200px]:text-[80px] max-[1024px]:text-6xl max-[768px]:text-[40px] max-[768px]:leading-[1.2] max-[768px]:mb-5">
          {SLIDE_DATA[current].title}
        </h1>
        <p className="max-w-350 font-pretendard text-[32px] leading-[1.5] font-light max-[1440px]:text-4xl max-[1200px]:text-3xl max-[1024px]:text-2xl max-[768px]:text-[14px] max-[768px]:leading-[1.5]">
          {SLIDE_DATA[current].desc}
        </p>
      </div>

      {/* 모바일 전체 너비 인디케이터 */}
      <div className="absolute left-5 right-5 bottom-[35px] z-[1] hidden max-[768px]:flex">
        {SLIDE_DATA.map((_, i) => (
          <span
            key={i}
            className={`h-[2px] flex-1 transition-colors duration-300 ease-in-out ${i === current ? 'bg-white' : 'bg-white/15'}`}
          />
        ))}
      </div>

      <div className="absolute inset-x-0 bottom-15 z-[1] mx-auto flex w-full max-w-360 items-center justify-end gap-4 px-10 font-pretendard text-base">
        <div className="flex max-[768px]:hidden">
          {SLIDE_DATA.map((_, i) => (
            <span
              key={i}
              className={`h-[2px] w-[33.33px] transition-colors duration-300 ease-in-out ${i === current ? 'bg-white' : 'bg-white/30'}`}
            />
          ))}
        </div>
        <span className="tracking-[10%] max-[768px]:hidden">{current + 1}/{TOTAL}</span>
        <div className="flex items-center gap-0.5 max-[768px]:hidden">
          <button type="button" className="cursor-pointer" aria-label="이전 슬라이드" onClick={handlePrev}>
            <img src="/assets/images/common/arrowL_icon.png" alt="이전" />
          </button>
          <button
            type="button"
            className="flex w-[25px] cursor-pointer justify-center"
            aria-label="재생/정지"
            onClick={handleTogglePlay}
          >
            <img
              src={isPlaying ? '/assets/images/common/pause_icon.png' : '/assets/images/common/play_icon.png'}
              alt={isPlaying ? '정지' : '재생'}
            />
          </button>
          <button type="button" className="cursor-pointer" aria-label="다음 슬라이드" onClick={handleNext}>
            <img src="/assets/images/common/arrowR_icon.png" alt="다음" />
          </button>
        </div>
      </div>
    </section>
  )
}
