import { History, CheckCircle2, XCircle, FileText } from "lucide-react";

export default function TrackRecordPage() {
    const votes = [
        { id: "By-Law 24-01A", title: "Missing Middle Housing Legalization", date: "Oct 12, 2025", result: "Passed", representative: "David Chen", vote: "Yea" },
        { id: "Motion 44B", title: "Rent Stabilization Initiative", date: "Sep 05, 2025", result: "Failed", representative: "Sarah Jenkins", vote: "Nay" },
        { id: "Zoning 12", title: "Transit-Oriented Density Expansion", date: "Aug 20, 2025", result: "Passed", representative: "David Chen", vote: "Yea" },
        { id: "Proposal C", title: "Social Housing Funding Allocation", date: "Jul 15, 2025", result: "Passed", representative: "Marie Dubois", vote: "Yea" },
    ];

    return (
        <div className="container mx-auto px-4 py-12 max-w-6xl">
            <div className="mb-10 text-center max-w-3xl mx-auto">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-canadian-red/10 text-canadian-red mb-6">
                    <History className="h-8 w-8" />
                </div>
                <h1 className="text-4xl font-extrabold tracking-tight text-foreground mb-4">
                    Proven <span className="text-canadian-red">Track Records</span>
                </h1>
                <p className="text-xl text-muted-foreground">
                    Evaluate incumbent performance with data-driven insights into their past housing decisions and voting history.
                </p>
            </div>

            <div className="bg-white rounded-2xl border border-border overflow-hidden shadow-sm mt-12">
                <div className="p-6 border-b border-border">
                    <h2 className="text-xl font-bold text-foreground">Recent Housing Votes</h2>
                </div>
                <ul className="divide-y divide-border">
                    {votes.map((vote, i) => (
                        <li key={i} className="p-6 hover:bg-muted/10 transition-colors flex flex-col md:flex-row md:items-center justify-between gap-6">
                            <div className="flex-1">
                                <div className="flex items-center gap-3 mb-2">
                                    <span className="px-2 py-1 text-xs font-semibold bg-muted text-muted-foreground rounded-md">
                                        {vote.id}
                                    </span>
                                    <span className="text-sm text-muted-foreground">{vote.date}</span>
                                </div>
                                <h3 className="text-lg font-bold text-foreground mb-1 flex items-center gap-2">
                                    <FileText className="h-5 w-5 text-canadian-red" /> {vote.title}
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                    Overall Result: <span className="font-medium text-foreground">{vote.result}</span>
                                </p>
                            </div>

                            <div className="bg-muted/30 rounded-xl p-4 flex items-center justify-between md:flex-col md:justify-center md:min-w-[200px] border border-border">
                                <span className="text-sm font-medium text-muted-foreground mb-1">{vote.representative}</span>
                                <div className="flex items-center gap-2">
                                    {vote.vote === "Yea" ? (
                                        <span className="flex items-center font-bold text-emerald-600">
                                            <CheckCircle2 className="h-5 w-5 mr-1" /> Voted Yea
                                        </span>
                                    ) : (
                                        <span className="flex items-center font-bold text-canadian-red">
                                            <XCircle className="h-5 w-5 mr-1" /> Voted Nay
                                        </span>
                                    )}
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
