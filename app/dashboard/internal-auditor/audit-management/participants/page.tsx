import { InternalAuditorDashboardHeader } from "@/components/internal-auditor-dashboard-header"
import { InternalAuditorSidebar } from "@/components/internal-auditor-sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Download, Mail, Plus, Search, UserPlus } from "lucide-react"

export default function ParticipantsPage() {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <InternalAuditorSidebar />
      <div className="flex-1 flex flex-col">
        <InternalAuditorDashboardHeader />
        <main className="flex-1 p-6">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold tracking-tight">Audit Participants</h1>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
              <Button size="sm">
                <UserPlus className="h-4 w-4 mr-2" />
                Add Participant
              </Button>
            </div>
          </div>

          <Tabs defaultValue="active" className="w-full">
            <TabsList className="mb-4">
              <TabsTrigger value="active">Active Audits</TabsTrigger>
              <TabsTrigger value="team">Audit Team</TabsTrigger>
              <TabsTrigger value="external">External Participants</TabsTrigger>
            </TabsList>
            <TabsContent value="active" className="space-y-4">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Active Audit Participants</CardTitle>
                    <div className="relative w-64">
                      <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                      <input
                        type="text"
                        placeholder="Search participants..."
                        className="pl-8 h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                      />
                    </div>
                  </div>
                  <CardDescription>Participants assigned to active audits</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="rounded-md border">
                    <div className="grid grid-cols-5 bg-muted px-4 py-2 text-sm font-medium">
                      <div>Audit</div>
                      <div>Participant</div>
                      <div>Role</div>
                      <div>Status</div>
                      <div>Actions</div>
                    </div>
                    {[
                      {
                        audit: "Annual Financial Compliance",
                        name: "Alex Johnson",
                        email: "alex.j@example.com",
                        role: "Lead Auditor",
                        status: "Active",
                        initials: "AJ",
                      },
                      {
                        audit: "Annual Financial Compliance",
                        name: "Sarah Williams",
                        email: "sarah.w@example.com",
                        role: "Financial Specialist",
                        status: "Active",
                        initials: "SW",
                      },
                      {
                        audit: "IT Security Assessment",
                        name: "Michael Chen",
                        email: "michael.c@example.com",
                        role: "Lead Auditor",
                        status: "Active",
                        initials: "MC",
                      },
                      {
                        audit: "IT Security Assessment",
                        name: "Jessica Lee",
                        email: "jessica.l@example.com",
                        role: "Security Specialist",
                        status: "Active",
                        initials: "JL",
                      },
                      {
                        audit: "IT Security Assessment",
                        name: "David Smith",
                        email: "david.s@example.com",
                        role: "IT Specialist",
                        status: "Pending",
                        initials: "DS",
                      },
                      {
                        audit: "Operational Process Review",
                        name: "Emily Davis",
                        email: "emily.d@example.com",
                        role: "Lead Auditor",
                        status: "Active",
                        initials: "ED",
                      },
                      {
                        audit: "Operational Process Review",
                        name: "Robert Wilson",
                        email: "robert.w@example.com",
                        role: "Process Analyst",
                        status: "Pending",
                        initials: "RW",
                      },
                    ].map((participant, index) => (
                      <div key={index} className="grid grid-cols-5 px-4 py-3 text-sm border-t hover:bg-muted/50">
                        <div className="font-medium">{participant.audit}</div>
                        <div className="flex items-center gap-2">
                          <Avatar className="h-6 w-6">
                            <AvatarFallback>{participant.initials}</AvatarFallback>
                          </Avatar>
                          <div>
                            <div>{participant.name}</div>
                            <div className="text-xs text-muted-foreground">{participant.email}</div>
                          </div>
                        </div>
                        <div>
                          <Badge variant="outline" className="font-normal">
                            {participant.role}
                          </Badge>
                        </div>
                        <div>
                          <Badge
                            variant="outline"
                            className={
                              participant.status === "Active"
                                ? "bg-green-50 text-green-700 border-green-200"
                                : "bg-yellow-50 text-yellow-700 border-yellow-200"
                            }
                          >
                            {participant.status}
                          </Badge>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            <Mail className="h-4 w-4" />
                            <span className="sr-only">Email</span>
                          </Button>
                          <Button variant="outline" size="sm">
                            View
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="team">
              <Card>
                <CardHeader>
                  <CardTitle>Audit Team Members</CardTitle>
                  <CardDescription>Internal team members available for audits</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {[
                      {
                        name: "Alex Johnson",
                        role: "Lead Auditor",
                        department: "Internal Audit",
                        expertise: ["Financial", "Compliance", "Risk Management"],
                        audits: 12,
                        initials: "AJ",
                      },
                      {
                        name: "Sarah Williams",
                        role: "Financial Specialist",
                        department: "Finance",
                        expertise: ["Financial Controls", "Regulatory Reporting"],
                        audits: 8,
                        initials: "SW",
                      },
                      {
                        name: "Michael Chen",
                        role: "Lead Auditor",
                        department: "Internal Audit",
                        expertise: ["IT Security", "Data Privacy", "Infrastructure"],
                        audits: 15,
                        initials: "MC",
                      },
                      {
                        name: "Jessica Lee",
                        role: "Security Specialist",
                        department: "IT Security",
                        expertise: ["Network Security", "Access Controls", "Incident Response"],
                        audits: 6,
                        initials: "JL",
                      },
                      {
                        name: "Emily Davis",
                        role: "Lead Auditor",
                        department: "Internal Audit",
                        expertise: ["Operational", "Process Improvement", "Quality"],
                        audits: 10,
                        initials: "ED",
                      },
                      {
                        name: "Robert Wilson",
                        role: "Process Analyst",
                        department: "Operations",
                        expertise: ["Process Efficiency", "Resource Optimization"],
                        audits: 4,
                        initials: "RW",
                      },
                    ].map((member, index) => (
                      <Card key={index} className="border shadow-sm">
                        <CardHeader className="pb-2">
                          <div className="flex items-start gap-3">
                            <Avatar className="h-10 w-10">
                              <AvatarFallback>{member.initials}</AvatarFallback>
                            </Avatar>
                            <div>
                              <CardTitle className="text-md">{member.name}</CardTitle>
                              <CardDescription className="flex items-center gap-2">
                                {member.role} • {member.department}
                              </CardDescription>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="mt-1">
                            <h4 className="text-sm font-medium mb-1">Expertise:</h4>
                            <div className="flex flex-wrap gap-1 mb-3">
                              {member.expertise.map((skill, i) => (
                                <Badge key={i} variant="outline" className="text-xs">
                                  {skill}
                                </Badge>
                              ))}
                            </div>
                            <div className="text-sm">
                              <span className="font-medium">{member.audits}</span> audits completed
                            </div>
                          </div>
                          <div className="flex justify-end mt-3">
                            <Button size="sm">Assign to Audit</Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="external">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle>External Participants</CardTitle>
                      <CardDescription>External auditors and specialists</CardDescription>
                    </div>
                    <Button size="sm">
                      <Plus className="h-4 w-4 mr-2" />
                      Add External Participant
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="rounded-md border">
                    <div className="grid grid-cols-5 bg-muted px-4 py-2 text-sm font-medium">
                      <div>Name</div>
                      <div>Organization</div>
                      <div>Expertise</div>
                      <div>Status</div>
                      <div>Actions</div>
                    </div>
                    {[
                      {
                        name: "Jennifer Adams",
                        email: "jennifer.a@externalfirm.com",
                        organization: "ABC Audit Services",
                        expertise: "Financial Compliance",
                        status: "Active",
                        initials: "JA",
                      },
                      {
                        name: "Thomas Brown",
                        email: "thomas.b@securityconsult.com",
                        organization: "Security Consultants Inc.",
                        expertise: "Cybersecurity",
                        status: "Active",
                        initials: "TB",
                      },
                      {
                        name: "Lisa Martinez",
                        email: "lisa.m@regulatoryexperts.com",
                        organization: "Regulatory Experts LLC",
                        expertise: "Regulatory Compliance",
                        status: "Inactive",
                        initials: "LM",
                      },
                      {
                        name: "Kevin Park",
                        email: "kevin.p@itaudit.com",
                        organization: "IT Audit Specialists",
                        expertise: "IT Controls",
                        status: "Active",
                        initials: "KP",
                      },
                    ].map((participant, index) => (
                      <div key={index} className="grid grid-cols-5 px-4 py-3 text-sm border-t hover:bg-muted/50">
                        <div className="flex items-center gap-2">
                          <Avatar className="h-6 w-6">
                            <AvatarFallback>{participant.initials}</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium">{participant.name}</div>
                            <div className="text-xs text-muted-foreground">{participant.email}</div>
                          </div>
                        </div>
                        <div>{participant.organization}</div>
                        <div>
                          <Badge variant="outline" className="font-normal">
                            {participant.expertise}
                          </Badge>
                        </div>
                        <div>
                          <Badge
                            variant="outline"
                            className={
                              participant.status === "Active"
                                ? "bg-green-50 text-green-700 border-green-200"
                                : "bg-gray-50 text-gray-700 border-gray-200"
                            }
                          >
                            {participant.status}
                          </Badge>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            <Mail className="h-4 w-4" />
                            <span className="sr-only">Email</span>
                          </Button>
                          <Button variant="outline" size="sm">
                            View
                          </Button>
                          <Button variant="outline" size="sm">
                            Assign
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
