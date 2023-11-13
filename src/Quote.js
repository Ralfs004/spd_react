import styles from "./Quote.module.css"

function Quote(props) {
    return (
      <div>
            <h1 className={styles.balts}>{props.author}</h1>
            <p className={styles.sarkans}>{props.quote}</p>
      </div>
    );
  }

  export default Quote;