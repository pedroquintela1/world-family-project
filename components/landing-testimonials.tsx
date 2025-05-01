import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export function LandingTestimonials() {
  return (
    <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-green-50 dark:bg-green-950/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm dark:bg-green-800">Depoimentos</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">O que dizem nossos participantes</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Veja como o World Family tem ajudado pessoas a gerar renda extra de forma sustentável.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage alt="Avatar" src="/placeholder.svg?height=40&width=40" />
                  <AvatarFallback>RM</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-lg font-bold">Roberto Martins</h3>
                  <p className="text-sm text-muted-foreground">São Paulo, Brasil</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                "Entrei no World Family há 3 meses e já recebi 2 ciclos completos. O sistema é transparente e funciona
                exatamente como prometido."
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage alt="Avatar" src="/placeholder.svg?height=40&width=40" />
                  <AvatarFallback>CS</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-lg font-bold">Carolina Silva</h3>
                  <p className="text-sm text-muted-foreground">Rio de Janeiro, Brasil</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                "O que mais gosto é a possibilidade de usar Bitcoin. As transações são rápidas e o suporte responde
                rapidamente quando precisei."
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarImage alt="Avatar" src="/placeholder.svg?height=40&width=40" />
                  <AvatarFallback>JA</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-lg font-bold">João Almeida</h3>
                  <p className="text-sm text-muted-foreground">Belo Horizonte, Brasil</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                "Comecei com uma pequena doação e já consegui construir uma rede binária com mais de 30 pessoas. O bônus
                binário é um excelente complemento."
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
