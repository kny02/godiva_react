const CARDS = [
  {
    src: '/assets/images/recommendation/birthday.png',
    alt: 'Birthday 추천 상품',
    label: 'Birthday',
    className: 'absolute top-0 right-0 z-[2] w-150 overflow-hidden max-[1024px]:w-70 max-[768px]:relative max-[768px]:top-auto max-[768px]:right-auto max-[768px]:w-[180px] max-[768px]:ml-auto',
  },
  {
    src: '/assets/images/recommendation/thank.png',
    alt: 'Thank you 추천 상품',
    label: 'Thank you',
    className: 'absolute top-[calc(600px*4/3)] left-0 z-[3] w-150 overflow-hidden max-[1024px]:top-50 max-[1024px]:w-70 max-[768px]:relative max-[768px]:top-auto max-[768px]:left-auto max-[768px]:w-[180px]',
  },
  {
    src: '/assets/images/recommendation/anniversary.png',
    alt: 'Anniversary 추천 상품',
    label: 'Anniversary',
    className: 'absolute top-[calc(600px*4/3*2)] right-15 z-[2] w-150 overflow-hidden max-[1024px]:right-[30px] max-[1024px]:w-70 max-[768px]:relative max-[768px]:top-auto max-[768px]:right-auto max-[768px]:w-[180px] max-[768px]:ml-auto',
  },
]

export default function Recommendation() {
  return (
    <section className="bg-brand-dark py-35 text-white overflow-hidden max-[1440px]:py-30 max-[1024px]:py-20 max-[768px]:py-15">
      <div className="mx-auto w-full max-w-360 px-10">
        <div className="relative min-h-[calc(600px*4/3*3)] max-[1024px]:min-h-[calc(280px*4/3*3)] max-[768px]:flex max-[768px]:min-h-0 max-[768px]:flex-col max-[768px]:gap-8">
          <h2 className="text-center font-cormorant text-[112px] font-medium max-[768px]:absolute max-[768px]:top-1/2 max-[768px]:left-1/2 max-[768px]:w-auto max-[768px]:-translate-x-1/2 max-[768px]:-translate-y-1/2 max-[768px]:text-center max-[768px]:text-[24px]">
            RECOMMENDATION
          </h2>
          {CARDS.map(({ src, alt, label, className }) => (
            <div key={label} className={className}>
              <img className="block aspect-[3/4] w-full object-cover" src={src} alt={alt} />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/30 to-transparent" />
              <span className="absolute bottom-6 left-7 font-serif text-[50px] font-bold text-white max-[1200px]:text-[22px] max-[768px]:bottom-[15px] max-[768px]:left-[10px] max-[768px]:text-[20px]">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
