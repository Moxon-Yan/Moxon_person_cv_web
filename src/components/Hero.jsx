import { useEffect, useState } from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react'
import portraitImg from '../assets/portrait.jpg'

export default function Hero() {
  // 工牌拖拽位移（拖动与回弹都会实时写入这两个值）
  const cardX = useMotionValue(0)
  const cardY = useMotionValue(0)

  // 触屏设备仅允许横向拖拽：纵向手势留给页面滚动
  const [isCoarse, setIsCoarse] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia('(pointer: coarse)')
    setIsCoarse(mq.matches)
    const onChange = (e) => setIsCoarse(e.matches)
    mq.addEventListener?.('change', onChange)
    return () => mq.removeEventListener?.('change', onChange)
  }, [])

  // 挂绳在工牌上的连接点（卡片顶部中央的扣子位置）
  const CLIP_X = 160
  const CLIP_Y = 190
  const clipX = useTransform(cardX, (v) => CLIP_X + v)
  const clipY = useTransform(cardY, (v) => CLIP_Y + v)
  const buckleX = useTransform(cardX, (v) => CLIP_X - 20 + v)
  const buckleY = useTransform(cardY, (v) => CLIP_Y - 10 + v)

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
      {/* giant background text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="font-display font-bold text-[20vw] leading-none text-white opacity-[0.02] tracking-tighter">
          TRADE
        </span>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-32 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
        {/* left column */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm uppercase tracking-widest text-gray-400 font-semibold">
              外贸业务员 · 阿里国际站运营
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display font-bold tracking-tighter leading-[0.9] text-5xl sm:text-6xl md:text-7xl"
          >
            GLOBAL
            <br />
            <span className="text-stroke-accent">TRADE</span>
            <span className="text-accent">.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-8 text-gray-400 leading-relaxed max-w-lg text-base sm:text-lg"
          >
            你好，我是颜谋想（Moxon），一名深耕 B2B 出海的外贸人。擅长阿里国际站 0 到 1 搭建、
            多渠道客户开发与全流程订单转化，用 AI 工具为业务提效，让中国品牌走向全球市场。
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#works"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-accent to-accentDark text-[#0d1116] font-semibold text-sm hover:scale-105 transition-transform"
            >
              查看我的业绩
              <ArrowRight size={16} strokeWidth={2.5} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-surface border border-white/15 text-sm font-semibold text-gray-200 hover:border-accent transition-colors"
            >
              <span className="w-2 h-2 rounded-full bg-accent" />
              联系我
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-gray-500"
          >
            <span className="inline-flex items-center gap-2">
              <MapPin size={14} className="text-accent" /> 宁波 · 可立即到岗
            </span>
            <span className="inline-flex items-center gap-2">
              <Phone size={14} className="text-accent" /> 158 6856 7546
            </span>
            <span className="inline-flex items-center gap-2">
              <Mail size={14} className="text-accent" /> moxon_yan@foxmail.com
            </span>
          </motion.div>
        </div>

        {/* right column — draggable ID card */}
        <div className="relative flex justify-center lg:justify-end lg:-mt-28" id="id-card-zone">
          <div className="relative w-80 max-w-full pt-10 lg:pt-[190px]">
            {/* V-shaped lanyard straps — endpoints follow the card while dragging（仅桌面端显示） */}
            <svg
              width="320"
              height="190"
              className="absolute top-0 left-0 overflow-visible pointer-events-none hidden lg:block"
              fill="none"
              style={{ filter: 'drop-shadow(0 0 10px rgba(0,223,143,0.35))' }}
            >
              <defs>
                <linearGradient id="lanyardGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#00df8f" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#00df8f" />
                </linearGradient>
              </defs>
              {/* dark band edges underneath for a 3D strap look */}
              <motion.line x1={45} y1={-140} x2={clipX} y2={clipY} stroke="#0a4d33" strokeWidth={14} strokeLinecap="round" />
              <motion.line x1={275} y1={-140} x2={clipX} y2={clipY} stroke="#0a4d33" strokeWidth={14} strokeLinecap="round" />
              <motion.line
                x1={45}
                y1={-140}
                x2={clipX}
                y2={clipY}
                stroke="url(#lanyardGrad)"
                strokeWidth={9}
                strokeLinecap="round"
              />
              <motion.line
                x1={275}
                y1={-140}
                x2={clipX}
                y2={clipY}
                stroke="url(#lanyardGrad)"
                strokeWidth={9}
                strokeLinecap="round"
              />
              {/* buckle at the clip point */}
              <motion.rect
                x={buckleX}
                y={buckleY}
                width={40}
                height={20}
                rx={10}
                fill="#00df8f"
              />
            </svg>
            <motion.div
              drag={isCoarse ? 'x' : true}
              dragElastic={0.25}
              dragSnapToOrigin
              dragTransition={{ bounceStiffness: 400, bounceDamping: 18 }}
              whileHover={{ scale: 1.03 }}
              style={{ x: cardX, y: cardY }}
              className="relative z-10 w-full rounded-3xl bg-[#1a1f28] border border-white/10 p-3 shadow-[0_30px_80px_rgba(0,0,0,0.6)] cursor-grab active:cursor-grabbing"
            >
              {/* badge hole */}
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-10 h-4 rounded-full bg-base border border-white/10" />
              <div className="rounded-2xl overflow-hidden border border-white/10 bg-white">
                <img
                  src={portraitImg}
                  alt="颜谋想证件照"
                  className="w-full aspect-[3/4] object-cover object-top pointer-events-none"
                  draggable={false}
                />
              </div>
              <div className="absolute bottom-3 left-3 right-3 rounded-b-2xl bg-gradient-to-t from-black/85 via-black/40 to-transparent px-5 pb-4 pt-14">
                <p className="font-display text-xl font-bold">
                  Moxon Yan<span className="text-accent">.</span>
                </p>
                <p className="text-xs text-gray-300 mt-1 tracking-wide">
                  外贸业务员 / 阿里国际站运营
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
