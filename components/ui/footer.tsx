import Link from 'next/link';
import { Logo } from './logo';
import { CONTACT_EMAIL, LINKEDIN_URL, GITHUB_URL, OFFICE_AVAILABILITY, OFFICE_LOCATION } from '@/lib/constants';

export function Footer() {
  return (
    <footer className="w-full bg-canvas-dark text-canvas-white border-t border-hairline py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <Logo variant="light" />
          <p className="text-[20px] font-display font-medium text-ink-400">
            Software, built with care.
          </p>
        </div>

        {/* Grid columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-ink-600/20 pt-12">
          {/* Explore */}
          <div className="flex flex-col gap-4">
            <h3 className="font-mono text-[11px] font-bold tracking-[0.1em] text-ink-400 uppercase">
              Explore
            </h3>
            <nav className="flex flex-col gap-2">
              <Link href="/services" className="text-[14px] hover:text-accent transition-colors">Services</Link>
              <Link href="/work" className="text-[14px] hover:text-accent transition-colors">Work</Link>
              <Link href="/about" className="text-[14px] hover:text-accent transition-colors">About</Link>
              <Link href="/blog" className="text-[14px] hover:text-accent transition-colors">Blog</Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h3 className="font-mono text-[11px] font-bold tracking-[0.1em] text-ink-400 uppercase">
              Contact
            </h3>
            <div className="flex flex-col gap-2 text-[14px] text-ink-400">
              <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-accent transition-colors">{CONTACT_EMAIL}</a>
              <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">LinkedIn</a>
              <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">GitHub</a>
            </div>
          </div>

          {/* Availability */}
          <div className="flex flex-col gap-4">
            <h3 className="font-mono text-[11px] font-bold tracking-[0.1em] text-ink-400 uppercase">
              Availability
            </h3>
            <div className="flex flex-col gap-2 text-[14px] text-ink-400">
              <p className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-success inline-block animate-pulse" />
                <span>{OFFICE_AVAILABILITY}</span>
              </p>
              <p>{OFFICE_LOCATION} (UTC+5:30)</p>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 border-t border-ink-600/20 pt-8 text-[12px] text-ink-400">
          <p>© {new Date().getFullYear()} Vaidik Ghelani. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:underline">Privacy Policy</Link>
            <Link href="/terms" className="hover:underline">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
