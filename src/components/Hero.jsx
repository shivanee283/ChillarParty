// import { Environment } from "@react-three/drei";
import { Environment } from "@react-three/drei";
import { styles } from "../styles";
import { Avatar } from "./canvas/Avatar";
import { Canvas } from "@react-three/fiber";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-3">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h2 className={`${styles.heroHeadText} text-white`}>
            Your <span className="text-[#9d6cfe]">Financial</span> <br></br>
            Career starts here
          </h2>
          <div className="p-6">
            <p className="mt-5 text-2xl md:text-1xl lg:text-1xl leading-relaxed">
            <span className="text-[#9d6cfe]">Empowering you</span> with
              financial knowledge and tools. <br></br>
              <span className="text-[#9d6cfe]">Learn, save, and grow </span>
              {/* <strong className="text-blue-600">
                {" "}
                Learn, save, and grow
              </strong>{" "} */}
              with interactive courses, engaging <br></br> challenges, and personalized
              insights. <br></br>Achieve{" "}
              <strong className="text-purple-600">financial inclusion</strong> and
              make informed <br></br>decisions for a better future.
            </p>
          </div>
        </div>
      </div>

      {/* <Canvas>
        <Avatar />
        <Environment preset="sunset" />
      </Canvas> */}
    </section>
  );
};

export default Hero;
