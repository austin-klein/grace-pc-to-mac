import styles from '../styles/Main.module.scss';
import Meta from '../components/Meta';

export default function outreach() {
  return (
    <>
      <Meta title='Grace Lutheran Church | Outreach' />
      <main>
        <div className={styles.topOutreach}>
          <h1>Outreach</h1>
        </div>

        <section className={styles.outreach}>
          <div className={styles.container}>
            <div className={styles.content}>
              <h1>Walking Together</h1>
              <p>
                Walking Together is a way to stay connected with our community! Every week we go out
                into our local community and interview people from all walks of life. <br />
                Check out our
                <a
                  href='https://www.facebook.com/grace.lutheran.370'
                  target='_blank'
                  rel='noreferrer'
                  className={styles.button}>
                  Facebook Page
                </a>
                for information!
              </p>
            </div>
            <div className={styles.image}>
              <img src='/outreach-2.jpg' alt='outreach' />
            </div>
          </div>
          <div className={styles.container}>
            <div className={styles.image}>
              <img src='/event-3.png' alt='outreach' />
            </div>
            <div className={styles.content}>
              <h1>Zoom Communion</h1>
              <p>
                We offer commuion over zoom as a way to still connect and be together. We can still
                be together even when we are apart!
              </p>
            </div>
          </div>
          <div className={styles.container}>
            <div className={styles.content}>
              <h1>Grace Facilities</h1>
              <p>
                We open our facility to the community at a very low cost! Our building is used for
                many different community events like receptions and boy scout meetings. We also open
                up our church wifi for kids who need it.
              </p>
            </div>
            <div className={styles.image}>
              <img src='/event-2.png' alt='outreach' />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
