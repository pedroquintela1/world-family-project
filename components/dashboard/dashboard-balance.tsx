"use client"

import { Button } from "@/components/ui/button"
import { ArrowUp, ArrowDown, MoreHorizontal } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Card, CardContent } from "@/components/ui/card"

export function DashboardBalance() {
  return (
    <Card className="card-dashboard animate-enter">
      <CardContent className="p-6">
        <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
          <div>
            <p className="text-sm font-medium text-app-text-secondary">Saldo Total</p>
            <div className="flex items-center">
              <h2 className="text-3xl font-bold text-app-text-primary">$3,250.75</h2>
              <span className="ml-2 flex items-center text-sm font-medium text-app-green">
                <ArrowUp className="mr-1 h-4 w-4" />
                12.5%
              </span>
            </div>
            <p className="text-xs text-app-text-secondary mt-1">Atualizado em 01/05/2025 às 09:45</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button className="bg-app-green hover:bg-app-green-light text-white">
              <ArrowDown className="mr-2 h-4 w-4" /> Receber
            </Button>
            <Button className="bg-app-purple hover:bg-app-purple-light text-white">
              <ArrowUp className="mr-2 h-4 w-4" /> Doar
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className="rounded-full">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Extrato Completo</DropdownMenuItem>
                <DropdownMenuItem>Exportar Relatório</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
