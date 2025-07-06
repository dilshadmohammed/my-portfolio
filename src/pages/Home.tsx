import skills from "../data/skills.json"
import contact from "../data/contact.json"
import ContactForm from "../components/ContactForm"
import Projects from "../components/Projects"

function Home () {

    return (
            <div className="w-full min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
                <nav className="w-full bg-gray-900/80 backdrop-blur-sm border-b border-gray-700 sticky top-0 z-50">
                    <div className="max-w-6xl mx-auto px-6 py-4">
                        <div className="flex items-center justify-end">
                            <div className="hidden md:flex space-x-8">
                                <a
                                    href="#about"
                                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
                                >
                                    About
                                </a>
                                <a
                                    href="#projects"
                                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
                                >
                                    Projects
                                </a>
                                <a
                                    href="#skills"
                                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
                                >
                                    Skills
                                </a>
                                <a
                                    href="#contact"
                                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
                                >
                                    Contact
                                </a>
                            </div>
                            <details className="md:hidden relative">
                                <summary className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-blue-600 transition-colors duration-300">
                                    <span className="material-symbols-outlined text-white">menu</span>
                                </summary>
                                <div className="absolute right-0 top-12 bg-gray-800 rounded-lg shadow-lg border border-gray-700 p-4 min-w-[150px] z-50">
                                    <a
                                        href="#about"
                                        className="block py-2 text-gray-300 hover:text-blue-400 transition-colors duration-300"
                                    >
                                        About
                                    </a>
                                    <a
                                        href="#projects"
                                        className="block py-2 text-gray-300 hover:text-blue-400 transition-colors duration-300"
                                    >
                                        Projects
                                    </a>
                                    <a
                                        href="#skills"
                                        className="block py-2 text-gray-300 hover:text-blue-400 transition-colors duration-300"
                                    >
                                        Skills
                                    </a>
                                    <a
                                        href="#contact"
                                        className="block py-2 text-gray-300 hover:text-blue-400 transition-colors duration-300"
                                    >
                                        Contact
                                    </a>
                                </div>
                            </details>
                        </div>
                    </div>
                </nav>

                <section className="max-w-6xl mx-auto px-6 py-20">
                    <div className="text-center">
                        <div className="mb-8">
                            <img
                                src="/profile-pic.jpeg"
                                alt="Profile"
                                className="w-48 h-48 rounded-full mx-auto mb-6 border-4 border-blue-700 shadow-lg"
                            />
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                            Hello, I'm <span className="text-blue-400">Dilshad Mohammed</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                            Computer Science Engineering Student passionate about creating innovative solutions through
                            code
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href={contact.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center"
                            >
                                Github
                            </a>
                            <a
                                href="/resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                            >
                                Resume
                            </a>
                        </div>
                    </div>
                </section>

                <section id="about" className="max-w-6xl mx-auto px-6 py-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">About Me</h2>
                            <p className="text-gray-300 mb-6 leading-relaxed">
                                I'm a passionate Computer Science Engineering student with a strong foundation in
                                software development and problem-solving. Currently pursuing my degree, I'm dedicated to
                                learning cutting-edge technologies and applying them to real-world projects.
                            </p>
                            <p className="text-gray-300 mb-8 leading-relaxed">
                                My journey in computer science has been driven by curiosity and a desire to create
                                meaningful applications that solve complex problems. I enjoy working on backend development more
                                , always striving to write clean, efficient code.
                            </p>
                        </div>
                        <div className="relative">
                            <img
                                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=400&fit=crop&auto=format"
                                alt="Coding workspace"
                                className="rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute -bottom-4 -right-4 bg-blue-500 text-white p-4 rounded-lg shadow-lg">
                                <span className="material-symbols-outlined text-2xl">emoji_objects</span>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="projects" className="bg-gray-900 py-20">
                    <div className="max-w-6xl mx-auto px-6">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Projects</h2>
                        </div>
                       <Projects/>
                    </div>
                </section>

                <section id="skills" className="py-20 bg-gray-800">
                    <div className="max-w-6xl mx-auto px-6">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Technical Skills</h2>
                        </div>
                        <div className="flex flex-wrap justify-center gap-6">
                            {skills.map((skill) => (
                                <div
                                    key={skill.name}
                                    className="bg-gray-700 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center flex flex-col items-center w-32"
                                >
                                    <div className="text-4xl mb-3">
                                        <i className={skill.icon}></i>
                                    </div>
                                    <h3 className="font-semibold text-white">{skill.name}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section id="contact" className="bg-gray-900 text-white py-20">
                    <div className="max-w-6xl mx-auto px-6">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
                            <p className="text-gray-300 max-w-2xl mx-auto">
                                I'm always open to discussing new opportunities and interesting projects
                            </p>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            <div>
                                <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-4">
                                        <a
                                            href={`mailto:${contact.email}`}
                                            className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors duration-300"
                                            aria-label="Send Email"
                                        >
                                            <span className="material-symbols-outlined">email</span>
                                        </a>
                                        <div>
                                            <h4 className="font-semibold">Email</h4>
                                            <a
                                                href={`mailto:${contact.email}`}
                                                className="text-gray-300 hover:underline"
                                            >
                                                {contact.email}
                                            </a>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <a
                                            href={`tel:${contact.phone}`}
                                            className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors duration-300"
                                            aria-label="Call Phone"
                                        >
                                            <span className="material-symbols-outlined">phone</span>
                                        </a>
                                        <div>
                                            <h4 className="font-semibold">Phone</h4>
                                            <a
                                                href={`tel:${contact.phone}`}
                                                className="text-gray-300 hover:underline"
                                            >
                                                {contact.phone}
                                            </a>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors duration-300">
                                            <span className="material-symbols-outlined">location_on</span>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold">Location</h4>
                                            <p className="text-gray-300">{contact.location}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-4 mt-8">
                                    <a
                                        href={contact.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors duration-300 border border-gray-700"
                                        aria-label="LinkedIn"
                                    >
                                        <i className="fa-brands fa-linkedin"></i>
                                    </a>
                                    <a
                                        href={contact.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors duration-300 border border-gray-700"
                                        aria-label="GitHub"
                                    >
                                        <i className="fa-brands fa-github"></i>
                                    </a>
                                    <a
                                        href={contact.x}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors duration-300 border border-gray-700"
                                        aria-label="X"
                                    >
                                        <i className="fa-brands fa-x-twitter"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="bg-gray-800 rounded-lg p-8 border border-gray-700">
                                <ContactForm/>
                            </div>
                        </div>
                    </div>
                </section>

                <footer className="bg-gray-900 border-t border-gray-800 py-4">
                    <div className="max-w-6xl mx-auto px-6 text-center">
                        <p className="text-gray-400 text-sm">© 2025 Dilshad Mohammed. All rights reserved.</p>
                    </div>
                </footer>
            </div>
    )
}

export default Home