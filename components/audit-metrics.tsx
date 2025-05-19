import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowUpRight, ArrowDownRight, BarChart3, FileCheck2, AlertCircle, Clock } from "lucide-react"

export function AuditMetrics() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Active Audits</CardTitle>
          <BarChart3 className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">12</div>
          <div className="mt-3 h-[60px] w-full">
            <div className="flex h-full items-end justify-between gap-2">
              {[40, 65, 45, 80, 75, 50, 70].map((value, i) => (
                <div key={i} className="flex flex-col items-center">
                  <span className="text-xs font-medium">{value}%</span>
                  <div
                    className="w-6 rounded-t-sm bg-primary transition-all duration-300"
                    style={{
                      height: `${value}%`,
                      backgroundColor: value < 50 ? "#ef4444" : value < 70 ? "#f59e0b" : "#10b981",
                    }}
                  />
                </div>
              ))}
            </div>
            <div className="mt-1 flex justify-between text-xs text-muted-foreground">
              <span>Mon</span>
              <span>Tue</span>
              <span>Wed</span>
              <span>Thu</span>
              <span>Fri</span>
              <span>Sat</span>
              <span>Sun</span>
            </div>
          </div>
          <p className="text-xs text-muted-foreground flex items-center mt-2">
            <ArrowUpRight className="mr-1 h-3 w-3 text-green-500" />
            <span className="text-green-500 font-medium">+2</span> from last month
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Completed Tasks</CardTitle>
          <FileCheck2 className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">87%</div>
          <div className="mt-3 h-[60px] w-full">
            <div className="flex h-full items-end justify-between gap-2">
              {[65, 75, 80, 87, 82, 78, 85].map((value, i) => (
                <div key={i} className="flex flex-col items-center">
                  <span className="text-xs font-medium">{value}%</span>
                  <div
                    className="w-6 rounded-t-sm transition-all duration-300"
                    style={{
                      height: `${value}%`,
                      backgroundColor: "#10b981",
                    }}
                  />
                </div>
              ))}
            </div>
            <div className="mt-1 flex justify-between text-xs text-muted-foreground">
              <span>Mon</span>
              <span>Tue</span>
              <span>Wed</span>
              <span>Thu</span>
              <span>Fri</span>
              <span>Sat</span>
              <span>Sun</span>
            </div>
          </div>
          <p className="text-xs text-muted-foreground flex items-center mt-2">
            <ArrowUpRight className="mr-1 h-3 w-3 text-green-500" />
            <span className="text-green-500 font-medium">+4%</span> from last week
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Pending Reviews</CardTitle>
          <Clock className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">8</div>
          <div className="mt-3 h-[60px] w-full">
            <div className="flex h-full items-end justify-between gap-2">
              {[3, 5, 7, 8, 6, 4, 8].map((value, i) => (
                <div key={i} className="flex flex-col items-center">
                  <span className="text-xs font-medium">{value}</span>
                  <div
                    className="w-6 rounded-t-sm transition-all duration-300"
                    style={{
                      height: `${value * 10}%`,
                      backgroundColor: value > 6 ? "#ef4444" : value > 4 ? "#f59e0b" : "#10b981",
                    }}
                  />
                </div>
              ))}
            </div>
            <div className="mt-1 flex justify-between text-xs text-muted-foreground">
              <span>Mon</span>
              <span>Tue</span>
              <span>Wed</span>
              <span>Thu</span>
              <span>Fri</span>
              <span>Sat</span>
              <span>Sun</span>
            </div>
          </div>
          <p className="text-xs text-muted-foreground flex items-center mt-2">
            <ArrowDownRight className="mr-1 h-3 w-3 text-red-500" />
            <span className="text-red-500 font-medium">+3</span> since yesterday
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Compliance Issues</CardTitle>
          <AlertCircle className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">4</div>
          <div className="mt-3 h-[60px] w-full">
            <div className="flex h-full items-end justify-between gap-2">
              {[8, 7, 6, 5, 4, 4, 4].map((value, i) => (
                <div key={i} className="flex flex-col items-center">
                  <span className="text-xs font-medium">{value}</span>
                  <div
                    className="w-6 rounded-t-sm transition-all duration-300"
                    style={{
                      height: `${value * 10}%`,
                      backgroundColor: value > 6 ? "#ef4444" : value > 4 ? "#f59e0b" : "#10b981",
                    }}
                  />
                </div>
              ))}
            </div>
            <div className="mt-1 flex justify-between text-xs text-muted-foreground">
              <span>Mon</span>
              <span>Tue</span>
              <span>Wed</span>
              <span>Thu</span>
              <span>Fri</span>
              <span>Sat</span>
              <span>Sun</span>
            </div>
          </div>
          <p className="text-xs text-muted-foreground flex items-center mt-2">
            <ArrowDownRight className="mr-1 h-3 w-3 text-green-500" />
            <span className="text-green-500 font-medium">-2</span> from last week
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
