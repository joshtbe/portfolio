import {
    Button,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
} from "@mui/material";
import MobileSectionTitle from "./SectionTitle.tsx";
import { ReactNode, useMemo, useState } from "react";
import {
    projects as projectsList,
    projectMap,
    stackMap,
} from "../Projects.tsx";
import { getMonthYear } from "../../utils/Date.ts";
import svgs from "../../assets/svg/projects/index.ts";

function DE({ t, d }: { t: ReactNode | string; d: ReactNode | string }) {
    return (
        <>
            <dt
                style={{
                    fontSize: "larger",
                    textDecoration: "underline",
                    textUnderlineOffset: ".25rem",
                }}
            >
                {t}
            </dt>
            <dd className="font-300">{d}</dd>
        </>
    );
}

const miniSVGMap = Object.fromEntries(
    Object.keys(stackMap).map((s) => [
        s,
        <Button href={stackMap[s].link} target="_blank">
            <img src={svgs[s]} height={"50px"} />
        </Button>,
    ]),
);

export default function MobileProjects({ scrollRef }: { scrollRef: any }) {
    const [currentProjectId, setProjectId] = useState<string>("");
    const currentProject = useMemo(() => {
        const p = projectMap[currentProjectId];
        if (!p) return null;

        return {
            ...p,
            date: getMonthYear(p.completedDate),
        };
    }, [currentProjectId]);

    return (
        <div id="projects" ref={scrollRef}>
            <MobileSectionTitle title="Projects" />
            <div className="p-4">
                <FormControl sx={{ width: "100%" }} variant="standard">
                    <InputLabel>Select a Project</InputLabel>
                    <Select
                        value={currentProjectId}
                        onChange={(e) => setProjectId(e.target.value)}
                    >
                        {projectsList.map((e, i) => (
                            <MenuItem key={i} value={e.name}>
                                {e.title}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </div>
            {currentProject && (
                <div className="p-4">
                    <div className="max-w-max">
                        <h3 className="inline text-xl">
                            <Button
                                className="pl-0"
                                style={{ fontSize: "inherit" }}
                                target="_blank"
                                href={currentProject.link}
                            >
                                {currentProject.title}
                            </Button>
                        </h3>
                        <br />
                        <span className="italic">
                            {currentProject.subtitle}
                        </span>
                        <hr />
                    </div>

                    <dl>
                        <DE t={"When"} d={currentProject.date} />
                        <DE t={"Description"} d={currentProject.desc} />
                        <DE t={"Features"} d={currentProject.features} />
                        <DE
                            t={"Technologies"}
                            d={
                                <>
                                    {currentProject.stack.map((t, i) => (
                                        <span key={i}>{miniSVGMap[t]}</span>
                                    ))}
                                </>
                            }
                        />
                    </dl>
                </div>
            )}
        </div>
    );
}
