import styles from "./styles.module.scss";

export default function Select({ label, options }) {
  return (
    <div className={styles.botao}>
      <div className={styles.label}>{label}</div>
      <select className={styles.select}>
        {options.map((option) => {
          return <option>{option}</option>;
        })}
      </select>
    </div>
  );
}
