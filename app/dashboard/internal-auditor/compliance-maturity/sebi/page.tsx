import { InternalAuditorDashboardHeader } from "@/components/internal-auditor-dashboard-header"
import { InternalAuditorSidebar } from "@/components/internal-auditor-sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Download, CheckCircle, XCircle, AlertCircle } from "lucide-react"

export default function SEBIPage() {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <InternalAuditorSidebar />
      <div className="flex-1 flex flex-col">
        <InternalAuditorDashboardHeader />
        <main className="flex-1 p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">SEBI Guidelines</h1>
              <p className="text-muted-foreground">Securities and Exchange Board of India compliance</p>
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
                <span className="text-sm font-medium">91% Compliant</span>
                <span className="text-sm font-medium">Target: 95%</span>
              </div>
              <Progress value={91} className="h-3" />
              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="flex flex-col items-center p-4 bg-green-50 rounded-lg">
                  <CheckCircle className="h-8 w-8 text-green-500 mb-2" />
                  <span className="text-xl font-bold">28</span>
                  <span className="text-sm text-muted-foreground">Controls Compliant</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-amber-50 rounded-lg">
                  <AlertCircle className="h-8 w-8 text-amber-500 mb-2" />
                  <span className="text-xl font-bold">2</span>
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

          <Tabs defaultValue="categories">
            <TabsList>
              <TabsTrigger value="categories">Categories</TabsTrigger>
              <TabsTrigger value="requirements">Requirements</TabsTrigger>
              <TabsTrigger value="circulars">Circulars</TabsTrigger>
              <TabsTrigger value="history">Assessment History</TabsTrigger>
            </TabsList>
            <TabsContent value="categories" className="space-y-4 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>SEBI Compliance Categories</CardTitle>
                  <CardDescription>Compliance status by category</CardDescription>
                </CardHeader>
                <CardContent>
                  {/* Vertical Bar Chart for SEBI Compliance Categories */}
                  <div className="h-80 flex items-end justify-between gap-4 px-4 mb-6">
                    {[
                      {
                        id: 1,
                        name: "Cyber Security & Cyber Resilience",
                        description: "Framework for Market Infrastructure Institutions",
                        compliance: 90,
                      },
                      {
                        id: 2,
                        name: "Risk Management",
                        description: "Risk management systems and procedures",
                        compliance: 95,
                      },
                      {
                        id: 3,
                        name: "Data Protection",
                        description: "Protection of investor data and privacy",
                        compliance: 85,
                      },
                      {
                        id: 4,
                        name: "Business Continuity",
                        description: "Business continuity planning and disaster recovery",
                        compliance: 92,
                      },
                      {
                        id: 5,
                        name: "Operational Compliance",
                        description: "Day-to-day operational compliance requirements",
                        compliance: 94,
                      },
                    ].map((category) => (
                      <div key={category.id} className="flex flex-col items-center flex-1">
                        <div className="text-sm font-medium mb-1">{category.compliance}%</div>
                        <div className="w-full flex justify-center">
                          <div
                            className={`w-16 rounded-t-md ${
                              category.compliance < 80
                                ? "bg-red-500"
                                : category.compliance < 90
                                  ? "bg-amber-500"
                                  : "bg-green-500"
                            }`}
                            style={{ height: `${category.compliance * 1.8}px` }}
                          ></div>
                        </div>
                        <div
                          className="text-xs mt-2 text-center font-medium truncate w-full px-1"
                          title={category.name}
                        >
                          {category.name.length > 15 ? category.name.substring(0, 15) + "..." : category.name}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Category descriptions */}
                  <div className="space-y-4 mt-8 border-t pt-4">
                    <h3 className="text-sm font-medium">Category Details</h3>
                    {[
                      {
                        id: 1,
                        name: "Cyber Security & Cyber Resilience",
                        description: "Framework for Market Infrastructure Institutions",
                        compliance: 90,
                      },
                      {
                        id: 2,
                        name: "Risk Management",
                        description: "Risk management systems and procedures",
                        compliance: 95,
                      },
                      {
                        id: 3,
                        name: "Data Protection",
                        description: "Protection of investor data and privacy",
                        compliance: 85,
                      },
                      {
                        id: 4,
                        name: "Business Continuity",
                        description: "Business continuity planning and disaster recovery",
                        compliance: 92,
                      },
                      {
                        id: 5,
                        name: "Operational Compliance",
                        description: "Day-to-day operational compliance requirements",
                        compliance: 94,
                      },
                    ].map((category) => (
                      <div key={category.id} className="border rounded-md p-3">
                        <div className="flex items-center justify-between mb-1">
                          <div className="font-medium">{category.name}</div>
                          <Badge
                            variant={
                              category.compliance >= 90
                                ? "outline"
                                : category.compliance >= 80
                                  ? "secondary"
                                  : "destructive"
                            }
                          >
                            {category.compliance}%
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{category.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="requirements" className="space-y-4 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>SEBI Requirements</CardTitle>
                  <CardDescription>Compliance status by specific requirement</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { id: 1, name: "Access Control and Authentication", compliance: 95 },
                      { id: 2, name: "Network Security Management", compliance: 90 },
                      { id: 3, name: "Data Security and Privacy", compliance: 85 },
                      { id: 4, name: "Security Incident Management", compliance: 92 },
                      { id: 5, name: "Vulnerability Assessment and Penetration Testing", compliance: 88 },
                      { id: 6, name: "Audit Trail and Logs", compliance: 94 },
                    ].map((requirement) => (
                      <div key={requirement.id} className="border rounded-md p-3">
                        <div className="flex items-center justify-between mb-2">
                          <div className="font-medium">{requirement.name}</div>
                          <Badge
                            variant={
                              requirement.compliance >= 90
                                ? "outline"
                                : requirement.compliance >= 80
                                  ? "secondary"
                                  : "destructive"
                            }
                          >
                            {requirement.compliance}%
                          </Badge>
                        </div>
                        <Progress value={requirement.compliance} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="circulars" className="mt-6">
              {/* Circulars content */}
              <Card>
                <CardHeader>
                  <CardTitle>SEBI Circulars</CardTitle>
                  <CardDescription>Compliance with specific SEBI circulars</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Circulars compliance would be displayed here</p>
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
