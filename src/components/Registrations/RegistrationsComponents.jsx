import React, { useState, useEffect } from "react";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";

 const RegistrationsComponents = () => {
  const images = [
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    "https://images.unsplash.com/photo-1508780709619-79562169bc64",
  ];

  const [bgIndex, setBgIndex] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // ============ background animation =========== // 
  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // =========== handle input ============ // 
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ============ validation ============= // 
  const validate = () => {
    let err = {};

    if (!formData.name.trim()) err.name = "Name is required";

    if (!formData.email) err.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      err.email = "Invalid email address";

    if (!formData.password) err.password = "Password is required";
    else if (formData.password.length < 6)
      err.password = "Password must be at least 6 characters";

    if (!formData.confirmPassword)
      err.confirmPassword = "Confirm password is required";
    else if (formData.confirmPassword !== formData.password)
      err.confirmPassword = "Passwords do not match";

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Registration Successful 🎉");
      console.log(formData);
    }
  };

  return (
    <>
    <div
      style={{
        ...styles.page,
        backgroundImage: `url(${images[bgIndex]})`,
      }}>
      <div style={styles.overlay}></div>

      <div style={styles.wrapper}>
        <h2 style={styles.title}>Create Account</h2>

        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            style={styles.input}
          />
          {errors.name && <p style={styles.error}>{errors.name}</p>}

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            style={styles.input}
          />
          {errors.email && <p style={styles.error}>{errors.email}</p>}

          {/* Password */}
          <div style={styles.passwordWrapper}>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              style={styles.passwordInput}
            />
            <span
              style={styles.eye}
              onClick={() => setShowPassword(!showPassword)}
            >
              👁
            </span>
          </div>
          {errors.password && <p style={styles.error}>{errors.password}</p>}

          {/* Confirm Password */}
          <div style={styles.passwordWrapper}>
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              style={styles.passwordInput}
            />
            <span
              style={styles.eye}
              onClick={() =>
                setShowConfirmPassword(!showConfirmPassword)
              }
            >
              👁
            </span>
          </div>
          {errors.confirmPassword && (
            <p style={styles.error}>{errors.confirmPassword}</p>
          )}

          <button type="submit" style={styles.registerBtn}>
            Register
          </button>
        </form>

        <Link to="/Login" style={styles.backLink}>
          ⬅ Back to Login
        </Link>
    <div style={{
    display: "flex",
    gap: "12px",
    marginTop: "15px",
    flexWrap: "wrap",
    justifyContent: "center",
  }}>
  {/* Facebook */}
  <button
    style={{
      flex: "1 1 140px",
      backgroundColor: "#1877f2",
      border: "none",
      borderRadius: "6px",
      padding: "10px",
      cursor: "pointer",
    }}>
    <Link to="#" style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "8px",
        textDecoration: "none",
        color: "#fff",
        fontSize: "15px",
        fontWeight: "500",
      }}>
      <FaFacebook style={{ fontSize: "18px" }} />
      Facebook
    </Link>
  </button>

  {/* Google */}
  <button style={{ flex: "1 1 140px",backgroundColor: "#f5f5f5",
      border: "1px solid #ddd",
      borderRadius: "6px",
      padding: "10px",
      cursor: "pointer",}}>

    <Link to="#" style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "8px",
        textDecoration: "none",
        color: "#000",
        fontSize: "15px",
        fontWeight: "500",
      }}>
      <FcGoogle style={{ fontSize: "18px" }} />
      Google
    </Link>
  </button>
    </div>
      </div>
    </div>   
    </>
  );
};

export default RegistrationsComponents;

/* Inline CSS */
const styles = {
  page: {
    minHeight: "100vh",
    backgroundSize: "cover",
    backgroundPosition: "center",
    transition: "background-image 1.5s ease-in-out",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  overlay: {
    position: "absolute",
    inset: 0,
    background: "rgba(0,0,0,0.6)",
  },
  wrapper: {
    position: "relative",
    width: "380px",
    padding: "25px",
    background: "#fff",
    borderRadius: "10px",
    boxShadow: "0 15px 40px rgba(0,0,0,0.35)",
    textAlign: "center",
    zIndex: 1,
    fontFamily: "Arial, sans-serif",
  },
  title: {
    marginBottom: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  input: {
    padding: "10px",
    marginBottom: "8px",
    fontSize: "15px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  passwordWrapper: {
    position: "relative",
    marginBottom: "8px",
  },
  passwordInput: {
    width: "100%",
    padding: "10px 40px 10px 10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  eye: {
    position: "absolute",
    right: "10px",
    top: "50%",
    transform: "translateY(-50%)",
    cursor: "pointer",
  },
  error: {
    color: "red",
    fontSize: "13px",
    textAlign: "left",
    marginBottom: "5px",
  },
  registerBtn: {
    padding: "10px",
    backgroundColor: "#16a34a",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    fontSize: "16px",
    cursor: "pointer",
    marginTop: "10px",
  },
  backLink: {
    display: "block",
    marginTop: "15px",
    color: "#2563eb",
    textDecoration: "none",
    fontSize: "14px",
  },
 };
