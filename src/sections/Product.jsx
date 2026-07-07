const PRODUCTS = [
  { src: '/assets/images/product/classic-gold.png', name: '클래식 골드 12개입' },
  { src: '/assets/images/product/royal-biscuit.png', name: '로얄 비스킷 32개입' },
  { src: '/assets/images/product/gcube-milk.png', name: '지큐브 밀크 24개입' },
]

export default function Product() {
  return (
    <section className="overflow-x-hidden py-35 text-center max-[1440px]:py-30 max-[1024px]:py-20 max-[768px]:py-15">
      <div className="mx-auto w-full max-w-360 px-10">
        <div className="mb-[143px] flex justify-between text-left [align-items:last_baseline] max-[768px]:flex-col max-[768px]:items-start max-[768px]:gap-2">
          <div>
            <h2 className="text-left font-cormorant text-[96px] font-medium max-[1440px]:text-5xl max-[1200px]:text-[40px] max-[1024px]:text-[34px] max-[768px]:text-[28px]">
              Product
            </h2>
            <p className="text-left font-pretendard text-xl text-brand-text-sub">고디바의 깊은 풍미를 만나보세요.</p>
          </div>
          <a href="#" className="flex items-center gap-1 text-lg text-brand-text-sub">
            더 많은 제품 보기{' '}
            <img src="/assets/images/common/more_icon.png" alt="" />
          </a>
        </div>

        <div className="relative grid grid-cols-[repeat(3,345px)] justify-end gap-[47px] pb-10 text-left before:absolute before:bottom-0 before:left-0 before:right-[calc((100%_-_100vw)/2)] before:z-0 before:h-[calc(346px*0.5_+_155px)] before:bg-brand-gold before:content-[''] max-[1024px]:grid-cols-[repeat(2,345px)] max-[1024px]:pb-8 max-[1024px]:before:h-[calc(346px*0.5_+_147px)] max-[768px]:grid-cols-1 max-[768px]:justify-normal max-[768px]:pb-7 max-[768px]:before:left-0 max-[768px]:before:right-[calc((100%_-_100vw)/2)] max-[768px]:before:h-[calc(346px*0.5_+_143px)]">
          {PRODUCTS.map(({ src, name }) => (
            <article key={name} className="relative z-[1]">
              <img className="block h-[346px] w-[345px] cursor-pointer object-cover" src={src} alt={name} />
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
    </section>
  )
}
