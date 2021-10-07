import styles from "../styles/Main.module.scss"
import Link from "next/link";
import { useState, useEffect, useRef } from 'react';

function useInterval(callback, delay) {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    let id = setInterval(() => {
      savedCallback.current();
    }, delay);
    return () => clearInterval(id);
  }, [delay]);
}

export default function Home() {

  const [counter, setCounter] = useState(0);

  useInterval(() => {
    if (counter === 2) {
      setCounter(0);
    } else {
      setCounter(counter + 1);
    }

  }, 4000);

  return (
    <main>
      <section className={styles.slider}>
        {counter === 0 ? (<img src="/main.png" alt="Grace Lutheran building" />) : null}
        {counter === 1 ? (<img src="/church-3.jpeg" alt="Grace Lutheran inside" />) : null}
        {counter === 2 ? (<img src="/church.jpeg" alt="Grace Lutheran service" />) : null}

        <div className={styles.content}>
          <h1>Grace Lutheran Church</h1>
          <p>You are welcome here!</p>
        </div>
      </section>

      <section className={styles.info}>
        <div className={styles.container}>
          <div className={styles.card}>
            <div className={styles.image}>
              <img src="/leadership.png" alt="staff" />
            </div>

            <h1>Staff</h1>
            <p>
              We have amazing staff and leadership team that helps keep our church
              going.
            </p>
            <Link href="/staff" passHref>
              <button className={styles.btn}>Learn more</button>
            </Link>
          </div>
          <div className={`${styles.card} ${styles.center}`}>
            <div className={styles.image}>
              <img src="/main.png" alt="events" />
            </div>
            <h1>Services & Events</h1>
            <p>
              We have a lot of things going on at our church every week and you
              can be a part!
            </p>
            <Link href="/events">
              <button className={styles.btn}>Learn more</button>
            </Link>
          </div>
          <div className={styles.card}>
            <div className={styles.image}>
              <img src="/outreach.png" alt="outreach" />
            </div>
            <h1>Outreach</h1>
            <p>
              There are many ways that we help our local community through
              outreach.
            </p>
            <Link href="/outreach" passHref>
              <button className={styles.btn}>Learn more</button>
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.map}>
        <h1>Location</h1>
        <p>We are located in Vale Oregon right next to Vale High School</p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2871.082687246128!2d-117.2514640845797!3d43.97833953936298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54aff166e77ba06d%3A0xf54e2c03c8f4b116!2sGrace%20Lutheran%20Church!5e0!3m2!1sen!2sus!4v1623863498212!5m2!1sen!2sus"
          width="600"
          height="450"
          loading="lazy"
          title="Grace Lutheran Vale Location"
        ></iframe>
      </section>
    </main>
  )
}
