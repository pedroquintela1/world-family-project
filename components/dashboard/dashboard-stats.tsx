import { Card, CardContent } from "@/components/ui/card"
import { ArrowUp, ArrowDown, Users, ListOrdered, Coins, Clock } from "lucide-react"

export function DashboardStats() {
  const stats = [
    {
      title: "Posição na Fila",
      value: "34",
      subtitle: "de 156 usuários",
      icon: ListOrdered,
      iconColor: "bg-app-purple",
    },
    {
      title: "Rede Binária",
      value: "12 / 8",
      subtitle: "Esquerda / Direita",
      icon: Users,
      iconColor: "bg-app-blue",
      customIcon: "/default-user-icon.png", // Added custom icon for Binary Network
    },
    {
      title: "Doações Recebidas",
      value: "$1,200.00",
      change: "+10,5%",
      trend: "up",
      icon: Coins,
      iconColor: "bg-app-green",
    },
    {
      title: "Tempo Estimado",
      value: "3 dias",
      subtitle: "Próximo recebimento",
      icon: Clock,
      iconColor: "bg-app-yellow-light",
    },
  ]

  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4"> {/* Added responsive grid */}
      {stats.map((stat, index) => (
        <Card key={index} className="card-dashboard animate-enter" style={{ animationDelay: `${index * 0.1}s` }}>
          <CardContent className="p-6">
            <div className="flex justify-between items-start">
              <div className="card-stat">
                <h3 className="card-stat-value">{stat.value}</h3>
                <p className="card-stat-label">{stat.title}</p>
                {stat.trend && (
                  <div className={stat.trend === "up" ? "trend-up" : "trend-down"}>
                    {stat.trend === "up" ? (
                      <ArrowUp className="h-4 w-4 mr-1" />
                    ) : (
                      <ArrowDown className="h-4 w-4 mr-1" />
                    )}
                    {stat.change}
                  </div>
                )}
                {stat.subtitle && <p className="text-xs text-app-text-secondary mt-1">{stat.subtitle}</p>}
              </div>
              <div className={`p-3 rounded-md ${stat.iconColor}`}>
                {stat.customIcon ? ( // Conditional rendering for custom icon
                  <img src={stat.customIcon} alt="User Icon" className="h-5 w-5" />
                ) : (
                  <stat.icon className="h-5 w-5 text-white" />
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}