import { InternalAuditorDashboardHeader } from "@/components/internal-auditor-dashboard-header"
import { InternalAuditorSidebar } from "@/components/internal-auditor-sidebar"
import { DashboardMetrics } from "@/components/dashboard-metrics"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export default function InternalAuditorDashboard() {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <InternalAuditorSidebar />
      <div className="flex-1 flex flex-col ml-64">
        <InternalAuditorDashboardHeader />
        <main className="flex-1 p-6">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold tracking-tight">My Dashboard</h1>
            <div className="flex items-center gap-4">
              <button className="px-4 py-2 bg-white border rounded-md shadow-sm hover:bg-gray-50">
                Export Reports
              </button>
              <button className="px-4 py-2 bg-primary text-white rounded-md shadow-sm hover:bg-primary/90">
                New Audit
              </button>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6">
            {[
              { title: "Active Audits", value: "12", change: "+2", direction: "up" },
              { title: "Compliance Score", value: "87%", change: "+4%", direction: "up" },
              { title: "Pending Reviews", value: "8", change: "+3", direction: "down" },
              { title: "Compliance Issues", value: "4", change: "-2", direction: "up" },
            ].map((metric, i) => (
              <Card key={i}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{metric.value}</div>
                  <p className="text-xs text-muted-foreground flex items-center mt-1">
                    <span className={`mr-1 text-${metric.direction === "up" ? "green" : "red"}-500`}>
                      {metric.direction === "up" ? "↑" : "↓"}
                    </span>
                    <span className={`text-${metric.direction === "up" ? "green" : "red"}-500 font-medium`}>
                      {metric.change}
                    </span>
                    {" from last month"}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Vertical Bar Charts */}
          <DashboardMetrics />

          <div className="grid gap-6 md:grid-cols-2 mt-6">
            {/* Current Audit Status */}
            <Card>
              <CardHeader>
                <CardTitle>Current Audit Status</CardTitle>
                <CardDescription>Overview of active audits</CardDescription>
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
                    },
                    {
                      id: 2,
                      name: "IT Security Assessment",
                      status: "In Progress",
                      progress: 42,
                      dueDate: "June 15, 2025",
                      priority: "Critical",
                    },
                    {
                      id: 3,
                      name: "Operational Process Review",
                      status: "Planning",
                      progress: 10,
                      dueDate: "July 10, 2025",
                      priority: "Medium",
                    },
                  ].map((audit) => (
                    <div key={audit.id} className="flex flex-col space-y-2">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium">{audit.name}</div>
                          <div className="text-sm text-muted-foreground">Due: {audit.dueDate}</div>
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
                          <Badge variant="outline">{audit.status}</Badge>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Progress value={audit.progress} className="h-2" />
                        <span className="text-sm font-medium">{audit.progress}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Upcoming Tasks */}
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Tasks</CardTitle>
                <CardDescription>Tasks due in the next 7 days</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      id: 1,
                      title: "Review financial statements for Q1",
                      audit: "Annual Financial Compliance",
                      dueDate: "May 22, 2025",
                    },
                    {
                      id: 2,
                      title: "Collect evidence for IT security controls",
                      audit: "IT Security Assessment",
                      dueDate: "May 24, 2025",
                    },
                    {
                      id: 3,
                      title: "Interview department heads for process review",
                      audit: "Operational Process Review",
                      dueDate: "May 28, 2025",
                    },
                    {
                      id: 4,
                      title: "Validate vendor compliance documentation",
                      audit: "Vendor Compliance Audit",
                      dueDate: "May 23, 2025",
                    },
                    {
                      id: 5,
                      title: "Review HR policy updates",
                      audit: "HR Policy Compliance",
                      dueDate: "May 21, 2025",
                    },
                  ].map((task) => (
                    <div key={task.id} className="flex items-center justify-between p-2 rounded-md hover:bg-accent">
                      <div>
                        <div className="font-medium">{task.title}</div>
                        <div className="text-sm text-muted-foreground">{task.audit}</div>
                      </div>
                      <Badge variant="outline">Due: {task.dueDate}</Badge>
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
