// "use client"

// import Link from "next/link"
// import { ArrowRight, Globe } from "lucide-react"
// import { useLanguage } from "@/lib/language-context"
// import { languages, type translations } from "@/lib/i18n"

// export default function LandingPage() {
//   const { language, setLanguage, t } = useLanguage()

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50">
//       {/* Navigation */}
//       <nav className="flex items-center justify-between px-6 py-4 md:px-12">
//         <div className="flex items-center gap-2">
//           <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-teal-500 rounded-lg flex items-center justify-center text-white font-bold">
//             GF
//           </div>
//           <span className="text-xl font-bold text-slate-900">GramFin</span>
//         </div>

//         <div className="hidden md:flex items-center gap-8">
//           <a href="#features" className="text-slate-600 hover:text-slate-900 transition">
//             {t("features")}
//           </a>
//           <Link href="/portals" className="text-slate-600 hover:text-slate-900 transition">
//             {t("portals")}
//           </Link>
//           <a href="#about" className="text-slate-600 hover:text-slate-900 transition">
//             {t("about")}
//           </a>
//           <a href="#contact" className="text-slate-600 hover:text-slate-900 transition">
//             {t("contact")}
//           </a>
//         </div>

//         <div className="flex items-center gap-4">
//           <div className="relative group">
//             <button className="flex items-center gap-2 px-3 py-2 text-slate-600 hover:text-slate-900 border border-slate-200 rounded-lg transition">
//               <Globe className="w-4 h-4" />
//               <span className="text-sm">{languages[language]}</span>
//             </button>
//             <div className="absolute right-0 mt-1 w-48 bg-white border border-slate-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
//               {Object.entries(languages).map(([code, name]) => (
//                 <button
//                   key={code}
//                   onClick={() => setLanguage(code as keyof typeof translations)}
//                   className={`w-full text-left px-4 py-2 hover:bg-slate-100 transition ${
//                     language === code ? "bg-blue-50 text-blue-600 font-medium" : "text-slate-900"
//                   }`}
//                 >
//                   {name}
//                 </button>
//               ))}
//             </div>
//           </div>

//           <Link
//             href="/portals"
//             className="px-6 py-2 bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded-lg font-medium hover:shadow-lg transition"
//           >
//             {t("signIn")}
//           </Link>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section className="px-6 md:px-12 py-20 text-center">
//         <div className="inline-block px-4 py-2 bg-white rounded-full text-teal-600 text-sm font-medium mb-6 border border-teal-200">
//           {t("empoweringRural")}
//         </div>

//         <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight">
//           {t("financialInclusion")} <br />
//           <span className="bg-gradient-to-r from-blue-500 to-teal-500 bg-clip-text text-transparent">
//             {t("madeSimple")}
//           </span>
//         </h1>

//         <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8">{t("voicePowered")}</p>

//         <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
//           <Link
//             href="/portals"
//             className="px-8 py-3 bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded-lg font-medium hover:shadow-lg transition flex items-center gap-2"
//           >
//             {t("getStarted")} <ArrowRight className="w-4 h-4" />
//           </Link>
//           <button className="px-8 py-3 bg-white text-slate-900 border-2 border-slate-200 rounded-lg font-medium hover:border-slate-300 transition">
//             {t("learnMore")}
//           </button>
//         </div>

//         {/* Stats */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
//           <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
//             <div className="text-3xl font-bold text-blue-500 mb-2">50K+</div>
//             <div className="text-slate-600">{t("activeUsers")}</div>
//           </div>
//           <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
//             <div className="text-3xl font-bold text-teal-500 mb-2">1000+</div>
//             <div className="text-slate-600">{t("shgGroups")}</div>
//           </div>
//           <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
//             <div className="text-3xl font-bold text-orange-500 mb-2">₹10Cr+</div>
//             <div className="text-slate-600">{t("loansDisb")}</div>
//           </div>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section id="features" className="px-6 md:px-12 py-20 bg-white">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold text-slate-900 mb-4">{t("everythingYouNeed")}</h2>
//           <p className="text-lg text-slate-600">{t("powerfulFeatures")}</p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
//           {[
//             { icon: "🎤", title: t("voiceBasedInterface"), desc: t("speakLocal"), color: "from-blue-50 to-blue-100" },
//             { icon: "💳", title: t("digitalTransactions"), desc: t("easyUPI"), color: "from-teal-50 to-teal-100" },
//             {
//               icon: "📚",
//               title: t("financialLiteracy"),
//               desc: t("learnDigital"),
//               color: "from-orange-50 to-orange-100",
//             },
//             { icon: "🔒", title: t("securitySafety"), desc: t("biometric"), color: "from-blue-50 to-blue-100" },
//             { icon: "🔔", title: t("smartNotifications"), desc: t("getAlerts"), color: "from-teal-50 to-teal-100" },
//             {
//               icon: "👥",
//               title: t("communityManagement"),
//               desc: t("trackGroup"),
//               color: "from-orange-50 to-orange-100",
//             },
//           ].map((feature, i) => (
//             <div key={i} className={`bg-gradient-to-br ${feature.color} p-6 rounded-xl border border-slate-200`}>
//               <div className="text-4xl mb-4">{feature.icon}</div>
//               <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
//               <p className="text-slate-600">{feature.desc}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="px-6 md:px-12 py-20 bg-gradient-to-r from-blue-500 to-teal-500">
//         <div className="text-center">
//           <h2 className="text-4xl font-bold text-white mb-4">{t("readyTransform")}</h2>
//           <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">{t("joinThousands")}</p>
//           <Link
//             href="/portals"
//             className="inline-block px-8 py-3 bg-white text-blue-500 rounded-lg font-medium hover:shadow-lg transition"
//           >
//             {t("accessPortal")}
//           </Link>
//         </div>
//       </section>
      
