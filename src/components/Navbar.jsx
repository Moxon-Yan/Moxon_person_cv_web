import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const links = [
  { label: '个人信息', en: 'ABOUT', href: '#about' },
  { label: '个人业绩', en: 'WORKS', href: '#works' },
  { label: '视觉作品', en: 'GALLERY', href: '#gallery' },
  { label: 'AI 运用', en: 'AI SKILLS', href: '#ai' },
  { label: 'AI 工具', en: 'AI TOOLS', href: '#tools' },
  { label: '联系我', en: 'CONTACT', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // 菜单展开时锁定背景滚动；Esc 关闭
  useEffect(() => {
    if (!menuOpen) return
    document.body.style.overflow = 'hidden'
    const onKey = (e) => e.key === 'Escape' && setMenuOpen(false)
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      document.body.style.overflowY = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [menuOpen])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 w-full h-24 z-50 transition-colors duration-300 ${
        scrolled || menuOpen
          ? 'bg-[#0f1115]/90 backdrop-blur-md border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto h-full px-6 lg:px-10 flex items-center justify-between">
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault()
            setMenuOpen(false)
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
          className="font-display text-xl font-bold tracking-tight text-white"
        >
          MOXON YAN<span className="text-accent">.</span>
        </a>

        {/* desktop nav */}
        <nav className="hidden md:flex items-center gap-5 lg:gap-7 xl:gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group flex flex-col items-start text-sm font-semibold uppercase tracking-wider text-gray-300 transition-colors hover:text-accent"
            >
              <span>{l.label}</span>
              <span className="text-[10px] tracking-widest text-gray-500 group-hover:text-accent/70 transition-colors">
                {l.en}
              </span>
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {/* mobile hamburger — 触控热区 44px */}
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? '关闭菜单' : '打开菜单'}
            aria-expanded={menuOpen}
            className="md:hidden w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-accent hover:text-accent transition-colors"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              setMenuOpen(false)
              document.body.style.overflowY = 'auto'
              setTimeout(() => {
                const target = document.querySelector('#contact')
                if (target) {
                  const top = target.getBoundingClientRect().top + window.scrollY - 80
                  window.scrollTo({ top, behavior: 'smooth' })
                }
              }, 300)
            }}
            className="flex w-10 h-10 rounded-full border border-white/20 items-center justify-center hover:border-accent transition-colors group"
            aria-label="联系我"
          >
            <span className="w-2 h-2 rounded-full bg-accent group-hover:scale-125 transition-transform" />
          </a>
        </div>
      </div>

      {/* mobile dropdown menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: [0.32, 0.72, 0, 1] }}
            className="md:hidden overflow-hidden bg-[#0f1115]/95 backdrop-blur-md border-b border-white/5"
          >
            <ul className="px-6 py-4">
              {links.map((l, i) => (
                <motion.li
                  key={l.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * i + 0.05 }}
                >
                  <a
                    href={l.href}
                    onClick={(e) => {
                      e.preventDefault()
                      setMenuOpen(false)
                      document.body.style.overflowY = 'auto'
                      const href = l.href
                      setTimeout(() => {
                        const target = document.querySelector(href)
                        if (target) {
                          const top = target.getBoundingClientRect().top + window.scrollY - 80
                          window.scrollTo({ top, behavior: 'smooth' })
                        }
                      }, 300)
                    }}
                    className="flex items-baseline justify-between py-3.5 border-b border-white/5 last:border-0 group"
                  >
                    <span className="text-base font-semibold text-gray-200 group-hover:text-accent transition-colors">
                      {l.label}
                    </span>
                    <span className="text-[10px] tracking-widest text-gray-600 group-hover:text-accent/70 transition-colors">
                      {l.en}
                    </span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
