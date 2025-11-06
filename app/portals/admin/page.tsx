"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import { MapPin, Activity, Zap, Brain } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function AdminDashboard() {
  const [activeSection, setActiveSection] = useState("system")

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      <Navigation />

      <div className="max-w-6xl mx-auto px-6 md:px-12 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Admin Control Panel</h1>
          <p className="text-slate-600">Comprehensive system management and monitoring</p>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
          {[
            { id: "system", label: "System Health", icon: Activity },
            { id: "regions", label: "Regional Map", icon: MapPin },
            { id: "api", label: "API Monitoring", icon: Zap },
            { id: "insights", label: "AI Insights", icon: Brain },
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

        {/* System Health */}
        {activeSection === "system" && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {[
                { label: "Uptime", value: "99.98%", color: "from-green-500 to-teal-500" },
                { label: "API Response", value: "145ms", color: "from-blue-500 to-cyan-500" },
                { label: "Database Load", value: "42%", color: "from-yellow-500 to-orange-500" },
                { label: "Active Sessions", value: "2,847", color: "from-purple-500 to-pink-500" },
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
                <CardTitle>System Services Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { service: "UPI Integration", status: "Operational", uptime: "99.99%" },
                    { service: "Banking APIs", status: "Operational", uptime: "99.97%" },
                    { service: "Voice Service", status: "Operational", uptime: "99.95%" },
                    { service: "Database Cluster", status: "Operational", uptime: "99.98%" },
                    { service: "Cache Layer", status: "Operational", uptime: "100%" },
                  ].map((s, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between p-4 bg-slate-50 rounded-lg border border-slate-200"
                    >
                      <div>
                        <p className="font-medium text-slate-900">{s.service}</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-sm text-slate-600">{s.status}</span>
                        </div>
                        <span className="text-sm font-medium text-slate-900">{s.uptime}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Regional Map */}
        {activeSection === "regions" && (
          <Card className="border-0 shadow-sm">
            <CardHeader>
              <CardTitle>Regional Adoption Heatmap</CardTitle>
              <CardDescription>Active users by district</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { region: "Northern Zone", users: 15420, growth: 12 },
                  { region: "Southern Zone", users: 18650, growth: 18 },
                  { region: "Eastern Zone", users: 9230, growth: 8 },
                  { region: "Western Zone", users: 7120, growth: 5 },
                ].map((zone, i) => (
                  <div key={i} className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <div className="flex items-center justify-between mb-3">
                      <p className="font-medium text-slate-900">{zone.region}</p>
                      <p className="text-sm text-slate-600">{zone.users.toLocaleString()} users</p>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-3">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-teal-500 h-3 rounded-full"
                        style={{ width: `${(zone.users / 20000) * 100}%` }}
                      ></div>
                    </div>
                    <p className="text-xs text-green-600 mt-2">+{zone.growth}% growth this month</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* API Monitoring */}
        {activeSection === "api" && (
          <Card className="border-0 shadow-sm">
            <CardHeader>
              <CardTitle>API Endpoint Monitoring</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  { endpoint: "/api/transactions", requests: "8.2K/min", avgTime: "142ms", success: "99.99%" },
                  { endpoint: "/api/loans", requests: "2.1K/min", avgTime: "156ms", success: "99.95%" },
                  { endpoint: "/api/voice", requests: "5.3K/min", avgTime: "198ms", success: "99.97%" },
                  { endpoint: "/api/auth", requests: "12.4K/min", avgTime: "89ms", success: "99.99%" },
                ].map((api, i) => (
                  <div key={i} className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <div className="grid grid-cols-4 gap-4">
                      <div>
                        <p className="text-xs text-slate-600 mb-1">Endpoint</p>
                        <p className="font-medium text-slate-900 text-sm">{api.endpoint}</p>
                      </div>
                      <div>
                        <p className="text-xs text-slate-600 mb-1">Requests/min</p>
                        <p className="font-medium text-slate-900 text-sm">{api.requests}</p>
                      </div>
                      <div>
                        <p className="text-xs text-slate-600 mb-1">Avg Response</p>
                        <p className="font-medium text-slate-900 text-sm">{api.avgTime}</p>
                      </div>
                      <div>
                        <p className="text-xs text-slate-600 mb-1">Success Rate</p>
                        <p className="font-medium text-green-600 text-sm">{api.success}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* AI Insights */}
        {activeSection === "insights" && (
          <div className="space-y-6">
            <Card className="border-0 shadow-sm bg-gradient-to-br from-blue-50 to-teal-50">
              <CardHeader>
                <CardTitle>Automated AI Insights</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      title: "Low Adoption Alert",
                      desc: "Districts in Rajasthan showing 12% lower adoption than average",
                      action: "View Details",
                    },
                    {
                      title: "Literacy Improvement",
                      desc: "Tamil Nadu region achieved 95% financial literacy completion",
                      action: "Celebrate",
                    },
                    {
                      title: "Loan Delay Pattern",
                      desc: "Agricultural loans showing seasonal repayment delays",
                      action: "Analyze",
                    },
                  ].map((insight, i) => (
                    <div key={i} className="p-4 bg-white rounded-lg border border-slate-200">
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="font-bold text-slate-900 mb-1">{insight.title}</p>
                          <p className="text-sm text-slate-600">{insight.desc}</p>
                        </div>
                        <button className="px-3 py-1 text-blue-600 text-sm font-medium hover:text-blue-700 whitespace-nowrap">
                          {insight.action}
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
