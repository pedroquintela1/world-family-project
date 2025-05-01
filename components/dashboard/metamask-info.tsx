import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Wallet, Shield, CheckCircle, AlertTriangle } from "lucide-react"

export function MetamaskInfo() {
  return (
    <Card className="card-dashboard animate-enter">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium flex items-center gap-2">
          <Wallet className="h-5 w-5 text-app-purple" />
          Sistema de Pagamento Metamask
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <p className="text-sm text-app-text-secondary">
            O World Family utiliza a API da Metamask para processar doações e distribuir pagamentos de forma segura e
            transparente.
          </p>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-lg border p-4">
              <div className="flex items-center gap-2 mb-2">
                <Shield className="h-5 w-5 text-app-green" />
                <h3 className="font-medium">Segurança</h3>
              </div>
              <p className="text-xs text-app-text-secondary">
                Todas as transações são verificadas e registradas na blockchain, garantindo total transparência e
                segurança.
              </p>
            </div>

            <div className="rounded-lg border p-4">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="h-5 w-5 text-app-blue" />
                <h3 className="font-medium">Verificação Automática</h3>
              </div>
              <p className="text-xs text-app-text-secondary">
                Nosso sistema verifica automaticamente se os pagamentos foram realizados corretamente antes de
                processá-los.
              </p>
            </div>

            <div className="rounded-lg border p-4">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="h-5 w-5 text-app-yellow" />
                <h3 className="font-medium">Valor Mínimo</h3>
              </div>
              <p className="text-xs text-app-text-secondary">
                O valor mínimo para doação é de $20.00 USD, pago através da sua carteira Metamask.
              </p>
            </div>
          </div>

          <div className="rounded-lg border p-4">
            <h3 className="font-medium mb-2">Como funciona:</h3>
            <ol className="list-decimal pl-5 space-y-1 text-sm">
              <li>Conecte sua carteira Metamask ao sistema World Family</li>
              <li>Escolha o valor da doação (mínimo $20.00)</li>
              <li>Confirme a transação na sua carteira Metamask</li>
              <li>O sistema verifica automaticamente o pagamento</li>
              <li>Após a confirmação, você entra na fila única</li>
              <li>
                Quando chegar sua vez, o sistema distribui automaticamente os valores para sua carteira Metamask
                cadastrada
              </li>
            </ol>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
