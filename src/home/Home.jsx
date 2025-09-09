import styles from "./Home.module.scss";
import { FaBolt, FaLock, FaMobileAlt } from "react-icons/fa";

const Home = () => {
  return (
    <div className={styles.home}>
      {/* 🌟 Hero Section */}
      <section className={styles.hero}>
        <div className={styles.textContent}>
          <h1>Transform Your Digital Experience 🚀</h1>
          <p>
            Sai Products deliver cutting-edge solutions that blend performance,
            security, and design. Built for the future, trusted by innovators.
          </p>
          <button className={styles.ctaButton}>Launch Now</button>
        </div>
        <div className={styles.imageContent}>
          <img
            src="https://placehold.co/500x350?text=Product+Showcase"
            alt="Product Showcase"
          />
        </div>
      </section>

      {/* ⚡ Features Section */}
      <section className={styles.features}>
        <h2>Why Choose Us?</h2>
        <div className={styles.featureGrid}>
          <div className={styles.featureCard}>
            <FaBolt className={styles.icon} />
            <h3>High Performance</h3>
            <p>Optimized for speed and efficiency to keep you ahead.</p>
          </div>
          <div className={styles.featureCard}>
            <FaLock className={styles.icon} />
            <h3>Secure by Design</h3>
            <p>End-to-end security built into every solution we offer.</p>
          </div>
          <div className={styles.featureCard}>
            <FaMobileAlt className={styles.icon} />
            <h3>Mobile Friendly</h3>
            <p>Seamlessly responsive across devices, anytime, anywhere.</p>
          </div>
        </div>
      </section>

      {/* 🎯 Call-to-Action */}
      <section className={styles.ctaSection}>
        <h2>Ready to Get Started?</h2>
        <p>Join thousands of users who trust Sai Products.</p>
        <button className={styles.ctaButtonLarge}>Start Free Trial</button>
      </section>
    </div>
  );
};

export default Home;
