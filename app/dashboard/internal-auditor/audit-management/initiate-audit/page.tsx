import { InternalAuditorDashboardHeader } from "@/components/internal-auditor-dashboard-header"
import { InternalAuditorSidebar } from "@/components/internal-auditor-sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon, CheckCircle2, ChevronRight, ClipboardList, FileText, Users } from "lucide-react"
import { format } from "date-fns"

export default function InitiateAuditPage() {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <InternalAuditorSidebar />
      <div className="flex-1 flex flex-col">
        <InternalAuditorDashboardHeader />
        <main className="flex-1 p-6">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold tracking-tight">Initiate New Audit</h1>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="md:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Audit Details</CardTitle>
                  <CardDescription>Enter the basic information for the new audit</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="audit-name">Audit Name</Label>
                      <Input id="audit-name" placeholder="Enter audit name" />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="audit-description">Description</Label>
                      <Textarea id="audit-description" placeholder="Enter a detailed description of the audit" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="grid gap-2">
                        <Label>Audit Type</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="internal">Internal</SelectItem>
                            <SelectItem value="external">External</SelectItem>
                            <SelectItem value="compliance">Compliance</SelectItem>
                            <SelectItem value="financial">Financial</SelectItem>
                            <SelectItem value="operational">Operational</SelectItem>
                            <SelectItem value="it">IT</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="grid gap-2">
                        <Label>Priority</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select priority" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="low">Low</SelectItem>
                            <SelectItem value="medium">Medium</SelectItem>
                            <SelectItem value="high">High</SelectItem>
                            <SelectItem value="critical">Critical</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="grid gap-2">
                        <Label>Start Date</Label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button variant="outline" className="w-full justify-start text-left font-normal">
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              <span>Pick a date</span>
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0">
                            <Calendar mode="single" />
                          </PopoverContent>
                        </Popover>
                      </div>
                      <div className="grid gap-2">
                        <Label>End Date</Label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button variant="outline" className="w-full justify-start text-left font-normal">
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              <span>Pick a date</span>
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0">
                            <Calendar mode="single" />
                          </PopoverContent>
                        </Popover>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Audit Scope</CardTitle>
                  <CardDescription>Define the scope and objectives of the audit</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="objectives">Audit Objectives</Label>
                      <Textarea
                        id="objectives"
                        placeholder="Enter the primary objectives of this audit"
                        className="min-h-[100px]"
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label>Scope Template</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a template or create custom" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="financial">Financial Audit Template</SelectItem>
                          <SelectItem value="it-security">IT Security Audit Template</SelectItem>
                          <SelectItem value="operational">Operational Audit Template</SelectItem>
                          <SelectItem value="compliance">Compliance Audit Template</SelectItem>
                          <SelectItem value="vendor">Vendor Audit Template</SelectItem>
                          <SelectItem value="custom">Custom Scope</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="scope-areas">Scope Areas</Label>
                      <Textarea
                        id="scope-areas"
                        placeholder="Enter the specific areas to be included in the audit scope"
                        className="min-h-[100px]"
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="exclusions">Exclusions</Label>
                      <Textarea id="exclusions" placeholder="Enter any areas specifically excluded from this audit" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Audit Team</CardTitle>
                  <CardDescription>Assign team members and participants to this audit</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-4">
                    <div className="grid gap-2">
                      <Label>Lead Auditor</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select lead auditor" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="alex-johnson">Alex Johnson</SelectItem>
                          <SelectItem value="michael-chen">Michael Chen</SelectItem>
                          <SelectItem value="emily-davis">Emily Davis</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="grid gap-2">
                      <Label>Audit Team Members</Label>
                      <div className="flex flex-wrap gap-2 p-2 border rounded-md min-h-[80px]">
                        <div className="flex items-center gap-1 bg-primary/10 text-primary rounded-md px-2 py-1 text-sm">
                          Sarah Williams
                          <button className="text-primary hover:text-primary/80">×</button>
                        </div>
                        <div className="flex items-center gap-1 bg-primary/10 text-primary rounded-md px-2 py-1 text-sm">
                          Jessica Lee
                          <button className="text-primary hover:text-primary/80">×</button>
                        </div>
                        <Button variant="outline" size="sm" className="h-7">
                          + Add Team Member
                        </Button>
                      </div>
                    </div>
                    <div className="grid gap-2">
                      <Label>External Participants</Label>
                      <div className="flex flex-wrap gap-2 p-2 border rounded-md min-h-[80px]">
                        <Button variant="outline" size="sm" className="h-7">
                          + Add External Participant
                        </Button>
                      </div>
                    </div>
                    <div className="grid gap-2">
                      <Label>Stakeholders</Label>
                      <div className="flex flex-wrap gap-2 p-2 border rounded-md min-h-[80px]">
                        <div className="flex items-center gap-1 bg-primary/10 text-primary rounded-md px-2 py-1 text-sm">
                          Finance Department
                          <button className="text-primary hover:text-primary/80">×</button>
                        </div>
                        <Button variant="outline" size="sm" className="h-7">
                          + Add Stakeholder
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="flex justify-end gap-4">
                <Button variant="outline">Save as Draft</Button>
                <Button>Initiate Audit</Button>
              </div>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Audit Checklist</CardTitle>
                  <CardDescription>Required steps to initiate an audit</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { title: "Basic Information", icon: FileText, completed: false },
                      { title: "Scope Definition", icon: ClipboardList, completed: false },
                      { title: "Team Assignment", icon: Users, completed: false },
                      { title: "Schedule Confirmation", icon: CalendarIcon, completed: false },
                      { title: "Approval", icon: CheckCircle2, completed: false },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className={`flex items-center gap-3 p-3 rounded-md ${
                          item.completed ? "bg-green-50" : "bg-muted/50"
                        }`}
                      >
                        <div
                          className={`flex items-center justify-center w-8 h-8 rounded-full ${
                            item.completed ? "bg-green-100 text-green-700" : "bg-muted text-muted-foreground"
                          }`}
                        >
                          <item.icon className="h-4 w-4" />
                        </div>
                        <div className="flex-1">
                          <div className={`font-medium ${item.completed ? "text-green-700" : ""}`}>{item.title}</div>
                        </div>
                        {item.completed ? (
                          <CheckCircle2 className="h-5 w-5 text-green-500" />
                        ) : (
                          <ChevronRight className="h-5 w-5 text-muted-foreground" />
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Recent Audits</CardTitle>
                  <CardDescription>Recently initiated audits</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        name: "IT Security Assessment",
                        date: format(new Date(), "MMM dd, yyyy"),
                        status: "In Progress",
                      },
                      {
                        name: "Operational Process Review",
                        date: format(new Date(Date.now() - 7 * 24 * 60 * 60 * 1000), "MMM dd, yyyy"),
                        status: "Planning",
                      },
                      {
                        name: "Vendor Compliance Audit",
                        date: format(new Date(Date.now() - 14 * 24 * 60 * 60 * 1000), "MMM dd, yyyy"),
                        status: "Planning",
                      },
                    ].map((audit, index) => (
                      <div key={index} className="flex items-center justify-between p-3 border rounded-md">
                        <div>
                          <div className="font-medium">{audit.name}</div>
                          <div className="text-sm text-muted-foreground">Initiated: {audit.date}</div>
                        </div>
                        <Button variant="ghost" size="sm">
                          View
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Help & Resources</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Button variant="link" className="h-auto p-0 text-primary justify-start">
                      Audit Initiation Guide
                    </Button>
                    <Button variant="link" className="h-auto p-0 text-primary justify-start">
                      Scope Definition Best Practices
                    </Button>
                    <Button variant="link" className="h-auto p-0 text-primary justify-start">
                      Team Assignment Guidelines
                    </Button>
                    <Button variant="link" className="h-auto p-0 text-primary justify-start">
                      Audit Templates
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
