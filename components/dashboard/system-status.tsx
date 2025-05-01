import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Activity, Users, TrendingUp, Clock } from "lucide-react"

export function SystemStatus() {
  const metrics = [
    {
      title: "Velocidade da Fila",
      value: "12 posições/dia",
      progress: 75,
      icon: Activity,
      description: "Média dos últimos 7 dias",
    },
    {
      title: "Novos Participantes",
      value: "32 esta semana",
      progress: 65,
      icon: Users,
      description: "+15% em relação à semana anterior",
    },
    {
      title: "Taxa de Crescimento",
      value: "8.5% ao mês",
      progress: 85,
      icon: TrendingUp,
      description: "Crescimento sustentável",
    },
    {
      title: "Tempo Médio de Ciclo",
      value: "14 dias",
      progress: 60,
      icon: Clock,
      description: "Do início ao recebimento",
    },
  ]

  return (
    <Card className="card-dashboard animate-enter">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium">Status do World Family</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-center gap-2">
                <metric.icon className="h-5 w-5 text-app-purple" />
                <h3 className="font-medium text-app-text-primary">{metric.title}</h3>
              </div>
              <div className="text-2xl font-bold text-app-text-primary">{metric.value}</div>
              <Progress value={metric.progress} className="h-2 bg-muted [&>div]:bg-app-purple" />
              <p className="text-xs text-app-text-secondary">{metric.description}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
