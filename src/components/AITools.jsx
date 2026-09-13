import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import {
  Globe,
  Timer,
  Ship,
  BrainCircuit,
  LayoutDashboard,
  ExternalLink,
  Loader2,
  WifiOff,
  ArrowLeftRight,
} from 'lucide-react'

// AI vibecoding 工具箱：新增工具时在此数组中加一条即可（第一个为默认展示）
const TOOLS = [
  {
    id: 'moxon-crm',
    name: 'Moxon Flow CRM',
    desc: '西服定制外贸 CRM',
    path: '/trade-tools/moxon-crm.html',
    icon: LayoutDashboard,
  },
  {
    id: 'client-world-map',
    name: '客户世界地图',
    desc: '全球客户分布可视化',
    path: '/trade-tools/client-world-map/index.html',
    icon: Globe,
  },
  {
    id: 'follow-up-relay',
    name: '24 小时跟进接力',
    desc: '客户跟进节奏管理',
    path: '/trade-tools/follow-up-relay/index.html',
    icon: Timer,
  },
  {
    id: 'shipping-route',
    name: '海运路线动画',
    desc: '物流航线动态演示',
    path: '/trade-tools/shipping-route/index.html',
    icon: Ship,
  },
  {
    id: 'trader-personality',
    name: '外贸人性格测试',
    desc: '业务风格趣味测评',
    path: '/trade-tools/trader-personality/index.html',
    icon: BrainCircuit,
  },
]

export default function AITools() {
  const [activeId, setActiveId] = useState(TOOLS[0].id)
  const [loaded, setLoaded] = useState(false)
  const [slow, setSlow] = useState(false)
  const active = TOOLS.find((t) => t.id === activeId)

  // 切换工具时重置加载状态，6 秒未加载完提示可新窗口打开
  useEffect(() => {
    setLoaded(false)
    setSlow(false)
    const timer = setTimeout(() => setSlow(true), 6000)
    return () => clearTimeout(timer)
  }, [activeId])

  return (
    <section id="tools" className="relative py-24 lg:py-32">
      {/* section header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 mb-12">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-accent text-sm font-semibold uppercase tracking-[0.3em] flex items-center gap-2"
        >
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          AI Vibecoding 工具箱
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mt-4"
        >
          用 AI 造工具
          <span className="text-stroke-accent"> TOOLS</span>
          <span className="text-accent">.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-sm text-gray-500 max-w-2xl leading-relaxed mt-4"
        >
          我把外贸日常工作中的真实痛点交给 AI vibecoding，独立开发了一批即开即用的实用工具和趣味小工具——以下工具可直接在页面内操作体验。
        </motion.p>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-5">
          {/* tool switcher */}
          <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-visible lg:w-64 xl:w-72 shrink-0 pb-2 lg:pb-0 [scrollbar-width:none] [-webkit-overflow-scrolling:touch] [&::-webkit-scrollbar]:hidden">
            {TOOLS.map((t) => {
              const Icon = t.icon
              const isActive = t.id === activeId
              return (
                <button
                  key={t.id}
                  onClick={() => setActiveId(t.id)}
                  aria-label={t.name}
                  className={`group relative flex items-center gap-3 rounded-2xl border px-4 py-3.5 text-left transition-all duration-300 min-w-[210px] lg:min-w-0 ${
                    isActive
                      ? 'border-accent bg-accent/10 shadow-[0_0_30px_rgba(0,223,143,0.15)]'
                      : 'border-white/10 bg-surface hover:border-accent/50 hover:bg-white/5'
                  }`}
                >
                  <span
                    className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                      isActive
                        ? 'bg-accent text-base'
                        : 'bg-white/5 text-gray-400 group-hover:text-accent'
                    }`}
                  >
                    <Icon size={20} />
                  </span>
                  <span className="min-w-0">
                    <span
                      className={`block text-sm font-bold transition-colors ${
                        isActive ? 'text-white' : 'text-gray-300 group-hover:text-white'
                      }`}
                    >
                      {t.name}
                    </span>
                    <span
                      className={`block text-xs mt-0.5 truncate transition-colors ${
                        isActive ? 'text-accent' : 'text-gray-500'
                      }`}
                    >
                      {t.desc}
                    </span>
                  </span>
                  {isActive && (
                    <motion.span
                      layoutId="tools-tab-bar"
                      className="absolute -left-1 top-3 bottom-3 w-1 rounded-full bg-accent shadow-[0_0_12px_rgba(0,223,143,0.8)] hidden lg:block"
                    />
                  )}
                </button>
              )
            })}
          </div>

          {/* tool iframe */}
          <div className="relative flex-1 min-w-0 h-[78vh] min-h-[520px] rounded-3xl border border-white/10 bg-surface overflow-hidden">
            {/* loading spinner */}
            {!loaded && (
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 bg-surface pointer-events-none">
                <Loader2 className="text-accent animate-spin" size={32} />
                <p className="text-sm text-gray-500">正在加载 {active.name} …</p>
              </div>
            )}
            {/* slow / failure hint */}
            {slow && !loaded && (
              <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3 rounded-full border border-white/10 bg-black/80 backdrop-blur px-4 py-2 text-xs text-gray-300">
                <WifiOff size={14} className="text-amber-400" />
                加载时间较长，可
                <a
                  href={active.path}
                  target="_blank"
                  rel="noreferrer"
                  className="text-accent font-semibold inline-flex items-center gap-1 hover:underline"
                >
                  在新窗口打开 <ExternalLink size={12} />
                </a>
              </div>
            )}
            <iframe
              key={active.id}
              src={active.path}
              title={active.name}
              onLoad={() => setLoaded(true)}
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
              className="absolute inset-0 w-full h-full bg-white"
            />
          </div>
        </div>

        {/* mobile swipe hint */}
        <p className="lg:hidden mt-2 flex items-center justify-center gap-1.5 text-[11px] text-gray-600">
          <ArrowLeftRight size={12} />
          左右滑动切换工具
        </p>

        {/* open in new window shortcut */}
        <div className="flex justify-end mt-4">
          <a
            href={active.path}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-xs text-gray-500 hover:text-accent transition-colors"
          >
            在新窗口打开「{active.name}」 <ExternalLink size={13} />
          </a>
        </div>
      </div>
    </section>
  )
}
