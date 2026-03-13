import { Calendar, MapPin, Clock, Users } from "lucide-react";

export default function EventsPage() {
    const events = [
        { date: "MAR 15", title: "City Council Zoning Hearing", time: "6:00 PM - 9:00 PM", location: "City Hall, Council Chambers", attendees: 142, type: "Official Hearing" },
        { date: "MAR 22", title: "Rally for Rent Control", time: "12:00 PM - 2:00 PM", location: "Downtown Square", attendees: 530, type: "Protest" },
        { date: "APR 05", title: "Missing Middle Townhall", time: "7:00 PM - 8:30 PM", location: "Community Center Library", attendees: 85, type: "Townhall" },
    ];

    return (
        <div className="container mx-auto px-4 py-12 max-w-5xl">
            <div className="mb-12 text-center">
                <h1 className="text-4xl font-extrabold tracking-tight text-foreground mb-4">
                    Activism & <span className="text-canadian-red">Events</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    Stay updated on campaigns, protests, town halls, and other events related to housing policy in your area.
                </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-3">
                <div className="lg:col-span-2 space-y-6">
                    <h2 className="text-2xl font-bold text-foreground mb-6">Upcoming Events</h2>
                    {events.map((e, i) => (
                        <div key={i} className="flex flex-col sm:flex-row bg-white rounded-2xl border border-border overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                            <div className="bg-canadian-red/5 sm:w-32 flex flex-col items-center justify-center p-6 border-b sm:border-b-0 sm:border-r border-border">
                                <span className="text-sm font-bold text-canadian-red">{e.date.split(" ")[0]}</span>
                                <span className="text-3xl font-extrabold text-foreground">{e.date.split(" ")[1]}</span>
                            </div>
                            <div className="p-6 flex-1">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="px-2 py-1 text-xs font-bold uppercase tracking-wider bg-muted text-muted-foreground rounded-md">
                                        {e.type}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold text-foreground mb-4">{e.title}</h3>
                                <div className="space-y-2 mb-6">
                                    <p className="flex items-center text-sm text-muted-foreground">
                                        <Clock className="h-4 w-4 mr-2" /> {e.time}
                                    </p>
                                    <p className="flex items-center text-sm text-muted-foreground">
                                        <MapPin className="h-4 w-4 mr-2" /> {e.location}
                                    </p>
                                </div>
                                <div className="flex items-center justify-between border-t border-border pt-4">
                                    <span className="flex items-center text-sm font-medium text-foreground">
                                        <Users className="h-4 w-4 mr-2 text-canadian-red" /> {e.attendees} attending
                                    </span>
                                    <button className="text-sm font-semibold text-canadian-red hover:text-canadian-red-dark transition-colors">
                                        RSVP Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="space-y-6">
                    <div className="bg-white p-6 rounded-2xl border border-border shadow-sm">
                        <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                            <Calendar className="h-5 w-5 text-canadian-red" /> Calendar View
                        </h3>
                        <div className="aspect-square bg-muted/30 rounded-xl border border-border flex items-center justify-center text-muted-foreground">
                            [ Interactive Calendar ]
                        </div>
                    </div>

                    <div className="bg-canadian-red text-white p-6 rounded-2xl shadow-sm">
                        <h3 className="font-bold text-lg mb-2">Host an Event?</h3>
                        <p className="text-white/80 text-sm mb-4">
                            Are you organizing a town hall, protest, or community meeting regarding housing? Let your neighbors know.
                        </p>
                        <button className="w-full bg-white text-canadian-red font-bold py-2 rounded-lg hover:bg-gray-50 transition-colors">
                            Submit Event
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
