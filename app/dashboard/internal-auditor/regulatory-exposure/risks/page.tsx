import { Progress } from "@/components/ui/progress"
import { InternalAuditorDashboardHeader } from "@/components/internal-auditor-dashboard-header"
import { InternalAuditorSidebar } from "@/components/internal-auditor-sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search, Filter, Download, Plus } from "lucide-react"

export default function RisksPage() {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <InternalAuditorSidebar />
      <div className="flex-1 flex flex-col">
        <InternalAuditorDashboardHeader />
        <main className="flex-1 p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Risks</h1>
              <p className="text-muted-foreground">Identify and manage regulatory risks</p>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline">
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                New Risk
              </Button>
            </div>
          </div>

          <div className="flex items-center space-x-2 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search risks..." className="pl-8" />
            </div>
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
          </div>

          <Tabs defaultValue="all">
            <TabsList>
              <TabsTrigger value="all">All Risks</TabsTrigger>
              <TabsTrigger value="high">High</TabsTrigger>
              <TabsTrigger value="medium">Medium</TabsTrigger>
              <TabsTrigger value="low">Low</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="space-y-4 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Risk Register</CardTitle>
                  <CardDescription>Comprehensive view of identified risks</CardDescription>
                </CardHeader>
                <CardContent>
                  {/* Risk Mitigation Progress Chart */}
                  <div className="mb-8">
                    <h3 className="text-sm font-medium mb-4">Risk Mitigation Progress</h3>
                    <div className="h-64 flex items-end justify-between gap-4 px-4">
                      {[
                        {
                          id: 1,
                          title: "Data breach",
                          category: "Information Security",
                          level: "High",
                          mitigation: 35,
                        },
                        {
                          id: 2,
                          title: "Non-compliance",
                          category: "Compliance",
                          level: "High",
                          mitigation: 60,
                        },
                        {
                          id: 3,
                          title: "Business continuity",
                          category: "Operational",
                          level: "Medium",
                          mitigation: 45,
                        },
                        {
                          id: 4,
                          title: "Vendor security",
                          category: "Third Party",
                          level: "Medium",
                          mitigation: 30,
                        },
                        {
                          id: 5,
                          title: "Security awareness",
                          category: "People",
                          level: "Medium",
                          mitigation: 50,
                        },
                      ].map((risk) => (
                        <div key={risk.id} className="flex flex-col items-center flex-1">
                          <div className="text-sm font-medium mb-1">{risk.mitigation}%</div>
                          <div className="w-full flex justify-center">
                            <div
                              className={`w-16 rounded-t-md ${
                                risk.mitigation < 40
                                  ? "bg-red-500"
                                  : risk.mitigation < 70
                                    ? "bg-amber-500"
                                    : "bg-green-500"
                              }`}
                              style={{ height: `${risk.mitigation * 2}px` }}
                            ></div>
                          </div>
                          <div className="text-xs mt-2 text-center font-medium truncate w-full px-1" title={risk.title}>
                            {risk.title}
                          </div>
                          <Badge
                            variant={
                              risk.level === "High" ? "destructive" : risk.level === "Medium" ? "default" : "secondary"
                            }
                            className="mt-1 text-xs"
                          >
                            {risk.level}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-6">
                    {[
                      {
                        id: 1,
                        title: "Data breach due to inadequate access controls",
                        description: "Risk of unauthorized access to sensitive data due to weak access controls",
                        category: "Information Security",
                        level: "High",
                        impact: "Severe",
                        likelihood: "Medium",
                        mitigation: 35,
                      },
                      {
                        id: 2,
                        title: "Non-compliance with data protection regulations",
                        description: "Risk of regulatory penalties due to non-compliance with data protection laws",
                        category: "Compliance",
                        level: "High",
                        impact: "Severe",
                        likelihood: "Medium",
                        mitigation: 60,
                      },
                      {
                        id: 3,
                        title: "Inadequate business continuity planning",
                        description: "Risk of operational disruption due to insufficient disaster recovery procedures",
                        category: "Operational",
                        level: "Medium",
                        impact: "Moderate",
                        likelihood: "Medium",
                        mitigation: 45,
                      },
                      {
                        id: 4,
                        title: "Vendor security vulnerabilities",
                        description: "Risk of security breaches through third-party vendor systems",
                        category: "Third Party",
                        level: "Medium",
                        impact: "Moderate",
                        likelihood: "Medium",
                        mitigation: 30,
                      },
                      {
                        id: 5,
                        title: "Inadequate security awareness among employees",
                        description: "Risk of security incidents due to lack of employee security awareness",
                        category: "People",
                        level: "Medium",
                        impact: "Moderate",
                        likelihood: "High",
                        mitigation: 50,
                      },
                    ].map((risk) => (
                      <div key={risk.id} className="border rounded-md p-4">
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                          <div>
                            <h3 className="font-medium">{risk.title}</h3>
                            <p className="text-sm text-muted-foreground">{risk.description}</p>
                          </div>
                          <Badge
                            variant={
                              risk.level === "High" ? "destructive" : risk.level === "Medium" ? "default" : "secondary"
                            }
                            className="mt-2 md:mt-0"
                          >
                            {risk.level} Risk
                          </Badge>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                          <div>
                            <p className="text-sm font-medium">Category</p>
                            <p className="text-sm">{risk.category}</p>
                          </div>
                          <div>
                            <p className="text-sm font-medium">Impact</p>
                            <p className="text-sm">{risk.impact}</p>
                          </div>
                          <div>
                            <p className="text-sm font-medium">Likelihood</p>
                            <p className="text-sm">{risk.likelihood}</p>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <p className="text-sm font-medium">Mitigation Progress</p>
                            <span className="text-sm">{risk.mitigation}%</span>
                          </div>
                          <Progress value={risk.mitigation} className="h-2" />
                        </div>

                        <div className="flex justify-end mt-4">
                          <Button variant="outline" size="sm">
                            View Details
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="high" className="mt-6">
              {/* High risks content */}
            </TabsContent>
            <TabsContent value="medium" className="mt-6">
              {/* Medium risks content */}
            </TabsContent>
            <TabsContent value="low" className="mt-6">
              {/* Low risks content */}
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}
