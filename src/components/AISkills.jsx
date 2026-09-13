import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const items = [
  {
    title: 'AI 开发信与函电撰写',
    en: 'AI OUTREACH',
    description:
      '用 AI 按客户行业、采购角色与地区文化生成个性化开发信与跟进邮件，批量产出多版本标题与话术进行 A/B 测试，打开率与回复率显著提升，让每一封开发信都"像人工写的，但比人工快十倍"。',
  },
  {
    title: '客户背调与数据洞察',
    en: 'AI RESEARCH',
    description:
      '结合海关数据与 AI 分析目标客户的采购记录、供应链结构与决策链，快速生成客户画像与切入点建议；对 23 个意向客户分级建档，让电话跟进与 WhatsApp 维护更有针对性。',
  },
  {
    title: '产品资料翻译与术语库',
    en: 'AI TRANSLATION',
    description:
      '借助 AI 辅助完成产品信息表翻译并建立统一术语标准，高效产出 70 个英文量体表与尺码规格表；标题、卖点、详情页文案经 AI 润色后更符合海外买家的搜索与阅读习惯。',
  },
  {
    title: '询盘回复与报价优化',
    en: 'AI QUOTATION',
    description:
      '用 AI 快速起草询盘回复初稿，自动对比产品参数、生成专业报价单结构，把单条询盘处理时间压缩一半以上；200+ 条询盘/RFQ 的高效处理中，客户有效回复率提升 20%。',
  },
  {
    title: '社媒内容营销',
    en: 'AI MARKETING',
    description:
      '用 AI 生成 LinkedIn 等社媒的贴文选题、文案与短视频脚本，搭建公司社媒主页并稳定输出内容，通过内容营销与私信互动获取询盘，为国际站之外开辟第二获客渠道。',
  },
  {
    title: '知识沉淀与流程提效',
    en: 'AI WORKFLOW',
    description:
      '用 AI 整理产品上传 SOP、复盘广告数据并输出优化方案，把个人经验沉淀为可复用的知识库；Excel + AI 的数据分析组合让周度复盘从"凭感觉"变成"看数据说话"。',
  },
]

export default function AISkills() {
  const [openIdx, setOpenIdx] = useState(0)

  return (
    <section id="ai" className="py-32 relative">
      <div className="max-w-4xl mx-auto px-6 lg:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="font-display font-bold tracking-tighter leading-[1.05] text-3xl sm:text-4xl md:text-5xl text-center"
        >
          AI 赋能外贸 <span className="text-stroke-accent">AI SKILLS</span>
          <span className="text-accent">.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center text-gray-500 mt-5 max-w-xl mx-auto leading-relaxed"
        >
          我把 AI 深度融入外贸全流程——从获客、转化到交付，六大实战场景让效率倍增。
        </motion.p>

        <div className="mt-16">
          {items.map((item, i) => {
            const open = openIdx === i
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="border-b border-white/10"
              >
                <button
                  onClick={() => setOpenIdx(open ? -1 : i)}
                  className="w-full flex items-center gap-5 sm:gap-8 py-7 text-left group"
                >
                  <span className="font-display text-sm text-accent font-semibold w-8 shrink-0">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="flex-1">
                    <span
                      className={`font-display text-xl sm:text-2xl font-bold tracking-tight transition-colors ${
                        open ? 'text-accent' : 'text-white group-hover:text-accent'
                      }`}
                    >
                      {item.title}
                    </span>
                    <span className="block text-[11px] uppercase tracking-widest text-gray-500 mt-1">
                      {item.en}
                    </span>
                  </span>
                  <span
                    className={`w-9 h-9 rounded-full border flex items-center justify-center shrink-0 transition-colors ${
                      open ? 'border-accent text-accent' : 'border-white/20 text-gray-400 group-hover:border-accent group-hover:text-accent'
                    }`}
                  >
                    {open ? <Minus size={16} /> : <Plus size={16} />}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.45, ease: [0.32, 0.72, 0, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pr-4 pb-8 text-gray-400 leading-relaxed max-w-2xl ml-8 sm:ml-16">
                        {item.description}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
