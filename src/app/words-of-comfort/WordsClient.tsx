'use client'
import { motion } from 'framer-motion'

const poem = [
  ["I'll lend you for a little while a child of mine, God said,", "For you to love her while she lives, and mourn for when she's dead."],
  ["It may be six or seven years, or forty-two or three;", "But will you, till I call her back, take good care of her for me?"],
  ["I'll bring her charms to gladden you, and should her stay be brief,", "You'll have the lovely memories as a solace for your grief."],
  ["I cannot promise she will stay, since all from earth return;", "But there are lessons taught below I want this child to learn."],
  ["I've searched the whole world over, for teachers kind and true;", "And from the throngs that crowd life's lane I have chosen you…"],
  ["Now will you give her all your love? Nor think the labour vain?", "Nor hate me should the angels call, to take this child back again?"],
  ["To which the parents did reply, Dear Lord, Thy will be done.", "For all the joys thy child will bring, the risk of grief we'll run."],
  ["We'll shelter her with tenderness, We'll love her while we may…", "For all the love this child will bring, forever grateful we will stay."],
  ["But should the Angels call for her much sooner than we've planned,", "We'll brave the bitter grief that comes and try to understand."],
]

export default function WordsClient() {
  return (
    <div className="section">
      <div className="max-w-2xl mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="glass rounded-3xl overflow-hidden">
            <div className="h-1 gradient-bg" />
            <div className="p-8 md:p-12">
              <h1 className="font-serif text-3xl md:text-4xl font-bold text-gray-800 text-center mb-2">God's Lent Child</h1>
              <div className="w-16 h-0.5 gradient-bg rounded mx-auto mb-10" />

              <div className="space-y-8">
                {poem.map((stanza, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                    className="text-center hover:-translate-y-1 transition-transform duration-300">
                    {stanza.map((line, j) => (
                      <p key={j} className={`font-serif italic text-gray-700 leading-loose text-lg ${j === 0 ? 'mb-1' : ''}`}>
                        {line}
                      </p>
                    ))}
                  </motion.div>
                ))}
              </div>

              <p className="text-center text-[#FF6B9C] font-semibold italic mt-10 mb-10">By Florence Correa</p>

              <div className="flex justify-center mb-10">
                <img
                  src="/images/sa6-crop-u4488.jpg"
                  alt="Saarah"
                  className="w-52 h-52 md:w-64 md:h-64 rounded-full object-cover shadow-2xl border-4 border-white"
                />
              </div>

              <div className="gradient-bg rounded-2xl p-6 text-white text-center">
                <p className="font-serif italic text-base leading-relaxed">
                  In loving memory of Saarah, whose spirit continues to inspire us to make a difference in the lives of children and families in need.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
