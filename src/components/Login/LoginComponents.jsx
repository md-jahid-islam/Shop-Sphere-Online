import React, { useState, useEffect } from "react";
import { FaFacebook } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";

 const LoginComponents = () => {
  // ========== Background images Slide show at animations =========== //  
  const images = [
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    "https://images.unsplash.com/photo-1508780709619-79562169bc64",
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
  ];

  // =========== useState Hook =========== //
  const [bgIndex, setBgIndex] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});

  // ========== background animation ========== //
  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

 // ========= handleChange =========== // 
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

   // ========== validate ========= // 
  const validate = () => {
    let err = {};
    if (!formData.email) err.email = "You can't leave this empty.";
    if (!formData.password) err.password = "You can't leave this empty.";
    setErrors(err);
    return Object.keys(err).length === 0;
  };
 
  // ========== handleSubmit =========== // 
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) alert("Login Successful ✅");
  };

  return (
    <>
    <div style={{...styles.page, backgroundImage: `url(${images[bgIndex]})`,}}>
      <div style={styles.overlay}></div>

      <div style={styles.wrapper}>
        <h2 style={styles.title}>Welcome Back</h2>

        <form onSubmit={handleSubmit} style={styles.form}>
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} style={styles.input} />
          {errors.email && <p style={styles.error}>{errors.email}</p>}

          <div style={styles.passwordWrapper}>
            <input type={showPassword ? "text" : "password"} name="password" placeholder="Password" value={formData.password} onChange={handleChange} style={styles.passwordInput} />
            <span style={styles.eye} onClick={() => setShowPassword(!showPassword)}>
            👁
            </span>
          </div>
          {errors.password && <p style={styles.error}>{errors.password}</p>}

          <button style={styles.loginBtn}>Login</button>
        </form>

        <Link to="/Registrations" style={styles.registerLink}>
          ⬅ Go to Registration
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

 export default LoginComponents;

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
    background: "rgba(0,0,0,0.55)",
  },
  wrapper: {
    position: "relative",
    width: "360px",
    padding: "25px",
    background: "#fff",
    borderRadius: "10px",
    boxShadow: "0 15px 40px rgba(0,0,0,0.3)",
    textAlign: "center",
    zIndex: 1,
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
    marginBottom: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  passwordWrapper: {
    position: "relative",
    marginBottom: "10px",
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
  },
  loginBtn: {
    padding: "10px",
    background: "#2563eb",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "10px",
  },
  registerLink: {
    display: "block",
    marginTop: "15px",
    color: "#2563eb",
    textDecoration: "none",
    fontSize: "14px",
  },
 };
