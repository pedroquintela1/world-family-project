"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Home, ListOrdered, Users, BarChart3, DollarSign, Settings, HelpCircle, LogOut, LifeBuoy } from "lucide-react"

const sidebarLinks = [
  {
    title: "Home",
    href: "/dashboard",
    icon: Home,
  },
  {
    title: "Fila Única",
    href: "/dashboard/queue",
    icon: ListOrdered,
  },
  {
    title: "Rede Binária",
    href: "/dashboard/network",
    icon: Users,
  },
  {
    title: "Transações",
    href: "/dashboard/transactions",
    icon: BarChart3,
  },
  {
    title: "Fazer Doação",
    href: "/dashboard/donate",
    icon: DollarSign,
  },
  {
    title: "Suporte",
    href: "/dashboard/support",
    icon: LifeBuoy,
  },
  {
    title: "Configurações",
    href: "/dashboard/settings",
    icon: Settings,
  },
  {
    title: "Ajuda",
    href: "/dashboard/help",
    icon: HelpCircle,
  },
]

export function DashboardSidebar() {
  const pathname = usePathname()

  return (
    <aside className="hidden md:flex flex-col w-64 bg-gradient-to-b from-app-purple to-app-purple-dark text-white">
      <div className="p-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded bg-app-blue flex items-center justify-center">
            <span className="text-white font-bold">WF</span>
          </div>
          <span className="text-xl font-bold">World Family</span>
        </Link>
      </div>
      <div className="flex-1 px-3">
        <nav className="space-y-1">
          {sidebarLinks.map((link, index) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={index}
                href={link.href}
                className={cn("sidebar-link", isActive ? "sidebar-link-active" : "sidebar-link-inactive")}
              >
                <link.icon className="h-5 w-5" />
                {link.title}
              </Link>
            )
          })}
        </nav>
      </div>
      <div className="p-4 mt-auto">
        <Link href="/logout" className="sidebar-link sidebar-link-inactive">
          <LogOut className="h-5 w-5" />
          Sair
        </Link>
      </div>
    </aside>
  )
}
