"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import { BarChart3, MapPin, TrendingUp, FileText } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function NGOPortal() {
  const [activeSection, setActiveSection] = useState("analytics")

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      <Navigation />

      <div className="max-w-6xl mx-auto px-6 md:px-12 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">NGO/Banking Partner Portal</h1>
          <p className="text-slate-600">Monitor adoption and financial inclusion impact</p>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
          {[
            { id: "analytics", label: "Analytics", icon: BarChart3 },
            { id: "regions", label: "Regions", icon: MapPin },
            { id: "loans", label: "Loan Analysis", icon: TrendingUp },
            { id: "reports", label: "Reports", icon: FileText },
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

        {/* Analytics */}
        {activeSection === "analytics" && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {[
                { label: "Total Users", value: "50,420", color: "from-blue-500 to-teal-500" },
                { label: "Active Transactions", value: "12,850", color: "from-green-500 to-teal-500" },
                { label: "Loans Disbursed", value: "₹10.2Cr", color: "from-orange-500 to-red-500" },
                { label: "Adoption Rate", value: "76%", color: "from-purple-500 to-blue-500" },
              ].map((stat, i) => (
                <Card key={i} className="border-0 shadow-sm">
                  <CardContent className="pt-6">
                    <p className="text-slate-600 text-sm mb-2">{stat.label}</p>
                    <p className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                      {stat.value}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle>Digital Adoption Trend</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {["Jan 2024", "Apr 2024", "Jul 2024", "Oct 2024", "Current"].map((month, i) => (
                    <div key={month} className="flex items-center gap-4">
                      <p className="text-sm font-medium text-slate-900 w-24">{month}</p>
                      <div className="flex-1 bg-slate-200 rounded-full h-3">
                        <div
                          className="bg-gradient-to-r from-blue-500 to-teal-500 h-3 rounded-full"
                          style={{ width: `${30 + i * 12}%` }}
                        ></div>
                      </div>
                      <p className="text-sm font-medium text-slate-900 w-12">{30 + i * 12}%</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Regions */}
        {activeSection === "regions" && (
          <Card className="border-0 shadow-sm">
            <CardHeader>
              <CardTitle>Regional Performance</CardTitle>
              <CardDescription>Distribution across states and districts</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { region: "Maharashtra", users: "12,450", activity: 85 },
                  { region: "Gujarat", users: "8,920", activity: 72 },
                  { region: "Tamil Nadu", users: "11,380", activity: 80 },
                  { region: "Madhya Pradesh", users: "9,670", activity: 68 },
                ].map((r, i) => (
                  <div key={i} className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <div className="flex items-center justify-between mb-3">
                      <p className="font-medium text-slate-900">{r.region}</p>
                      <p className="text-sm text-slate-600">{r.users} users</p>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-teal-500 h-2 rounded-full"
                        style={{ width: `${r.activity}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Loan Analysis */}
        {activeSection === "loans" && (
          <Card className="border-0 shadow-sm">
            <CardHeader>
              <CardTitle>Loan Distribution & Repayment</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { range: "₹10K - ₹25K", count: 8420, repayment: "94%" },
                  { range: "₹25K - ₹50K", count: 5230, repayment: "91%" },
                  { range: "₹50K - ₹100K", count: 2150, repayment: "87%" },
                  { range: "₹100K+", count: 890, repayment: "85%" },
                ].map((loan, i) => (
                  <div key={i} className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <p className="font-medium text-slate-900">{loan.range}</p>
                        <p className="text-sm text-slate-600">{loan.count.toLocaleString()} loans</p>
                      </div>
                      <p className={`font-medium ${loan.repayment >= 90 ? "text-green-600" : "text-orange-600"}`}>
                        {loan.repayment} repayment rate
                      </p>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${loan.repayment >= 90 ? "bg-green-500" : "bg-orange-500"}`}
                        style={{ width: `${Number.parseFloat(loan.repayment)}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Reports */}
        {activeSection === "reports" && (
          <Card className="border-0 shadow-sm">
            <CardHeader>
              <CardTitle>Impact Reports</CardTitle>
              <CardDescription>Export and view impact metrics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  "Monthly Impact Report",
                  "Regional Analysis Summary",
                  "User Demographics Report",
                  "Financial Inclusion Index",
                  "Gender & Caste Statistics",
                ].map((report, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-4 bg-slate-50 rounded-lg border border-slate-200 hover:bg-slate-100 transition cursor-pointer"
                  >
                    <p className="font-medium text-slate-900">{report}</p>
                    <button className="px-4 py-1 text-blue-600 text-sm font-medium hover:text-blue-700">
                      Download
                    </button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
