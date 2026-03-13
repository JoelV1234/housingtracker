import { MessageSquare, ThumbsUp, MessageCircle, MoreHorizontal } from "lucide-react";

export default function DiscoursePage() {
    const discussions = [
        { author: "Jane Doe", location: "Downtown Ward", title: "Thoughts on the new high-rise proposal?", content: "The new 40-story building proposed on 4th Ave seems like a great addition for density, but what about the local infrastructure?", replies: 24, likes: 56, time: "2 hours ago" },
        { author: "Mark Smith", location: "West End", title: "Missing middle housing townhall recap", content: "Attended the townhall yesterday. The councilor actually seemed receptive to the idea of legalizing fourplexes city-wide.", replies: 89, likes: 134, time: "5 hours ago" },
        { author: "Elena R.", location: "North York", title: "Rent increases are out of control this year", content: "Is anyone else dealing with above-guideline rent increases? We need stronger protections for existing tenants.", replies: 112, likes: 245, time: "1 day ago" },
    ];

    return (
        <div className="container mx-auto px-4 py-12 max-w-4xl">
            <div className="mb-10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h1 className="text-4xl font-extrabold tracking-tight text-foreground mb-4">
                        Community <span className="text-canadian-red">Discourse</span>
                    </h1>
                    <p className="text-xl text-muted-foreground">
                        Follow and participate in discussions to see what your neighbors are saying about local developments.
                    </p>
                </div>
                <button className="bg-canadian-red hover:bg-canadian-red-dark text-white px-6 py-3 rounded-lg font-semibold transition-colors shadow-sm whitespace-nowrap">
                    Start Discussion
                </button>
            </div>

            <div className="space-y-6">
                {discussions.map((d, i) => (
                    <div key={i} className="bg-white p-6 rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-start mb-4">
                            <div className="flex items-center gap-3">
                                <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-canadian-red to-orange-400 flex items-center justify-center text-white font-bold text-sm">
                                    {d.author.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="font-bold text-foreground text-sm">{d.author}</h4>
                                    <p className="text-xs text-muted-foreground">{d.location} • {d.time}</p>
                                </div>
                            </div>
                            <button className="text-muted-foreground hover:text-foreground">
                                <MoreHorizontal className="h-5 w-5" />
                            </button>
                        </div>

                        <h3 className="text-xl font-bold text-foreground mb-2">{d.title}</h3>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                            {d.content}
                        </p>

                        <div className="flex items-center gap-6 border-t border-border pt-4">
                            <button className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-canadian-red transition-colors">
                                <ThumbsUp className="h-4 w-4" /> {d.likes}
                            </button>
                            <button className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-canadian-red transition-colors">
                                <MessageCircle className="h-4 w-4" /> {d.replies} Replies
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
