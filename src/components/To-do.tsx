import styles from "./To-do.module.css";
import plus from "../assets/plus.svg";

export function ToDo() {
  return (
    <div className={styles.profile}>
      <form className={styles.commentForm}>
        <input name="task" placeholder="Adicione uma nova tarefa" required />
        <button type="submit">Criar   <img src={plus} alt="logo to-do"/> </button>
      </form>
    </div>
  );
}
