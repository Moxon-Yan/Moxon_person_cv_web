import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const img = (prompt) =>
  'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=' +
  encodeURIComponent(prompt) +
  '&image_size=landscape_4_3'

const projects = [
  {
    category: '渠道运营 · 报喜鸟控股',
    title: '阿里国际站 0 → 1 冷启动',
    short: '国际站冷启动',
    description:
      '担任渠道负责人兼运营，主导店铺从 0 到 1 建设与精细化运营：统筹三季产品体系，完成 312 款 SKU 规划、上架 600+ 产品链接，搭建内部产品标准与上传 SOP；周度复盘广告数据，针对曝光、点击、商机量及转化断层持续优化。',
    stats: [
      { value: '$5,000+', label: '冷启动 GMV' },
      { value: '312', label: '款 SKU 体系规划' },
      { value: '600+', label: '产品链接上架' },
      { value: '4 个月', label: '完成渠道验证' },
    ],
    image: img(
      'Modern laptop on a dark office desk showing a global B2B e-commerce seller dashboard with analytics charts, product listings and rising sales graphs, neon green accent lighting, photorealistic, professional'
    ),
  },
  {
    category: '客户开发 · 北美 / 澳大利亚',
    title: '多渠道主动客户开发',
    short: '多渠道客户开发',
    description:
      '依托谷歌地图、社媒、海关数据与 LinkedIn 多渠道主动开发客户，通过邮件、电话跟进并以 WhatsApp 常态化维护客情、激活沉睡客户，重点推进视频验厂与样品单等商务进程，5 个客户具备明确长期合作意向。',
    stats: [
      { value: '23', label: '意向客户开发' },
      { value: '12 笔', label: '打样订单' },
      { value: '$8,000+', label: '打样订单金额' },
      { value: '$70,000+', label: '预期年采购额' },
    ],
    image: img(
      'Global business concept, professional person on a video call with overseas clients on laptop, glowing world map with connection lines across North America and Australia in dark background, neon green accents, photorealistic'
    ),
  },
  {
    category: '询盘转化 · 艺宁新能源',
    title: '询盘响应与报价管理',
    short: '询盘报价转化',
    description:
      '独立处理后台询盘及 RFQ 报价 200+ 条，通过精准的产品参数对比与专业报价策略，将客户有效回复率提升 20%，自主完成从询盘到成交的全流程转化，累计促成样品单 5 笔。',
    stats: [
      { value: '200+', label: '询盘 / RFQ 处理' },
      { value: '+20%', label: '客户回复率提升' },
      { value: '5 笔', label: '样品单成交' },
    ],
    image: img(
      'Close-up of a laptop screen with international trade inquiry emails and professional quotation spreadsheets, calculator and shipping documents on a tidy desk, warm office lighting, photorealistic'
    ),
  },
  {
    category: '订单交付 · 艺宁新能源',
    title: '订单跟进与交付管理',
    short: '订单交付管理',
    description:
      '完全自主跟进订单全流程，从制作 PI 到安排货代发货，累计落地 8 笔小额订单，实现 100% 准时交付、零客诉；个人自主开发业绩超 5,000 美元。',
    stats: [
      { value: '8 笔', label: '小额订单落地' },
      { value: '100%', label: '准时交付率' },
      { value: '0', label: '客诉' },
      { value: '$5,000+', label: '自主开发业绩' },
    ],
    image: img(
      'Container cargo ship at a busy seaport terminal with gantry cranes at dusk, export logistics and global shipping, cinematic moody lighting with green accents, photorealistic'
    ),
  },
]

