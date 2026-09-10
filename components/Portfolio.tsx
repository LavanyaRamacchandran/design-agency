const projects = [
  {
    number: "01",
    title: "NOVA",
    category: "Brand & Digital Experience",
    image:
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=1200&q=80",
  },
  {
    number: "02",
    title: "FORMA",
    category: "Web Design & Development",
    image:
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    number: "03",
    title: "LUMEN",
    category: "Brand Identity",
    image:
      "https://images.unsplash.com/photo-1545235617-9465d2a55698?auto=format&fit=crop&w=1200&q=80",
  },
  {
    number: "04",
    title: "ARC",
    category: "Digital Product",
    image:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="bg-black px-6 py-24 text-white md:py-32"
    >
      <div className="mx-auto max-w-6xl">

        {/* Section heading */}
        <div className="mb-16">
          <p className="mb-4 text-sm uppercase tracking-[0.4em] text-gray-500">
            Selected work
          </p>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Our Portfolio
          </h2>
        </div>

        {/* Projects */}
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.number}
              className="group overflow-hidden rounded-2xl border border-gray-800 bg-zinc-950 transition duration-500 hover:border-gray-600"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.title} project`}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                {/* Image overlay */}
                <div className="absolute inset-0 bg-black/20 transition duration-300 group-hover:bg-black/5" />

                {/* Project number */}
                <span className="absolute left-6 top-6 rounded-full bg-black/60 px-3 py-1 text-xs backdrop-blur-sm">
                  {project.number}
                </span>

                {/* Arrow */}
                <span className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-white text-black transition duration-300 group-hover:scale-110">
                  ↗
                </span>
              </div>

              {/* Project information */}
              <div className="p-6 md:p-8">
                <h3 className="text-3xl font-bold tracking-tight">
                  {project.title}
                </h3>

                <p className="mt-2 text-gray-500">
                  {project.category}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}