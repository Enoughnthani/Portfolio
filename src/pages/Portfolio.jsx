import { useEffect, useState } from 'react';
import {
  ArrowRight,
  ArrowUp,
  ArrowUpRight,
  Briefcase,
  CheckCircle2,
  Code2,
  Download,
  ExternalLink,
  FileText,
  Github,
  GraduationCap,
  Mail,
  MapPin,
  Menu,
  Phone,
  X,
} from 'lucide-react';

import profilePic from '../images/bg-image.png';
import btsdLmsImage from '../images/btsd-lms.png';
import btsdWebsiteImage from '../images/btsd-main-website.png';
import sapsImage from '../images/saps_img.jpg';
import glamImage from '../images/danisile_glam_img.png';
import eventImage from '../images/event-img.jpg';
import studentCardImage from '../images/student_card-web_img.png';

const profile = {
  name: 'Enough Tonny Nthani',
  title: 'Junior Full-Stack Developer',
  location: 'Tshwane, South Africa',
  email: 'enoughnthani@gmail.com',
  phone: '+27 63 748 9367',
  whatsapp: 'https://wa.me/27637489367',
  github: 'https://github.com/Enoughnthani',
  resume: 'https://enoughnthani.github.io/Portfolio/enough_nthani_resume.pdf',
};

const navigation = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

const featuredProjects = [
  {
    id: 'btsd-lms',
    title: 'B&T Skills Development LMS',
    eyebrow: 'Featured project · Full-stack application',
    description:
      'A learning management system for managing programmes, modules, lessons, assessments and learner progress. Built with separate workflows for learners, facilitators, assessors, moderators and administrators.',
    highlights: [
      'Role-based dashboards and JWT authentication',
      'Assessment submissions, grading and moderation',
      'Programme credits and learner completion tracking',
    ],
    technologies: ['React', 'Spring Boot', 'Java', 'MySQL', 'JWT'],
    image: btsdLmsImage,
    imageAlt: 'Screenshot of the B&T Skills Development LMS',
  },
  {
    id: 'btsd-website',
    title: 'B&T Skills Development Website',
    eyebrow: 'Featured project · Company website',
    description:
      'A website presenting B&T Skills Development Trainings, its training services and ways for prospective clients and learners to get in touch.',
    highlights: [
      'Clear training and service information',
      'Responsive pages for desktop and mobile',
      'Easy access to company and contact details',
    ],
    technologies: ['Frontend Development', 'Responsive Design', 'UI/UX'],
    image: btsdWebsiteImage,
    imageAlt: 'Screenshot of the B&T Skills Development main website',
  },
];

const otherProjects = [
  {
    title: 'SAPS Alert & Certify',
    description: 'A web application concept for document certification requests and crime reporting.',
    technologies: ['React', 'Node.js', 'Express', 'PostgreSQL'],
    image: sapsImage,
  },
  {
    title: "Danisile's Glam & Beauty",
    description: 'An e-commerce site with product and order management, built without payment processing.',
    technologies: ['React', 'Flask', 'Bootstrap'],
    image: glamImage,
  },
  {
    title: 'Event Management System',
    description: 'A system for organising meetings, activities and notes with a Java backend.',
    technologies: ['Java', 'React', 'MySQL'],
    image: eventImage,
  },
  {
    title: 'CardSwiftPro',
    description: 'A platform for creating student cards online to reduce manual queues.',
    technologies: ['Java', 'JavaScript', 'Bootstrap', 'MySQL'],
    image: studentCardImage,
  },
];

const skillGroups = [
  { title: 'Frontend', items: ['React', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS', 'Bootstrap'] },
  { title: 'Backend', items: ['Java', 'Spring Boot', 'Node.js', 'REST APIs', 'JWT', 'Python'] },
  { title: 'Data & Tools', items: ['MySQL', 'PostgreSQL', 'Git', 'GitHub', 'Linux', 'Postman'] },
  { title: 'Testing & IT', items: ['Manual QA Testing', 'Bug Reporting', 'API Testing', 'IT Support'] },
];

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mb-9 max-w-3xl">
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-teal-700">{eyebrow}</p>
      <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-base leading-7 text-slate-600">{description}</p>}
    </div>
  );
}

