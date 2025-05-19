"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  BarChart3,
  ClipboardCheck,
  FileText,
  Home,
  LogOut,
  Users,
  Calendar,
  FileSearch,
  RefreshCw,
  FileBarChart2,
  ArrowRightLeft,
  Shield,
  User,
  Lock,
  AlertTriangle,
  BarChart,
  PieChart,
  List,
  Eye,
  MessageSquare,
  PlusCircle,
  ChevronDown,
  ChevronUp,
} from "lucide-react"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

export function InternalAuditorSidebar() {
  const [collapsed, setCollapsed] = useState(false)
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    personal: false,
    myDashboard: false,
    regulatory: false,
    compliance: false,
    overview: false,
    complianceCalendar: false,
    auditManagement: false,
    requests: false,
  })

  const toggleSection = (section: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  return (
    <div
      className={`border-r bg-background ${
        collapsed ? "w-16" : "w-64"
      } transition-all duration-300 flex flex-col h-screen fixed top-0 left-0 z-10`}
    >
      <div className="h-14 border-b flex items-center px-4 justify-between">
        {!collapsed && <span className="font-semibold">Audit Management</span>}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setCollapsed(!collapsed)}
          className={collapsed ? "mx-auto" : ""}
        >
          {collapsed ? "→" : "←"}
        </Button>
      </div>
      <ScrollArea className="flex-1 overflow-y-auto">
        <div className="px-2 py-4">
          <nav className="space-y-1">
            {/* Internal Auditor */}
            {/* Personal Section */}
            <Collapsible open={openSections.personal}>
              <CollapsibleTrigger
                onClick={() => toggleSection("personal")}
                className="flex w-full items-center justify-between rounded-md px-2 py-1.5 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
              >
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-2" />
                  {!collapsed && <span>Personal</span>}
                </div>
                {!collapsed &&
                  (openSections.personal ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />)}
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="pl-6 space-y-1 pt-1">
                  <SidebarItem
                    icon={User}
                    label="My Account"
                    href="/dashboard/internal-auditor/my-account"
                    collapsed={collapsed}
                  />
                  <SidebarItem
                    icon={Lock}
                    label="Password Security"
                    href="/dashboard/internal-auditor/password-security"
                    collapsed={collapsed}
                  />
                </div>
              </CollapsibleContent>
            </Collapsible>

            {/* My Dashboard */}
            <Collapsible open={openSections.myDashboard}>
              <CollapsibleTrigger
                onClick={() => toggleSection("myDashboard")}
                className="flex w-full items-center justify-between rounded-md px-2 py-1.5 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
              >
                <div className="flex items-center">
                  <Home className="h-4 w-4 mr-2" />
                  {!collapsed && <span>My Dashboard</span>}
                </div>
                {!collapsed &&
                  (openSections.myDashboard ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />)}
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="pl-6 space-y-1 pt-1">
                  <SidebarItem
                    icon={Home}
                    label="Dashboard Home"
                    href="/dashboard/internal-auditor"
                    collapsed={collapsed}
                  />

                  {/* Regulatory Exposure - Nested */}
                  <Collapsible open={openSections.regulatory}>
                    <CollapsibleTrigger
                      onClick={() => toggleSection("regulatory")}
                      className="flex w-full items-center justify-between rounded-md px-2 py-1.5 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
                    >
                      <div className="flex items-center">
                        <AlertTriangle className="h-4 w-4 mr-2" />
                        {!collapsed && <span>Regulatory Exposure</span>}
                      </div>
                      {!collapsed &&
                        (openSections.regulatory ? (
                          <ChevronUp className="h-4 w-4" />
                        ) : (
                          <ChevronDown className="h-4 w-4" />
                        ))}
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <div className="pl-6 space-y-1 pt-1">
                        <SidebarItem
                          icon={FileText}
                          label="Findings"
                          href="/dashboard/internal-auditor/regulatory-exposure/findings"
                          collapsed={collapsed}
                        />
                        <SidebarItem
                          icon={BarChart}
                          label="Risks"
                          href="/dashboard/internal-auditor/regulatory-exposure/risks"
                          collapsed={collapsed}
                        />
                        <SidebarItem
                          icon={BarChart}
                          label="Impacts"
                          href="/dashboard/internal-auditor/regulatory-exposure/impacts"
                          collapsed={collapsed}
                        />
                        <SidebarItem
                          icon={FileSearch}
                          label="Compliance Mapping"
                          href="/dashboard/internal-auditor/regulatory-exposure/compliance-mapping"
                          collapsed={collapsed}
                        />
                      </div>
                    </CollapsibleContent>
                  </Collapsible>

                  {/* Compliance Maturity - Nested */}
                  <Collapsible open={openSections.compliance}>
                    <CollapsibleTrigger
                      onClick={() => toggleSection("compliance")}
                      className="flex w-full items-center justify-between rounded-md px-2 py-1.5 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
                    >
                      <div className="flex items-center">
                        <BarChart className="h-4 w-4 mr-2" />
                        {!collapsed && <span>Compliance Maturity</span>}
                      </div>
                      {!collapsed &&
                        (openSections.compliance ? (
                          <ChevronUp className="h-4 w-4" />
                        ) : (
                          <ChevronDown className="h-4 w-4" />
                        ))}
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <div className="pl-6 space-y-1 pt-1">
                        <SidebarItem
                          icon={Shield}
                          label="ISO 2700"
                          href="/dashboard/internal-auditor/compliance-maturity/iso-2700"
                          collapsed={collapsed}
                        />
                        <SidebarItem
                          icon={Shield}
                          label="NIST"
                          href="/dashboard/internal-auditor/compliance-maturity/nist"
                          collapsed={collapsed}
                        />
                        <SidebarItem
                          icon={Shield}
                          label="CIS"
                          href="/dashboard/internal-auditor/compliance-maturity/cis"
                          collapsed={collapsed}
                        />
                        <SidebarItem
                          icon={Shield}
                          label="SEBI"
                          href="/dashboard/internal-auditor/compliance-maturity/sebi"
                          collapsed={collapsed}
                        />
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                </div>
              </CollapsibleContent>
            </Collapsible>

            {/* Posture Maturity */}
            <SidebarItem
              icon={PieChart}
              label="Posture Maturity"
              href="/dashboard/internal-auditor/posture-maturity"
              collapsed={collapsed}
            />

            {/* Overview */}
            <Collapsible open={openSections.overview}>
              <CollapsibleTrigger
                onClick={() => toggleSection("overview")}
                className="flex w-full items-center justify-between rounded-md px-2 py-1.5 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
              >
                <div className="flex items-center">
                  <BarChart3 className="h-4 w-4 mr-2" />
                  {!collapsed && <span>Overview</span>}
                </div>
                {!collapsed &&
                  (openSections.overview ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />)}
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="pl-6 space-y-1 pt-1">
                  <SidebarItem
                    icon={BarChart3}
                    label="Current Audit Status"
                    href="/dashboard/internal-auditor/overview/current-audit-status"
                    collapsed={collapsed}
                  />
                  <SidebarItem
                    icon={List}
                    label="Table"
                    href="/dashboard/internal-auditor/overview/table"
                    collapsed={collapsed}
                  />
                </div>
              </CollapsibleContent>
            </Collapsible>

            {/* Compliance Calendar */}
            <Collapsible open={openSections.complianceCalendar}>
              <CollapsibleTrigger
                onClick={() => toggleSection("complianceCalendar")}
                className="flex w-full items-center justify-between rounded-md px-2 py-1.5 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
              >
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  {!collapsed && <span>Compliance Calendar</span>}
                </div>
                {!collapsed &&
                  (openSections.complianceCalendar ? (
                    <ChevronUp className="h-4 w-4" />
                  ) : (
                    <ChevronDown className="h-4 w-4" />
                  ))}
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="pl-6 space-y-1 pt-1">
                  <SidebarItem
                    icon={Calendar}
                    label="Overall Schedule"
                    href="/dashboard/internal-auditor/compliance-calendar/overall-schedule"
                    collapsed={collapsed}
                  />
                  <SidebarItem
                    icon={Calendar}
                    label="Task/Compliance Calendar"
                    href="/dashboard/internal-auditor/compliance-calendar/task-calendar"
                    collapsed={collapsed}
                  />
                </div>
              </CollapsibleContent>
            </Collapsible>

            {/* Audit Management */}
            <Collapsible open={openSections.auditManagement}>
              <CollapsibleTrigger
                onClick={() => toggleSection("auditManagement")}
                className="flex w-full items-center justify-between rounded-md px-2 py-1.5 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
              >
                <div className="flex items-center">
                  <ClipboardCheck className="h-4 w-4 mr-2" />
                  {!collapsed && <span>Audit Management</span>}
                </div>
                {!collapsed &&
                  (openSections.auditManagement ? (
                    <ChevronUp className="h-4 w-4" />
                  ) : (
                    <ChevronDown className="h-4 w-4" />
                  ))}
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="pl-6 space-y-1 pt-1">
                  <SidebarItem
                    icon={FileText}
                    label="Audit Plan"
                    href="/dashboard/internal-auditor/audit-management/audit-plan"
                    collapsed={collapsed}
                  />
                  <SidebarItem
                    icon={Calendar}
                    label="Audit Schedule"
                    href="/dashboard/internal-auditor/audit-management/audit-schedule"
                    collapsed={collapsed}
                  />
                  <SidebarItem
                    icon={FileSearch}
                    label="Audit Scope"
                    href="/dashboard/internal-auditor/audit-management/audit-scope"
                    collapsed={collapsed}
                  />
                  <SidebarItem
                    icon={Users}
                    label="Participants"
                    href="/dashboard/internal-auditor/audit-management/participants"
                    collapsed={collapsed}
                  />
                  <SidebarItem
                    icon={PlusCircle}
                    label="Initiate Audit"
                    href="/dashboard/internal-auditor/audit-management/initiate-audit"
                    collapsed={collapsed}
                  />
                  <SidebarItem
                    icon={FileSearch}
                    label="Evidence Lifecycle"
                    href="/dashboard/internal-auditor/evidence-lifecycle"
                    collapsed={collapsed}
                  />
                  <SidebarItem
                    icon={RefreshCw}
                    label="Review & Revalidation"
                    href="/dashboard/internal-auditor/review-revalidation"
                    collapsed={collapsed}
                  />
                  <SidebarItem
                    icon={FileBarChart2}
                    label="Report & Recommendation"
                    href="/dashboard/internal-auditor/report-recommendation"
                    collapsed={collapsed}
                  />
                  <SidebarItem
                    icon={ArrowRightLeft}
                    label="Follow-up"
                    href="/dashboard/internal-auditor/follow-up"
                    collapsed={collapsed}
                  />
                </div>
              </CollapsibleContent>
            </Collapsible>

            {/* Requests */}
            <Collapsible open={openSections.requests}>
              <CollapsibleTrigger
                onClick={() => toggleSection("requests")}
                className="flex w-full items-center justify-between rounded-md px-2 py-1.5 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
              >
                <div className="flex items-center">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  {!collapsed && <span>Requests</span>}
                </div>
                {!collapsed &&
                  (openSections.requests ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />)}
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="pl-6 space-y-1 pt-1">
                  <SidebarItem
                    icon={Eye}
                    label="View Request"
                    href="/dashboard/internal-auditor/requests/view"
                    collapsed={collapsed}
                  />
                  <SidebarItem
                    icon={PlusCircle}
                    label="Create Request"
                    href="/dashboard/internal-auditor/requests/create"
                    collapsed={collapsed}
                  />
                </div>
              </CollapsibleContent>
            </Collapsible>
          </nav>
        </div>
      </ScrollArea>
      <div className="border-t p-2">
        <Button variant="ghost" className={`w-full justify-start ${collapsed ? "px-2" : ""}`}>
          <LogOut className="h-4 w-4 mr-2" />
          {!collapsed && <span>Log out</span>}
        </Button>
      </div>
    </div>
  )
}

interface SidebarItemProps {
  icon: React.ElementType
  label: string
  href: string
  collapsed: boolean
  className?: string
}

function SidebarItem({ icon: Icon, label, href, collapsed, className }: SidebarItemProps) {
  return (
    <Link
      href={href}
      className={`flex items-center rounded-md px-2 py-1.5 text-sm font-medium hover:bg-accent hover:text-accent-foreground ${
        collapsed ? "justify-center" : ""
      } ${className || ""}`}
    >
      <Icon className="h-4 w-4 mr-2" />
      {!collapsed && <span>{label}</span>}
    </Link>
  )
}
