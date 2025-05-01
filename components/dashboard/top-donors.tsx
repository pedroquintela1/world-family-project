import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Medal } from "lucide-react"

export function TopDonors() {
  const donors = [
    {
      id: 1,
      name: "Roberto Martins",
      location: "São Paulo, Brasil",
      amount: "R$ 5.000,00",
      avatar: "/placeholder.svg",
      initials: "RM",
    },
    {
      id: 2,
      name: "Carolina Silva",
      location: "Rio de Janeiro, Brasil",
      amount: "R$ 4.200,00",
      avatar: "/placeholder.svg",
      initials: "CS",
    },
    {
      id: 3,
      name: "João Almeida",
      location: "Belo Horizonte, Brasil",
      amount: "R$ 3.800,00",
      avatar: "/placeholder.svg",
      initials: "JA",
    },
    {
      id: 4,
      name: "Ana Oliveira",
      location: "Curitiba, Brasil",
      amount: "R$ 3.500,00",
      avatar: "/placeholder.svg",
      initials: "AO",
    },
    {
      id: 5,
      name: "Fernando Santos",
      location: "Salvador, Brasil",
      amount: "R$ 3.200,00",
      avatar: "/placeholder.svg",
      initials: "FS",
    },
  ]

  return (
    <Card className="card-dashboard animate-enter">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium flex items-center gap-2">
          <Medal className="h-5 w-5 text-app-yellow" />
          Top 5 Doadores
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {donors.map((donor, index) => (
            <div key={donor.id} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Avatar className="h-10 w-10 border-2 border-muted">
                    <AvatarImage src={donor.avatar || "/placeholder.svg"} alt={donor.name} />
                    <AvatarFallback className="bg-app-purple text-white">{donor.initials}</AvatarFallback>
                  </Avatar>
                  {index < 3 && (
                    <div
                      className={`absolute -top-1 -right-1 h-5 w-5 rounded-full flex items-center justify-center text-xs font-bold text-white ${
                        index === 0 ? "bg-yellow-500" : index === 1 ? "bg-gray-400" : "bg-amber-700"
                      }`}
                    >
                      {index + 1}
                    </div>
                  )}
                </div>
                <div>
                  <div className="font-medium text-app-text-primary">{donor.name}</div>
                  <div className="text-xs text-app-text-secondary">{donor.location}</div>
                </div>
              </div>
              <div className="font-medium text-app-text-primary">{donor.amount}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
