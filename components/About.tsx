// Importamos las librerias

// Definimos el componente About
export default function About() {
    return (
        <section id="about-me" className="px-4 md:px-6 py-20">
            <div className="max-w-6xl mx-auto">

                {/* Header */}
                <p className="bg-linear-to-r from-orange-600 to-amber-500 dark:from-orange-500 dark:to-amber-400 bg-clip-text text-transparent font-normal text-xs uppercase tracking-widest">
                    About me
                </p>
                <h2 className="mt-2 text-3xl font-semibold text-zinc-900 dark:text-zinc-100">
                    Who's behind the code
                </h2>

                {/* Content */}
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-12">

                    {/* Left — bio */}
                    <div className="flex flex-col gap-4 text-base text-zinc-500 dark:text-zinc-400 leading-relaxed">
                        <p>
                            Hi, I'm Marco Antonio Cruz López, a 24-year-old Mechatronics Engineer and Software Development Technologist — a combination that taught me to think in systems, not just in code.
                        </p>
                        <p>
                            Self-taught on the web side, with around 1.5 years of hands-on experience building web applications — and 6 months working professionally as a Test Engineer, where I developed a sharp eye for how software should behave.
                        </p>
                        <p>
                            That mix of engineering, testing, and development gives me a different perspective: I don't just write code, I think about how it breaks, how it scales, and how the end user experiences it.
                        </p>
                        <p>
                            I'm driven by one thing — automating what's manual and making people's workflows faster and smarter. If a task can be optimized, I'll find a way to do it.
                        </p>
                        <p>
                            My goal is to land my first role as a web developer and keep growing into a full stack engineer who ships products that actually make a difference.
                        </p>
                    </div>

                    {/* Right — highlights */}
                    <div className="flex flex-col gap-4">
                        {[
                            {
                                label: "Background",
                                value: "Self-taught — courses, projects, and real-world practice.",
                            },
                            {
                                label: "Experience",
                                value: "6 months as Test Engineer at Foxconn. 1.5 years building full stack projects.",
                            },
                            {
                                label: "Focus",
                                value: "Automating manual tasks and improving user productivity.",
                            },
                            {
                                label: "Goal",
                                value: "I will continue practicing, learning, and improving every day so I can become a web developer at a large company.",
                            },
                        ].map((item) => (
                            <div key={item.label} className="flex flex-col gap-1 border-b border-line pb-4">
                                <span className="text-xs text-zinc-400 dark:text-zinc-500 uppercase">
                                    {item.label}
                                </span>
                                <span className="text-sm text-zinc-700 dark:text-zinc-300">
                                    {item.value}
                                </span>
                            </div>
                        ))}
                        {/* Download CV */}
                        <a
                            href="/CV_MARCO_ANTONIO_CRUZ_LOPEZ.pdf"
                            download
                            className="group mt-5 inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-line text-sm font-medium text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-900/5 dark:hover:bg-zinc-500/10 transition-colors w-fit"
                        >
                            Download CV
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 transition-transform duration-200 group-hover:translate-y-0.5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                            </svg>
                        </a>
                    </div>

                </div>
            </div>
        </section>
    );
}