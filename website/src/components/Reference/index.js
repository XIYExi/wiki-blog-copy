import React from "react";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";
import ThemedImage from "@theme/ThemedImage";

export default function ReferenceList({ customStyle, data = [] }) {
  return (
    <div style={customStyle} className={styles.unorderedList}>
      <ul>
        {data.map((item, idx) => {
          return (
            <li className={styles.listItem} key={idx}>
              <ThemedImage
                sources={{
                  light: item.src,
                  dark: item.srcDark ? item.srcDark : item.src,
                }}
                alt={item.alt}
                loading="lazy"
              />
              <div className={styles.title}>{item.title + ":"}&nbsp;</div>
              <Link to={item.link}>
                <div className={styles.subTitle}>{item.subTitle}</div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
