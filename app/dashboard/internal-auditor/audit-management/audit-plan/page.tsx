import { Badge } from "@/components/ui/badge"
import { InternalAuditorDashboardHeader } from "@/components/internal-auditor-dashboard-header"
import { InternalAuditorSidebar } from "@/components/internal-auditor-sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Upload, Download, FileText, Plus, Calendar, CheckCircle } from "lucide-react"

export default function AuditPlanPage() {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <InternalAuditorSidebar />
      <div className="flex-1 flex flex-col">
        <InternalAuditorDashboardHeader />
        <main className="flex-1 p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Audit Plan</h1>
              <p className="text-muted-foreground">Create and manage audit plans</p>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline">
                <Download className="h-4 w-4 mr-2" />
                Download Template
              </Button>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                New Audit Plan
              </Button>
            </div>
          </div>

          {/* Create Audit Plan */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Create Audit Plan</CardTitle>
              <CardDescription>Define the scope, objectives, and timeline for your audit</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="audit-name">Audit Name</Label>
                  <Input id="audit-name" placeholder="e.g., Annual IT Security Audit 2025" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="audit-type">Audit Type</Label>
                  <Input id="audit-type" placeholder="e.g., Compliance, Operational, Financial" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="audit-objective">Audit Objective</Label>
                <Textarea
                  id="audit-objective"
                  placeholder="Describe the purpose and objectives of this audit"
                  rows={3}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="start-date">Start Date</Label>
                  <Input id="start-date" type="date" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="end-date">End Date</Label>
                  <Input id="end-date" type="date" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="audit-scope">Audit Scope</Label>
                <Textarea id="audit-scope" placeholder="Define what is included and excluded from the audit" rows={3} />
              </div>

              <div className="space-y-2">
                <Label>Upload Audit Plan Document</Label>
                <div className="border-2 border-dashed rounded-md p-6 flex flex-col items-center justify-center">
                  <Upload className="h-8 w-8 text-muted-foreground mb-2" />
                  <p className="text-sm text-muted-foreground mb-1">Drag and drop your file here or click to browse</p>
                  <p className="text-xs text-muted-foreground">Supports PDF, DOCX, XLSX (Max 10MB)</p>
                  <Button variant="outline" size="sm" className="mt-4">
                    Select File
                  </Button>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Save as Draft</Button>
              <Button>Submit for Approval</Button>
            </CardFooter>
          </Card>

          {/* Existing Audit Plans */}
          <Card>
            <CardHeader>
              <CardTitle>Existing Audit Plans</CardTitle>
              <CardDescription>View and manage your audit plans</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    id: 1,
                    name: "Annual Financial Compliance Audit 2025",
                    type: "Compliance",
                    startDate: "May 15, 2025",
                    endDate: "June 30, 2025",
                    status: "Approved",
                  },
                  {
                    id: 2,
                    name: "IT Security Assessment Q2 2025",
                    type: "Security",
                    startDate: "June 1, 2025",
                    endDate: "June 15, 2025",
                    status: "Draft",
                  },
                  {
                    id: 3,
                    name: "Operational Process Review",
                    type: "Operational",
                    startDate: "July 1, 2025",
                    endDate: "July 31, 2025",
                    status: "Pending Approval",
                  },
                ].map((plan) => (
                  <div key={plan.id} className="flex items-center justify-between p-4 border rounded-md">
                    <div className="flex items-start space-x-4">
                      <FileText className="h-10 w-10 text-primary" />
                      <div>
                        <h3 className="font-medium">{plan.name}</h3>
                        <div className="text-sm text-muted-foreground">
                          <span className="inline-flex items-center mr-4">
                            <Calendar className="h-3 w-3 mr-1" />
                            {plan.startDate} - {plan.endDate}
                          </span>
                          <span>{plan.type}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge
                        variant={
                          plan.status === "Approved" ? "outline" : plan.status === "Draft" ? "secondary" : "default"
                        }
                        className="flex items-center"
                      >
                        {plan.status === "Approved" && <CheckCircle className="h-3 w-3 mr-1" />}
                        {plan.status}
                      </Badge>
                      <Button variant="ghost" size="sm">
                        View
                      </Button>
                      <Button variant="ghost" size="sm">
                        Edit
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  )
}
