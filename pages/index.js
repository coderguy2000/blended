import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  const [x, setX] = useState(10); //we rerender a a component by changing x
  const [isCountDownStart, setisCountDownStart] = useState(false);
  const router = useRouter();

  // we call this function at every render and update x.
  function fun() {
    if (x >= 1) {
      setTimeout(() => {
        setX(x - 1);
      }, 1000);
    } else {
      router.push("/feedback"); // when x becomes 0 we change the url
    }
  }
  const startCoundownTimer = () => {
    setisCountDownStart(true);
  };

  return (
    <div className={styles.container}>
      <h1>{x}</h1>
      {isCountDownStart ? (
        fun()
      ) : (
        <button onClick={startCoundownTimer}>Start CountDown Timer</button>
      )}
    </div>
  );
}
