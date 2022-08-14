import styles from '../styles/Main.module.scss';
import Meta from '../components/Meta';

export default function staff() {
  return (
    <>
      <Meta title='Grace Lutheran Church | Staff' />
      <main>
        <div className={styles.topStaff}>
          <h1>Staff</h1>
        </div>

        <section className={styles.staff}>
          <div className={styles.container}>
            <div className={styles.card}>
              <div className={styles.image}>
                <img src='/staff-1.png' alt='Frank Yraguen' />
              </div>
              <h1>Frank Yraguen</h1>
            </div>
            <div className={styles.card}>
              <div className={styles.image}>
                <img src='/staff-2.png' alt='Kerri Wenger' />
              </div>

              <h1>Kerri Wenger</h1>
            </div>
            <div className={styles.card}>
              <div className={styles.image}>
                <img src='/staff-3.png' alt='Pattie Baker' />
              </div>

              <h1>Pattie Baker</h1>
            </div>
          </div>

          <section className={styles.salm}>
            <h1>All of our staff are currently SALMS</h1>
            <p>
              Synod-authorized lay ministers (SALMs) are called and authorized to serve their home
              congregation under the mentorship of a cooperating pastor in the Synod. In their home
              congregation, SALMs may lead worship, may preside at Holy Communion and baptism, and
              they complete the same regular ethics and boundary trainings as rostered ministers in
              the Oregon Synod.
            </p>
            <p>
              At Grace Lutheran, we have a team of SALMs who lead worship, offer homilies, and enjoy
              community outreach with their ELCA congregation locally and around the region. The
              Grace Lutheran SALM team members serve as volunteers and do not receive monetary
              compensation from the congregation or the Oregon Synod. SALMs must be re-authorized by
              the Oregon Bishop on a yearly basis.
            </p>
            <a
              href='http://oregonsynod.org/index.php/about/salm_layeducation/'
              target='_blank'
              rel='noreferrer'>
              More Information
            </a>
          </section>
          <div className={styles.staffInfo}>
            <h2>Frank Yraguen</h2>
            <p>
              Frank is an octogenarian who was raised Catholic and never planned to be active in lay
              leadership of any church, but he became a Lutheran when he was married to his wife
              Patty 57 years ago. His career has included five years in the Marine Corps, time as
              Malheur County&apos;s District Attorney, and over 44 years as an Oregon judge.
            </p>
            <h2>Kerri Wenger</h2>
            <p>
              Kerri was a professor and education researcher who prepared rural teachers for diverse
              students for over 20 years. Now she happily helps run her husband&apos;s mobile
              veterinary practice and tries to keep track of all the creatures on their small farm.
              She and her husband Dave have two young adult children who were raised in Vale.
            </p>
            <h2>Pattie Baker</h2>
            <p>
              Pattie came to Grace Lutheran looking for peace with her young family. She has brought
              her trademark enthusiasm and humor to all aspects of her life, including work as an
              accountant, as a sales representative for agricultural products, time spent running
              businesses large and small, and her current endeavors keeping mama cows and many other
              animals on her farm happy and healthy. Pattie also enjoys her work as an advocate for
              the ageing and the homeless.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
