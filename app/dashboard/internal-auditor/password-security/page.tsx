import { InternalAuditorDashboardHeader } from "@/components/internal-auditor-dashboard-header"
import { InternalAuditorSidebar } from "@/components/internal-auditor-sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Shield, AlertTriangle, CheckCircle } from "lucide-react"

export default function PasswordSecurityPage() {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <InternalAuditorSidebar />
      <div className="flex-1 flex flex-col">
        <InternalAuditorDashboardHeader />
        <main className="flex-1 p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Password Security</h1>
              <p className="text-muted-foreground">Manage your password and security settings</p>
            </div>
          </div>

          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Change Password</CardTitle>
                <CardDescription>Update your password to maintain account security</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="current-password">Current Password</Label>
                  <Input id="current-password" type="password" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="new-password">New Password</Label>
                  <Input id="new-password" type="password" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="confirm-password">Confirm New Password</Label>
                  <Input id="confirm-password" type="password" />
                </div>

                <div className="bg-slate-100 p-3 rounded-md space-y-2">
                  <p className="text-sm font-medium">Password Requirements:</p>
                  <ul className="text-sm space-y-1">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      At least 8 characters long
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Contains uppercase letters
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Contains lowercase letters
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Contains numbers
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Contains special characters
                    </li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter>
                <Button>Update Password</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Two-Factor Authentication</CardTitle>
                <CardDescription>Add an extra layer of security to your account</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Alert>
                  <Shield className="h-4 w-4" />
                  <AlertTitle>Enhanced Security</AlertTitle>
                  <AlertDescription>
                    Two-factor authentication adds an additional layer of security to your account by requiring more
                    than just a password to sign in.
                  </AlertDescription>
                </Alert>

                <div className="flex items-center justify-between p-4 border rounded-md">
                  <div>
                    <h3 className="font-medium">Authenticator App</h3>
                    <p className="text-sm text-muted-foreground">
                      Use an authenticator app to generate verification codes
                    </p>
                  </div>
                  <Button variant="outline">Setup</Button>
                </div>

                <div className="flex items-center justify-between p-4 border rounded-md">
                  <div>
                    <h3 className="font-medium">SMS Verification</h3>
                    <p className="text-sm text-muted-foreground">Receive verification codes via SMS</p>
                  </div>
                  <Button variant="outline">Setup</Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Security Activity</CardTitle>
                <CardDescription>Recent security events for your account</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      event: "Password changed",
                      date: "May 15, 2025",
                      time: "10:23 AM",
                      location: "New York, USA",
                      device: "Windows 11 - Chrome",
                    },
                    {
                      event: "Successful login",
                      date: "May 15, 2025",
                      time: "09:45 AM",
                      location: "New York, USA",
                      device: "Windows 11 - Chrome",
                    },
                    {
                      event: "Failed login attempt",
                      date: "May 14, 2025",
                      time: "08:12 PM",
                      location: "Chicago, USA",
                      device: "Unknown",
                      suspicious: true,
                    },
                  ].map((activity, index) => (
                    <div key={index} className="flex items-start space-x-3 p-3 border rounded-md">
                      {activity.suspicious ? (
                        <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5" />
                      ) : (
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      )}
                      <div>
                        <div className="font-medium">{activity.event}</div>
                        <div className="text-sm text-muted-foreground">
                          {activity.date} at {activity.time} • {activity.location}
                        </div>
                        <div className="text-sm text-muted-foreground">Device: {activity.device}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline">View All Activity</Button>
              </CardFooter>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}
