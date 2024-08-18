import { COLORS_BY_INDEX } from "../constants/colorsByIndex";

export function getColorByIndex(value) {
  return Object.keys(COLORS_BY_INDEX).find(
    (key) => COLORS_BY_INDEX[key] === value
  );
}
