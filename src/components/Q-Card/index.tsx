import styles from "./index.module.css";

export default function (props: any) {
  const { name, avatar, qq } = props;
  return (
    <div className={styles.info}>
      <img src={avatar} />
      <div>
        <div>
          <span className={styles.title}>
          昵称
          </span>
          ：
          <span>{name}</span>
        </div>
        <div>
          <span className={styles.title}>
            qq号
          </span>
          ：<span>{qq}</span>
        </div>
      </div>
    </div>
  );
}
