import { InternalAuditorDashboardHeader } from "@/components/internal-auditor-dashboard-header"
import { InternalAuditorSidebar } from "@/components/internal-auditor-sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Download, CheckCircle, XCircle, AlertCircle } from "lucide-react"

export default function NISTPage() {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <InternalAuditorSidebar />
      <div className="flex-1 flex flex-col">
        <InternalAuditorDashboardHeader />
        <main className="flex-1 p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">NIST Cybersecurity Framework</h1>
              <p className="text-muted-foreground">Compliance with NIST CSF standards</p>
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
                <span className="text-sm font-medium">65% Compliant</span>
                <span className="text-sm font-medium">Target: 80%</span>
              </div>
              <Progress value={65} className="h-3" />
              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="flex flex-col items-center p-4 bg-green-50 rounded-lg">
                  <CheckCircle className="h-8 w-8 text-green-500 mb-2" />
                  <span className="text-xl font-bold">87</span>
                  <span className="text-sm text-muted-foreground">Controls Compliant</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-amber-50 rounded-lg">
                  <AlertCircle className="h-8 w-8 text-amber-500 mb-2" />
                  <span className="text-xl font-bold">32</span>
                  <span className="text-sm text-muted-foreground">Partially Compliant</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-red-50 rounded-lg">
                  <XCircle className="h-8 w-8 text-red-500 mb-2" />
                  <span className="text-xl font-bold">15</span>
                  <span className="text-sm text-muted-foreground">Non-Compliant</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="functions">
            <TabsList>
              <TabsTrigger value="functions">Core Functions</TabsTrigger>
              <TabsTrigger value="categories">Categories</TabsTrigger>
              <TabsTrigger value="controls">Controls</TabsTrigger>
              <TabsTrigger value="history">Assessment History</TabsTrigger>
            </TabsList>
            <TabsContent value="functions" className="space-y-4 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>NIST CSF Core Functions</CardTitle>
                  <CardDescription>Compliance status by core function</CardDescription>
                </CardHeader>
                <CardContent>
                  {/* Vertical Bar Chart for NIST Core Functions */}
                  <div className="h-80 flex items-end justify-between gap-6 px-4 mb-6">
                    {[
                      {
                        id: 1,
                        name: "Identify (ID)",
                        description: "Develop organizational understanding to manage cybersecurity risk",
                        compliance: 70,
                      },
                      {
                        id: 2,
                        name: "Protect (PR)",
                        description: "Develop and implement appropriate safeguards",
                        compliance: 75,
                      },
                      {
                        id: 3,
                        name: "Detect (DE)",
                        description: "Develop and implement activities to identify cybersecurity events",
                        compliance: 60,
                      },
                      {
                        id: 4,
                        name: "Respond (RS)",
                        description:
                          "Develop and implement activities to take action regarding a cybersecurity incident",
                        compliance: 55,
                      },
                      {
                        id: 5,
                        name: "Recover (RC)",
                        description: "Develop and implement activities to maintain resilience and restore capabilities",
                        compliance: 50,
                      },
                    ].map((function_) => (
                      <div key={function_.id} className="flex flex-col items-center flex-1">
                        <div className="text-sm font-medium mb-1">{function_.compliance}%</div>
                        <div className="w-full flex justify-center">
                          <div
                            className={`w-20 rounded-t-md ${
                              function_.compliance < 60
                                ? "bg-red-500"
                                : function_.compliance < 70
                                  ? "bg-amber-500"
                                  : "bg-green-500"
                            }`}
                            style={{ height: `${function_.compliance * 2}px` }}
                          ></div>
                        </div>
                        <div className="text-xs mt-2 text-center font-medium">{function_.name}</div>
                      </div>
                    ))}
                  </div>

                  {/* Function descriptions */}
                  <div className="space-y-4 mt-8 border-t pt-4">
                    <h3 className="text-sm font-medium">Function Details</h3>
                    {[
                      {
                        id: 1,
                        name: "Identify (ID)",
                        description: "Develop organizational understanding to manage cybersecurity risk",
                        compliance: 70,
                      },
                      {
                        id: 2,
                        name: "Protect (PR)",
                        description: "Develop and implement appropriate safeguards",
                        compliance: 75,
                      },
                      {
                        id: 3,
                        name: "Detect (DE)",
                        description: "Develop and implement activities to identify cybersecurity events",
                        compliance: 60,
                      },
                      {
                        id: 4,
                        name: "Respond (RS)",
                        description:
                          "Develop and implement activities to take action regarding a cybersecurity incident",
                        compliance: 55,
                      },
                      {
                        id: 5,
                        name: "Recover (RC)",
                        description: "Develop and implement activities to maintain resilience and restore capabilities",
                        compliance: 50,
                      },
                    ].map((function_) => (
                      <div key={function_.id} className="border rounded-md p-3">
                        <div className="flex items-center justify-between mb-1">
                          <div className="font-medium">{function_.name}</div>
                          <Badge
                            variant={
                              function_.compliance >= 70
                                ? "outline"
                                : function_.compliance >= 60
                                  ? "secondary"
                                  : "destructive"
                            }
                          >
                            {function_.compliance}%
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{function_.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="categories" className="mt-6">
              {/* Categories content */}
              <Card>
                <CardHeader>
                  <CardTitle>NIST CSF Categories</CardTitle>
                  <CardDescription>Detailed breakdown by category</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { id: 1, function: "Identify (ID)", name: "ID.AM: Asset Management", compliance: 75 },
                      { id: 2, function: "Identify (ID)", name: "ID.BE: Business Environment", compliance: 65 },
                      { id: 3, function: "Identify (ID)", name: "ID.GV: Governance", compliance: 80 },
                      { id: 4, function: "Identify (ID)", name: "ID.RA: Risk Assessment", compliance: 70 },
                      { id: 5, function: "Protect (PR)", name: "PR.AC: Access Control", compliance: 85 },
                      { id: 6, function: "Protect (PR)", name: "PR.DS: Data Security", compliance: 65 },
                      { id: 7, function: "Detect (DE)", name: "DE.CM: Security Continuous Monitoring", compliance: 60 },
                      { id: 8, function: "Respond (RS)", name: "RS.RP: Response Planning", compliance: 55 },
                    ].map((category) => (
                      <div key={category.id} className="border rounded-md p-3">
                        <div className="flex items-center justify-between mb-2">
                          <div>
                            <Badge variant="outline" className="mb-1">
                              {category.function}
                            </Badge>
                            <div className="font-medium">{category.name}</div>
                          </div>
                          <Badge
                            variant={
                              category.compliance >= 80
                                ? "outline"
                                : category.compliance >= 60
                                  ? "secondary"
                                  : "destructive"
                            }
                          >
                            {category.compliance}%
                          </Badge>
                        </div>
                        <Progress value={category.compliance} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="controls" className="mt-6">
              {/* Controls content */}
              <Card>
                <CardHeader>
                  <CardTitle>NIST CSF Controls</CardTitle>
                  <CardDescription>Individual control assessment</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Controls assessment would be displayed here</p>
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
