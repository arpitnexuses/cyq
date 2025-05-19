import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ArrowUpDown, Filter } from "lucide-react"

export function AuditTasksList() {
  const tasks = [
    {
      id: 1,
      title: "Review financial statements for Q1",
      audit: "Annual Financial Compliance",
      dueDate: "May 22, 2025",
      status: "Pending",
      assignee: {
        name: "You",
        avatar: "/abstract-user-avatar.png",
      },
    },
    {
      id: 2,
      title: "Collect evidence for IT security controls",
      audit: "IT Security Assessment",
      dueDate: "May 24, 2025",
      status: "In Progress",
      assignee: {
        name: "You",
        avatar: "/abstract-user-avatar.png",
      },
    },
    {
      id: 3,
      title: "Interview department heads for process review",
      audit: "Operational Process Review",
      dueDate: "May 28, 2025",
      status: "Pending",
      assignee: {
        name: "You",
        avatar: "/abstract-user-avatar.png",
      },
    },
    {
      id: 4,
      title: "Validate vendor compliance documentation",
      audit: "Vendor Compliance Audit",
      dueDate: "May 23, 2025",
      status: "Pending",
      assignee: {
        name: "Sarah K.",
        avatar: "/abstract-user-avatar.png",
      },
    },
    {
      id: 5,
      title: "Review HR policy updates",
      audit: "HR Policy Compliance",
      dueDate: "May 21, 2025",
      status: "In Progress",
      assignee: {
        name: "You",
        avatar: "/abstract-user-avatar.png",
      },
    },
  ]

  return (
    <Card>
      <CardHeader className="flex flex-row items-center">
        <div>
          <CardTitle>Assigned Tasks</CardTitle>
          <CardDescription>Your current audit tasks and assignments</CardDescription>
        </div>
        <div className="ml-auto flex gap-2">
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          <Button variant="outline" size="sm">
            <ArrowUpDown className="h-4 w-4 mr-2" />
            Sort
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {tasks.map((task) => (
            <div key={task.id} className="flex items-start space-x-4 p-2 rounded-md hover:bg-accent">
              <Checkbox id={`task-${task.id}`} />
              <div className="flex-1 space-y-1">
                <label
                  htmlFor={`task-${task.id}`}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {task.title}
                </label>
                <p className="text-sm text-muted-foreground">
                  {task.audit} • Due {task.dueDate}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant={task.status === "In Progress" ? "secondary" : "outline"}>{task.status}</Badge>
                <Avatar className="h-6 w-6">
                  <AvatarImage src={task.assignee.avatar || "/placeholder.svg"} alt={task.assignee.name} />
                  <AvatarFallback>{task.assignee.name.charAt(0)}</AvatarFallback>
                </Avatar>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
