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

const CORMORANT = '"Cormorant Garamond", "Times New Roman", serif'

export default function AboutPage() {
  useEffect(() => {
    document.title = 'About Us | GODIVA'
    return () => { document.title = 'GODIVA' }
  }, [])

  return (
    <>
      <Header />
      <main style={{ backgroundColor: '#2b1a12', fontFamily: '"Pretendard", sans-serif' }}>
    
        {/* ── 1. Heritage & Craft ─────────────────────────────── */}
        <section>
          <div style={{
            maxWidth: '1440px',
            margin: '0 auto',
            padding: '0 40px',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            minHeight: '140vh',
          }}>
          {/* Left: heritage image */}
          <img
            src="/assets/images/about/heritage.png"
            alt="Heritage"
            style={{ width: '614px', height: '1000px', objectFit: 'cover', display: 'block', marginTop: '280px' }}
          />

          {/* Right: title + description */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            padding: '280px 0 90px 80px',
          }}>
            <h1 style={{
              fontFamily: CORMORANT,
              fontWeight: 700,
              fontSize: '124px',
              lineHeight: 1.2,
              color: '#f5ede4',
              textAlign: 'right',
              margin: 0,
            }}>
              Heritage<br />
              &amp;<br />
              Craft
            </h1>

            <div style={{ marginTop: '140px' }}>
              <p style={{ fontSize: '18px', lineHeight: 1.5, color: '#fff', fontFamily: '"Pretendard", sans-serif', fontWeight:'300', margin: 0 }}>
               고디바의 벨기에 제조 공장은 고디바를 처음 만든 드랍스가(家)가 처음 초콜릿을 만들기 시작했던 브뤼셀에 위치해 있습니다.<br></br>
               초콜릿 제조 방식은 조셉 드랍스의 전통적인 방식을 그대로 고수하고 있습니다. 엄선된 원료와 초콜릿 장인의 기술을 이용하여 퀄리티와 맛을 자랑은 고디바는 명실공히 벨기에 최고의 초콜릿 브랜드로 자리매김 하였습니다.
              </p>
            </div>
          </div>
          </div>
        </section>

        {/* ── 2. Craft description ──────────────────────────────── */}
        <section>
          <div style={{
            maxWidth: '1440px',
            margin: '0 auto',
            padding: '80px 40px',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            alignItems: 'center',
          }}>
          {/* Left: text */}
          <div style={{ paddingRight: '60px' }}>
            <p style={{ fontSize: '18px', lineHeight: 1.5, color: '#fff', fontFamily: '"Pretendard", sans-serif', fontWeight:'300', margin: 0 }}>
              고디바는 ‘엔로빙(Enrobing)’ 과 ‘쉘 몰딩(Shell Molding)’ 두 가지 기법을 사용하여 다양한 크기와 모양의 초콜릿을 만듭니다.
              엔로빙은 특정 재료를 중심으로 하여 외부를 감싸는 기법을 가리킵니다. 러치 캐러멜을 멜트드 초콜릿으로 코팅하는 것이 그 예입니다. 
              쉘 몰딩 기법은 유럽에서 널리 쓰이는 방식으로, 대부분의 고디바 초콜릿이 쉘 몰딩 방식으로 만들어집니다.
            </p>
          </div>

          {/* Right: craftsman image */}
          <div style={{ paddingLeft: '40px' }}>
            <img
              src="/assets/images/about/heritage2.png"
              alt="장인"
              style={{ width: '462px', height: '693px', objectFit: 'cover', display: 'block', marginLeft: 'auto', marginBottom:'225px'}}
            />
          </div>
          </div>
        </section>

        {/* ── 3. Timeline ──────────────────────────────────────── */}
        <section style={{ backgroundColor: '#1e1008', padding: '60px 0 120px' }}>
          {/* Wrapper with relative positioning for the vertical line */}
          <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 40px', position: 'relative' }}>

            {/* Continuous vertical line */}
            <div style={{
              position: 'absolute',
              left: '325px',
              top: 0,
              bottom: 0,
              width: '1px',
              backgroundColor: '#4a3828',
            }} />

            {TIMELINE.map((item, i) => (
              <div
                key={item.year}
                style={{
                  padding: '120px 0',
                  display: 'flex',
                  alignItems: 'flex-start',
                  position: 'relative',
                }}
              >
                {/* Year */}
                <div style={{
                  flexShrink: 0,
                  width: '190px',
                  fontFamily: '"Noto Serif KR", serif',
                  fontSize: '80px',
                  fontWeight: 400,
                  color: '#c8a870',
                  lineHeight: 1,                  
                }}>
                  {item.year}
                </div>

                {/* Diamond marker on the line */}
                <div style={{
                  flexShrink: 0,
                  width: '40px',
                  marginLeft: '75px',
                  display: 'flex',
                  justifyContent: 'center',
                  paddingTop: '14px',
                  zIndex: 1,
                }}>
                  <div style={{
                    width: '9px',
                    height: '9px',
                    backgroundColor: '#c8a870',
                    transform: 'rotate(45deg)',
                  }} />
                </div>

                {/* Timeline image */}
                <img
                  src={`/assets/images/about/history${i + 1}.png`}
                  alt={item.title}
                  style={{ flexShrink: 0, width: '370px', height: 'auto', display: 'block', marginLeft: '80px' }}
                />

                {/* Text */}
                <div style={{ flex: 1, paddingLeft: '60px' }}>
                  <h3 style={{
                    fontFamily: '"Pretendard", sans-serif',
                    fontSize: '32px',
                    fontWeight: 700,
                    color: '#fff',
                    margin: '0 0 20px',
                    lineHeight: 1.0,
                  }}>
                    {item.title}
                  </h3>
                  {item.lines.map((line, j) => (
                    <p key={j} style={{
                      fontFamily: '"Pretendard", sans-serif',
                      fontSize: '20px',
                      lineHeight: 1.5,
                      fontWeight:'300',
                      color: '#fff',
                      margin: j < item.lines.length - 1 ? '0 0 10px' : '0',
                    }}>
                      {line}
                    </p>
                  ))}
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
