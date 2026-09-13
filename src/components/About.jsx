import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { GraduationCap, Trophy, X, ChevronRight, CalendarDays } from 'lucide-react'

const skills = [
  'TEM-8 英语专八',
  'CET-6 500+',
  '国际客户谈判',
  '外贸函电开发',
  '国际展会口译',
  '视频验厂支持',
  'Excel 数据分析',
  'AI 工具提效',
  'ERP / CRM 系统',
  '阿里国际站运营',
  '外贸全流程',
  '多任务协同',
]

// 校园竞赛项目：点击条目弹出详情窗口（含奖状图片）
const awards = [
  {
    id: 1,
    year: '2023',
    title: '“互联网+”大学生创新创业大赛',
    award: '赛区三等奖',
    role: 'AI 口语陪练 APP 项目 · 负责人',
    points: [
      '市场调研与用户需求分析',
      '产品功能设计',
      '商业计划书撰写',
      '团队协调管理',
    ],
    result: '顺利完成赛区路演答辩并获三等奖。',
    img: '/awards/award-1.jpg',
  },
  {
    id: 2,
    year: '2025',
    title: '全国大学生 5 分钟科研英语演讲大赛',
    award: '国家二等奖',
    role: '禽蛋裂纹检测设备项目 · 核心成员',
    points: [
      '主导技术文档的英文本土化翻译',
      '演讲 PPT 设计与制作',
      '以专业英语呈现科研成果',
    ],
    result: '助力项目获国家级奖项。',
    img: '/awards/award-2.jpg',
  },
]

const stats = [
  { value: '25+', label: '自主开发客户' },
  { value: '$13,000+', label: '打样金额（美元）' },
  { value: '$100,000+', label: '预计带来订单额（美元）' },
  { value: '100%', label: '订单准时交付 · 零客诉' },
]

