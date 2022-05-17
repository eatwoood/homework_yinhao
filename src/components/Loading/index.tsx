import style from "./index.module.css";
export default function Loading(props: any) {
  return (
    <div className={style.loading}>
      <div className={style["spin-box"]}>
        <div className={style["spin"]}></div>
        <div>loading</div>
      </div>
    </div>
  );
}
