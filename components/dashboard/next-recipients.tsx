import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Gift } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function NextRecipients() {
  const recipients = [
    {
      id: 1,
      name: "Maria Souza",
      location: "Fortaleza, Brasil",
      amount: "R$ 600,00",
      timeLeft: "Hoje",
      avatar: "/placeholder.svg",
      initials: "MS",
    },
    {
      id: 2,
      name: "Pedro Costa",
      location: "Recife, Brasil",
      amount: "R$ 600,00",
      timeLeft: "Amanhã",
      avatar: "/placeholder.svg",
      initials: "PC",
    },
    {
      id: 3,
      name: "Juliana Lima",
      location: "Brasília, Brasil",
      amount: "R$ 600,00",
      timeLeft: "2 dias",
      avatar: "/placeholder.svg",
      initials: "JL",
    },
    {
      id: 4,
      name: "Carlos Mendes",
      location: "Porto Alegre, Brasil",
      amount: "R$ 600,00",
      timeLeft: "3 dias",
      avatar: "/placeholder.svg",
      initials: "CM",
    },
    {
      id: 5,
      name: "Luciana Ferreira",
      location: "Manaus, Brasil",
      amount: "R$ 600,00",
      timeLeft: "4 dias",
      avatar: "/placeholder.svg",
      initials: "LF",
    },
  ]

  return (
    <Card className="card-dashboard animate-enter">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium flex items-center gap-2">
          <Gift className="h-5 w-5 text-app-green" />
          Próximos a Receber
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recipients.map((recipient) => (
            <div key={recipient.id} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Avatar className="h-10 w-10 border-2 border-muted">
                  <AvatarImage src={recipient.avatar || "/placeholder.svg"} alt={recipient.name} />
                  <AvatarFallback className="bg-app-purple text-white">{recipient.initials}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium text-app-text-primary">{recipient.name}</div>
                  <div className="text-xs text-app-text-secondary">{recipient.location}</div>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <div className="font-medium text-app-text-primary">{recipient.amount}</div>
                <Badge
                  variant="outline"
                  className={`mt-1 ${
                    recipient.timeLeft === "Hoje"
                      ? "border-green-200 bg-green-50 text-green-700"
                      : recipient.timeLeft === "Amanhã"
                        ? "border-blue-200 bg-blue-50 text-blue-700"
                        : "border-gray-200 bg-gray-50 text-gray-700"
                  }`}
                >
                  {recipient.timeLeft}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
