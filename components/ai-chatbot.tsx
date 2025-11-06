"use client"

import { useState, useRef, useEffect } from "react"
import { MessageCircle, Send, Mic, X, Volume2 } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export default function AIChatbot() {
  const { t } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Array<{ role: string; content: string }>>([
    {
      role: "assistant",
      content: t("welcome to Gramsetu your finance assistant"),
    },
  ])
  const [input, setInput] = useState("")
  const [isListening, setIsListening] = useState(false)
  const [loading, setLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const recognitionRef = useRef<any>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  useEffect(() => {
    if (typeof window !== "undefined") {
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition
      if (SpeechRecognition) {
        recognitionRef.current = new SpeechRecognition()
        recognitionRef.current.continuous = false
        recognitionRef.current.interimResults = false

        recognitionRef.current.onstart = () => setIsListening(true)
        recognitionRef.current.onend = () => setIsListening(false)

        recognitionRef.current.onresult = (event: any) => {
          const transcript = Array.from(event.results)
            .map((result: any) => result[0].transcript)
            .join("")
          setInput(transcript)
          handleSendMessage(transcript)
        }
      }
    }
  }, [])

  const handleSendMessage = async (messageText = input) => {
    if (!messageText.trim()) return

    const userMessage = messageText
    setInput("")
    setMessages((prev) => [...prev, { role: "user", content: userMessage }])
    setLoading(true)

    setTimeout(() => {
      const responses = [t("That’s a great question! 💡 Let me break it down for you in simple terms so it’s easier to understand. Give me just a second…"), t("You’re doing amazing taking charge of your finances! 🌱 Small steps like these make a big difference. Would you like me to explain this in Hindi or English?"), t("Hmm, looks like you’re thinking 🤔 — no worries! You can ask me anything like ‘how to save money’, ‘how to open a bank account’, or ‘what is insurance’. I’ve got you!"), t("Glad I could help! 🌾 Remember, every small saving today grows into something big tomorrow. Would you like me to send a quick summary of what we discussed?")]
      const randomResponse = responses[Math.floor(Math.random() * responses.length)]

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: randomResponse,
        },
      ])

      if ("speechSynthesis" in window) {
        const utterance = new SpeechSynthesisUtterance(randomResponse)
        utterance.lang = "en-IN"
        speechSynthesis.speak(utterance)
      }

      setLoading(false)
    }, 1000)
  }

  const startListening = () => {
    if (recognitionRef.current) {
      recognitionRef.current.start()
    }
  }

  const speakMessage = (text: string) => {
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(text)
      utterance.lang = "en-IN"
      speechSynthesis.speak(utterance)
    }
  }

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-110 z-40 animate-pulse-glow"
        >
          <MessageCircle className="w-7 h-7" />
        </button>
      )}

      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[600px] bg-white rounded-2xl shadow-2xl flex flex-col border border-slate-200 z-50 animate-scaleIn">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-500 via-teal-500 to-green-500 text-white p-4 rounded-t-2xl flex items-center justify-between">
            <div>
              <h3 className="font-bold text-lg">{t("gramsetuAssistant")}</h3>
              <p className="text-xs text-blue-100">{t("botStatus")}</p>
            </div>
            <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-white/20 rounded-lg transition">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"} animate-fadeInUp`}>
                <div
                  className={`max-w-xs px-4 py-2 rounded-lg transition hover:shadow-md ${
                    msg.role === "user"
                      ? "bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded-br-none hover:shadow-blue-300"
                      : "bg-gradient-to-r from-slate-100 to-slate-50 text-slate-900 rounded-bl-none hover:shadow-slate-300"
                  }`}
                >
                  <p className="text-sm">{msg.content}</p>
                  {msg.role === "assistant" && (
                    <button
                      onClick={() => speakMessage(msg.content)}
                      className="mt-2 text-xs flex items-center gap-1 hover:opacity-80 transition"
                    >
                      <Volume2 className="w-3 h-3" /> {t("listen")}
                    </button>
                  )}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start animate-fadeInUp">
                <div className="bg-slate-100 px-4 py-2 rounded-lg rounded-bl-none">
                  <div className="flex gap-2">
                    <div className="w-2 h-2 bg-gradient-to-b from-blue-500 to-teal-500 rounded-full animate-bounce"></div>
                    <div
                      className="w-2 h-2 bg-gradient-to-b from-blue-500 to-teal-500 rounded-full animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-gradient-to-b from-blue-500 to-teal-500 rounded-full animate-bounce"
                      style={{ animationDelay: "0.4s" }}
                    ></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-slate-200 bg-gradient-to-r from-slate-50 to-slate-100">
            <div className="flex gap-2">
              <button
                onClick={startListening}
                className={`p-3 rounded-lg transition hover:scale-105 duration-200 ${
                  isListening
                    ? "bg-gradient-to-r from-red-500 to-pink-500 text-white animate-pulse"
                    : "bg-gradient-to-r from-blue-100 to-teal-100 text-slate-900 hover:from-blue-200 hover:to-teal-200"
                }`}
              >
                <Mic className="w-5 h-5" />
              </button>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                placeholder={t("typeSomething")}
                className="flex-1 px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm transition"
              />
              <button
                onClick={() => handleSendMessage()}
                className="p-3 bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded-lg hover:shadow-lg transition hover:scale-105 duration-200"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}








// 2
// "use client"

// import { useState, useRef, useEffect } from "react"
// import { MessageCircle, Send, Mic, X, Volume2 } from "lucide-react"
// import { useLanguage } from "@/lib/language-context"

// export default function AIChatbot() {
//   const { t } = useLanguage()
//   const [isOpen, setIsOpen] = useState(false)
//   const [messages, setMessages] = useState<Array<{ role: string; content: string }>>([
//     {
//       role: "assistant",
//       content: t("botGreeting"),
//     },
//   ])
//   const [input, setInput] = useState("")
//   const [isListening, setIsListening] = useState(false)
//   const [loading, setLoading] = useState(false)
//   const messagesEndRef = useRef<HTMLDivElement>(null)
//   const recognitionRef = useRef<any>(null)

//   useEffect(() => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
//   }, [messages])

//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition
//       if (SpeechRecognition) {
//         recognitionRef.current = new SpeechRecognition()
//         recognitionRef.current.continuous = false
//         recognitionRef.current.interimResults = false

//         recognitionRef.current.onstart = () => setIsListening(true)
//         recognitionRef.current.onend = () => setIsListening(false)

//         recognitionRef.current.onresult = (event: any) => {
//           const transcript = Array.from(event.results)
//             .map((result: any) => result[0].transcript)
//             .join("")
//           setInput(transcript)
//           handleSendMessage(transcript)
//         }
//       }
//     }
//   }, [])


//   const handleVoiceInput = () => {
//   if (!("webkitSpeechRecognition" in window) && !("SpeechRecognition" in window)) {
//     alert("Speech recognition is not supported in this browser.")
//     return
//   }

//   const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)()
//   recognition.continuous = false
//   recognition.interimResults = false
//   recognition.lang = "en-IN"

//   recognition.start()
//   setLoading(true)

//   recognition.onresult = async (event) => {
//     const voiceText = event.results[0][0].transcript
//     setInput(voiceText)
//     await handleSendMessage(voiceText)
//   }

//   recognition.onerror = (err) => {
//     console.error("Voice input error:", err)
//     setLoading(false)
//   }

//   recognition.onend = () => setLoading(false)
// }

// // handle send message given by ai 
//   const handleSendMessage = async (messageText = input) => {
//   if (!messageText.trim()) return

//   const userMessage = messageText
//   setInput("")
//   setMessages((prev) => [...prev, { role: "user", content: userMessage }])
//   setLoading(true)

//   try {
//     const res = await fetch("/api/chat", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ message: userMessage }),
//     })
//     const data = await res.json()

//     const aiResponse = data.reply

//     setMessages((prev) => [...prev, { role: "assistant", content: aiResponse }])

//     // 🔊 Speak the AI response (TTS)
//     if ("speechSynthesis" in window) {
//       const utterance = new SpeechSynthesisUtterance(aiResponse)
//       utterance.lang = "en-IN"
//       speechSynthesis.speak(utterance)
//     }
//   } catch (err) {
//     console.error("Error:", err)
//   } finally {
//     setLoading(false)
//   }
// }





//   const startListening = () => {
//     if (recognitionRef.current) {
//       recognitionRef.current.start()
//     }
//   }

//   const speakMessage = (text: string) => {
//     if ("speechSynthesis" in window) {
//       const utterance = new SpeechSynthesisUtterance(text)
//       utterance.lang = "en-IN"
//       speechSynthesis.speak(utterance)
//     }
//   }

//   return (
//     <>
//       {!isOpen && (
//         <button
//           onClick={() => setIsOpen(true)}
//           className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-110 z-40 animate-pulse-glow"
//         >
//           <MessageCircle className="w-7 h-7" />
//         </button>
//       )}

//       {isOpen && (
//         <div className="fixed bottom-6 right-6 w-96 h-[600px] bg-white rounded-2xl shadow-2xl flex flex-col border border-slate-200 z-50 animate-scaleIn">
//           {/* Header */}
//           <div className="bg-gradient-to-r from-blue-500 via-teal-500 to-green-500 text-white p-4 rounded-t-2xl flex items-center justify-between">
//             <div>
//               <h3 className="font-bold text-lg">{t("gramsetuAssistant")}</h3>
//               <p className="text-xs text-blue-100">{t("botStatus")}</p>
//             </div>
//             <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-white/20 rounded-lg transition">
//               <X className="w-5 h-5" />
//             </button>
//           </div>

//           {/* Messages */}
//           <div className="flex-1 overflow-y-auto p-4 space-y-4">
//             {messages.map((msg, i) => (
//               <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"} animate-fadeInUp`}>
//                 <div
//                   className={`max-w-xs px-4 py-2 rounded-lg transition hover:shadow-md ${
//                     msg.role === "user"
//                       ? "bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded-br-none hover:shadow-blue-300"
//                       : "bg-gradient-to-r from-slate-100 to-slate-50 text-slate-900 rounded-bl-none hover:shadow-slate-300"
//                   }`}
//                 >
//                   <p className="text-sm">{msg.content}</p>
//                   {msg.role === "assistant" && (
//                     <button
//                       onClick={() => speakMessage(msg.content)}
//                       className="mt-2 text-xs flex items-center gap-1 hover:opacity-80 transition"
//                     >
//                       <Volume2 className="w-3 h-3" /> {t("listen")}
//                     </button>
//                   )}
//                 </div>
//               </div>
//             ))}
//             {loading && (
//               <div className="flex justify-start animate-fadeInUp">
//                 <div className="bg-slate-100 px-4 py-2 rounded-lg rounded-bl-none">
//                   <div className="flex gap-2">
//                     <div className="w-2 h-2 bg-gradient-to-b from-blue-500 to-teal-500 rounded-full animate-bounce"></div>
//                     <div
//                       className="w-2 h-2 bg-gradient-to-b from-blue-500 to-teal-500 rounded-full animate-bounce"
//                       style={{ animationDelay: "0.2s" }}
//                     ></div>
//                     <div
//                       className="w-2 h-2 bg-gradient-to-b from-blue-500 to-teal-500 rounded-full animate-bounce"
//                       style={{ animationDelay: "0.4s" }}
//                     ></div>
//                   </div>
//                 </div>
//               </div>
//             )}
//             <div ref={messagesEndRef} />
//           </div>

