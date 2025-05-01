import { Users, ArrowUpRight, Bitcoin, DollarSign, LineChart, ShieldCheck } from "lucide-react"

export function LandingFeatures() {
  return (
    <section id="features" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm dark:bg-green-800">
              Características
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Como Funciona</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              O World Family combina um sistema de fila única com um plano de compensação binário para criar uma
              plataforma de ajuda mútua sustentável.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <div className="rounded-full bg-green-100 p-3 dark:bg-green-800">
              <Users className="h-6 w-6 text-green-600 dark:text-green-50" />
            </div>
            <h3 className="text-xl font-bold">Fila Única</h3>
            <p className="text-sm text-muted-foreground text-center">
              Sistema FIFO (First In, First Out) para distribuição justa de doações entre os participantes.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <div className="rounded-full bg-green-100 p-3 dark:bg-green-800">
              <ArrowUpRight className="h-6 w-6 text-green-600 dark:text-green-50" />
            </div>
            <h3 className="text-xl font-bold">Bônus Binário</h3>
            <p className="text-sm text-muted-foreground text-center">
              Ganhe bônus adicionais através da estrutura binária ao convidar novos participantes.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <div className="rounded-full bg-green-100 p-3 dark:bg-green-800">
              <Bitcoin className="h-6 w-6 text-green-600 dark:text-green-50" />
            </div>
            <h3 className="text-xl font-bold">Pagamentos em Cripto</h3>
            <p className="text-sm text-muted-foreground text-center">
              Utilize Bitcoin e outras criptomoedas para transações rápidas e seguras.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <div className="rounded-full bg-green-100 p-3 dark:bg-green-800">
              <DollarSign className="h-6 w-6 text-green-600 dark:text-green-50" />
            </div>
            <h3 className="text-xl font-bold">Múltiplas Moedas</h3>
            <p className="text-sm text-muted-foreground text-center">
              Suporte para BRL, USD e diversas criptomoedas para participantes globais.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <div className="rounded-full bg-green-100 p-3 dark:bg-green-800">
              <LineChart className="h-6 w-6 text-green-600 dark:text-green-50" />
            </div>
            <h3 className="text-xl font-bold">Sustentabilidade</h3>
            <p className="text-sm text-muted-foreground text-center">
              Mecanismo de reentradas obrigatórias para garantir o fluxo contínuo do sistema.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <div className="rounded-full bg-green-100 p-3 dark:bg-green-800">
              <ShieldCheck className="h-6 w-6 text-green-600 dark:text-green-50" />
            </div>
            <h3 className="text-xl font-bold">Transparência</h3>
            <p className="text-sm text-muted-foreground text-center">
              Visualize sua posição na fila, estrutura binária e histórico de transações em tempo real.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
