import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import Link from "next/link"
import { ArrowRight, Calendar as CalendarIcon, MessageSquare, Users } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="px-4 py-20 md:py-32 max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Connect with Creative Professionals
          </h1>
          <p className="mt-6 text-xl text-muted-foreground max-w-3xl mx-auto">
            Book sessions with top creative talent. Streamlined scheduling, secure payments, and seamless communication all in one place.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/signup">Get Started <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/browse">Browse Creatives</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 py-20 bg-muted">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Everything you need in one place</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-background p-6 rounded-lg">
              <Calendar className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Smart Scheduling</h3>
              <p className="text-muted-foreground">
                Intelligent calendar management with timezone support and availability controls.
              </p>
            </div>
            <div className="bg-background p-6 rounded-lg">
              <MessageSquare className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Seamless Communication</h3>
              <p className="text-muted-foreground">
                Real-time chat and messaging to discuss project details and requirements.
              </p>
            </div>
            <div className="bg-background p-6 rounded-lg">
              <Users className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Client Management</h3>
              <p className="text-muted-foreground">
                Organize your clients and projects with our intuitive dashboard.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}