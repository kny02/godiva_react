import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'

const TIMELINE = [
  {
    year: '1926',
    title: '벨기에 브뤼셀에서 탄생',
    desc: '피에르 드라우프스가 벨기에 브뤼셀에서 고디바를 설립하며 프리미엄 초콜릿의 역사가 시작되었습니다.',
  },
  {
    year: '1958',
    title: '골드 발롱탄 박스 출시',
    desc: '고디바를 대표하는 골드 컬러 패키지가 처음 출시되어 브랜드의 상징이 되었습니다.',
  },
  {
    year: '1972',
    title: '미국 시장 진출',
    desc: '유럽을 넘어 미국 시장에 진출하며 글로벌 프리미엄 초콜릿 브랜드로 성장했습니다.',
  },
  {
    year: '2026',
    title: '100주년, 새로운 헤리티지',
    desc: '탄생 100주년을 맞아 전통과 혁신을 모두 담은 새로운 컬렉션을 선보입니다.',
  },
]

export default function AboutPage() {
  useEffect(() => {
    document.title = 'About Us | GODIVA'
    return () => { document.title = 'GODIVA' }
  }, [])

  return (
    <>
      <Header />
      <main>
        <section className="relative flex h-90 items-center justify-center bg-cover bg-center bg-brand-dark text-center text-white after:absolute after:inset-0 after:bg-[rgba(20,10,6,0.55)] after:content-[''] max-[768px]:h-60">
          <div className="relative z-10 mx-auto w-full max-w-360 px-10">
            <p className="font-serif text-base tracking-[1px] text-brand-gold">[ A 100Year Legacy of Belgian Premium Chocolate ]</p>
            <h1 className="mt-3 font-serif text-4xl max-[768px]:text-2xl">고디바 브랜드 역사</h1>
          </div>
        </section>

        <div className="mx-auto w-full max-w-360 px-10">
          <nav className="py-4 text-[13px] text-brand-text-sub">
            <Link to="/" className="text-brand-text-sub">Home</Link> &gt;{' '}
            <Link to="/" className="text-brand-text-sub">About</Link> &gt;{' '}
            <span className="text-brand-text">브랜드 역사</span>
          </nav>
        </div>

        <section className="py-20 pb-30 max-[768px]:py-12 max-[768px]:pb-20">
          <div className="mx-auto w-full max-w-360 px-10">
            <p className="mx-auto mb-15 max-w-180 text-center text-[15px] leading-[1.9] text-brand-text">
              1926년 벨기에 브뤼셀에서 시작된 고디바는 100년에 가까운 시간 동안<br />
              장인의 정성과 혁신적인 기술로 프리미엄 초콜릿의 기준을 만들어왔습니다.
            </p>

            <div className="relative mx-auto max-w-200 before:absolute before:top-0 before:bottom-0 before:left-25 before:w-px before:bg-brand-line before:content-[''] max-[768px]:before:left-3">
              {TIMELINE.map(({ year, title, desc }) => (
                <div
                  key={year}
                  className="relative flex gap-8 pb-14 max-[768px]:flex-col max-[768px]:gap-2 max-[768px]:pl-8"
                >
                  <div className="shrink-0 grow-0 basis-25 text-right font-serif text-[22px] text-brand-maroon max-[768px]:flex-none max-[768px]:text-left">
                    {year}
                  </div>
                  <div className="flex-1 pl-8 max-[768px]:pl-0">
                    <h3 className="mb-2 text-[17px]">{title}</h3>
                    <p className="text-sm leading-[1.7] text-brand-text-sub">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
