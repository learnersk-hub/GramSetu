"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import { TrendingUp, BarChart3, FileText } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "@/lib/language-context"
import {
  LineChart,
  Line,
  PieChart as PieChartComponent,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"

export default function OrganisationalPortal() {
  const [activeSection, setActiveSection] = useState("overview")
  const { t } = useLanguage()

  // Money flow data
  const moneyFlowData = [
    { month: "Jan", inflow: 45000, outflow: 35000 },
    { month: "Feb", inflow: 52000, outflow: 38000 },
    { month: "Mar", inflow: 48000, outflow: 42000 },
    { month: "Apr", inflow: 61000, outflow: 45000 },
    { month: "May", inflow: 55000, outflow: 40000 },
    { month: "Jun", inflow: 67000, outflow: 48000 },
  ]

  // Transaction distribution
  const transactionDistribution = [
    { name: "Loans Disbursed", value: 45, color: "#3B82F6" },
    { name: "Repayments", value: 30, color: "#14B8A6" },
    { name: "Deposits", value: 15, color: "#F97316" },
    { name: "Withdrawals", value: 10, color: "#8B5CF6" },
  ]

  // SHG transactions
  const shgTransactions = [
    { date: "Dec 15, 2024", type: "Loan Disbursement", member: "Group A", amount: "₹50,000", status: "Completed" },
    { date: "Dec 14, 2024", type: "Repayment", member: "Group B", amount: "₹15,000", status: "Completed" },
    { date: "Dec 13, 2024", type: "Deposit", member: "Group C", amount: "₹25,000", status: "Completed" },
    { date: "Dec 12, 2024", type: "Withdrawal", member: "Group A", amount: "₹10,000", status: "Pending" },
    { date: "Dec 11, 2024", type: "Loan Disbursement", member: "Group D", amount: "₹40,000", status: "Completed" },
  ]

  const bankGuidelines = [
    { title: "RBI Microfinance Guidelines", description: "Latest regulations for microfinance institutions", url: "#" },
    { title: "KYC Compliance Rules", description: "Know Your Customer requirements and procedures", url: "#" },
    { title: "Credit Reporting Standards", description: "Standards for credit risk assessment", url: "#" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      <Navigation />

      <div className="max-w-6xl mx-auto px-6 md:px-12 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">{t("organisational")}</h1>
          <p className="text-slate-600">{t("orgDesc")}</p>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
          {[
            { id: "overview", label: t("overview"), icon: BarChart3 },
            { id: "transactions", label: t("shgTransactions"), icon: TrendingUp },
            { id: "reports", label: t("bankReports"), icon: FileText },
          ].map((tab) => {
            const TabIcon = tab.icon
            return (
              <button
                key={tab.id}
                onClick={() => setActiveSection(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium whitespace-nowrap transition ${
                  activeSection === tab.id
                    ? "bg-gradient-to-r from-blue-500 to-teal-500 text-white"
                    : "bg-white text-slate-600 border border-slate-200 hover:border-slate-300"
                }`}
              >
                <TabIcon className="w-4 h-4" />
                {tab.label}
              </button>
            )
          })}
        </div>

        {/* Overview */}
        {activeSection === "overview" && (
          <div className="space-y-6">
            {/* SHG Account Balance & Credit */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="border-0 shadow-sm">
                <CardContent className="pt-6">
                  <p className="text-slate-600 text-sm mb-2">{t("totalAccBalance")}</p>
                  <p className="text-4xl font-bold text-blue-600">₹8,75,500</p>
                  <p className="text-xs text-slate-600 mt-2">Across 24 SHG accounts</p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-sm">
                <CardContent className="pt-6">
                  <p className="text-slate-600 text-sm mb-2">{t("totalCredit")}</p>
                  <p className="text-4xl font-bold text-teal-600">₹12,50,000</p>
                  <p className="text-xs text-slate-600 mt-2">Approved credit limit</p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-sm">
                <CardContent className="pt-6">
                  <p className="text-slate-600 text-sm mb-2">Active SHGs</p>
                  <p className="text-4xl font-bold text-orange-600">24</p>
                  <p className="text-xs text-slate-600 mt-2">With 450+ members</p>
                </CardContent>
              </Card>
            </div>

            {/* Money Flow Charts */}
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle>{t("moneyFlow")}</CardTitle>
                <CardDescription>{t("moneyFlowCharts")}</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={moneyFlowData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="inflow" stroke="#3B82F6" name="Inflow" />
                    <Line type="monotone" dataKey="outflow" stroke="#14B8A6" name="Outflow" />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Transaction Distribution */}
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle>Transaction Distribution</CardTitle>
                <CardDescription>Breakdown of transaction types</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChartComponent>
                    <Pie
                      data={transactionDistribution}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={(entry) => `${entry.name}: ${entry.value}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {transactionDistribution.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChartComponent>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Transactions */}
        {activeSection === "transactions" && (
          <Card className="border-0 shadow-sm">
            <CardHeader>
              <CardTitle>{t("shgTransactions")}</CardTitle>
              <CardDescription>{t("transactionHistory")}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-200">
                      <th className="text-left py-3 px-4 font-semibold text-slate-900">{t("date")}</th>
                      <th className="text-left py-3 px-4 font-semibold text-slate-900">{t("type")}</th>
                      <th className="text-left py-3 px-4 font-semibold text-slate-900">{t("member")}</th>
                      <th className="text-left py-3 px-4 font-semibold text-slate-900">{t("amount")}</th>
                      <th className="text-left py-3 px-4 font-semibold text-slate-900">{t("status")}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {shgTransactions.map((txn, i) => (
                      <tr key={i} className="border-b border-slate-100 hover:bg-slate-50 transition">
                        <td className="py-4 px-4 text-slate-900">{txn.date}</td>
                        <td className="py-4 px-4 text-slate-900">{txn.type}</td>
                        <td className="py-4 px-4 text-slate-900">{txn.member}</td>
                        <td className="py-4 px-4 font-semibold text-slate-900">{txn.amount}</td>
                        <td className="py-4 px-4">
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-medium ${
                              txn.status === "Completed"
                                ? "bg-green-100 text-green-700"
                                : "bg-yellow-100 text-yellow-700"
                            }`}
                          >
                            {txn.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Reports & Guidelines */}
        {activeSection === "reports" && (
          <div className="space-y-6">
            {/* Bank Reports */}
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle>{t("bankReports")}</CardTitle>
                <CardDescription>Generate and download reports</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { label: t("weeklyReport"), format: "PDF" },
                    { label: t("monthlyReport"), format: "PDF/Excel" },
                    { label: t("yearlyReport"), format: "PDF/Excel" },
                  ].map((report, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between p-4 bg-slate-50 rounded-lg border border-slate-200 hover:bg-slate-100 transition"
                    >
                      <div>
                        <p className="font-medium text-slate-900">{report.label}</p>
                        <p className="text-xs text-slate-600">{report.format}</p>
                      </div>
                      <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded-lg text-sm font-medium hover:shadow-lg transition">
                        {t("downloadReport")}
                      </button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Banking Guidelines */}
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle>{t("bankingGuidelines")}</CardTitle>
                <CardDescription>Latest banking regulations and compliance documents</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {bankGuidelines.map((guideline, i) => (
                    <div
                      key={i}
                      className="p-4 bg-slate-50 rounded-lg border border-slate-200 hover:bg-slate-100 transition cursor-pointer"
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="font-medium text-slate-900 mb-1">{guideline.title}</p>
                          <p className="text-sm text-slate-600">{guideline.description}</p>
                        </div>
                        <button className="px-3 py-1 text-blue-600 text-sm font-medium hover:text-blue-700 whitespace-nowrap">
                          {t("download")}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  )
}
