import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function DashboardMetrics() {
  // Regulatory Exposure data
  const regulatoryData = [
    { label: "Findings", value: 24, maxValue: 100, color: "bg-gray-600" },
    { label: "Risks", value: 18, maxValue: 100, color: "bg-gray-600" },
    { label: "Impacts", value: 12, maxValue: 100, color: "bg-gray-600" },
  ]

  // Compliance Maturity data
  const complianceData = [
    { label: "ISO 2700", value: 78, color: "bg-gray-600" },
    { label: "NIST", value: 65, color: "bg-gray-600" },
    { label: "CIS", value: 82, color: "bg-gray-600" },
    { label: "SEBI", value: 91, color: "bg-gray-600" },
  ]

  // Fixed height for all charts
  const maxBarHeight = 180

  return (
    <div className="grid gap-6 md:grid-cols-2 mb-6">
      {/* Regulatory Exposure */}
      <Card>
        <CardHeader>
          <CardTitle>Regulatory Exposure</CardTitle>
          <CardDescription>Summary of findings, risks, and impacts</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-end justify-around h-[220px] rounded-md">
            {regulatoryData.map((item, index) => {
              const barHeight = (item.value / item.maxValue) * maxBarHeight
              return (
                <div key={index} className="flex flex-col items-center">
                  <div className="text-sm font-medium mb-1">{item.value}</div>
                  <div className={`w-16 ${item.color} rounded-t-md`} style={{ height: `${barHeight}px` }}></div>
                  <div className="text-sm font-medium mt-2">{item.label}</div>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>

      {/* Compliance Maturity */}
      <Card>
        <CardHeader>
          <CardTitle>Compliance Maturity</CardTitle>
          <CardDescription>Framework compliance status</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-end justify-around h-[220px] rounded-md">
            {complianceData.map((item, index) => {
              const barHeight = (item.value / 100) * maxBarHeight
              return (
                <div key={index} className="flex flex-col items-center">
                  <div className="text-sm font-medium mb-1">{item.value}%</div>
                  <div className={`w-16 ${item.color} rounded-t-md`} style={{ height: `${barHeight}px` }}></div>
                  <div className="text-sm font-medium mt-2">{item.label}</div>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
