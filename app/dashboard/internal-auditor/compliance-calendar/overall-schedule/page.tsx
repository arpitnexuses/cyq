import { InternalAuditorDashboardHeader } from "@/components/internal-auditor-dashboard-header"
import { InternalAuditorSidebar } from "@/components/internal-auditor-sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from "@/components/ui/calendar"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, CalendarIcon, Clock, CheckCircle, AlertTriangle } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function OverallSchedulePage() {
  // Current date for the calendar
  const date = new Date()

  return (
    <div className="flex min-h-screen bg-slate-50">
      <InternalAuditorSidebar />
      <div className="flex-1 flex flex-col">
        <InternalAuditorDashboardHeader />
        <main className="flex-1 p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Overall Schedule</h1>
              <p className="text-muted-foreground">Calendar timeline of all audit activities</p>
            </div>
            <div className="flex items-center gap-4">
              <Select defaultValue="all">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filter by audit" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Audits</SelectItem>
                  <SelectItem value="financial">Financial Compliance</SelectItem>
                  <SelectItem value="it">IT Security</SelectItem>
                  <SelectItem value="operational">Operational</SelectItem>
                </SelectContent>
              </Select>
              <Button>Add Event</Button>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-12">
            {/* Calendar */}
            <Card className="md:col-span-8">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Calendar Timeline</CardTitle>
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="icon">
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon">
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <CardDescription>May 2025</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="p-2 border rounded-md">
                  <Calendar mode="single" selected={date} className="rounded-md" />
                </div>

                <div className="mt-6 space-y-2">
                  <h3 className="text-sm font-medium">Legend</h3>
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                      <span className="text-sm">Planned</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                      <span className="text-sm">Completed</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-amber-500 mr-2"></div>
                      <span className="text-sm">In Progress</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                      <span className="text-sm">Delayed</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Events for selected date */}
            <Card className="md:col-span-4">
              <CardHeader>
                <CardTitle>Events for May 19, 2025</CardTitle>
                <CardDescription>Planned vs Actual activities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      id: 1,
                      title: "IT Security Control Review",
                      time: "10:00 AM - 12:00 PM",
                      status: "Completed",
                      type: "Planned",
                    },
                    {
                      id: 2,
                      title: "Financial Compliance Meeting",
                      time: "2:00 PM - 3:30 PM",
                      status: "In Progress",
                      type: "Planned",
                    },
                    {
                      id: 3,
                      title: "Evidence Collection Deadline",
                      time: "5:00 PM",
                      status: "Upcoming",
                      type: "Planned",
                    },
                    {
                      id: 4,
                      title: "Unplanned Vendor Review",
                      time: "3:45 PM - 4:30 PM",
                      status: "Added",
                      type: "Actual",
                    },
                  ].map((event) => (
                    <div key={event.id} className="flex items-start space-x-3 p-3 border rounded-md">
                      {event.status === "Completed" ? (
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      ) : event.status === "In Progress" ? (
                        <Clock className="h-5 w-5 text-amber-500 mt-0.5" />
                      ) : event.status === "Upcoming" ? (
                        <CalendarIcon className="h-5 w-5 text-blue-500 mt-0.5" />
                      ) : (
                        <AlertTriangle className="h-5 w-5 text-purple-500 mt-0.5" />
                      )}
                      <div className="flex-1">
                        <div className="font-medium">{event.title}</div>
                        <div className="text-sm text-muted-foreground">{event.time}</div>
                        <div className="flex items-center mt-1">
                          <Badge variant={event.type === "Planned" ? "outline" : "secondary"} className="text-xs">
                            {event.type}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}