//       {/* Footer */}
//       <footer className="bg-slate-900 text-white px-6 md:px-12 py-12">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 max-w-5xl">
//           <div>
//             <div className="flex items-center gap-2 mb-4">
//               <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-teal-400 rounded-lg flex items-center justify-center text-slate-900 font-bold text-sm">
//                 GF
//               </div>
//               <span className="font-bold">GramFin</span>
//             </div>
//             <p className="text-slate-400 text-sm">Empowering rural India with accessible digital finance</p>
//           </div>
//           <div>
//             <h4 className="font-bold mb-4">Quick Links</h4>
//             <ul className="space-y-2 text-slate-400 text-sm">
//               <li>
//                 <a href="#" className="hover:text-white transition">
//                   About Us
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-white transition">
//                   Features
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-white transition">
//                   Blog
//                 </a>
//               </li>
//             </ul>
//           </div>
//           <div>
//             <h4 className="font-bold mb-4">Support</h4>
//             <ul className="space-y-2 text-slate-400 text-sm">
//               <li>
//                 <a href="#" className="hover:text-white transition">
//                   Help Center
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-white transition">
//                   Contact
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-white transition">
//                   Status
//                 </a>
//               </li>
//             </ul>
//           </div>
//           <div>
//             <h4 className="font-bold mb-4">Stay Updated</h4>
//             <p className="text-slate-400 text-sm">Subscribe to our newsletter for updates</p>
//           </div>
//         </div>
//         <div className="border-t border-slate-800 pt-8 text-center text-slate-400 text-sm">
//           <p>&copy; 2025 GramFin. All rights reserved.</p>
//         </div>
//       </footer>
//     </div>
//   )
// }
"use client"

import Link from "next/link"
import { ArrowRight, Globe } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { languages, type translations } from "@/lib/i18n"
import AIChatbot from "@/components/ai-chatbot"

