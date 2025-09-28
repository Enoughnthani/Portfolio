import profile_pic from "../images/bg-image.png"
import saps_img from "../images/saps_img.jpg"
import danisile_glam_img from "../images/danisile_glam_img.png"
import event_web_img from "../images/event-img.jpg"
import student_card_web_img from "../images/student_card-web_img.png"

import { Container, Row, Col, Card, Button, Modal, Form, Badge, Dropdown, DropdownButton, InputGroup } from "react-bootstrap";
import {
  Mail,
  Phone,
  Briefcase,
  GraduationCap,
  Github,
  Linkedin,
  FileText,
  Grid,
  List,
  PhoneCall,
  ChevronRight,
  ArrowBigRight,
  ArrowRight,
  ArrowUp
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Portfolio() {
  const [showContact, setShowContact] = useState(false);
  const openContact = () => setShowContact(true);
  const closeContact = () => setShowContact(false);
  const [validated, setValidated] = useState(false)
  const [showScrollUpButton,setShowScrollUpButton] = useState(false) 

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
      image: saps_img
    },
    {
      id: 2,
      title: "Danisile's Glam & Beauty Storefront",
      desc:
        "Small e-commerce site built with React Bootstrap and Flask backend to manage products and orders (no payments).",
      tech: ["React", "Flask", "Bootstrap"],
      link: "#",
      image: danisile_glam_img
    },
    {
      id: 3,
      title: "Event Management System (Group)",
      desc: "System for storing and managing meetings, notes and activities. Java backend, React frontend.",
      tech: ["Java", "React", "MySQL"],
      link: "#",
      image: event_web_img
    },
    {
      id: 4,
      title: "CardSwiftPro (Online Student Card Creation System)",
      desc: "A web-based platform for creating student cards online, designed to eliminate long queues and streamline the process.",
      tech: ["Java", "HTML/CSS", "JavaScript", "Bootstrap", "MySQL"],
      link: "#",
      image: student_card_web_img
    }

  ];

  const skillChips = [
    "Java", "React", "JavaScript", "HTML/CSS", "SQL", "Flask", "Python", "Git"
  ];

  const handleSubmit = (e) => {

    e.preventDefault()

    const target = e.currentTarget
    if (target.checkValidity) {
      setValidated(true)
      e.stopPropagation()
    }

  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-slate-50 to-white">

      <header className="flex items-center py-2 px-3 border-b z-50 bg-gradient-to-r from-slate-50 to-white fixed left-0 right-0">

        <div onClick={()=>location.href='/Portfolio'} className="flex items-center cursor-pointer">
          <div className="flex items-center justify-center text-white font-bold bg-green-600 rounded-3xl w-[40px] h-[40px]">
            ET
          </div>

          <div>
            <h4 className="m-0 ps-2 font-extrabold uppercase tracking-tight text-slate-900">Nthani</h4>
          </div>
        </div>

        <nav className="flex ms-auto items-center justify-end">
          {["Home", "About", "Projects", "Blog"].map((value, key) => (
            <Link className="hidden sm:block border-2 font-bold hover:underline text-gray-600 rounded px-4 py-1  flex items-center justify-center mx-2 no-underline border-slate-200" key={key}>{value}</Link>
          ))}

          <Dropdown className="block sm:hidden">
            <DropdownButton variant="outline-secondary" title="Menu" >
              {["Home", "About", "Projects", "Blog"].map((value, key) => (
                <Link className="border-2 my-2  font-bold hover:underline text-gray-600 rounded px-4 py-1  flex items-center justify-center mx-2 no-underline border-slate-200" key={key}>{value}</Link>
              ))}
            </DropdownButton>
          </Dropdown>
        </nav>
      </header>

      <Container fluid className="py-8">

        {/* HERO */}
        <section className="from-slate-50 to-white rounded p-6 mt-8 mb-8 bg-gradient-to-r">
          <Row className="animate-popup items-center gy-4">
            <Col md={6} className="text-center md:text-left">
              <div className=" flex items-center justify-center">
                <img
                  src={profile_pic}
                  alt="profile"
                  className="object-contain shadow-md bg-gradient-to-r from-slate-100 to-white rounded"
                />
              </div>
            </Col>

            <Col md={6} className="flex flex-col justify-center">
              <div className="flex flex-column items-center md:items-start">
                <h1 className="!text-[8vh] tracking-tight md:text-4xl font-extrabold">
                  {profile.fullName}
                </h1>

                <div>
                  <p className="text-slate-600 mt-1 font-medium">{profile.title}</p>
                </div>
              </div>

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

        <section className="bg-gradient-to-r from-slate-50 to-white rounded-2xl p-6 mb-8">
          <div>
            <div className="flex items-start gap-4 mb-6">

              <div className="flex-1">
                <div className="flex gap-x-2">
                  <GraduationCap size={24} className="text-indigo-500 mt-1" />
                  <h5 className="mb-3 text-3xl font-extrabold text-slate-800">Education</h5>
                </div>

                <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                  <small className="text-slate-600 font-bold">{profile.highschool}</small>
                  <Badge bg="secondary" className="justify-self-end">
                    {profile.highschool_completed_year}
                  </Badge>

                  <small className="text-slate-600 font-bold">{profile.university}</small>
                  <Badge bg="primary" className="justify-self-end">
                    {profile.university_completed_year}
                  </Badge>
                </div>
              </div>
            </div>


            <hr className="my-3" />

            <div className="mb-3 space-y-6">
              <h6 className="mb-2 text-xl font-extrabold">Quick Info</h6>
              <ul className="text-sm text-slate-600 space-y-1">
                <li className="flex items-center gap-2 font-bold"><Phone size={14} /> {profile.phone}</li>
                <li className="flex items-center gap-2 font-bold"><Mail size={14} /> {profile.email}</li>
                <li className="flex items-center gap-2 font-bold"><Briefcase size={14} /> {profile.title}</li>
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


        <section className="bg-gradient-to-l from-slate-50 to-white space-y-6 py-6">
          <div className="mb-3 px-3">

            <div className="max-w-2xl mx-auto text-center px-4 py-8">
              <h4 className="text-5xl font-bold tracking-tight text-gray-700 mb-4">
                Projects
              </h4>
              <p className="text-gray-600 leading-relaxed">
                Here are some of my recent projects, highlighting my skills in design and development. Each one reflects my focus on clean, functional, and user-friendly solutions.
              </p>
            </div>
          </div>

          <Row className="g-3 py-4 space-y-6 px-3 align-items-stretch">
            {projects.map((p) => (
              <Col sm={6} md={3} key={p.id}>
                <Card className="h-100 mx-auto w-[18rem] cursor-pointer !border-slate-100 shadow-md flex flex-column">

                  <Card.Img className="h-50" src={p.image} />
                  <Card.Body className="flex flex-col space-y-6 flex-grow">
                    <h6>{p.title}</h6>
                    <p className="text-slate-600 mt-3 flex-grow">{p.desc}</p>
                  </Card.Body>

                  <Card.Footer>
                    <div className="flex flex-wrap">
                      {p.tech.map((v, key) => (
                        <Badge bg="secondary" className="p-2 m-2" key={key}>{v}</Badge>
                      ))}
                    </div>
                  </Card.Footer>
                </Card>
              </Col>
            ))}
          </Row>

          <div>
            <Button className="!flex bg-white mx-auto text-black !font-bold !border-gray-600">
              More Projects
              <ArrowRight className="ms-2" />
            </Button>
          </div>
        </section>

        <section className="border rounded my-4 ">
          <Row className="h-100">
            {/* Left Column */}
            <Col md={5} className="flex items-center justify-center ps-4">
              <div className="bg-purple-900 flex flex-col justify-center items-center rounded text-white h-[90%] px-6 py-4">
                <div className="w-full space-y-5">
                  <h4 className="font-bold text-xl">Contact Information</h4>
                  <p className="font-semibold text-sm text-center">
                    Do you have a project in mind that you think I would be a good fit for? Get in touch with me!
                  </p>

                  <div className="flex items-center gap-2">
                    <PhoneCall />
                    <span>+2763 748 9367</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail />
                    <span>enoughnthani@gmail.com</span>
                  </div>
                </div>
              </div>
            </Col>

            {/* Right Column (Form) */}
            <Col md={7} className="flex items-center justify-center pb-3">
              <div className="w-full h-[90%] rounded p-6 bg-white">
                <Form noValidate validated={validated} onSubmit={handleSubmit} className="space-y-6">
                  <Row className="gap-y-4">
                    <Col md={6} className="flex items-center gap-x-2">
                      <Form.Label className="w-[25%] md:!w-[50%] text-gray-600 font-semibold">First Name :</Form.Label>
                      <Form.Control required />
                    </Col>

                    <Col md={6} className="flex items-center gap-x-2">
                      <Form.Label className="w-[25%] md:!w-[50%] text-gray-600 font-semibold">Last Name :</Form.Label>
                      <Form.Control required />
                    </Col>
                  </Row>

                  <Row className="gap-y-4">
                    <Col className="flex items-center gap-x-2">
                      <Form.Label className="w-25 text-gray-600 font-semibold">Email Address :</Form.Label>
                      <InputGroup>
                        <Form.Control required type="email" />
                        <InputGroup.Text><Mail /></InputGroup.Text>
                      </InputGroup>
                    </Col>
                  </Row>

                  <Row>
                    <Col>
                      <Form.Label className="font-semibold text-slate-600">What are you interested in?</Form.Label>
                      {["Mobile App", "Design", "Desktop App", "Software App"].map((value, key) => (
                        <Form.Check required name="interest" className="text-slate-600" type="radio" label={value} key={key} />
                      ))}
                    </Col>
                  </Row>

                  <Row>
                    <Col>
                      <Form.Label className="font-semibold text-slate-600">Your message</Form.Label>
                      <Form.Control required as="textarea" />
                    </Col>
                  </Row>

                  <div className="flex justify-end">
                    <Button type="submit" variant="success" className="!flex items-center">Send Message
                      <ChevronRight className="ms-auto" />
                    </Button>
                  </div>
                </Form>
              </div>
            </Col>
          </Row>
        </section>


      </Container>

      {showScrollUpButton&&(
        <ArrowUp className="fixed right-5 bottom-2 text-gray-600 border-1 !border-slate-300 rounded cursor-pointer" size={40}/>
      )}

      {/* FOOTER */}
      <footer className="mt-10 text-center bg-slate-700 text-slate-200 py-6">
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
