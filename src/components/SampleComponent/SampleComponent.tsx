import React from "react";

import { SampleComponentProps } from "./SampleComponent.types";

import styles from "./styles.module.scss";

const SampleComponent: React.FC<SampleComponentProps> = ({ text }) => (
  <div className={styles.test}>
    <h3>This is a Sample component</h3>
    <div data-testid="sample-text">{text}</div>
  </div>
);

export default SampleComponent;
