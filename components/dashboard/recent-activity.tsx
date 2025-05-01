import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowUp, ArrowDown, Filter, ChevronRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function RecentActivity() {
  const transactions = [
    {
      id: 1,
      type: "incoming",
      name: "Theo Lawrence",
      amount: "€ 500,00",
      date: "AUG • 15.10.2023",
      status: "success",
      method: "Credit Card",
      currency: "Bitcoin",
    },
    {
      id: 2,
      type: "outgoing",
      name: "Amy March",
      amount: "-€ 250,00",
      date: "AUG • 15.10.2023",
      status: "pending",
      method: "Bank Transfer",
      currency: "Ethereum",
    },
    {
      id: 3,
      type: "incoming",
      name: "James Wilson",
      amount: "€ 320,00",
      date: "AUG • 14.10.2023",
      status: "success",
      method: "Credit Card",
      currency: "Bitcoin",
    },
    {
      id: 4,
      type: "incoming",
      name: "Sarah Parker",
      amount: "€ 150,00",
      date: "AUG • 14.10.2023",
      status: "success",
      method: "PayPal",
      currency: "Binance",
    },
    {
      id: 5,
      type: "outgoing",
      name: "Michael Brown",
      amount: "-€ 75,00",
      date: "AUG • 13.10.2023",
      status: "pending",
      method: "Bank Transfer",
      currency: "Bitcoin",
    },
  ]

  return (
    <Card className="card-dashboard animate-enter">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-lg font-medium">Recent Activity</CardTitle>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="h-8 gap-1">
            <Filter className="h-4 w-4" />
            Filter
          </Button>
          <Button variant="outline" size="sm" className="h-8">
            Sort
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <div className="grid grid-cols-5 gap-4 px-6 py-3 text-sm font-medium text-app-text-secondary border-b">
          <div>TYPE</div>
          <div>AMOUNT</div>
          <div>STATUS</div>
          <div>METHOD</div>
          <div></div>
        </div>
        <div className="divide-y">
          {transactions.map((transaction) => (
            <div
              key={transaction.id}
              className="grid grid-cols-5 gap-4 px-6 py-4 items-center hover:bg-muted/30 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div
                  className={`flex items-center justify-center h-8 w-8 rounded-full ${
                    transaction.type === "incoming" ? "bg-green-100" : "bg-orange-100"
                  }`}
                >
                  {transaction.type === "incoming" ? (
                    <ArrowUp className="h-4 w-4 text-app-green" />
                  ) : (
                    <ArrowDown className="h-4 w-4 text-app-yellow" />
                  )}
                </div>
                <div>
                  <div className="font-medium text-app-text-primary">{transaction.name}</div>
                  <div className="text-xs text-app-text-secondary">{transaction.date}</div>
                </div>
              </div>
              <div
                className={`font-medium ${
                  transaction.type === "incoming" ? "text-app-text-primary" : "text-app-text-secondary"
                }`}
              >
                {transaction.amount}
              </div>
              <div>
                <Badge
                  variant={transaction.status === "success" ? "outline" : "secondary"}
                  className={`
                  ${
                    transaction.status === "success"
                      ? "border-green-200 bg-green-50 text-green-700"
                      : "border-yellow-200 bg-yellow-50 text-yellow-700"
                  }
                `}
                >
                  {transaction.status === "success" ? "Success" : "Pending"}
                </Badge>
              </div>
              <div className="text-app-text-primary">{transaction.method}</div>
              <div className="flex justify-end">
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
        <div className="p-4 flex justify-center">
          <Button variant="outline" className="w-full">
            See All
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
