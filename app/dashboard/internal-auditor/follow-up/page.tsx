import { InternalAuditorDashboardHeader } from "@/components/internal-auditor-dashboard-header"
import { InternalAuditorSidebar } from "@/components/internal-auditor-sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, CheckCircle, Clock, Calendar, ArrowRight } from "lucide-react"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function FollowUpPage() {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <InternalAuditorSidebar />
      <div className="flex-1 flex flex-col">
        <InternalAuditorDashboardHeader />
        <main className="flex-1 p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Follow-Up</h1>
              <p className="text-muted-foreground">Track and manage findings and remediation actions</p>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline">Export Tracking Report</Button>
              <Button>Send Reminders</Button>
            </div>
          </div>

          {/* Findings Summary */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Findings Summary</CardTitle>
              <CardDescription>Status of findings and remediation actions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="flex flex-col items-center p-4 bg-slate-100 rounded-lg">
                  <div className="text-3xl font-bold">24</div>
                  <div className="text-sm text-muted-foreground">Total Findings</div>
                </div>
                <div className="flex flex-col items-center p-4 bg-green-50 rounded-lg">
                  <div className="text-3xl font-bold text-green-600">10</div>
                  <div className="text-sm text-muted-foreground">Remediated</div>
                </div>
                <div className="flex flex-col items-center p-4 bg-amber-50 rounded-lg">
                  <div className="text-3xl font-bold text-amber-600">8</div>
                  <div className="text-sm text-muted-foreground">In Progress</div>
                </div>
                <div className="flex flex-col items-center p-4 bg-red-50 rounded-lg">
                  <div className="text-3xl font-bold text-red-600">6</div>
                  <div className="text-sm text-muted-foreground">Overdue</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="tracking">
            <TabsList>
              <TabsTrigger value="tracking">Tracking of Findings</TabsTrigger>
              <TabsTrigger value="rca">Root Cause Analysis</TabsTrigger>
              <TabsTrigger value="actions">Corrective Actions</TabsTrigger>
              <TabsTrigger value="timeline">Timeline</TabsTrigger>
            </TabsList>
            <TabsContent value="tracking" className="space-y-4 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Findings Tracking</CardTitle>
                  <CardDescription>Monitor the status of audit findings and remediation actions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {[
                      {
                        id: 1,
                        title: "Inadequate password policy enforcement",
                        severity: "Critical",
                        status: "In Progress",
                        progress: 45,
                        dueDate: "June 15, 2025",
                        owner: {
                          name: "John D.",
                          avatar: "/abstract-user-avatar.png",
                        },
                      },
                      {
                        id: 2,
                        title: "Missing access review documentation",
                        severity: "High",
                        status: "Overdue",
                        progress: 20,
                        dueDate: "May 10, 2025",
                        owner: {
                          name: "Sarah K.",
                          avatar: "/abstract-user-avatar.png",
                        },
                      },
                      {
                        id: 3,
                        title: "Incomplete vendor risk assessment",
                        severity: "Medium",
                        status: "Remediated",
                        progress: 100,
                        dueDate: "May 5, 2025",
                        owner: {
                          name: "Michael R.",
                          avatar: "/abstract-user-avatar.png",
                        },
                      },
                      {
                        id: 4,
                        title: "Outdated business continuity plan",
                        severity: "High",
                        status: "In Progress",
                        progress: 75,
                        dueDate: "June 30, 2025",
                        owner: {
                          name: "Lisa T.",
                          avatar: "/abstract-user-avatar.png",
                        },
                      },
                    ].map((finding) => (
                      <div key={finding.id} className="border rounded-md p-4">
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                          <div>
                            <h3 className="font-medium">{finding.title}</h3>
                            <div className="flex items-center mt-1">
                              <Calendar className="h-4 w-4 mr-1 text-muted-foreground" />
                              <span className="text-sm text-muted-foreground">Due: {finding.dueDate}</span>
                            </div>
                          </div>
                          <div className="flex items-center mt-2 md:mt-0 space-x-2">
                            <Badge
                              variant={
                                finding.severity === "Critical"
                                  ? "destructive"
                                  : finding.severity === "High"
                                    ? "default"
                                    : "secondary"
                              }
                            >
                              {finding.severity}
                            </Badge>
                            <Badge
                              variant={
                                finding.status === "Remediated"
                                  ? "outline"
                                  : finding.status === "In Progress"
                                    ? "secondary"
                                    : "destructive"
                              }
                              className="flex items-center"
                            >
                              {finding.status === "Remediated" && <CheckCircle className="h-3 w-3 mr-1" />}
                              {finding.status === "Overdue" && <AlertTriangle className="h-3 w-3 mr-1" />}
                              {finding.status === "In Progress" && <Clock className="h-3 w-3 mr-1" />}
                              {finding.status}
                            </Badge>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 mb-4">
                          <Progress value={finding.progress} className="h-2 flex-1" />
                          <span className="text-sm font-medium">{finding.progress}%</span>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <Avatar className="h-6 w-6">
                              <AvatarImage src={finding.owner.avatar || "/placeholder.svg"} alt={finding.owner.name} />
                              <AvatarFallback>{finding.owner.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <span className="text-sm">Assigned to: {finding.owner.name}</span>
                          </div>
                          <Button variant="ghost" size="sm" className="gap-1">
                            View Details
                            <ArrowRight className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="rca" className="mt-6">
              {/* Root Cause Analysis content */}
            </TabsContent>
            <TabsContent value="actions" className="mt-6">
              {/* Corrective Actions content */}
            </TabsContent>
            <TabsContent value="timeline" className="mt-6">
              {/* Timeline content */}
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}
