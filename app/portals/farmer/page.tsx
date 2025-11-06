
// "use client"

// import { useState } from "react"
// import Navigation from "@/components/navigation"
// import { Mic, Home, BookOpen, TrendingUp, Settings, CreditCard } from "lucide-react"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

// export default function FarmerPortal() {
//   const [activeSection, setActiveSection] = useState("home")

//   const personalDetails = {
//     name: "Rajesh Kumar",
//     dob: "15-05-1978",
//     gender: "Male",
//     address: "Village Bhimrao, District Vidarbha, Maharashtra 442001",
//     mobile: "+91-9876543210",
//     aadhar: "****-****-1234",
//   }

//   const loanApplications = [
//     {
//       id: 1,
//       amount: "₹45,000",
//       status: "Active",
//       appliedDate: "Oct 2024",
//       emiAmount: "₹1,500",
//       nextPayment: "Dec 10, 2024",
//       repaymentTrack: 65,
//     },
//   ]

//   const literacyModules = [
//     { title: "Understanding UPI", completion: 75 },
//     { title: "Digital Security Basics", completion: 45 },
//     { title: "Loan Application Guide", completion: 100 },
//     { title: "Savings & Investment", completion: 20 },
//   ]

//   const handlePaymentRedirect = (paymentType = "general") => {
//     // Set payment details based on the type
//     let amount = "1500.00"
//     let description = "Payment"

//     switch (paymentType) {
//       case "send-money":
//         amount = "1000.00"
//         description = "Send Money"
//         break
//       case "check-balance":
//         // For balance check, we'll show a modal instead of redirecting
//         setActiveSection("payments")
//         setTimeout(() => {
//           const balanceSection = document.getElementById("balance-check-section")
//           if (balanceSection) {
//             balanceSection.scrollIntoView({ behavior: "smooth" })
//           }
//         }, 100)
//         return
//       case "pay-emi":
//         amount = "1500.00"
//         description = "EMI Payment"
//         break
//       default:
//         amount = "1500.00"
//         description = "Payment"
//     }

//     // Simulate redirect to Razorpay with specific parameters
//     const razorpayUrl = `https://razorpay.com/payment-gateway?amount=${amount}&description=${description}&type=${paymentType}`
//     window.open(razorpayUrl, "_blank")
//   }

//   const handleQuickAction = (action: string) => {
//     switch (action) {
//       case "Send Money":
//         handlePaymentRedirect("send-money")
//         break
//       case "Check Balance":
//         handlePaymentRedirect("check-balance")
//         break
//       case "Apply Loan":
//         setActiveSection("loans")
//         setTimeout(() => {
//           const applySection = document.getElementById("apply-loan-section")
//           if (applySection) {
//             applySection.scrollIntoView({ behavior: "smooth" })
//           }
//         }, 100)
//         break
//       case "Pay EMI":
//         handlePaymentRedirect("pay-emi")
//         break
//       default:
//         setActiveSection("payments")
//     }
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
//       <Navigation />

//       <div className="max-w-6xl mx-auto px-6 md:px-12 py-8">
//         {/* Header */}
//         <div className="mb-8">
//           <h1 className="text-3xl font-bold text-slate-900 mb-2">Welcome, {personalDetails.name}</h1>
//           <p className="text-slate-600">Your personal finance hub</p>
//         </div>

//         <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
//           {[
//             { id: "home", label: "Home", icon: Home },
//             { id: "loans", label: "Loans", icon: TrendingUp },
//             { id: "payments", label: "Payments", icon: CreditCard },
//             { id: "learning", label: "Learning", icon: BookOpen },
//             { id: "profile", label: "Profile", icon: Settings },
//           ].map((tab) => {
//             const TabIcon = tab.icon
//             return (
//               <button
//                 key={tab.id}
//                 onClick={() => setActiveSection(tab.id)}
//                 className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium whitespace-nowrap transition ${
//                   activeSection === tab.id
//                     ? "bg-gradient-to-r from-blue-500 to-teal-500 text-white"
//                     : "bg-white text-slate-600 border border-slate-200 hover:border-slate-300"
//                 }`}
//               >
//                 <TabIcon className="w-4 h-4" />
//                 {tab.label}
//               </button>
//             )
//           })}
//         </div>

//         {activeSection === "home" && (
//           <div className="space-y-6">
//             {/* Personal Details */}
//             <Card className="border-0 shadow-sm bg-gradient-to-br from-blue-50 to-teal-50">
//               <CardHeader>
//                 <CardTitle>Personal Information</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   <div>
//                     <p className="text-xs text-slate-600 mb-1">Full Name</p>
//                     <p className="font-bold text-slate-900">{personalDetails.name}</p>
//                   </div>
//                   <div>
//                     <p className="text-xs text-slate-600 mb-1">Date of Birth</p>
//                     <p className="font-bold text-slate-900">{personalDetails.dob}</p>
//                   </div>
//                   <div>
//                     <p className="text-xs text-slate-600 mb-1">Gender</p>
//                     <p className="font-bold text-slate-900">{personalDetails.gender}</p>
//                   </div>
//                   <div>
//                     <p className="text-xs text-slate-600 mb-1">Mobile Number</p>
//                     <p className="font-bold text-slate-900">{personalDetails.mobile}</p>
//                   </div>
//                   <div className="md:col-span-2">
//                     <p className="text-xs text-slate-600 mb-1">Address</p>
//                     <p className="font-bold text-slate-900">{personalDetails.address}</p>
//                   </div>
//                   <div>
//                     <p className="text-xs text-slate-600 mb-1">Aadhar / KYC ID</p>
//                     <p className="font-bold text-slate-900">{personalDetails.aadhar}</p>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>

//             {/* Account Summary - Only Linked Bank Accounts (Total Balance Removed) */}
//             <Card className="border-0 shadow-sm">
//               <CardHeader>
//                 <CardTitle>Linked Bank Accounts</CardTitle>
//                 <CardDescription>Your connected banking accounts</CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <div className="space-y-4">
//                   <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
//                     <div className="flex items-center justify-between">
//                       <div>
//                         <p className="font-medium text-slate-900">Axis Bank - XXXX5678</p>
//                         <p className="text-sm text-slate-600 mt-1">Primary Savings Account</p>
//                       </div>
//                       <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
//                         Primary
//                       </span>
//                     </div>
//                   </div>
//                   <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
//                     <div className="flex items-center justify-between">
//                       <div>
//                         <p className="font-medium text-slate-900">State Bank of India - XXXX9012</p>
//                         <p className="text-sm text-slate-600 mt-1">Secondary Savings Account</p>
//                       </div>
//                       <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">
//                         Linked
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>

