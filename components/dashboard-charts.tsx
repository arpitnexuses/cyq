import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function DashboardCharts() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Audit Status Distribution</CardTitle>
          <CardDescription>Current status of all audits</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[300px] w-full">
            <div className="flex h-[250px] items-end justify-around gap-4 px-2">
              {[
                { label: "Planning", value: 15, color: "#94a3b8" },
                { label: "In Progress", value: 45, color: "#3b82f6" },
                { label: "Review", value: 25, color: "#f59e0b" },
                { label: "Completed", value: 15, color: "#10b981" },
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center">
                  <span className="mb-1 text-sm font-medium">{item.value}%</span>
                  <div
                    className="w-16 rounded-t-md transition-all duration-500"
                    style={{
                      height: `${item.value * 2}px`,
                      backgroundColor: item.color,
                    }}
                  />
                  <span className="mt-2 text-xs font-medium">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Compliance by Framework</CardTitle>
          <CardDescription>Compliance level across frameworks</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[300px] w-full">
            <div className="flex h-[250px] items-end justify-around gap-4 px-2">
              {[
                { label: "ISO 27001", value: 78, color: "#10b981" },
                { label: "NIST", value: 65, color: "#f59e0b" },
                { label: "CIS", value: 82, color: "#10b981" },
                { label: "SEBI", value: 45, color: "#ef4444" },
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center">
                  <span className="mb-1 text-sm font-medium">{item.value}%</span>
                  <div
                    className="w-16 rounded-t-md transition-all duration-500"
                    style={{
                      height: `${item.value * 2}px`,
                      backgroundColor: item.value < 50 ? "#ef4444" : item.value < 70 ? "#f59e0b" : "#10b981",
                    }}
                  />
                  <span className="mt-2 text-xs font-medium">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
