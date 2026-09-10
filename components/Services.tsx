const services = [
  {
    number: "01",
    title: "UI/UX Design",
    description:
      "We design intuitive and engaging digital experiences that users love.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="h-8 w-8"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Web Development",
    description:
      "We build fast, responsive and scalable websites using modern technologies.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="h-8 w-8"
      >
        <path d="m8 9-4 3 4 3M16 9l4 3-4 3M14 5l-4 14" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Brand Identity",
    description:
      "We create memorable visual identities that make businesses stand out.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="h-8 w-8"
      >
        <circle cx="12" cy="12" r="8" />
        <path d="M12 8v8M8 12h8" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Digital Strategy",
    description:
      "We turn ideas into clear digital strategies that drive real business results.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="h-8 w-8"
      >
        <path d="M4 19V5M4 19h16" />
        <path d="m7 15 4-5 3 3 5-7" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-white px-6 py-24 text-black md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section heading */}
        <div className="mb-16 max-w-2xl">
          <p className="mb-4 text-sm uppercase tracking-[0.4em] text-gray-500">
            What we do
          </p>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Ideas into
            <br />
            experiences.
          </h2>

          <p className="mt-6 max-w-xl text-gray-500">
            From strategy to execution, we help ambitious brands create
            meaningful digital experiences.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid border-l border-t border-gray-200 md:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.number}
              className="group border-b border-r border-gray-200 bg-white p-8 transition duration-300 hover:bg-black hover:text-white md:p-10"
            >
              <div className="flex items-start justify-between">
                <div className="text-gray-400 transition group-hover:text-white">
                  {service.icon}
                </div>

                <span className="text-sm text-gray-400 group-hover:text-gray-500">
                  {service.number}
                </span>
              </div>

              <div className="mt-16">
                <h3 className="text-2xl font-semibold">
                  {service.title}
                </h3>

                <p className="mt-4 max-w-md leading-relaxed text-gray-500 transition group-hover:text-gray-400">
                  {service.description}
                </p>
              </div>

              <div className="mt-10 text-sm opacity-0 transition duration-300 group-hover:opacity-100">
                Explore service →
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}