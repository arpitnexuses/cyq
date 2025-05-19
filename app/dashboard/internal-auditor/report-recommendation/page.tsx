import { InternalAuditorDashboardHeader } from "@/components/internal-auditor-dashboard-header"
import { InternalAuditorSidebar } from "@/components/internal-auditor-sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { FileText, Download, Edit, CheckCircle, Printer, Mail, FileBarChart2, Shield } from "lucide-react"
import { Progress } from "@/components/ui/progress"

export default function ReportRecommendationPage() {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <InternalAuditorSidebar />
      <div className="flex-1 flex flex-col">
        <InternalAuditorDashboardHeader />
        <main className="flex-1 p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Report & Recommendation</h1>
              <p className="text-muted-foreground">Generate and manage audit reports</p>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline">
                <Download className="h-4 w-4 mr-2" />
                Export Report
              </Button>
              <Button>
                <Edit className="h-4 w-4 mr-2" />
                Edit Report
              </Button>
            </div>
          </div>

          {/* Report Generation Status */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Report Generation Status</CardTitle>
              <CardDescription>Current status of report sections</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Overall Progress</span>
                <span className="text-sm font-medium">75% Complete</span>
              </div>
              <Progress value={75} className="h-3" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="space-y-4">
                  <h3 className="text-sm font-medium">Report Sections</h3>
                  {[
                    { id: 1, name: "Executive Summary", status: "Complete", progress: 100 },
                    { id: 2, name: "Audit Scope & Methodology", status: "Complete", progress: 100 },
                    { id: 3, name: "Findings & Observations", status: "In Progress", progress: 80 },
                    { id: 4, name: "Risk Assessment", status: "In Progress", progress: 60 },
                    { id: 5, name: "Recommendations", status: "Not Started", progress: 0 },
                    { id: 6, name: "Conclusion", status: "Not Started", progress: 0 },
                  ].map((section) => (
                    <div key={section.id} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <FileText className="h-4 w-4 mr-2 text-primary" />
                          <span className="font-medium">{section.name}</span>
                        </div>
                        <Badge
                          variant={
                            section.status === "Complete"
                              ? "outline"
                              : section.status === "In Progress"
                                ? "secondary"
                                : "default"
                          }
                        >
                          {section.status}
                        </Badge>
                      </div>
                      <Progress value={section.progress} className="h-2" />
                    </div>
                  ))}
                </div>

                <div className="space-y-4">
                  <h3 className="text-sm font-medium">Posture Sections</h3>
                  {[
                    { id: 1, name: "ISO 27001 Compliance", status: "Complete", progress: 100 },
                    { id: 2, name: "NIST Framework Alignment", status: "Complete", progress: 100 },
                    { id: 3, name: "CIS Controls Assessment", status: "In Progress", progress: 70 },
                    { id: 4, name: "SEBI Guidelines Compliance", status: "Not Started", progress: 0 },
                  ].map((section) => (
                    <div key={section.id} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Shield className="h-4 w-4 mr-2 text-primary" />
                          <span className="font-medium">{section.name}</span>
                        </div>
                        <Badge
                          variant={
                            section.status === "Complete"
                              ? "outline"
                              : section.status === "In Progress"
                                ? "secondary"
                                : "default"
                          }
                        >
                          {section.status}
                        </Badge>
                      </div>
                      <Progress value={section.progress} className="h-2" />
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Generate Final Report</Button>
            </CardFooter>
          </Card>

          <Tabs defaultValue="reports">
            <TabsList>
              <TabsTrigger value="reports">Generated Reports</TabsTrigger>
              <TabsTrigger value="templates">Report Templates</TabsTrigger>
              <TabsTrigger value="sections">Edit Sections</TabsTrigger>
            </TabsList>
            <TabsContent value="reports" className="space-y-4 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Generated Reports</CardTitle>
                  <CardDescription>View and manage your generated audit reports</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        id: 1,
                        name: "Annual Financial Compliance Audit Report",
                        date: "April 15, 2025",
                        status: "Final",
                        size: "2.4 MB",
                      },
                      {
                        id: 2,
                        name: "IT Security Assessment Q1 2025",
                        date: "March 30, 2025",
                        status: "Draft",
                        size: "1.8 MB",
                      },
                      {
                        id: 3,
                        name: "Vendor Compliance Audit Report",
                        date: "February 22, 2025",
                        status: "Final",
                        size: "3.1 MB",
                      },
                    ].map((report) => (
                      <div key={report.id} className="flex items-center justify-between p-4 border rounded-md">
                        <div className="flex items-start space-x-4">
                          <FileBarChart2 className="h-10 w-10 text-primary" />
                          <div>
                            <h3 className="font-medium">{report.name}</h3>
                            <div className="text-sm text-muted-foreground">
                              <span>Generated: {report.date}</span>
                              <span className="mx-2">•</span>
                              <span>{report.size}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge
                            variant={report.status === "Final" ? "outline" : "secondary"}
                            className="flex items-center"
                          >
                            {report.status === "Final" && <CheckCircle className="h-3 w-3 mr-1" />}
                            {report.status}
                          </Badge>
                          <Button variant="ghost" size="icon">
                            <Download className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon">
                            <Printer className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon">
                            <Mail className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="templates" className="mt-6">
              {/* Report templates content */}
            </TabsContent>
            <TabsContent value="sections" className="mt-6">
              {/* Edit sections content */}
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}
