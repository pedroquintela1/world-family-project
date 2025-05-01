"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Dados simulados para o gráfico
const chartData = [
  { date: "01 Out", income: 120, expense: -80 },
  { date: "05 Out", income: 250, expense: -110 },
  { date: "10 Out", income: 180, expense: -120 },
  { date: "15 Out", income: 310, expense: -150 },
  { date: "20 Out", income: 190, expense: -100 },
  { date: "25 Out", income: 280, expense: -140 },
  { date: "30 Out", income: 220, expense: -90 },
  { date: "05 Nov", income: 350, expense: -180 },
  { date: "10 Nov", income: 270, expense: -130 },
  { date: "15 Nov", income: 230, expense: -110 },
]

export function DashboardChart() {
  const [period, setPeriod] = useState("weekly")
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Ajustar o tamanho do canvas para o tamanho do contêiner
    canvas.width = canvas.offsetWidth
    canvas.height = 200

    // Limpar o canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Configurações do gráfico
    const padding = 20
    const chartWidth = canvas.width - padding * 2
    const chartHeight = canvas.height - padding * 2
    const barWidth = chartWidth / chartData.length / 3
    const barSpacing = barWidth / 2

    // Encontrar o valor máximo e mínimo para escala
    const maxValue = Math.max(...chartData.map((d) => d.income))
    const minValue = Math.min(...chartData.map((d) => d.expense))
    const valueRange = maxValue - minValue

    // Função para converter valor para coordenada Y
    const getYCoordinate = (value: number) => {
      const zeroY = padding + chartHeight / 2
      const scale = chartHeight / 2 / Math.max(Math.abs(maxValue), Math.abs(minValue))
      return zeroY - value * scale
    }

    // Desenhar linha do zero
    ctx.beginPath()
    ctx.moveTo(padding, padding + chartHeight / 2)
    ctx.lineTo(padding + chartWidth, padding + chartHeight / 2)
    ctx.strokeStyle = "#6C8A9B30"
    ctx.lineWidth = 1
    ctx.stroke()

    // Desenhar barras
    chartData.forEach((data, index) => {
      const x = padding + index * (barWidth * 3 + barSpacing)

      // Barra de receita (positiva)
      ctx.fillStyle = "#00D0A5"
      const incomeHeight = Math.abs(getYCoordinate(data.income) - getYCoordinate(0))
      ctx.fillRect(x, getYCoordinate(data.income), barWidth, incomeHeight)

      // Barra de despesa (negativa)
      ctx.fillStyle = "#FF5A5A"
      const expenseHeight = Math.abs(getYCoordinate(data.expense) - getYCoordinate(0))
      ctx.fillRect(x + barWidth + barSpacing, getYCoordinate(0), barWidth, expenseHeight)
    })
  }, [period])

  return (
    <Card className="bg-wf-secondary border-wf-secondary text-wf-text">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-md font-medium text-wf-text">Fluxo de Caixa</CardTitle>
        <Tabs defaultValue="weekly" value={period} onValueChange={setPeriod}>
          <TabsList className="bg-wf-background">
            <TabsTrigger value="daily" className="data-[state=active]:bg-wf-primary data-[state=active]:text-wf-text">
              Diário
            </TabsTrigger>
            <TabsTrigger value="weekly" className="data-[state=active]:bg-wf-primary data-[state=active]:text-wf-text">
              Semanal
            </TabsTrigger>
            <TabsTrigger value="monthly" className="data-[state=active]:bg-wf-primary data-[state=active]:text-wf-text">
              Mensal
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </CardHeader>
      <CardContent>
        <div className="h-[200px] w-full">
          <canvas ref={canvasRef} className="w-full h-full"></canvas>
        </div>
        <div className="mt-4 flex justify-center gap-6">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-wf-chart-positive"></div>
            <span className="text-sm text-wf-muted">Recebimentos</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-wf-chart-negative"></div>
            <span className="text-sm text-wf-muted">Doações</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
