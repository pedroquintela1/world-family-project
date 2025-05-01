import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Configurações</h1>
        <p className="text-muted-foreground">Gerencie suas preferências e informações da conta</p>
      </div>

      <Tabs defaultValue="profile">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="profile">Perfil</TabsTrigger>
          <TabsTrigger value="account">Conta</TabsTrigger>
          <TabsTrigger value="payment">Pagamentos</TabsTrigger>
          <TabsTrigger value="notifications">Notificações</TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="mt-6 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Informações Pessoais</CardTitle>
              <CardDescription>Atualize suas informações pessoais</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nome Completo</Label>
                <Input id="name" placeholder="Seu nome completo" defaultValue="João Silva" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">E-mail</Label>
                <Input id="email" type="email" placeholder="seu@email.com" defaultValue="joao@exemplo.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Telefone</Label>
                <Input id="phone" placeholder="(00) 00000-0000" defaultValue="(11) 98765-4321" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="country">País</Label>
                <Select defaultValue="br">
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione seu país" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="br">Brasil</SelectItem>
                    <SelectItem value="us">Estados Unidos</SelectItem>
                    <SelectItem value="pt">Portugal</SelectItem>
                    <SelectItem value="es">Espanha</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Salvar Alterações</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="account" className="mt-6 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Segurança da Conta</CardTitle>
              <CardDescription>Atualize sua senha e configurações de segurança</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="current-password">Senha Atual</Label>
                <Input id="current-password" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="new-password">Nova Senha</Label>
                <Input id="new-password" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirm-password">Confirmar Nova Senha</Label>
                <Input id="confirm-password" type="password" />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="2fa">Autenticação de Dois Fatores</Label>
                  <p className="text-sm text-muted-foreground">Adicione uma camada extra de segurança à sua conta</p>
                </div>
                <Switch id="2fa" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Atualizar Senha</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Excluir Conta</CardTitle>
              <CardDescription>Exclua permanentemente sua conta e todos os dados associados</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Esta ação não pode ser desfeita. Todos os seus dados serão permanentemente excluídos.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="destructive">Excluir Conta</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="payment" className="mt-6 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Métodos de Pagamento</CardTitle>
              <CardDescription>Gerencie seus métodos de pagamento para doações e recebimentos</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="binance-id">ID Binance Pay</Label>
                <Input id="binance-id" placeholder="Seu ID Binance Pay" defaultValue="12345678" />
                <p className="text-sm text-muted-foreground">
                  Usado para receber pagamentos via Binance Pay e criptomoedas
                </p>
              </div>
              <Separator />
              <div className="space-y-2">
                <Label htmlFor="pix-key">Chave PIX</Label>
                <Input
                  id="pix-key"
                  placeholder="CPF, E-mail, Telefone ou Chave Aleatória"
                  defaultValue="joao@exemplo.com"
                />
                <p className="text-sm text-muted-foreground">Usada para receber pagamentos em BRL via PIX</p>
              </div>
              <Separator />
              <div className="space-y-2">
                <Label htmlFor="btc-address">Endereço Bitcoin</Label>
                <Input
                  id="btc-address"
                  placeholder="Seu endereço Bitcoin"
                  defaultValue="bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh"
                />
                <p className="text-sm text-muted-foreground">Usado para receber pagamentos em Bitcoin</p>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Salvar Métodos de Pagamento</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="mt-6 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Preferências de Notificação</CardTitle>
              <CardDescription>Escolha como deseja receber notificações</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="email-notifications">Notificações por E-mail</Label>
                  <p className="text-sm text-muted-foreground">Receba atualizações sobre sua conta por e-mail</p>
                </div>
                <Switch id="email-notifications" defaultChecked />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="queue-notifications">Atualizações da Fila</Label>
                  <p className="text-sm text-muted-foreground">
                    Seja notificado quando sua posição na fila mudar significativamente
                  </p>
                </div>
                <Switch id="queue-notifications" defaultChecked />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="payment-notifications">Pagamentos</Label>
                  <p className="text-sm text-muted-foreground">
                    Receba notificações sobre doações recebidas e enviadas
                  </p>
                </div>
                <Switch id="payment-notifications" defaultChecked />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="bonus-notifications">Bônus</Label>
                  <p className="text-sm text-muted-foreground">Seja notificado quando receber bônus da rede binária</p>
                </div>
                <Switch id="bonus-notifications" defaultChecked />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Salvar Preferências</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
