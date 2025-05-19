import { InternalAuditorDashboardHeader } from "@/components/internal-auditor-dashboard-header"
import { InternalAuditorSidebar } from "@/components/internal-auditor-sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search, Download, Filter, ArrowUpDown } from "lucide-react"

export default function TablePage() {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <InternalAuditorSidebar />
      <div className="flex-1 flex flex-col">
        <InternalAuditorDashboardHeader />
        <main className="flex-1 p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Audit Tables</h1>
              <p className="text-muted-foreground">Department-wise and due/overdue audit status</p>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline">
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
              <Button>Refresh Data</Button>
            </div>
          </div>

          <div className="flex items-center space-x-2 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search departments or audits..." className="pl-8" />
            </div>
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
          </div>

          <Tabs defaultValue="department">
            <TabsList>
              <TabsTrigger value="department">Department Wise</TabsTrigger>
              <TabsTrigger value="due">Due/Overdue</TabsTrigger>
            </TabsList>
            <TabsContent value="department" className="space-y-4 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Department Wise Audit Status</CardTitle>
                  <CardDescription>Open vs. total audits by department</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="rounded-md border">
                    <div className="grid grid-cols-12 bg-slate-50 p-4 text-sm font-medium text-muted-foreground">
                      <div className="col-span-4 flex items-center">
                        Department
                        <Button variant="ghost" size="icon" className="ml-2">
                          <ArrowUpDown className="h-3 w-3" />
                        </Button>
                      </div>
                      <div className="col-span-2 text-center">Open Audits</div>
                      <div className="col-span-2 text-center">Total Audits</div>
                      <div className="col-span-2 text-center">Completion Rate</div>
                      <div className="col-span-2 text-center">Status</div>
                    </div>
                    <div className="divide-y">
                      {[
                        { id: 1, department: "Information Technology", open: 3, total: 5, completionRate: 40 },
                        { id: 2, department: "Finance", open: 2, total: 4, completionRate: 50 },
                        { id: 3, department: "Human Resources", open: 1, total: 3, completionRate: 67 },
                        { id: 4, department: "Operations", open: 2, total: 3, completionRate: 33 },
                        { id: 5, department: "Legal & Compliance", open: 0, total: 2, completionRate: 100 },
                        { id: 6, department: "Sales & Marketing", open: 1, total: 2, completionRate: 50 },
                        { id: 7, department: "Research & Development", open: 2, total: 3, completionRate: 33 },
                        { id: 8, department: "Customer Service", open: 1, total: 2, completionRate: 50 },
                      ].map((dept) => (
                        <div key={dept.id} className="grid grid-cols-12 p-4 text-sm items-center">
                          <div className="col-span-4 font-medium">{dept.department}</div>
                          <div className="col-span-2 text-center">{dept.open}</div>
                          <div className="col-span-2 text-center">{dept.total}</div>
                          <div className="col-span-2 text-center">{dept.completionRate}%</div>
                          <div className="col-span-2 text-center">
                            <Badge
                              variant={
                                dept.completionRate === 100
                                  ? "outline"
                                  : dept.completionRate >= 50
                                    ? "secondary"
                                    : "default"
                              }
                            >
                              {dept.completionRate === 100
                                ? "Complete"
                                : dept.completionRate >= 50
                                  ? "In Progress"
                                  : "Attention Needed"}
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="due" className="space-y-4 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Due/Overdue Audits</CardTitle>
                  <CardDescription>Audits by due date status</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="rounded-md border">
                    <div className="grid grid-cols-12 bg-slate-50 p-4 text-sm font-medium text-muted-foreground">
                      <div className="col-span-3 flex items-center">
                        Audit Name
                        <Button variant="ghost" size="icon" className="ml-2">
                          <ArrowUpDown className="h-3 w-3" />
                        </Button>
                      </div>
                      <div className="col-span-2">Department</div>
                      <div className="col-span-2">Due Date</div>
                      <div className="col-span-2">Days Remaining</div>
                      <div className="col-span-2">Assigned To</div>
                      <div className="col-span-1 text-center">Status</div>
                    </div>
                    <div className="divide-y">
                      {[
                        {
                          id: 1,
                          name: "IT Security Assessment",
                          department: "Information Technology",
                          dueDate: "June 15, 2025",
                          daysRemaining: 27,
                          assignedTo: "John D.",
                          status: "On Track",
                        },
                        {
                          id: 2,
                          name: "Financial Controls Review",
                          department: "Finance",
                          dueDate: "May 30, 2025",
                          daysRemaining: 11,
                          assignedTo: "Sarah K.",
                          status: "At Risk",
                        },
                        {
                          id: 3,
                          name: "HR Policy Compliance",
                          department: "Human Resources",
                          dueDate: "May 22, 2025",
                          daysRemaining: 3,
                          assignedTo: "Michael R.",
                          status: "At Risk",
                        },
                        {
                          id: 4,
                          name: "Vendor Compliance Audit",
                          department: "Operations",
                          dueDate: "May 18, 2025",
                          daysRemaining: -1,
                          assignedTo: "Lisa T.",
                          status: "Overdue",
                        },
                        {
                          id: 5,
                          name: "Data Privacy Assessment",
                          department: "Legal & Compliance",
                          dueDate: "May 15, 2025",
                          daysRemaining: -4,
                          assignedTo: "David L.",
                          status: "Overdue",
                        },
                      ].map((audit) => (
                        <div key={audit.id} className="grid grid-cols-12 p-4 text-sm items-center">
                          <div className="col-span-3 font-medium">{audit.name}</div>
                          <div className="col-span-2">{audit.department}</div>
                          <div className="col-span-2">{audit.dueDate}</div>
                          <div className="col-span-2">
                            {audit.daysRemaining < 0
                              ? `${Math.abs(audit.daysRemaining)} days overdue`
                              : `${audit.daysRemaining} days left`}
                          </div>
                          <div className="col-span-2">{audit.assignedTo}</div>
                          <div className="col-span-1 text-center">
                            <Badge
                              variant={
                                audit.status === "On Track"
                                  ? "outline"
                                  : audit.status === "At Risk"
                                    ? "secondary"
                                    : "destructive"
                              }
                            >
                              {audit.status}
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
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