//             <Card className="border-0 shadow-sm bg-gradient-to-br from-teal-50 to-green-50">
//               <CardHeader>
//                 <CardTitle>Financial Health Overview</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                   <div>
//                     <p className="text-slate-600 text-sm mb-2">Credit Score</p>
//                     <p className="text-4xl font-bold text-teal-600">745</p>
//                     <p className="text-xs text-slate-600 mt-1">Excellent rating</p>
//                   </div>
//                   <div>
//                     <p className="text-slate-600 text-sm mb-2">EMI Progress</p>
//                     <div className="mb-3">
//                       <div className="flex items-center justify-between mb-2">
//                         <span className="text-2xl font-bold text-slate-900">65%</span>
//                         <span className="text-xs text-slate-600">of ₹45,000</span>
//                       </div>
//                       <div className="w-full bg-slate-200 rounded-full h-2">
//                         <div
//                           className="bg-gradient-to-r from-blue-500 to-teal-500 h-2 rounded-full"
//                           style={{ width: "65%" }}
//                         ></div>
//                       </div>
//                     </div>
//                   </div>
//                   <div>
//                     <p className="text-slate-600 text-sm mb-2">Savings Goal</p>
//                     <div className="flex items-center justify-between mb-2">
//                       <p className="text-2xl font-bold text-slate-900">₹8,500</p>
//                       <p className="text-sm text-slate-600">of ₹50,000</p>
//                     </div>
//                     <div className="w-full bg-slate-200 rounded-full h-2">
//                       <div
//                         className="bg-gradient-to-r from-blue-500 to-teal-500 h-2 rounded-full"
//                         style={{ width: "17%" }}
//                       ></div>
//                     </div>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>

//             {/* Voice Assistant */}
//             <Card className="border-0 shadow-sm bg-gradient-to-br from-orange-50 to-amber-50">
//               <CardContent className="pt-6">
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <h3 className="text-lg font-bold text-slate-900 mb-2">Voice Assistant</h3>
//                     <p className="text-slate-600">"What would you like to do today?"</p>
//                   </div>
//                   <button className="w-16 h-16 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center text-white hover:shadow-lg transition">
//                     <Mic className="w-6 h-6" />
//                   </button>
//                 </div>
//               </CardContent>
//             </Card>

//             {/* Quick Actions */}
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//               {[
//                 { label: "Send Money", icon: "💸", color: "from-blue-50" },
//                 { label: "Check Balance", icon: "👁️", color: "from-teal-50" },
//                 { label: "Apply Loan", icon: "📋", color: "from-orange-50" },
//                 { label: "Pay EMI", icon: "💳", color: "from-green-50" },
//               ].map((action, i) => (
//                 <button
//                   key={i}
//                   onClick={() => handleQuickAction(action.label)}
//                   className={`bg-gradient-to-br ${action.color} to-transparent p-4 rounded-xl border border-slate-200 hover:shadow-md transition cursor-pointer`}
//                 >
//                   <div className="text-2xl mb-2">{action.icon}</div>
//                   <p className="text-sm font-medium text-slate-900">{action.label}</p>
//                 </button>
//               ))}
//             </div>
//           </div>
//         )}

//         {activeSection === "loans" && (
//           <div className="space-y-6">
//             {/* Apply for Loan - Prominent at top */}
//             <Card id="apply-loan-section" className="border-0 shadow-sm bg-gradient-to-r from-blue-50 to-teal-50 border-2 border-blue-200">
//               <CardContent className="pt-6">
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <h3 className="text-lg font-bold text-slate-900 mb-1">Apply for a Microloan</h3>
//                     <p className="text-slate-600 text-sm">
//                       Voice-assisted loan application with instant eligibility check
//                     </p>
//                   </div>
//                   <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded-lg font-semibold hover:shadow-lg transition whitespace-nowrap">
//                     Apply Now
//                   </button>
//                 </div>
//               </CardContent>
//             </Card>

//             {/* Credit Score Display */}
//             <Card className="border-0 shadow-sm">
//               <CardHeader>
//                 <CardTitle>Credit Score & Eligibility</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                   <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg border border-blue-200 text-center">
//                     <p className="text-slate-600 text-sm mb-3">Your Credit Score</p>
//                     <p className="text-5xl font-bold text-blue-600 mb-2">745</p>
//                     <p className="text-sm font-medium text-slate-700">Excellent (700+)</p>
//                   </div>
//                   <div className="p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-lg border border-green-200">
//                     <p className="text-slate-600 text-sm mb-3">Loan Eligibility</p>
//                     <p className="text-3xl font-bold text-green-600 mb-2">₹75,000</p>
//                     <p className="text-xs text-slate-600">Max amount eligible for next loan</p>
//                   </div>
//                   <div className="p-6 bg-gradient-to-br from-teal-50 to-teal-100 rounded-lg border border-teal-200">
//                     <p className="text-slate-600 text-sm mb-3">Interest Rate</p>
//                     <p className="text-3xl font-bold text-teal-600 mb-2">8.5%</p>
//                     <p className="text-xs text-slate-600">Competitive micro-loan rate</p>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>

//             {/* Loan Tracker Card */}
//             <Card className="border-0 shadow-sm">
//               <CardHeader>
//                 <CardTitle>Loan Tracker</CardTitle>
//                 <CardDescription>Current loan status and repayment progress</CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <div className="space-y-6">
//                   {loanApplications.map((loan) => (
//                     <div key={loan.id} className="p-6 bg-slate-50 rounded-lg border border-slate-200">
//                       <div className="flex items-center justify-between mb-4">
//                         <div>
//                           <h4 className="font-bold text-slate-900 mb-1">Loan Amount: {loan.amount}</h4>
//                           <p className="text-sm text-slate-600">Applied on {loan.appliedDate}</p>
//                         </div>
//                         <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">
//                           {loan.status}
//                         </span>
//                       </div>

//                       <div className="grid grid-cols-2 gap-4 mb-4">
//                         <div>
//                           <p className="text-xs text-slate-600 mb-1">Monthly EMI</p>
//                           <p className="text-2xl font-bold text-slate-900">{loan.emiAmount}</p>
//                         </div>
//                         <div>
//                           <p className="text-xs text-slate-600 mb-1">Next Payment Due</p>
//                           <p className="text-2xl font-bold text-slate-900">{loan.nextPayment}</p>
//                         </div>
//                       </div>

//                       <div>
//                         <p className="text-xs text-slate-600 mb-2">Repayment Progress</p>
//                         <div className="w-full bg-slate-300 rounded-full h-3 mb-2">
//                           <div
//                             className="bg-gradient-to-r from-blue-500 to-teal-500 h-3 rounded-full"
//                             style={{ width: `${loan.repaymentTrack}%` }}
//                           ></div>
//                         </div>
//                         <p className="text-sm text-slate-600">{loan.repaymentTrack}% complete</p>
//                       </div>

//                       <button 
//                         onClick={() => handleQuickAction("Pay EMI")}
//                         className="w-full mt-4 px-4 py-2 bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded-lg font-medium hover:shadow-lg transition"
//                       >
//                         Pay EMI
//                       </button>
//                     </div>
//                   ))}
//                 </div>
//               </CardContent>
//             </Card>

