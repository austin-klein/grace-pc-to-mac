import styles from "../styles/Main.module.scss";
import Meta from "../components/Meta";

export default function events() {
    return (
        <>
            <Meta title="Grace Lutheran Church | Events" />
            <main>
                <div className={styles.topEvent}>
                    <h1>Events</h1>
                </div>
                <section className={styles.events}>
                    <div className={styles.container}>
                        <div className={styles.image}>
                            <img src="/church-3.jpeg" alt="weekly worship" />
                        </div>
                        <div className={styles.content}>
                            <h1>Weekly Worship</h1>
                            <p>
                                We have worship every single Sunday at 11:00AM, come be with us!
                            </p>
                        </div>
                    </div>
                    <div className={styles.container}>
                        <div className={styles.image}>
                            <img src="/event-1.jpeg" alt="church potluck" />
                        </div>
                        <div className={styles.content}>
                            <h1>Potluck</h1>
                            <p>
                                We have a church potluck every fourth Sunday of the month, and it is
                                a great time of fellowship.
                            </p>
                        </div>
                    </div>
                    <div className={styles.container}>
                        <div className={styles.image}>
                            <img src="/event-4.jpg" alt="Christmas Eve Service" />
                        </div>
                        <div className={styles.content}>
                            <h1>Christmas Eve & Easter Services</h1>
                            <p>
                                We have annual Christmas Eve and Easter services, come join us in
                                celebration!
                            </p>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
