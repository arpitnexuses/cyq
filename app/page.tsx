import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50">
      <div className="w-full max-w-md px-4">
        <Card className="border-none shadow-lg">
          <CardHeader className="space-y-1 text-center">
            <CardTitle className="text-2xl font-bold">Audit Management System</CardTitle>
            <CardDescription>Sign in to access the audit management platform</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid grid-cols-2 gap-6">
              <Button asChild variant="outline" className="h-24 flex flex-col gap-1">
                <Link href="/login/internal-auditor">
                  <span className="text-sm font-medium">Internal Auditor</span>
                  <ArrowRight className="h-4 w-4 mt-2" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="h-24 flex flex-col gap-1">
                <Link href="/login">
                  <span className="text-sm font-medium">External Auditor</span>
                  <ArrowRight className="h-4 w-4 mt-2" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="h-24 flex flex-col gap-1">
                <Link href="/login">
                  <span className="text-sm font-medium">Participants / Auditees</span>
                  <ArrowRight className="h-4 w-4 mt-2" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="h-24 flex flex-col gap-1">
                <Link href="/login">
                  <span className="text-sm font-medium">HOD</span>
                  <ArrowRight className="h-4 w-4 mt-2" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="h-24 flex flex-col gap-1">
                <Link href="/login">
                  <span className="text-sm font-medium">Executive Management</span>
                  <ArrowRight className="h-4 w-4 mt-2" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="h-24 flex flex-col gap-1">
                <Link href="/login">
                  <span className="text-sm font-medium">Administrator</span>
                  <ArrowRight className="h-4 w-4 mt-2" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="h-24 flex flex-col gap-1">
                <Link href="/login">
                  <span className="text-sm font-medium">3rd Party</span>
                  <ArrowRight className="h-4 w-4 mt-2" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="h-24 flex flex-col gap-1">
                <Link href="/login">
                  <span className="text-sm font-medium">Posture</span>
                  <ArrowRight className="h-4 w-4 mt-2" />
                </Link>
              </Button>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col">
            <p className="text-xs text-muted-foreground text-center mt-2">
              Select your role to continue to the login page
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
