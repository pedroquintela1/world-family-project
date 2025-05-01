import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function BinaryNetwork() {
  return (
    <Card className="card-dashboard animate-enter">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium">Rede Binária</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <div className="text-sm font-medium text-app-text-secondary">Perna Esquerda</div>
              <div className="text-lg font-bold text-app-text-primary">12 usuários</div>
              <div className="text-sm text-app-text-secondary">Volume: 5.600 pontos</div>
            </div>
            <div className="space-y-1">
              <div className="text-sm font-medium text-app-text-secondary">Perna Direita</div>
              <div className="text-lg font-bold text-app-text-primary">8 usuários</div>
              <div className="text-sm text-app-text-secondary">Volume: 3.200 pontos</div>
            </div>
          </div>
          <div className="space-y-1">
            <div className="text-sm font-medium text-app-text-secondary">Equilíbrio da rede</div>
            <Progress value={57} className="h-2 bg-muted [&>div]:bg-app-blue" />
            <div className="text-xs text-app-text-secondary">Ideal: manter entre 40% e 60% para maximizar ganhos</div>
          </div>
          <div className="rounded-lg border border-muted p-3">
            <div className="text-sm font-medium text-app-text-primary">Status de qualificação</div>
            <div className="mt-2 space-y-2">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-app-green"></div>
                <div className="text-sm text-app-text-primary">Ativação mensal: Ativo</div>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-app-green"></div>
                <div className="text-sm text-app-text-primary">Diretos: 2/2 (Qualificado)</div>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-app-green"></div>
                <div className="text-sm text-app-text-primary">Próximo bônus estimado: R$ 320,00</div>
              </div>
            </div>
          </div>
          <Button asChild className="w-full bg-app-blue hover:bg-app-blue-light text-white">
            <Link href="/dashboard/network">
              Ver rede completa
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}