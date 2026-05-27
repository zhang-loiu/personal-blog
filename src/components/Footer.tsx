import { Github, Mail } from 'lucide-react';
import { socialLinks, profile } from '@/data/profile';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'github':
        return <Github size={18} />;
      case 'mail':
        return <Mail size={18} />;
      default:
        return null;
    }
  };

  return (
    <footer className="border-t border-paper-200 bg-paper-50">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="font-display text-lg font-semibold text-ink-800 mb-1">
              {profile.name}
            </p>
            <p className="text-sm text-ink-500">{profile.title}</p>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-ink-500 hover:text-accent-600 transition-colors duration-200"
                aria-label={link.name}
              >
                {getIcon(link.icon)}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-paper-200">
          <p className="text-center text-sm text-ink-400">
            © {currentYear} {profile.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
