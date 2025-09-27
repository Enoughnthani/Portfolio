import profile_pic from "../images/profile_pic.jpg"
import { Container, Row, Col, Card, Button, Modal, Form, Badge, Dropdown, DropdownButton } from "react-bootstrap";
import {
  Mail,
  Phone,
  Briefcase,
  GraduationCap,
  Github,
  Linkedin,
  FileText,
  Grid,
  List
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Portfolio() {
  const [showContact, setShowContact] = useState(false);
  const openContact = () => setShowContact(true);
  const closeContact = () => setShowContact(false);

  // Replace these with your real values
  const profile = {
    fullName: "Enough Tonny Nthani",
    title: "Computer Science Graduate | Junior Java Developer",
    location: "Tshwane, South Africa",
    university: "Tshwane University of Technology",
    highschool: "Ncakini Secondary School",
    highschool_completed_year: "2019",
    university_completed_year: "2024",
    age: 25,
    phone: "+27 63 748 9367",
    email: "enoughnthani@gmail.com",
    github: "https://github.com/Enoughnthani",
    linkedin: "https://linkedin.com/in/yourprofile",
    shortBio:
      "Computer Science diploma holder with solid Java knowledge, experience building web apps with React and backend services. Passionate about clean code, automation, and learning new technologies.",
    heroTags: ["React", "Java", "Node.js", "SQL", "Python"],
  };

  const projects = [
    {
      id: 1,
      title: "SAPS Alert & Certify (School project)",
      desc:
        "Web app for online document certifying and crime reporting. React frontend, Node/Express API, PostgreSQL.",
      tech: ["React", "Node", "Postgres"],
      link: "#",
    },
    {
      id: 2,
      title: "Danisile's Glam & Beauty Storefront",
      desc:
        "Small e-commerce site built with React Bootstrap and Flask backend to manage products and orders (no payments).",
      tech: ["React", "Flask", "Bootstrap"],
      link: "#",
    },
    {
      id: 3,
      title: "Event Management System (Group)",
      desc: "System for storing and managing meetings, notes and activities. Java backend, React frontend.",
      tech: ["Java", "React", "MySQL"],
      link: "#",
    },
    {
      id: 4,
      title: "CardSwiftPro (Online Student Card Creation System)",
      desc: "A web-based platform for creating student cards online, designed to eliminate long queues and streamline the process.",
      tech: ["Java", "HTML/CSS", "JavaScript", "Bootstrap", "MySQL"],
      link: "#",
    }

  ];

  const skillChips = [
    "Java", "React", "JavaScript", "HTML/CSS", "SQL", "Flask", "Python", "Git"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-slate-50 to-white">

      <header className="py-2 px-3 border-b z-50 bg-gradient-to-r from-slate-50 to-white fixed left-0 right-0">
        <nav className="flex justify-end">

          {["Home", "About", "Contact", "Blog"].map((value, key) => (
            <Link className="hidden sm:block border-2 font-bold hover:underline text-gray-600 rounded px-4 py-1  flex items-center justify-center mx-2 no-underline border-slate-200" key={key}>{value}</Link>
          ))}

          <Dropdown className="block sm:hidden">
            <DropdownButton variant="outline-secondary" title="Menu" >
              {["Home", "About", "Contact", "Blog"].map((value, key) => (
                <Link className="border-2 my-2  font-bold hover:underline text-gray-600 rounded px-4 py-1  flex items-center justify-center mx-2 no-underline border-slate-200" key={key}>{value}</Link>
              ))}
            </DropdownButton>
          </Dropdown>
        </nav>
      </header>

      <Container fluid className="py-8">

        {/* HERO */}
        <section className="bg-white shadow-md rounded-2xl p-6 mt-8 mb-8">
          <Row className="items-center gy-4">
            <Col md={4} className="text-center md:text-left">
              <div className="inline-block rounded-xl overflow-hidden shadow-lg ring-1 ring-slate-200">
                <img
                  src={profile_pic}
                  alt="profile"
                  className="w-48 h-48 object-cover"
                />
              </div>
            </Col>

            <Col md={8} className="flex flex-col justify-center">
              <h1 className="!text-[8vh] tracking-tight md:text-4xl font-extrabold">
                {profile.fullName}
              </h1>
              <p className="text-slate-600 mt-1 font-medium">{profile.title}</p>

              <div className="flex flex-wrap gap-3 mt-4">
                {profile.heroTags.map((t) => (
                  <span
                    key={t}
                    className="text-sm px-3 py-1 rounded-full border border-slate-200 text-slate-700"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex flex-wrap items-center gap-3">
                <Button className="!flex items-center !font-bold" variant="primary" onClick={openContact}>
                  <Mail size={16} className="me-2" /> Contact
                </Button>

                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium"
                >
                  <Github size={18} /> GitHub
                </a>

                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium"
                >
                  <Linkedin size={18} /> LinkedIn
                </a>

                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-sm font-medium"
                >
                  <FileText size={18} /> Resume
                </a>
              </div>

              <div className="mt-6 text-slate-700">
                <p className="max-w-2xl">{profile.shortBio}</p>
              </div>
            </Col>
          </Row>
        </section>

        <section className="bg-white shadow-sm rounded-2xl p-6 mb-8">
          <div>
            <div className="flex items-start gap-4 mb-6">
              <GraduationCap size={24} className="text-indigo-500 mt-1" />

              <div className="flex-1">
                <h5 className="mb-3 font-semibold text-slate-800">Education</h5>


                <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                  <small className="text-slate-600">{profile.highschool}</small>
                  <Badge bg="secondary" className="justify-self-end">
                    {profile.highschool_completed_year}
                  </Badge>

                  <small className="text-slate-600">{profile.university}</small>
                  <Badge bg="primary" className="justify-self-end">
                    {profile.university_completed_year}
                  </Badge>
                </div>
              </div>
            </div>


            <hr className="my-3" />

            <div className="mb-3">
              <h6 className="mb-2">Quick Info</h6>
              <ul className="text-sm text-slate-600 space-y-1">
                <li className="flex items-center gap-2"><Phone size={14} /> {profile.phone}</li>
                <li className="flex items-center gap-2"><Mail size={14} /> {profile.email}</li>
                <li className="flex items-center gap-2"><Briefcase size={14} /> {profile.title}</li>
              </ul>
            </div>

            <div>
              <h6 className="mb-2">Skills</h6>
              <div className="flex flex-wrap gap-2">
                {skillChips.map((s) => (
                  <span
                    key={s}
                    className="text-xs px-3 py-1 rounded-full bg-slate-100 border border-slate-200"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </section>


        <section className="bg-white rounded">
          <div className="mb-3 px-3">
            <h4 className="mb-4 font-bold tracking-tight text-gray-600 !text-[32px]">Projects</h4>

            <div className="flex">
              <Grid />
              <List />
            </div>
          </div>

          <Row className="g-3 py-4 px-3 align-items-stretch">
            {projects.map((p) => (
              <Col md={6} key={p.id}>
                <Card className="h-100 cursor-pointer !border-slate-100 shadow-md flex flex-column">
                  <Card.Header className="bg-white">
                    <h5 className="tracking-tight font-bold">{p.title}</h5>
                  </Card.Header>

                  <Card.Body className="flex flex-col space-y-6 flex-grow">
                    <p className="text-slate-600 mt-3 flex-grow">{p.desc}</p>
                    <div className="flex space-x-2 flex-wrap">
                      {p.tech.map((v, key) => (
                        <Badge bg="secondary" key={key}>{v}</Badge>
                      ))}
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

        </section>


        {/* FOOTER */}
        <footer className="mt-10 text-center text-slate-500">
          <div className="flex items-center justify-center gap-4">
            <a href={`tel:${profile.phone}`} className="inline-flex items-center gap-2">
              <Phone size={16} /> {profile.phone}
            </a>
            <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2">
              <Mail size={16} /> {profile.email}
            </a>
          </div>
          <div className="mt-3 text-sm">© {new Date().getFullYear()} {profile.fullName} — Built with React, Tailwind & React-Bootstrap</div>
        </footer>
      </Container>

      {/* CONTACT MODAL */}
      <Modal show={showContact} onHide={closeContact} centered>
        <Modal.Header closeButton>
          <Modal.Title>Contact {profile.fullName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Your name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="you@domain.com" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Short message" />
            </Form.Group>

            <div className="text-end">
              <Button variant="secondary" className="me-2" onClick={closeContact}>Cancel</Button>
              <Button variant="primary" onClick={closeContact}>Send</Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}
