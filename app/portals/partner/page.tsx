"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import { Users, TrendingUp, BarChart3, FileText } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function PartnerPortal() {
  const [activeSection, setActiveSection] = useState("overview")

  const groupMembers = [
    { id: 1, name: "Priya Sharma", status: "Active", loans: "₹30,000", literacy: 85 },
    { id: 2, name: "Asha Patel", status: "Active", loans: "₹25,000", literacy: 60 },
    { id: 3, name: "Kavya Singh", status: "Inactive", loans: "₹0", literacy: 30 },
    { id: 4, name: "Deepa Reddy", status: "Active", loans: "₹45,000", literacy: 95 },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      <Navigation />

      <div className="max-w-6xl mx-auto px-6 md:px-12 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Partner Portal</h1>
          <p className="text-slate-600">Manage SHG members, track loans, and monitor financial inclusion impact</p>
        </div>

        <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
          {[
            { id: "overview", label: "Overview", icon: BarChart3 },
            { id: "members", label: "Members", icon: Users },
            { id: "loans", label: "Loans & Credit", icon: TrendingUp },
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

        {/* Overview */}
        {activeSection === "overview" && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {[
                { label: "Total Members", value: "24", color: "from-blue-500 to-teal-500" },
                { label: "Active Members", value: "18", color: "from-green-500 to-teal-500" },
                { label: "Total Loans Issued", value: "₹5.4L", color: "from-purple-500 to-blue-500" },
                { label: "Avg. Literacy Level", value: "68%", color: "from-orange-500 to-red-500" },
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
                <CardTitle>Loan Distribution Overview</CardTitle>
                <CardDescription>Breakdown by loan size and repayment status</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { range: "₹10K - ₹25K", count: 8420, repayment: "94%" },
                    { range: "₹25K - ₹50K", count: 5230, repayment: "91%" },
                    { range: "₹50K - ₹100K", count: 2150, repayment: "87%" },
                  ].map((loan, i) => (
                    <div key={i} className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <p className="font-medium text-slate-900">{loan.range}</p>
                          <p className="text-sm text-slate-600">{loan.count.toLocaleString()} loans</p>
                        </div>
                        <p className={`font-medium ${Number.parseFloat(loan.repayment) >= 90 ? "text-green-600" : "text-orange-600"}`}>
                          {loan.repayment} repayment rate
                        </p>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full ${Number.parseFloat(loan.repayment) >= 90 ? "bg-green-500" : "bg-orange-500"}`}
                          style={{ width: `${Number.parseFloat(loan.repayment)}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Literacy Completion Stats */}
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle>Literacy Completion Stats</CardTitle>
                <CardDescription>Financial literacy module progress for SHG users</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {["Understanding UPI", "Digital Security", "Loan Applications", "Savings & Investment"].map(
                    (module, i) => (
                      <div key={i} className="flex items-center gap-4">
                        <p className="text-sm font-medium text-slate-900 w-40">{module}</p>
                        <div className="flex-1 bg-slate-200 rounded-full h-3">
                          <div
                            className="bg-gradient-to-r from-blue-500 to-teal-500 h-3 rounded-full"
                            style={{ width: `${60 + i * 10}%` }}
                          ></div>
                        </div>
                        <p className="text-sm font-medium text-slate-900 w-12">{60 + i * 10}%</p>
                      </div>
                    ),
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Members */}
        {activeSection === "members" && (
          <Card className="border-0 shadow-sm">
            <CardHeader>
              <CardTitle>SHG Members Management</CardTitle>
              <CardDescription>Manage and monitor member progress</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-200">
                      <th className="text-left py-3 px-4 font-semibold text-slate-900">Name</th>
                      <th className="text-left py-3 px-4 font-semibold text-slate-900">Status</th>
                      <th className="text-left py-3 px-4 font-semibold text-slate-900">Active Loans</th>
                      <th className="text-left py-3 px-4 font-semibold text-slate-900">Literacy Level</th>
                    </tr>
                  </thead>
                  <tbody>
                    {groupMembers.map((member) => (
                      <tr key={member.id} className="border-b border-slate-100 hover:bg-slate-50 transition">
                        <td className="py-4 px-4 font-medium text-slate-900">{member.name}</td>
                        <td className="py-4 px-4">
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-medium ${
                              member.status === "Active" ? "bg-green-100 text-green-700" : "bg-slate-100 text-slate-600"
                            }`}
                          >
                            {member.status}
                          </span>
                        </td>
                        <td className="py-4 px-4 text-slate-900">{member.loans}</td>
                        <td className="py-4 px-4">
                          <div className="w-24 bg-slate-200 rounded-full h-2">
                            <div
                              className="bg-gradient-to-r from-blue-500 to-teal-500 h-2 rounded-full"
                              style={{ width: `${member.literacy}%` }}
                            ></div>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        )}

        {activeSection === "loans" && (
          <div className="space-y-6">
            {/* Credit Analysis & Eligibility Metrics */}
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle>Credit Analysis & Eligibility Metrics</CardTitle>
                <CardDescription>For SHG Members and Authorized Coordinators</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { member: "Priya Sharma", score: 745, eligible: "₹75,000", status: "Approved" },
                    { member: "Asha Patel", score: 680, eligible: "₹50,000", status: "Pending" },
                    { member: "Deepa Reddy", score: 720, eligible: "₹70,000", status: "Approved" },
                  ].map((m, i) => (
                    <div key={i} className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <p className="font-medium text-slate-900">{m.member}</p>
                          <p className="text-sm text-slate-600">Credit Score: {m.score}</p>
                        </div>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            m.status === "Approved" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"
                          }`}
                        >
                          {m.status}
                        </span>
                      </div>
                      <p className="text-sm text-slate-600">Maximum Eligible Amount: {m.eligible}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Microloan Repayment Reports */}
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle>Microloan Repayment Reports</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { member: "Priya Sharma", amount: "₹30,000", status: "On Track", lastPayment: "Dec 2024" },
                    { member: "Asha Patel", amount: "₹25,000", status: "On Track", lastPayment: "Dec 2024" },
                    { member: "Deepa Reddy", amount: "₹45,000", status: "Due Soon", lastPayment: "Nov 2024" },
                  ].map((loan, i) => (
                    <div key={i} className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <p className="font-medium text-slate-900">{loan.member}</p>
                          <p className="text-sm text-slate-600">{loan.amount}</p>
                        </div>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            loan.status === "On Track" ? "bg-green-100 text-green-700" : "bg-orange-100 text-orange-700"
                          }`}
                        >
                          {loan.status}
                        </span>
                      </div>
                      <p className="text-xs text-slate-600">Last Payment: {loan.lastPayment}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeSection === "reports" && (
          <Card className="border-0 shadow-sm">
            <CardHeader>
              <CardTitle>Impact Reports</CardTitle>
              <CardDescription>Export and view comprehensive impact metrics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  "Monthly Impact Report",
                  "Loan Distribution Analysis",
                  "Member Demographics Report",
                  "Financial Inclusion Metrics",
                  "Literacy Completion Report",
                  "Regional Performance Summary",
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
