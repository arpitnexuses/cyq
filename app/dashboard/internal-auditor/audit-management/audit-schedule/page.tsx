import { InternalAuditorDashboardHeader } from "@/components/internal-auditor-dashboard-header"
import { InternalAuditorSidebar } from "@/components/internal-auditor-sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarDays, Download, Filter, Plus, Search } from "lucide-react"

export default function AuditSchedulePage() {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <InternalAuditorSidebar />
      <div className="flex-1 flex flex-col">
        <InternalAuditorDashboardHeader />
        <main className="flex-1 p-6">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold tracking-tight">Audit Schedule</h1>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
              <Button size="sm">
                <Plus className="h-4 w-4 mr-2" />
                Schedule Audit
              </Button>
            </div>
          </div>

          <Tabs defaultValue="calendar" className="w-full">
            <TabsList className="mb-4">
              <TabsTrigger value="calendar">Calendar View</TabsTrigger>
              <TabsTrigger value="list">List View</TabsTrigger>
            </TabsList>
            <TabsContent value="calendar" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CalendarDays className="h-5 w-5 mr-2" />
                    Audit Calendar
                  </CardTitle>
                  <CardDescription>View and manage scheduled audits</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-2/3">
                      <Calendar mode="single" className="rounded-md border" />
                    </div>
                    <div className="md:w-1/3">
                      <h3 className="font-medium mb-3">Upcoming Audits</h3>
                      <div className="space-y-3">
                        {[
                          {
                            title: "Annual Financial Compliance",
                            date: "May 30, 2025",
                            status: "Scheduled",
                            type: "Internal",
                          },
                          {
                            title: "IT Security Assessment",
                            date: "June 15, 2025",
                            status: "Scheduled",
                            type: "External",
                          },
                          {
                            title: "Operational Process Review",
                            date: "July 10, 2025",
                            status: "Planning",
                            type: "Internal",
                          },
                        ].map((audit, index) => (
                          <div key={index} className="p-3 border rounded-md bg-white">
                            <div className="font-medium">{audit.title}</div>
                            <div className="text-sm text-muted-foreground mb-2">{audit.date}</div>
                            <div className="flex gap-2">
                              <Badge variant="outline">{audit.status}</Badge>
                              <Badge variant={audit.type === "External" ? "secondary" : "default"}>{audit.type}</Badge>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="list">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Scheduled Audits</CardTitle>
                    <div className="relative w-64">
                      <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                      <input
                        type="text"
                        placeholder="Search audits..."
                        className="pl-8 h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                      />
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="rounded-md border">
                    <div className="grid grid-cols-5 bg-muted px-4 py-2 text-sm font-medium">
                      <div>Audit Name</div>
                      <div>Type</div>
                      <div>Start Date</div>
                      <div>End Date</div>
                      <div>Status</div>
                    </div>
                    {[
                      {
                        name: "Annual Financial Compliance",
                        type: "Internal",
                        startDate: "May 30, 2025",
                        endDate: "June 15, 2025",
                        status: "Scheduled",
                      },
                      {
                        name: "IT Security Assessment",
                        type: "External",
                        startDate: "June 15, 2025",
                        endDate: "July 1, 2025",
                        status: "Scheduled",
                      },
                      {
                        name: "Operational Process Review",
                        type: "Internal",
                        startDate: "July 10, 2025",
                        endDate: "July 25, 2025",
                        status: "Planning",
                      },
                      {
                        name: "Vendor Compliance Audit",
                        type: "External",
                        startDate: "August 5, 2025",
                        endDate: "August 20, 2025",
                        status: "Planning",
                      },
                      {
                        name: "HR Policy Compliance",
                        type: "Internal",
                        startDate: "September 1, 2025",
                        endDate: "September 15, 2025",
                        status: "Draft",
                      },
                    ].map((audit, index) => (
                      <div
                        key={index}
                        className="grid grid-cols-5 px-4 py-3 text-sm border-t hover:bg-muted/50 cursor-pointer"
                      >
                        <div className="font-medium">{audit.name}</div>
                        <div>
                          <Badge variant={audit.type === "External" ? "secondary" : "default"} className="font-normal">
                            {audit.type}
                          </Badge>
                        </div>
                        <div>{audit.startDate}</div>
                        <div>{audit.endDate}</div>
                        <div>
                          <Badge
                            variant="outline"
                            className={
                              audit.status === "Scheduled"
                                ? "bg-green-50 text-green-700 border-green-200"
                                : audit.status === "Planning"
                                  ? "bg-blue-50 text-blue-700 border-blue-200"
                                  : "bg-gray-50 text-gray-700 border-gray-200"
                            }
                          >
                            {audit.status}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}
