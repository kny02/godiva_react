import { useState } from 'react'
import { Link } from 'react-router-dom'

const COMPANY_INFO = (
  <dl className="pb-4 pt-1 text-sm text-white leading-[2]">
    <div className="flex gap-3"><dt className="w-20 shrink-0 font-bold text-white">상호명</dt><dd>(주)비에스케이코퍼레이션</dd></div>
    <div className="flex gap-3"><dt className="w-20 shrink-0 font-bold text-white">Office</dt><dd>서울특별시 강남구 학동로 230(논현동)<br />유림빌딩 5,6,7층</dd></div>
    <div className="flex gap-3"><dt className="w-20 shrink-0 font-bold text-white">E-Mail</dt><dd>info@godiva.kr</dd></div>
    <div className="flex gap-3"><dt className="w-20 shrink-0 font-bold text-white">Tel</dt><dd>080-759-7700</dd></div>
  </dl>
)

const MOBILE_SECTIONS = [
  { label: 'COMPANY INFO', content: COMPANY_INFO },
  { label: 'CUSTOMER SERVICE', content: null },
  { label: 'STORE & DELIVERY', content: null },
]

export default function Footer() {
  const [openIdx, setOpenIdx] = useState(-1)

  return (
    <footer className="font-pretendard">

      {/* ── Desktop footer ──────────────────────────────── */}
      <div className="bg-brand-dark py-20 pb-10 text-white max-[768px]:hidden">
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
              <a href="#" aria-label="Instagram" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-[#D9D9D9]/20 text-white">
                <img className="h-5 w-5" src="/assets/images/common/insta_icon.png" alt="Instagram" />
              </a>
              <a href="#" aria-label="카카오톡" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-[#D9D9D9]/20 text-white">
                <img className="h-5 w-5" src="/assets/images/common/kakaotalk_icon.png" alt="카카오톡" />
              </a>
              <a href="#" aria-label="Youtube" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-[#D9D9D9]/20 text-white">
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
      </div>

      {/* ── Mobile footer ──────────────────────────────── */}
      <div className="hidden max-[768px]:block bg-brand-dark px-5 pt-8 pb-10 text-white">
        {MOBILE_SECTIONS.map((sec, i) => (
          <div key={sec.label} className="border-b border-white/70">
            <button
              type="button"
              className="flex w-full items-center justify-between pt-4 pb-[19px] text-[15px] font-bold text-white"
              onClick={() => setOpenIdx(openIdx === i ? -1 : i)}
            >
              {sec.label}
              <span className="text-xl font-light leading-none">{openIdx === i ? '−' : '+'}</span>
            </button>
            {openIdx === i && sec.content && (
              <div>{sec.content}</div>
            )}
          </div>
        ))}

        {/* Legal links */}
        <div className="mt-8 flex gap-3 text-[12px] text-white/60">
          <a href="#">AGREEMENT</a>
          <a href="#">PRIVACY POLICY</a>
          <a href="#">GUIDE</a>
        </div>

        {/* Logo + social icons */}
        <div className="mt-[67px] flex items-center justify-between">
          <img className="h-[100px] w-[100px] object-contain" src="/assets/images/common/footer_logo.png" alt="GODIVA Belgium 1926" />
          <div className="flex gap-[8px]">
            <a href="#" aria-label="Instagram" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-[#D9D9D9]/20">
              <img className="h-4 w-4" src="/assets/images/common/insta_icon.png" alt="Instagram" />
            </a>
            <a href="#" aria-label="카카오톡" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-[#D9D9D9]/20">
              <img className="h-4 w-4" src="/assets/images/common/kakaotalk_icon.png" alt="카카오톡" />
            </a>
            <a href="#" aria-label="Youtube" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-[#D9D9D9]/20">
              <img className="h-4 w-4" src="/assets/images/common/youtube_icon.png" alt="Youtube" />
            </a>
          </div>
        </div>
      </div>

    </footer>
  )
}
