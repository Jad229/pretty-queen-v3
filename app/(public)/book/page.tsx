import { createClient } from "@/lib/supabase/server";
import ServiceMenu from "./ServiceMenu";
import styles from "./book.module.css";

export default async function BookPage() {
  const supabase = await createClient();
  const { data: services, error } = await supabase
    .from("services")
    .select("id, name, description, duration_minutes")
    .order("name");

  return (
    <section className={styles.section}>
      <div className={styles.headingContainer}>
        <h2 className={styles.heading}>Book a Service</h2>
      </div>
      {error ? (
        <p className={styles.error}>Services could not be loaded.</p>
      ) : (
        <ServiceMenu services={services ?? []} />
      )}
    </section>
  );
}