function ProjectLinks({ project }) {
  if (!project.liveUrl && !project.sourceUrl) return null;

  return (
    <div className="flex flex-wrap gap-4 pt-3">
      {project.liveUrl && (
        <a href={project.liveUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-sm font-bold text-teal-800 hover:underline">
          Live website <ArrowUpRight size={16} />
        </a>
      )}
      {project.sourceUrl && (
        <a href={project.sourceUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-sm font-bold text-slate-700 hover:underline">
          Source code <Github size={16} />
        </a>
      )}
    </div>
  );
}

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowBackToTop(window.scrollY > 400);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 antialiased">
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 sm:px-8">
          <a href="#home" onClick={() => setMenuOpen(false)} className="inline-flex items-center gap-3 no-underline">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-950 text-sm font-extrabold text-white">EN</span>
            <span className="font-extrabold tracking-tight text-slate-950">Enough Nthani<span className="text-teal-600">.</span></span>
          </a>

          <nav aria-label="Main navigation" className="hidden items-center gap-7 md:flex">
            {navigation.map(({ label, href }) => (
              <a key={href} href={href} className="text-sm font-semibold text-slate-600 no-underline transition hover:text-teal-700">{label}</a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub profile" className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 hover:text-slate-950"><Github size={21} /></a>
            <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 rounded-lg bg-slate-950 px-4 py-2.5 text-sm font-bold text-white no-underline transition hover:bg-teal-800">Get in touch <ArrowUpRight size={16} /></a>
          </div>
          <button type="button" onClick={() => setMenuOpen((open) => !open)} aria-expanded={menuOpen} aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} className="rounded-lg border border-slate-200 p-2 text-slate-800 md:hidden">
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
        {menuOpen && (
          <nav aria-label="Mobile navigation" className="border-t border-slate-200 bg-white px-5 py-3 md:hidden">
            {navigation.map(({ label, href }) => (
              <a key={href} href={href} onClick={() => setMenuOpen(false)} className="block rounded-lg px-3 py-3 text-sm font-semibold text-slate-700 no-underline hover:bg-slate-100">{label}</a>
            ))}
          </nav>
        )}
      </header>

      <main id="home">
        <section className="overflow-hidden bg-slate-950 text-white">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 md:grid-cols-[1.2fr_0.8fr] md:py-24">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-teal-300/30 bg-teal-400/10 px-4 py-2 text-xs font-bold text-teal-200">
                <span className="h-2 w-2 rounded-full bg-teal-300" /> Open to junior developer opportunities
              </div>
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-teal-300">Hello, I'm Enough</p>
              <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
                I build useful software from <span className="text-teal-300">frontend to backend.</span>
              </h1>
              <p className="mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                Computer Science graduate and junior full-stack developer working with React, Java, Spring Boot and databases. I enjoy creating practical applications and testing them carefully.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#projects" className="inline-flex items-center gap-2 rounded-xl bg-teal-400 px-5 py-3 text-sm font-extrabold text-slate-950 no-underline transition hover:bg-teal-300">Explore my work <ArrowRight size={18} /></a>
                <a href={profile.resume} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-slate-600 px-5 py-3 text-sm font-bold text-white no-underline transition hover:border-teal-300">View my CV <Download size={17} /></a>
              </div>
              <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-300">
                <span className="inline-flex items-center gap-2"><MapPin size={16} className="text-teal-300" /> {profile.location}</span>
                <span className="inline-flex items-center gap-2"><Code2 size={16} className="text-teal-300" /> {profile.title}</span>
              </div>
            </div>
            <div className="mx-auto w-full max-w-sm">
              <div className="relative rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-800 to-slate-900 p-4 shadow-2xl shadow-black/30">
                <div className="overflow-hidden rounded-[1.5rem] bg-slate-800">
                  <img src={profilePic} alt="Profile artwork" className="aspect-square h-full w-full object-contain" />
                </div>
                <div className="mt-4 flex items-center justify-between gap-3 rounded-xl bg-white/10 px-4 py-3">
                  <div>
                    <p className="text-sm font-bold text-white">Enough Tonny Nthani</p>
                    <p className="text-xs text-slate-300">React · Java · Spring Boot</p>
                  </div>
                  <CheckCircle2 size={22} className="text-teal-300" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="scroll-mt-28 border-b border-slate-200 bg-white py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
            <SectionHeading eyebrow="About me" title="Building, learning and solving real problems." />
            <div className="space-y-5 text-base leading-8 text-slate-600">
              <p>I hold a Diploma in Computer Science from Tshwane University of Technology. My focus is full-stack web development, especially applications that help people work and learn more effectively.</p>
              <p>My recent work includes a multi-role learning management system, a training company website and software quality assurance. I work with APIs, authentication, SQL databases and responsive interfaces.</p>
              <p>I also have experience troubleshooting IT systems and testing software workflows. I value readable code, clear user experiences and steady improvement.</p>
              <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 text-sm font-bold text-teal-800 no-underline hover:underline">Let's work together <ArrowUpRight size={17} /></a>
            </div>
          </div>
        </section>

        <section id="projects" className="scroll-mt-28 py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <SectionHeading eyebrow="Selected work" title="Projects I've worked on" description="These projects show how I combine frontend development, backend logic, databases and practical problem-solving." />
            <div className="grid gap-7 lg:grid-cols-2">
              {featuredProjects.map((project) => (
                <article key={project.id} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                  <div className="border-b border-slate-100 bg-slate-100 p-3">
                    <img src={project.image} alt={project.imageAlt} loading="lazy" className="h-60 w-full rounded-xl bg-white object-contain sm:h-72" />
                  </div>
                  <div className="p-6 sm:p-8">
                    <p className="mb-3 text-xs font-bold uppercase tracking-wider text-teal-700">{project.eyebrow}</p>
                    <h3 className="text-2xl font-extrabold tracking-tight text-slate-950">{project.title}</h3>
                    <p className="mt-3 leading-7 text-slate-600">{project.description}</p>
                    <ul className="mt-5 space-y-2">
                      {project.highlights.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-slate-700"><CheckCircle2 size={16} className="mt-0.5 shrink-0 text-teal-600" /> {item}</li>
                      ))}
                    </ul>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.technologies.map((tech) => <span key={tech} className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-700">{tech}</span>)}
                    </div>
                    <ProjectLinks project={project} />
                  </div>
                </article>
              ))}
            </div>
            <h3 className="mt-16 mb-6 text-2xl font-extrabold text-slate-950">More projects</h3>
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
              {otherProjects.map((project) => (
                <article key={project.title} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                  <img src={project.image} alt={`Screenshot of ${project.title}`} loading="lazy" className="h-44 w-full bg-slate-100 object-cover" />
                  <div className="p-5">
                    <h4 className="text-lg font-bold leading-6 text-slate-950">{project.title}</h4>
                    <p className="mt-3 text-sm leading-6 text-slate-600">{project.description}</p>
                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => <span key={tech} className="rounded-md bg-slate-100 px-2 py-1 text-[11px] font-semibold text-slate-600">{tech}</span>)}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="scroll-mt-28 bg-white py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <SectionHeading eyebrow="Experience & education" title="My background" description="Technical work, practical testing and formal study all contribute to how I approach software projects." />
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 p-7">
                <div className="mb-4 inline-flex rounded-xl bg-teal-50 p-3 text-teal-800"><Briefcase size={24} /></div>
                <p className="text-xs font-bold uppercase tracking-wide text-teal-700">July 2026 onward · Internship</p>
                <h3 className="mt-2 text-xl font-bold text-slate-950">Software Testing & QA</h3>
                <p className="mt-1 font-semibold text-slate-600">Success By Design</p>
                <p className="mt-4 text-sm leading-7 text-slate-600">Tested business software and CRM features, checked workflows and integrations, reported defects and verified fixes. Projects included CRM modules, accounting integration and franchise operations.</p>
              </div>
              <div className="rounded-2xl border border-slate-200 p-7">
                <div className="mb-4 inline-flex rounded-xl bg-teal-50 p-3 text-teal-800"><GraduationCap size={24} /></div>
                <p className="text-xs font-bold uppercase tracking-wide text-teal-700">Computer Science · Diploma</p>
                <h3 className="mt-2 text-xl font-bold text-slate-950">Tshwane University of Technology</h3>
                <p className="mt-1 font-semibold text-slate-600">Diploma in Computer Science</p>
                <p className="mt-4 text-sm leading-7 text-slate-600">Built a foundation in programming, databases, software development and problem-solving through academic and practical projects.</p>
              </div>
            </div>
            <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="flex items-center gap-2 font-bold text-slate-950"><FileText size={20} className="text-teal-700" /> Additional training</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">System Development Level 4 learnership (Dynamic DNA) · Data Science training (Netcampus) · Microsoft Azure data and AI fundamentals training</p>
            </div>
          </div>
        </section>

        <section id="skills" className="scroll-mt-28 py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <SectionHeading eyebrow="Technical skills" title="Tools and technologies" description="I use these technologies in development projects, technical training and software testing." />
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {skillGroups.map((group) => (
                <div key={group.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="mb-5 text-lg font-bold text-slate-950">{group.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => <span key={item} className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-700">{item}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-28 bg-slate-950 py-20 text-white">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-teal-300">Contact</p>
              <h2 className="max-w-lg text-3xl font-extrabold tracking-tight sm:text-4xl">Have a project or opportunity in mind?</h2>
              <p className="mt-5 max-w-lg leading-7 text-slate-300">I'm interested in junior software development, full-stack development and software testing opportunities. Send me a message and let's talk.</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href={`mailto:${profile.email}?subject=Portfolio%20enquiry`} className="inline-flex items-center gap-2 rounded-xl bg-teal-400 px-5 py-3 text-sm font-extrabold text-slate-950 no-underline hover:bg-teal-300"><Mail size={18} /> Email me</a>
                <a href={profile.whatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-slate-600 px-5 py-3 text-sm font-bold text-white no-underline hover:border-teal-300"><Phone size={17} /> WhatsApp</a>
              </div>
            </div>
            <div className="space-y-4 rounded-2xl border border-white/10 bg-white/5 p-7 sm:p-9">
              <div className="flex items-start gap-3"><Mail className="mt-1 text-teal-300" size={20} /><div><p className="text-xs uppercase tracking-wide text-slate-400">Email</p><a href={`mailto:${profile.email}`} className="mt-1 block break-all font-semibold text-white no-underline hover:text-teal-300">{profile.email}</a></div></div>
              <div className="border-t border-white/10" />
              <div className="flex items-start gap-3"><Phone className="mt-1 text-teal-300" size={20} /><div><p className="text-xs uppercase tracking-wide text-slate-400">Phone</p><a href="tel:+27637489367" className="mt-1 block font-semibold text-white no-underline hover:text-teal-300">{profile.phone}</a></div></div>
              <div className="border-t border-white/10" />
              <div className="flex items-start gap-3"><Github className="mt-1 text-teal-300" size={20} /><div><p className="text-xs uppercase tracking-wide text-slate-400">GitHub</p><a href={profile.github} target="_blank" rel="noreferrer" className="mt-1 inline-flex items-center gap-1 font-semibold text-white no-underline hover:text-teal-300">github.com/Enoughnthani <ExternalLink size={14} /></a></div></div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-800 bg-slate-950 py-7 text-slate-400">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-5 text-sm sm:px-8">
          <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
          <p>Built with React and Tailwind CSS.</p>
        </div>
      </footer>

      {showBackToTop && (
        <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Back to top" className="fixed bottom-6 right-6 z-40 rounded-full bg-teal-500 p-3 text-slate-950 shadow-xl transition hover:bg-teal-300">
          <ArrowUp size={21} />
        </button>
      )}
    </div>
  );
}