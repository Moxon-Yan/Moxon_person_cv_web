import { useEffect, useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, ZoomIn, Film, ImageIcon, ShieldCheck } from 'lucide-react'

// 视觉作品数据：新增图片/视频时在此追加一条即可（type 支持 'image' | 'video'）
const ITEMS = [
  // 产品主图
  { src: '/works/main-hero.png', title: '商品主图', cat: 'main', type: 'image' },
  { src: '/works/main-1.png', title: '产品主图 01', cat: 'main', type: 'image' },
  { src: '/works/main-2.jpg', title: '产品主图 02', cat: 'main', type: 'image' },
  { src: '/works/main-3.jpg', title: '产品主图 03', cat: 'main', type: 'image' },
  // 品牌画板
  { src: '/works/about-us.png', title: 'About Us 品牌页', cat: 'brand', type: 'image' },
  { src: '/works/artboard-1.png', title: '品牌画板 01', cat: 'brand', type: 'image' },
  { src: '/works/artboard-3.png', title: '品牌画板 03', cat: 'brand', type: 'image' },
  { src: '/works/artboard-4.png', title: '品牌画板 04', cat: 'brand', type: 'image' },
  { src: '/works/artboard-5.png', title: '品牌画板 05', cat: 'brand', type: 'image' },
  { src: '/works/artboard-7.png', title: '品牌画板 07', cat: 'brand', type: 'image' },
  { src: '/works/artboard-8.png', title: '品牌画板 08', cat: 'brand', type: 'image' },
  { src: '/works/artboard-9.png', title: '品牌画板 09', cat: 'brand', type: 'image' },
  { src: '/works/artboard-9b.png', title: '品牌画板 09+', cat: 'brand', type: 'image' },
  // 详情页
  ...Array.from({ length: 8 }, (_, i) => ({
    src: `/works/detail-${i + 1}.jpg`,
    title: `详情页 ${String(i + 1).padStart(2, '0')}`,
    cat: 'detail',
    type: 'image',
  })),
]

const CATS = [
  { id: 'all', label: '全部' },
  { id: 'main', label: '产品主图' },
  { id: 'brand', label: '品牌画板' },
  { id: 'detail', label: '详情页' },
]

