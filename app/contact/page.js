"use client";

import { useState } from "react";
import styles from "./page.module.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <>
      <section className={styles.hero}>
        <div className={styles.decorations}>
          <span className={styles.star1}>⭐</span>
          <span className={styles.star2}>🌟</span>
          <span className={styles.shell}>🐚</span>
          <span className={styles.fish}>🐟</span>
        </div>
        <div className={styles.container}>
          <h1 className={styles.heroTitle}>Contact Us</h1>
          <p className={styles.heroSubtitle}>
            We&apos;d love to hear from you!
          </p>
        </div>
      </section>

      <section className={styles.contactSection}>
        <div className={styles.container}>
          <div className={styles.formCard}>
            {submitted ? (
              <div className={styles.successMessage}>
                <span className={styles.successIcon}>🎉</span>
                <h3>Message Sent!</h3>
                <p>Thank you for reaching out. We&apos;ll get back to you soon!</p>
              </div>
            ) : (
              <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                  <label htmlFor="name" className={styles.formLabel}>Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={styles.formInput}
                    placeholder="Your name"
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email" className={styles.formLabel}>Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={styles.formInput}
                    placeholder="Your email"
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="message" className={styles.formLabel}>Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={styles.formTextarea}
                    placeholder="Your message..."
                    rows="5"
                    required
                  />
                </div>

                <button type="submit" className={styles.submitBtn}>
                  Send Message ✨
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
