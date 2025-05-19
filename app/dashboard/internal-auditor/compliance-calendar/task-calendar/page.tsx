import { InternalAuditorDashboardHeader } from "@/components/internal-auditor-dashboard-header"
import { InternalAuditorSidebar } from "@/components/internal-auditor-sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search, Filter, Bell } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function TaskCalendarPage() {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <InternalAuditorSidebar />
      <div className="flex-1 flex flex-col">
        <InternalAuditorDashboardHeader />
        <main className="flex-1 p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Task/Compliance Calendar</h1>
              <p className="text-muted-foreground">Compliance questions and frequency-based tasks</p>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline">
                <Bell className="h-4 w-4 mr-2" />
                View Notifications
              </Button>
              <Button>Add Task</Button>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center space-y-2 md:space-y-0 md:space-x-2 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search tasks..." className="pl-8" />
            </div>
            <Select defaultValue="all">
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder="Frequency" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Frequencies</SelectItem>
                <SelectItem value="daily">Daily</SelectItem>
                <SelectItem value="weekly">Weekly</SelectItem>
                <SelectItem value="monthly">Monthly</SelectItem>
                <SelectItem value="quarterly">Quarterly</SelectItem>
                <SelectItem value="annually">Annually</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
          </div>

          <Tabs defaultValue="upcoming">
            <TabsList>
              <TabsTrigger value="upcoming">Upcoming Tasks</TabsTrigger>
              <TabsTrigger value="compliance">Compliance Questions</TabsTrigger>
              <TabsTrigger value="frequency">Frequency View</TabsTrigger>
              <TabsTrigger value="notifications">Notifications</TabsTrigger>
            </TabsList>
            <TabsContent value="upcoming" className="space-y-4 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Upcoming Tasks</CardTitle>
                  <CardDescription>Tasks due in the next 30 days</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        id: 1,
                        title: "Review access control logs",
                        compliance: "ISO 27001 A.9.2.3",
                        dueDate: "May 22, 2025",
                        frequency: "Monthly",
                        status: "Upcoming",
                      },
                      {
                        id: 2,
                        title: "Verify backup integrity",
                        compliance: "ISO 27001 A.12.3.1",
                        dueDate: "May 25, 2025",
                        frequency: "Weekly",
                        status: "Upcoming",
                      },
                      {
                        id: 3,
                        title: "Conduct security awareness training",
                        compliance: "ISO 27001 A.7.2.2",
                        dueDate: "May 30, 2025",
                        frequency: "Quarterly",
                        status: "Upcoming",
                      },
                      {
                        id: 4,
                        title: "Review incident response plan",
                        compliance: "ISO 27001 A.16.1.1",
                        dueDate: "June 5, 2025",
                        frequency: "Quarterly",
                        status: "Upcoming",
                      },
                      {
                        id: 5,
                        title: "Perform vulnerability assessment",
                        compliance: "ISO 27001 A.12.6.1",
                        dueDate: "June 10, 2025",
                        frequency: "Monthly",
                        status: "Upcoming",
                      },
                    ].map((task) => (
                      <div key={task.id} className="flex items-center justify-between p-4 border rounded-md">
                        <div>
                          <div className="font-medium">{task.title}</div>
                          <div className="text-sm text-muted-foreground">Compliance: {task.compliance}</div>
                          <div className="flex items-center mt-1">
                            <Badge variant="outline" className="mr-2">
                              {task.frequency}
                            </Badge>
                            <Badge variant="outline">{task.status}</Badge>
                          </div>
                        </div>
                        <div className="text-sm text-muted-foreground">Due Date: {task.dueDate}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            {/* Additional tabs content for compliance, frequency, and notifications can be added here */}
          </Tabs>
        </main>
      </div>
    </div>
  )
}
