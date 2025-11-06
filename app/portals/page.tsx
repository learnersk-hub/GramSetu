"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { Users, Building2, FileText } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export default function PortalsPage() {
  const router = useRouter()
  const { t } = useLanguage()

  const portals = [
    {
      id: "farmer",
      title: t("farmerPortal"),
      description: t("farmerDesc"),
      features: [t("voiceBasedInterface"), "UPI payments", "Loan applications", "Financial education"],
      icon: Users,
      bgColor: "from-blue-50 to-blue-100",
      accentColor: "bg-blue-100",
      borderColor: "border-blue-200",
      href: "/portals/farmer",
    },
    {
      id: "partner",
      title: t("partnerPortal"),
      description: t("partnerDesc"),
      features: ["Member management", "Loan tracking", "Credit analysis", "Impact reports"],
      icon: Building2,
      bgColor: "from-teal-50 to-teal-100",
      accentColor: "bg-teal-100",
      borderColor: "border-teal-200",
      href: "/portals/partner",
    },
    {
      id: "organisational",
      title: t("organisationalPortal"),
      description: t("orgDesc"),
      features: ["SHG account balance", "Money flow charts", "Bank guidelines", "Transaction reports"],
      icon: FileText,
      bgColor: "from-orange-50 to-orange-100",
      accentColor: "bg-orange-100",
      borderColor: "border-orange-200",
      href: "/portals/organisational",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 md:px-12 py-4 border-b border-slate-200">
        <button onClick={() => router.back()} className="flex items-center gap-2 hover:opacity-80 transition">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-teal-500 rounded-lg flex items-center justify-center text-white font-bold">
            GF
          </div>
          <span className="text-xl font-bold text-slate-900">GramFin</span>
        </button>

        <div className="flex items-center gap-4">
          <button onClick={() => router.push("/")} className="px-6 py-2 text-slate-600 hover:text-slate-900">
            {t("logout")}
          </button>
        </div>
      </nav>

      {/* Header */}
      <section className="px-6 md:px-12 py-16 text-center">
        <h1 className="text-5xl font-bold text-slate-900 mb-4">{t("choosePortal")}</h1>
        <p className="text-lg text-slate-600">{t("tailoredExperiences")}</p>
      </section>

      {/* Portal Grid */}
      <section className="px-6 md:px-12 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {portals.map((portal) => {
            const IconComponent = portal.icon
            return (
              <div
                key={portal.id}
                className={`bg-gradient-to-br ${portal.bgColor} rounded-2xl border-2 ${portal.borderColor} overflow-hidden hover:shadow-xl transition-all duration-300`}
              >
                <div className="p-8">
                  <div className={`w-16 h-16 ${portal.accentColor} rounded-2xl flex items-center justify-center mb-6`}>
                    <IconComponent className="w-8 h-8 text-slate-700" />
                  </div>

                  <h2 className="text-2xl font-bold text-slate-900 mb-3">{portal.title}</h2>
                  <p className="text-slate-700 mb-6">{portal.description}</p>

                  <ul className="space-y-3 mb-8">
                    {portal.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full"></div>
                        <span className="text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={portal.href}
                    className="w-full block px-6 py-3 bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded-lg font-semibold text-center hover:shadow-lg transition"
                  >
                    {t("accessPortal")}
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}
