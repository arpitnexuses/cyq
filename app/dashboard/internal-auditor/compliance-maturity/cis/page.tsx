import { InternalAuditorDashboardHeader } from "@/components/internal-auditor-dashboard-header"
import { InternalAuditorSidebar } from "@/components/internal-auditor-sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Download, CheckCircle, XCircle, AlertCircle } from "lucide-react"

export default function CISPage() {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <InternalAuditorSidebar />
      <div className="flex-1 flex flex-col">
        <InternalAuditorDashboardHeader />
        <main className="flex-1 p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">CIS Controls</h1>
              <p className="text-muted-foreground">Center for Internet Security Controls compliance</p>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline">
                <Download className="h-4 w-4 mr-2" />
                Export Report
              </Button>
              <Button>View Assessment History</Button>
            </div>
          </div>

          {/* Overall Compliance Score */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Overall Compliance Score</CardTitle>
              <CardDescription>Based on the latest assessment</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">82% Compliant</span>
                <span className="text-sm font-medium">Target: 90%</span>
              </div>
              <Progress value={82} className="h-3" />
              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="flex flex-col items-center p-4 bg-green-50 rounded-lg">
                  <CheckCircle className="h-8 w-8 text-green-500 mb-2" />
                  <span className="text-xl font-bold">14</span>
                  <span className="text-sm text-muted-foreground">Controls Compliant</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-amber-50 rounded-lg">
                  <AlertCircle className="h-8 w-8 text-amber-500 mb-2" />
                  <span className="text-xl font-bold">3</span>
                  <span className="text-sm text-muted-foreground">Partially Compliant</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-red-50 rounded-lg">
                  <XCircle className="h-8 w-8 text-red-500 mb-2" />
                  <span className="text-xl font-bold">1</span>
                  <span className="text-sm text-muted-foreground">Non-Compliant</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="implementation">
            <TabsList>
              <TabsTrigger value="implementation">Implementation Groups</TabsTrigger>
              <TabsTrigger value="controls">Controls</TabsTrigger>
              <TabsTrigger value="safeguards">Safeguards</TabsTrigger>
              <TabsTrigger value="history">Assessment History</TabsTrigger>
            </TabsList>
            <TabsContent value="implementation" className="space-y-4 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>CIS Implementation Groups</CardTitle>
                  <CardDescription>Compliance status by implementation group</CardDescription>
                </CardHeader>
                <CardContent>
                  {/* Vertical Bar Chart for CIS Implementation Groups */}
                  <div className="h-80 flex items-end justify-around gap-6 px-4 mb-6">
                    {[
                      {
                        id: 1,
                        name: "Implementation Group 1 (IG1)",
                        description: "Basic cyber hygiene - essential cyber defense for all organizations",
                        compliance: 95,
                      },
                      {
                        id: 2,
                        name: "Implementation Group 2 (IG2)",
                        description: "Foundational cyber hygiene - for organizations with more resources and expertise",
                        compliance: 80,
                      },
                      {
                        id: 3,
                        name: "Implementation Group 3 (IG3)",
                        description:
                          "Organizational cyber hygiene - for organizations with mature cybersecurity programs",
                        compliance: 65,
                      },
                    ].map((group) => (
                      <div key={group.id} className="flex flex-col items-center" style={{ width: "30%" }}>
                        <div className="text-sm font-medium mb-1">{group.compliance}%</div>
                        <div className="w-full flex justify-center">
                          <div
                            className={`w-24 rounded-t-md ${
                              group.compliance < 70
                                ? "bg-red-500"
                                : group.compliance < 90
                                  ? "bg-amber-500"
                                  : "bg-green-500"
                            }`}
                            style={{ height: `${group.compliance * 2}px` }}
                          ></div>
                        </div>
                        <div className="text-xs mt-2 text-center font-medium">IG{group.id}</div>
                      </div>
                    ))}
                  </div>

                  {/* Group descriptions */}
                  <div className="space-y-4 mt-8 border-t pt-4">
                    <h3 className="text-sm font-medium">Implementation Group Details</h3>
                    {[
                      {
                        id: 1,
                        name: "Implementation Group 1 (IG1)",
                        description: "Basic cyber hygiene - essential cyber defense for all organizations",
                        compliance: 95,
                      },
                      {
                        id: 2,
                        name: "Implementation Group 2 (IG2)",
                        description: "Foundational cyber hygiene - for organizations with more resources and expertise",
                        compliance: 80,
                      },
                      {
                        id: 3,
                        name: "Implementation Group 3 (IG3)",
                        description:
                          "Organizational cyber hygiene - for organizations with mature cybersecurity programs",
                        compliance: 65,
                      },
                    ].map((group) => (
                      <div key={group.id} className="border rounded-md p-3">
                        <div className="flex items-center justify-between mb-1">
                          <div className="font-medium">{group.name}</div>
                          <Badge
                            variant={
                              group.compliance >= 90 ? "outline" : group.compliance >= 70 ? "secondary" : "destructive"
                            }
                          >
                            {group.compliance}%
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{group.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="controls" className="space-y-4 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>CIS Controls</CardTitle>
                  <CardDescription>Compliance status by control</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { id: 1, name: "CIS Control 1: Inventory and Control of Enterprise Assets", compliance: 90 },
                      { id: 2, name: "CIS Control 2: Inventory and Control of Software Assets", compliance: 85 },
                      { id: 3, name: "CIS Control 3: Data Protection", compliance: 75 },
                      {
                        id: 4,
                        name: "CIS Control 4: Secure Configuration of Enterprise Assets and Software",
                        compliance: 80,
                      },
                      { id: 5, name: "CIS Control 5: Account Management", compliance: 95 },
                      { id: 6, name: "CIS Control 6: Access Control Management", compliance: 85 },
                      { id: 7, name: "CIS Control 7: Continuous Vulnerability Management", compliance: 70 },
                      { id: 8, name: "CIS Control 8: Audit Log Management", compliance: 65 },
                    ].map((control) => (
                      <div key={control.id} className="border rounded-md p-3">
                        <div className="flex items-center justify-between mb-2">
                          <div className="font-medium">{control.name}</div>
                          <Badge
                            variant={
                              control.compliance >= 85
                                ? "outline"
                                : control.compliance >= 70
                                  ? "secondary"
                                  : "destructive"
                            }
                          >
                            {control.compliance}%
                          </Badge>
                        </div>
                        <Progress value={control.compliance} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="safeguards" className="mt-6">
              {/* Safeguards content */}
              <Card>
                <CardHeader>
                  <CardTitle>CIS Safeguards</CardTitle>
                  <CardDescription>Individual safeguard assessment</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Safeguards assessment would be displayed here</p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="history" className="mt-6">
              {/* History content */}
              <Card>
                <CardHeader>
                  <CardTitle>Assessment History</CardTitle>
                  <CardDescription>Historical compliance data</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Assessment history would be displayed here</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}
