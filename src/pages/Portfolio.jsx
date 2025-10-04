import profile_pic from "../images/bg-image.png"
import saps_img from "../images/saps_img.jpg"
import danisile_glam_img from "../images/danisile_glam_img.png"
import event_web_img from "../images/event-img.jpg"
import student_card_web_img from "../images/student_card-web_img.png"
import { motion } from "framer-motion";
import laptop_repair_img from "../images/laptop_repair_img.jpg"
import why_love_tech_img from "../images/why_love_tech_img.jpg"
import assit_stud_img from "../images/assit_stud_img.jpg"

import { Container, Row, Col, Card, Button, Modal, Form, Badge, Dropdown, DropdownButton, InputGroup } from "react-bootstrap";
import {
  Mail,
  Phone,
  Briefcase,
  GraduationCap,
  Github,
  Linkedin,
  FileText,
  PhoneCall,
  ChevronRight,
  ArrowRight,
  ArrowUp
} from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowRight, FaCalendarAlt, FaFacebook, FaLaptopCode, FaLinkedin, FaTools, FaTwitter, FaUserFriends, FaWhatsapp } from "react-icons/fa"

export default function Portfolio() {
  const [showContact, setShowContact] = useState(false);
  const openContact = () => setShowContact(true);
  const closeContact = () => setShowContact(false);
  const [validated, setValidated] = useState(false)
  const [showScrollUpButton, setShowScrollUpButton] = useState(false)
  const naviaget = useNavigate()

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
      title: "SAPS Alert & Certify",
      desc:
        "Web app for online document certifying and crime reporting. React frontend, Node/Express API, PostgreSQL.",
      tech: ["React", "Node", "Postgres"],
      link: "#",
      image: saps_img
    },
    {
      id: 2,
      title: "Danisile's Glam & Beauty",
      desc:
        "Small e-commerce site built with React Bootstrap and Flask backend to manage products and orders (no payments).",
      tech: ["React", "Flask", "Bootstrap"],
      link: "#",
      image: danisile_glam_img
    },
    {
      id: 3,
      title: "Event Management System",
      desc: "System for storing and managing meetings, notes and activities. Java backend, React frontend.",
      tech: ["Java", "React", "MySQL"],
      link: "#",
      image: event_web_img
    },
    {
      id: 4,
      title: "CardSwiftPro",
      desc: "A web-based platform for creating student cards online, designed to eliminate long queues and streamline the process.",
      tech: ["Java", "HTML/CSS", "JavaScript", "Bootstrap", "MySQL"],
      link: "#",
      image: student_card_web_img
    }

  ];

  useEffect(() => {
    const handleScroll = () => {

      if (window.scrollY > 300) {
        setShowScrollUpButton(true)
      } else {
        setShowScrollUpButton(false)
      }

    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const blogPosts = [
    {
      id: 1,
      title: "Why I Love Building Web Apps",
      date: "Sep 28, 2025",
      excerpt:
        "Thoughts on turning complex ideas into smooth, user-friendly interfaces with React and Tailwind.",
      image: why_love_tech_img
    },
    {
      id: 2,
      title: "Laptop Repair Tips You Should Know",
      date: "Sep 15, 2025",
      excerpt:
        "Simple steps to keep your laptop running longer and avoid common hardware problems.",
      image: laptop_repair_img
    },
    {
      id: 3,
      title: "Helping Students Master Programming",
      date: "Aug 30, 2025",
      excerpt:
        "How mentoring others has improved my own coding skills and kept me learning new concepts.",
      image: assit_stud_img
    },
  ];

  const skillChips = [
    "Java", "React", "JavaScript", "HTML/CSS", "SQL", "Flask", "Python", "Git"
  ];

  const navItems = [
    { link: "/Portfolio/", label: "Home" },
    { link: "#About_Me", label: "About" },
    { link: "#Projects", label: "Projects" },
    { link: "#Blog", label: "Blog" },
  ]

  const social_media = [
    { icon: FaFacebook,hover_color:"hover:!text-blue-600 hover:bg-slate-100", link: "https://web.facebook.com/EnoughTonnyNthani" },
    { icon: FaWhatsapp,hover_color:"hover:!text-green-600 hover:bg-slate-100", link: "https://wa.me/27637489367" },
    { icon: FaLinkedin,hover_color:"hover:!text-sky-700 hover:bg-slate-100", link: "https://za.linkedin.com/" },
    { icon: FaTwitter,hover_color:"hover:!text-slate-600 hover:bg-slate-100", link: "https://x.com/?lang=en" }
  ]

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

        <div onClick={() => location.href = "/Portfolio/"} className="hover:border px-2 rounded flex items-center cursor-pointer">
          <div className="flex items-center justify-center text-white font-bold bg-gray-600 rounded-3xl w-[40px] h-[40px]">
            ET
          </div>
          <div>
            <h4 className="m-0 ps-2 font-extrabold uppercase tracking-tight text-slate-900">Nthani</h4>
          </div>
        </div>

        <nav className="flex ms-auto items-center justify-end">
          {navItems.map((p, key) => (
            <a as="a" href={p.link} className="hidden sm:block border-2 font-bold hover:underline text-gray-600 rounded px-4 py-1  flex items-center justify-center mx-2 no-underline border-slate-200" key={key}>
              {p.label}
            </a>
          ))}

          <Dropdown className="block sm:hidden">
            <DropdownButton variant="outline-secondary" title="Menu" >
              {navItems.map((p, key) => (
                <a as="a" href={p.link} className="border-2 my-2  font-bold hover:underline text-gray-600 rounded px-4 py-1  flex items-center justify-center mx-2 no-underline border-slate-200" key={key}>
                  {p.label}
                </a>
              ))}
            </DropdownButton>
          </Dropdown>
        </nav>
      </header>

      <Container fluid className="py-8">

        {/* HERO */}
        <section className="from-slate-50 to-white rounded p-6 mt-8 mb-8 bg-gradient-to-r">
          <Row className="animate-popup items-center space-y-9 py-9 gy-8">
            <Col md={5} className="text-center md:text-left">
              <div className="flex relative items-center justify-center">
                <img
                  src={profile_pic}
                  alt="profile"
                  className="object-contain  shadow-md bg-gradient-to-r from-slate-100 to-white rounded"
                />

                <div className="flex gap-3 rounded absolute -bottom-4 px-4 py-1 bg-slate-900">
                  {social_media.map(social => (
                    <a href={social.link} target="_blank">
                      <social.icon size={35} className={`${social.hover_color} rounded-md text-white cursor-pointer`} />
                    </a>
                  ))}
                </div>
              </div>
            </Col>

            <Col md={7} className="flex flex-col justify-center">
              <div className="flex flex-column items-center md:items-start">
                <h1 className="tracking-tight text-center !text-6xl lg:!text-7xl font-extrabold">
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
                    className="text-sm px-3  py-1 rounded-full bg-gray-600 border border-gray-600 text-white font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex flex-wrap items-center gap-3">
                <motion.button
                  onClick={openContact}
                  className="!flex items-center !font-bold bg-gray-600 px-4 py-2 rounded !text-xl text-white"
                  initial={{ scale: 0.8 }}
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 150 }}
                >
                  <Mail size={16} className="me-2" /> Contact
                </motion.button>


                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex text-gray-600 items-center gap-2 text-sm font-medium"
                >
                  <Github size={18} /> GitHub
                </a>

                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex text-gray-600 items-center gap-2 text-sm font-medium"
                >
                  <Linkedin size={18} /> LinkedIn
                </a>

                <a
                  href="https://enoughnthani.github.io/Portfolio/enough_nthani_resume.pdf"
                  download
                  className="inline-flex text-gray-600 items-center gap-2 text-sm font-medium"
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

        <section id="About_Me" className="fadeSection relative bg-gradient-to-r from-slate-50 to-white py-20 px-6 flex justify-center">
          <div className="absolute"></div>

          <div className="relative max-w-5xl w-full text-center text-white space-y-10">
            <h2 className="text-5xl text-slate-900 font-extrabold tracking-tight drop-shadow-md">
              About Me
            </h2>

            <p className="text-lg text-slate-900 sm:text-xl leading-relaxed max-w-3xl mx-auto">
              I’m <span className="font-semibold">Enough Tonny Nthani</span>, a
              passionate developer who loves crafting clean, interactive web
              experiences and exploring new technologies. My goal is to build tools
              that make everyday life simpler and more enjoyable.
            </p>

            {/* Icon Feature Grid */}
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              {/* Coding */}
              <div className="bg-gray-600 rounded-2xl p-8 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
                <FaLaptopCode className="text-5xl mx-auto mb-4 text-yellow-300 drop-shadow" />
                <h3 className="text-2xl font-semibold mb-2">Web Development</h3>
                <p className="text-base">
                  Creating responsive, user-friendly websites and apps with React,
                  Tailwind and modern backend stacks.
                </p>
              </div>

              {/* Hardware Repair */}
              <div className="bg-gray-600 rounded-2xl p-8 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
                <FaTools className="text-5xl mx-auto mb-4 text-green-300 drop-shadow" />
                <h3 className="text-2xl font-semibold mb-2">Hardware Solutions</h3>
                <p className="text-base">
                  Fixing and upgrading laptops & desktops, diagnosing hardware
                  issues, and keeping systems running smoothly.
                </p>
              </div>

              {/* Mentoring */}
              <div className="bg-gray-600 rounded-2xl p-8 backdrop-blur-sm hover:scale-105 transition-transform duration-300">
                <FaUserFriends className="text-5xl mx-auto mb-4 text-pink-300 drop-shadow" />
                <h3 className="text-2xl font-semibold mb-2">Programming Support</h3>
                <p className="text-base">
                  Helping students understand programming concepts and guiding them
                  through projects and challenges.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-slate-50 to-white rounded-2xl p-6 mb-8">
          <div>
            <div className="flex items-start gap-4 mb-6">

              <div className="flex-1">
                <div className="flex gap-x-2">
                  <GraduationCap size={24} className="text-indigo-500 mt-1" />
                  <h5 className="mb-3 text-5xl font-extrabold text-slate-800">Education</h5>
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


        <section id="Projects" className="bg-gradient-to-l from-slate-50 to-white space-y-6 py-6">
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


          <div className="grid md:grid-cols-4 gap-8">
            {projects.map((p, i) => (
              <div key={i} className="flex flex-column items-center justify-center">

                <img src={p.image} className="w-full h-48 object-cover" />

                <div
                  className="flex flex-column flex-1 relative p-6 text-left space-y-4 bg-white rounded-b-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <h4 className="text-gray-600 tracking-tight font-extrabold">{p.title}</h4>
                  <p className="text-gray-600">{p.desc}</p>

                  <div className="mt-auto pt-3">
                    <Button variant="outline-secondary">
                      View Sorce Code
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>


          <div>
            <Button className="!flex bg-white mx-auto text-black !font-bold !border-gray-600">
              More Projects
              <ArrowRight className="ms-2 hover:animate-arrow_rotate" />
            </Button>
          </div>
        </section>

        <section
          id="Blog"
          className="relative bg-gray-50 py-20 px-6 flex justify-center"
        >
          <div className="max-w-6xl w-full text-center space-y-12">
            <h2 className="text-5xl font-extrabold text-gray-800 tracking-tight">
              Blog
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Insights, tips, and stories from my journey in software development,
              hardware repair, and mentoring.
            </p>

            {/* Grid of posts */}
            <div className="grid md:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6 text-left space-y-4">
                    <div className="flex items-center text-sm text-gray-500 space-x-2">
                      <FaCalendarAlt className="text-indigo-500" />
                      <span>{post.date}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">
                      {post.title}
                    </h3>
                    <p className="text-gray-600">{post.excerpt}</p>
                    <a
                      href="#"
                      className="inline-flex items-center text-indigo-600 font-semibold hover:underline mt-2"
                    >
                      Read More
                      <FaArrowRight className="ml-2" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="my-8 rounded-md border border-gray-200 overflow-hidden">
          <Row className="h-full">
            {/* Left Column */}
            <Col
              md={5}
              className="flex items-center justify-center bg-gradient-to-b from-purple-800 to-purple-900 p-6 text-white"
            >
              <div className="space-y-6 text-center">
                <h4 className="text-2xl font-bold tracking-wide">Contact Information</h4>
                <p className="text-sm font-medium opacity-90">
                  Do you have a project in mind that you think I would be a good fit for?
                  Let’s talk!
                </p>

                <div className="mt-6 space-y-3">
                  <div className="flex items-center justify-center gap-3">
                    <PhoneCall className="h-5 w-5" />
                    <span className="text-base">+27 63 748 9367</span>
                  </div>
                  <div className="flex items-center justify-center gap-3">
                    <Mail className="h-5 w-5" />
                    <span className="text-base">enoughnthani@gmail.com</span>
                  </div>
                </div>
              </div>
            </Col>

            {/* Right Column – Form */}
            <Col md={7} className="flex items-center justify-center bg-white p-8">
              <div className="w-full max-w-xl">
                <Form
                  noValidate
                  validated={validated}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >

                  <div className="grid grid-cols-2 gap-3">

                    <Form.Label className="min-w-[100px] text-gray-700 font-semibold">
                      First Name
                    </Form.Label>
                    <Form.Control required className="rounded-md border-gray-300" />

                    <Form.Label className="min-w-[100px] text-gray-700 font-semibold">
                      Last Name
                    </Form.Label>
                    <Form.Control required className="rounded-md border-gray-300" />

                    <Form.Label className="min-w-[120px] text-gray-700 font-semibold">
                      Email
                    </Form.Label>
                    <InputGroup>
                      <Form.Control
                        required
                        type="email"
                        className="rounded-l-md border-gray-300"
                      />
                      <InputGroup.Text className="bg-white">
                        <Mail className="h-4 w-4 text-gray-600" />
                      </InputGroup.Text>
                    </InputGroup>
                  </div>

                  <Row>
                    <Col>
                      <Form.Label className="font-semibold text-gray-700">
                        What are you interested in?
                      </Form.Label>
                      <div className="flex flex-wrap gap-4 mt-2">
                        {["Mobile App", "Design", "Desktop App", "Software App"].map(
                          (value, idx) => (
                            <Form.Check
                              key={idx}
                              required
                              id={idx + 1}
                              name="interest"
                              type="radio"
                              label={value}
                              className="text-gray-700 cursor-pointer"
                            />
                          )
                        )}
                      </div>
                    </Col>
                  </Row>

                  <Row>
                    <Col>
                      <Form.Label className="font-semibold text-gray-700">
                        Your Message
                      </Form.Label>
                      <Form.Control
                        required
                        as="textarea"
                        rows={4}
                        className="rounded-md border-gray-300"
                      />
                    </Col>
                  </Row>

                  <div className="flex justify-end">
                    <Button
                      type="submit"
                      variant="success"
                      className="!flex items-center gap-2 px-6 py-2 text-white rounded-md shadow-sm hover:shadow-md transition"
                    >
                      Send Message
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </Form>
              </div>
            </Col>
          </Row>
        </section>



      </Container>

      {showScrollUpButton && (
        <ArrowUp onClick={scrollToTop} className="fixed right-5 bottom-2 text-gray-600 border-1 !border-slate-300 rounded cursor-pointer" size={40} />
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
