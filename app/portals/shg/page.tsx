"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import { Users, TrendingUp, MessageSquare, BarChart3 } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function SHGDashboard() {
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
          <h1 className="text-3xl font-bold text-slate-900 mb-2">SHG Agent Dashboard</h1>
          <p className="text-slate-600">Manage your self-help group</p>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
          {[
            { id: "overview", label: "Overview", icon: BarChart3 },
            { id: "members", label: "Members", icon: Users },
            { id: "loans", label: "Loans", icon: TrendingUp },
            { id: "messaging", label: "Messaging", icon: MessageSquare },
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
                <CardTitle>Digital Adoption Growth</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {["Q1 2024", "Q2 2024", "Q3 2024", "Q4 2024"].map((quarter, i) => (
                    <div key={quarter} className="flex items-center gap-4">
                      <p className="text-sm font-medium text-slate-900 w-20">{quarter}</p>
                      <div className="flex-1 bg-slate-200 rounded-full h-3">
                        <div
                          className="bg-gradient-to-r from-blue-500 to-teal-500 h-3 rounded-full"
                          style={{ width: `${(i + 1) * 25}%` }}
                        ></div>
                      </div>
                      <p className="text-sm font-medium text-slate-900">{(i + 1) * 25}%</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Members */}
        {activeSection === "members" && (
          <Card className="border-0 shadow-sm">
            <CardHeader>
              <CardTitle>Group Members</CardTitle>
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

        {/* Loans */}
        {activeSection === "loans" && (
          <Card className="border-0 shadow-sm">
            <CardHeader>
              <CardTitle>Loan Distribution & Tracking</CardTitle>
              <CardDescription>Monitor all active loans and repayments</CardDescription>
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
        )}

        {/* Messaging */}
        {activeSection === "messaging" && (
          <Card className="border-0 shadow-sm">
            <CardHeader>
              <CardTitle>Send Voice Message to Group</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-6 bg-gradient-to-br from-blue-50 to-teal-50 rounded-lg border border-slate-200 text-center">
                  <div className="text-4xl mb-4">🎤</div>
                  <p className="text-slate-600 mb-4">Record and send voice messages to your group members</p>
                  <button className="px-6 py-2 bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded-lg font-medium hover:shadow-lg transition">
                    Record Message
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
