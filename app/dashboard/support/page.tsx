import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

export default function SupportPage() {
  const tickets = [
    {
      id: "TK-2025-001",
      subject: "Problema com doação",
      status: "open",
      date: "01/05/2025",
      lastUpdate: "01/05/2025",
    },
    {
      id: "TK-2025-002",
      subject: "Dúvida sobre rede binária",
      status: "pending",
      date: "28/04/2025",
      lastUpdate: "30/04/2025",
    },
    {
      id: "TK-2025-003",
      subject: "Atualização de dados cadastrais",
      status: "closed",
      date: "15/04/2025",
      lastUpdate: "20/04/2025",
    },
    {
      id: "TK-2025-004",
      subject: "Problema com pagamento",
      status: "closed",
      date: "10/04/2025",
      lastUpdate: "12/04/2025",
    },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Suporte</h1>
        <p className="text-muted-foreground">Crie tickets de suporte e acompanhe suas solicitações</p>
      </div>

      <Tabs defaultValue="new">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="new">Novo Ticket</TabsTrigger>
          <TabsTrigger value="history">Histórico de Tickets</TabsTrigger>
        </TabsList>

        <TabsContent value="new" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Criar Novo Ticket de Suporte</CardTitle>
              <CardDescription>
                Preencha o formulário abaixo para criar um novo ticket de suporte. Nossa equipe responderá o mais breve
                possível.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="subject">Assunto</Label>
                <Input id="subject" placeholder="Descreva brevemente o assunto do seu ticket" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="category">Categoria</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione uma categoria" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="financial">Financeiro</SelectItem>
                    <SelectItem value="technical">Técnico</SelectItem>
                    <SelectItem value="network">Rede Binária</SelectItem>
                    <SelectItem value="queue">Fila Única</SelectItem>
                    <SelectItem value="account">Conta</SelectItem>
                    <SelectItem value="other">Outros</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="priority">Prioridade</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione a prioridade" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">Baixa</SelectItem>
                    <SelectItem value="medium">Média</SelectItem>
                    <SelectItem value="high">Alta</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Mensagem</Label>
                <Textarea
                  id="message"
                  placeholder="Descreva detalhadamente sua dúvida ou problema"
                  rows={6}
                  className="resize-none"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="attachment">Anexo (opcional)</Label>
                <Input id="attachment" type="file" />
                <p className="text-xs text-muted-foreground">Formatos aceitos: JPG, PNG, PDF. Tamanho máximo: 5MB</p>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Enviar Ticket</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="history" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Histórico de Tickets</CardTitle>
              <CardDescription>Acompanhe o status de todos os seus tickets de suporte</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Assunto</TableHead>
                    <TableHead>Data</TableHead>
                    <TableHead>Última Atualização</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Ação</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {tickets.map((ticket) => (
                    <TableRow key={ticket.id}>
                      <TableCell className="font-medium">{ticket.id}</TableCell>
                      <TableCell>{ticket.subject}</TableCell>
                      <TableCell>{ticket.date}</TableCell>
                      <TableCell>{ticket.lastUpdate}</TableCell>
                      <TableCell>
                        <Badge
                          variant="outline"
                          className={
                            ticket.status === "open"
                              ? "border-green-200 bg-green-50 text-green-700"
                              : ticket.status === "pending"
                                ? "border-yellow-200 bg-yellow-50 text-yellow-700"
                                : "border-gray-200 bg-gray-50 text-gray-700"
                          }
                        >
                          {ticket.status === "open" ? "Aberto" : ticket.status === "pending" ? "Pendente" : "Fechado"}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="outline" size="sm">
                          Ver Detalhes
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Card>
        <CardHeader>
          <CardTitle>Contato Direto</CardTitle>
          <CardDescription>Outras formas de entrar em contato com nosso suporte</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border p-4">
              <h3 className="text-lg font-medium mb-2">E-mail</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Envie um e-mail diretamente para nossa equipe de suporte
              </p>
              <p className="text-sm font-medium">suporte@worldfamily.com</p>
            </div>
            <div className="rounded-lg border p-4">
              <h3 className="text-lg font-medium mb-2">WhatsApp</h3>
              <p className="text-sm text-muted-foreground mb-2">Atendimento via WhatsApp em horário comercial</p>
              <p className="text-sm font-medium">+55 (11) 98765-4321</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
