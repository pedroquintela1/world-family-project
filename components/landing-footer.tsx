import Link from "next/link"

export function LandingFooter() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between md:py-12">
        <div className="flex flex-col gap-2">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold text-green-600">World Family</span>
          </Link>
          <p className="text-sm text-muted-foreground">Sistema de ajuda mútua com fila única e bônus binário.</p>
        </div>
        <div className="flex flex-col gap-2 md:flex-row md:gap-4">
          <Link href="/terms" className="text-sm hover:underline underline-offset-4">
            Termos de Uso
          </Link>
          <Link href="/privacy" className="text-sm hover:underline underline-offset-4">
            Política de Privacidade
          </Link>
          <Link href="/contact" className="text-sm hover:underline underline-offset-4">
            Contato
          </Link>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} World Family. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
