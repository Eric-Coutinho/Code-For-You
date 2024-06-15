import styles from "./styles.module.scss";

export default function Select({ label, options }) {
  return (
    <div className={styles.botao}>
      <div className={styles.label}>{label}</div>
      <select className={styles.select}>
        <option disabled defaultChecked>
          Selecione
        </option>
        {options.map((option, key) => {
          return <option key={key} value={option}>{option}</option>;
        })}
      </select>
    </div>
  );
}
