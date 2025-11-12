import { a, useSpring } from "@react-spring/three";
import {
    GradientTexture,
    GradientType,
    PerspectiveCamera,
} from "@react-three/drei";
import { GalaxyRingPoints } from "../../assets/StarPoints";
import { unNormalizePoint } from "../../utils/Math";
import { DodecagonPoints } from "../shapes/defaultPoints";
import { ShapeTypes } from "../shapes/Shapes";
import TextAndShapes from "../shapes/TextAndShapes";
import Stars from "./Stars";
import { useWindow } from "../../utils/Hooks";

function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView();
}

const TWO_PI: number = 2 * Math.PI;
const galaxyRadius = 300;

function Content({ periodTime = 20, rotate = true }: any) {
    const { aspect } = useWindow();

    const [galaxyDiskSpring] = useSpring(() => ({
        args: [galaxyRadius, 120],
    }));

    const [rotateProp] = useSpring(
        () => ({
            from: { rotation: [0, 0, 0] },
            to: { rotation: [0, 0, rotate ? TWO_PI : 0] },
            config: { duration: periodTime * 1000 },
            loop: true,
        }),
        [rotate]
    );

    const [counterRotate] = useSpring(
        () => ({
            from: { rotation: [0, 0, 0] },
            to: { rotation: [0, 0, rotate ? -TWO_PI : 0] },
            config: { duration: periodTime * 1000 },
            loop: true,
        }),
        [rotate]
    );

    const titleDuration = 2000;

    return (
        <a.group>
            <a.group {...(rotateProp as any)}>
                <Stars
                    points={GalaxyRingPoints}
                    pointTransform={(pt: any) => [
                        ...unNormalizePoint(
                            [pt[0], pt[1]],
                            galaxyRadius,
                            galaxyRadius
                        ),
                        pt[2],
                        pt[3],
                        pt[4],
                    ]}
                />
                <a.mesh position={[0, 0, 0]}>
                    <a.circleGeometry {...(galaxyDiskSpring as any)} />
                    <meshStandardMaterial transparent opacity={0.25}>
                        <GradientTexture
                            stops={[0, 0.2, 1]}
                            colors={["orange", "yellow", "#15181a"]}
                            size={2048}
                            width={2048}
                            type={GradientType.Radial}
                            outerCircleRadius={"auto"}
                        />
                    </meshStandardMaterial>
                </a.mesh>
                {/* Center Piece */}
                <TextAndShapes
                    onClick={() => {
                        document.getElementById("about")?.scrollIntoView();
                    }}
                    position={[0, 0, 0]}
                    groupTextArgs={{ rotation: counterRotate.rotation }}
                    text={[
                        {
                            content: "Joshua Bernstein",
                            position: [0, 0, 0],
                            centered: true,
                            textArgs: { size: 14, depth: 0.1 },
                        },
                        {
                            content: "Programmer | Dog Dad | Huge Nerd",
                            position: [0, -15, 0],
                            centered: true,
                            textArgs: { size: 5, depth: 0.1 },
                        },
                    ]}
                    shapes={[
                        {
                            type: ShapeTypes.TRIANGLE,
                            args: {
                                factor: 210,
                                position: [0, 0, -1],
                                transitionDelay: 0,
                                transitionDelayModifier: 0,
                                lineDuration: titleDuration,
                                fillOpacity: 0.5,
                                fillDuration: 3000,
                                fillConfig: { color: "white" },
                            },
                        },
                        {
                            type: ShapeTypes.HEXAGON,
                            args: {
                                factor: 95,
                                transitionDelay: 0,
                                transitionDelayModifier: 0,
                                lineDuration: titleDuration,
                                fillOpacity: 0.5,
                                fillDuration: 3000,
                                fillConfig: { color: "white" },
                            },
                        },
                    ]}
                />
            </a.group>
            {aspect > 0.8 && (
                <group visible={true}>
                    {/* Skills */}
                    <TextAndShapes
                        onClick={() => scrollTo("skills")}
                        position={[120, -130, 0]}
                        text={[
                            {
                                content: "Skills",
                                textArgs: { depth: 0.2, size: 10 },
                                centered: true,
                                duration: 1500,
                                delay: 0,
                            },
                        ]}
                        shapes={[
                            {
                                type: ShapeTypes.TRIANGLE,
                                args: {
                                    factor: 85,
                                    rotation: [0, 0, Math.PI / 3],
                                    delay: titleDuration + 1000,
                                },
                            },
                            {
                                type: ShapeTypes.RING,
                                args: {
                                    position: [0, 0, -0.1],
                                    radius: 40,
                                    lineThickness: 1,
                                    delay: titleDuration + 1000,
                                },
                            },
                        ]}
                    />

                    {/* Education */}
                    <TextAndShapes
                        onClick={() => scrollTo("education")}
                        position={[-200, 0, 0]}
                        text={[
                            {
                                content: "Education",
                                textArgs: { depth: 0.2, size: 10 },
                                centered: true,
                                duration: 1500,
                                delay: 0,
                            },
                        ]}
                        shapes={[
                            {
                                type: ShapeTypes.SQUARE,
                                args: {
                                    factor: 38,
                                    rotation: [0, 0, 0],
                                    delay: titleDuration + 500,
                                },
                            },
                            {
                                type: ShapeTypes.BASE,
                                args: {
                                    points: DodecagonPoints,
                                    factor: 45,
                                    delay: titleDuration + 500,
                                },
                            },
                        ]}
                    />

                    {/* Experience */}
                    <TextAndShapes
                        onClick={() => scrollTo("experience")}
                        position={[-120, -130, 0]}
                        text={[
                            {
                                content: "Experience",
                                textArgs: { depth: 0.2, size: 10 },
                                centered: true,
                                duration: 1500,
                            },
                        ]}
                        shapes={[
                            {
                                type: ShapeTypes.OCTAGON,
                                args: {
                                    factor: 40,
                                    rotation: [0, 0, Math.PI / 8],
                                    delay: titleDuration + 1000,
                                },
                            },
                            {
                                type: ShapeTypes.OCTAGON,
                                args: {
                                    factor: 44,
                                    delay: titleDuration + 1000,
                                },
                            },
                        ]}
                    />

                    {/* Projects */}
                    <TextAndShapes
                        onClick={() => scrollTo("projects")}
                        position={[200, 0, 0]}
                        text={[
                            {
                                content: "Projects",
                                textArgs: { depth: 0.2, size: 10 },
                                centered: true,
                                duration: 1500,
                            },
                        ]}
                        shapes={[
                            {
                                type: ShapeTypes.SQUARE,
                                args: {
                                    factor: 40,
                                    rotation: [0, 0, Math.PI / 4],
                                    delay: titleDuration + 500,
                                },
                            },
                            {
                                type: ShapeTypes.HEXAGON,
                                args: {
                                    factor: 48,
                                    delay: titleDuration + 500,
                                },
                            },
                        ]}
                    />
                </group>
            )}
        </a.group>
    );
}

export default function Galaxy() {
    return (
        <>
            <PerspectiveCamera makeDefault position={[0, -100, 200]} fov={90} />
            <ambientLight intensity={0.85} />
            <Content rotate={true} periodTime={120} />
        </>
    );
}
