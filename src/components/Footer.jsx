import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-brand-dark py-20 pb-10 font-pretendard text-white">
      <div className="mx-auto flex w-full max-w-360 items-center justify-between px-10">
        <div className="mr-[136px] self-start">
          <img className="h-[210px]" src="/assets/images/common/footer_logo.png" alt="GODIVA Belgium 1926" />
        </div>
        <dl className="mr-15 flex-1 self-start text-sm text-[#cbbfb6]">
          <div className="flex gap-4 leading-[2]">
            <dt className="min-w-15 shrink-0 font-bold text-white">상호명</dt>
            <dd>(주)비에스케이코퍼레이션</dd>
          </div>
          <div className="flex gap-4 leading-[2]">
            <dt className="min-w-15 shrink-0 font-bold text-white">Office</dt>
            <dd>서울특별시 강남구 학동로 230(논현동)<br />유림빌딩 5,6,7층</dd>
          </div>
          <div className="flex gap-4 leading-[2]">
            <dt className="min-w-15 shrink-0 font-bold text-white">E-Mail</dt>
            <dd>info@godiva.kr</dd>
          </div>
          <div className="flex gap-4 leading-[2]">
            <dt className="min-w-15 shrink-0 font-bold text-white">Tel</dt>
            <dd>080-759-7700</dd>
          </div>
        </dl>
        <div className="flex min-w-50 shrink-0 flex-col items-stretch gap-6 self-start">
          <div className="flex items-center justify-between text-sm text-white">
            <span>Family Site</span>
            <span className="text-xl leading-none font-light">+</span>
          </div>
          <hr className="m-0 mb-8 border-0 border-t border-white/30" />
          <div className="flex gap-3">
            <a
              href="#"
              aria-label="Instagram"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-[#D9D9D9]/20 text-white"
            >
              <img className="h-5 w-5" src="/assets/images/common/insta_icon.png" alt="Instagram" />
            </a>
            <a
              href="#"
              aria-label="카카오톡"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-[#D9D9D9]/20 text-white"
            >
              <img className="h-5 w-5" src="/assets/images/common/kakaotalk_icon.png" alt="카카오톡" />
            </a>
            <a
              href="#"
              aria-label="Youtube"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-[#D9D9D9]/20 text-white"
            >
              <img className="h-5 w-5" src="/assets/images/common/youtube_icon.png" alt="Youtube" />
            </a>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-15 w-full max-w-360 px-10">
        <div className="flex items-center justify-between border-t border-white/15 pt-[50px] text-sm font-bold text-[#cbbfb6]">
          <span>© 2026 GODIVA Chocolatier, Inc. All Rights Reserved</span>
          <div className="flex gap-6 text-[#cbbfb6]">
            <a href="#">개인정보방침</a>
            <a href="#">이용약관</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
