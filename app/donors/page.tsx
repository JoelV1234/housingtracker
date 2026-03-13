import { DollarSign, AlertCircle, Building, Filter, TrendingUp } from "lucide-react";

export default function DonorsPage() {
    const contributions = [
        { donor: "Apex Development Group", amount: "$15,000", recipient: "Sarah Jenkins", type: "Corporate", status: "Verified" },
        { donor: "West Coast Holdings", amount: "$10,500", recipient: "David Chen", type: "Corporate", status: "Verified" },
        { donor: "Citizens for Better Housing", amount: "$8,200", recipient: "David Chen", type: "PAC", status: "Pending Review" },
        { donor: "Urban Renewal Inc.", amount: "$12,000", recipient: "Marie Dubois", type: "Corporate", status: "Verified" },
    ];

    return (
        <div className="container mx-auto px-4 py-12 max-w-6xl">
            <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                    <h1 className="text-4xl font-extrabold tracking-tight text-foreground mb-4">
                        Money in <span className="text-emerald-600">Politics</span>
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl">
                        Track potential donors and lobbying interests to understand who is influencing housing policy.
                    </p>
                </div>
                <div className="flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-2 rounded-lg text-sm font-semibold border border-emerald-200">
                    <AlertCircle className="h-4 w-4" /> Data updated daily
                </div>
            </div>

            <div className="grid gap-6 md:grid-cols-3 mb-12">
                <div className="bg-white p-6 rounded-2xl border border-border shadow-sm">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="h-12 w-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center">
                            <DollarSign className="h-6 w-6" />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-muted-foreground">Total Tracked Funds (2026)</p>
                            <h3 className="text-2xl font-bold text-foreground">$1.2M</h3>
                        </div>
                    </div>
                    <div className="flex items-center text-sm font-medium text-emerald-600">
                        <TrendingUp className="h-4 w-4 mr-1" /> +14% vs last cycle
                    </div>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-border shadow-sm">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="h-12 w-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
                            <Building className="h-6 w-6" />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-muted-foreground">Top Industry</p>
                            <h3 className="text-2xl font-bold text-foreground">Real Estate</h3>
                        </div>
                    </div>
                    <div className="text-sm font-medium text-muted-foreground">
                        Account for 45% of total donations
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-2xl border border-border overflow-hidden shadow-sm">
                <div className="p-6 border-b border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <h2 className="text-xl font-bold text-foreground">Recent Contributions</h2>
                    <button className="flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-md bg-muted hover:bg-muted/80 transition-colors">
                        <Filter className="h-4 w-4" /> Filter Records
                    </button>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-muted/50 border-b border-border">
                                <th className="p-4 text-sm font-semibold text-muted-foreground">Donor / Entity</th>
                                <th className="p-4 text-sm font-semibold text-muted-foreground">Recipient</th>
                                <th className="p-4 text-sm font-semibold text-muted-foreground">Entity Type</th>
                                <th className="p-4 text-sm font-semibold text-muted-foreground">Amount</th>
                                <th className="p-4 text-sm font-semibold text-muted-foreground">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {contributions.map((c, i) => (
                                <tr key={i} className="border-b border-border hover:bg-muted/20 transition-colors">
                                    <td className="p-4 font-medium text-foreground">{c.donor}</td>
                                    <td className="p-4 text-muted-foreground">{c.recipient}</td>
                                    <td className="p-4 text-muted-foreground">{c.type}</td>
                                    <td className="p-4 font-bold text-emerald-600">{c.amount}</td>
                                    <td className="p-4">
                                        <span className={`inline-flex px-2 py-1 rounded-full text-xs font-semibold ${c.status === 'Verified' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}>
                                            {c.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
