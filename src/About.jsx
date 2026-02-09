import { motion } from "framer-motion";
import SectionHeading from "./section-heading";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.03,
    },
  },
};
export default function about() {
  return (
    <motion.section
      id="about"
      className="flex justify-start items-center flex-col text-center text-base pt-24"
      variants={fadeInAnimationVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <div className=" px-2 w-full text-base sm:w-5/6 lg:w-6/12 sm:text-base tracking-wider">
        <SectionHeading heading="About Me" />
        <div className="text-lg text-start tracking-wider break-normal leading-8 indent-1 px-2 font-normal font-nunito">
          <p className="text-[#FFFFFFB3] pb-2">
            A self-taught{" "}
            <span className="text-gray-200">MERN Stack Developer</span> based in
            Rajasthan(India). I specialize in building scalable web applications
            using
            <span className="text-gray-200">
              {" "}
              React, Next.js, Node.js and MongoDB,{" "}
            </span>
            focusing on clean architecture, performance, and maintainable code.
          </p>
          <p className="text-[#FFFFFFB3] pb-2">
            I work across the full stack, from creating responsive and intuitive
            user interfaces to designing efficient backend APIs that power
            real-world applications. My approach is centered on understanding
            the problem first, then building solutions that balance user
            experience, performance, and business needs.
          </p>
          <p className="text-[#FFFFFFB3] pb-2">
            I enjoy working with startups, product teams, and growing
            organizations that value about building meaningful projects that
            make a real impact.
          </p>
          <p className="text-[#FFFFFFB3]">
            Let&#39;s connect and build something that matters...
          </p>
        </div>
      </div>
    </motion.section>
  );
}
