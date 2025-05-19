import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from "@/components/ui/calendar"
import { Badge } from "@/components/ui/badge"

export function AuditCalendar() {
  // Current date for the calendar
  const date = new Date()

  // Example dates with events
  const eventDates = [
    new Date(2025, 4, 21), // May 21, 2025
    new Date(2025, 4, 22), // May 22, 2025
    new Date(2025, 4, 24), // May 24, 2025
    new Date(2025, 4, 28), // May 28, 2025
    new Date(2025, 4, 30), // May 30, 2025
    new Date(2025, 5, 15), // June 15, 2025
  ]

  // Upcoming events
  const upcomingEvents = [
    {
      id: 1,
      title: "Review HR policy updates",
      date: "May 21, 2025",
      time: "10:00 AM",
      type: "Task Deadline",
    },
    {
      id: 2,
      title: "Financial Statements Review",
      date: "May 22, 2025",
      time: "2:00 PM",
      type: "Task Deadline",
    },
    {
      id: 3,
      title: "Vendor Compliance Meeting",
      date: "May 23, 2025",
      time: "11:30 AM",
      type: "Meeting",
    },
    {
      id: 4,
      title: "IT Security Controls Assessment",
      date: "May 24, 2025",
      time: "9:00 AM",
      type: "Evidence Collection",
    },
  ]

  return (
    <div className="grid gap-4 md:grid-cols-3">
      <Card className="md:col-span-2">
        <CardHeader>
          <CardTitle>Audit Calendar</CardTitle>
          <CardDescription>Schedule of audit activities and deadlines</CardDescription>
        </CardHeader>
        <CardContent>
          <Calendar
            mode="single"
            selected={date}
            className="rounded-md border"
            modifiers={{
              event: eventDates,
            }}
            modifiersStyles={{
              event: {
                fontWeight: "bold",
                backgroundColor: "hsl(var(--primary) / 0.1)",
                color: "hsl(var(--primary))",
                borderRadius: "0",
              },
            }}
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Upcoming Events</CardTitle>
          <CardDescription>Next 7 days</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="flex flex-col space-y-1 border-l-2 border-primary pl-3">
                <div className="font-medium">{event.title}</div>
                <div className="text-sm text-muted-foreground">
                  {event.date} at {event.time}
                </div>
                <Badge variant="outline" className="w-fit">
                  {event.type}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
