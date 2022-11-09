import { BadgeLabel } from "../types/badge";
import { Color } from "../types/color";

interface IProps {
  label: BadgeLabel;
  count: number;
  color: Color;
}

export const Badge = ({ label, count, color }: IProps) => {
  return (
    <span className={`badge bg-${color} col-2 py-2`}>
      {label}: {count}
    </span>
  );
};
