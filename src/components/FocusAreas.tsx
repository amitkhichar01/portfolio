export default function FocusAreas() {
  return (
    <section id="focus" aria-label="Areas of focus">
      {/* Orbit diagram */}
      <div className="section-border flex flex-col items-center gap-8 py-10">
        <div className="relative mx-auto w-full max-w-xs sm:max-w-md md:max-w-lg">
          <div className="relative aspect-square w-full">
            {/* Decorative orbit rings */}
            <div
              aria-hidden="true"
              className="absolute top-0 left-1/2 h-[60%] w-[60%] -translate-x-1/2 rounded-full border border-border border-double"
            />
            <div
              aria-hidden="true"
              className="absolute top-[22%] left-[2%] h-[60%] w-[60%] rounded-full border border-border border-double"
            />
            <div
              aria-hidden="true"
              className="absolute top-[22%] right-[2%] h-[60%] w-[60%] rounded-full border border-border border-double"
            />
            <div
              aria-hidden="true"
              className="absolute bottom-0 left-1/2 h-[60%] w-[60%] -translate-x-1/2 rounded-full border border-border border-double"
            />

            {/* Labels — top */}
            <span className="text-text-secondary absolute top-[14%] left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-center text-[10px] sm:text-sm">
              Full-Stack AI Engineer
            </span>

            {/* Labels — left */}
            <span className="text-text-secondary absolute top-1/2 left-[15%] -translate-x-1/2 -translate-y-1/2 text-[10px] sm:text-sm">
              Product Thinking <br /> & User Research
            </span>

            {/* Labels — right */}
            <span className="text-text-secondary absolute top-1/2 right-[15%] translate-x-1/2 -translate-y-1/2 text-[10px] sm:text-sm">
              5+ Products <br /> Shipped
            </span>

            {/* Labels — bottom */}
            <span className="text-text-secondary absolute bottom-[14%] left-1/2 -translate-x-1/2 translate-y-1/2 text-center text-[10px] sm:text-sm">
              System Design
            </span>

            {/* Centre avatar */}
            <div className="absolute top-1/2 left-1/2 size-20 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full border-2 border-border shadow-md sm:border-4 md:size-24">
              <img
                alt="Amit Khichar"
                src="/my-photo.jpg"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="flex w-full flex-col items-center gap-4 px-4 pb-2">
          <p className="text-center text-sm sm:text-base text-text-secondary">
            Made it this far? We should probably talk. <br />
            Reach out by{" "}
            <a
              href="mailto:amitkhichar70@gmail.com"
              className="text-text-primary hover:underline"
            >
              email
            </a>{" "}
            or connect with me on{" "}
            <a
              href="https://www.linkedin.com/in/amit-khichar/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-primary hover:underline"
            >
              LinkedIn
            </a>{" "}
            or{" "}
            <a
              href="https://x.com/amit_khichar25"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-primary hover:underline"
            >
              X
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
