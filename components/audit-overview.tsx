import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"

export function AuditOverview() {
  const audits = [
    {
      id: 1,
      name: "Annual Financial Compliance",
      status: "In Progress",
      progress: 65,
      dueDate: "May 30, 2025",
      priority: "High",
    },
    {
      id: 2,
      name: "IT Security Assessment",
      status: "In Progress",
      progress: 42,
      dueDate: "June 15, 2025",
      priority: "Critical",
    },
    {
      id: 3,
      name: "Operational Process Review",
      status: "Planning",
      progress: 10,
      dueDate: "July 10, 2025",
      priority: "Medium",
    },
    {
      id: 4,
      name: "Vendor Compliance Audit",
      status: "In Progress",
      progress: 78,
      dueDate: "May 25, 2025",
      priority: "High",
    },
    {
      id: 5,
      name: "HR Policy Compliance",
      status: "Review",
      progress: 90,
      dueDate: "May 22, 2025",
      priority: "Medium",
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Active Audits</CardTitle>
        <CardDescription>Overview of current audit engagements</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {audits.map((audit) => (
            <div key={audit.id} className="flex flex-col space-y-2">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">{audit.name}</div>
                  <div className="text-sm text-muted-foreground">Due: {audit.dueDate}</div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge
                    variant={
                      audit.priority === "Critical"
                        ? "destructive"
                        : audit.priority === "High"
                          ? "default"
                          : "secondary"
                    }
                  >
                    {audit.priority}
                  </Badge>
                  <Badge variant="outline">{audit.status}</Badge>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Progress value={audit.progress} className="h-2" />
                <span className="text-sm font-medium">{audit.progress}%</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
