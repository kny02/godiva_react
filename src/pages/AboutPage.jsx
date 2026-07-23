import { useEffect } from 'react'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'

const TIMELINE = [
  {
    year: '1926',
    title: '고디바의 시작, 장인의 첫 발걸음',
    lines: [
      '1926년, 피에르 드랍스 시니어는 브뤼셀의 과자점에서 프랄린을 만들기 시작했습니다.',
      '그의 세 아들 조셉, 프랑수아, 피에르 주니어 또한 아버지의 사업에 참여하였습니다.',
    ],
  },
  {
    year: '1945',
    title: "'고디바' 이름의 탄생",
    lines: [
      '드랍스 가족은 유럽에서 전해 내려오는 레이디 고디바의 전설에 깊은 감명을 받고,',
      "대담한, 관능과 같은 고디바의 기질과 고디바 정신을 본받아 상호명을 '고디바(GODIVA)'로 변경하였습니다.",
    ],
  },
  {
    year: '1946',
    title: '전설적인 트뤼플의 완성',
    lines: [
      '1946년, 피에르 드랍스 주니어는 자신의 트뤼플 레시피를 완성하였습니다.',
      '이는 독특한 코코아 무스와 코코아 파우더로 마무리된 트뤼플로, 고디바의 대표 아이콘이 됩니다.',
    ],
  },
  {
    year: '1968',
    title: '왕실이 인정한 초콜릿 브랜드',
    lines: [
      '1968년, 고디바는 벨기에 왕실의 공식 초콜릿으로 지정되며 ROYAL WARRANT를 수상하였습니다.',
      '고품질 초콜릿을 공급하며 브랜드의 위상을 확고히 했습니다.',
    ],
  },
  {
    year: '2012',
    title: '글로벌 프리미엄 브랜드로의 도약',
    lines: [
      '한국을 포함한 전 세계 100여 개국에서 매장을 운영하며 백화점, 면세점, 쇼핑몰 등 다양한 채널을 통해 글로벌 브랜드로 자리 잡았습니다.',
    ],
  },
  {
    year: '2025',
    title: '열정과 혁신의 100년',
    lines: [
      '고디바는 100주년을 맞이하며, 지난 한 세기 동안 이어온 열정과 장인정신, 그리고 혁신을 되돌아보고, 앞으로도 전 세계에 특별한 초콜릿 경험을 선사할 새로운 이정을 이어갑니다.',
    ],
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
      <main className="bg-brand-dark font-pretendard">

        {/* ── 1. Heritage & Craft ─────────────────────────────── */}
        <section>
          <div className="mx-auto grid max-w-360 grid-cols-2 px-10 min-h-[140vh] max-[1024px]:min-h-0 max-[768px]:grid-cols-1 max-[768px]:px-5 max-[768px]:pt-25">
            {/* Left: heritage image */}
            <img
              src="/assets/images/about/heritage.png"
              alt="Heritage"
              className="mt-[280px] block h-[1000px] w-[614px] object-cover max-[1024px]:mt-[120px] max-[1024px]:h-[700px] max-[1024px]:w-full max-[768px]:order-2 max-[768px]:mt-[60px] max-[768px]:h-auto max-[768px]:w-[88%] max-[768px]:aspect-[3/2] max-[768px]:mr-auto"
            />

            {/* Right: title + description */}
            <div className="flex flex-col pt-[280px] pb-[90px] pl-20 max-[1024px]:pt-[120px] max-[1024px]:pb-15 max-[1024px]:pl-10 max-[768px]:order-1 max-[768px]:pt-10 max-[768px]:pb-0 max-[768px]:pl-0">
              <h1 className="m-0 text-right font-cormorant text-[124px] leading-[1.2] font-bold text-[#f5ede4] max-[1024px]:text-[80px] max-[768px]:mt-[85px] max-[768px]:text-center max-[768px]:text-[48px] max-[768px]:leading-[1.15]">
                <span className="max-[768px]:hidden">
                  Heritage<br />
                  &amp;<br />
                  Craft
                </span>
                <span className="hidden max-[768px]:inline">Heritage &amp; Craft</span>
              </h1>

              <div className="mt-35 max-[1024px]:mt-15 max-[768px]:mt-[73px]">
                <p className="m-0 text-lg leading-[1.5] font-light text-white max-[768px]:text-center max-[768px]:text-[12px]">
                  고디바의 벨기에 제조 공장은 고디바를 처음 만든 드랍스가(家)가 처음 초콜릿을 만들기 시작했던 브뤼셀에 위치해 있습니다.<br />
                  초콜릿 제조 방식은 조셉 드랍스의 전통적인 방식을 그대로 고수하고 있습니다. 엄선된 원료와 초콜릿 장인의 기술을 이용하여 퀄리티와 맛을 자랑은 고디바는 명실공히 벨기에 최고의 초콜릿 브랜드로 자리매김 하였습니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 2. Craft description ──────────────────────────────── */}
        <section>
          <div className="mx-auto grid max-w-360 grid-cols-2 items-center px-10 py-20 max-[768px]:grid-cols-1 max-[768px]:gap-0 max-[768px]:px-5 max-[768px]:pt-0 max-[768px]:pb-16">
            {/* Left: text */}
            <div className="pr-15 max-[1024px]:pr-8 max-[768px]:order-2 max-[768px]:pr-0">
              <p className="m-0 text-lg leading-[1.5] font-light text-white max-[768px]:mt-[60px] max-[768px]:text-center max-[768px]:text-[12px]">
                고디바는 ‘엔로빙(Enrobing)’ 과 ‘쉘 몰딩(Shell Molding)’ 두 가지 기법을 사용하여 다양한 크기와 모양의 초콜릿을 만듭니다.
                엔로빙은 특정 재료를 중심으로 하여 외부를 감싸는 기법을 가리킵니다. 러치 캐러멜을 멜트드 초콜릿으로 코팅하는 것이 그 예입니다.
                쉘 몰딩 기법은 유럽에서 널리 쓰이는 방식으로, 대부분의 고디바 초콜릿이 쉘 몰딩 방식으로 만들어집니다.
              </p>
            </div>

            {/* Right: craftsman image */}
            <div className="pl-10 max-[1024px]:pl-6 max-[768px]:order-1 max-[768px]:pl-0">
              <img
                src="/assets/images/about/heritage2.png"
                alt="장인"
                className="mb-[225px] ml-auto block h-[693px] w-[462px] object-cover max-[1024px]:mb-16 max-[1024px]:h-[520px] max-[1024px]:w-full max-[768px]:mb-0 max-[768px]:-mt-10 max-[768px]:h-auto max-[768px]:w-[60%] max-[768px]:aspect-square"
              />
            </div>
          </div>
        </section>

        {/* ── 3. Timeline ──────────────────────────────────────── */}
        <section className="bg-[#16100E] pt-15 pb-30 max-[768px]:pt-10 max-[768px]:pb-16">
          {/* Wrapper with relative positioning for the vertical line */}
          <div className="relative mx-auto max-w-360 px-10 max-[768px]:px-5">

            {/* Continuous vertical line */}
            <div className="absolute top-0 bottom-0 left-[325px] w-px bg-[#4a3828] max-[1024px]:left-[220px] max-[768px]:left-[114px]" />

            {TIMELINE.map((item, i) => (
              <div
                key={item.year}
                className="relative flex items-start py-30 max-[1024px]:py-20 max-[768px]:py-10"
              >
                {/* Year */}
                <div className="w-[190px] shrink-0 font-serif text-[80px] leading-none font-normal text-[#c8a870] max-[1024px]:w-[130px] max-[1024px]:text-[56px] max-[768px]:w-[70px] max-[768px]:text-[34px]">
                  {item.year}
                </div>

                {/* Diamond marker on the line */}
                <div className="z-[1] ml-[75px] flex w-10 shrink-0 justify-center pt-[14px] max-[1024px]:ml-10 max-[768px]:ml-0 max-[768px]:pt-2">
                  <div className="h-[9px] w-[9px] rotate-45 bg-[#c8a870] max-[768px]:h-3 max-[768px]:w-3 max-[768px]:rotate-0 max-[768px]:rounded-full max-[768px]:shadow-[0_0_10px_5px_rgba(200,168,112,0.2)]" />
                </div>

                {/* Image + text: side-by-side on desktop, stacked on mobile */}
                <div className="flex flex-1 max-[768px]:flex-col">
                  {/* Timeline image */}
                  <img
                    src={`/assets/images/about/history${i + 1}.png`}
                    alt={item.title}
                    className="ml-20 block h-auto w-[370px] shrink-0 max-[1024px]:ml-8 max-[1024px]:w-[280px] max-[768px]:ml-0 max-[768px]:w-full"
                  />

                  {/* Text */}
                  <div className="flex-1 pl-15 max-[1024px]:pl-8 max-[768px]:mt-4 max-[768px]:pl-0">
                    <h3 className="m-0 mb-5 font-pretendard text-[32px] leading-none font-bold text-white max-[1024px]:text-2xl max-[768px]:mb-3 max-[768px]:text-[16px]">
                      {item.title}
                    </h3>
                    {item.lines.map((line, j) => (
                      <p key={j} className={`font-pretendard text-xl leading-[1.5] font-light text-white max-[768px]:text-[12px] ${j < item.lines.length - 1 ? 'mb-[10px]' : 'mb-0'}`}>
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
