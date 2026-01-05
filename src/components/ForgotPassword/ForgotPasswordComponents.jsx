import React, { useState, useEffect } from "react";
import { Link } from "react-router";

 const ForgotPasswordComponents = () => {
  const images = [
    "https://images.unsplash.com/photo-1508780709619-79562169bc64?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
  ];

  const [bgIndex, setBgIndex] = useState(0);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % images.length);
    }, 4000); // 4 seconds per slide
    return () => clearInterval(interval);
  }, []);

  const handleChange = (e) => {
    setEmail(e.target.value);
    setError("");
    setSuccess("");
  };

  const validate = () => {
    if (!email) {
      setError("Email is required");
      return false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Invalid email address");
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSuccess("Password reset link sent! 📧");
      console.log("Password reset link for:", email);
      setEmail("");
    }
  };

  return (
    <div style={{
        ...styles.page,
        backgroundImage: `url(${images[bgIndex]})`,
      }}>
      <div style={styles.overlay}></div>
      <div style={styles.card}>
        <h2 style={styles.title}>Forgot Password?</h2>
        <p style={styles.subtitle}>
          Enter your email address to reset your password.
        </p>

        <form onSubmit={handleSubmit} style={styles.form}>
          <input type="email"
            placeholder="Email Address"
            value={email}
            onChange={handleChange}
            style={styles.input}
          />
          {error && <p style={styles.error}>{error}</p>}
          {success && <p style={styles.success}>{success}</p>}

          <button type="submit" style={styles.submitBtn}>
            Send Reset Link
          </button>
        </form>

        <p style={styles.backText}>
          <Link to="/Login">⬅ Back to Login</Link>
        </p>
      </div>
    </div>
  );
};

export default ForgotPasswordComponents;

/* Inline CSS */
const styles = {
  page: {
    minHeight: "100vh",
    backgroundSize: "cover",
    backgroundPosition: "center",
    transition: "background-image 1.5s ease-in-out",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    fontFamily: "Arial, sans-serif",
  },
  overlay: {
    position: "absolute",
    inset: 0,
    background: "rgba(0,0,0,0.4)", // overlay to make text readable
  },
  card: {
    position: "relative",
    width: "360px",
    padding: "25px",
    background: "#fff",
    borderRadius: "8px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.25)",
    zIndex: 1,
    textAlign: "center",
  },
  title: {
    marginBottom: "5px",
    color: "#f85606",
  },
  subtitle: {
    marginBottom: "20px",
    fontSize: "14px",
    color: "#555",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  input: {
    padding: "10px",
    fontSize: "15px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    marginBottom: "10px",
    outline: "none",
  },
  error: {
    color: "red",
    fontSize: "13px",
    marginBottom: "8px",
    textAlign: "left",
  },
  success: {
    color: "green",
    fontSize: "13px",
    marginBottom: "8px",
    textAlign: "left",
  },
  submitBtn: {
    padding: "10px",
    backgroundColor: "#f85606",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    fontSize: "16px",
    cursor: "pointer",
  },
  backText: {
    marginTop: "15px",
    fontSize: "14px",
    color: "#1a73e8",
  },
};
