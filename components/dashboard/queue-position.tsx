import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function QueuePosition() {
  return (
    <Card className="card-dashboard animate-enter">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium">Posição na Fila Única</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="font-medium text-app-text-primary">Posição atual:</div>
              <div className="text-2xl font-bold text-app-purple">34</div>
            </div>
            <div className="text-sm text-app-text-secondary">Total na fila: 156</div>
          </div>
          <Progress value={78} className="h-2 bg-muted [&>div]:bg-app-purple" />
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <div className="text-sm font-medium text-app-text-secondary">Estimativa para receber</div>
              <div className="text-lg font-bold text-app-text-primary">3 dias</div>
            </div>
            <div className="space-y-1">
              <div className="text-sm font-medium text-app-text-secondary">Valor a receber</div>
              <div className="text-lg font-bold text-app-text-primary">$500.00</div>
            </div>
          </div>
          <div className="rounded-lg border border-muted p-3">
            <div className="text-sm font-medium text-app-text-primary">Histórico de ciclos</div>
            <div className="mt-2 space-y-2">
              <div className="flex justify-between text-sm">
                <div className="text-app-text-primary">Ciclo #3</div>
                <div className="text-app-blue font-medium">Em andamento</div>
              </div>
              <div className="flex justify-between text-sm">
                <div className="text-app-text-primary">Ciclo #2</div>
                <div className="text-app-text-secondary">Concluído em 15/04/2025</div>
              </div>
              <div className="flex justify-between text-sm">
                <div className="text-app-text-primary">Ciclo #1</div>
                <div className="text-app-text-secondary">Concluído em 02/03/2025</div>
              </div>
            </div>
          </div>
          <Button asChild className="w-full bg-app-purple hover:bg-app-purple-light text-white">
            <Link href="/dashboard/queue">
              Ver detalhes da fila
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
