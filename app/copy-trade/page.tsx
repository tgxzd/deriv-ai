"use client"

import { UserInfo } from "@/components/user-info"
import { NavTabs } from "@/components/nav-tabs"
import { userData } from "@/dummydata/user-data"

export default function CopyTrade() {
  const currentUser = userData[0]

  return (
    <div>
      <UserInfo address={currentUser.address} network={currentUser.network} />
      <div className="container py-8">
        <div className="grid gap-6">
          <div className="border-t pt-6">
            <NavTabs activeTab="copy-trade" onTabChange={() => {}} />
            <div className="mt-6">
              <h1 className="text-2xl font-bold">Copy Trade</h1>
              {/* Add your copy trade content here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 