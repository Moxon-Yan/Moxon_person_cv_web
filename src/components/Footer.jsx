import { motion } from 'framer-motion'
import { Mail, Phone, MapPin } from 'lucide-react'

const menu = [
  { label: '个人信息', href: '#about' },
  { label: '个人业绩', href: '#works' },
  { label: '视觉作品', href: '#gallery' },
  { label: 'AI 运用', href: '#ai' },
  { label: 'AI 工具', href: '#tools' },
  { label: '回到顶部', href: '#top' },
]

export default function Footer() {
  return (
    <footer id="contact" className="relative pt-32 pb-10 border-t border-white/10 overflow-hidden">
      {/* giant background text */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none select-none">
        <span className="font-display font-bold text-[25vw] leading-none text-white opacity-5 tracking-tighter whitespace-nowrap">
          CONTACT
        </span>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className="font-display font-bold tracking-tighter leading-[1.05] text-3xl sm:text-4xl md:text-5xl"
            >
              期待与您合作<span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 text-gray-400 leading-relaxed max-w-md"
            >
              如果您正在寻找一位懂平台、会开发、善用 AI 的外贸业务员，
              欢迎随时联系我——可立即到岗，随时可约面试。
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <a
                href="mailto:moxon_yan@foxmail.com"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-black font-semibold text-sm hover:scale-105 transition-transform"
              >
                <Mail size={16} />
                发邮件给我
              </a>
              <a
                href="tel:15868567546"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/20 text-sm font-semibold text-gray-200 hover:border-accent hover:text-accent transition-colors"
              >
                <Phone size={16} />
                158 6856 7546
              </a>
            </motion.div>
          </div>

          <div className="grid grid-cols-2 gap-10 lg:justify-items-end">
            <div>
              <p className="text-xs uppercase tracking-widest text-gray-500 font-semibold mb-5">Menu</p>
              <ul className="space-y-3">
                {menu.map((m) => (
                  <li key={m.href + m.label}>
                    <a
                      href={m.href}
                      className="text-sm text-gray-300 hover:text-accent transition-colors"
                    >
                      {m.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-gray-500 font-semibold mb-5">Contact</p>
              <ul className="space-y-3 text-sm text-gray-300">
                <li className="flex items-start gap-2">
                  <Mail size={14} className="text-accent shrink-0 mt-0.5" />
                  <span className="min-w-0 break-all">moxon_yan@foxmail.com</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone size={14} className="text-accent shrink-0" />
                  158 6856 7546
                </li>
                <li className="flex items-center gap-2">
                  <MapPin size={14} className="text-accent shrink-0" />
                  宁波 · 可立即到岗
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-24 pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs text-gray-600">
          <p>© 2026 Moxon Yan Portfolio. All rights reserved.</p>
          <p>Designed & Built with React + Tailwind + Framer Motion</p>
        </div>
      </div>
    </footer>
  )
}