export default function Gallery() {
  const [cat, setCat] = useState('all')
  const [preview, setPreview] = useState(null) // 当前查看项在 filtered 中的下标
  const [failed, setFailed] = useState(() => new Set())

  const filtered = useMemo(
    () => (cat === 'all' ? ITEMS : ITEMS.filter((i) => i.cat === cat)),
    [cat]
  )

  // lightbox 键盘操作：Esc 关闭、左右箭头切换
  useEffect(() => {
    if (preview == null) return
    const handler = (e) => {
      if (e.key === 'Escape') setPreview(null)
      if (e.key === 'ArrowRight') setPreview((p) => (p + 1) % filtered.length)
      if (e.key === 'ArrowLeft') setPreview((p) => (p - 1 + filtered.length) % filtered.length)
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [preview, filtered.length])

  // lightbox 打开时锁定页面滚动
  useEffect(() => {
    document.body.style.overflow = preview != null ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [preview])

  const markFailed = (src) =>
    setFailed((prev) => {
      const next = new Set(prev)
      next.add(src)
      return next
    })

  const currentItem = preview != null ? filtered[preview] : null

  return (
    <section id="gallery" className="relative py-24 lg:py-32">
      {/* section header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 mb-10">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-accent text-sm font-semibold uppercase tracking-[0.3em] flex items-center gap-2"
        >
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          视觉作品 Gallery
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mt-4"
        >
          产品视觉
          <span className="text-stroke-accent"> WORKS</span>
          <span className="text-accent">.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-sm text-gray-500 max-w-2xl leading-relaxed mt-4"
        >
          从产品主图、品牌画板到详情长图——阿里国际站链接背后的视觉素材均由我策划发起，拥有出色的英语文案能力、策划能力和跨部门协调能力，点击任意图片放大查看。
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-3 text-xs text-gray-600 flex items-center gap-1.5"
        >
          <ShieldCheck size={13} className="shrink-0" />
          展示作品仅作为求职作品集，所有商标与品牌资产归属对应权利人，不存在任何商业用途。
        </motion.p>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* category filter */}
        <div className="flex flex-wrap gap-2.5 mb-8">
          {CATS.map((c) => {
            const count = c.id === 'all' ? ITEMS.length : ITEMS.filter((i) => i.cat === c.id).length
            const isActive = cat === c.id
            return (
              <button
                key={c.id}
                onClick={() => {
                  setCat(c.id)
                  setPreview(null)
                }}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? 'border-accent bg-accent text-base shadow-[0_0_24px_rgba(0,223,143,0.35)]'
                    : 'border-white/10 bg-surface text-gray-400 hover:border-accent/50 hover:text-white'
                }`}
              >
                {c.label}
                <span className={`ml-1.5 text-xs ${isActive ? 'text-base/70' : 'text-gray-600'}`}>
                  {count}
                </span>
              </button>
            )
          })}
        </div>

        {/* masonry grid */}
        <motion.div
          key={cat}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="columns-2 md:columns-3 xl:columns-4 gap-4"
        >
          {filtered.map((item, idx) => (
            <figure
              key={item.src}
              className="group relative mb-4 break-inside-avoid rounded-2xl overflow-hidden border border-white/10 bg-surface cursor-pointer hover:border-accent/50 transition-colors"
              onClick={() => setPreview(idx)}
            >
              {failed.has(item.src) ? (
                <div className="h-44 flex flex-col items-center justify-center gap-2 text-gray-600">
                  <ImageIcon size={24} />
                  <span className="text-xs">图片加载失败</span>
                </div>
              ) : item.type === 'video' ? (
                <video
                  src={item.src}
                  className="w-full block"
                  muted
                  playsInline
                  preload="metadata"
                  onError={() => markFailed(item.src)}
                />
              ) : (
                <img
                  src={item.src}
                  alt={item.title}
                  loading="lazy"
                  className="w-full block transition-transform duration-500 group-hover:scale-[1.04]"
                  onError={() => markFailed(item.src)}
                />
              )}
              {/* hover overlay */}
              <figcaption className="absolute inset-0 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                <div className="relative p-4 flex items-end justify-between gap-2">
                  <span className="text-sm font-bold text-white">{item.title}</span>
                  <span className="w-8 h-8 rounded-full bg-accent text-base flex items-center justify-center shrink-0">
                    {item.type === 'video' ? <Film size={15} /> : <ZoomIn size={15} />}
                  </span>
                </div>
              </figcaption>
            </figure>
          ))}
        </motion.div>
      </div>

      {/* lightbox */}
      <AnimatePresence>
        {currentItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/92 backdrop-blur-sm flex items-center justify-center p-4 sm:p-12"
            onClick={() => setPreview(null)}
          >
            {/* close */}
            <button
              className="absolute top-5 right-5 w-11 h-11 rounded-full border border-white/20 text-white flex items-center justify-center hover:border-accent hover:text-accent transition-colors z-10"
              onClick={() => setPreview(null)}
              aria-label="关闭"
            >
              <X size={20} />
            </button>
            {/* prev / next */}
            {filtered.length > 1 && (
              <>
                <button
                  className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full border border-white/20 text-white flex items-center justify-center hover:border-accent hover:text-accent transition-colors z-10"
                  onClick={(e) => {
                    e.stopPropagation()
                    setPreview((p) => (p - 1 + filtered.length) % filtered.length)
                  }}
                  aria-label="上一张"
                >
                  <ChevronLeft size={22} />
                </button>
                <button
                  className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full border border-white/20 text-white flex items-center justify-center hover:border-accent hover:text-accent transition-colors z-10"
                  onClick={(e) => {
                    e.stopPropagation()
                    setPreview((p) => (p + 1) % filtered.length)
                  }}
                  aria-label="下一张"
                >
                  <ChevronRight size={22} />
                </button>
              </>
            )}
            {/* content */}
            <motion.figure
              key={currentItem.src}
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="max-w-full max-h-full flex flex-col items-center gap-4"
              onClick={(e) => e.stopPropagation()}
            >
              {currentItem.type === 'video' ? (
                <video
                  src={currentItem.src}
                  controls
                  autoPlay
                  className="max-h-[80vh] max-w-full rounded-xl"
                />
              ) : (
                <img
                  src={currentItem.src}
                  alt={currentItem.title}
                  className="max-h-[80vh] max-w-full object-contain rounded-xl"
                />
              )}
              <figcaption className="flex items-center gap-3 text-sm text-gray-400">
                <span className="text-white font-bold">{currentItem.title}</span>
                <span className="w-1 h-1 rounded-full bg-gray-600" />
                <span>
                  {preview + 1} / {filtered.length}
                </span>
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
