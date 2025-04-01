"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "./Header.module.css";

const links = [
  { href: "/candidates", label: "Candidates" },
  { href: "/", label: "Jobs" },
];

export const Header = () => {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/">
          <p className={styles.logo}>Logo</p>
        </Link>

        <div className={styles.buttons_group}>
          <div className={styles.nav}>
            {links.map((link, idx) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={idx}
                  href={link.href}
                  className={`${styles.button_nav} ${
                    isActive ? styles.activeLink : ""
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <button className={styles.button_sign_in} type="button">
            Sign in
          </button>
        </div>
      </div>
    </header>
  );
};
