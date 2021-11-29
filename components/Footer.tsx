import styles from "@styles/components/Layout.module.scss"; // Styles
import React, { ReactElement } from 'react';

export function Footer(): ReactElement {
    return (
        <div className={styles.footer}>
            <p>
                This website is developed and maintained by {" "}
                <a
                    href="LC.Army"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Longcat Army
                </a>
                .
            </p>
        </div>
    );
}
