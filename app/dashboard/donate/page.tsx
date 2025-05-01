import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Bitcoin, Wallet } from "lucide-react"

export default function DonatePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Fazer Doação</h1>
        <p className="text-muted-foreground">Escolha o valor e método de pagamento para sua doação</p>
      </div>

      <Tabs defaultValue="metamask">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="metamask">
            <Wallet className="mr-2 h-4 w-4" />
            Metamask
          </TabsTrigger>
          <TabsTrigger value="crypto">
            <Bitcoin className="mr-2 h-4 w-4" />
            Outras Criptomoedas
          </TabsTrigger>
        </TabsList>

        <TabsContent value="metamask" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Doação via Metamask</CardTitle>
              <CardDescription>Faça sua doação usando sua carteira Metamask</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="amount">Valor da Doação (USD)</Label>
                <Input id="amount" type="number" placeholder="20.00" min="20" />
                <p className="text-sm text-muted-foreground">Valor mínimo: $20.00</p>
              </div>

              <div className="rounded-md border p-4">
                <h3 className="font-medium mb-2">Resumo da Doação</h3>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span>Valor da Doação:</span>
                    <span>$20.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Taxa de Gás (estimada):</span>
                    <span>$0.50</span>
                  </div>
                  <Separator className="my-2" />
                  <div className="flex justify-between font-medium">
                    <span>Total:</span>
                    <span>$20.50</span>
                  </div>
                </div>
              </div>

              <div className="bg-muted p-4 rounded-md">
                <h3 className="font-medium mb-2">Como funciona:</h3>
                <ol className="list-decimal pl-5 space-y-1 text-sm">
                  <li>Clique em "Conectar Metamask" para vincular sua carteira</li>
                  <li>Confirme o valor da doação</li>
                  <li>Aprove a transação na janela da Metamask</li>
                  <li>Aguarde a confirmação da transação na blockchain</li>
                </ol>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-4">
              <Button className="w-full">Conectar Metamask</Button>
              <p className="text-xs text-center text-muted-foreground">
                Ao conectar sua carteira, você concorda com os termos de uso do World Family
              </p>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="crypto" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Doação com Criptomoedas</CardTitle>
              <CardDescription>Faça sua doação usando Bitcoin ou outras criptomoedas</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="crypto-amount">Valor da Doação (USD)</Label>
                <div className="flex items-center gap-2">
                  <Input id="crypto-amount" type="number" placeholder="20.00" min="20" />
                  <div className="w-[120px]">
                    <select className="w-full h-10 rounded-md border border-input bg-background px-3 py-2">
                      <option value="BTC">BTC</option>
                      <option value="ETH">ETH</option>
                      <option value="USDT">USDT</option>
                      <option value="USDC">USDC</option>
                    </select>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">Valor mínimo: $20.00 (equivalente em cripto)</p>
              </div>

              <div className="rounded-md border p-4">
                <h3 className="font-medium mb-2">Resumo da Doação</h3>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span>Valor da Doação:</span>
                    <span>0.0008 BTC</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Equivalente em USD:</span>
                    <span>$20.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Taxa de Rede:</span>
                    <span>0.0001 BTC</span>
                  </div>
                  <Separator className="my-2" />
                  <div className="flex justify-between font-medium">
                    <span>Total:</span>
                    <span>0.0009 BTC</span>
                  </div>
                </div>
              </div>

              <div className="rounded-md border p-4">
                <h3 className="font-medium mb-2">Endereço para Depósito</h3>
                <div className="bg-muted p-2 rounded text-xs font-mono break-all">
                  0x1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t
                </div>
                <div className="mt-2 flex justify-end">
                  <Button variant="outline" size="sm">
                    Copiar Endereço
                  </Button>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Já fiz o pagamento</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
