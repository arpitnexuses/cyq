import { InternalAuditorDashboardHeader } from "@/components/internal-auditor-dashboard-header"
import { InternalAuditorSidebar } from "@/components/internal-auditor-sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle2, Download, FileText, Plus, Search, Settings } from "lucide-react"

export default function AuditScopePage() {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <InternalAuditorSidebar />
      <div className="flex-1 flex flex-col">
        <InternalAuditorDashboardHeader />
        <main className="flex-1 p-6">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold tracking-tight">Audit Scope</h1>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
              <Button size="sm">
                <Plus className="h-4 w-4 mr-2" />
                New Scope
              </Button>
            </div>
          </div>

          <Tabs defaultValue="active" className="w-full">
            <TabsList className="mb-4">
              <TabsTrigger value="active">Active Scopes</TabsTrigger>
              <TabsTrigger value="templates">Scope Templates</TabsTrigger>
              <TabsTrigger value="archived">Archived</TabsTrigger>
            </TabsList>
            <TabsContent value="active" className="space-y-4">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Active Audit Scopes</CardTitle>
                    <div className="relative w-64">
                      <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                      <input
                        type="text"
                        placeholder="Search scopes..."
                        className="pl-8 h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                      />
                    </div>
                  </div>
                  <CardDescription>Manage active audit scopes and their coverage areas</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        title: "Annual Financial Compliance",
                        description: "Review of financial controls, processes, and compliance with regulations",
                        areas: ["Financial Reporting", "Internal Controls", "Regulatory Compliance"],
                        status: "In Progress",
                        completion: "65%",
                      },
                      {
                        title: "IT Security Assessment",
                        description: "Evaluation of IT security controls, policies, and procedures",
                        areas: ["Access Controls", "Data Protection", "Network Security", "Incident Response"],
                        status: "In Progress",
                        completion: "42%",
                      },
                      {
                        title: "Operational Process Review",
                        description: "Assessment of operational efficiency and effectiveness",
                        areas: ["Process Efficiency", "Resource Utilization", "Quality Control"],
                        status: "Planning",
                        completion: "10%",
                      },
                    ].map((scope, index) => (
                      <Card key={index} className="border shadow-sm">
                        <CardHeader className="pb-2">
                          <div className="flex justify-between items-start">
                            <div>
                              <CardTitle className="text-lg">{scope.title}</CardTitle>
                              <CardDescription className="mt-1">{scope.description}</CardDescription>
                            </div>
                            <div className="flex items-center gap-2">
                              <Badge variant="outline">{scope.status}</Badge>
                              <Badge variant="secondary">{scope.completion}</Badge>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="mt-2">
                            <h4 className="text-sm font-medium mb-2">Coverage Areas:</h4>
                            <div className="flex flex-wrap gap-2">
                              {scope.areas.map((area, i) => (
                                <Badge key={i} variant="outline" className="bg-primary/10">
                                  {area}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          <div className="flex justify-end mt-4 gap-2">
                            <Button variant="outline" size="sm">
                              <FileText className="h-4 w-4 mr-2" />
                              View Details
                            </Button>
                            <Button variant="outline" size="sm">
                              <Settings className="h-4 w-4 mr-2" />
                              Edit Scope
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="templates">
              <Card>
                <CardHeader>
                  <CardTitle>Scope Templates</CardTitle>
                  <CardDescription>Standardized templates for common audit types</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {[
                      {
                        title: "Financial Audit Template",
                        description: "Standard scope for financial audits",
                        areas: ["Financial Reporting", "Internal Controls", "Compliance"],
                      },
                      {
                        title: "IT Security Audit Template",
                        description: "Comprehensive IT security assessment scope",
                        areas: ["Access Controls", "Data Protection", "Network Security"],
                      },
                      {
                        title: "Operational Audit Template",
                        description: "Framework for operational process reviews",
                        areas: ["Process Efficiency", "Resource Utilization", "Quality Control"],
                      },
                      {
                        title: "Compliance Audit Template",
                        description: "Regulatory compliance assessment framework",
                        areas: ["Policy Review", "Documentation", "Control Testing"],
                      },
                      {
                        title: "Vendor Audit Template",
                        description: "Scope for vendor compliance assessments",
                        areas: ["Contract Compliance", "Service Delivery", "Security Controls"],
                      },
                      {
                        title: "HR Audit Template",
                        description: "Human resources policy and procedure review",
                        areas: ["Policy Compliance", "Documentation", "Process Adherence"],
                      },
                    ].map((template, index) => (
                      <Card key={index} className="border shadow-sm">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-md">{template.title}</CardTitle>
                          <CardDescription>{template.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="mt-1">
                            <h4 className="text-sm font-medium mb-1">Key Areas:</h4>
                            <div className="flex flex-wrap gap-1">
                              {template.areas.map((area, i) => (
                                <Badge key={i} variant="outline" className="text-xs">
                                  {area}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          <div className="flex justify-end mt-3">
                            <Button size="sm">
                              <CheckCircle2 className="h-4 w-4 mr-2" />
                              Use Template
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="archived">
              <Card>
                <CardHeader>
                  <CardTitle>Archived Audit Scopes</CardTitle>
                  <CardDescription>Previously completed audit scopes</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="rounded-md border">
                    <div className="grid grid-cols-4 bg-muted px-4 py-2 text-sm font-medium">
                      <div>Audit Name</div>
                      <div>Completion Date</div>
                      <div>Status</div>
                      <div>Actions</div>
                    </div>
                    {[
                      {
                        name: "Q4 2024 Financial Review",
                        date: "December 15, 2024",
                        status: "Completed",
                      },
                      {
                        name: "Annual IT Security Assessment 2024",
                        date: "November 30, 2024",
                        status: "Completed",
                      },
                      {
                        name: "Vendor Management Audit",
                        date: "October 22, 2024",
                        status: "Completed",
                      },
                      {
                        name: "HR Policy Compliance Review",
                        date: "September 15, 2024",
                        status: "Completed",
                      },
                      {
                        name: "Data Privacy Assessment",
                        date: "August 10, 2024",
                        status: "Completed",
                      },
                    ].map((audit, index) => (
                      <div key={index} className="grid grid-cols-4 px-4 py-3 text-sm border-t hover:bg-muted/50">
                        <div className="font-medium">{audit.name}</div>
                        <div>{audit.date}</div>
                        <div>
                          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                            {audit.status}
                          </Badge>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            <FileText className="h-4 w-4 mr-1" />
                            View
                          </Button>
                          <Button variant="outline" size="sm">
                            <CheckCircle2 className="h-4 w-4 mr-1" />
                            Clone
                          </Button>
                        </div>
                      </div>
                    ))}
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
