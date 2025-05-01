"use client"

import { useEffect, useRef } from "react"

// Dados simulados para a rede binária
const networkData = {
  id: "user1",
  name: "Você",
  active: true,
  left: {
    id: "user2",
    name: "Carlos",
    active: true,
    left: {
      id: "user4",
      name: "Ana",
      active: true,
      left: {
        id: "user8",
        name: "Pedro",
        active: true,
        left: null,
        right: null,
      },
      right: {
        id: "user9",
        name: "Lucia",
        active: true,
        left: null,
        right: null,
      },
    },
    right: {
      id: "user5",
      name: "João",
      active: true,
      left: {
        id: "user10",
        name: "Maria",
        active: false,
        left: null,
        right: null,
      },
      right: null,
    },
  },
  right: {
    id: "user3",
    name: "Roberto",
    active: true,
    left: {
      id: "user6",
      name: "Fernanda",
      active: true,
      left: null,
      right: null,
    },
    right: {
      id: "user7",
      name: "Miguel",
      active: true,
      left: {
        id: "user11",
        name: "Julia",
        active: true,
        left: null,
        right: null,
      },
      right: null,
    },
  },
}

export function NetworkTree() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Ajustar o tamanho do canvas para o tamanho do contêiner
    canvas.width = canvas.offsetWidth
    canvas.height = 500

    // Limpar o canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Desenhar a árvore binária
    const nodeRadius = 25
    const levelHeight = 80
    const startX = canvas.width / 2
    const startY = 50

    // Função para desenhar um nó
    function drawNode(ctx: CanvasRenderingContext2D, x: number, y: number, node: any) {
      if (!node) return

      // Desenhar círculo
      ctx.beginPath()
      ctx.arc(x, y, nodeRadius, 0, Math.PI * 2)
      ctx.fillStyle = node.active ? "#00D0A5" : "#6C8A9B"
      ctx.fill()
      ctx.strokeStyle = "#0F2B3C"
      ctx.lineWidth = 2
      ctx.stroke()

      // Desenhar texto
      ctx.fillStyle = "#FFFFFF"
      ctx.font = "12px Arial"
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"
      ctx.fillText(node.name.substring(0, 8), x, y)

      // Calcular posições dos filhos
      const nextLevelY = y + levelHeight
      const offset = 180 / Math.pow(2, Math.floor(y / levelHeight))

      // Desenhar conexões e filhos recursivamente
      if (node.left) {
        const leftX = x - offset
        ctx.beginPath()
        ctx.moveTo(x - nodeRadius * 0.5, y + nodeRadius * 0.866) // Ponto inferior esquerdo do nó atual
        ctx.lineTo(leftX + nodeRadius * 0.5, nextLevelY - nodeRadius * 0.866) // Ponto superior direito do nó filho esquerdo
        ctx.strokeStyle = "#6C8A9B"
        ctx.lineWidth = 1
        ctx.stroke()
        drawNode(ctx, leftX, nextLevelY, node.left)
      }

      if (node.right) {
        const rightX = x + offset
        ctx.beginPath()
        ctx.moveTo(x + nodeRadius * 0.5, y + nodeRadius * 0.866) // Ponto inferior direito do nó atual
        ctx.lineTo(rightX - nodeRadius * 0.5, nextLevelY - nodeRadius * 0.866) // Ponto superior esquerdo do nó filho direito
        ctx.strokeStyle = "#6C8A9B"
        ctx.lineWidth = 1
        ctx.stroke()
        drawNode(ctx, rightX, nextLevelY, node.right)
      }
    }

    // Iniciar o desenho da árvore
    drawNode(ctx, startX, startY, networkData)
  }, [])

  return (
    <div className="w-full overflow-auto">
      <div className="min-w-[600px]">
        <canvas ref={canvasRef} className="w-full" style={{ height: "500px" }}></canvas>
        <div className="flex justify-center gap-6 mt-4">
          <div className="flex items-center gap-2">
            <div className="h-4 w-4 rounded-full bg-wf-success"></div>
            <span className="text-sm text-wf-text">Usuário Ativo</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-4 w-4 rounded-full bg-wf-muted"></div>
            <span className="text-sm text-wf-text">Usuário Inativo</span>
          </div>
        </div>
      </div>
    </div>
  )
}
