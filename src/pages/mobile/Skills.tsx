import MobileSectionTitle from "./SectionTitle.tsx";
import { spokes as skillList } from "../Skills.tsx";

export default function MobileSkills({ scrollRef }: { scrollRef: any }) {
    return (
        <div ref={scrollRef} id="skills">
            <MobileSectionTitle title="Skills" />
            <div>
                {skillList.map((s, i) => (
                    <div key={i} className="p-4">
                        <h3 className="inline">{s.title}</h3>
                        <p />
                        {typeof s.element === "function"
                            ? s.element(i, true, true)
                            : s.element}
                    </div>
                ))}
            </div>
        </div>
    );
}
