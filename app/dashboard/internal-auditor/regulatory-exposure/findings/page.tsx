import { InternalAuditorDashboardHeader } from "@/components/internal-auditor-dashboard-header"
import { InternalAuditorSidebar } from "@/components/internal-auditor-sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search, Filter, Download, Plus, AlertTriangle, CheckCircle } from "lucide-react"

export default function FindingsPage() {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <InternalAuditorSidebar />
      <div className="flex-1 flex flex-col">
        <InternalAuditorDashboardHeader />
        <main className="flex-1 p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Findings</h1>
              <p className="text-muted-foreground">Review and manage audit findings</p>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline">
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                New Finding
              </Button>
            </div>
          </div>

          <div className="flex items-center space-x-2 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search findings..." className="pl-8" />
            </div>
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
          </div>

          <Tabs defaultValue="all">
            <TabsList>
              <TabsTrigger value="all">All Findings</TabsTrigger>
              <TabsTrigger value="open">Open</TabsTrigger>
              <TabsTrigger value="closed">Closed</TabsTrigger>
              <TabsTrigger value="critical">Critical</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="space-y-4 mt-6">
              <Card>
                <CardHeader className="px-6 py-4">
                  <div className="grid grid-cols-12 text-sm font-medium text-muted-foreground">
                    <div className="col-span-5">Finding</div>
                    <div className="col-span-2">Audit</div>
                    <div className="col-span-2">Department</div>
                    <div className="col-span-1">Severity</div>
                    <div className="col-span-2">Status</div>
                  </div>
                </CardHeader>
                <CardContent className="px-6 py-0">
                  <div className="divide-y">
                    {[
                      {
                        id: 1,
                        title: "Inadequate password policy enforcement",
                        description: "Password policy does not enforce complexity requirements",
                        audit: "IT Security Assessment",
                        department: "IT",
                        severity: "Critical",
                        status: "Open",
                      },
                      {
                        id: 2,
                        title: "Missing access review documentation",
                        description: "Quarterly access reviews not properly documented",
                        audit: "Access Control Audit",
                        department: "IT",
                        severity: "High",
                        status: "Open",
                      },
                      {
                        id: 3,
                        title: "Incomplete vendor risk assessment",
                        description: "Risk assessment for new vendors not completed",
                        audit: "Vendor Compliance",
                        department: "Procurement",
                        severity: "Medium",
                        status: "Open",
                      },
                      {
                        id: 4,
                        title: "Outdated business continuity plan",
                        description: "BCP not updated in the last 12 months",
                        audit: "Business Continuity",
                        department: "Operations",
                        severity: "High",
                        status: "Closed",
                      },
                      {
                        id: 5,
                        title: "Insufficient audit logging",
                        description: "System logs not retained for required period",
                        audit: "IT Security Assessment",
                        department: "IT",
                        severity: "High",
                        status: "Open",
                      },
                    ].map((finding) => (
                      <div key={finding.id} className="grid grid-cols-12 py-4 items-center">
                        <div className="col-span-5">
                          <div className="font-medium">{finding.title}</div>
                          <div className="text-sm text-muted-foreground">{finding.description}</div>
                        </div>
                        <div className="col-span-2 text-sm">{finding.audit}</div>
                        <div className="col-span-2 text-sm">{finding.department}</div>
                        <div className="col-span-1">
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
                        </div>
                        <div className="col-span-2 flex items-center">
                          {finding.status === "Open" ? (
                            <div className="flex items-center">
                              <AlertTriangle className="h-4 w-4 text-amber-500 mr-2" />
                              <span>Open</span>
                            </div>
                          ) : (
                            <div className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                              <span>Closed</span>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="open" className="mt-6">
              {/* Similar content for open findings */}
            </TabsContent>
            <TabsContent value="closed" className="mt-6">
              {/* Similar content for closed findings */}
            </TabsContent>
            <TabsContent value="critical" className="mt-6">
              {/* Similar content for critical findings */}
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}