//           {/* Input Area */}
//           <div className="p-4 border-t border-slate-200 bg-gradient-to-r from-slate-50 to-slate-100">
//             <div className="flex gap-2">
//               <button
//                 onClick={startListening}
//                 className={`p-3 rounded-lg transition hover:scale-105 duration-200 ${
//                   isListening
//                     ? "bg-gradient-to-r from-red-500 to-pink-500 text-white animate-pulse"
//                     : "bg-gradient-to-r from-blue-100 to-teal-100 text-slate-900 hover:from-blue-200 hover:to-teal-200"
//                 }`}
//               >
//                 <Mic className="w-5 h-5" />
//               </button>
//               <input
//                 type="text"
//                 value={input}
//                 onChange={(e) => setInput(e.target.value)}
//                 onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
//                 placeholder={t("typeSomething")}
//                 className="flex-1 px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm transition"
//               />
//               <button
//                 onClick={() => handleSendMessage()}
//                 className="p-3 bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded-lg hover:shadow-lg transition hover:scale-105 duration-200"
//               >
//                 <Send className="w-5 h-5" />
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   )
// }






// 3
// "use client"

// import { useState, useRef, useEffect } from "react"
// import { Mic, Send, Volume2, Loader2 } from "lucide-react"

// export default function AIChatbot() {
//   const [input, setInput] = useState("")
//   const [messages, setMessages] = useState<{ role: "user" | "assistant"; content: string }[]>([])
//   const [loading, setLoading] = useState(false)
//   const messagesEndRef = useRef<HTMLDivElement>(null)

