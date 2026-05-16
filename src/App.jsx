import profilePic from "./assets/profile.jpeg";



import { motion } from "framer-motion";

import { useState } from "react";

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#22010f] text-white overflow-hidden scroll-smooth">

      {/* BACKGROUND GLOWS */}
      <div className="fixed top-0 left-0 w-96 h-96 bg-blue-500/20 blur-[140px] rounded-full"></div>
      <div className="fixed bottom-0 right-0 w-96 h-96 bg-red-500/20 blur-[140px] rounded-full"></div>

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-white/5 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex justify-between items-center">

          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-red-400 bg-clip-text text-transparent">
            Vimbai.dev
          </h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 text-slate-300 font-medium">
            <a href="#about" className="hover:text-blue-400 transition">About</a>
            <a href="#skills" className="hover:text-blue-400 transition">Skills</a>
            <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
            <a href="#experience" className="hover:text-blue-400 transition">Experience</a>
            <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
          </div>

          {/* Mobile Button */}
          <button
            className="md:hidden text-3xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
          ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-lg px-6 py-6 flex flex-col gap-4 text-slate-300">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="min-h-screen flex items-center px-6 md:px-16 pt-32 pb-20">

        <div className="grid lg:grid-cols-2 gap-16 items-center w-full">

          {/* LEFT */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8 }}
          >

            <p className="uppercase tracking-[0.3em] text-red-400 font-semibold mb-6">
              AI & Machine Learning Engineer
            </p>

            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-8">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-red-400 bg-clip-text text-transparent">
                Vimbai Chisepo
              </span>
            </h1>

            <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mb-10">
              Computer Science & Engineering student passionate about
              Artificial Intelligence, Machine Learning, and building
              impactful technology solutions for real-world problems
              across Africa and beyond.
            </p>

            <div className="flex flex-wrap gap-5">
              <a
                href="#projects"
                className="px-8 py-4 rounded-2xl bg-blue-500 hover:bg-blue-600 transition shadow-[0_0_40px_rgba(59,130,246,0.5)] font-semibold"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="px-8 py-4 rounded-2xl border border-red-400/40 hover:bg-red-500/20 transition font-semibold"
              >
                Contact Me
              </a>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1 }}
            className="flex justify-center"
          >
            <div className="relative">

              <div className="absolute inset-0 bg-blue-500 blur-[120px] opacity-30 rounded-full"></div>

              <img
                src={profilePic}
                alt="Profile"
                className="relative w-72 h-72 md:w-96 md:h-96 object-cover rounded-full border-4 border-blue-400/50 shadow-[0_0_80px_rgba(59,130,246,0.4)]"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT */}
      <motion.section
        id="about"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.8 }}
        className="px-6 md:px-16 py-24 bg-white/5 backdrop-blur-xl border-y border-white/10"
      >
        <h2 className="text-5xl font-black mb-12 text-blue-400">
          About Me
        </h2>

        <div className="grid lg:grid-cols-2 gap-14 text-lg text-slate-300 leading-relaxed">
          <p>
            I am a Computer Science & Engineering student at Vishwakarma
            University, Pune, India. Originally from Zimbabwe, I am
            passionate about Artificial Intelligence, entrepreneurship,
            and building impactful software products.
          </p>

          <p>
            My focus is creating intelligent systems that solve real-world
            problems in agriculture, automation, civic technology, and
            digital infrastructure.
          </p>
        </div>
      </motion.section>

      {/* SKILLS */}
      <section id="skills" className="px-6 md:px-16 py-24">

        <h2 className="text-5xl font-black mb-16 text-red-400">
          Technical Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {[
            "Python",
            "React",
            "JavaScript",
            "Machine Learning",
            "AI",
            "Tailwind CSS",
            "Git & GitHub",
            "Problem Solving",
          ].map((skill) => (
            <motion.div
              whileHover={{ scale: 1.05 }}
              key={skill}
              className="bg-white/5 backdrop-blur-xl border border-white/10 hover:border-blue-400/40 transition p-6 rounded-3xl shadow-xl"
            >
              <p className="font-semibold text-lg text-center">
                {skill}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="px-6 md:px-16 py-24 bg-white/5"
      >
        <h2 className="text-5xl font-black mb-16 text-blue-400">
          Featured Projects
        </h2>

        <div className="grid lg:grid-cols-2 gap-10">

          {[
            {
              title: "AI-Based Maize Disease Detection",
              desc: "AI-powered crop disease detection system helping farmers identify maize diseases early using image analysis.",
            },
            {
              title: "Harare Municipal Complaint Portal",
              desc: "Web-based civic complaint platform enabling citizens to report municipal issues digitally.",
            },
            {
              title: "Insurance Claim Processor",
              desc: "Python-based intelligent insurance claim processing and workflow automation system.",
            },
            {
              title: "Zimbabwe Marketplace Platform",
              desc: "Developing a marketplace ecosystem inspired by IndiaMART tailored for Zimbabwe.",
            },
          ].map((project) => (
            <motion.div
              whileHover={{ y: -10 }}
              key={project.title}
              className="bg-slate-900/60 backdrop-blur-xl border border-white/10 hover:border-blue-400/40 rounded-3xl p-8 shadow-2xl transition"
            >

              <h3 className="text-2xl font-bold text-red-400 mb-5">
                {project.title}
              </h3>

              <p className="text-slate-300 leading-relaxed mb-6">
                {project.desc}
              </p>

              <div className="flex flex-wrap gap-3 mb-6">
                <span className="px-4 py-2 rounded-full bg-blue-500/20 text-blue-300 text-sm">
                  AI
                </span>

                <span className="px-4 py-2 rounded-full bg-red-500/20 text-red-300 text-sm">
                  React
                </span>
              </div>

              <div className="flex gap-4">
                <button className="px-5 py-2 rounded-xl bg-blue-500 hover:bg-blue-600 transition">
                  Live Demo
                </button>

                <button className="px-5 py-2 rounded-xl border border-white/20 hover:border-blue-400 transition">
                  GitHub
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section
        id="experience"
        className="px-6 md:px-16 py-24"
      >
        <h2 className="text-5xl font-black mb-16 text-red-400">
          Experience & Leadership
        </h2>

        <div className="space-y-10">

          <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-10">
            <h3 className="text-3xl font-bold text-blue-400 mb-4">
              Junior Software Developer — JomeTech Africa
            </h3>

            <p className="text-slate-400 mb-4">
              2025 - Current | Remote
            </p>

            <p className="text-slate-300 leading-relaxed">
              Assisted in software development, debugging, testing,
              and system maintenance while researching scalable digital
              business solutions.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="px-6 md:px-16 py-24 text-center"
      >

        <h2 className="text-5xl font-black mb-10 text-red-400">
          Contact Me
        </h2>

        <p className="text-xl text-slate-300 mb-12">
          Let's connect and build impactful technology together.
        </p>

        <div className="flex flex-col gap-5 items-center text-slate-300 text-lg">

          <div className="flex items-center gap-3">
            <img
              src="/mail.svg"
              alt="Mail"
              className="w-5 h-5"
            />
            <span>vimbai.chisepo25@vupune.ac.in</span>
          </div>

          <div className="flex items-center gap-3">
            <img
              src="/phone.svg"
              alt="Phone"
              className="w-5 h-5"
            />
            <span>+91 955-224-2593</span>
          </div>

          <div className="flex items-center gap-3">
            <img
              src="/location.svg"
              alt="Location"
              className="w-5 h-5"
            />
            <span>Pune, India</span>
          </div>
        </div>

        <div className="flex justify-center gap-6 mt-12">

          <a
            href="https://www.linkedin.com/in/vimbai-chisepo-bb611734a/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-2xl bg-blue-500 hover:bg-blue-600 transition"
          >
            <img
              src="/linkedin.svg"
              alt="LinkedIn"
              className="w-6 h-6"
            />
          </a>

          <a
            href="https://github.com/chisepovimbai05-cmyk"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-2xl bg-red-500 hover:bg-red-600 transition"
          >
            <img
              src="/github.svg"
              alt="GitHub"
              className="w-6 h-6"
            />
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-8 text-center text-slate-400">
        <p>
          © 2026 Vimbai Chisepo • AI Engineer Portfolio
        </p>
      </footer>
    </div>
  );
}