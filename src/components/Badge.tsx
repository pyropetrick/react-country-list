import { BadgeLabel } from "../types/BadgeLabel";
import { Color } from "../types/enum";
interface IBadgeLabel {
  label: {
    name: BadgeLabel;
    numbers: number;
  };
}
export const Badge = ({ label: { name, numbers } }: IBadgeLabel) => {
  return (
    <div
      className={`badge bg-${
        name === "area" ? Color.Primary : Color.Secondary
      } col-2 py-2`}
    >
      {name}: {numbers}
    </div>
  );
};
