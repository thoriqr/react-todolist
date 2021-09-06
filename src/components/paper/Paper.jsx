/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { useTheme } from "@emotion/react";
import PropTypes from "prop-types";

import * as styles from "./paper.styles";

const Paper = ({ children }) => {
  const theme = useTheme();
  return (
    <div css={styles.paper({ theme })}>
      <div css={styles.frame({ theme })}>{children}</div>
    </div>
  );
};

Paper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default Paper;