export default function LandingPage() {
  const { language, setLanguage, t } = useLanguage()

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 md:px-12 animate-fadeInUp">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-teal-500 rounded-lg flex items-center justify-center text-white font-bold hover:shadow-lg transition-all duration-300 animate-float">
            GF
          </div>
          <span className="text-xl font-bold text-slate-900">GramSetu</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-slate-600 hover:text-slate-900 transition relative group">
            {t("features")}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-teal-500 group-hover:w-full transition-all duration-300"></span>
          </a>
          <Link href="/portals" className="text-slate-600 hover:text-slate-900 transition relative group">
            {t("portals")}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-teal-500 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <a href="#about" className="text-slate-600 hover:text-slate-900 transition relative group">
            {t("about")}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-teal-500 group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href="#contact" className="text-slate-600 hover:text-slate-900 transition relative group">
            {t("contact")}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-teal-500 group-hover:w-full transition-all duration-300"></span>
          </a>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative group">
            <button className="flex items-center gap-2 px-3 py-2 text-slate-600 hover:text-slate-900 border border-slate-200 rounded-lg transition hover:border-blue-300 hover:bg-blue-50 animate-slideInRight">
              <Globe className="w-4 h-4" />
              <span className="text-sm">{languages[language]}</span>
            </button>
            <div className="absolute right-0 mt-1 w-48 bg-white border border-slate-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 divide-y">
              {Object.entries(languages).map(([code, name], idx) => (
                <button
                  key={code}
                  onClick={() => setLanguage(code as keyof typeof translations)}
                  className={`w-full text-left px-4 py-3 hover:bg-gradient-to-r hover:from-blue-50 hover:to-teal-50 transition stagger-item animate-fadeInUp ${
                    language === code ? "bg-blue-50 text-blue-600 font-medium" : "text-slate-900"
                  }`}
                >
                  {name}
                </button>
              ))}
            </div>
          </div>

          <Link
            href="/portals"
            className="px-6 py-2 bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded-lg font-medium hover:shadow-lg transition hover:scale-105 duration-300 animate-slideInRight"
          >
            {t("signIn")}
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 md:px-12 py-20 text-center">
        <div className="inline-block px-4 py-2 bg-white rounded-full text-teal-600 text-sm font-medium mb-6 border border-teal-200 animate-scaleIn hover:shadow-md transition">
          {t("empoweringRural")}
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight animate-fadeInUp">
          {t("financialInclusion")} <br />
          <span className="bg-gradient-to-r from-blue-500 via-teal-500 to-green-500 bg-clip-text text-transparent animate-colorShift">
            {t("madeSimple")}
          </span>
        </h1>

        <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8 animate-fadeInUp">{t("voicePowered")}</p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fadeInUp">
          <Link
            href="/portals"
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded-lg font-medium hover:shadow-lg transition hover:scale-105 duration-300 flex items-center gap-2 group"
          >
            {t("getStarted")} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
          </Link>
          <button className="px-8 py-3 bg-white text-slate-900 border-2 border-slate-200 rounded-lg font-medium hover:border-blue-300 hover:bg-blue-50 transition duration-300">
            {t("learnMore")}
          </button>
        </div>

        {/* Stats - Added staggered animations */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {[
            { label: t("activeUsers"), value: "50K+", color: "from-blue-500" },
            { label: t("shgGroups"), value: "1000+", color: "from-teal-500" },
            { label: t("loansDisb"), value: "₹10Cr+", color: "from-orange-500" },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-lg transition hover:scale-105 duration-300 stagger-item animate-fadeInUp"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                {stat.value}
              </div>
              <div className="text-slate-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="px-6 md:px-12 py-20 bg-white">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">{t("everythingYouNeed")}</h2>
          <p className="text-lg text-slate-600">{t("powerfulFeatures")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            { icon: "🎤", title: t("voiceBasedInterface"), desc: t("speakLocal"), color: "from-blue-50 to-blue-100" },
            { icon: "💳", title: t("digitalTransactions"), desc: t("easyUPI"), color: "from-teal-50 to-teal-100" },
            {
              icon: "📚",
              title: t("financialLiteracy"),
              desc: t("learnDigital"),
              color: "from-orange-50 to-orange-100",
            },
            { icon: "🔒", title: t("securitySafety"), desc: t("biometric"), color: "from-blue-50 to-blue-100" },
            { icon: "🔔", title: t("smartNotifications"), desc: t("getAlerts"), color: "from-teal-50 to-teal-100" },
            {
              icon: "👥",
              title: t("communityManagement"),
              desc: t("trackGroup"),
              color: "from-orange-50 to-orange-100",
            },
          ].map((feature, i) => (
            <div
              key={i}
              className={`bg-gradient-to-br ${feature.color} p-6 rounded-xl border border-slate-200 hover:shadow-lg hover:scale-105 transition duration-300 stagger-item animate-fadeInUp cursor-pointer group`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition duration-300">{feature.icon}</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
              <p className="text-slate-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 md:px-12 py-20 bg-gradient-to-r from-blue-500 via-teal-500 to-green-500 animate-colorShift">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-4 animate-fadeInUp">{t("readyTransform")}</h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto animate-fadeInUp">{t("joinThousands")}</p>
          <Link
            href="/portals"
            className="inline-block px-8 py-3 bg-white text-blue-500 rounded-lg font-medium hover:shadow-lg transition hover:scale-105 duration-300 animate-fadeInUp"
          >
            {t("accessPortal")}
          </Link>
        </div>
      </section>

      {/* Chatbot */}
      <AIChatbot />

      {/* Footer */}
      <footer className="bg-slate-900 text-white px-6 md:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 max-w-5xl">
          <div className="animate-slideInLeft">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-teal-400 rounded-lg flex items-center justify-center text-slate-900 font-bold text-sm hover:shadow-lg transition">
                GF
              </div>
              <span className="font-bold">GramFin</span>
            </div>
            <p className="text-slate-400 text-sm">Empowering rural India with accessible digital finance</p>
          </div>
          <div className="animate-slideInLeft" style={{ animationDelay: "0.1s" }}>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li>
                <a href="#" className="hover:text-white hover:translate-x-1 transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white hover:translate-x-1 transition">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white hover:translate-x-1 transition">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div className="animate-slideInLeft" style={{ animationDelay: "0.2s" }}>
            <h4 className="font-bold mb-4">Support</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li>
                <a href="#" className="hover:text-white hover:translate-x-1 transition">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white hover:translate-x-1 transition">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white hover:translate-x-1 transition">
                  Status
                </a>
              </li>
            </ul>
          </div>
          <div className="animate-slideInLeft" style={{ animationDelay: "0.3s" }}>
            <h4 className="font-bold mb-4">Stay Updated</h4>
            <p className="text-slate-400 text-sm">Subscribe to our newsletter for updates</p>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-8 text-center text-slate-400 text-sm animate-fadeInUp">
          <p>&copy; 2025 GramFin. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
