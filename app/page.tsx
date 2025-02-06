"use client"

import { useState } from "react"
import { MetricsCard } from "@/components/metrics-card"
import { PnLDetailsCard } from "@/components/pnl-details-card"
import { DistributionCard } from "@/components/distribution-card"
import { PhishingCheckCard } from "@/components/phishing-check-card"
import { NavTabs } from "@/components/nav-tabs"
import { RecentPnLTable } from "@/components/recent-pnl-table"

import { userData } from "@/dummydata/user-data"

type Period = "1d" | "7d" | "30d"
type Tab = 'recent' | 'holdings' | 'activity'

export default function Home() {
  const [selectedPeriod, setSelectedPeriod] = useState<Period>("7d")
  const [activeTab, setActiveTab] = useState<Tab>('recent')

  // Use the first user's data
  const currentUser = userData[0]

  const renderContent = () => {
    switch (activeTab) {
      case 'recent':
        return <RecentPnLTable />
      case 'holdings':
        return <div className="text-muted-foreground p-4">Holdings content coming soon...</div>
      case 'activity':
        return <div className="text-muted-foreground p-4">Activity content coming soon...</div>
    }
  }

  return (
    <div className="w-full px-2 sm:px-4 md:container md:px-6 py-4 md:py-6 lg:py-8">
      <div className="grid gap-4 md:gap-6 lg:gap-8">
        {/* Metrics Section */}
        <div className="space-y-4 md:space-y-6">
          <div className="rounded-xl border bg-card p-3 md:p-6 shadow-sm transition-shadow hover:shadow-md">
            <MetricsCard period={selectedPeriod} onPeriodChange={setSelectedPeriod} />
          </div>

          <div className="grid gap-4 md:gap-6 lg:grid-cols-[1fr_300px]">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              <div className="rounded-xl border bg-card p-3 md:p-6 shadow-sm transition-shadow hover:shadow-md">
                <PnLDetailsCard period={selectedPeriod} />
              </div>
              <div className="rounded-xl border bg-card p-3 md:p-6 shadow-sm transition-shadow hover:shadow-md">
                <DistributionCard period={selectedPeriod} />
              </div>
            </div>
            <div className="rounded-xl border bg-card p-3 md:p-6 shadow-sm transition-shadow hover:shadow-md">
              <PhishingCheckCard period={selectedPeriod} />
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="space-y-4 md:space-y-6">
          <div className="border-t pt-4 md:pt-6">
            <NavTabs activeTab={activeTab} onTabChange={setActiveTab} />
          </div>
          <div className="rounded-xl border bg-card shadow-sm transition-shadow hover:shadow-md">
            <div className="max-w-[100vw] overflow-x-auto">
              {renderContent()}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