//             {/* Repayment History */}
//             <Card className="border-0 shadow-sm">
//               <CardHeader>
//                 <CardTitle>Repayment History</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <div className="space-y-3">
//                   {[
//                     { month: "November 2024", amount: "₹1,500", status: "Paid" },
//                     { month: "October 2024", amount: "₹1,500", status: "Paid" },
//                     { month: "September 2024", amount: "₹1,500", status: "Paid" },
//                   ].map((payment, i) => (
//                     <div
//                       key={i}
//                       className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-200"
//                     >
//                       <div>
//                         <p className="font-medium text-slate-900">{payment.month}</p>
//                       </div>
//                       <div className="flex items-center gap-4">
//                         <p className="font-bold text-slate-900">{payment.amount}</p>
//                         <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
//                           {payment.status}
//                         </span>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </CardContent>
//             </Card>
//           </div>
//         )}

//         {/* Payments Section - New Razorpay-like Interface */}
//         {activeSection === "payments" && (
//           <div className="space-y-6">
//             {/* Payment Gateway Header */}
//             <Card className="border-0 shadow-sm bg-gradient-to-r from-blue-600 to-purple-600 text-white">
//               <CardContent className="pt-6">
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <h2 className="text-2xl font-bold mb-2">Secure Payment Gateway</h2>
//                     <p className="text-blue-100">Powered by Razorpay</p>
//                   </div>
//                   <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
//                     <CreditCard className="w-6 h-6 text-blue-600" />
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>

//             {/* Balance Check Section */}
//             <Card id="balance-check-section" className="border-0 shadow-sm bg-gradient-to-br from-green-50 to-emerald-100">
//               <CardHeader>
//                 <CardTitle className="flex items-center gap-2">
//                   <span className="text-2xl">💰</span>
//                   Account Balance
//                 </CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   <div>
//                     <p className="text-slate-600 text-sm mb-2">Available Balance</p>
//                     <p className="text-4xl font-bold text-green-600">₹28,450</p>
//                     <p className="text-xs text-slate-600 mt-1">As of today</p>
//                   </div>
//                   <div>
//                     <p className="text-slate-600 text-sm mb-2">Linked Accounts</p>
//                     <div className="space-y-2">
//                       <div className="flex justify-between text-sm">
//                         <span>Axis Bank:</span>
//                         <span className="font-semibold">₹18,250</span>
//                       </div>
//                       <div className="flex justify-between text-sm">
//                         <span>SBI:</span>
//                         <span className="font-semibold">₹10,200</span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>

//             {/* Payment Methods */}
//             <Card className="border-0 shadow-sm">
//               <CardHeader>
//                 <CardTitle>Choose Payment Method</CardTitle>
//                 <CardDescription>Select your preferred payment option</CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <div className="space-y-4">
//                   {/* Credit/Debit Card */}
//                   <div className="p-4 border-2 border-blue-200 rounded-lg bg-blue-50">
//                     <div className="flex items-center justify-between mb-4">
//                       <div className="flex items-center gap-3">
//                         <CreditCard className="w-6 h-6 text-blue-600" />
//                         <span className="font-semibold text-slate-900">Credit/Debit Card</span>
//                       </div>
//                       <div className="flex gap-2">
//                         <div className="w-8 h-6 bg-orange-500 rounded-sm"></div>
//                         <div className="w-8 h-6 bg-blue-500 rounded-sm"></div>
//                         <div className="w-8 h-6 bg-red-500 rounded-sm"></div>
//                       </div>
//                     </div>
//                     <div className="space-y-3">
//                       <input
//                         type="text"
//                         placeholder="Card Number"
//                         className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                       />
//                       <div className="grid grid-cols-2 gap-3">
//                         <input
//                           type="text"
//                           placeholder="MM/YY"
//                           className="px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         />
//                         <input
//                           type="text"
//                           placeholder="CVV"
//                           className="px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         />
//                       </div>
//                       <input
//                         type="text"
//                         placeholder="Card Holder Name"
//                         className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                       />
//                     </div>
//                   </div>

//                   {/* UPI */}
//                   <div className="p-4 border border-slate-200 rounded-lg">
//                     <div className="flex items-center justify-between mb-4">
//                       <div className="flex items-center gap-3">
//                         <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center">
//                           <span className="text-white text-xs font-bold">UPI</span>
//                         </div>
//                         <span className="font-semibold text-slate-900">UPI Payment</span>
//                       </div>
//                     </div>
//                     <div className="space-y-3">
//                       <input
//                         type="text"
//                         placeholder="UPI ID (e.g., 9876543210@ybl)"
//                         className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
//                       />
//                       <div className="grid grid-cols-4 gap-2">
//                         {["GPay", "PhonePe", "Paytm", "BHIM"].map((app) => (
//                           <button
//                             key={app}
//                             className="p-3 border border-slate-200 rounded-lg hover:border-purple-500 transition"
//                           >
//                             <span className="text-sm font-medium text-slate-700">{app}</span>
//                           </button>
//                         ))}
//                       </div>
//                     </div>
//                   </div>

//                   {/* Net Banking */}
//                   <div className="p-4 border border-slate-200 rounded-lg">
//                     <div className="flex items-center justify-between mb-4">
//                       <div className="flex items-center gap-3">
//                         <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
//                           <span className="text-white text-xs">₹</span>
//                         </div>
//                         <span className="font-semibold text-slate-900">Net Banking</span>
//                       </div>
//                     </div>
//                     <select className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
//                       <option>Select your bank</option>
//                       <option>State Bank of India</option>
//                       <option>Axis Bank</option>
//                       <option>HDFC Bank</option>
//                       <option>ICICI Bank</option>
//                     </select>
//                   </div>
//                 </div>

//                 {/* Payment Amount & Proceed Button */}
//                 <div className="mt-6 p-4 bg-slate-50 rounded-lg border border-slate-200">
//                   <div className="flex items-center justify-between mb-4">
//                     <span className="text-slate-600">Amount to pay</span>
//                     <span className="text-2xl font-bold text-slate-900">₹1,500.00</span>
//                   </div>
//                   <button
//                     onClick={() => handlePaymentRedirect("general")}
//                     className="w-full py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold text-lg hover:shadow-lg transition-all"
//                   >
//                     Proceed to Pay ₹1,500.00
//                   </button>
//                   <p className="text-center text-xs text-slate-500 mt-3">
//                     🔒 Your payment is secured with Razorpay
//                   </p>
//                 </div>
//               </CardContent>
//             </Card>

