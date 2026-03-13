import Link from "next/link";
import { Menu, Search, Home, Users, BarChart2, MessageSquare, Calendar } from "lucide-react";

export function Navbar() {
    const navItems = [
        { label: "Home", href: "/", icon: Home },
        { label: "Candidates", href: "/candidates", icon: Users },
        { label: "Money in Politics", href: "/donors", icon: BarChart2 },
        { label: "Track Records", href: "/track-record", icon: BarChart2 },
        { label: "Discourse", href: "/discourse", icon: MessageSquare },
        { label: "Events", href: "/events", icon: Calendar },
    ];

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
            <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
                <Link href="/" className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-canadian-red text-white font-bold text-xl">
                        H
                    </div>
                    <span className="text-xl font-bold tracking-tight text-foreground">
                        Housing<span className="text-canadian-red">Tracker</span>
                    </span>
                </Link>
                <nav className="hidden md:flex items-center gap-6">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="text-sm font-medium text-foreground/80 transition-colors hover:text-canadian-red"
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>
                <div className="flex items-center gap-4">
                    <button className="hidden md:flex items-center justify-center h-9 w-9 rounded-full bg-muted/50 hover:bg-muted text-foreground transition-colors">
                        <Search className="h-4 w-4" />
                        <span className="sr-only">Search</span>
                    </button>
                    <Link
                        href="/join"
                        className="hidden md:inline-flex h-9 items-center justify-center rounded-md bg-canadian-red px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-canadian-red-dark"
                    >
                        Get Involved
                    </Link>
                    <button className="md:hidden flex items-center justify-center h-9 w-9 text-foreground">
                        <Menu className="h-6 w-6" />
                        <span className="sr-only">Toggle menu</span>
                    </button>
                </div>
            </div>
        </header>
    );
}
