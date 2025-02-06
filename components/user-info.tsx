"use client"

import { Copy } from "lucide-react"
import { useState } from "react"

interface UserInfoProps {
  address: string
  network: 'SOL' | 'ETH'
}

export function UserInfo({ address, network }: UserInfoProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(address)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="flex items-center gap-4 p-4 border-b">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full overflow-hidden">
          <img 
            src="/telegram.png" 
            alt="Profile" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <span className="text-lg font-medium">{address.slice(0, 6)}...{address.slice(-4)}</span>
            <button 
              onClick={handleCopy}
              className="p-1 hover:bg-accent rounded-md transition-colors"
              title={copied ? "Copied!" : "Copy address"}
            >
              <Copy className="w-4 h-4 text-muted-foreground" />
            </button>
          </div>
          <span className="text-sm text-muted-foreground">{address}</span>
        </div>
      </div>
    </div>
  )
} 