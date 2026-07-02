import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-brand-dark py-20 pb-10 text-white">
      <div className="mx-auto flex w-full max-w-360 items-center justify-between gap-15 px-10">
        <div>
          <img className="h-[210px]" src="/assets/images/common/footer_logo.png" alt="GODIVA Belgium 1926" />
        </div>
        <dl className="flex-1 text-sm text-[#cbbfb6]">
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
          <hr className="m-0 border-0 border-t border-white/30" />
          <div className="flex gap-3">
            <a
              href="#"
              aria-label="Instagram"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-white"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="2" y="2" width="20" height="20" rx="5"/>
                <circle cx="12" cy="12" r="4.5"/>
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
              </svg>
            </a>
            <a
              href="#"
              aria-label="채널톡"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-white"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
              </svg>
            </a>
            <a
              href="#"
              aria-label="Youtube"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-white"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
                <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-15 flex w-full max-w-360 items-center justify-between border-t border-white/15 px-10 pt-6 text-sm text-[#cbbfb6]">
        <span>© 2026 GODIVA Chocolatier, Inc. All Rights Reserved</span>
        <div className="flex gap-6 text-[#cbbfb6]">
          <a href="#">개인정보방침</a>
          <a href="#">이용약관</a>
        </div>
      </div>
    </footer>
  )
}
