import { useRef } from "react";
import Galaxy from "../threeModels/stars/Galaxy";
import About from "../pages/About";
import Skills from "./Skills";
import { Canvas } from "@react-three/fiber";
import StarBackground from "../threeModels/stars/StarBackground";
import Experience from "./Experience";
import Education from "./Education";
import Projects from "./Projects.tsx";


export default function BasePage() {
    // For tracking viewport
    const containerRef = useRef<any>();
    const starView = useRef<any>();

    return (
        <div
            className="w-full h-full bg-bg relative grow min-h-0"
            ref={containerRef}
        >
            {/* Background Viewports */}

            <div id="viewports" className="w-full h-full absolute z-11 p-0 m-0">
                <Canvas linear flat dpr={[1, 2]}>
                    {/* Centerpiece */}
                    <Galaxy />
                </Canvas>
            </div>

            <div
                id="viewports_bg"
                className="h-full w-full absolute z-4 p-0 m-0 top-0"
            >
                <div ref={starView} className="h-full w-full fixed" />
            </div>

            {/* Text Content */}
            <div className="absolute z-10 h-full w-full top-0 left-0">
                <div className="h-screen" />
                <About />
                <Experience />
                <Skills />
                <Education />
                <Projects />
            </div>

            <div
                id="canvas_container"
                className="top-0 left-0 w-full h-full fixed z-0"
            >
                <Canvas linear flat dpr={[1, 2]}>
                    <StarBackground track={starView} index={1} numStars={400} />
                </Canvas>
            </div>
        </div>
    );
}
