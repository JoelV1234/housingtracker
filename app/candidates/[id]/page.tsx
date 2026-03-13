import { Building2, Home, AlertTriangle, DollarSign, MapPin, ArrowLeft, History, FileText, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

// In a real app, this would be fetched from a database using the ID
const getCandidate = (id: string) => {
    const candidates = [
        {
            id: "1",
            name: "Sarah Jenkins", role: "Mayoral Candidate", city: "Toronto, ON", avatar: "SJ",
            platform: "High-density zoning near transit hubs. Streamlining the permit process for missing middle housing.",
            housingPosition: "Pro-development, YIMBY focus",
            conflictsOfInterest: "Former board member of Apex Dev Group. Spouse owns a construction logistics firm.",
            campaignDonations: "$450,000",
            donationBreakdown: [
                { source: "Real Estate & Construction", amount: "45%", value: "$202,500" },
                { source: "Unions & PACs", amount: "30%", value: "$135,000" },
                { source: "Individual Citizens", amount: "25%", value: "$112,500" }
            ],
            votingHistory: [
                { id: "Motion 44B", title: "Rent Stabilization Initiative", result: "Failed", vote: "Nay", date: "Sep 2025" },
                { id: "Zoning 15", title: "High-Rise Transit Corridor", result: "Passed", vote: "Yea", date: "Jun 2025" },
            ]
        },
        {
            id: "2",
            name: "David Chen", role: "City Councilor, Ward 10", city: "Vancouver, BC", avatar: "DC",
            platform: "Rent control and affordable housing mandates. Pushing for vacancy taxes to convert empty units to housing.",
            housingPosition: "Strong tenant protection advocate",
            conflictsOfInterest: "None declared.",
            campaignDonations: "$120,000",
            donationBreakdown: [
                { source: "Individual Citizens", amount: "75%", value: "$90,000" },
                { source: "Unions & PACs", amount: "20%", value: "$24,000" },
                { source: "Corporate", amount: "5%", value: "$6,000" }
            ],
            votingHistory: [
                { id: "By-Law 24", title: "Missing Middle Housing Legalization", result: "Passed", vote: "Yea", date: "Oct 2025" },
                { id: "Motion 44B", title: "Rent Stabilization Initiative", result: "Failed", vote: "Yea", date: "Sep 2025" },
            ]
        },
        {
            id: "3",
            name: "Marie Dubois", role: "Mayoral Candidate", city: "Montreal, QC", avatar: "MD",
            platform: "Preserving heritage sites while expanding missing middle. Focused on gentle density.",
            housingPosition: "Balanced approach, pro-missing middle",
            conflictsOfInterest: "Owns 3 rental properties in the downtown core.",
            campaignDonations: "$320,000",
            donationBreakdown: [
                { source: "Individual Citizens", amount: "40%", value: "$128,000" },
                { source: "Real Estate & Construction", amount: "35%", value: "$112,000" },
                { source: "Corporate (Other)", amount: "25%", value: "$80,000" }
            ],
            votingHistory: [
                { id: "Proposal C", title: "Social Housing Funding Allocation", result: "Passed", vote: "Yea", date: "Jul 2025" },
            ]
        },
    ];

    return candidates.find(c => c.id === id);
}

export default async function CandidateProfilePage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const candidate = getCandidate(id);

    if (!candidate) {
        notFound();
    }

    return (
        <div className="container mx-auto px-4 py-12 max-w-5xl">
            <Link
                href="/candidates"
                className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-canadian-red mb-8 transition-colors"
            >
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Candidates
            </Link>

            {/* Profile Header */}
            <div className="bg-white rounded-3xl border border-border overflow-hidden shadow-sm mb-8">
                <div className="h-32 bg-canadian-red/10 w-full relative">
                    <div className="absolute -bottom-12 left-8">
                        <div className="h-24 w-24 rounded-full bg-white p-1 shadow-md">
                            <div className="h-full w-full rounded-full bg-canadian-red/10 text-canadian-red flex items-center justify-center text-3xl font-bold">
                                {candidate.avatar}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pt-16 pb-8 px-8 flex flex-col md:flex-row md:items-start justify-between gap-6">
                    <div>
                        <h1 className="text-4xl font-extrabold text-foreground mb-2">{candidate.name}</h1>
                        <div className="flex flex-wrap items-center gap-4 text-muted-foreground font-medium">
                            <span className="text-canadian-red">{candidate.role}</span>
                            <span className="flex items-center"><MapPin className="h-4 w-4 mr-1" /> {candidate.city}</span>
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <button className="px-6 py-2.5 bg-canadian-red text-white font-medium rounded-lg hover:bg-canadian-red-dark transition-colors shadow-sm">
                            Follow Updates
                        </button>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Content Left */}
                <div className="lg:col-span-2 space-y-8">
                    <section className="bg-white rounded-3xl border border-border p-8 shadow-sm">
                        <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                            <Building2 className="mr-3 h-6 w-6 text-canadian-red" /> Official Platform & Stance
                        </h2>
                        <div className="bg-muted/30 p-6 rounded-2xl border border-border mb-6">
                            <p className="text-lg text-foreground leading-relaxed">
                                "{candidate.platform}"
                            </p>
                        </div>
                        <div className="flex items-start">
                            <Home className="h-5 w-5 mr-3 mt-0.5 text-blue-500 shrink-0" />
                            <div>
                                <h3 className="font-bold text-foreground text-sm uppercase tracking-wider mb-1 text-blue-800">Summarized Stance</h3>
                                <p className="text-muted-foreground font-medium">{candidate.housingPosition}</p>
                            </div>
                        </div>
                    </section>

                    <section className="bg-white rounded-3xl border border-border p-8 shadow-sm mb-8">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-2xl font-bold text-foreground flex items-center">
                                <History className="mr-3 h-6 w-6 text-canadian-red" /> Key Voting Record
                            </h2>
                            <Link href="/track-record" className="text-sm font-semibold text-canadian-red hover:underline">View All</Link>
                        </div>
                        <ul className="divide-y divide-border -mx-8">
                            {candidate.votingHistory.map((vote, i) => (
                                <li key={i} className="px-8 py-4 flex items-center justify-between hover:bg-muted/10 transition-colors">
                                    <div>
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="text-xs font-bold text-muted-foreground">{vote.id}</span>
                                            <span className="text-xs text-muted-foreground">• {vote.date}</span>
                                        </div>
                                        <p className="font-bold text-foreground flex items-center gap-2">
                                            <FileText className="h-4 w-4 text-muted-foreground" /> {vote.title}
                                        </p>
                                    </div>
                                    <div className="text-right">
                                        <span className={`inline-flex items-center text-sm font-bold ${vote.vote === 'Yea' ? 'text-emerald-600' : 'text-canadian-red'}`}>
                                            {vote.vote}
                                        </span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </section>
                </div>

                {/* Sidebar Right */}
                <div className="space-y-8">
                    <section className="bg-emerald-50/50 rounded-3xl border border-emerald-100 p-8 shadow-sm text-center">
                        <div className="inline-flex h-12 w-12 rounded-full bg-emerald-100 text-emerald-600 items-center justify-center mb-4">
                            <DollarSign className="h-6 w-6" />
                        </div>
                        <h2 className="text-lg font-bold text-emerald-900 mb-1">Campaign Donations</h2>
                        <h3 className="text-4xl font-extrabold text-emerald-700 mb-6">{candidate.campaignDonations}</h3>

                        <div className="space-y-3 text-left w-full">
                            {candidate.donationBreakdown.map((d, i) => (
                                <div key={i} className="bg-white/60 p-3 rounded-xl border border-emerald-100/50">
                                    <div className="flex justify-between text-sm mb-1">
                                        <span className="font-semibold text-emerald-900">{d.source}</span>
                                        <span className="font-bold text-emerald-700">{d.amount}</span>
                                    </div>
                                    <div className="w-full bg-emerald-100 rounded-full h-1.5">
                                        <div className="bg-emerald-500 h-1.5 rounded-full" style={{ width: d.amount }}></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="bg-amber-50/50 rounded-3xl border border-amber-100 p-8 shadow-sm">
                        <h2 className="text-lg font-bold text-amber-900 mb-4 flex items-center">
                            <AlertTriangle className="mr-2 h-5 w-5 text-amber-500" /> Conflicts of Interest
                        </h2>
                        <p className="text-amber-900 font-medium leading-relaxed">
                            {candidate.conflictsOfInterest}
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}
