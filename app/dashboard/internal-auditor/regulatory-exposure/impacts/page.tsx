import { InternalAuditorDashboardHeader } from "@/components/internal-auditor-dashboard-header"
import { InternalAuditorSidebar } from "@/components/internal-auditor-sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search, Filter, Download, Plus, DollarSign, Users, Building, AlertTriangle } from "lucide-react"

export default function ImpactsPage() {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <InternalAuditorSidebar />
      <div className="flex-1 flex flex-col">
        <InternalAuditorDashboardHeader />
        <main className="flex-1 p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Impacts</h1>
              <p className="text-muted-foreground">Assess and manage regulatory impacts</p>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline">
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                New Impact Assessment
              </Button>
            </div>
          </div>

          <div className="flex items-center space-x-2 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search impacts..." className="pl-8" />
            </div>
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
          </div>

          <Tabs defaultValue="all">
            <TabsList>
              <TabsTrigger value="all">All Impacts</TabsTrigger>
              <TabsTrigger value="financial">Financial</TabsTrigger>
              <TabsTrigger value="operational">Operational</TabsTrigger>
              <TabsTrigger value="reputational">Reputational</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="space-y-4 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Impact Assessment</CardTitle>
                  <CardDescription>Evaluation of potential impacts from regulatory issues</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {[
                      {
                        id: 1,
                        title: "Financial penalties from data protection non-compliance",
                        description: "Potential fines and penalties from regulatory authorities",
                        category: "Financial",
                        severity: "High",
                        probability: "Medium",
                        estimatedCost: "$250,000 - $500,000",
                        affectedAreas: ["Finance", "Legal", "IT"],
                      },
                      {
                        id: 2,
                        title: "Business disruption due to system downtime",
                        description: "Operational impact from potential system outages",
                        category: "Operational",
                        severity: "Medium",
                        probability: "Medium",
                        estimatedCost: "$100,000 - $200,000 per day",
                        affectedAreas: ["Operations", "Customer Service", "Sales"],
                      },
                      {
                        id: 3,
                        title: "Reputational damage from security breach",
                        description: "Impact on brand reputation and customer trust",
                        category: "Reputational",
                        severity: "High",
                        probability: "Low",
                        estimatedCost: "Unquantifiable",
                        affectedAreas: ["Marketing", "PR", "Executive Management"],
                      },
                      {
                        id: 4,
                        title: "Legal action from affected customers",
                        description: "Potential lawsuits and legal proceedings",
                        category: "Legal",
                        severity: "High",
                        probability: "Low",
                        estimatedCost: "$500,000 - $2,000,000",
                        affectedAreas: ["Legal", "Customer Relations", "Finance"],
                      },
                      {
                        id: 5,
                        title: "Regulatory scrutiny and increased oversight",
                        description: "Additional compliance requirements and audits",
                        category: "Compliance",
                        severity: "Medium",
                        probability: "High",
                        estimatedCost: "$150,000 - $300,000 annually",
                        affectedAreas: ["Compliance", "Audit", "IT"],
                      },
                    ].map((impact) => (
                      <div key={impact.id} className="border rounded-md p-4">
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                          <div>
                            <h3 className="font-medium">{impact.title}</h3>
                            <p className="text-sm text-muted-foreground">{impact.description}</p>
                          </div>
                          <Badge
                            variant={
                              impact.severity === "High"
                                ? "destructive"
                                : impact.severity === "Medium"
                                  ? "default"
                                  : "secondary"
                            }
                            className="mt-2 md:mt-0"
                          >
                            {impact.severity} Impact
                          </Badge>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                          <div>
                            <p className="text-sm font-medium">Category</p>
                            <div className="flex items-center">
                              {impact.category === "Financial" ? (
                                <DollarSign className="h-4 w-4 mr-1 text-green-600" />
                              ) : impact.category === "Operational" ? (
                                <Building className="h-4 w-4 mr-1 text-blue-600" />
                              ) : impact.category === "Reputational" ? (
                                <Users className="h-4 w-4 mr-1 text-purple-600" />
                              ) : (
                                <AlertTriangle className="h-4 w-4 mr-1 text-amber-600" />
                              )}
                              <span className="text-sm">{impact.category}</span>
                            </div>
                          </div>
                          <div>
                            <p className="text-sm font-medium">Probability</p>
                            <p className="text-sm">{impact.probability}</p>
                          </div>
                          <div>
                            <p className="text-sm font-medium">Estimated Cost</p>
                            <p className="text-sm">{impact.estimatedCost}</p>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <p className="text-sm font-medium">Affected Areas</p>
                          <div className="flex flex-wrap gap-2">
                            {impact.affectedAreas.map((area, index) => (
                              <Badge key={index} variant="outline">
                                {area}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="flex justify-end mt-4">
                          <Button variant="outline" size="sm">
                            View Details
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Vertical Bar Chart for Impact Categories */}
                  <div className="mt-8 border-t pt-6">
                    <h3 className="text-sm font-medium mb-4">Impact Distribution by Category</h3>
                    <div className="h-64 flex items-end justify-between gap-4 px-2">
                      {[
                        { category: "Financial", value: 65, color: "bg-green-500" },
                        { category: "Operational", value: 45, color: "bg-blue-500" },
                        { category: "Reputational", value: 30, color: "bg-purple-500" },
                        { category: "Legal", value: 55, color: "bg-amber-500" },
                        { category: "Compliance", value: 70, color: "bg-red-500" },
                      ].map((item, index) => (
                        <div key={index} className="flex flex-col items-center flex-1">
                          <div className="text-sm font-medium mb-1">{item.value}%</div>
                          <div className="w-full flex justify-center">
                            <div
                              className={`w-16 ${item.color} rounded-t-md`}
                              style={{ height: `${item.value * 2}px` }}
                            ></div>
                          </div>
                          <div className="text-xs mt-2 text-center">{item.category}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="financial" className="mt-6">
              {/* Financial impacts content */}
            </TabsContent>
            <TabsContent value="operational" className="mt-6">
              {/* Operational impacts content */}
            </TabsContent>
            <TabsContent value="reputational" className="mt-6">
              {/* Reputational impacts content */}
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}
