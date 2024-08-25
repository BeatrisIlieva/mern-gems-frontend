import { useState } from "react";

import { Text } from "./Text/Text";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";

import styles from "./QuestionMark.module.css";

export const QuestionMark = ({ text }) => {
  const [hoveredQuestionMark, setHoveredQuestionMark] = useState(false);

  const onHoverQuestionMark = () => {
    setHoveredQuestionMark(true);
  };

  const onUnhoverQuestionMark = () => {
    setHoveredQuestionMark(false);
  };

  return (
    <span>
      {hoveredQuestionMark && <Text text={text} />}
      <FontAwesomeIcon
        icon={faQuestion}
        className={styles["icon"]}
        onMouseEnter={() => onHoverQuestionMark()}
        onMouseLeave={() => onUnhoverQuestionMark()}
      />
    </span>
  );
};