//   // Auto-scroll to bottom on new messages
//   useEffect(() => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
//   }, [messages])

//   // 🧠 Send message to Gemini backend
//   const handleSendMessage = async (messageText = input) => {
//     if (!messageText.trim()) return

//     const userMessage = messageText
//     setInput("")
//     setMessages((prev) => [...prev, { role: "user", content: userMessage }])
//     setLoading(true)

//     try {
//       const res = await fetch("/api/chat", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ message: userMessage }),
//       })
//       const data = await res.json()

//       const aiResponse = data.reply || "Sorry, I didn’t understand that."

//       setMessages((prev) => [...prev, { role: "assistant", content: aiResponse }])

//       // 🔊 Speak the AI response using Gemini TTS
//       await playTTS(aiResponse)
//     } catch (err) {
//       console.error("Chat error:", err)
//     } finally {
//       setLoading(false)
//     }
//   }

//   // 🎙️ Handle voice input (Speech-to-Text)
//   const handleVoiceInput = () => {
//     if (!("webkitSpeechRecognition" in window) && !("SpeechRecognition" in window)) {
//       alert("Speech recognition is not supported in this browser.")
//       return
//     }

// const recognition = new ((window as any).SpeechRecognition || (window as any).webkitSpeechRecognition)()
//     recognition.continuous = false
//     recognition.interimResults = false
//     recognition.lang = "en-IN"

