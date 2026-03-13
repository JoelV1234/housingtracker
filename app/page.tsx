import Link from "next/link";
import { ArrowRight, Users, BarChart2, History, MessageSquare, Calendar } from "lucide-react";

export default function Home() {
  const features = [
    {
      title: "Candidate Profiles",
      description: "In-depth information on local election candidates, their official housing platforms, and promised policies.",
      icon: Users,
      href: "/candidates",
      color: "bg-canadian-red/10 text-canadian-red",
    },
    {
      title: "Money in Politics",
      description: "Track potential donors and lobbying interests to understand who is influencing housing policy.",
      icon: BarChart2,
      href: "/donors",
      color: "bg-blue-500/10 text-blue-600",
    },
    {
      title: "Proven Track Records",
      description: "Evaluate incumbent performance with data-driven insights into their past housing decisions and voting history.",
      icon: History,
      href: "/track-record",
      color: "bg-green-500/10 text-green-600",
    },
    {
      title: "Community Discourse",
      description: "Follow and participate in discussions to see what your neighbors are saying about local developments.",
      icon: MessageSquare,
      href: "/discourse",
      color: "bg-purple-500/10 text-purple-600",
    },
    {
      title: "Activism & Events",
      description: "Stay updated on campaigns, protests, town halls, and other events related to housing policy in your area.",
      icon: Calendar,
      href: "/events",
      color: "bg-orange-500/10 text-orange-600",
    },
  ];

  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white pt-16 md:pt-24 pb-32">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        <div className="container relative pl-4 pr-4 mx-auto max-w-6xl text-center flex flex-col items-center">
          <div className="inline-flex items-center rounded-full border border-canadian-red/20 bg-canadian-red/5 px-3 py-1 text-sm font-medium text-canadian-red mb-8">
            <span className="flex h-2 w-2 rounded-full bg-canadian-red mr-2"></span>
            Empowering Canadian Municipalities
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground max-w-4xl mb-6">
            Transparency in <span className="text-canadian-red">Local Housing</span> Decisions
          </h1>
          <p className="mt-4 text-xl text-muted-foreground max-w-2xl leading-relaxed mb-10">
            Housing Tracker is a Canadian community-driven platform designed to bring transparency and accountability to local housing decisions in municipalities across Canada.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link
              href="/candidates"
              className="inline-flex h-12 items-center justify-center rounded-lg bg-canadian-red px-8 text-base font-semibold text-white shadow-lg shadow-canadian-red/20 transition-all hover:bg-canadian-red-dark hover:-translate-y-0.5"
            >
              Explore Candidates
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/about"
              className="inline-flex h-12 items-center justify-center rounded-lg border-2 border-muted bg-white px-8 text-base font-semibold text-foreground transition-all hover:border-canadian-red/20 hover:bg-muted/50"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-muted/30">
        <div className="container pl-4 pr-4 mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <Link
                key={index}
                href={feature.href}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-white p-8 shadow-sm transition-all hover:shadow-md hover:-translate-y-1 border border-border"
              >
                <div>
                  <div className={`mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl ${feature.color}`}>
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-foreground group-hover:text-canadian-red transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
                <div className="mt-8 flex items-center text-sm font-semibold text-canadian-red opacity-0 -translate-x-4 transition-all group-hover:opacity-100 group-hover:translate-x-0">
                  Explore {feature.title} <ArrowRight className="ml-1 h-4 w-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 bg-canadian-red text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
        <div className="container relative pl-4 pr-4 mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to shape your neighborhood?</h2>
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Join thousands of Canadians using Housing Tracker to stay informed, track political donorship, and influence local housing policy.
          </p>
          <Link
            href="/join"
            className="inline-flex h-14 items-center justify-center rounded-lg bg-white px-8 text-lg font-bold text-canadian-red shadow-xl transition-all hover:bg-gray-50 hover:scale-105"
          >
            Get Involved Today
          </Link>
        </div>
      </section>
    </div>
  );
}
