import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"

export function NetworkTable() {
  const networkMembers = [
    {
      id: 1,
      name: "Carlos Silva",
      email: "carlos@exemplo.com",
      position: "Esquerda",
      level: 1,
      status: "Ativo",
      joinDate: "15/04/2025",
      volume: 1200,
    },
    {
      id: 2,
      name: "Ana Oliveira",
      email: "ana@exemplo.com",
      position: "Direita",
      level: 1,
      status: "Ativo",
      joinDate: "16/04/2025",
      volume: 800,
    },
    {
      id: 3,
      name: "Roberto Santos",
      email: "roberto@exemplo.com",
      position: "Esquerda",
      level: 2,
      status: "Ativo",
      joinDate: "18/04/2025",
      volume: 600,
    },
    {
      id: 4,
      name: "Juliana Costa",
      email: "juliana@exemplo.com",
      position: "Esquerda",
      level: 2,
      status: "Ativo",
      joinDate: "20/04/2025",
      volume: 450,
    },
    {
      id: 5,
      name: "Fernando Almeida",
      email: "fernando@exemplo.com",
      position: "Direita",
      level: 2,
      status: "Ativo",
      joinDate: "22/04/2025",
      volume: 350,
    },
  ]

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Buscar por nome ou email..."
            className="w-full appearance-none bg-background pl-8"
          />
        </div>
        <Button variant="outline">Filtrar</Button>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nome</TableHead>
              <TableHead>Posição</TableHead>
              <TableHead>Nível</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Data de Entrada</TableHead>
              <TableHead className="text-right">Volume</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {networkMembers.map((member) => (
              <TableRow key={member.id}>
                <TableCell>
                  <div>
                    <div className="font-medium">{member.name}</div>
                    <div className="text-sm text-muted-foreground">{member.email}</div>
                  </div>
                </TableCell>
                <TableCell>{member.position}</TableCell>
                <TableCell>{member.level}</TableCell>
                <TableCell>
                  <span
                    className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                      member.status === "Ativo"
                        ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                        : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
                    }`}
                  >
                    {member.status}
                  </span>
                </TableCell>
                <TableCell>{member.joinDate}</TableCell>
                <TableCell className="text-right">{member.volume} pontos</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
