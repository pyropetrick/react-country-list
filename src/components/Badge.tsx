import {BadgeLabel} from "../types/BadgeLabel";
import {Color} from "../types/enum";

interface IProps {
    label: BadgeLabel;
    count: number;
    color: Color;
}

export const Badge = ({label, count, color}: IProps) => {
    return (
        <div
            className={`badge bg-${color} col-2 py-2`}
        >
            {label}: {count}
        </div>
    );
};