export default function Works() {
  const [activeIdx, setActiveIdx] = useState(0)

  const handleCardClick = (index) => {
    if (index === activeIdx) {
      setActiveIdx((activeIdx + 1) % projects.length)
    } else {
      setActiveIdx(index)
    }
  }

  const active = projects[activeIdx]

  return (
    <section id="works" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* header */}
        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="font-display font-bold tracking-tighter leading-[1.05] text-3xl sm:text-4xl md:text-5xl"
          >
            个人业绩 <span className="text-stroke-accent">WORKS</span>
            <span className="text-accent">.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-sm text-gray-500 max-w-2xl leading-relaxed mt-4"
          >
            从渠道冷启动到订单交付，每一张卡片都是一段真实落地的外贸战绩。点击左侧项目栏或卡片切换查看。
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* left — vertical switcher + 3D card stack (desktop/tablet only) */}
          <div className="hidden sm:block lg:col-span-7">
            <div className="flex gap-4 sm:gap-5 sm:mb-[120px]">
              {/* vertical project switcher */}
              <div className="flex flex-col gap-3 w-36 xl:w-40 shrink-0">
                {projects.map((p, i) => (
                  <button
                    key={p.title}
                    onClick={() => setActiveIdx(i)}
                    aria-label={p.title}
                    className={`group relative flex-1 min-h-0 flex flex-col justify-center rounded-2xl border px-4 py-2 text-left transition-all duration-300 ${
                      i === activeIdx
                        ? 'border-accent bg-accent/10 shadow-[0_0_30px_rgba(0,223,143,0.15)]'
                        : 'border-white/10 bg-surface hover:border-accent/50 hover:bg-white/5'
                    }`}
                  >
                    <span
                      className={`font-display text-lg sm:text-xl font-bold transition-colors ${
                        i === activeIdx ? 'text-accent' : 'text-gray-600 group-hover:text-gray-400'
                      }`}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span
                      className={`block text-sm font-semibold mt-1 leading-snug transition-colors ${
                        i === activeIdx ? 'text-white' : 'text-gray-400 group-hover:text-gray-200'
                      }`}
                    >
                      {p.short}
                    </span>
                    {i === activeIdx && (
                      <motion.span
                        layoutId="works-tab-bar"
                        className="absolute -left-1 top-3 bottom-3 w-1 rounded-full bg-accent shadow-[0_0_12px_rgba(0,223,143,0.8)]"
                      />
                    )}
                  </button>
                ))}
              </div>

              {/* 3D card stack */}
              <div
                className="relative flex-1 h-[340px] sm:h-[450px] md:h-[480px]"
                style={{ perspective: 1200 }}
              >
              {projects.map((p, i) => {
                const diff =
                  (i - activeIdx + projects.length) % projects.length
                return (
                  <motion.div
                    key={p.title}
                    onClick={() => handleCardClick(i)}
                    animate={{
                      y: diff * 46,
                      scale: 1 - diff * 0.05,
                      rotateX: diff * 2,
                      opacity: diff > 2 ? 0 : 1 - diff * 0.15,
                      zIndex: projects.length - diff,
                    }}
                    transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
                    whileHover={diff > 0 ? { y: diff * 46 - 8 } : undefined}
                    className={`absolute inset-0 rounded-3xl overflow-hidden border cursor-pointer shadow-[0_25px_60px_rgba(0,0,0,0.5)] transition-colors ${
                      diff === 0 ? 'border-accent/40' : 'border-white/10 hover:border-accent/50'
                    }`}
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-cover"
                      draggable={false}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 p-6">
                      <p className="text-xs uppercase tracking-widest text-accent font-semibold">
                        {p.category}
                      </p>
                      <p className="font-display text-xl sm:text-2xl font-bold mt-1">{p.title}</p>
                    </div>
                  </motion.div>
                )
              })}
              </div>
            </div>
          </div>

          {/* right — description panel */}
          <div className="lg:col-span-5 lg:pt-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIdx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
              >
                <p className="text-sm uppercase tracking-widest text-accent font-semibold">
                  {active.category}
                </p>
                <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight mt-3">
                  {active.title}
                </h3>
                <p className="text-gray-400 leading-relaxed mt-5">{active.description}</p>
                <div className="grid grid-cols-2 gap-3 mt-8">
                  {active.stats.map((s) => (
                    <div
                      key={s.label}
                      className="rounded-2xl border border-accent/25 bg-accent/5 px-5 py-4 hover:border-accent/60 hover:bg-accent/10 transition-colors"
                    >
                      <p className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-accent leading-none">
                        {s.value}
                      </p>
                      <p className="text-xs sm:text-sm text-gray-400 mt-2">{s.label}</p>
                    </div>
                  ))}
                </div>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 mt-9 text-sm font-semibold text-white border-b border-accent pb-1 hover:text-accent transition-colors"
                >
                  与我聊聊这段经历
                  <ArrowUpRight size={16} />
                </a>
              </motion.div>
            </AnimatePresence>

            {/* mobile-only switcher: numbers only, 4 in a row, below content */}
            <div className="sm:hidden flex gap-2 mt-8">
              {projects.map((p, i) => (
                <button
                  key={p.title}
                  onClick={() => setActiveIdx(i)}
                  aria-label={p.title}
                  className={`flex-1 py-3 rounded-xl border font-display text-lg font-bold transition-all duration-300 ${
                    i === activeIdx
                      ? 'border-accent bg-accent/10 text-accent shadow-[0_0_20px_rgba(0,223,143,0.2)]'
                      : 'border-white/10 bg-surface text-gray-500'
                  }`}
                >
                  {String(i + 1).padStart(2, '0')}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
