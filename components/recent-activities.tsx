import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function RecentActivities() {
  const activities = [
    {
      id: 1,
      user: {
        name: "You",
        avatar: "/abstract-user-avatar.png",
      },
      action: "completed a task",
      item: "Review financial statements for Q1",
      time: "10 minutes ago",
    },
    {
      id: 2,
      user: {
        name: "Sarah K.",
        avatar: "/abstract-user-avatar.png",
      },
      action: "added a comment on",
      item: "IT Security Assessment",
      time: "32 minutes ago",
    },
    {
      id: 3,
      user: {
        name: "Michael R.",
        avatar: "/abstract-user-avatar.png",
      },
      action: "uploaded evidence for",
      item: "Vendor Compliance Audit",
      time: "1 hour ago",
    },
    {
      id: 4,
      user: {
        name: "You",
        avatar: "/abstract-user-avatar.png",
      },
      action: "started a task",
      item: "Review HR policy updates",
      time: "2 hours ago",
    },
    {
      id: 5,
      user: {
        name: "David L.",
        avatar: "/abstract-user-avatar.png",
      },
      action: "requested a review on",
      item: "Operational Process Review",
      time: "3 hours ago",
    },
    {
      id: 6,
      user: {
        name: "System",
        avatar: "/abstract-system-icon.png",
      },
      action: "scheduled a new audit",
      item: "Q2 Financial Compliance",
      time: "5 hours ago",
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activities</CardTitle>
        <CardDescription>Latest actions across all audits</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-start space-x-4">
              <Avatar className="h-8 w-8">
                <AvatarImage src={activity.user.avatar || "/placeholder.svg"} alt={activity.user.name} />
                <AvatarFallback>{activity.user.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="space-y-1">
                <p className="text-sm">
                  <span className="font-medium">{activity.user.name}</span> {activity.action}{" "}
                  <span className="font-medium">{activity.item}</span>
                </p>
                <p className="text-xs text-muted-foreground">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
