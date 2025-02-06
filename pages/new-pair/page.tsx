"use client"

import { UserInfo } from "@/components/user-info"
import { NavTabs } from "@/components/nav-tabs"
import { userData } from "@/dummydata/user-data"

export default function NewPair() {
  const currentUser = userData[0]

  return (
    <div>
      <UserInfo address={currentUser.address} network={currentUser.network} />
      <div className="container py-8">
        <div className="grid gap-6">
          <div className="border-t pt-6">
            <NavTabs activeTab="new-pair" onTabChange={() => {}} />
            <div className="mt-6">
              <h1 className="text-2xl font-bold">New Pair</h1>
              {/* Add your new pair content here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 