export default function About() {
  const [openAward, setOpenAward] = useState(null)

  // 详情窗口打开时锁定滚动，支持 Esc 关闭
  useEffect(() => {
    if (openAward == null) return
    document.body.style.overflow = 'hidden'
    const onKey = (e) => e.key === 'Escape' && setOpenAward(null)
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [openAward])

  return (
    <section id="about" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* left */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="text-sm uppercase tracking-widest text-accent font-semibold mb-4"
          >
            About Me · 个人信息
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-bold tracking-tighter leading-[1.05] text-3xl sm:text-4xl md:text-5xl"
          >
            以专业与结果
            <br />
            赢得客户信任<span className="text-accent">.</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 space-y-5 text-gray-400 leading-relaxed"
          >
            <p>
              颜谋想，男，22 岁，文华学院英语专业本科（2022.9 – 2026.6），主修高级英语、英美文学选读、
              国际贸易实务、商务翻译、科技翻译、跨文化交际等课程。英语专业八级（TEM-8），兼具语言功底与贸易实务能力。
            </p>
            <p>
              先后任职于艺宁新能源与报喜鸟控股（上市公司），覆盖高端西服定制与新能源工业品两大赛道：既能主导阿里国际站
              从 0 到 1 的冷启动与精细化运营，也能通过海关数据、LinkedIn、谷歌地图等多渠道主动开发客户，
              独立完成从询盘、报价、打样到交付的全流程闭环。
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex items-center gap-5 text-gray-300 bg-white/5 border border-white/10 rounded-2xl px-7 py-5 w-fit hover:border-accent/40 hover:bg-white/[0.07] transition-colors"
          >
            <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/30 flex items-center justify-center shrink-0">
              <GraduationCap className="text-accent" size={26} />
            </div>
            <div>
              <p className="font-semibold text-white text-base sm:text-lg">文华学院 · 英语（本科）</p>
              <p className="text-gray-400 text-sm mt-1">2022.9 – 2026.6 · 国际商务方向课程全覆盖</p>
            </div>
          </motion.div>

          {/* campus competition entries — lightweight list, subordinate to the edu card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-4 w-fit"
          >
            <p className="text-[11px] uppercase tracking-[0.18em] text-gray-600 font-semibold mb-1.5 pl-1">
              Campus Honors · 校园竞赛
            </p>
            <div className="divide-y divide-white/5">
              {awards.map((a) => (
                <button
                  key={a.id}
                  onClick={() => setOpenAward(a)}
                  className="group flex items-center gap-3 w-full py-2.5 pl-1 pr-4 text-left rounded-lg transition-colors hover:bg-white/[0.04]"
                >
                  <Trophy size={15} className="text-accent/60 group-hover:text-accent shrink-0 transition-colors" />
                  <span className="text-sm font-medium text-gray-500 group-hover:text-gray-100 transition-colors">
                    {a.year} {a.title}
                  </span>
                  <span className="text-xs font-semibold text-accent whitespace-nowrap">{a.award}</span>
                  <ChevronRight
                    size={14}
                    className="ml-auto text-gray-700 group-hover:text-accent group-hover:translate-x-0.5 transition-all shrink-0"
                  />
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 grid grid-cols-2 gap-x-4 sm:gap-x-6 gap-y-8 sm:gap-y-10 max-w-xl"
          >
            {stats.map((s) => (
              <div key={s.label} className="border-l-2 border-accent/40 pl-4 sm:pl-5">
                <p className="font-display text-2xl sm:text-4xl font-bold text-accent break-all">{s.value}</p>
                <p className="text-sm text-gray-500 mt-2">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* right — toolkit */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="lg:pl-8"
        >
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 sm:p-10 sticky top-32">
            <p className="text-sm uppercase tracking-widest text-gray-400 font-semibold">
              My Toolkit · 工作技能
            </p>
            <div className="mt-8 flex flex-wrap gap-2.5 sm:gap-3 justify-center sm:justify-start">
              {skills.map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ delay: i * 0.06, duration: 0.5 }}
                  className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-white/15 text-xs sm:text-sm text-gray-300 cursor-default transition-all hover:border-accent hover:text-accent hover:shadow-[0_0_15px_rgba(0,223,143,0.3)]"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
            <div className="mt-10 pt-8 border-t border-white/10 grid grid-cols-2 gap-6 text-sm">
              <div>
                <p className="text-gray-500 text-xs uppercase tracking-widest mb-1.5">语言能力</p>
                <p className="text-gray-200">英语 TEM-8 / CET-6 500+</p>
              </div>
              <div>
                <p className="text-gray-500 text-xs uppercase tracking-widest mb-1.5">意向岗位</p>
                <p className="text-gray-200">外贸业务员 / 国际站运营</p>
              </div>
              <div>
                <p className="text-gray-500 text-xs uppercase tracking-widest mb-1.5">意向城市</p>
                <p className="text-gray-200">宁波 · 可立即到岗</p>
              </div>
              <div>
                <p className="text-gray-500 text-xs uppercase tracking-widest mb-1.5">目标市场</p>
                <p className="text-gray-200">北美 / 澳大利亚</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* award detail modal */}
      <AnimatePresence>
        {openAward && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/92 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
            onClick={() => setOpenAward(null)}
          >
            <button
              className="absolute top-5 right-5 w-11 h-11 rounded-full border border-white/20 text-white flex items-center justify-center hover:border-accent hover:text-accent transition-colors z-10"
              onClick={() => setOpenAward(null)}
              aria-label="关闭"
            >
              <X size={20} />
            </button>
            <motion.div
              key={openAward.id}
              initial={{ scale: 0.94, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.96, y: 10, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
              className="relative max-w-4xl w-full max-h-[88vh] overflow-y-auto rounded-3xl border border-white/10 bg-surface grid md:grid-cols-2 gap-0"
              onClick={(e) => e.stopPropagation()}
            >
              {/* award image */}
              <div className="bg-black/40 p-6 flex items-center justify-center">
                <img
                  src={openAward.img}
                  alt={`${openAward.year} ${openAward.title} ${openAward.award} 证书`}
                  className="max-h-[60vh] md:max-h-[76vh] w-auto object-contain rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
                />
              </div>
              {/* award info */}
              <div className="p-7 sm:p-9 flex flex-col justify-center">
                <p className="flex items-center gap-2 text-xs uppercase tracking-widest text-gray-500 font-semibold">
                  <CalendarDays size={13} className="text-accent" />
                  Campus Competition · {openAward.year}
                </p>
                <h3 className="font-display text-xl sm:text-2xl font-bold leading-snug mt-3">
                  {openAward.title}
                </h3>
                <span className="mt-4 w-fit px-3.5 py-1.5 rounded-full bg-accent/15 border border-accent/40 text-accent text-sm font-bold">
                  {openAward.award}
                </span>
                <p className="mt-5 text-sm text-gray-300 font-semibold">{openAward.role}</p>
                <ul className="mt-3 space-y-2">
                  {openAward.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2 text-sm text-gray-400">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                      {pt}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 pt-5 border-t border-white/10 text-sm text-gray-300">
                  {openAward.result}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
