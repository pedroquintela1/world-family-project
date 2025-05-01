import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Search, Download, Filter } from "lucide-react"

export default function TransactionsPage() {
  const transactions = [
    {
      id: "TX123456",
      type: "received",
      amount: "R$ 300,00",
      date: "30/04/2025",
      status: "completed",
      description: "Doação recebida",
      from: "Sistema",
    },
    {
      id: "TX123455",
      type: "sent",
      amount: "R$ 100,00",
      date: "28/04/2025",
      status: "completed",
      description: "Reentrada (sustentabilidade)",
      to: "Sistema",
    },
    {
      id: "TX123454",
      type: "sent",
      amount: "R$ 100,00",
      date: "28/04/2025",
      status: "completed",
      description: "Reentrada (lucrativa)",
      to: "Sistema",
    },
    {
      id: "TX123453",
      type: "bonus",
      amount: "R$ 120,00",
      date: "25/04/2025",
      status: "completed",
      description: "Bônus binário",
      from: "Sistema",
    },
    {
      id: "TX123452",
      type: "received",
      amount: "R$ 300,00",
      date: "20/04/2025",
      status: "completed",
      description: "Doação recebida",
      from: "Sistema",
    },
    {
      id: "TX123451",
      type: "sent",
      amount: "R$ 200,00",
      date: "15/04/2025",
      status: "completed",
      description: "Doação inicial",
      to: "Sistema",
    },
    {
      id: "TX123450",
      type: "sent",
      amount: "R$ 50,00",
      date: "15/04/2025",
      status: "completed",
      description: "Taxa de ativação",
      to: "Sistema",
    },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Transações</h1>
        <p className="text-muted-foreground">Histórico completo de todas as suas transações</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Total Recebido</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">R$ 1.200,00</div>
            <p className="text-sm text-muted-foreground">Doações + Bônus</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Total Enviado</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">R$ 450,00</div>
            <p className="text-sm text-muted-foreground">Doações + Taxas</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Saldo Líquido</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-600">R$ 750,00</div>
            <p className="text-sm text-muted-foreground">Lucro total</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="all">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="all">Todas</TabsTrigger>
          <TabsTrigger value="received">Recebidas</TabsTrigger>
          <TabsTrigger value="sent">Enviadas</TabsTrigger>
          <TabsTrigger value="bonus">Bônus</TabsTrigger>
        </TabsList>

        <div className="flex items-center gap-2 mt-6">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Buscar transações..."
              className="w-full appearance-none bg-background pl-8"
            />
          </div>
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" />
            Filtrar
          </Button>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Exportar
          </Button>
        </div>

        <TabsContent value="all" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Todas as Transações</CardTitle>
              <CardDescription>Histórico completo de todas as suas transações</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Data</TableHead>
                    <TableHead>Descrição</TableHead>
                    <TableHead>De/Para</TableHead>
                    <TableHead>Valor</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {transactions.map((transaction) => (
                    <TableRow key={transaction.id}>
                      <TableCell className="font-medium">{transaction.id}</TableCell>
                      <TableCell>{transaction.date}</TableCell>
                      <TableCell>{transaction.description}</TableCell>
                      <TableCell>{transaction.from ? `De: ${transaction.from}` : `Para: ${transaction.to}`}</TableCell>
                      <TableCell
                        className={
                          transaction.type === "received" || transaction.type === "bonus"
                            ? "text-green-600"
                            : "text-muted-foreground"
                        }
                      >
                        {transaction.type === "sent" ? "-" : "+"}
                        {transaction.amount}
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            transaction.status === "completed"
                              ? "outline"
                              : transaction.status === "pending"
                                ? "secondary"
                                : "destructive"
                          }
                        >
                          {transaction.status === "completed"
                            ? "Concluída"
                            : transaction.status === "pending"
                              ? "Pendente"
                              : "Falha"}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="received" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Transações Recebidas</CardTitle>
              <CardDescription>Doações recebidas na fila única</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Data</TableHead>
                    <TableHead>Descrição</TableHead>
                    <TableHead>De</TableHead>
                    <TableHead>Valor</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {transactions
                    .filter((t) => t.type === "received")
                    .map((transaction) => (
                      <TableRow key={transaction.id}>
                        <TableCell className="font-medium">{transaction.id}</TableCell>
                        <TableCell>{transaction.date}</TableCell>
                        <TableCell>{transaction.description}</TableCell>
                        <TableCell>{transaction.from}</TableCell>
                        <TableCell className="text-green-600">+{transaction.amount}</TableCell>
                        <TableCell>
                          <Badge variant="outline">Concluída</Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="sent" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Transações Enviadas</CardTitle>
              <CardDescription>Doações e taxas enviadas</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Data</TableHead>
                    <TableHead>Descrição</TableHead>
                    <TableHead>Para</TableHead>
                    <TableHead>Valor</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {transactions
                    .filter((t) => t.type === "sent")
                    .map((transaction) => (
                      <TableRow key={transaction.id}>
                        <TableCell className="font-medium">{transaction.id}</TableCell>
                        <TableCell>{transaction.date}</TableCell>
                        <TableCell>{transaction.description}</TableCell>
                        <TableCell>{transaction.to}</TableCell>
                        <TableCell className="text-muted-foreground">-{transaction.amount}</TableCell>
                        <TableCell>
                          <Badge variant="outline">Concluída</Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="bonus" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Bônus Recebidos</CardTitle>
              <CardDescription>Bônus da rede binária</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Data</TableHead>
                    <TableHead>Descrição</TableHead>
                    <TableHead>De</TableHead>
                    <TableHead>Valor</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {transactions
                    .filter((t) => t.type === "bonus")
                    .map((transaction) => (
                      <TableRow key={transaction.id}>
                        <TableCell className="font-medium">{transaction.id}</TableCell>
                        <TableCell>{transaction.date}</TableCell>
                        <TableCell>{transaction.description}</TableCell>
                        <TableCell>{transaction.from}</TableCell>
                        <TableCell className="text-green-600">+{transaction.amount}</TableCell>
                        <TableCell>
                          <Badge variant="outline">Concluída</Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
