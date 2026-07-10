const CARDS = [
  {
    src: '/assets/images/recommendation/birthday.png',
    alt: 'Birthday 추천 상품',
    label: 'Birthday',
    className: 'absolute top-0 right-0 z-[2] w-150 overflow-hidden max-[1024px]:w-70 max-[768px]:static max-[768px]:w-[58vw] max-[768px]:ml-auto',
  },
  {
    src: '/assets/images/recommendation/thank.png',
    alt: 'Thank you 추천 상품',
    label: 'Thank you',
    className: 'absolute top-[calc(600px*4/3)] left-0 z-[3] w-150 overflow-hidden max-[1024px]:top-50 max-[1024px]:w-70 max-[768px]:static max-[768px]:w-[58vw]',
  },
  {
    src: '/assets/images/recommendation/anniversary.png',
    alt: 'Anniversary 추천 상품',
    label: 'Anniversary',
    className: 'absolute top-[calc(600px*4/3*2)] right-15 z-[2] w-150 overflow-hidden max-[1024px]:right-[30px] max-[1024px]:w-70 max-[768px]:static max-[768px]:w-[58vw] max-[768px]:ml-auto',
  },
]

export default function Recommendation() {
  return (
    <section className="bg-brand-dark py-35 text-white overflow-hidden max-[1440px]:py-30 max-[1024px]:py-20 max-[768px]:py-15">
      <div className="mx-auto w-full max-w-360 px-10">
        <h2 className="text-center font-cormorant text-[112px] font-medium max-[768px]:text-right">RECOMMENDATION</h2>
        <div className="relative min-h-[calc(600px*4/3*3)] max-[1024px]:min-h-[calc(280px*4/3*3)] max-[768px]:flex max-[768px]:min-h-0 max-[768px]:flex-col max-[768px]:gap-8">
          {CARDS.map(({ src, alt, label, className }) => (
            <div key={label} className={className}>
              <img className="block aspect-[3/4] w-full object-cover" src={src} alt={alt} />
              <span className="absolute bottom-6 left-7 font-serif text-[50px] font-bold text-white max-[1200px]:text-[22px] max-[768px]:text-[18px]">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
