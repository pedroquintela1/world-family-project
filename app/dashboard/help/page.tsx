import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Search } from "lucide-react"

export default function HelpPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Ajuda</h1>
        <p className="text-muted-foreground">Encontre respostas para suas dúvidas e suporte</p>
      </div>

      <div className="relative">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Buscar por tópicos de ajuda..."
          className="w-full appearance-none bg-background pl-8"
        />
      </div>

      <Tabs defaultValue="faq">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="faq">Perguntas Frequentes</TabsTrigger>
          <TabsTrigger value="guides">Guias</TabsTrigger>
          <TabsTrigger value="contact">Contato</TabsTrigger>
        </TabsList>

        <TabsContent value="faq" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Perguntas Frequentes</CardTitle>
              <CardDescription>Respostas para as dúvidas mais comuns</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Como funciona o sistema de fila única?</AccordionTrigger>
                  <AccordionContent>
                    O sistema de fila única funciona no modelo FIFO (First In, First Out). Quando você faz uma doação,
                    entra na fila. À medida que novos participantes entram, os que estão no topo da fila recebem as
                    doações. Após receber, você passa pelo processo de reentrada para manter o sistema sustentável.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>O que é o bônus binário?</AccordionTrigger>
                  <AccordionContent>
                    O bônus binário é um incentivo adicional baseado na sua rede de indicados. Você constrói duas pernas
                    (esquerda e direita) e recebe um percentual do volume gerado pela perna menor, desde que esteja
                    qualificado com a ativação mensal e tenha pelo menos um indicado direto em cada perna.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Quais criptomoedas são aceitas?</AccordionTrigger>
                  <AccordionContent>
                    Atualmente aceitamos Bitcoin (BTC), Ethereum (ETH), Litecoin (LTC) e Bitcoin Cash (BCH). Também é
                    possível fazer doações em reais (BRL) através da integração com a Binance Pay.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>Como funciona a reentrada obrigatória?</AccordionTrigger>
                  <AccordionContent>
                    Após completar um ciclo de recebimento, parte do valor recebido é automaticamente utilizado para
                    duas reentradas: uma para sustentabilidade do sistema (não lucrativa) e outra para gerar lucro
                    adicional. Este mecanismo garante o fluxo contínuo e a longevidade do sistema.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>Qual é o valor mínimo para participar?</AccordionTrigger>
                  <AccordionContent>
                    O valor mínimo para participar é de R$ 100,00 ou o equivalente em criptomoedas. Você pode escolher
                    valores maiores, até R$ 1.000,00, o que pode influenciar na velocidade de retorno e nos bônus
                    gerados.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6">
                  <AccordionTrigger>O sistema é legal?</AccordionTrigger>
                  <AccordionContent>
                    O World Family é um sistema de ajuda mútua P2P (peer-to-peer) onde os participantes fazem doações
                    voluntárias entre si. Não prometemos rendimentos fixos ou garantidos. Recomendamos que cada
                    participante consulte a legislação de seu país antes de participar.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="guides" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Guias e Tutoriais</CardTitle>
              <CardDescription>Aprenda a usar todas as funcionalidades do sistema</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <Card className="cursor-pointer hover:bg-accent">
                  <CardHeader className="p-4">
                    <CardTitle className="text-lg">Primeiros Passos</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <p className="text-sm text-muted-foreground">
                      Um guia completo para novos usuários do World Family
                    </p>
                  </CardContent>
                </Card>
                <Card className="cursor-pointer hover:bg-accent">
                  <CardHeader className="p-4">
                    <CardTitle className="text-lg">Como Fazer Doações</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <p className="text-sm text-muted-foreground">
                      Aprenda a fazer doações usando criptomoedas, PIX ou cartão
                    </p>
                  </CardContent>
                </Card>
                <Card className="cursor-pointer hover:bg-accent">
                  <CardHeader className="p-4">
                    <CardTitle className="text-lg">Entendendo a Fila Única</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <p className="text-sm text-muted-foreground">
                      Como funciona o sistema de fila única e ciclos de recebimento
                    </p>
                  </CardContent>
                </Card>
                <Card className="cursor-pointer hover:bg-accent">
                  <CardHeader className="p-4">
                    <CardTitle className="text-lg">Construindo sua Rede Binária</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <p className="text-sm text-muted-foreground">
                      Estratégias para crescer sua rede e maximizar seus bônus
                    </p>
                  </CardContent>
                </Card>
              </div>
              <div className="flex justify-center mt-4">
                <Button variant="outline">Ver Todos os Guias</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="contact" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Entre em Contato</CardTitle>
              <CardDescription>Envie uma mensagem para nossa equipe de suporte</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="subject">Assunto</Label>
                <Input id="subject" placeholder="Assunto da sua mensagem" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Mensagem</Label>
                <Textarea id="message" placeholder="Descreva sua dúvida ou problema em detalhes" rows={5} />
              </div>
              <Button className="w-full">Enviar Mensagem</Button>
              <div className="text-center text-sm text-muted-foreground mt-4">
                <p>Tempo médio de resposta: 24 horas</p>
                <p className="mt-2">
                  Você também pode nos contatar pelo e-mail:{" "}
                  <a href="mailto:suporte@worldfamily.com" className="text-primary hover:underline">
                    suporte@worldfamily.com
                  </a>
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
