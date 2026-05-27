import { useEffect } from 'react';
import { MapPin, Mail, Github } from 'lucide-react';
import { Timeline } from '@/components/Timeline';
import { profile, timeline, skills, socialLinks } from '@/data/profile';

const levelLabels: Record<string, string> = {
  beginner: '入门',
  intermediate: '熟练',
  advanced: '精通',
  expert: '专家',
};

const levelColors: Record<string, string> = {
  beginner: 'w-1/4 bg-accent-200',
  intermediate: 'w-1/2 bg-accent-300',
  advanced: 'w-3/4 bg-accent-400',
  expert: 'w-full bg-accent-500',
};

export function AboutPage() {
  useEffect(() => {
    document.title = `关于 - ${profile.name}`;
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container max-w-4xl mx-auto px-6">
        <section className="text-center mb-16 animate-fade-in">
          <img
            src={profile.avatar}
            alt={profile.name}
            className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-white shadow-lg"
          />

          <h1 className="font-display text-3xl md:text-4xl font-semibold text-ink-900 mb-2">
            {profile.name}
          </h1>

          <p className="text-lg text-ink-500 font-serif mb-4">
            {profile.nameEn}
          </p>

          <p className="text-ink-600 mb-6">{profile.title}</p>

          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-ink-500">
            <span className="flex items-center gap-1">
              <MapPin size={16} />
              {profile.location}
            </span>
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-accent-600 transition-colors"
              >
                {link.icon === 'github' && <Github size={16} />}
                {link.icon === 'mail' && <Mail size={16} />}
                {link.name}
              </a>
            ))}
          </div>
        </section>

        <div className="divider" />

        <section className="mb-16 animate-slide-up">
          <h2 className="font-display text-2xl font-semibold text-ink-800 mb-6">
            关于我
          </h2>
          <div className="card p-6">
            <p className="text-ink-700 leading-relaxed text-lg">
              {profile.bio}
            </p>
          </div>
        </section>

        <section className="mb-16 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <h2 className="font-display text-2xl font-semibold text-ink-800 mb-6">
            经历
          </h2>
          <Timeline items={timeline} />
        </section>

        <section className="mb-16 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <h2 className="font-display text-2xl font-semibold text-ink-800 mb-6">
            技能
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="card p-5"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-ink-800">{skill.name}</span>
                  <span className="text-sm text-ink-500">
                    {levelLabels[skill.level]}
                  </span>
                </div>
                <div className="h-1.5 bg-paper-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${levelColors[skill.level]} transition-all duration-500`}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <h2 className="font-display text-2xl font-semibold text-ink-800 mb-6">
            联系我
          </h2>
          <div className="card p-6 text-center">
            <p className="text-ink-600 mb-4">
              如果你有任何问题或想法，欢迎通过以下方式联系我
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={`mailto:${profile.email}`}
                className="btn-primary inline-flex items-center gap-2"
              >
                <Mail size={16} />
                发送邮件
              </a>
              <a
                href="https://github.com/zhang-loiu"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost inline-flex items-center gap-2"
              >
                <Github size={16} />
                GitHub
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