//     recognition.start()
//     setLoading(true)
    

//     recognition.onresult = async (event: any) => {
//       const voiceText = event.results?.[0]?.[0]?.transcript || ""
//       setInput(voiceText)
//       await handleSendMessage(voiceText)
//     }

//     recognition.onerror = (err: any) => {
//       console.error("Voice input error:", err)
//       setLoading(false)
//     }

//     recognition.onend = () => setLoading(false)
//   }

//   // 🔈 Play text via Gemini Text-to-Speech API
//   const playTTS = async (text: string) => {
//     try {
//       const res = await fetch("/api/tts", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ text }),
//       })
//       const data = await res.json()

//       if (data.audioContent) {
//         const audio = new Audio("data:audio/mp3;base64," + data.audioContent)
//         audio.play()
//       } else {
//         console.warn("No audioContent returned.")
//       }
//     } catch (err) {
//       console.error("TTS playback error:", err)
//     }
//   }

//   return (
//     <div className="flex flex-col w-full max-w-md mx-auto bg-white shadow-lg rounded-2xl p-4 border border-gray-200">
//       <h2 className="text-xl font-semibold text-center mb-2 text-blue-600">AI Voice Assistant 🤖</h2>

//       {/* Chat Display */}
//       <div className="flex-1 overflow-y-auto max-h-[400px] mb-3 p-2 border border-gray-100 rounded-md bg-gray-50">
//         {messages.length === 0 && (
//           <p className="text-center text-gray-400 mt-8">Start talking or type a message below</p>
//         )}
//         {messages.map((msg, idx) => (
//           <div
//             key={idx}
//             className={`my-2 p-2 rounded-lg max-w-[80%] ${
//               msg.role === "user" ? "bg-blue-100 self-end ml-auto" : "bg-gray-200 mr-auto"
//             }`}
//           >
//             {msg.content}
//           </div>
//         ))}
//         <div ref={messagesEndRef} />
//       </div>

//       {/* Input Controls */}
//       <div className="flex items-center gap-2">
//         <button
//           onClick={handleVoiceInput}
//           disabled={loading}
//           className="p-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full"
//         >
//           <Mic size={20} />
//         </button>

//         <input
//           type="text"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           placeholder="Type or speak your message..."
//           className="flex-1 p-2 border rounded-md outline-none focus:ring focus:ring-blue-200"
//         />

//         <button
//           onClick={() => handleSendMessage()}
//           disabled={loading}
//           className="p-2 bg-green-500 hover:bg-green-600 text-white rounded-full"
//         >
//           {loading ? <Loader2 className="animate-spin" size={18} /> : <Send size={18} />}
//         </button>
//       </div>
//     </div>
//   )
// }
