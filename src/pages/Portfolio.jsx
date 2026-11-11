import { useEffect, useState } from "react";
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
  Building2,
  FileAudio,
  Files,
  HandCoins,
  LayoutTemplate,
  X,
} from "lucide-react";

import profilePic from "../images/bg-image.png";
import btsdLmsImage from "../images/btsd-lms.png";
import btsdWebsiteImage from "../images/btsd-main-website.png";
import glamImage from "../images/dees.png";
import gconnectImage from "../images/gconnect.png";
import pdfMergeImage from "../images/pdf-merge.png";
import audiTranscriberImage from "../images/audio_transcriber.png";
import financialTrackerImage from "../images/financial-tracker.png";

const profile = {
  name: "Enough Tonny Nthani",
  title: "Junior Full-Stack Developer",
  location: "Tshwane, South Africa",
  email: "enoughnthani@gmail.com",
  phone: "+27 63 748 9367",
  whatsapp: "https://wa.me/27637489367",
  github: "https://github.com/Enoughnthani",
  resume: "https://enoughnthani.github.io/Portfolio/enough_nthani_resume.pdf",
};

const navigation = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const featuredProjects = [
  {
    id: "btsd-lms",
    title: "B&T Skills Development LMS",
    eyebrow: "Featured project · Full-stack application",
    description:
      "A learning management system for managing programmes, modules, lessons, assessments and learner progress. Built with separate workflows for learners, facilitators, assessors, moderators and administrators.",
    highlights: [
      "Role-based dashboards and JWT authentication",
      "Assessment submissions, grading and moderation",
      "Programme credits and learner completion tracking",
    ],
    technologies: ["React", "Spring Boot", "Java", "MySQL", "JWT"],
    image: btsdLmsImage,
    imageAlt: "Screenshot of the B&T Skills Development LMS",
  },
  {
    id: "btsd-website",
    title: "B&T Skills Development Website",
    eyebrow: "Featured project · Company website",
    description:
      "A website presenting B&T Skills Development Trainings, its training services and ways for prospective clients and learners to get in touch.",
    highlights: [
      "Clear training and service information",
      "Responsive pages for desktop and mobile",
      "Easy access to company and contact details",
    ],
    technologies: ["Frontend Development", "Responsive Design", "UI/UX"],
    image: btsdWebsiteImage,
    imageAlt: "Screenshot of the B&T Skills Development main website",
  },
];

const otherProjects = [
  {
    title: "G Connect Consultants",
    description:
      "A company web application for presenting IT and digital services, supported by a Java backend.",
    technologies: ["React", "Java", "Spring Boot"],
    image: gconnectImage,
    links: [
      {
        label: "Backend code",
        url: "https://github.com/Enoughnthani/G-Connect-Consultants-Backend-V2",
      },
    ],
  },
  {
    title: "Danisile's Glam & Beauty",
    description:
      "A beauty business website with an online product catalogue and an e-commerce-focused design.",
    technologies: ["HTML", "CSS", "Web Design"],
    image: glamImage,
    links: [
      {
        label: "Source code",
        url: "https://github.com/Enoughnthani/dees_glam_and_beauty",
      },
    ],
  },
  {
    title: "Financial Tracker",
    description:
      "A personal finance project with web and Java repositories, focused on keeping financial information organised.",
    technologies: ["Java", "CSS"],
    image: financialTrackerImage,
    links: [
      {
        label: "Web repository",
        url: "https://github.com/Enoughnthani/financial_tracker",
      },
      {
        label: "Java repository",
        url: "https://github.com/Enoughnthani/financial_tracker",
      },
    ],
  },
  {
    title: "PDF Merge",
    description: "A JavaScript utility project for combining PDF documents.",
    technologies: ["JavaScript", "PDF Tools"],
    image: pdfMergeImage,
  },
  {
    title: "Audio-to-Text",
    description: "A Python project for turning audio recordings into text.",
    technologies: ["Python", "Audio Processing"],
    image: audiTranscriberImage,
  },
];

const skillGroups = [
  {
    title: "Frontend",
    items: ["React", "JavaScript", "HTML", "CSS", "Tailwind CSS", "Bootstrap"],
  },
  {
    title: "Backend",
    items: ["Java", "Spring Boot", "Node.js", "REST APIs", "JWT", "Python"],
  },
  {
    title: "Data & Tools",
    items: ["MySQL", "PostgreSQL", "Git", "GitHub", "Linux", "Postman"],
  },
  {
    title: "Testing & IT",
    items: ["Manual QA Testing", "Bug Reporting", "API Testing", "IT Support"],
  },
];

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mb-9 max-w-3xl">
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-extrabold tracking-tight text-stone-950 sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-7 text-stone-600">{description}</p>
      )}
    </div>
  );
}

