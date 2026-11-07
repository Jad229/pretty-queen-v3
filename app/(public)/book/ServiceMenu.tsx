"use client";

import { useState } from "react";
import styles from "./book.module.css";

export type Service = {
  id: string;
  name: string;
  description: string;
  duration_minutes: number;
};

export default function ServiceMenu({ services }: { services: Service[] }) {
  const [selected, setSelected] = useState<Service | null>(null);

  return (
    <>
      <ul className={styles.menu}>
        {services.map((service) => (
          <li key={service.id} className={styles.card}>
            <h3 className={styles.name}>{service.name}</h3>
            <p className={styles.duration}>{service.duration_minutes} min</p>
            <p className={styles.description}>{service.description}</p>
            <button
              type="button"
              className={styles.bookButton}
              onClick={() => setSelected(service)}
            >
              Book
            </button>
          </li>
        ))}
      </ul>

      {selected ? (
        <div className={styles.backdrop} onClick={() => setSelected(null)}>
          <form
            className={styles.form}
            onClick={(event) => event.stopPropagation()}
          >
            <h3 className={styles.formTitle}>Book {selected.name}</h3>
            <p className={styles.formDuration}>{selected.duration_minutes} min</p>
            <label className={styles.label}>
              Name
              <input className={styles.input} name="name" type="text" required />
            </label>
            <label className={styles.label}>
              Phone
              <input className={styles.input} name="phone" type="tel" required />
            </label>
            <label className={styles.label}>
              Date
              <input className={styles.input} name="date" type="date" required />
            </label>
            <label className={styles.label}>
              Time
              <input className={styles.input} name="time" type="time" required />
            </label>
            <div className={styles.formActions}>
              <button type="button" className={styles.cancelButton} onClick={() => setSelected(null)}>
                Close
              </button>
            </div>
          </form>
        </div>
      ) : null}
    </>
  );
}
