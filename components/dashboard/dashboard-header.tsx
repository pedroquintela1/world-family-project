"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Bell, Menu, MessageSquare } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function DashboardHeader() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-app-background-light py-2">
      <div className="container flex h-14 items-center justify-between">
        <div className="flex items-center gap-4">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon" className="rounded-full">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-app-purple border-app-purple-light">
              <Link href="/" className="flex items-center gap-2 py-4">
                <div className="h-8 w-8 rounded bg-app-blue flex items-center justify-center">
                  <span className="text-white font-bold">WF</span>
                </div>
                <span className="text-xl font-bold text-white">World Family</span>
              </Link>
              <nav className="flex flex-col gap-4 mt-8">
                <Link href="/dashboard" onClick={() => setIsOpen(false)} className="sidebar-link sidebar-link-inactive">
                  Home
                </Link>
                <Link
                  href="/dashboard/queue"
                  onClick={() => setIsOpen(false)}
                  className="sidebar-link sidebar-link-inactive"
                >
                  Fila Única
                </Link>
                <Link
                  href="/dashboard/network"
                  onClick={() => setIsOpen(false)}
                  className="sidebar-link sidebar-link-inactive"
                >
                  Rede Binária
                </Link>
                <Link
                  href="/dashboard/transactions"
                  onClick={() => setIsOpen(false)}
                  className="sidebar-link sidebar-link-inactive"
                >
                  Transações
                </Link>
                <Link
                  href="/dashboard/donate"
                  onClick={() => setIsOpen(false)}
                  className="sidebar-link sidebar-link-inactive"
                >
                  Fazer Doação
                </Link>
                <Link
                  href="/dashboard/support"
                  onClick={() => setIsOpen(false)}
                  className="sidebar-link sidebar-link-inactive"
                >
                  Suporte
                </Link>
                <Link
                  href="/dashboard/settings"
                  onClick={() => setIsOpen(false)}
                  className="sidebar-link sidebar-link-inactive"
                >
                  Configurações
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
        <div className="flex items-center gap-3">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2">
                <span>PT-BR</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => console.log("Português selecionado")}>Português</DropdownMenuItem>
              <DropdownMenuItem onClick={() => console.log("Español seleccionado")}>Español</DropdownMenuItem>
              <DropdownMenuItem onClick={() => console.log("English selected")}>English</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button
            variant="outline"
            size="icon"
            className="relative rounded-full border-muted hover:border-app-blue hover:text-app-blue"
            onClick={() => console.log("Notificações clicadas")}
          >
            <Bell className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-app-blue text-[10px] text-white">
              3
            </span>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="relative rounded-full border-muted hover:border-app-blue hover:text-app-blue"
            onClick={() => console.log("Mensagens clicadas")}
          >
            <MessageSquare className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-app-blue text-[10px] text-white">
              5
            </span>
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-10 w-10 rounded-full p-0">
                <Avatar className="h-10 w-10 border-2 border-muted">
                  <AvatarImage src="/placeholder.svg" alt="@user" />
                  <AvatarFallback className="bg-app-purple text-white">MU</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">Marcus White</p>
                  <p className="text-xs leading-none text-muted-foreground">marcus@exemplo.com</p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link href="/dashboard/profile" className="w-full">
                  Perfil
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/dashboard/settings" className="w-full">
                  Configurações
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link href="/logout" className="w-full">
                  Sair
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}
