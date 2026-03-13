import Link from "next/link";
import { Home } from "lucide-react";

export function Footer() {
    return (
        <footer className="w-full border-t bg-white py-12 md:py-16">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="md:col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-4">
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-canadian-red text-white font-bold text-xl">
                                H
                            </div>
                            <span className="text-xl font-bold tracking-tight text-foreground">
                                Housing<span className="text-canadian-red">Tracker</span>
                            </span>
                        </Link>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            A Canadian community-driven platform designed to bring transparency and accountability to local housing decisions in municipalities across Canada.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold tracking-wider text-foreground uppercase mb-4">Features</h3>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li><Link href="/candidates" className="hover:text-canadian-red transition-colors">Candidate Profiles</Link></li>
                            <li><Link href="/donors" className="hover:text-canadian-red transition-colors">Money in Politics</Link></li>
                            <li><Link href="/track-record" className="hover:text-canadian-red transition-colors">Track Records</Link></li>
                            <li><Link href="/discourse" className="hover:text-canadian-red transition-colors">Community Discourse</Link></li>
                            <li><Link href="/events" className="hover:text-canadian-red transition-colors">Activism & Events</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold tracking-wider text-foreground uppercase mb-4">Organization</h3>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li><Link href="/about" className="hover:text-canadian-red transition-colors">About Us</Link></li>
                            <li><Link href="/methodology" className="hover:text-canadian-red transition-colors">Our Methodology</Link></li>
                            <li><Link href="/contact" className="hover:text-canadian-red transition-colors">Contact</Link></li>
                            <li><Link href="/press" className="hover:text-canadian-red transition-colors">Press</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold tracking-wider text-foreground uppercase mb-4">Legal</h3>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                            <li><Link href="/privacy" className="hover:text-canadian-red transition-colors">Privacy Policy</Link></li>
                            <li><Link href="/terms" className="hover:text-canadian-red transition-colors">Terms of Service</Link></li>
                            <li><Link href="/guidelines" className="hover:text-canadian-red transition-colors">Community Guidelines</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
                    <p>© {new Date().getFullYear()} Housing Tracker Canada. All rights reserved.</p>
                    <div className="flex gap-4">
                        <span>Made with ❤️ for Canadian Communities</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
