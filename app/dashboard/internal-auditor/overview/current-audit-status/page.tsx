import { InternalAuditorDashboardHeader } from "@/components/internal-auditor-dashboard-header"
import { InternalAuditorSidebar } from "@/components/internal-auditor-sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Filter, Calendar, Clock, CheckCircle } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function CurrentAuditStatusPage() {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <InternalAuditorSidebar />
      <div className="flex-1 flex flex-col">
        <InternalAuditorDashboardHeader />
        <main className="flex-1 p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Current Audit Status</h1>
              <p className="text-muted-foreground">Overview of active and planned audits</p>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline">
                <Calendar className="h-4 w-4 mr-2" />
                View Calendar
              </Button>
              <Button>New Audit</Button>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center space-y-2 md:space-y-0 md:space-x-2 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search audits..." className="pl-8" />
            </div>
            <Select defaultValue="all">
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="planning">Planning</SelectItem>
                <SelectItem value="in-progress">In Progress</SelectItem>
                <SelectItem value="review">Review</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
          </div>

          {/* Summary Cards */}
          <div className="grid gap-4 md:grid-cols-4 mb-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Total Audits</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12</div>
                <p className="text-xs text-muted-foreground mt-1">For current year</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">In Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">5</div>
                <p className="text-xs text-muted-foreground mt-1">Active audits</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Completed</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">4</div>
                <p className="text-xs text-muted-foreground mt-1">This year</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Upcoming</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3</div>
                <p className="text-xs text-muted-foreground mt-1">Planned audits</p>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="active">
            <TabsList>
              <TabsTrigger value="active">Active Audits</TabsTrigger>
              <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
              <TabsTrigger value="completed">Completed</TabsTrigger>
              <TabsTrigger value="all">All Audits</TabsTrigger>
            </TabsList>
            <TabsContent value="active" className="space-y-4 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Active Audits</CardTitle>
                  <CardDescription>Currently ongoing audit engagements</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {[
                      {
                        id: 1,
                        name: "Annual Financial Compliance",
                        status: "In Progress",
                        progress: 65,
                        dueDate: "May 30, 2025",
                        priority: "High",
                        phase: "Evidence Collection",
                      },
                      {
                        id: 2,
                        name: "IT Security Assessment",
                        status: "In Progress",
                        progress: 42,
                        dueDate: "June 15, 2025",
                        priority: "Critical",
                        phase: "Planning",
                      },
                      {
                        id: 3,
                        name: "Operational Process Review",
                        status: "In Progress",
                        progress: 10,
                        dueDate: "July 10, 2025",
                        priority: "Medium",
                        phase: "Planning",
                      },
                      {
                        id: 4,
                        name: "Vendor Compliance Audit",
                        status: "In Progress",
                        progress: 78,
                        dueDate: "May 25, 2025",
                        priority: "High",
                        phase: "Review",
                      },
                      {
                        id: 5,
                        name: "HR Policy Compliance",
                        status: "Review",
                        progress: 90,
                        dueDate: "May 22, 2025",
                        priority: "Medium",
                        phase: "Reporting",
                      },
                    ].map((audit) => (
                      <div key={audit.id} className="flex flex-col space-y-2">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-medium">{audit.name}</div>
                            <div className="text-sm text-muted-foreground">Phase: {audit.phase}</div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge
                              variant={
                                audit.priority === "Critical"
                                  ? "destructive"
                                  : audit.priority === "High"
                                    ? "default"
                                    : "secondary"
                              }
                            >
                              {audit.priority}
                            </Badge>
                            <div className="flex items-center text-sm">
                              <Clock className="h-3 w-3 mr-1" />
                              Due: {audit.dueDate}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Progress value={audit.progress} className="h-2 flex-1" />
                          <span className="text-sm font-medium">{audit.progress}%</span>
                        </div>
                        <div className="flex justify-end">
                          <Button variant="outline" size="sm">
                            View Details
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="upcoming" className="mt-6">
              {/* Upcoming audits content */}
              <Card>
                <CardHeader>
                  <CardTitle>Upcoming Audits</CardTitle>
                  <CardDescription>Planned audit engagements</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        id: 1,
                        name: "Q3 Financial Review",
                        status: "Planned",
                        startDate: "July 15, 2025",
                        endDate: "August 30, 2025",
                        priority: "High",
                      },
                      {
                        id: 2,
                        name: "Data Privacy Assessment",
                        status: "Planned",
                        startDate: "August 1, 2025",
                        endDate: "September 15, 2025",
                        priority: "Medium",
                      },
                      {
                        id: 3,
                        name: "Cloud Security Review",
                        status: "Planned",
                        startDate: "September 10, 2025",
                        endDate: "October 20, 2025",
                        priority: "High",
                      },
                    ].map((audit) => (
                      <div key={audit.id} className="flex items-center justify-between p-4 border rounded-md">
                        <div>
                          <div className="font-medium">{audit.name}</div>
                          <div className="text-sm text-muted-foreground">
                            {audit.startDate} - {audit.endDate}
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant={audit.priority === "High" ? "default" : "secondary"}>{audit.priority}</Badge>
                          <Badge variant="outline">{audit.status}</Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="completed" className="mt-6">
              {/* Completed audits content */}
              <Card>
                <CardHeader>
                  <CardTitle>Completed Audits</CardTitle>
                  <CardDescription>Recently completed audit engagements</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        id: 1,
                        name: "Q1 Financial Compliance",
                        completionDate: "March 30, 2025",
                        findings: 12,
                        status: "Completed",
                      },
                      {
                        id: 2,
                        name: "Annual Security Review",
                        completionDate: "February 15, 2025",
                        findings: 8,
                        status: "Completed",
                      },
                      {
                        id: 3,
                        name: "Regulatory Compliance Check",
                        completionDate: "January 20, 2025",
                        findings: 5,
                        status: "Completed",
                      },
                      {
                        id: 4,
                        name: "Vendor Risk Assessment",
                        completionDate: "April 10, 2025",
                        findings: 7,
                        status: "Completed",
                      },
                    ].map((audit) => (
                      <div key={audit.id} className="flex items-center justify-between p-4 border rounded-md">
                        <div>
                          <div className="font-medium">{audit.name}</div>
                          <div className="text-sm text-muted-foreground">Completed: {audit.completionDate}</div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="text-sm">
                            <span className="font-medium">{audit.findings}</span> findings
                          </div>
                          <Badge variant="outline" className="flex items-center">
                            <CheckCircle className="h-3 w-3 mr-1" />
                            {audit.status}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="all" className="mt-6">
              {/* All audits content */}
              <Card>
                <CardHeader>
                  <CardTitle>All Audits</CardTitle>
                  <CardDescription>Complete list of all audits</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>All audits would be displayed here</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}
