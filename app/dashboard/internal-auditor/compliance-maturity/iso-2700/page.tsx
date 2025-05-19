import { InternalAuditorDashboardHeader } from "@/components/internal-auditor-dashboard-header"
import { InternalAuditorSidebar } from "@/components/internal-auditor-sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Download, CheckCircle, XCircle, AlertCircle } from "lucide-react"

export default function ISO2700Page() {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <InternalAuditorSidebar />
      <div className="flex-1 flex flex-col">
        <InternalAuditorDashboardHeader />
        <main className="flex-1 p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">ISO 27001 Compliance</h1>
              <p className="text-muted-foreground">Information Security Management System</p>
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
                <span className="text-sm font-medium">78% Compliant</span>
                <span className="text-sm font-medium">Target: 85%</span>
              </div>
              <Progress value={78} className="h-3" />
              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="flex flex-col items-center p-4 bg-green-50 rounded-lg">
                  <CheckCircle className="h-8 w-8 text-green-500 mb-2" />
                  <span className="text-xl font-bold">112</span>
                  <span className="text-sm text-muted-foreground">Controls Compliant</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-amber-50 rounded-lg">
                  <AlertCircle className="h-8 w-8 text-amber-500 mb-2" />
                  <span className="text-xl font-bold">24</span>
                  <span className="text-sm text-muted-foreground">Partially Compliant</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-red-50 rounded-lg">
                  <XCircle className="h-8 w-8 text-red-500 mb-2" />
                  <span className="text-xl font-bold">8</span>
                  <span className="text-sm text-muted-foreground">Non-Compliant</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="domains">
            <TabsList>
              <TabsTrigger value="domains">Control Domains</TabsTrigger>
              <TabsTrigger value="controls">Controls</TabsTrigger>
              <TabsTrigger value="findings">Findings</TabsTrigger>
              <TabsTrigger value="history">Assessment History</TabsTrigger>
            </TabsList>
            <TabsContent value="domains" className="space-y-4 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>ISO 27001 Control Domains</CardTitle>
                  <CardDescription>Compliance status by control domain</CardDescription>
                </CardHeader>
                <CardContent>
                  {/* Vertical Bar Chart for ISO 27001 Control Domains */}
                  <div className="h-80 flex items-end justify-between gap-2 px-2 mb-6">
                    {[
                      { id: 1, name: "A.5 Information Security Policies", compliance: 92 },
                      { id: 2, name: "A.6 Organization of Information Security", compliance: 85 },
                      { id: 3, name: "A.7 Human Resource Security", compliance: 78 },
                      { id: 4, name: "A.8 Asset Management", compliance: 65 },
                      { id: 5, name: "A.9 Access Control", compliance: 72 },
                      { id: 6, name: "A.10 Cryptography", compliance: 60 },
                      { id: 7, name: "A.11 Physical and Environmental Security", compliance: 88 },
                      { id: 8, name: "A.12 Operations Security", compliance: 75 },
                    ].map((domain) => (
                      <div key={domain.id} className="flex flex-col items-center flex-1">
                        <div className="text-sm font-medium mb-1">{domain.compliance}%</div>
                        <div className="w-full flex justify-center">
                          <div
                            className={`w-10 rounded-t-md ${
                              domain.compliance < 70
                                ? "bg-red-500"
                                : domain.compliance < 85
                                  ? "bg-amber-500"
                                  : "bg-green-500"
                            }`}
                            style={{ height: `${domain.compliance * 1.8}px` }}
                          ></div>
                        </div>
                        <div className="text-xs mt-2 text-center font-medium">A.{domain.id + 4}</div>
                      </div>
                    ))}
                  </div>

                  {/* Domain descriptions */}
                  <div className="space-y-4 mt-8 border-t pt-4">
                    <h3 className="text-sm font-medium">Domain Details</h3>
                    {[
                      { id: 1, name: "A.5 Information Security Policies", compliance: 92 },
                      { id: 2, name: "A.6 Organization of Information Security", compliance: 85 },
                      { id: 3, name: "A.7 Human Resource Security", compliance: 78 },
                      { id: 4, name: "A.8 Asset Management", compliance: 65 },
                      { id: 5, name: "A.9 Access Control", compliance: 72 },
                      { id: 6, name: "A.10 Cryptography", compliance: 60 },
                      { id: 7, name: "A.11 Physical and Environmental Security", compliance: 88 },
                      { id: 8, name: "A.12 Operations Security", compliance: 75 },
                    ].map((domain) => (
                      <div key={domain.id} className="border rounded-md p-3">
                        <div className="flex items-center justify-between mb-1">
                          <div className="font-medium">{domain.name}</div>
                          <Badge
                            variant={
                              domain.compliance >= 85
                                ? "outline"
                                : domain.compliance >= 70
                                  ? "secondary"
                                  : "destructive"
                            }
                          >
                            {domain.compliance}%
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="controls" className="mt-6">
              {/* Controls content */}
            </TabsContent>
            <TabsContent value="findings" className="mt-6">
              {/* Findings content */}
            </TabsContent>
            <TabsContent value="history" className="mt-6">
              {/* History content */}
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}
