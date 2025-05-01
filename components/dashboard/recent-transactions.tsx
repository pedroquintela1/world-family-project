import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Download, Upload, Coins } from "lucide-react"
import Link from "next/link"

export function RecentTransactions() {
  const transactions = [
    {
      id: "TX123456",
      type: "received",
      amount: "$300.00",
      date: "30/04/2025",
      status: "completed",
      description: "Doação recebida",
      icon: Download,
    },
    {
      id: "TX123455",
      type: "sent",
      amount: "$100.00",
      date: "28/04/2025",
      status: "completed",
      description: "Reentrada (sustentabilidade)",
      icon: Upload,
    },
    {
      id: "TX123454",
      type: "sent",
      amount: "$100.00",
      date: "28/04/2025",
      status: "completed",
      description: "Reentrada (lucrativa)",
      icon: Upload,
    },
    {
      id: "TX123453",
      type: "bonus",
      amount: "$120.00",
      date: "25/04/2025",
      status: "completed",
      description: "Bônus binário",
      icon: Coins,
    },
    {
      id: "TX123452",
      type: "received",
      amount: "$300.00",
      date: "20/04/2025",
      status: "completed",
      description: "Doação recebida",
      icon: Download,
    },
  ]

  return (
    <Card className="card-dashboard animate-enter">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium">Transações Recentes</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          <div className="space-y-4">
            {transactions.map((transaction) => (
              <div key={transaction.id} className="flex items-center gap-4">
                <div className="rounded-full p-2 bg-muted">
                  <transaction.icon
                    className={
                      transaction.type === "received"
                        ? "h-4 w-4 text-app-green"
                        : transaction.type === "bonus"
                          ? "h-4 w-4 text-app-blue"
                          : "h-4 w-4 text-app-text-secondary"
                    }
                  />
                </div>
                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <div className="font-medium text-app-text-primary">{transaction.description}</div>
                    <div
                      className={
                        transaction.type === "received" || transaction.type === "bonus"
                          ? "font-medium text-app-green"
                          : "font-medium text-app-text-secondary"
                      }
                    >
                      {transaction.type === "sent" ? "-" : "+"}
                      {transaction.amount}
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm text-app-text-secondary">
                    <div>{transaction.date}</div>
                    <div>{transaction.id}</div>
                  </div>
                </div>
                <Badge
                  variant="outline"
                  className={
                    transaction.status === "completed"
                      ? "border-green-200 bg-green-50 text-green-700"
                      : transaction.status === "pending"
                        ? "border-yellow-200 bg-yellow-50 text-yellow-700"
                        : "border-red-200 bg-red-50 text-red-700"
                  }
                >
                  {transaction.status === "completed"
                    ? "Concluída"
                    : transaction.status === "pending"
                      ? "Pendente"
                      : "Falha"}
                </Badge>
              </div>
            ))}
          </div>
          <Button asChild variant="outline" className="w-full">
            <Link href="/dashboard/transactions">
              Ver todas as transações
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
