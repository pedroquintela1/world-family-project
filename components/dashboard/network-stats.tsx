import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export function NetworkStats() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2">
        <Card className="bg-wf-secondary border-wf-secondary text-wf-text">
          <CardContent className="pt-6">
            <h3 className="text-lg font-medium mb-2 text-wf-text">Crescimento da Rede</h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-wf-muted">Esta semana</span>
                  <span className="text-sm font-medium text-wf-text">+5 usuários</span>
                </div>
                <Progress value={70} className="h-2 bg-wf-background [&>div]:bg-wf-accent" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-wf-muted">Este mês</span>
                  <span className="text-sm font-medium text-wf-text">+12 usuários</span>
                </div>
                <Progress value={60} className="h-2 bg-wf-background [&>div]:bg-wf-accent" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-wf-muted">Total</span>
                  <span className="text-sm font-medium text-wf-text">20 usuários</span>
                </div>
                <Progress value={40} className="h-2 bg-wf-background [&>div]:bg-wf-accent" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-wf-secondary border-wf-secondary text-wf-text">
          <CardContent className="pt-6">
            <h3 className="text-lg font-medium mb-2 text-wf-text">Distribuição de Volume</h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-wf-muted">Perna Esquerda</span>
                  <span className="text-sm font-medium text-wf-text">5.600 pontos (64%)</span>
                </div>
                <Progress value={64} className="h-2 bg-wf-background [&>div]:bg-wf-accent" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-wf-muted">Perna Direita</span>
                  <span className="text-sm font-medium text-wf-text">3.200 pontos (36%)</span>
                </div>
                <Progress value={36} className="h-2 bg-wf-background [&>div]:bg-wf-accent" />
              </div>
              <div className="mt-4 text-sm text-wf-muted">
                Equilíbrio ideal: manter entre 40% e 60% para maximizar ganhos
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-wf-secondary border-wf-secondary text-wf-text">
        <CardContent className="pt-6">
          <h3 className="text-lg font-medium mb-4 text-wf-text">Histórico de Bônus</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-wf-background pb-2">
              <span className="font-medium text-wf-text">Abril 2025</span>
              <span className="font-medium text-wf-success">R$ 850,00</span>
            </div>
            <div className="flex items-center justify-between border-b border-wf-background pb-2">
              <span className="font-medium text-wf-text">Março 2025</span>
              <span className="font-medium text-wf-success">R$ 420,00</span>
            </div>
            <div className="flex items-center justify-between border-b border-wf-background pb-2">
              <span className="font-medium text-wf-text">Fevereiro 2025</span>
              <span className="font-medium text-wf-success">R$ 180,00</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-medium text-wf-text">Total</span>
              <span className="font-medium text-wf-success">R$ 1.450,00</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
