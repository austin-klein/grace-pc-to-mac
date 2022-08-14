import styles from '../styles/Main.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>Service Time: 11:00AM</p>
        <p>
          Address:
          <a
            href='https://www.google.com/maps/place/602+Yakima+St+S,+Vale,+OR+97918/@43.9782879,-117.2522995,17z/data=!3m1!4b1!4m5!3m4!1s0x54aff163f807e0ef:0xf50c93236e88361f!8m2!3d43.9782841!4d-117.2501108'
            target='_blank'
            rel='noreferrer'>
            602 Yakima St S, Vale, OR
          </a>
        </p>
        <p>
          Facebook Page:
          <a href='https://www.facebook.com/grace.lutheran.370' target='_blank' rel='noreferrer'>
            <img className={styles.facebook} src='/facebook.png' alt='facebook' />
          </a>
        </p>
      </div>
    </footer>
  );
}
