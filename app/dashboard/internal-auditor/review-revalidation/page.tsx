import { InternalAuditorDashboardHeader } from "@/components/internal-auditor-dashboard-header"
import { InternalAuditorSidebar } from "@/components/internal-auditor-sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, XCircle, AlertTriangle, Shield } from "lucide-react"
import { Progress } from "@/components/ui/progress"

export default function ReviewRevalidationPage() {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <InternalAuditorSidebar />
      <div className="flex-1 flex flex-col">
        <InternalAuditorDashboardHeader />
        <main className="flex-1 p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Review & Revalidation</h1>
              <p className="text-muted-foreground">Consolidate and approve audit findings</p>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline">Export Findings</Button>
              <Button>Approve All Findings</Button>
            </div>
          </div>

          {/* Audit Score Summary */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Audit Score Summary</CardTitle>
              <CardDescription>Overall compliance score based on evidence review</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Overall Score: 76%</span>
                <span className="text-sm font-medium">Target: 85%</span>
              </div>
              <Progress value={76} className="h-3" />
              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="flex flex-col items-center p-4 bg-green-50 rounded-lg">
                  <CheckCircle className="h-8 w-8 text-green-500 mb-2" />
                  <span className="text-xl font-bold">42</span>
                  <span className="text-sm text-muted-foreground">Compliant Items</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-amber-50 rounded-lg">
                  <AlertTriangle className="h-8 w-8 text-amber-500 mb-2" />
                  <span className="text-xl font-bold">12</span>
                  <span className="text-sm text-muted-foreground">Observations</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-red-50 rounded-lg">
                  <XCircle className="h-8 w-8 text-red-500 mb-2" />
                  <span className="text-xl font-bold">6</span>
                  <span className="text-sm text-muted-foreground">Non-Conformities</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="compliance">
            <TabsList>
              <TabsTrigger value="compliance">Compliance Wise</TabsTrigger>
              <TabsTrigger value="control">Control Wise</TabsTrigger>
              <TabsTrigger value="department">Department Wise</TabsTrigger>
              <TabsTrigger value="all">All Findings</TabsTrigger>
            </TabsList>
            <TabsContent value="compliance" className="space-y-4 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Findings by Compliance Framework</CardTitle>
                  <CardDescription>Consolidated findings grouped by compliance requirements</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {[
                      {
                        id: 1,
                        framework: "ISO 27001",
                        section: "A.9 Access Control",
                        compliant: 8,
                        observations: 3,
                        nonConformities: 2,
                        score: 72,
                      },
                      {
                        id: 2,
                        framework: "ISO 27001",
                        section: "A.12 Operations Security",
                        compliant: 12,
                        observations: 2,
                        nonConformities: 1,
                        score: 80,
                      },
                      {
                        id: 3,
                        framework: "NIST",
                        section: "PR.AC Identity Management and Access Control",
                        compliant: 7,
                        observations: 2,
                        nonConformities: 1,
                        score: 75,
                      },
                    ].map((item) => (
                      <div key={item.id} className="border rounded-md p-4">
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                          <div>
                            <h3 className="font-medium">
                              {item.framework} - {item.section}
                            </h3>
                            <div className="flex items-center mt-1">
                              <Shield className="h-4 w-4 mr-1 text-primary" />
                              <span className="text-sm text-muted-foreground">Framework Section</span>
                            </div>
                          </div>
                          <Badge
                            variant={item.score >= 80 ? "outline" : item.score >= 70 ? "secondary" : "destructive"}
                            className="mt-2 md:mt-0"
                          >
                            Score: {item.score}%
                          </Badge>
                        </div>

                        <div className="grid grid-cols-3 gap-4 mb-4">
                          <div className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span className="text-sm">{item.compliant} Compliant</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <AlertTriangle className="h-4 w-4 text-amber-500" />
                            <span className="text-sm">{item.observations} Observations</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <XCircle className="h-4 w-4 text-red-500" />
                            <span className="text-sm">{item.nonConformities} Non-Conformities</span>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <Button variant="outline" size="sm">
                            View Details
                          </Button>
                          <Button size="sm">Approve Findings</Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="control" className="mt-6">
              {/* Control-wise findings content */}
            </TabsContent>
            <TabsContent value="department" className="mt-6">
              {/* Department-wise findings content */}
            </TabsContent>
            <TabsContent value="all" className="mt-6">
              {/* All findings content */}
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}
