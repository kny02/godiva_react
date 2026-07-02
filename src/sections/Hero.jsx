import { useState, useEffect, useRef, useCallback } from 'react'

const SLIDE_DATA = [
  {
    bg: '/assets/images/common/banner1.png',
    title: 'A Century of Chocolate Heritage',
    desc: <>Crafted since 1926 with artisanal tradition and rich flavor, <br />discover a special collection celebrating Godiva's 100th anniversary.</>,
  },
  {
    bg: '/assets/images/common/banner2.png',
    title: 'A New Beginning of Sweetness',
    desc: <>Experience the rich flavor of our Triple Chocolate Cake,<br />crafted with the perfect harmony of three distinct chocolates.</>,
  },
  {
    bg: '/assets/images/common/banner3.png',
    title: 'A Special Gift Inspired by Spring',
    desc: <>Celebrate the warmth and beauty of the season with our limited-edition Spring Gift Collection, available for a limited time only.</>,
  },
]

const INTERVAL = 4000
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
          <div
            key={i}
            className={`absolute inset-0 bg-cover bg-center opacity-0 transition-opacity duration-[900ms] ease-in-out ${i === current ? 'opacity-100' : ''}`}
            style={{ backgroundImage: `url('${slide.bg}')` }}
          />
        ))}
      </div>

      <div
        className={`absolute inset-x-0 bottom-15 z-[1] mx-auto w-full max-w-360 px-10 transition-opacity duration-200 ease-in-out max-[1024px]:bottom-25 max-[768px]:bottom-20 ${
          contentVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <h1 className="mb-[46px] font-cormorant text-7xl leading-none font-bold max-[1440px]:text-8xl max-[1200px]:text-[80px] max-[1024px]:text-6xl max-[768px]:text-4xl">
          {SLIDE_DATA[current].title}
        </h1>
        <p className="max-w-350 font-pretendard text-[32px] leading-[1.5] font-light max-[1440px]:text-4xl max-[1200px]:text-3xl max-[1024px]:text-2xl max-[768px]:text-base">
          {SLIDE_DATA[current].desc}
        </p>
      </div>

      <div className="absolute inset-x-0 bottom-15 z-[1] mx-auto flex w-full max-w-360 items-center justify-end gap-4 px-10 font-pretendard text-base">
        <div className="flex">
          {SLIDE_DATA.map((_, i) => (
            <span
              key={i}
              className={`h-0.5 w-[33.33px] bg-white/30 transition-colors duration-300 ease-in-out ${i === current ? 'bg-white' : ''}`}
            />
          ))}
        </div>
        <span className="tracking-[10%]">{current + 1}/{TOTAL}</span>
        <div className="flex items-center gap-0.5">
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
