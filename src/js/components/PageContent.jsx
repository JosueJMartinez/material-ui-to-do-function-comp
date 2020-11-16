import React from "react";

export default function PageContent(props) {
  const styles = {
    height: "100vh",
    width: "100vw",
  };
  return <div style={styles}>{props.children}</div>;
}
