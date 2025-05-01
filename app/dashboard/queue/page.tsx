import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function QueuePage() {
  const queueHistory = [
    {
      id: 1,
      cycle: "Ciclo #3",
      startDate: "25/04/2025",
      endDate: "Em andamento",
      received: "R$ 300,00",
      status: "Em andamento",
    },
    {
      id: 2,
      cycle: "Ciclo #2",
      startDate: "01/04/2025",
      endDate: "15/04/2025",
      received: "R$ 600,00",
      status: "Concluído",
    },
    {
      id: 3,
      cycle: "Ciclo #1",
      startDate: "15/02/2025",
      endDate: "02/03/2025",
      received: "R$ 600,00",
      status: "Concluído",
    },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Fila Única</h1>
        <p className="text-muted-foreground">Acompanhe sua posição na fila e histórico de ciclos</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Posição Atual</CardTitle>
            <CardDescription>Sua posição atual na fila de recebimento</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="font-medium">Posição atual:</div>
                  <div className="text-2xl font-bold text-green-600">34</div>
                </div>
                <div className="text-sm text-muted-foreground">Total na fila: 156</div>
              </div>
              <Progress value={78} className="h-2" />
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <div className="text-sm font-medium">Estimativa para receber</div>
                  <div className="text-lg font-bold">3 dias</div>
                </div>
                <div className="space-y-1">
                  <div className="text-sm font-medium">Valor a receber</div>
                  <div className="text-lg font-bold">R$ 500,00</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Estatísticas da Fila</CardTitle>
            <CardDescription>Informações sobre o fluxo da fila</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <div className="text-sm font-medium">Velocidade média</div>
                  <div className="text-lg font-bold">12 posições/dia</div>
                </div>
                <div className="space-y-1">
                  <div className="text-sm font-medium">Novas entradas hoje</div>
                  <div className="text-lg font-bold">8 usuários</div>
                </div>
                <div className="space-y-1">
                  <div className="text-sm font-medium">Ciclos completados</div>
                  <div className="text-lg font-bold">2</div>
                </div>
                <div className="space-y-1">
                  <div className="text-sm font-medium">Total recebido</div>
                  <div className="text-lg font-bold">R$ 1.200,00</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Histórico de Ciclos</CardTitle>
          <CardDescription>Registro de todos os seus ciclos na fila única</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Ciclo</TableHead>
                <TableHead>Data Início</TableHead>
                <TableHead>Data Fim</TableHead>
                <TableHead>Valor Recebido</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {queueHistory.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium">{item.cycle}</TableCell>
                  <TableCell>{item.startDate}</TableCell>
                  <TableCell>{item.endDate}</TableCell>
                  <TableCell>{item.received}</TableCell>
                  <TableCell>
                    <span
                      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                        item.status === "Concluído"
                          ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                          : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
                      }`}
                    >
                      {item.status}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
