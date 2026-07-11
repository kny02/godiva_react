const CARDS = [
  {
    src: '/assets/images/beyond/bakery.png',
    alt: 'Bakery',
    title: 'Bakery',
    desc: <>정성을 담아 구워낸 깊은 풍미<br />고디바만의 프리미엄 베이커리</>,
  },
  {
    src: '/assets/images/beyond/crepe.png',
    alt: 'Crepe',
    title: 'Crepe',
    desc: <>한 입 가득 퍼지는 부드러운 달콤함<br />부드럽고 진하게 풍긴 초코</>,
  },
]

export default function Beyond() {
  return (
    <section className="pt-35 pb-[395px] text-center max-[1440px]:py-30 max-[1024px]:py-20 max-[768px]:pt-[82px] max-[768px]:pb-15">
      <div className="mx-auto w-full max-w-360 px-10">
        <h2 className="font-cormorant text-[96px] font-medium text-brand-text max-[1440px]:text-5xl max-[1200px]:text-[40px] max-[1024px]:text-[34px] max-[768px]:mb-[15px] max-[768px]:text-[40px] max-[768px]:font-medium">
          <em className="text-brand-gold not-italic">Beyond</em> Chocolate
        </h2>
        <p className="font-pretendard text-xl text-brand-text-sub max-[768px]:text-[18px]">초콜릿 그 이상의 가치를 경험하세요.</p>

        <div className="mt-[226px] grid grid-cols-2 items-start gap-8 text-left max-[768px]:-mx-10 max-[768px]:mt-[65px] max-[768px]:grid-cols-1 max-[768px]:gap-8 max-[768px]:px-[calc((100vw-355px)/2)]">
          {CARDS.map(({ src, alt, title, desc }, i) => (
            <div
              key={title}
              className={`relative cursor-pointer overflow-hidden after:absolute after:inset-0 after:bg-black/40 after:content-[''] ${
                i === 1 ? 'mt-45 max-[768px]:mt-0 max-[768px]:mb-[108px]' : ''
              }`}
            >
              <img className="aspect-[3/4] w-full object-cover max-[768px]:h-[355px]" src={src} alt={alt} />
              <div
                className={`absolute top-9 z-[1] text-white max-[768px]:top-[16px] ${
                  i === 1 ? 'right-9 text-right max-[768px]:right-[20px]' : 'left-9 max-[768px]:left-[20px]'
                }`}
              >
                <strong className="mb-[18px] block font-cormorant text-7xl font-semibold max-[1200px]:text-[26px] max-[768px]:mb-[13px] max-[768px]:text-[40px] max-[768px]:font-semibold">
                  {title}
                </strong>
                <span className="font-pretendard text-xl leading-[1.5] font-light max-[768px]:text-[14px] max-[768px]:font-normal max-[768px]:leading-[1.5]">
                  {desc}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
