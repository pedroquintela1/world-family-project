import { DashboardBalance } from "@/components/dashboard/dashboard-balance"
import { DashboardStats } from "@/components/dashboard/dashboard-stats"
import { QueuePosition } from "@/components/dashboard/queue-position"
import { BinaryNetwork } from "@/components/dashboard/binary-network"
import { RecentTransactions } from "@/components/dashboard/recent-transactions"
import { TopDonors } from "@/components/dashboard/top-donors"
import { NextRecipients } from "@/components/dashboard/next-recipients"
import { SystemStatus } from "@/components/dashboard/system-status"
import { MetamaskInfo } from "@/components/dashboard/metamask-info"

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <DashboardBalance />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <DashboardStats />
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
        <QueuePosition />
        <BinaryNetwork />
      </div>

      <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-1">
        <MetamaskInfo />
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
        <TopDonors />
        <NextRecipients />
      </div>

      <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-1">
        <RecentTransactions />
      </div>

      <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-1">
        <SystemStatus />
      </div>
    </div>
  )
}
