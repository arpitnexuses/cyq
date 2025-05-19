import { InternalAuditorDashboardHeader } from "@/components/internal-auditor-dashboard-header"
import { InternalAuditorSidebar } from "@/components/internal-auditor-sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Download, TrendingUp, BarChart3, Calendar, ArrowRight } from "lucide-react"
import { Progress } from "@/components/ui/progress"

export default function PostureMaturityPage() {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <InternalAuditorSidebar />
      <div className="flex-1 flex flex-col">
        <InternalAuditorDashboardHeader />
        <main className="flex-1 p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Posture Maturity</h1>
              <p className="text-muted-foreground">Security and compliance posture assessment</p>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline">
                <Download className="h-4 w-4 mr-2" />
                Export Report
              </Button>
              <Button>View Historical Data</Button>
            </div>
          </div>

          {/* Overall Maturity Score */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Overall Maturity Score</CardTitle>
              <CardDescription>Based on the latest assessment across all frameworks</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Maturity Level: 3.4 / 5</span>
                <span className="text-sm font-medium">Target: 4.0</span>
              </div>
              <Progress value={68} className="h-3" />
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
                <div className="flex flex-col items-center p-4 bg-slate-100 rounded-lg">
                  <div className="text-3xl font-bold">3.8</div>
                  <div className="text-sm text-muted-foreground">ISO 27001</div>
                </div>
                <div className="flex flex-col items-center p-4 bg-slate-100 rounded-lg">
                  <div className="text-3xl font-bold">3.2</div>
                  <div className="text-sm text-muted-foreground">NIST CSF</div>
                </div>
                <div className="flex flex-col items-center p-4 bg-slate-100 rounded-lg">
                  <div className="text-3xl font-bold">3.6</div>
                  <div className="text-sm text-muted-foreground">CIS Controls</div>
                </div>
                <div className="flex flex-col items-center p-4 bg-slate-100 rounded-lg">
                  <div className="text-3xl font-bold">4.1</div>
                  <div className="text-sm text-muted-foreground">SEBI Guidelines</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="overview">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="domains">Security Domains</TabsTrigger>
              <TabsTrigger value="trends">Maturity Trends</TabsTrigger>
              <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="space-y-4 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Maturity Model Overview</CardTitle>
                  <CardDescription>Current maturity levels across key security domains</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {[
                      { id: 1, name: "Governance & Risk Management", level: 3.7, target: 4.0 },
                      { id: 2, name: "Identity & Access Management", level: 3.9, target: 4.0 },
                      { id: 3, name: "Data Protection", level: 3.2, target: 4.0 },
                      { id: 4, name: "Security Operations", level: 3.0, target: 4.0 },
                      { id: 5, name: "Incident Management", level: 3.5, target: 4.0 },
                      { id: 6, name: "Business Continuity", level: 3.3, target: 4.0 },
                      { id: 7, name: "Compliance Management", level: 4.0, target: 4.0 },
                      { id: 8, name: "Third-Party Risk Management", level: 2.8, target: 4.0 },
                    ].map((domain) => (
                      <div key={domain.id} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="font-medium">{domain.name}</span>
                          <div className="flex items-center space-x-2">
                            <Badge variant="outline">Level {domain.level}</Badge>
                            <Badge variant="secondary">Target {domain.target}</Badge>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Progress value={(domain.level / 5) * 100} className="h-2 flex-1" />
                          <span className="text-sm font-medium">{((domain.level / 5) * 100).toFixed(0)}%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="domains" className="space-y-4 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Security Domains</CardTitle>
                  <CardDescription>Detailed assessment of security domains</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {[
                      {
                        id: 1,
                        name: "Identity & Access Management",
                        level: 3.9,
                        strengths: [
                          "Strong authentication controls",
                          "Regular access reviews",
                          "Privileged access management",
                        ],
                        weaknesses: ["Incomplete identity lifecycle management", "Manual provisioning processes"],
                      },
                      {
                        id: 2,
                        name: "Data Protection",
                        level: 3.2,
                        strengths: ["Data classification implemented", "Encryption for sensitive data"],
                        weaknesses: [
                          "Incomplete DLP implementation",
                          "Limited data retention controls",
                          "Manual data discovery",
                        ],
                      },
                    ].map((domain) => (
                      <div key={domain.id} className="border rounded-md p-4">
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                          <div>
                            <h3 className="font-medium">{domain.name}</h3>
                            <div className="flex items-center mt-1">
                              <Badge variant="outline">Maturity Level {domain.level}</Badge>
                            </div>
                          </div>
                          <Button variant="outline" size="sm" className="mt-2 md:mt-0">
                            View Details
                          </Button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                          <div>
                            <h4 className="text-sm font-medium mb-2">Strengths</h4>
                            <ul className="space-y-1">
                              {domain.strengths.map((strength, index) => (
                                <li key={index} className="text-sm flex items-start">
                                  <span className="text-green-500 mr-2">✓</span>
                                  {strength}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="text-sm font-medium mb-2">Improvement Areas</h4>
                            <ul className="space-y-1">
                              {domain.weaknesses.map((weakness, index) => (
                                <li key={index} className="text-sm flex items-start">
                                  <span className="text-amber-500 mr-2">!</span>
                                  {weakness}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="trends" className="mt-6">
              {/* Trends content */}
              <Card>
                <CardHeader>
                  <CardTitle>Maturity Trends</CardTitle>
                  <CardDescription>Historical maturity level trends</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-center p-6 border rounded-md">
                    <div className="text-center">
                      <BarChart3 className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                      <p>Maturity trend charts would be displayed here</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="recommendations" className="mt-6">
              {/* Recommendations content */}
              <Card>
                <CardHeader>
                  <CardTitle>Improvement Recommendations</CardTitle>
                  <CardDescription>Suggested actions to improve maturity levels</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        id: 1,
                        domain: "Third-Party Risk Management",
                        recommendation: "Implement automated vendor risk assessment process",
                        impact: "High",
                        effort: "Medium",
                        timeline: "Q3 2025",
                      },
                      {
                        id: 2,
                        domain: "Data Protection",
                        recommendation: "Deploy data loss prevention (DLP) solution",
                        impact: "High",
                        effort: "High",
                        timeline: "Q4 2025",
                      },
                      {
                        id: 3,
                        domain: "Security Operations",
                        recommendation: "Enhance security monitoring capabilities",
                        impact: "Medium",
                        effort: "Medium",
                        timeline: "Q3 2025",
                      },
                    ].map((item) => (
                      <div key={item.id} className="flex items-start space-x-3 p-3 border rounded-md">
                        <TrendingUp className="h-5 w-5 text-primary mt-0.5" />
                        <div className="flex-1">
                          <div className="font-medium">{item.recommendation}</div>
                          <div className="text-sm text-muted-foreground">Domain: {item.domain}</div>
                          <div className="flex items-center mt-2 space-x-4">
                            <Badge variant="outline">Impact: {item.impact}</Badge>
                            <Badge variant="outline">Effort: {item.effort}</Badge>
                            <div className="flex items-center text-sm">
                              <Calendar className="h-3 w-3 mr-1" />
                              {item.timeline}
                            </div>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm" className="gap-1">
                          Details
                          <ArrowRight className="h-4 w-4" />
                        </Button>
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
