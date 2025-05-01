import Link from "next/link"
import { Button } from "@/components/ui/button"

export function LandingHero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-green-50 to-white dark:from-green-950 dark:to-background">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                World Family
              </h1>
              <p className="text-xl text-muted-foreground">
                Sistema de ajuda mútua com fila única e bônus binário para gerar renda extra de forma sustentável.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" asChild>
                <Link href="/register">Comece Agora</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#features">Saiba Mais</Link>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative w-full h-[350px] md:h-[450px] lg:h-[500px] rounded-lg overflow-hidden bg-muted">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-green-600/40 flex items-center justify-center">
                <div className="text-center p-8 bg-background/80 backdrop-blur-sm rounded-lg shadow-lg">
                  <h2 className="text-2xl font-bold mb-4">Receba até 50% de Bônus</h2>
                  <p className="mb-4">Disponível para primeira contribuição!</p>
                  <Button variant="default">Corra e Aproveite!</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
