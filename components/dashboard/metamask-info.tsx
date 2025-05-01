
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Wallet, Shield, CheckCircle, AlertTriangle } from "lucide-react"

export function MetamaskInfo() {
  return (
    <Card className="card-dashboard animate-enter">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium flex items-center gap-2">
          <Wallet className="h-5 w-5 text-app-purple" />
          Metamask Payment System
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <p className="text-sm text-app-text-secondary">
            World Family uses the Metamask API to process donations and distribute payments securely and transparently.
          </p>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-lg border p-4">
              <div className="flex items-center gap-2 mb-2">
                <Shield className="h-5 w-5 text-app-green" />
                <h3 className="font-medium">Security</h3>
              </div>
              <p className="text-xs text-app-text-secondary">
                All transactions are verified and recorded on the blockchain, ensuring complete transparency and security.
              </p>
            </div>

            <div className="rounded-lg border p-4">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="h-5 w-5 text-app-blue" />
                <h3 className="font-medium">Automatic Verification</h3>
              </div>
              <p className="text-xs text-app-text-secondary">
                Our system automatically verifies if payments have been made correctly before processing them.
              </p>
            </div>

            <div className="rounded-lg border p-4">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="h-5 w-5 text-app-yellow" />
                <h3 className="font-medium">Minimum Amount</h3>
              </div>
              <p className="text-xs text-app-text-secondary">
                The minimum donation amount is $20.00 USD, paid through your Metamask wallet.
              </p>
            </div>
          </div>

          <div className="rounded-lg border p-4">
            <h3 className="font-medium mb-2">How it works:</h3>
            <ol className="list-decimal pl-5 space-y-1 text-sm">
              <li>Connect your Metamask wallet to the World Family system</li>
              <li>Choose the donation amount (minimum $20.00)</li>
              <li>Confirm the transaction in your Metamask wallet</li>
              <li>System automatically verifies the payment</li>
              <li>After confirmation, you enter the single queue</li>
              <li>When your turn comes, the system automatically distributes the values to your registered Metamask wallet</li>
            </ol>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
