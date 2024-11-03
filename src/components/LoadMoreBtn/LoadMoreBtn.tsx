import styles from "./LoadMoreBtn.module.css";

interface LoadMoreBtnProps {
  onClick: () => void;
}

function LoadMoreBtn({ onClick }: LoadMoreBtnProps) {
  return (
    <div className={styles.wrapper}>
      <button className={styles.button} onClick={onClick} type="button">
        Load more
      </button>
    </div>
  );
}

export default LoadMoreBtn;
