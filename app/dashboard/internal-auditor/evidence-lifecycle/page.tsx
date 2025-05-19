import { InternalAuditorDashboardHeader } from "@/components/internal-auditor-dashboard-header"
import { InternalAuditorSidebar } from "@/components/internal-auditor-sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Search, Filter, FileText, CheckCircle, ArrowLeft } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"

export default function EvidenceLifecyclePage() {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <InternalAuditorSidebar />
      <div className="flex-1 flex flex-col">
        <InternalAuditorDashboardHeader />
        <main className="flex-1 p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Evidence Lifecycle</h1>
              <p className="text-muted-foreground">Review and manage evidence submissions</p>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline">Filter by Audit</Button>
              <Button>Review Selected</Button>
            </div>
          </div>

          <div className="flex items-center space-x-2 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search evidence..." className="pl-8" />
            </div>
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
          </div>

          <Tabs defaultValue="pending">
            <TabsList>
              <TabsTrigger value="pending">Pending Review</TabsTrigger>
              <TabsTrigger value="approved">Approved</TabsTrigger>
              <TabsTrigger value="referred">Referred Back</TabsTrigger>
              <TabsTrigger value="all">All Evidence</TabsTrigger>
            </TabsList>
            <TabsContent value="pending" className="space-y-4 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Task Matrix</CardTitle>
                  <CardDescription>Evidence submissions awaiting your review</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {[
                      {
                        id: 1,
                        compliance: "Access Control Policy",
                        question: "Is there a documented access control policy?",
                        evidence: "Access_Control_Policy_v2.1.pdf",
                        remarks: "Updated policy document with latest approval",
                        selfScore: 4,
                        status: "Pending",
                      },
                      {
                        id: 2,
                        compliance: "Password Management",
                        question: "Are password complexity requirements enforced?",
                        evidence: "Password_Policy_Screenshot.png",
                        remarks: "Screenshot of Active Directory password policy settings",
                        selfScore: 3,
                        status: "Pending",
                      },
                      {
                        id: 3,
                        compliance: "Security Awareness",
                        question: "Is security awareness training conducted annually?",
                        evidence: "Training_Completion_Report_2025.xlsx",
                        remarks: "Training completion report for all employees",
                        selfScore: 5,
                        status: "Pending",
                      },
                    ].map((item) => (
                      <div key={item.id} className="border rounded-md p-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                          <div>
                            <h3 className="text-sm font-medium text-muted-foreground">Compliance Item</h3>
                            <p className="font-medium">{item.compliance}</p>
                          </div>
                          <div className="md:col-span-2">
                            <h3 className="text-sm font-medium text-muted-foreground">Question</h3>
                            <p className="font-medium">{item.question}</p>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                          <div>
                            <h3 className="text-sm font-medium text-muted-foreground">Evidence</h3>
                            <div className="flex items-center mt-1">
                              <FileText className="h-4 w-4 mr-2 text-primary" />
                              <span className="text-sm">{item.evidence}</span>
                            </div>
                          </div>
                          <div>
                            <h3 className="text-sm font-medium text-muted-foreground">Remarks</h3>
                            <p className="text-sm">{item.remarks}</p>
                          </div>
                          <div>
                            <h3 className="text-sm font-medium text-muted-foreground">Self Score</h3>
                            <div className="flex items-center mt-1">
                              <Badge variant="outline">{item.selfScore} / 5</Badge>
                            </div>
                          </div>
                        </div>

                        <div className="border-t pt-4 mt-4">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-4">
                              <div className="space-y-2">
                                <Label htmlFor={`weightage-${item.id}`}>Weightage Score</Label>
                                <Select>
                                  <SelectTrigger id={`weightage-${item.id}`}>
                                    <SelectValue placeholder="Select score" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="1">1 - Inadequate</SelectItem>
                                    <SelectItem value="2">2 - Needs Improvement</SelectItem>
                                    <SelectItem value="3">3 - Satisfactory</SelectItem>
                                    <SelectItem value="4">4 - Good</SelectItem>
                                    <SelectItem value="5">5 - Excellent</SelectItem>
                                  </SelectContent>
                                </Select>
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor={`notes-${item.id}`}>Auditor Notes</Label>
                                <Textarea id={`notes-${item.id}`} placeholder="Add your review notes here..." />
                              </div>
                            </div>
                            <div className="space-y-4">
                              <div className="space-y-2">
                                <Label>Finding Status</Label>
                                <div className="space-y-2">
                                  <div className="flex items-center space-x-2">
                                    <Checkbox id={`complete-${item.id}`} />
                                    <Label htmlFor={`complete-${item.id}`}>Complete</Label>
                                  </div>
                                  <div className="flex items-center space-x-2">
                                    <Checkbox id={`observation-${item.id}`} />
                                    <Label htmlFor={`observation-${item.id}`}>Observation</Label>
                                  </div>
                                  <div className="flex items-center space-x-2">
                                    <Checkbox id={`nonconformity-${item.id}`} />
                                    <Label htmlFor={`nonconformity-${item.id}`}>Non-Conformity</Label>
                                  </div>
                                </div>
                              </div>
                              <div className="flex items-center justify-between pt-4">
                                <Button variant="outline">
                                  <ArrowLeft className="h-4 w-4 mr-2" />
                                  Refer Back
                                </Button>
                                <Button>
                                  <CheckCircle className="h-4 w-4 mr-2" />
                                  Approve
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="approved" className="mt-6">
              {/* Approved evidence content */}
            </TabsContent>
            <TabsContent value="referred" className="mt-6">
              {/* Referred back evidence content */}
            </TabsContent>
            <TabsContent value="all" className="mt-6">
              {/* All evidence content */}
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}
