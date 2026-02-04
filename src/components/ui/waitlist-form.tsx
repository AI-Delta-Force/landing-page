"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

interface WaitlistFormProps {
  source: "managed" | "regional"
  showCity?: boolean
  showMessage?: boolean
}

export function WaitlistForm({ source, showCity, showMessage }: WaitlistFormProps) {
  const [email, setEmail] = useState("")
  const [city, setCity] = useState("")
  const [message, setMessage] = useState("")
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setErrorMessage("")

    if (!email || !email.includes("@")) {
      setStatus("error")
      setErrorMessage("Please enter a valid email address")
      return
    }

    // TODO: Submit to API endpoint
    void source
    void city
    void message
    setStatus("success")
    setEmail("")
    setCity("")
    setMessage("")
  }

  if (status === "success") {
    return (
      <div className="bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-center">
        <p className="text-white">Thanks! We&apos;ll be in touch soon.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <label className="sr-only" htmlFor="waitlist-email">Email address</label>
      <input
        id="waitlist-email"
        type="email"
        placeholder="Email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        aria-required="true"
        className={cn(
          "bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 w-full",
          "text-white placeholder:text-zinc-500",
          "focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-transparent"
        )}
      />
      {showCity && (
        <>
          <label className="sr-only" htmlFor="waitlist-city">City</label>
          <input
            id="waitlist-city"
            type="text"
            placeholder="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className={cn(
              "bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 w-full",
              "text-white placeholder:text-zinc-500",
              "focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-transparent"
            )}
          />
        </>
      )}
      {showMessage && (
        <>
          <label className="sr-only" htmlFor="waitlist-message">Message (optional)</label>
          <textarea
            id="waitlist-message"
            placeholder="Message (optional)"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={3}
            className={cn(
              "bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 w-full",
              "text-white placeholder:text-zinc-500",
              "focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-transparent",
              "resize-none"
            )}
          />
        </>
      )}
      {status === "error" && (
        <p className="text-red-400 text-sm" role="alert" aria-live="polite">{errorMessage}</p>
      )}
      <button
        type="submit"
        className="bg-white text-black font-medium rounded-lg px-6 py-3 hover:bg-zinc-200 active:bg-zinc-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
      >
        Join Waitlist
      </button>
    </form>
  )
}
