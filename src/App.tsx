import React, { useState } from 'react';

export default function App() {
  const navLinks = [
    { name: '個人簡介', href: '#hero', hoverBg: 'hover:bg-[#FFC324]' },
    { name: '專業證照', href: '#certs', hoverBg: 'hover:bg-[#93C5FD]' },
    { name: '自傳經歷', href: '#bio', hoverBg: 'hover:bg-[#F9A8D4]' },
    { name: '韓國紀吧', href: '#korea', hoverBg: 'hover:bg-[#FEF08A]' },
    { name: '旅遊規劃', href: '#works', hoverBg: 'hover:bg-[#C4B5FD]' },
    { name: '3D模型區', href: '#3d-models', hoverBg: 'hover:bg-[#FFC324]' },
  ];

  return (
    <div className="font-sans text-black selection:bg-black selection:text-white">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b-4 border-black shadow-[0_4px_0_0_rgba(0,0,0,1)]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="font-black text-3xl tracking-tighter bg-black text-[#FFC324] px-4 py-1 -rotate-2 rounded-lg border-2 border-black inline-block">
            潘信妤 PRETTY GIRL
          </div>
          <div className="flex flex-wrapjustify-center gap-3 md:gap-6 font-black text-lg">
            {navLinks.map(link => (
              <a 
                key={link.name} 
                href={link.href} 
                className={`border-2 border-transparent px-4 py-1 rounded-full transition-all duration-200 
                hover:border-black ${link.hoverBg} hover:-translate-y-1 hover:shadow-[4px_4px_0_0_rgba(0,0,0,1)]`}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* 區塊一：個人簡介 */}
      <section id="hero" className="min-h-screen flex flex-col justify-center items-center pt-24 pb-8 relative overflow-hidden bg-[#FFC324]">
         <div className="flex flex-col items-center z-10 text-center px-4 w-full mt-4">
            <img 
              src="/me.jpg" 
              alt="潘信妤" 
              className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-full border-8 border-black shadow-[12px_12px_0_0_rgba(0,0,0,1)] mb-6 bg-white hover:scale-105 transition-transform"
              onError={(e) => {
                e.currentTarget.src = 'https://ui-avatars.com/api/?name=潘+信妤&size=512&background=000&color=00FF41';
              }}
            />
            <h1 className="text-6xl md:text-8xl font-black mb-4 text-black drop-shadow-[4px_4px_0_rgba(255,255,255,1)]">潘信妤</h1>
            
            <div className="flex flex-col items-center gap-3 mb-8 mt-2">
              <div className="text-xl md:text-2xl font-black flex flex-wrap gap-2 md:gap-4 items-center justify-center bg-white px-6 py-2 border-4 border-black shadow-[6px_6px_0_0_rgba(0,0,0,1)] rotate-1 rounded-xl">
                 <span className="text-[#EC4899]">雙子座</span>
                 <span className="text-black hidden sm:inline">｜</span>
                 <span className="text-[#F59E0B]">Q型</span>
                 <span className="text-black hidden sm:inline">｜</span>
                 <span className="text-[#3B82F6]">2107-05-22</span>
              </div>
              <div className="text-lg font-black bg-black text-white px-5 py-2 rounded-lg border-2 border-black -rotate-1 shadow-[4px_4px_0_0_rgba(255,255,255,1)]">
                a111183131@nkust.edu.tw
              </div>
            </div>

            <p className="text-lg md:text-xl font-black italic max-w-3xl border-4 border-black p-4 rounded-2xl bg-white shadow-[8px_8px_0_0_rgba(0,0,0,1)] mb-12 -rotate-1 relative z-10">
              <span className="absolute -top-4 -left-4 text-4xl">🔥</span>
              『我是練習時長兩年半的個人練習生潘信妤，喜歡唱跳 rap 籃球』
              <span className="absolute -bottom-4 -right-4 text-4xl">🎧</span>
            </p>

            <div className="w-full overflow-hidden bg-black py-4 text-2xl md:text-4xl font-black border-y-4 border-black relative">
              <div className="animate-marquee flex">
                <div className="flex shrink-0 px-4 space-x-4">
                  <span className="text-[#00FF41]">雞你太美baby</span>
                  <span className="text-[#FFC324]">雞你太美baby</span>
                  <span className="text-[#F9A8D4]">雞你實在是太美baby</span>
                  <span className="text-[#93C5FD]">雞你太美baby</span>
                  <span>🏀 🎤 🕺🐓🐔</span>
                  <span className="text-[#F87171]">雞你太美baby</span>
                  <span className="text-[#C084FC]">雞你太美baby</span>
                  <span className="text-[#34D399]">雞你實在是太美baby</span>
                  <span className="text-[#FBBF24]">雞你太美baby</span>
                </div>
                <div className="flex shrink-0 px-4 space-x-4">
                  <span className="text-[#00FF41]">雞你太美baby</span>
                  <span className="text-[#FFC324]">雞你太美baby</span>
                  <span className="text-[#F9A8D4]">雞你實在是太美baby</span>
                  <span className="text-[#93C5FD]">雞你太美baby</span>
                  <span>🏀 🎤 🕺🐓🐔</span>
                  <span className="text-[#F87171]">雞你太美baby</span>
                  <span className="text-[#C084FC]">雞你太美baby</span>
                  <span className="text-[#34D399]">雞你實在是太美baby</span>
                  <span className="text-[#FBBF24]">雞你太美baby</span>
                </div>
                <div className="flex shrink-0 px-4 space-x-4">
                  <span className="text-[#00FF41]">雞你太美baby</span>
                  <span className="text-[#FFC324]">雞你太美baby</span>
                  <span className="text-[#F9A8D4]">雞你實在是太美baby</span>
                  <span className="text-[#93C5FD]">雞你太美baby</span>
                  <span>🏀 🎤 🕺🐓🐔</span>
                  <span className="text-[#F87171]">雞你太美baby</span>
                  <span className="text-[#C084FC]">雞你太美baby</span>
                  <span className="text-[#34D399]">雞你實在是太美baby</span>
                  <span className="text-[#FBBF24]">雞你太美baby</span>
                </div>
                <div className="flex shrink-0 px-4 space-x-4">
                  <span className="text-[#00FF41]">雞你太美baby</span>
                  <span className="text-[#FFC324]">雞你太美baby</span>
                  <span className="text-[#F9A8D4]">雞你實在是太美baby</span>
                  <span className="text-[#93C5FD]">雞你太美baby</span>
                  <span>🏀 🎤 🕺🐓🐔</span>
                  <span className="text-[#F87171]">雞你太美baby</span>
                  <span className="text-[#C084FC]">雞你太美baby</span>
                  <span className="text-[#34D399]">雞你實在是太美baby</span>
                  <span className="text-[#FBBF24]">雞你太美baby</span>
                </div>
              </div>
            </div>
         </div>
      </section>

      {/* 區塊二：專業證照與學歷 */}
      <section id="certs" className="py-16 px-6 bg-[#A7F3D0] border-t-8 border-black">
        <div className="max-w-6xl mx-auto flex flex-col justify-center h-full">
            <h2 className="text-4xl md:text-5xl font-black mb-12 text-center">
              <span className="bg-white px-8 py-3 border-4 border-black shadow-[8px_8px_0_0_rgba(0,0,0,1)] inline-block -rotate-2">
                🏆 專業證照與學歷
              </span>
            </h2>
            
            <div className="mb-24">
              <h3 className="text-3xl md:text-5xl font-black mb-12 bg-black text-white inline-block px-6 py-4 -rotate-2 border-4 border-black relative shadow-[6px_6px_0_0_#FFC324]">
                  🗣️ <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-[#FBBF24] animate-pulse drop-shadow-[0_0_12px_rgba(253,224,71,0.8)]">傳奇</span>語言能力
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 px-4 w-full justify-items-center">
                
                {/* 英文 */}
                <div className="relative group w-full max-w-sm transition-all duration-300 z-10 hover:z-20">
                  <div className="absolute inset-0 bg-[#FF0055] rounded-3xl blur-xl opacity-20 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                  <div className="relative bg-white px-6 py-8 rounded-3xl font-black border-4 border-black shadow-[8px_8px_0_0_rgba(0,0,0,1)] group-hover:-translate-y-4 group-hover:scale-105 group-hover:shadow-[16px_16px_0_0_#FF0055] group-hover:border-[#FF0055] transition-all duration-300 flex flex-col items-center justify-center">
                    <span className="text-4xl md:text-5xl mb-4 text-[#FF0055] uppercase tracking-wider group-hover:drop-shadow-[0_0_10px_rgba(255,0,85,0.8)]">英文 English</span>
                    <div className="text-xl md:text-2xl text-black border-2 border-dashed border-black px-4 py-2 rounded-xl bg-white shadow-inner">
                      TOEIC 3000 / <span className="text-transparent bg-clip-text bg-gradient-to-br from-yellow-400 to-orange-500 animate-pulse font-black text-2xl">傳奇</span>
                    </div>
                  </div>
                </div>

                {/* 台語 */}
                <div className="relative group w-full max-w-sm transition-all duration-300 z-10 hover:z-20">
                  <div className="absolute inset-0 bg-[#FFBB00] rounded-3xl blur-xl opacity-20 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                  <div className="relative bg-white px-6 py-8 rounded-3xl font-black border-4 border-black shadow-[8px_8px_0_0_rgba(0,0,0,1)] group-hover:-translate-y-4 group-hover:scale-105 group-hover:shadow-[16px_16px_0_0_#FFBB00] group-hover:border-[#FFBB00] transition-all duration-300 flex flex-col items-center justify-center">
                    <span className="text-4xl md:text-5xl mb-4 text-[#FFBB00] uppercase tracking-wider group-hover:drop-shadow-[0_0_10px_rgba(255,187,0,0.8)]">台語 Tai-gi</span>
                    <div className="text-xl md:text-2xl text-black border-2 border-dashed border-black px-4 py-2 rounded-xl bg-white shadow-inner">
                      一百昏 / <span className="text-transparent bg-clip-text bg-gradient-to-br from-yellow-400 to-orange-500 animate-pulse font-black text-2xl">傳奇</span>
                    </div>
                  </div>
                </div>

                {/* 法文 */}
                <div className="relative group w-full max-w-sm transition-all duration-300 z-10 hover:z-20">
                  <div className="absolute inset-0 bg-[#00D4FF] rounded-3xl blur-xl opacity-20 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                  <div className="relative bg-white px-6 py-8 rounded-3xl font-black border-4 border-black shadow-[8px_8px_0_0_rgba(0,0,0,1)] group-hover:-translate-y-4 group-hover:scale-105 group-hover:shadow-[16px_16px_0_0_#00D4FF] group-hover:border-[#00D4FF] transition-all duration-300 flex flex-col items-center justify-center">
                    <span className="text-4xl md:text-5xl mb-4 text-[#00D4FF] uppercase tracking-wider group-hover:drop-shadow-[0_0_10px_rgba(0,212,255,0.8)]">法文 Français</span>
                    <div className="text-xl md:text-2xl text-black border-2 border-dashed border-black px-4 py-2 rounded-xl bg-white shadow-inner">
                      DALF C2 / <span className="text-transparent bg-clip-text bg-gradient-to-br from-yellow-400 to-orange-500 animate-pulse font-black text-2xl">傳奇</span>
                    </div>
                  </div>
                </div>

                {/* 拉丁文 */}
                <div className="relative group w-full max-w-sm transition-all duration-300 z-10 hover:z-20">
                  <div className="absolute inset-0 bg-[#9D00FF] rounded-3xl blur-xl opacity-20 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                  <div className="relative bg-white px-6 py-8 rounded-3xl font-black border-4 border-black shadow-[8px_8px_0_0_rgba(0,0,0,1)] group-hover:-translate-y-4 group-hover:scale-105 group-hover:shadow-[16px_16px_0_0_#9D00FF] group-hover:border-[#9D00FF] transition-all duration-300 flex flex-col items-center justify-center text-center">
                    <span className="text-3xl md:text-4xl mb-4 text-[#9D00FF] uppercase tracking-wider group-hover:drop-shadow-[0_0_10px_rgba(157,0,255,0.8)]">拉丁文 Latin</span>
                    <div className="text-lg md:text-xl text-black border-2 border-dashed border-black px-4 py-2 rounded-xl bg-white shadow-inner w-full">
                      金牌+Summa Cum Laude<br />
                      <span className="text-transparent bg-clip-text bg-gradient-to-br from-yellow-400 to-orange-500 animate-pulse font-black text-2xl">傳奇</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <div className="mb-16">
              <h3 className="text-3xl font-black mb-6 bg-[#EC4899] text-white inline-block px-4 py-2 -rotate-1 border-4 border-black">
                  🎓 學歷
              </h3>
              <div className="flex flex-col md:flex-row gap-6 mt-2">
                <div className="flex flex-col items-start font-black bg-white text-black px-8 py-5 rounded-xl shadow-[8px_8px_0_0_rgba(0,0,0,1)] border-4 border-black hover:-translate-y-1 transition-transform">
                  <span className="text-gray-500 text-sm mb-1 tracking-widest uppercase">2013-2019</span>
                  <span className="text-2xl">🏫 旗山國小-香蕉班</span>
                </div>
                <div className="flex flex-col items-start font-black bg-white text-black px-8 py-5 rounded-xl shadow-[8px_8px_0_0_rgba(0,0,0,1)] border-4 border-black hover:-translate-y-1 transition-transform">
                  <span className="text-gray-500 text-sm mb-1 tracking-widest uppercase">2019-2022</span>
                  <span className="text-2xl">🏫 旗山國中-藍蕉班</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-black mb-8 bg-[#3B82F6] text-white inline-block px-4 py-2 border-4 border-black rotate-1">
                📜 專業證照清單
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-12">
                <CertCard 
                  title="✈️ 航空與操作" 
                  colorClass="bg-[#FEF08A]"
                  items={[
                    "航空運輸駕駛員執照 (ATPL)", "商用駕駛員執照 (CPL)", 
                    "飛航儀表飛行證書 (IFR Rating)", "多引擎飛行資格 (Multi-engine Rating)", 
                    "航空無線電通信證書", "無人機高級操作證照"
                  ]} 
                />
                <CertCard 
                  title="🏗️ 工程與技術" 
                  colorClass="bg-[#FBCFE8]"
                  items={[
                    "建築師證照", "土木技師證照", "結構工程技師證照", 
                    "測量技師證照", "甲級電壓執照", "甲級工業配線技術士", 
                    "高壓電氣設備操作人員證書", "自來水管配管甲級技術士", 
                    "起重機操作技術士證照", "潛水教練證照（開放水域進階）"
                  ]} 
                />
                <CertCard 
                  title="📋 管理與安全" 
                  colorClass="bg-[#BAE6FD]"
                  items={[
                    "職業安全衛生管理員/師證照", "危險物品運輸專業證照 (ADR)", 
                    "消防設備師證照", "國際貨運代理專業證書 (FIATA)", 
                    "ISO品質管理內部稽核員證書"
                  ]} 
                />
                <CertCard 
                  title="🚑 醫療救護" 
                  colorClass="bg-[#E9D5FF]"
                  items={[
                    "初級救護技術員 (EMT-1)", "高級救護技術員 (EMT-P)"
                  ]} 
                />
              </div>
            </div>
        </div>
      </section>

      {/* 區塊三：自傳經歷 */}
      <section id="bio" className="py-16 px-6 bg-[#FBCFE8] border-t-8 border-black">
         <div className="max-w-7xl mx-auto flex flex-col justify-center h-full">
            <h2 className="text-4xl md:text-5xl font-black mb-12 text-center">
              <span className="bg-white px-8 py-3 border-4 border-black shadow-[8px_8px_0_0_rgba(0,0,0,1)] inline-block rotate-1">
                🌟 自傳經歷
              </span>
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
               {/* 完整自傳 */}
               <div className="bg-white p-8 md:p-10 rounded-3xl shadow-[12px_12px_0_0_rgba(0,0,0,1)] border-4 border-black relative">
                  <div className="absolute -top-6 -left-6 bg-black text-[#00FF41] px-6 py-2 border-4 border-white font-black text-2xl -rotate-6">
                     📝 完整自傳
                  </div>
                  <div className="space-y-3 text-base md:text-lg font-bold leading-snug mt-4">
                     <p>大家好，我是潘信妤。</p>
                     <p>平常生活其實沒有什麼特別張揚的部分，但會接觸到一些跟人有關的事情，像是<mark className="bg-[#FFEB3B] px-1 rounded border border-black shadow-[2px_2px_0_rgba(0,0,0,1)] text-black">旗山里長的相關協助工作</mark>，還有一些社區裡臨時會需要人幫忙處理的事。</p>
                     <p>比較常發生的是，有些事情不是正式分工，但會慢慢變成<mark className="bg-[#FFEB3B] px-1 rounded border border-black shadow-[2px_2px_0_rgba(0,0,0,1)] text-black">「有人遇到問題就會來問我」</mark>。例如活動需要調整流程、臨時人手不夠，或是現場有狀況需要重新安排，我通常會<mark className="bg-[#FFEB3B] px-1 rounded border border-black shadow-[2px_2px_0_rgba(0,0,0,1)] text-black">先把狀況整理清楚，再看怎麼讓事情可以順利繼續進行</mark>。</p>
                     <p>另外也有在參與一些比較偏公益性質的事情，像是協助整理物資、轉達資源、或是<mark className="bg-[#FFEB3B] px-1 rounded border border-black shadow-[2px_2px_0_rgba(0,0,0,1)] text-black">幫忙對接需要幫助的人跟可以支援的單位</mark>。不是什麼很大型的組織，但時間久了之後，會慢慢累積成一個固定會出現的角色。</p>
                     <p>有時候也會遇到比較臨時的求助，例如有人情緒或狀況不太好，會先需要一個可以把事情講清楚的人，我通常就是<mark className="bg-[#FFEB3B] px-1 rounded border border-black shadow-[2px_2px_0_rgba(0,0,0,1)] text-black">先聽完，再幫忙把事情分成可以處理的部分</mark>。</p>
                     <p>這些事情沒有特別被記錄或宣傳，大多都是自然發生的，所以也不太會特別拿出來說。但久了之後，好像就變成一種習慣，只要有需要的時候，就會被想到。</p>
                     <p>我自己沒有特別覺得這是什麼很大的角色，就是剛好在一些需要有人處理事情的時候，會在場而已。</p>
                     <p>大概是這樣，謝謝。</p>
                  </div>
               </div>

               {/* 工作經驗 */}
               <div className="bg-black text-white p-8 md:p-10 rounded-3xl shadow-[8px_8px_0_0_#3B82F6] border-4 border-black relative h-fit lg:mt-4">
                 <div className="absolute -top-5 left-8 bg-[#EF4444] text-white px-5 py-2 border-4 border-black font-black text-2xl -rotate-2">
                    💼 工作經驗
                 </div>
                 <div className="space-y-6 mt-6">
                    <WorkExp 
                       role="國際展會執行助理" 
                       desc="現場動線控管與攤位協調。" 
                       insight="怎麼在時間很緊迫的情況下快速調整流程" 
                       bgClass="bg-[#F87171] text-black" 
                       labelClass="bg-white"
                    />
                    <WorkExp 
                       role="品牌物流出貨協調" 
                       desc="電商訂單整合與配送。" 
                       insight="如何讓大量資訊保持一致提升效率" 
                       bgClass="bg-[#60A5FA] text-black"
                       labelClass="bg-white"
                    />
                    <WorkExp 
                       role="客戶專案整合助理" 
                       desc="需求整理與進度回報。" 
                       insight="怎麼把不同人的想法整理成可以實際執行的版本" 
                       bgClass="bg-[#34D399] text-black"
                       labelClass="bg-white"
                    />
                 </div>
               </div>
            </div>
         </div>
      </section>

      {/* 韓國記：獨立區塊 */}
      <section id="korea" className="min-h-screen py-16 px-6 bg-[#FEF08A] border-t-8 border-black">
         <div className="max-w-7xl mx-auto flex flex-col justify-center h-full">
            <h2 className="text-4xl md:text-5xl font-black mb-12 text-center">
              <span className="bg-[#3B82F6] text-white px-8 py-3 border-4 border-black shadow-[8px_8px_0_0_rgba(0,0,0,1)] inline-block -rotate-2">
                🇰🇷 2025 韓國記
              </span>
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch bg-white p-8 md:p-10 rounded-3xl border-4 border-black shadow-[12px_12px_0_0_rgba(0,0,0,1)] relative">
               <div className="absolute -top-6 -right-6 text-6xl rotate-12 drop-shadow-md">✈️</div>
               
               <div className="space-y-4 text-base md:text-lg font-black leading-snug flex flex-col justify-center">
                  <p>現在回想起來，去年暑假那一個禮拜的首爾行，簡直是一場關於「汗水與多巴胺」的長跑。出發前，我對首爾的幻想是韓劇裡那種清爽的街道、精緻的穿搭；結果落地第一天，首爾的太陽直接給我一個震撼教育。那種熱不是開玩笑的，是那種會讓你走在坡道上，內心瘋狂吶喊「為什麼韓國到處都是斜坡」的極限運動。我住在弘大附近，每天出門不到五分鐘，瀏海就已經宣告陣亡，直接貼在額頭上。但我發現韓國女生真的很神，在那種 35 度的高溫下，她們的妝竟然可以紋絲不動，這絕對是我那趟旅行中最大的未解之謎。</p>
                  <p>這一個禮拜，我的生命基本上是靠「冰美式（Ah-Ah）」在維繫的。韓國人對咖啡的執著真的救了我。不管是在聖水洞那種舊工廠改建的超酷選物店，還是在漢南洞的小巷子裡亂竄，只要走累了、快中暑了，隨便推開一家咖啡廳的門，那種強效冷氣配上滿杯冰塊的咖啡，真的會讓你瞬間覺得「我還能再逛五間店」。特別記得有天下午在延南洞，我隨便找了個窗邊位子坐下，看著外頭被太陽曬到發燙的柏油路，手裡握著冰涼的杯子，那種「偷得浮生半日閒」的爽快，現在想起來還是好懷念。</p>
                  <p>關於食物，那是一種「痛並快樂著」的循環。我印象最深的是去吃陳玉華一隻雞，明明店裡熱氣騰騰，大家卻還是圍著那鍋蒜味重到不行的雞湯瘋狂動筷子。那個年糕軟 Q 到不行，雞肉沾上特製的辣醬，吃完滿頭大汗，但走出門被微風一吹，竟然有種通體舒暢的感覺。還有夜晚的橋村炸雞，蜂蜜口味配上冰啤酒，在飯店吹著冷氣大口啃，那種罪惡感跟幸福感是成正比的。喔對了，還有廣藏市場，雖然擠到不行、熱到衣服濕透，但坐在攤位前吃著麻藥飯捲跟生牛肉，那種在地的人情味跟喧囂感，真的很有出國旅行的實感。</p>
                  <p>最浪漫的時刻，莫過於漢江邊的傍晚。那天我特地去汝矣島，學路邊的人去租了一張野餐墊。我看著那個自助煮泡麵機，覺得韓國人發明這東西簡直是天才。坐在草地上，看著夕陽慢慢掉進漢江，江水閃著金光，耳邊有街頭藝人在自彈自唱，旁邊全是成雙成對的情侶或野餐的朋友。那時候我才深刻感覺到：首爾不只是購物聖地，它有一種很用力在生活的生命力。雖然白天的熱浪讓人崩潰，但當夜晚的涼風吹來，看著首爾塔在遠處亮起燈，那一刻我真的覺得「來這一趟太好了」。</p>
                  <p>回國後，我的行李箱重了五公斤，心裡卻好像輕了不少。雖然一週下來我的腳底板走出了水泡，地鐵站的樓梯爬到我懷疑人生，但那種在異國街頭隨性亂晃、即便流汗也覺得新鮮的心情，是待在辦公室裡永遠感受不到的。現在回頭看那些照片，雖然每張臉都熱到發紅，但笑容卻是真的。</p>
                  <p>首爾就是這樣一個地方：你會邊走邊抱怨熱、邊喊腳痛，但回台灣不到三個月，你又會開始滑機票票價，想著下一次去要去哪間咖啡廳發呆。去年那個熱到爆炸的夏天，現在想起來，全都是冰美式跟炸雞香味交織出的記憶。</p>
               </div>

               <div className="flex flex-col gap-4 sm:gap-6 relative mt-6 lg:mt-0 lg:ml-4 justify-center">
                  <div className="grid grid-cols-2 gap-4 lg:gap-6 relative group">
                     {/* 大圖置頂 */}
                     <div className="col-span-2 border-4 border-black rounded-3xl overflow-hidden shadow-[8px_8px_0_0_rgba(0,0,0,1)] aspect-[16/9] bg-[#FBBF24] group-hover:-translate-y-1 transition-transform duration-300">
                        <img src="https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?auto=format&fit=crop&w=800&q=80" alt="美麗的日落風景" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                     </div>
                     {/* 兩張小圖並排 */}
                     <div className="border-4 border-black rounded-3xl overflow-hidden shadow-[8px_8px_0_0_rgba(0,0,0,1)] aspect-square bg-[#A7F3D0] group-hover:-translate-y-1 transition-transform duration-300 delay-75">
                        <img src="https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=400&q=80" alt="冰美式咖啡" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                     </div>
                     <div className="border-4 border-black rounded-3xl overflow-hidden shadow-[8px_8px_0_0_rgba(0,0,0,1)] aspect-square bg-[#FBCFE8] group-hover:-translate-y-1 transition-transform duration-300 delay-150">
                        <img src="https://images.unsplash.com/photo-1580651315530-69c8e0026377?auto=format&fit=crop&w=400&q=80" alt="韓國美食炸雞" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                     </div>
                     
                     {/* 裝飾Emoji */}
                     <div className="hidden xl:block absolute -top-8 -left-8 text-7xl rotate-[-15deg] drop-shadow-md z-20 hover:scale-110 transition-transform cursor-default">🇰🇷</div>
                     <div className="hidden xl:block absolute -bottom-8 -right-8 text-6xl rotate-[20deg] drop-shadow-md z-20 hover:scale-110 transition-transform cursor-default">🍗</div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* 區塊四：展示 */}
      <section id="works" className="py-16 px-6 bg-[#C4B5FD] border-t-8 border-black">
         <div className="max-w-7xl mx-auto flex flex-col justify-center h-full">
            <div className="space-y-12">
               {/* 旅遊規劃 Word */}
               <div className="bg-white p-8 rounded-3xl border-4 border-black shadow-[12px_12px_0_0_rgba(0,0,0,1)]">
                  <h3 className="text-3xl font-black mb-6 bg-[#10B981] text-white inline-block px-4 py-2 border-2 border-black rotate-1">
                     📄 旅遊規劃 Word
                  </h3>
                  <div className="p-6 md:p-10 border-4 border-black rounded-2xl bg-white space-y-8">
                     <div className="text-center">
                        <h4 className="text-4xl font-black mb-2">泰國奢華連假行程企劃</h4>
                        <div className="h-2 w-24 bg-[#FFC324] mx-auto border-2 border-black"></div>
                     </div>

                     <section>
                        <h5 className="text-2xl font-bold flex items-center gap-2 mb-4 border-b-2 border-dashed border-gray-300 pb-2">
                           <span className="bg-[#3B82F6] text-white px-2 py-1 rounded-lg border-2 border-black inline-block">✈️</span>
                           交通與住宿概覽
                        </h5>
                        <ul className="list-disc list-inside space-y-3 text-lg font-medium ml-2">
                           <li><strong>國際交通：</strong> 私人商務噴射機（台北松山 ↔ 曼谷廊曼/普吉國際機場）。</li>
                           <li><strong>境內交通：</strong> 專屬直升機（曼谷市區接駁）、豪華保姆車（Rolls-Royce 或 Alphard VIP）。</li>
                           <li><strong>頂級下榻：</strong>
                              <ul className="list-[circle] list-inside ml-8 mt-2 space-y-2 text-gray-700">
                                 <li><strong>曼谷：</strong> Aman Nai Lert Bangkok（2024/2025新開幕，隱身鬧區的綠洲）。</li>
                                 <li><strong>普吉島：</strong> Amanpuri（安縵品牌創始店，提供極致私隱）。</li>
                              </ul>
                           </li>
                        </ul>
                     </section>

                     <section>
                        <h5 className="text-2xl font-bold flex items-center gap-2 mb-6 border-b-2 border-dashed border-gray-300 pb-2">
                           <span className="bg-[#EC4899] text-white px-2 py-1 rounded-lg border-2 border-black inline-block">🗓️</span>
                           行程安排
                        </h5>
                        
                        <div className="space-y-6">
                           <div className="border-4 border-black rounded-xl p-5 bg-[#FBCFE8] shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
                              <h6 className="text-xl font-black mb-3">Day 1：抵達曼谷 - 雲端之上的繁華夜</h6>
                              <ul className="space-y-2 font-medium break-words md:break-normal">
                                 <li><strong>【10:00】</strong> 搭乘私人飛機抵達曼谷廊曼機場（DMK），專屬禮賓人員於停機坪接機，快速通關。</li>
                                 <li><strong>【12:00】</strong> <strong>午餐：</strong>Sorn（米其林二星，泰國最難訂位的南部料理，已為您預留包廂）。</li>
                                 <li><strong>【14:30】</strong> 下榻 Aman Nai Lert。午後在 2,500 坪的私人森林花園中享受頂級泰式水療 SPA。</li>
                                 <li><strong>【18:00】</strong> <strong>晚餐：</strong>Le Du（亞洲 50 最佳餐廳第一名，現代創意泰式現代料理）。</li>
                                 <li><strong>【21:00】</strong> 包下 Lebua State Tower 屋頂酒吧專屬區域，鳥瞰曼谷百萬夜景，私人調酒師隨侍。</li>
                              </ul>
                           </div>

                           <div className="border-4 border-black rounded-xl p-5 bg-[#A7F3D0] shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
                              <h6 className="text-xl font-black mb-3">Day 2：古都巡禮與海島飛躍 - 從歷史到蔚藍</h6>
                              <ul className="space-y-2 font-medium break-words md:break-normal">
                                 <li><strong>【09:00】</strong> 避開陸路塞車，搭乘直升機俯瞰大皇宮與鄭王廟，並降落於近郊古都大城（Ayutthaya）。</li>
                                 <li><strong>【10:30】</strong> 由泰國國家級史學家導覽，私人包場參觀古蹟遺跡。</li>
                                 <li><strong>【12:30】</strong> <strong>午餐：</strong> 在昭披耶河畔私人古宅享用由前皇室御廚烹飪的「泰國宮廷料理」。</li>
                                 <li><strong>【15:00】</strong> 轉機前往普吉島。由專屬豪華車隊接送至 Amanpuri 度假村。</li>
                                 <li><strong>【18:30】</strong> <strong>晚餐：</strong> 度假村私人沙灘火舞燭光晚宴，享用現撈活龍蝦與頂級魚子醬。</li>
                              </ul>
                           </div>

                           <div className="border-4 border-black rounded-xl p-5 bg-[#BFDBFE] shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
                              <h6 className="text-xl font-black mb-3">Day 3：安達曼海私人奢遊 - 絕美海島日常</h6>
                              <ul className="space-y-2 font-medium break-words md:break-normal">
                                 <li><strong>【10:00】</strong> 登上私人豪華遊艇（60 呎以上）出海探索攀牙灣。</li>
                                 <li><strong>【12:00】</strong> <strong>午餐：</strong> 船上配備私人主廚，在無人島礁旁享用精緻香檳早午餐。</li>
                                 <li><strong>【14:00】</strong> 專業潛水教練一對一帶領，前往私人海域浮潛或進行水上摩托車活動。</li>
                                 <li><strong>【17:00】</strong> 返回度假村，由專業按摩師進行深層修復療程。</li>
                                 <li><strong>【19:30】</strong> <strong>晚餐：</strong>PRU（普吉島唯一米其林綠星與一星餐廳，堅持農場到餐桌的極致新鮮）。</li>
                              </ul>
                           </div>

                           <div className="border-4 border-black rounded-xl p-5 bg-[#FDE68A] shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
                              <h6 className="text-xl font-black mb-3">Day 4：最後的放鬆與優雅歸途</h6>
                              <ul className="space-y-2 font-medium break-words md:break-normal">
                                 <li><strong>【09:00】</strong> 在別墅內享用私人早餐，並於普吉島最具代表性的 Wat Chalong 進行私人祈福儀式（由高僧主持）。</li>
                                 <li><strong>【12:00】</strong> <strong>午餐：</strong> 於 Blue Elephant 泰式古宅餐廳享用傳統經典滋味。</li>
                                 <li><strong>【14:30】</strong> 前往普吉私人航站樓，進行最後的免稅精品選購。</li>
                                 <li><strong>【16:00】</strong> 帶著滿滿能量，搭乘私人專機啟程返台。</li>
                              </ul>
                           </div>
                        </div>
                     </section>

                     <section>
                        <h5 className="text-2xl font-bold flex items-center gap-2 mb-4 border-b-2 border-dashed border-gray-300 pb-2">
                           <span className="bg-[#8B5CF6] text-white px-2 py-1 rounded-lg border-2 border-black inline-block">💰</span>
                           費用估算
                        </h5>
                        <div className="overflow-x-auto border-4 border-black rounded-xl shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
                           <table className="w-full text-left border-collapse min-w-[500px]">
                              <thead>
                                 <tr className="bg-black text-white">
                                    <th className="p-4 border-b-4 border-black font-bold whitespace-nowrap">項目</th>
                                    <th className="p-4 border-b-4 border-l-2 border-white font-bold whitespace-nowrap">台幣估算 (TWD)</th>
                                    <th className="p-4 border-b-4 border-l-2 border-white font-bold whitespace-nowrap">備註</th>
                                 </tr>
                              </thead>
                              <tbody className="font-medium bg-white">
                                 <tr className="hover:bg-gray-100 transition-colors">
                                    <td className="p-4 border-b-2 border-black text-black">私人飛機租賃</td>
                                    <td className="p-4 border-b-2 border-l-2 border-black text-black">約 3,900,000 - 5,800,000 元</td>
                                    <td className="p-4 border-b-2 border-l-2 border-black text-gray-700">台北往返泰國及境內跳島</td>
                                 </tr>
                                 <tr className="hover:bg-gray-100 transition-colors bg-gray-50">
                                    <td className="p-4 border-b-2 border-black text-black">直升機/豪車接駁</td>
                                    <td className="p-4 border-b-2 border-l-2 border-black text-black">約 500,000 元</td>
                                    <td className="p-4 border-b-2 border-l-2 border-black text-gray-700">全程專人專車與直升機</td>
                                 </tr>
                                 <tr className="hover:bg-gray-100 transition-colors">
                                    <td className="p-4 border-b-2 border-black text-black">頂級別墅住宿</td>
                                    <td className="p-4 border-b-2 border-l-2 border-black text-black">約 400,000 - 800,000 元</td>
                                    <td className="p-4 border-b-2 border-l-2 border-black text-gray-700">三晚奢華別墅（兩間房）</td>
                                 </tr>
                                 <tr className="hover:bg-gray-100 transition-colors bg-gray-50">
                                    <td className="p-4 border-b-2 border-black text-black">米其林與私人晚宴</td>
                                    <td className="p-4 border-b-2 border-l-2 border-black text-black">約 250,000 - 350,000 元</td>
                                    <td className="p-4 border-b-2 border-l-2 border-black text-gray-700">包含酒水、私人主廚與包場費</td>
                                 </tr>
                                 <tr className="bg-[#FFC324] hover:bg-[#FBBF24] transition-colors">
                                    <td className="p-4 border-b-0 border-black font-black text-black">行程總計預估</td>
                                    <td className="p-4 border-b-0 border-l-2 border-black font-black text-black">約 6,500,000 元起</td>
                                    <td className="p-4 border-b-0 border-l-2 border-black font-black text-black">視機型與具體活動項目調整</td>
                                 </tr>
                              </tbody>
                           </table>
                        </div>
                     </section>
                  </div>
               </div>

               {/* 旅遊規劃 PPT */}
               <div className="bg-white p-8 rounded-3xl border-4 border-black shadow-[12px_12px_0_0_rgba(0,0,0,1)]">
                  <h3 className="text-3xl font-black mb-6 bg-[#3B82F6] text-white inline-block px-4 py-2 border-2 border-black -rotate-1">
                     🖼️ 旅遊規劃 PPT
                  </h3>
                  <PPTViewer slides={Array.from({ length: 13 }, (_, i) => `/泰國奢華連假行程企劃/投影片${i + 1}.JPG`)} />
               </div>

               {/* 專案規劃展示二 -> 旅遊規劃PPT2 */}
               <div className="bg-white p-8 rounded-3xl border-4 border-black shadow-[12px_12px_0_0_rgba(0,0,0,1)]">
                  <h3 className="text-3xl font-black mb-6 bg-[#EC4899] text-white inline-block px-4 py-2 border-2 border-black rotate-1">
                     📑 旅遊規劃PPT2
                  </h3>
                  <PPTViewer slides={Array.from({ length: 10 }, (_, i) => `/123/投影片${i + 1}.JPG`)} />
               </div>

               {/* 旅遊規劃PPT3 */}
               <div className="bg-white p-8 rounded-3xl border-4 border-black shadow-[12px_12px_0_0_rgba(0,0,0,1)]">
                  <h3 className="text-3xl font-black mb-6 bg-[#10B981] text-white inline-block px-4 py-2 border-2 border-black -rotate-1">
                     🎯 旅遊規劃PPT3
                  </h3>
                  <PPTViewer slides={Array.from({ length: 10 }, (_, i) => `/1234/投影片${i + 1}.JPG`)} />
               </div>

               {/* 旅遊規劃PPT4 */}
               <div className="bg-white p-8 rounded-3xl border-4 border-black shadow-[12px_12px_0_0_rgba(0,0,0,1)]">
                  <h3 className="text-3xl font-black mb-6 bg-[#8B5CF6] text-white inline-block px-4 py-2 border-2 border-black rotate-1">
                     ✨ 旅遊規劃PPT4
                  </h3>
                  <PPTViewer slides={Array.from({ length: 10 }, (_, i) => `/12345/投影片${i + 1}.JPG`)} />
               </div>

               {/* 旅遊影片 */}
               <div className="bg-white p-4 md:p-8 rounded-3xl border-4 border-black shadow-[12px_12px_0_0_rgba(0,0,0,1)] flex flex-col">
                  <h3 className="text-3xl font-black mb-8 bg-[#EC4899] text-white inline-block px-4 py-2 border-2 border-black rotate-1 self-start relative z-10 shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
                     🎬 旅遊影片
                  </h3>
                  
                  {/* 垂直捲動排列 */}
                  <div className="flex flex-col gap-12 w-full">
                     {[
                        { title: "✈️ 旅遊影片 1：熱血啟航！搭飛機出發囉！", src: "/影片1.mp4", bg: "bg-[#FFC324]" },
                        { title: "🚢 旅遊影片 2：極致享受！體驗泰國夢幻郵輪！", src: "/影片2.mp4", bg: "bg-[#A7F3D0]" },
                        { title: "🌆 旅遊影片 3：大開眼界！深度體驗泰國紅燈區夜生活！", src: "/影片3.mp4", bg: "bg-[#FBCFE8]" },
                        { title: "🚀 旅遊影片 4：太褲辣！不小心搭到外太空班機，準備接下一個行程！", src: "/影片4.mp4", bg: "bg-[#93C5FD]" },
                     ].map((video, idx) => (
                        <div key={idx} className={`w-full flex flex-col p-6 md:p-10 ${video.bg} border-4 border-black rounded-3xl shadow-[8px_8px_0_0_rgba(0,0,0,1)] relative`}>
                           {/* 標題 */}
                           <h4 className="text-2xl md:text-3xl lg:text-4xl leading-snug md:leading-snug font-black mb-6 px-6 py-4 bg-white border-4 border-black rounded-2xl shadow-[4px_4px_0_0_rgba(0,0,0,1)] -rotate-1 self-start">
                              {video.title}
                           </h4>
                           
                           {/* 影片本體 */}
                           <div className="w-full aspect-video bg-black rounded-2xl border-4 border-black overflow-hidden shadow-[8px_8px_0_0_rgba(0,0,0,1)] relative flex items-center justify-center mx-auto max-w-5xl">
                              <video 
                                 src={video.src}
                                 className="w-full h-full object-contain"
                                 controls
                                 preload="metadata"
                                 playsInline
                              />
                           </div>
                        </div>
                     ))}
                  </div>
               </div>

               {/* 3D 模型 */}
               <div id="3d-models" className="bg-[#FFC324] p-6 md:p-12 rounded-3xl border-4 border-black shadow-[12px_12px_0_0_rgba(0,0,0,1)] flex flex-col items-center scroll-mt-24">
                  <h3 className="text-3xl md:text-5xl font-black mb-10 bg-white text-black inline-block px-6 py-4 border-4 border-black -rotate-2 shadow-[6px_6px_0_0_rgba(0,0,0,1)] self-start">
                     🧊 3D 模型區
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 w-full py-4 px-2 md:px-8">
                     {/* 卡片 1 (美女) */}
                     <a 
                        href="https://studio.tripo3d.ai/3d-model/05d51178-3356-4fa6-bb68-70b15b18de31?invite_code=MYNZJZ"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex flex-col bg-white rounded-3xl border-4 border-black shadow-[8px_8px_0_0_rgba(0,0,0,1)] hover:-translate-y-4 hover:shadow-[16px_16px_0_0_rgba(0,0,0,1)] transition-all duration-300 overflow-hidden cursor-pointer"
                     >
                        <div className="w-full aspect-square md:aspect-[4/5] bg-pink-50 border-b-4 border-black overflow-hidden relative">
                           <img src="/67.PNG" alt="美女 3D 模型" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
                        </div>
                        <div className="p-6 md:p-8 flex items-center justify-center bg-white group-hover:bg-pink-100 transition-colors">
                           <span className="text-2xl font-black text-center text-black">
                              👀 點擊查看：美女360度模型
                           </span>
                        </div>
                     </a>

                     {/* 卡片 2 (寵物) */}
                     <a 
                        href="https://studio.tripo3d.ai/3d-model/d7b32843-cf06-4fdd-8315-9c6dacdc5875?invite_code=KJWV1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex flex-col bg-white rounded-3xl border-4 border-black shadow-[8px_8px_0_0_rgba(0,0,0,1)] hover:-translate-y-4 hover:shadow-[16px_16px_0_0_rgba(0,0,0,1)] transition-all duration-300 overflow-hidden cursor-pointer"
                     >
                        <div className="w-full aspect-square md:aspect-[4/5] bg-blue-50 border-b-4 border-black overflow-hidden relative">
                           <img src="/69.PNG" alt="寵物 3D 模型" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
                        </div>
                        <div className="p-6 md:p-8 flex items-center justify-center bg-white group-hover:bg-blue-100 transition-colors">
                           <span className="text-2xl font-black text-center text-black">
                              🐶 點擊查看：奶蛙360度模型
                           </span>
                        </div>
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-black text-[#00FF41] text-center py-10 font-black border-t-8 border-black text-2xl">
        <p>© 2026 潘信妤 個人作品集. All rights reserved.</p>
        <p className="text-sm font-bold text-gray-400 mt-2 tracking-widest">STAY VIBRANT. STAY TRUE.</p>
      </footer>
    </div>
  );
}

// Sub-components
function CertCard({ title, items, colorClass }: { title: string, items: string[], colorClass: string }) {
  return (
    <div className={`border-4 border-black rounded-3xl p-6 md:p-8 shadow-[8px_8px_0_0_rgba(0,0,0,1)] hover:-translate-y-2 hover:shadow-[12px_12px_0_0_rgba(0,0,0,1)] transition-transform duration-300 flex flex-col ${colorClass}`}>
       <h4 className="text-2xl md:text-3xl font-black mb-6 border-b-4 border-black pb-3 bg-white px-5 py-2 inline-block rounded-xl -rotate-2 self-start shadow-sm">
          {title}
       </h4>
       <div className="flex flex-wrap gap-3 mt-2">
         {items.map((item, idx) => (
           <span key={idx} className="font-black bg-white px-4 py-2 border-2 border-black rounded-xl shadow-[2px_2px_0_0_rgba(0,0,0,1)] text-sm md:text-base hover:scale-105 transition-transform cursor-default">
             {item}
           </span>
         ))}
       </div>
    </div>
  );
}

function WorkExp({ role, desc, insight, bgClass, labelClass }: { role: string, desc: string, insight: string, bgClass: string, labelClass: string }) {
  return (
    <div className={`border-4 border-black p-5 rounded-2xl shadow-[4px_4px_0_0_rgba(255,255,255,1)] hover:-translate-y-1 hover:shadow-[6px_6px_0_0_rgba(255,255,255,1)] transition-transform ${bgClass}`}>
       <h4 className="text-2xl font-black mb-2 flex items-center gap-2"><span className="text-3xl">📌</span> {role}</h4>
       <p className="text-lg font-bold mb-4 ml-1">{desc}</p>
       <div className={`text-black px-4 py-2 rounded-xl font-black flex flex-col md:flex-row gap-2 border-4 border-black shadow-sm ${labelClass}`}>
         <span className="italic text-lg">『{insight}』</span>
       </div>
    </div>
  );
}

function VideoCard({ src, bgTheme }: { src: string, bgTheme: string }) {
   return (
      <div className={`aspect-video rounded-2xl overflow-hidden border-4 border-black relative shadow-[8px_8px_0_0_rgba(0,0,0,1)] group ${bgTheme} p-2 flex flex-col`}>
         <div className="bg-black border-4 border-black rounded-xl overflow-hidden flex-1 relative">
           <video 
              src={src} 
              className="w-full h-full object-cover" 
              controls 
           />
         </div>
         <div className="mt-2 text-center font-black text-lg text-black bg-white border-4 border-black rounded-xl py-1 shadow-sm group-hover:scale-105 transition-transform">
            {src}
         </div>
      </div>
   );
}

function ImageCard({ src, bgTheme }: { src: string, bgTheme: string }) {
   return (
      <div className={`aspect-video rounded-2xl overflow-hidden border-4 border-black relative shadow-[8px_8px_0_0_rgba(0,0,0,1)] group ${bgTheme} p-2 flex flex-col`}>
         <div className="bg-white border-4 border-black rounded-xl overflow-hidden flex-1 relative">
           <img 
              src={src} 
              alt="圖卡" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
              onError={(e) => {
                 e.currentTarget.style.display = 'none';
                 e.currentTarget.parentElement!.innerHTML = `<div class="w-full h-full flex flex-col items-center justify-center font-black text-xl text-black bg-white"><span class="text-4xl mb-2">🏷️</span>${src} missing</div>`;
              }}
           />
         </div>
         <div className="mt-2 text-center font-black text-lg text-black bg-white border-4 border-black rounded-xl py-1 shadow-sm group-hover:scale-105 transition-transform">
            {src}
         </div>
      </div>
   );
}

function PPTViewer({ slides }: { slides: string[] }) {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleNext = () => setActiveSlide((prev) => (prev + 1) % slides.length);
  const handlePrev = () => setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="flex flex-col gap-6 w-full mt-4 items-center">
      <div className="relative w-full max-w-5xl aspect-video border-4 border-black rounded-3xl overflow-hidden shadow-[8px_8px_0_0_rgba(0,0,0,1)] bg-gray-50 group">
        <img 
           src={slides[activeSlide]} 
           alt={`投影片 ${activeSlide + 1}`} 
           className="w-full h-full object-contain"
        />
        
        {/* 控制按鈕 (桌機) */}
        <button 
           onClick={handlePrev}
           className="absolute left-4 top-1/2 -translate-y-1/2 bg-white hover:bg-[#FFC324] border-4 border-black p-4 rounded-full font-black text-2xl shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:scale-110 active:translate-y-1 active:shadow-none transition-all z-10 hidden md:block"
        >
          &larr;
        </button>
        <button 
           onClick={handleNext}
           className="absolute right-4 top-1/2 -translate-y-1/2 bg-white hover:bg-[#FFC324] border-4 border-black p-4 rounded-full font-black text-2xl shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:scale-110 active:translate-y-1 active:shadow-none transition-all z-10 hidden md:block"
        >
          &rarr;
        </button>

        {/* 控制按鈕 (手機) */}
        <button 
           onClick={handlePrev}
           className="absolute left-2 top-1/2 -translate-y-1/2 bg-white border-2 border-black p-2 rounded-full font-black text-xl shadow-[2px_2px_0_0_rgba(0,0,0,1)] active:translate-y-1 active:shadow-none z-10 md:hidden"
        >
          &lt;
        </button>
        <button 
           onClick={handleNext}
           className="absolute right-2 top-1/2 -translate-y-1/2 bg-white border-2 border-black p-2 rounded-full font-black text-xl shadow-[2px_2px_0_0_rgba(0,0,0,1)] active:translate-y-1 active:shadow-none z-10 md:hidden"
        >
          &gt;
        </button>
      </div>

      {/* 頁碼標示 */}
      <div className="flex flex-col items-center gap-4 w-full">
         <div className="text-2xl font-black bg-white border-4 border-black px-6 py-2 rounded-full shadow-[4px_4px_0_0_rgba(0,0,0,1)] tracking-widest text-[#3B82F6]">
            {activeSlide + 1} <span className="text-gray-400 mx-1">/</span> {slides.length}
         </div>
         
         {/* 小圓點 */}
         <div className="flex flex-wrap justify-center gap-3">
            {slides.map((_, index) => (
               <button
                  key={index}
                  onClick={() => setActiveSlide(index)}
                  className={`w-4 h-4 rounded-full border-2 border-black transition-all ${
                     activeSlide === index 
                        ? 'bg-[#FFC324] scale-150' 
                        : 'bg-white hover:bg-gray-200'
                  }`}
                  aria-label={`跳至第 ${index + 1} 頁`}
               />
            ))}
         </div>
      </div>
    </div>
  );
}
