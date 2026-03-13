import { Search, MapPin, Building2, ChevronRight, Home, AlertTriangle, DollarSign } from "lucide-react";
import Link from "next/link";

export default function CandidatesPage() {
    const candidates = [
        {
            id: 1,
            name: "Sarah Jenkins", role: "Mayoral Candidate", city: "Toronto, ON", avatar: "SJ",
            platform: "High-density zoning near transit hubs.",
            housingPosition: "Pro-development, YIMBY focus",
            conflictsOfInterest: "Former board member of Apex Dev Group",
            campaignDonations: "$450,000 (45% from Real Estate)"
        },
        {
            id: 2,
            name: "David Chen", role: "City Councilor, Ward 10", city: "Vancouver, BC", avatar: "DC",
            platform: "Rent control and affordable housing mandates.",
            housingPosition: "Strong tenant protection advocate",
            conflictsOfInterest: "None declared",
            campaignDonations: "$120,000 (Mostly grassroots)"
        },
        {
            id: 3,
            name: "Marie Dubois", role: "Mayoral Candidate", city: "Montreal, QC", avatar: "MD",
            platform: "Preserving heritage sites while expanding missing middle.",
            housingPosition: "Balanced approach, pro-missing middle",
            conflictsOfInterest: "Owns 3 rental properties",
            campaignDonations: "$320,000 (Mixed sources)"
        },
    ];

    return (
        <div className="container mx-auto px-4 py-12 max-w-6xl">
            <div className="mb-10">
                <h1 className="text-4xl font-extrabold tracking-tight text-foreground mb-4">
                    Candidate <span className="text-canadian-red">Profiles</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl">
                    In-depth information on local election candidates, their official housing platforms, and promised policies.
                </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <input
                        type="text"
                        placeholder="Search candidates by name, city, or ward..."
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-white placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-canadian-red/50 transition-all"
                    />
                </div>
                <select className="px-4 py-3 rounded-xl border border-border bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-canadian-red/50">
                    <option>All Municipalities</option>
                    <option>Toronto</option>
                    <option>Vancouver</option>
                    <option>Montreal</option>
                    <option>Calgary</option>
                </select>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {candidates.map((c) => (
                    <Link
                        href={`/candidates/${c.id}`}
                        key={c.id}
                        className="group relative flex flex-col bg-white rounded-2xl border border-border shadow-sm overflow-hidden hover:shadow-md transition-all hover:-translate-y-1 block"
                    >
                        <div className="p-6">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="h-16 w-16 rounded-full bg-canadian-red/10 text-canadian-red flex items-center justify-center text-xl font-bold">
                                    {c.avatar}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-foreground">{c.name}</h3>
                                    <p className="text-sm font-medium text-canadian-red">{c.role}</p>
                                </div>
                            </div>

                            <div className="space-y-3 mb-6">
                                <div className="flex items-center text-sm text-muted-foreground">
                                    <MapPin className="h-4 w-4 mr-2 shrink-0" />
                                    {c.city}
                                </div>
                                <div className="flex items-start text-sm text-muted-foreground">
                                    <Building2 className="h-4 w-4 mr-2 mt-0.5 shrink-0" />
                                    <span className="line-clamp-2">{c.platform}</span>
                                </div>
                            </div>
                        </div>

                        <div className="mt-auto border-t border-border bg-muted/30 p-4">
                            <span className="flex items-center justify-center w-full text-sm font-semibold text-foreground group-hover:text-canadian-red transition-colors">
                                View Full Profile <ChevronRight className="ml-1 h-4 w-4" />
                            </span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