//             {/* Recent Transactions */}
//             <Card className="border-0 shadow-sm">
//               <CardHeader>
//                 <CardTitle>Recent Payments</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <div className="space-y-3">
//                   {[
//                     { id: "TXN001", method: "UPI", amount: "₹1,500", status: "Success", date: "Dec 1, 2024" },
//                     { id: "TXN002", method: "Card", amount: "₹2,000", status: "Success", date: "Nov 28, 2024" },
//                     { id: "TXN003", method: "Net Banking", amount: "₹3,500", status: "Failed", date: "Nov 25, 2024" },
//                   ].map((transaction) => (
//                     <div
//                       key={transaction.id}
//                       className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-200"
//                     >
//                       <div>
//                         <p className="font-medium text-slate-900">{transaction.id}</p>
//                         <p className="text-sm text-slate-600">{transaction.method} • {transaction.date}</p>
//                       </div>
//                       <div className="text-right">
//                         <p className="font-bold text-slate-900">{transaction.amount}</p>
//                         <span
//                           className={`px-2 py-1 rounded-full text-xs font-medium ${
//                             transaction.status === "Success"
//                               ? "bg-green-100 text-green-700"
//                               : "bg-red-100 text-red-700"
//                           }`}
//                         >
//                           {transaction.status}
//                         </span>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </CardContent>
//             </Card>
//           </div>
//         )}

//         {/* Learning Section */}
//         {activeSection === "learning" && (
//           <Card className="border-0 shadow-sm">
//             <CardHeader>
//               <CardTitle>Financial Literacy Modules</CardTitle>
//               <CardDescription>Learn at your own pace</CardDescription>
//             </CardHeader>
//             <CardContent>
//               <div className="space-y-4">
//                 {literacyModules.map((module, i) => (
//                   <div key={i} className="p-4 bg-slate-50 rounded-lg border border-slate-200">
//                     <div className="flex items-center justify-between mb-2">
//                       <p className="font-medium text-slate-900">{module.title}</p>
//                       <p className="text-sm text-slate-600">{module.completion}%</p>
//                     </div>
//                     <div className="w-full bg-slate-200 rounded-full h-2">
//                       <div
//                         className="bg-gradient-to-r from-blue-500 to-teal-500 h-2 rounded-full transition-all"
//                         style={{ width: `${module.completion}%` }}
//                       ></div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </CardContent>
//           </Card>
//         )}

