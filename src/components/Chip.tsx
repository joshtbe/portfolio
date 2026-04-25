import { animated } from "@react-spring/web";

const Chip = ({
    content,
    styles = {},
}: {
    content: string;
    styles?: React.CSSProperties;
}) => (
    <span
        className=":uno: bg-chip p-[.05rem] rounded-[1px] m-[0.025rem]"
        style={styles}
    >
        {content}
    </span>
);

export const AnimatedChip = animated(
    ({
        content = "",
        opacity = 1,
        styles = {},
    }: {
        content: string;
        opacity?: number;
        styles?: React.CSSProperties;
    }) => (
        <span style={{ opacity: opacity }}>
            <Chip content={content} styles={styles} />
        </span>
    ),
);
export default Chip;