function ProjectLinks({ project }) {
  if (!project.liveUrl && !project.sourceUrl && !project.links?.length)
    return null;

  return (
    <div className="flex flex-wrap gap-x-4 gap-y-2 pt-3">
      {project.liveUrl && (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-bold text-emerald-700 hover:underline"
        >
          Live website <ArrowUpRight size={16} />
        </a>
      )}
      {project.sourceUrl && (
        <a
          href={project.sourceUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-bold text-stone-700 hover:underline"
        >
          Source code <Github size={16} />
        </a>
      )}
      {project.links?.map((link) => (
        <a
          key={link.url}
          href={link.url}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-bold text-emerald-700 hover:underline"
        >
          {link.label} <Github size={16} />
        </a>
      ))}
    </div>
  );
}

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowBackToTop(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#f5f5f4] text-stone-900 antialiased">
      <header className="sticky top-0 z-50 border-b border-stone-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 sm:px-8">
          <a
            href="#home"
            onClick={() => setMenuOpen(false)}
            className="inline-flex items-center gap-3 no-underline"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-stone-950 text-sm font-extrabold text-white">
              EN
            </span>
            <span className="font-extrabold tracking-tight text-stone-950">
              Enough Nthani<span className="text-emerald-600">.</span>
            </span>
          </a>

          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-7 md:flex"
          >
            {navigation.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className="text-sm font-semibold text-stone-600 no-underline transition hover:text-emerald-700"
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
              className="rounded-lg p-2 text-stone-600 hover:bg-stone-100 hover:text-stone-950"
            >
              <Github size={21} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-lg bg-stone-950 px-4 py-2.5 text-sm font-bold text-white no-underline transition hover:bg-emerald-800"
            >
              Get in touch <ArrowUpRight size={16} />
            </a>
          </div>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            className="rounded-lg border border-stone-200 p-2 text-stone-800 md:hidden"
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
        {menuOpen && (
          <nav
            aria-label="Mobile navigation"
            className="border-t border-stone-200 bg-white px-5 py-3 md:hidden"
          >
            {navigation.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="block rounded-lg px-3 py-3 text-sm font-semibold text-stone-700 no-underline hover:bg-stone-100"
              >
                {label}
              </a>
            ))}
          </nav>
        )}
      </header>

      <main id="home">
        <section className="overflow-hidden bg-[#1c1917] text-white">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 md:grid-cols-[1.2fr_0.8fr] md:py-24">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-300/30 bg-emerald-400/10 px-4 py-2 text-xs font-bold text-emerald-200">
                <span className="h-2 w-2 rounded-full bg-emerald-300" /> Open to
                junior developer opportunities
              </div>
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-emerald-300">
                Hello, I'm Enough
              </p>
              <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
                I build useful software from{" "}
                <span className="text-emerald-300">frontend to backend.</span>
              </h1>
              <p className="mt-7 max-w-2xl text-base leading-8 text-stone-300 sm:text-lg">
                Computer Science graduate and junior full-stack developer
                working with React, Java, Spring Boot and databases. I enjoy
                creating practical applications and testing them carefully.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-xl bg-emerald-400 px-5 py-3 text-sm font-extrabold text-stone-950 no-underline transition hover:bg-emerald-300"
                >
                  Explore my work <ArrowRight size={18} />
                </a>
                <a
                  href={profile.resume}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-stone-600 px-5 py-3 text-sm font-bold text-white no-underline transition hover:border-emerald-300"
                >
                  View my CV <Download size={17} />
                </a>
              </div>
              <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-stone-300">
                <span className="inline-flex items-center gap-2">
                  <MapPin size={16} className="text-emerald-300" />{" "}
                  {profile.location}
                </span>
                <span className="inline-flex items-center gap-2">
                  <Code2 size={16} className="text-emerald-300" />{" "}
                  {profile.title}
                </span>
              </div>
            </div>
            <div className="mx-auto w-full max-w-sm">
              <div className="relative rounded-[2rem] border border-white/10 bg-gradient-to-br from-stone-800 to-stone-900 p-4 shadow-2xl shadow-black/30">
                <div className="overflow-hidden rounded-[1.5rem] bg-stone-800">
                  <img
                    src={profilePic}
                    alt="Profile artwork"
                    className="aspect-square h-full w-full object-contain"
                  />
                </div>
                <div className="mt-4 flex items-center justify-between gap-3 rounded-xl bg-white/10 px-4 py-3">
                  <div>
                    <p className="text-sm font-bold text-white">
                      Enough Tonny Nthani
                    </p>
                    <p className="text-xs text-stone-300">
                      React · Java · Spring Boot
                    </p>
                  </div>
                  <CheckCircle2 size={22} className="text-emerald-300" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="about"
          className="scroll-mt-28 border-b border-stone-200 bg-white py-20"
        >
          <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
            <SectionHeading
              eyebrow="About me"
              title="Building, learning and solving real problems."
            />
            <div className="space-y-5 text-base leading-8 text-stone-600">
              <p>
                I hold a Diploma in Computer Science from Tshwane University of
                Technology. My focus is full-stack web development, especially
                applications that help people work and learn more effectively.
              </p>
              <p>
                My recent work includes a multi-role learning management system,
                a training company website and software quality assurance. I
                work with APIs, authentication, SQL databases and responsive
                interfaces.
              </p>
              <p>
                I also have experience troubleshooting IT systems and testing
                software workflows. I value readable code, clear user
                experiences and steady improvement.
              </p>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 text-sm font-bold text-emerald-700 no-underline hover:underline"
              >
                Let's work together <ArrowUpRight size={17} />
              </a>
            </div>
          </div>
        </section>

        <section id="projects" className="scroll-mt-28 py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <SectionHeading
              eyebrow="Selected work"
              title="Projects I've worked on"
              description="These projects show how I combine frontend development, backend logic, databases and practical problem-solving."
            />
            <div className="grid gap-7 lg:grid-cols-2">
              {featuredProjects.map((project) => (
                <article
                  key={project.id}
                  className="overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="border-b border-stone-100 bg-stone-100 p-3">
                    <img
                      src={project.image}
                      alt={project.imageAlt}
                      loading="lazy"
                      className="h-60 w-full rounded-xl bg-white object-contain sm:h-72"
                    />
                  </div>
                  <div className="p-6 sm:p-8">
                    <p className="mb-3 text-xs font-bold uppercase tracking-wider text-emerald-700">
                      {project.eyebrow}
                    </p>
                    <h3 className="text-2xl font-extrabold tracking-tight text-stone-950">
                      {project.title}
                    </h3>
                    <p className="mt-3 leading-7 text-stone-600">
                      {project.description}
                    </p>
                    <ul className="mt-5 space-y-2">
                      {project.highlights.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-sm text-stone-700"
                        >
                          <CheckCircle2
                            size={16}
                            className="mt-0.5 shrink-0 text-emerald-600"
                          />{" "}
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full bg-stone-100 px-3 py-1.5 text-xs font-semibold text-stone-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <ProjectLinks project={project} />
                  </div>
                </article>
              ))}
            </div>
            <div className="mt-16 mb-6 flex flex-wrap items-end justify-between gap-4">
              <h3 className="text-2xl font-extrabold text-stone-950">
                More projects
              </h3>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold text-emerald-700 no-underline hover:underline"
              >
                Explore my GitHub <Github size={17} />
              </a>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {otherProjects.map((project) => {
                const ProjectIcon = project.icon;
                return (
                  <article
                    key={project.title}
                    className="flex h-full flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                  >
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={`Screenshot of ${project.title}`}
                        loading="lazy"
                        className="h-44 w-full bg-stone-100 object-cover"
                      />
                    ) : (
                      <div
                        className="flex h-44 items-center justify-center bg-gradient-to-br from-stone-900 via-stone-800 to-emerald-950"
                        aria-hidden="true"
                      >
                        <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-white/20 bg-white/10 shadow-xl">
                          <ProjectIcon
                            size={39}
                            className="text-emerald-300"
                            strokeWidth={1.6}
                          />
                        </div>
                      </div>
                    )}
                    <div className="flex flex-1 flex-col p-5">
                      <h4 className="text-lg font-bold leading-6 text-stone-950">
                        {project.title}
                      </h4>
                      <p className="mt-3 flex-1 text-sm leading-6 text-stone-600">
                        {project.description}
                      </p>
                      <div className="mt-5 flex flex-wrap gap-1.5">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-md bg-stone-100 px-2 py-1 text-[11px] font-semibold text-stone-600"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <ProjectLinks project={project} />
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="experience" className="scroll-mt-28 bg-white py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <SectionHeading
              eyebrow="Experience & education"
              title="My background"
              description="Technical work, practical testing and formal study all contribute to how I approach software projects."
            />
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-2xl border border-stone-200 p-7">
                <div className="mb-4 inline-flex rounded-xl bg-emerald-50 p-3 text-emerald-700">
                  <Briefcase size={24} />
                </div>
                <p className="text-xs font-bold uppercase tracking-wide text-emerald-700">
                  July 2026 onward · Internship
                </p>
                <h3 className="mt-2 text-xl font-bold text-stone-950">
                  Software Testing & QA
                </h3>
                <p className="mt-1 font-semibold text-stone-600">
                  Success By Design
                </p>
                <p className="mt-4 text-sm leading-7 text-stone-600">
                  Tested business software and CRM features, checked workflows
                  and integrations, reported defects and verified fixes.
                  Projects included CRM modules, accounting integration and
                  franchise operations.
                </p>
              </div>
              <div className="rounded-2xl border border-stone-200 p-7">
                <div className="mb-4 inline-flex rounded-xl bg-emerald-50 p-3 text-emerald-700">
                  <GraduationCap size={24} />
                </div>
                <p className="text-xs font-bold uppercase tracking-wide text-emerald-700">
                  Computer Science · Diploma
                </p>
                <h3 className="mt-2 text-xl font-bold text-stone-950">
                  Tshwane University of Technology
                </h3>
                <p className="mt-1 font-semibold text-stone-600">
                  Diploma in Computer Science
                </p>
                <p className="mt-4 text-sm leading-7 text-stone-600">
                  Built a foundation in programming, databases, software
                  development and problem-solving through academic and practical
                  projects.
                </p>
              </div>
            </div>
            <div className="mt-6 rounded-2xl border border-stone-200 bg-stone-50 p-6">
              <h3 className="flex items-center gap-2 font-bold text-stone-950">
                <FileText size={20} className="text-emerald-700" /> Additional
                training
              </h3>
              <p className="mt-3 text-sm leading-7 text-stone-600">
                System Development Level 4 learnership (Dynamic DNA) · Data
                Science training (Netcampus) · Microsoft Azure data and AI
                fundamentals training
              </p>
            </div>
          </div>
        </section>

        <section id="skills" className="scroll-mt-28 py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <SectionHeading
              eyebrow="Technical skills"
              title="Tools and technologies"
              description="I use these technologies in development projects, technical training and software testing."
            />
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {skillGroups.map((group) => (
                <div
                  key={group.title}
                  className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm"
                >
                  <h3 className="mb-5 text-lg font-bold text-stone-950">
                    {group.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-lg border border-stone-200 bg-stone-50 px-3 py-2 text-xs font-semibold text-stone-700"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="scroll-mt-28 bg-[#1c1917] py-20 text-white"
        >
          <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-emerald-300">
                Contact
              </p>
              <h2 className="max-w-lg text-3xl font-extrabold tracking-tight sm:text-4xl">
                Have a project or opportunity in mind?
              </h2>
              <p className="mt-5 max-w-lg leading-7 text-stone-300">
                I'm interested in junior software development, full-stack
                development and software testing opportunities. Send me a
                message and let's talk.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={`mailto:${profile.email}?subject=Portfolio%20enquiry`}
                  className="inline-flex items-center gap-2 rounded-xl bg-emerald-400 px-5 py-3 text-sm font-extrabold text-stone-950 no-underline hover:bg-emerald-300"
                >
                  <Mail size={18} /> Email me
                </a>
                <a
                  href={profile.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-stone-600 px-5 py-3 text-sm font-bold text-white no-underline hover:border-emerald-300"
                >
                  <Phone size={17} /> WhatsApp
                </a>
              </div>
            </div>
            <div className="space-y-4 rounded-2xl border border-white/10 bg-white/5 p-7 sm:p-9">
              <div className="flex items-start gap-3">
                <Mail className="mt-1 text-emerald-300" size={20} />
                <div>
                  <p className="text-xs uppercase tracking-wide text-stone-400">
                    Email
                  </p>
                  <a
                    href={`mailto:${profile.email}`}
                    className="mt-1 block break-all font-semibold text-white no-underline hover:text-emerald-300"
                  >
                    {profile.email}
                  </a>
                </div>
              </div>
              <div className="border-t border-white/10" />
              <div className="flex items-start gap-3">
                <Phone className="mt-1 text-emerald-300" size={20} />
                <div>
                  <p className="text-xs uppercase tracking-wide text-stone-400">
                    Phone
                  </p>
                  <a
                    href="tel:+27637489367"
                    className="mt-1 block font-semibold text-white no-underline hover:text-emerald-300"
                  >
                    {profile.phone}
                  </a>
                </div>
              </div>
              <div className="border-t border-white/10" />
              <div className="flex items-start gap-3">
                <Github className="mt-1 text-emerald-300" size={20} />
                <div>
                  <p className="text-xs uppercase tracking-wide text-stone-400">
                    GitHub
                  </p>
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 inline-flex items-center gap-1 font-semibold text-white no-underline hover:text-emerald-300"
                  >
                    github.com/Enoughnthani <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-stone-800 bg-[#1c1917] py-7 text-stone-400">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-5 text-sm sm:px-8">
          <p>
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
          <p>Built with React and Tailwind CSS.</p>
        </div>
      </footer>

      {showBackToTop && (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-40 rounded-full bg-emerald-500 p-3 text-stone-950 shadow-xl transition hover:bg-emerald-400"
        >
          <ArrowUp size={21} />
        </button>
      )}
    </div>
  );
}