//         {activeSection === "profile" && (
//           <Card className="border-0 shadow-sm">
//             <CardHeader>
//               <CardTitle>Profile Settings</CardTitle>
//             </CardHeader>
//             <CardContent>
//               <div className="space-y-4">
//                 <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
//                   <p className="font-medium text-slate-900 mb-2">Preferences</p>
//                   <div className="space-y-3">
//                     <label className="flex items-center gap-3 cursor-pointer">
//                       <input type="checkbox" defaultChecked className="w-4 h-4" />
//                       <span className="text-slate-700">Receive EMI reminders</span>
//                     </label>
//                     <label className="flex items-center gap-3 cursor-pointer">
//                       <input type="checkbox" defaultChecked className="w-4 h-4" />
//                       <span className="text-slate-700">Get financial literacy updates</span>
//                     </label>
//                     <label className="flex items-center gap-3 cursor-pointer">
//                       <input type="checkbox" className="w-4 h-4" />
//                       <span className="text-slate-700">Voice notifications enabled</span>
//                     </label>
//                   </div>
//                 </div>
//                 <button className="w-full px-4 py-2 bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded-lg font-medium hover:shadow-lg transition">
//                   Update Profile
//                 </button>
//               </div>
//             </CardContent>
//           </Card>
//         )}
//       </div>
//     </div>
//   )
// }
"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import { Mic, Home, BookOpen, TrendingUp, Settings, CreditCard, X, Calendar, TrendingUp as TrendingUpIcon, Shield, Heart, Zap } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function FarmerPortal() {
  const [activeSection, setActiveSection] = useState("home")
  const [showLoanForm, setShowLoanForm] = useState(false)
  const [loanApplicationSubmitted, setLoanApplicationSubmitted] = useState(false)
  const [loanFormData, setLoanFormData] = useState({
    fullName: "Rajesh Kumar",
    loanAmount: "",
    purpose: "",
    tenure: "12",
    employmentType: "farmer",
    monthlyIncome: "",
    aadharNumber: "****-****-1234",
    panNumber: "",
    bankAccount: "Axis Bank - XXXX5678"
  })

  const personalDetails = {
    name: "Rajesh Kumar",
    dob: "15-05-1978",
    gender: "Male",
    address: "Village Bhimrao, District Vidarbha, Maharashtra 442001",
    mobile: "+91-9876543210",
    aadhar: "****-****-1234",
  }

  const loanApplications = [
    {
      id: 1,
      amount: "₹45,000",
      status: "Active",
      appliedDate: "Oct 2024",
      emiAmount: "₹1,500",
      nextPayment: "Dec 10, 2024",
      repaymentTrack: 65,
    },
  ]

  // New data for Windows Widgets Board style
  const governmentSchemes = [
    {
      id: 1,
      title: "PM-KISAN Samman Nidhi",
      description: "₹6,000 per year direct benefit transfer to farmers",
      status: "Active",
      deadline: "31 Dec 2024",
      category: "Financial Support",
      icon: "💰",
      priority: "high"
    },
    {
      id: 2,
      title: "Kisan Credit Card Scheme",
      description: "Credit up to ₹3 lakhs at 4% interest for farming needs",
      status: "Active",
      deadline: "Ongoing",
      category: "Loan Facility",
      icon: "💳",
      priority: "medium"
    },
    {
      id: 3,
      title: "PM Fasal Bima Yojana",
      description: "Crop insurance against natural calamities",
      status: "Active",
      deadline: "Seasonal",
      category: "Insurance",
      icon: "🛡️",
      priority: "high"
    },
    {
      id: 4,
      title: "Soil Health Card Scheme",
      description: "Free soil testing and recommendations",
      status: "Active",
      deadline: "Ongoing",
      category: "Agricultural Support",
      icon: "🌱",
      priority: "medium"
    }
  ]

  const farmingTechniques = [
    {
      id: 1,
      title: "Drip Irrigation Method",
      description: "Save 50% water with targeted irrigation",
      benefit: "Water Conservation",
      difficulty: "Medium",
      icon: "💧",
      rating: 4.5
    },
    {
      id: 2,
      title: "Zero Budget Natural Farming",
      description: "Chemical-free farming with local resources",
      benefit: "Cost Effective",
      difficulty: "Easy",
      icon: "🌿",
      rating: 4.8
    },
    {
      id: 3,
      title: "Multi-layer Cropping",
      description: "Grow multiple crops in same space",
      benefit: "Higher Yield",
      difficulty: "Hard",
      icon: "🔄",
      rating: 4.3
    },
    {
      id: 4,
      title: "Integrated Pest Management",
      description: "Natural pest control methods",
      benefit: "Reduced Chemicals",
      difficulty: "Medium",
      icon: "🐞",
      rating: 4.6
    }
  ]

  const agriculturalNews = [
    {
      id: 1,
      title: "New Drought-Resistant Wheat Variety",
      summary: "ICAR releases 'Pusa Drought Safe' wheat variety",
      time: "2 hours ago",
      source: "Krishi Jagran",
      trending: true
    },
    {
      id: 2,
      title: "Solar Pump Subsidy Increased",
      summary: "Government increases subsidy to 70% for solar pumps",
      time: "5 hours ago",
      source: "Agricultural Dept",
      trending: false
    },
    {
      id: 3,
      title: "Mobile App for Soil Testing",
      summary: "New app provides instant soil health analysis",
      time: "1 day ago",
      source: "Tech Agri",
      trending: true
    },
    {
      id: 4,
      title: "Monsoon Forecast 2024",
      summary: "Normal monsoon expected across most regions",
      time: "2 days ago",
      source: "IMD",
      trending: false
    }
  ]

  const weatherWidget = {
    location: "Vidarbha, Maharashtra",
    temperature: "32°C",
    condition: "Partly Cloudy",
    humidity: "65%",
    rainfall: "10% chance",
    forecast: [
      { day: "Today", high: 32, low: 22, condition: "🌤️" },
      { day: "Tomorrow", high: 34, low: 23, condition: "☀️" },
      { day: "Wed", high: 33, low: 24, condition: "⛅" }
    ]
  }

  const marketPrices = [
    { crop: "Soybean", price: "₹5,200/qtl", change: "+2.5%" },
    { crop: "Cotton", price: "₹7,800/qtl", change: "+1.2%" },
    { crop: "Tur Dal", price: "₹8,500/qtl", change: "-0.8%" },
    { crop: "Wheat", price: "₹2,300/qtl", change: "+0.5%" }
  ]

  const handlePaymentRedirect = (paymentType = "general") => {
    let amount = "1500.00"
    let description = "Payment"

    switch (paymentType) {
      case "send-money":
        amount = "1000.00"
        description = "Send Money"
        break
      case "check-balance":
        setActiveSection("payments")
        setTimeout(() => {
          const balanceSection = document.getElementById("balance-check-section")
          if (balanceSection) {
            balanceSection.scrollIntoView({ behavior: "smooth" })
          }
        }, 100)
        return
      case "pay-emi":
        amount = "1500.00"
        description = "EMI Payment"
        break
      default:
        amount = "1500.00"
        description = "Payment"
    }

    const razorpayUrl = `https://razorpay.com/payment-gateway?amount=${amount}&description=${description}&type=${paymentType}`
    window.open(razorpayUrl, "_blank")
  }

  const handleQuickAction = (action: string) => {
    switch (action) {
      case "Send Money":
        handlePaymentRedirect("send-money")
        break
      case "Check Balance":
        handlePaymentRedirect("check-balance")
        break
      case "Apply Loan":
        setActiveSection("loans")
        setTimeout(() => {
          const applySection = document.getElementById("apply-loan-section")
          if (applySection) {
            applySection.scrollIntoView({ behavior: "smooth" })
          }
        }, 100)
        break
      case "Pay EMI":
        handlePaymentRedirect("pay-emi")
        break
      default:
        setActiveSection("payments")
    }
  }

  const handleLoanFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setLoanFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleLoanSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setTimeout(() => {
      setLoanApplicationSubmitted(true)
      setShowLoanForm(false)
      
      setTimeout(() => {
        setLoanApplicationSubmitted(false)
        setLoanFormData({
          fullName: "Rajesh Kumar",
          loanAmount: "",
          purpose: "",
          tenure: "12",
          employmentType: "farmer",
          monthlyIncome: "",
          aadharNumber: "****-****-1234",
          panNumber: "",
          bankAccount: "Axis Bank - XXXX5678"
        })
      }, 3000)
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      <Navigation />

      {/* Loan Application Success Message */}
      {loanApplicationSubmitted && (
        <div className="fixed top-4 right-4 z-50">
          <Card className="border-0 shadow-lg bg-gradient-to-r from-green-500 to-emerald-600 text-white">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <span className="text-green-500 text-lg">✓</span>
                </div>
                <div>
                  <p className="font-semibold">Loan Application Submitted!</p>
                  <p className="text-green-100 text-sm">We will review your application and contact you soon.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Loan Application Form Overlay */}
      {showLoanForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 flex items-center justify-center p-4">
          <Card className="w-full max-w-2xl border-0 shadow-xl max-h-[90vh] overflow-y-auto">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Apply for Microloan</CardTitle>
                <CardDescription>Fill in your details to apply for a loan</CardDescription>
              </div>
              <button 
                onClick={() => setShowLoanForm(false)}
                className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center hover:bg-slate-200 transition"
              >
                <X className="w-4 h-4" />
              </button>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleLoanSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-slate-700 mb-2 block">Full Name</label>
                    <input
                      type="text"
                      name="fullName"
                      value={loanFormData.fullName}
                      onChange={handleLoanFormChange}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-slate-700 mb-2 block">Loan Amount (₹)</label>
                    <input
                      type="number"
                      name="loanAmount"
                      value={loanFormData.loanAmount}
                      onChange={handleLoanFormChange}
                      placeholder="Enter amount"
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-slate-700 mb-2 block">Loan Purpose</label>
                  <select
                    name="purpose"
                    value={loanFormData.purpose}
                    onChange={handleLoanFormChange}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">Select purpose</option>
                    <option value="agriculture">Agriculture Equipment</option>
                    <option value="seeds">Seeds & Fertilizers</option>
                    <option value="livestock">Livestock Purchase</option>
                    <option value="irrigation">Irrigation System</option>
                    <option value="personal">Personal Use</option>
                    <option value="business">Small Business</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-slate-700 mb-2 block">Loan Tenure (Months)</label>
                    <select
                      name="tenure"
                      value={loanFormData.tenure}
                      onChange={handleLoanFormChange}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    >
                      <option value="6">6 Months</option>
                      <option value="12">12 Months</option>
                      <option value="18">18 Months</option>
                      <option value="24">24 Months</option>
                      <option value="36">36 Months</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-slate-700 mb-2 block">Employment Type</label>
                    <select
                      name="employmentType"
                      value={loanFormData.employmentType}
                      onChange={handleLoanFormChange}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    >
                      <option value="farmer">Farmer</option>
                      <option value="small-trader">Small Trader</option>
                      <option value="daily-wage">Daily Wage Worker</option>
                      <option value="self-employed">Self Employed</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-slate-700 mb-2 block">Monthly Income (₹)</label>
                    <input
                      type="number"
                      name="monthlyIncome"
                      value={loanFormData.monthlyIncome}
                      onChange={handleLoanFormChange}
                      placeholder="Enter monthly income"
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-slate-700 mb-2 block">PAN Number</label>
                    <input
                      type="text"
                      name="panNumber"
                      value={loanFormData.panNumber}
                      onChange={handleLoanFormChange}
                      placeholder="Enter PAN number"
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-slate-700 mb-2 block">Aadhar Number</label>
                  <input
                    type="text"
                    name="aadharNumber"
                    value={loanFormData.aadharNumber}
                    onChange={handleLoanFormChange}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-slate-700 mb-2 block">Bank Account for Disbursement</label>
                  <select
                    name="bankAccount"
                    value={loanFormData.bankAccount}
                    onChange={handleLoanFormChange}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="Axis Bank - XXXX5678">Axis Bank - XXXX5678</option>
                    <option value="State Bank of India - XXXX9012">State Bank of India - XXXX9012</option>
                  </select>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <h4 className="font-semibold text-blue-900 mb-2">Loan Eligibility Summary</h4>
                  <div className="space-y-2 text-sm text-blue-800">
                    <p>• Maximum Eligible Amount: ₹75,000</p>
                    <p>• Interest Rate: 8.5% per annum</p>
                    <p>• Processing Fee: 1% of loan amount</p>
                    <p>• Credit Score: 745 (Excellent)</p>
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowLoanForm(false)}
                    className="flex-1 px-4 py-3 border border-slate-300 text-slate-700 rounded-lg font-medium hover:bg-slate-50 transition"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-4 py-3 bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded-lg font-semibold hover:shadow-lg transition"
                  >
                    Submit Application
                  </button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Welcome, {personalDetails.name}</h1>
          <p className="text-slate-600">Your personal finance hub</p>
        </div>

        <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
          {[
            { id: "home", label: "Home", icon: Home },
            { id: "loans", label: "Loans", icon: TrendingUp },
            { id: "payments", label: "Payments", icon: CreditCard },
            { id: "learning", label: "Learning", icon: BookOpen },
            { id: "profile", label: "Profile", icon: Settings },
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

        {activeSection === "home" && (
          <div className="space-y-6">
            {/* Personal Details */}
            <Card className="border-0 shadow-sm bg-gradient-to-br from-blue-50 to-teal-50">
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-xs text-slate-600 mb-1">Full Name</p>
                    <p className="font-bold text-slate-900">{personalDetails.name}</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-600 mb-1">Date of Birth</p>
                    <p className="font-bold text-slate-900">{personalDetails.dob}</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-600 mb-1">Gender</p>
                    <p className="font-bold text-slate-900">{personalDetails.gender}</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-600 mb-1">Mobile Number</p>
                    <p className="font-bold text-slate-900">{personalDetails.mobile}</p>
                  </div>
                  <div className="md:col-span-2">
                    <p className="text-xs text-slate-600 mb-1">Address</p>
                    <p className="font-bold text-slate-900">{personalDetails.address}</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-600 mb-1">Aadhar / KYC ID</p>
                    <p className="font-bold text-slate-900">{personalDetails.aadhar}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Account Summary - Only Linked Bank Accounts (Total Balance Removed) */}
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle>Linked Bank Accounts</CardTitle>
                <CardDescription>Your connected banking accounts</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-slate-900">Axis Bank - XXXX5678</p>
                        <p className="text-sm text-slate-600 mt-1">Primary Savings Account</p>
                      </div>
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                        Primary
                      </span>
                    </div>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-slate-900">State Bank of India - XXXX9012</p>
                        <p className="text-sm text-slate-600 mt-1">Secondary Savings Account</p>
                      </div>
                      <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">
                        Linked
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm bg-gradient-to-br from-teal-50 to-green-50">
              <CardHeader>
                <CardTitle>Financial Health Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <p className="text-slate-600 text-sm mb-2">Credit Score</p>
                    <p className="text-4xl font-bold text-teal-600">745</p>
                    <p className="text-xs text-slate-600 mt-1">Excellent rating</p>
                  </div>
                  <div>
                    <p className="text-slate-600 text-sm mb-2">EMI Progress</p>
                    <div className="mb-3">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-2xl font-bold text-slate-900">65%</span>
                        <span className="text-xs text-slate-600">of ₹45,000</span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-blue-500 to-teal-500 h-2 rounded-full"
                          style={{ width: "65%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="text-slate-600 text-sm mb-2">Savings Goal</p>
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-2xl font-bold text-slate-900">₹8,500</p>
                      <p className="text-sm text-slate-600">of ₹50,000</p>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-teal-500 h-2 rounded-full"
                        style={{ width: "17%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Voice Assistant */}
            <Card className="border-0 shadow-sm bg-gradient-to-br from-orange-50 to-amber-50">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">Voice Assistant</h3>
                    <p className="text-slate-600">"What would you like to do today?"</p>
                  </div>
                  <button className="w-16 h-16 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center text-white hover:shadow-lg transition">
                    <Mic className="w-6 h-6" />
                  </button>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Send Money", icon: "💸", color: "from-blue-50" },
                { label: "Check Balance", icon: "👁️", color: "from-teal-50" },
                { label: "Apply Loan", icon: "📋", color: "from-orange-50" },
                { label: "Pay EMI", icon: "💳", color: "from-green-50" },
              ].map((action, i) => (
                <button
                  key={i}
                  onClick={() => handleQuickAction(action.label)}
                  className={`bg-gradient-to-br ${action.color} to-transparent p-4 rounded-xl border border-slate-200 hover:shadow-md transition cursor-pointer`}
                >
                  <div className="text-2xl mb-2">{action.icon}</div>
                  <p className="text-sm font-medium text-slate-900">{action.label}</p>
                </button>
              ))}
            </div>
          </div>
        )}

        {activeSection === "loans" && (
          <div className="space-y-6">
            {/* Apply for Loan - Prominent at top */}
            <Card id="apply-loan-section" className="border-0 shadow-sm bg-gradient-to-r from-blue-50 to-teal-50 border-2 border-blue-200">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1">Apply for a Microloan</h3>
                    <p className="text-slate-600 text-sm">
                      Voice-assisted loan application with instant eligibility check
                    </p>
                  </div>
                  <button 
                    onClick={() => setShowLoanForm(true)}
                    className="px-6 py-3 bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded-lg font-semibold hover:shadow-lg transition whitespace-nowrap"
                  >
                    Apply Now
                  </button>
                </div>
              </CardContent>
            </Card>

            {/* Credit Score Display */}
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle>Credit Score & Eligibility</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg border border-blue-200 text-center">
                    <p className="text-slate-600 text-sm mb-3">Your Credit Score</p>
                    <p className="text-5xl font-bold text-blue-600 mb-2">745</p>
                    <p className="text-sm font-medium text-slate-700">Excellent (700+)</p>
                  </div>
                  <div className="p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-lg border border-green-200">
                    <p className="text-slate-600 text-sm mb-3">Loan Eligibility</p>
                    <p className="text-3xl font-bold text-green-600 mb-2">₹75,000</p>
                    <p className="text-xs text-slate-600">Max amount eligible for next loan</p>
                  </div>
                  <div className="p-6 bg-gradient-to-br from-teal-50 to-teal-100 rounded-lg border border-teal-200">
                    <p className="text-slate-600 text-sm mb-3">Interest Rate</p>
                    <p className="text-3xl font-bold text-teal-600 mb-2">8.5%</p>
                    <p className="text-xs text-slate-600">Competitive micro-loan rate</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Loan Tracker Card */}
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle>Loan Tracker</CardTitle>
                <CardDescription>Current loan status and repayment progress</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {loanApplications.map((loan) => (
                    <div key={loan.id} className="p-6 bg-slate-50 rounded-lg border border-slate-200">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h4 className="font-bold text-slate-900 mb-1">Loan Amount: {loan.amount}</h4>
                          <p className="text-sm text-slate-600">Applied on {loan.appliedDate}</p>
                        </div>
                        <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                          {loan.status}
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                          <p className="text-xs text-slate-600 mb-1">Monthly EMI</p>
                          <p className="text-2xl font-bold text-slate-900">{loan.emiAmount}</p>
                        </div>
                        <div>
                          <p className="text-xs text-slate-600 mb-1">Next Payment Due</p>
                          <p className="text-2xl font-bold text-slate-900">{loan.nextPayment}</p>
                        </div>
                      </div>

                      <div>
                        <p className="text-xs text-slate-600 mb-2">Repayment Progress</p>
                        <div className="w-full bg-slate-300 rounded-full h-3 mb-2">
                          <div
                            className="bg-gradient-to-r from-blue-500 to-teal-500 h-3 rounded-full"
                            style={{ width: `${loan.repaymentTrack}%` }}
                          ></div>
                        </div>
                        <p className="text-sm text-slate-600">{loan.repaymentTrack}% complete</p>
                      </div>

                      <button 
                        onClick={() => handleQuickAction("Pay EMI")}
                        className="w-full mt-4 px-4 py-2 bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded-lg font-medium hover:shadow-lg transition"
                      >
                        Pay EMI
                      </button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Repayment History */}
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle>Repayment History</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { month: "November 2024", amount: "₹1,500", status: "Paid" },
                    { month: "October 2024", amount: "₹1,500", status: "Paid" },
                    { month: "September 2024", amount: "₹1,500", status: "Paid" },
                  ].map((payment, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-200"
                    >
                      <div>
                        <p className="font-medium text-slate-900">{payment.month}</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <p className="font-bold text-slate-900">{payment.amount}</p>
                        <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                          {payment.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Payments Section - New Razorpay-like Interface */}
        {activeSection === "payments" && (
          <div className="space-y-6">
            {/* Payment Gateway Header */}
            <Card className="border-0 shadow-sm bg-gradient-to-r from-blue-600 to-purple-600 text-white">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold mb-2">Secure Payment Gateway</h2>
                    <p className="text-blue-100">Powered by Razorpay</p>
                  </div>
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                    <CreditCard className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Balance Check Section */}
            <Card id="balance-check-section" className="border-0 shadow-sm bg-gradient-to-br from-green-50 to-emerald-100">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-2xl">💰</span>
                  Account Balance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-slate-600 text-sm mb-2">Available Balance</p>
                    <p className="text-4xl font-bold text-green-600">₹28,450</p>
                    <p className="text-xs text-slate-600 mt-1">As of today</p>
                  </div>
                  <div>
                    <p className="text-slate-600 text-sm mb-2">Linked Accounts</p>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Axis Bank:</span>
                        <span className="font-semibold">₹18,250</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>SBI:</span>
                        <span className="font-semibold">₹10,200</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Payment Methods */}
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle>Choose Payment Method</CardTitle>
                <CardDescription>Select your preferred payment option</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Credit/Debit Card */}
                  <div className="p-4 border-2 border-blue-200 rounded-lg bg-blue-50">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <CreditCard className="w-6 h-6 text-blue-600" />
                        <span className="font-semibold text-slate-900">Credit/Debit Card</span>
                      </div>
                      <div className="flex gap-2">
                        <div className="w-8 h-6 bg-orange-500 rounded-sm"></div>
                        <div className="w-8 h-6 bg-blue-500 rounded-sm"></div>
                        <div className="w-8 h-6 bg-red-500 rounded-sm"></div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <input
                        type="text"
                        placeholder="Card Number"
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <div className="grid grid-cols-2 gap-3">
                        <input
                          type="text"
                          placeholder="MM/YY"
                          className="px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                          type="text"
                          placeholder="CVV"
                          className="px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <input
                        type="text"
                        placeholder="Card Holder Name"
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  {/* UPI */}
                  <div className="p-4 border border-slate-200 rounded-lg">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-bold">UPI</span>
                        </div>
                        <span className="font-semibold text-slate-900">UPI Payment</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <input
                        type="text"
                        placeholder="UPI ID (e.g., 9876543210@ybl)"
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                      <div className="grid grid-cols-4 gap-2">
                        {["GPay", "PhonePe", "Paytm", "BHIM"].map((app) => (
                          <button
                            key={app}
                            className="p-3 border border-slate-200 rounded-lg hover:border-purple-500 transition"
                          >
                            <span className="text-sm font-medium text-slate-700">{app}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Net Banking */}
                  <div className="p-4 border border-slate-200 rounded-lg">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs">₹</span>
                        </div>
                        <span className="font-semibold text-slate-900">Net Banking</span>
                      </div>
                    </div>
                    <select className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
                      <option>Select your bank</option>
                      <option>State Bank of India</option>
                      <option>Axis Bank</option>
                      <option>HDFC Bank</option>
                      <option>ICICI Bank</option>
                    </select>
                  </div>
                </div>

                {/* Payment Amount & Proceed Button */}
                <div className="mt-6 p-4 bg-slate-50 rounded-lg border border-slate-200">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-slate-600">Amount to pay</span>
                    <span className="text-2xl font-bold text-slate-900">₹1,500.00</span>
                  </div>
                  <button
                    onClick={() => handlePaymentRedirect("general")}
                    className="w-full py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold text-lg hover:shadow-lg transition-all"
                  >
                    Proceed to Pay ₹1,500.00
                  </button>
                  <p className="text-center text-xs text-slate-500 mt-3">
                    🔒 Your payment is secured with Razorpay
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Recent Transactions */}
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle>Recent Payments</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { id: "TXN001", method: "UPI", amount: "₹1,500", status: "Success", date: "Dec 1, 2024" },
                    { id: "TXN002", method: "Card", amount: "₹2,000", status: "Success", date: "Nov 28, 2024" },
                    { id: "TXN003", method: "Net Banking", amount: "₹3,500", status: "Failed", date: "Nov 25, 2024" },
                  ].map((transaction) => (
                    <div
                      key={transaction.id}
                      className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-200"
                    >
                      <div>
                        <p className="font-medium text-slate-900">{transaction.id}</p>
                        <p className="text-sm text-slate-600">{transaction.method} • {transaction.date}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-slate-900">{transaction.amount}</p>
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${
                            transaction.status === "Success"
                              ? "bg-green-100 text-green-700"
                              : "bg-red-100 text-red-700"
                          }`}
                        >
                          {transaction.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Learning Section - Windows Widgets Board Style */}
        {activeSection === "learning" && (
          <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-slate-900">Knowledge & Resources Hub</h1>
                <p className="text-slate-600">Stay updated with government schemes, farming techniques, and market news</p>
              </div>
              <div className="flex items-center gap-2 text-slate-600">
                <Calendar className="w-4 h-4" />
                <span>{new Date().toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
              </div>
            </div>

            {/* Widgets Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Left Column */}
              <div className="space-y-6">
                {/* Government Schemes Widget */}
                <Card className="border-0 shadow-sm bg-gradient-to-br from-blue-50 to-indigo-50">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Shield className="w-5 h-5 text-blue-600" />
                      Government Schemes
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {governmentSchemes.map((scheme) => (
                        <div key={scheme.id} className="p-3 bg-white rounded-lg border border-slate-200 hover:shadow-md transition">
                          <div className="flex items-start gap-3">
                            <div className="text-2xl">{scheme.icon}</div>
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                <h4 className="font-semibold text-slate-900">{scheme.title}</h4>
                                {scheme.priority === "high" && (
                                  <span className="px-2 py-1 bg-red-100 text-red-700 rounded-full text-xs font-medium">Priority</span>
                                )}
                              </div>
                              <p className="text-sm text-slate-600 mb-2">{scheme.description}</p>
                              <div className="flex items-center justify-between text-xs text-slate-500">
                                <span>Deadline: {scheme.deadline}</span>
                                <span className={`px-2 py-1 rounded-full ${
                                  scheme.status === "Active" ? "bg-green-100 text-green-700" : "bg-slate-100 text-slate-700"
                                }`}>
                                  {scheme.status}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Weather Widget */}
                <Card className="border-0 shadow-sm bg-gradient-to-br from-sky-50 to-cyan-50">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Zap className="w-5 h-5 text-cyan-600" />
                      Weather & Farming
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center mb-4">
                      <p className="text-sm text-slate-600">{weatherWidget.location}</p>
                      <p className="text-3xl font-bold text-slate-900 mt-1">{weatherWidget.temperature}</p>
                      <p className="text-slate-600">{weatherWidget.condition}</p>
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-center">
                      {weatherWidget.forecast.map((day, index) => (
                        <div key={index} className="p-2 bg-white rounded-lg border border-slate-200">
                          <p className="text-sm font-medium text-slate-900">{day.day}</p>
                          <p className="text-2xl mb-1">{day.condition}</p>
                          <p className="text-xs text-slate-600">{day.high}°/{day.low}°</p>
                        </div>
                      ))}
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-4 text-sm">
                      <div className="text-center p-2 bg-white rounded-lg border border-slate-200">
                        <p className="text-slate-600">Humidity</p>
                        <p className="font-semibold text-slate-900">{weatherWidget.humidity}</p>
                      </div>
                      <div className="text-center p-2 bg-white rounded-lg border border-slate-200">
                        <p className="text-slate-600">Rainfall</p>
                        <p className="font-semibold text-slate-900">{weatherWidget.rainfall}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Middle Column */}
              <div className="space-y-6">
                {/* Farming Techniques Widget */}
                <Card className="border-0 shadow-sm bg-gradient-to-br from-emerald-50 to-green-50">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <TrendingUpIcon className="w-5 h-5 text-green-600" />
                      Advanced Farming Techniques
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {farmingTechniques.map((technique) => (
                        <div key={technique.id} className="p-3 bg-white rounded-lg border border-slate-200 hover:shadow-md transition">
                          <div className="flex items-start gap-3">
                            <div className="text-2xl">{technique.icon}</div>
                            <div className="flex-1">
                              <h4 className="font-semibold text-slate-900 mb-1">{technique.title}</h4>
                              <p className="text-sm text-slate-600 mb-2">{technique.description}</p>
                              <div className="flex items-center justify-between text-xs">
                                <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full">
                                  Benefit: {technique.benefit}
                                </span>
                                <span className={`px-2 py-1 rounded-full ${
                                  technique.difficulty === "Easy" ? "bg-green-100 text-green-700" :
                                  technique.difficulty === "Medium" ? "bg-yellow-100 text-yellow-700" :
                                  "bg-red-100 text-red-700"
                                }`}>
                                  {technique.difficulty}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Market Prices Widget */}
                <Card className="border-0 shadow-sm bg-gradient-to-br from-amber-50 to-orange-50">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <TrendingUp className="w-5 h-5 text-orange-600" />
                      Live Market Prices
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {marketPrices.map((crop, index) => (
                        <div key={index} className="flex items-center justify-between p-2 bg-white rounded-lg border border-slate-200">
                          <div>
                            <p className="font-medium text-slate-900">{crop.crop}</p>
                            <p className="text-sm text-slate-600">Per quintal</p>
                          </div>
                          <div className="text-right">
                            <p className="font-bold text-slate-900">{crop.price}</p>
                            <p className={`text-sm ${
                              crop.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
                            }`}>
                              {crop.change}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                {/* Agricultural News Widget */}
                <Card className="border-0 shadow-sm bg-gradient-to-br from-purple-50 to-pink-50">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Heart className="w-5 h-5 text-purple-600" />
                      Agricultural News
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {agriculturalNews.map((news) => (
                        <div key={news.id} className="p-3 bg-white rounded-lg border border-slate-200 hover:shadow-md transition">
                          <div className="flex items-start gap-2">
                            {news.trending && (
                              <span className="px-2 py-1 bg-red-100 text-red-700 rounded-full text-xs font-medium">Trending</span>
                            )}
                          </div>
                          <h4 className="font-semibold text-slate-900 mb-2">{news.title}</h4>
                          <p className="text-sm text-slate-600 mb-2">{news.summary}</p>
                          <div className="flex items-center justify-between text-xs text-slate-500">
                            <span>{news.source}</span>
                            <span>{news.time}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Tips Widget */}
                <Card className="border-0 shadow-sm bg-gradient-to-br from-rose-50 to-red-50">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Zap className="w-5 h-5 text-red-600" />
                      Farming Quick Tips
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {[
                        "Water plants early morning to reduce evaporation",
                        "Use organic compost for better soil health",
                        "Rotate crops to prevent soil depletion",
                        "Monitor soil pH regularly for optimal growth",
                        "Use neem oil as natural pesticide",
                        "Practice intercropping for better yield"
                      ].map((tip, index) => (
                        <div key={index} className="flex items-start gap-2 p-2 bg-white rounded-lg border border-slate-200">
                          <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                          <p className="text-sm text-slate-700">{tip}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        )}

        {activeSection === "profile" && (
          <Card className="border-0 shadow-sm">
            <CardHeader>
              <CardTitle>Profile Settings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                  <p className="font-medium text-slate-900 mb-2">Preferences</p>
                  <div className="space-y-3">
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input type="checkbox" defaultChecked className="w-4 h-4" />
                      <span className="text-slate-700">Receive EMI reminders</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input type="checkbox" defaultChecked className="w-4 h-4" />
                      <span className="text-slate-700">Get financial literacy updates</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input type="checkbox" className="w-4 h-4" />
                      <span className="text-slate-700">Voice notifications enabled</span>
                    </label>
                  </div>
                </div>
                <button className="w-full px-4 py-2 bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded-lg font-medium hover:shadow-lg transition">
                  Update Profile
                </button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}




