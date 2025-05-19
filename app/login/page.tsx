"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Loader2 } from "lucide-react"
import Link from "next/link"

export default function LoginPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate login process
    setTimeout(() => {
      setIsLoading(false)
      router.push("/dashboard/internal-auditor")
    }, 1500)
  }

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left side - Hero section */}
      <div className="relative w-full md:w-3/5 bg-gradient-to-br from-amber-900/90 to-amber-700/90">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: "url('/placeholder-maxik.png')",
            backgroundBlendMode: "multiply",
          }}
        ></div>

        <div className="relative z-20 flex flex-col justify-center h-full px-8 py-12 md:px-16 md:py-0 text-white">
          <div className="mb-4">
            <Button variant="outline" size="sm" className="text-white border-white hover:bg-white/10 hover:text-white">
              Get in touch
            </Button>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            Let&apos;s Turn Your <br />
            Audit Process Into a<br />
            <span className="text-amber-300">Five-Star Asset</span>
          </h1>
          <p className="text-lg md:text-xl max-w-xl mb-6">
            Whether you need a rapid audit, a proposal, or simply have a question, our audit-trained team is ready 24 /
            7.
          </p>
          <p className="text-lg">We typically respond within 24 hours.</p>
        </div>
      </div>

      {/* Right side - Login form */}
      <div className="w-full md:w-2/5 flex items-center justify-center p-8 bg-slate-50">
        <Card className="w-full max-w-md border-none shadow-xl">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-center">Welcome Back</CardTitle>
            <CardDescription className="text-center">Enter your credentials to access your account</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="auditor@company.com"
                  defaultValue="auditor@company.com"
                  required
                  className="h-11"
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>
                  <Link href="#" className="text-sm text-amber-700 hover:text-amber-900">
                    Forgot password?
                  </Link>
                </div>
                <Input id="password" type="password" defaultValue="password123" required className="h-11" />
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="remember" />
                <label
                  htmlFor="remember"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Remember me
                </label>
              </div>
              <Button type="submit" className="w-full h-11 bg-amber-700 hover:bg-amber-800" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Signing in...
                  </>
                ) : (
                  "Sign in"
                )}
              </Button>
            </form>
            <div className="mt-6 p-4 bg-amber-50 rounded-md border border-amber-100">
              <h3 className="text-sm font-medium mb-2 text-amber-800">Demo Credentials</h3>
              <div className="grid grid-cols-2 gap-1 text-sm">
                <div className="text-amber-700">Email:</div>
                <div>auditor@company.com</div>
                <div className="text-amber-700">Password:</div>
                <div>password123</div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <div className="text-sm text-center text-muted-foreground">
              Don&apos;t have an account?{" "}
              <Link href="#" className="text-amber-700 hover:text-amber-900 font-medium">
                Create account
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
