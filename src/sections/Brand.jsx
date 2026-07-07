import { Link } from 'react-router-dom'

const brandTextClass = 'mx-auto max-w-250 font-pretendard text-2xl leading-[1.5] text-brand-text max-[1440px]:text-[17px] max-[1200px]:text-base max-[768px]:text-sm'

export default function Brand() {
  return (
    <section className="py-45 text-center max-[1440px]:py-35 max-[1024px]:py-25 max-[768px]:py-20">
      <div className="mx-auto w-full max-w-360 px-10">
        <p className="font-cormorant text-[42px] font-semibold text-[#B29656]">
          [ A <span className="text-[62px] font-medium">100</span>Year Legacy of Belgian Premium Chocolate ]
        </p>
        <p className="mt-3 font-cormorant text-[42px] font-semibold text-brand-maroon">'GODIVA'</p>

        <div className="mx-auto my-15 h-25 w-0.5 bg-[#707070]" />

        <h2 className="mb-10 font-pretendard text-[40px] font-bold max-[1440px]:text-[34px] max-[1200px]:text-[28px] max-[1024px]:text-2xl max-[768px]:text-xl">
          프리미엄 초콜릿 브랜드 고디바의 전통과 가치입니다
        </h2>
        <p className={brandTextClass}>
          1926년 벨기에에서 탄생한 고디바는 전 세계 100여 개국에서 판매되며 많은 사랑을 받고 있습니다.<br />
          전통과 혁신을 겸비한 프리미엄 초콜릿 브랜드로서, 엄선된 원료와 최고의 기술로 품질을 완성합니다.       
        </p>
        <p className={`${brandTextClass} mt-6`}>
          최고급 카카오 원두와 프로방스 지방, 그리스산 아몬드, 자연 건조 과일 등 최상의 재료를 사용합니다.<br />
          고디바만의 정교한 초콜릿 코팅과 몰딩 기법으로 깊고 풍부한 풍미를 완성합니다.
        </p>

        <Link
          to="/about"
          className="mt-22 inline-flex h-[63px] w-48 items-center justify-center border border-brand-text tracking-[1.5px] text-brand-text outline outline-1 outline-offset-[-6px] outline-brand-text transition-colors duration-200 ease-in-out font-cormorant text-2xl font-semibold hover:border-brand-gold hover:bg-brand-gold hover:text-white hover:outline-none"
        >
          ABOUT US
        </Link>
      </div>
    </section>
  )
}
