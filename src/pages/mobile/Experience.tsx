import {
    Timeline,
    TimelineConnector,
    TimelineContent,
    TimelineDot,
    TimelineItem,
    timelineItemClasses,
    TimelineSeparator,
} from "@mui/lab";
import { myExperience } from "../Experience.tsx";
import MobileSectionTitle from "./SectionTitle.tsx";

export default function MobileExperience({ scrollRef }: { scrollRef: any }) {
    return (
        <div ref={scrollRef} id="experience">
            <MobileSectionTitle title="Experience" />
            <Timeline
                sx={{
                    [`& .${timelineItemClasses.root}:before`]: {
                        flex: 0,
                        padding: 0,
                    },
                }}
            >
                {myExperience.map((e, i) => (
                    <TimelineItem key={i}>
                        <TimelineSeparator>
                            <TimelineDot
                                color={(e.iconColor || "info") as any}
                            />
                            {i < myExperience.length - 1 && (
                                <TimelineConnector />
                            )}
                        </TimelineSeparator>

                        <TimelineContent>
                            <div>
                                <h3 className="inline">{e.title}</h3>{" "}
                                <span className="inline font-300">
                                    {e.company}
                                </span>
                                <br />
                                <span className="italic">
                                    {e.from.month} {e.from.year}
                                    {e.current ? (
                                        <> &mdash; Present</>
                                    ) : (
                                        e.to && (
                                            <>
                                                {" "}
                                                &mdash; {e.to.month} {e.to.year}
                                            </>
                                        )
                                    )}
                                    ,{" "}
                                    <span className="inline-block">
                                        {e.location}
                                    </span>
                                </span>{" "}
                                <br />
                                <ul className="text-[1rem]">
                                    {e.desc.map((e2, i2) => (
                                        <li key={i2}>{e2}</li>
                                    ))}
                                </ul>
                            </div>
                        </TimelineContent>
                    </TimelineItem>
                ))}
            </Timeline>
        </div>
    );
}
