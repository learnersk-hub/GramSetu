"use client"
import { LogOut } from "lucide-react"
import { useRouter } from "next/navigation"
import { useLanguage } from "@/lib/language-context"

export default function Navigation() {
  const router = useRouter()
  const { t } = useLanguage()

  return (
    <nav className="flex items-center justify-between px-6 md:px-12 py-4 border-b border-slate-200 bg-white">
      <button onClick={() => router.back()} className="flex items-center gap-2 hover:opacity-80 transition">
        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-teal-500 rounded-lg flex items-center justify-center text-white font-bold">
          GF
        </div>
        <span className="text-xl font-bold text-slate-900">GramFin</span>
      </button>

      <div className="flex items-center gap-4">
        <button
          onClick={() => router.push("/")}
          className="flex items-center gap-2 px-4 py-2 text-slate-600 hover:text-slate-900 transition font-medium"
        >
          <LogOut className="w-4 h-4" />
          {t("logout")}
        </button>
      </div>
    </nav>
  )
}
