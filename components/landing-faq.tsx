import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function LandingFaq() {
  return (
    <section id="faq" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm dark:bg-green-800">FAQ</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Perguntas Frequentes</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Respostas para as dúvidas mais comuns sobre o World Family.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-3xl space-y-8 py-12">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Como funciona o sistema de fila única?</AccordionTrigger>
              <AccordionContent>
                O sistema de fila única funciona no modelo FIFO (First In, First Out). Quando você faz uma doação, entra
                na fila. À medida que novos participantes entram, os que estão no topo da fila recebem as doações. Após
                receber, você passa pelo processo de reentrada para manter o sistema sustentável.
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
                Após completar um ciclo de recebimento, parte do valor recebido é automaticamente utilizado para duas
                reentradas: uma para sustentabilidade do sistema (não lucrativa) e outra para gerar lucro adicional.
                Este mecanismo garante o fluxo contínuo e a longevidade do sistema.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>Qual é o valor mínimo para participar?</AccordionTrigger>
              <AccordionContent>
                O valor mínimo para participar é de R$ 100,00 ou o equivalente em criptomoedas. Você pode escolher
                valores maiores, até R$ 1.000,00, o que pode influenciar na velocidade de retorno e nos bônus gerados.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger>O sistema é legal?</AccordionTrigger>
              <AccordionContent>
                O World Family é um sistema de ajuda mútua P2P (peer-to-peer) onde os participantes fazem doações
                voluntárias entre si. Não prometemos rendimentos fixos ou garantidos. Recomendamos que cada participante
                consulte a legislação de seu país antes de participar.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  )
}
