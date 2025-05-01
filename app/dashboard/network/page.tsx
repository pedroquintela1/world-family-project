import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { NetworkTree } from "@/components/dashboard/network-tree"
import { NetworkStats } from "@/components/dashboard/network-stats"
import { NetworkTable } from "@/components/dashboard/network-table"

export default function NetworkPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Rede Binária</h1>
        <p className="text-muted-foreground">Visualize e gerencie sua rede de indicados</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Perna Esquerda</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">12</div>
            <p className="text-sm text-muted-foreground">Usuários ativos</p>
            <div className="mt-2">
              <div className="text-sm font-medium">Volume: 5.600 pontos</div>
              <div className="text-sm text-muted-foreground">+15% esta semana</div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Perna Direita</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">8</div>
            <p className="text-sm text-muted-foreground">Usuários ativos</p>
            <div className="mt-2">
              <div className="text-sm font-medium">Volume: 3.200 pontos</div>
              <div className="text-sm text-muted-foreground">+8% esta semana</div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Bônus Acumulado</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">R$ 320,00</div>
            <p className="text-sm text-muted-foreground">Próximo pagamento</p>
            <div className="mt-2">
              <div className="text-sm font-medium">Total recebido: R$ 1.450,00</div>
              <div className="text-sm text-muted-foreground">Desde o início</div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="tree">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="tree">Visualização em Árvore</TabsTrigger>
          <TabsTrigger value="stats">Estatísticas</TabsTrigger>
          <TabsTrigger value="list">Lista de Indicados</TabsTrigger>
        </TabsList>
        <TabsContent value="tree" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Estrutura da Rede</CardTitle>
              <CardDescription>Visualização da sua rede binária</CardDescription>
            </CardHeader>
            <CardContent>
              <NetworkTree />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="stats" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Estatísticas da Rede</CardTitle>
              <CardDescription>Desempenho e métricas da sua rede</CardDescription>
            </CardHeader>
            <CardContent>
              <NetworkStats />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="list" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Lista de Indicados</CardTitle>
              <CardDescription>Todos os membros da sua rede</CardDescription>
            </CardHeader>
            <CardContent>
              <NetworkTable />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="flex justify-center mt-6">
        <Button className="w-full max-w-md">Gerar Link de Indicação</Button>
      </div>
    </div>
  )
}
