// import React, { useState } from "react";
// import { FaFacebook } from "react-icons/fa";
// import { FcGoogle } from "react-icons/fc";
// import { Link } from "react-router";

// const CardComponents = () => {
//   const [formData, setFormData] = useState({
//     identity: "",
//     password: "",
//   });

//   const [errors, setErrors] = useState({});
//   const [showPassword, setShowPassword] = useState(false);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const validate = () => {
//     let err = {};

//     if (!formData.identity) {
//       err.identity = "Phone number or email is required";
//     }

//     if (!formData.password) {
//       err.password = "Password is required";
//     } else if (formData.password.length < 6) {
//       err.password = "Password must be at least 6 characters";
//     }

//     setErrors(err);
//     return Object.keys(err).length === 0;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validate()) {
//       alert("Login Successful ✅ (Daraz Style)");
//       console.log(formData);
//     }
//   };

//   return (
//     <div style={styles.page}>
//       <div style={styles.card}>
//         <h2 style={styles.title}>Welcome to Shop-Sphere Please login..</h2>
//         <p style={styles.subtitle}>Login to your account</p>

//         <form onSubmit={handleSubmit} style={styles.form}>
//           {/* Phone or Email */}
//           <input
//             type="text"
//             name="identity"
//             placeholder="Phone Number or Email"
//             value={formData.identity}
//             onChange={handleChange}
//             style={styles.input}
//           />
//           {errors.identity && (
//             <p style={styles.error}>{errors.identity}</p>
//           )}

//           {/* Password */}
//           <div style={styles.passwordWrapper}>
//             <input
//               type={showPassword ? "text" : "password"}
//               name="password"
//               placeholder="Password"
//               value={formData.password}
//               onChange={handleChange}
//               style={styles.passwordInput}
//             />
//             <span
//               style={styles.eye}
//               onClick={() => setShowPassword(!showPassword)}
//             >
//               👁
//             </span>
//           </div>
//           {errors.password && (
//             <p style={styles.error}>{errors.password}</p>
//           )}

//           {/* Forgot Password */}
//           <div style={styles.forgotBox}>
//             <span style={styles.forgotText}><Link to={"/ForgotPassword"}>Forgot Password?</Link></span>
         
//           </div>

//           <button type="submit" style={styles.loginBtn}>
//             LOGIN
//           </button>
//         </form>
//         <div style={{
//     display: "flex",
//     gap: "12px",
//     marginTop: "15px",
//     flexWrap: "wrap",
//     justifyContent: "center",
//   }}>
//   {/* Facebook */}
//   <button
//     style={{
//       flex: "1 1 140px",
//       backgroundColor: "#1877f2",
//       border: "none",
//       borderRadius: "6px",
//       padding: "10px",
//       cursor: "pointer",
//     }}>
//     <Link to="#" style={{
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         gap: "8px",
//         textDecoration: "none",
//         color: "#fff",
//         fontSize: "15px",
//         fontWeight: "500",
//       }}>
//       <FaFacebook style={{ fontSize: "18px" }} />
//       Facebook
//     </Link>
//   </button>

//   {/* Google */}
//   <button style={{ flex: "1 1 140px",backgroundColor: "#f5f5f5",
//       border: "1px solid #ddd",
//       borderRadius: "6px",
//       padding: "10px",
//       cursor: "pointer",}}>

//     <Link to="#" style={{
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         gap: "8px",
//         textDecoration: "none",
//         color: "#000",
//         fontSize: "15px",
//         fontWeight: "500",
//       }}>
//       <FcGoogle style={{ fontSize: "18px" }} />
//       Google
//     </Link>
//   </button>
//     </div>
//       </div>
//     </div>
//   );
// };

// export default CardComponents;

// /* Inline CSS */
// const styles = {
//   page: {
//     minHeight: "100vh",
//     background: "#f5f5f5",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     fontFamily: "Arial, sans-serif",
//   },
//   card: {
//     width: "360px",
//     background: "#fff",
//     padding: "25px",
//     borderRadius: "6px",
//     boxShadow: "0 4px 15px rgba(0,0,0,0.15)",
//   },
//   title: {
//     textAlign: "center",
//     color: "#f85606", // Daraz orange
//     marginBottom: "5px",
//   },
//   subtitle: {
//     textAlign: "center",
//     fontSize: "14px",
//     color: "#666",
//     marginBottom: "20px",
//   },
//   form: {
//     display: "flex",
//     flexDirection: "column",
//   },
//   input: {
//     padding: "10px",
//     fontSize: "15px",
//     marginBottom: "8px",
//     borderRadius: "4px",
//     border: "1px solid #ccc",
//     outline: "none",
//   },
//   passwordWrapper: {
//     position: "relative",
//     marginBottom: "8px",
//   },
//   passwordInput: {
//     width: "100%",
//     padding: "10px 40px 10px 10px",
//     fontSize: "15px",
//     borderRadius: "4px",
//     border: "1px solid #ccc",
//     outline: "none",
//   },
//   eye: {
//     position: "absolute",
//     right: "10px",
//     top: "50%",
//     transform: "translateY(-50%)",
//     cursor: "pointer",
//     fontSize: "16px",
//   },
//   error: {
//     color: "red",
//     fontSize: "12px",
//     marginBottom: "6px",
//   },
//   forgotBox: {
//     textAlign: "right",
//     marginBottom: "15px",
//   },
//   forgotText: {
//     fontSize: "13px",
//     color: "#1a73e8",
//     cursor: "pointer",
//   },
//   loginBtn: {
//     padding: "10px",
//     background: "#f85606",
//     color: "#fff",
//     border: "none",
//     borderRadius: "4px",
//     fontSize: "16px",
//     cursor: "pointer",
//   },
// };

import React, { useState, useEffect } from "react";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router";

const CardComponents = () => {
  const images = [
    "https://images.unsplash.com/photo-1508780709619-79562169bc64?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
  ];

  const [bgIndex, setBgIndex] = useState(0);

  const [formData, setFormData] = useState({
    identity: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % images.length);
    }, 4000); // 4 seconds
    return () => clearInterval(interval);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let err = {};
    if (!formData.identity) err.identity = "Phone number or email is required";
    if (!formData.password) {
      err.password = "Password is required";
    } else if (formData.password.length < 6) {
      err.password = "Password must be at least 6 characters";
    }
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Login Successful ✅");
      console.log(formData);
    }
  };

  return (
    <div
      style={{
        ...styles.page,
        backgroundImage: `url(${images[bgIndex]})`,
      }}
    >
      <div style={styles.overlay}></div>

      <div style={styles.card}>
        <h2 style={styles.title}>Welcome to Shop-Sphere</h2>
        <p style={styles.subtitle}>Login to your account</p>

        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="text"
            name="identity"
            placeholder="Phone Number or Email"
            value={formData.identity}
            onChange={handleChange}
            style={styles.input}
          />
          {errors.identity && <p style={styles.error}>{errors.identity}</p>}

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

          <div style={styles.forgotBox}>
            <span style={styles.forgotText}>
              <Link to={"/ForgotPassword"}>Forgot Password?</Link>
            </span>
          </div>

          <button type="submit" style={styles.loginBtn}>
            LOGIN
          </button>
        </form>

        {/* Social Login Buttons */}
        <div
          style={{
            display: "flex",
            gap: "12px",
            marginTop: "15px",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {/* Facebook */}
          <button
            style={{
              flex: "1 1 140px",
              backgroundColor: "#1877f2",
              border: "none",
              borderRadius: "6px",
              padding: "10px",
              cursor: "pointer",
            }}
          >
            <Link
              to="#"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                textDecoration: "none",
                color: "#fff",
                fontSize: "15px",
                fontWeight: "500",
              }}
            >
              <FaFacebook style={{ fontSize: "18px" }} />
              Facebook
            </Link>
          </button>

          {/* Google */}
          <button
            style={{
              flex: "1 1 140px",
              backgroundColor: "#f5f5f5",
              border: "1px solid #ddd",
              borderRadius: "6px",
              padding: "10px",
              cursor: "pointer",
            }}
          >
            <Link
              to="#"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                textDecoration: "none",
                color: "#000",
                fontSize: "15px",
                fontWeight: "500",
              }}
            >
              <FcGoogle style={{ fontSize: "18px" }} />
              Google
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardComponents;

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
    background: "rgba(0,0,0,0.5)",
  },
  card: {
    position: "relative",
    width: "360px",
    padding: "25px",
    background: "#fff",
    borderRadius: "6px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.25)",
    zIndex: 1,
    textAlign: "center",
  },
  title: {
    color: "#f85606",
    marginBottom: "5px",
  },
  subtitle: {
    fontSize: "14px",
    color: "#666",
    marginBottom: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  input: {
    padding: "10px",
    fontSize: "15px",
    marginBottom: "8px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    outline: "none",
  },
  passwordWrapper: {
    position: "relative",
    marginBottom: "8px",
  },
  passwordInput: {
    width: "100%",
    padding: "10px 40px 10px 10px",
    fontSize: "15px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    outline: "none",
  },
  eye: {
    position: "absolute",
    right: "10px",
    top: "50%",
    transform: "translateY(-50%)",
    cursor: "pointer",
    fontSize: "16px",
  },
  error: {
    color: "red",
    fontSize: "12px",
    marginBottom: "6px",
  },
  forgotBox: {
    textAlign: "right",
    marginBottom: "15px",
  },
  forgotText: {
    fontSize: "13px",
    color: "#1a73e8",
    cursor: "pointer",
  },
  loginBtn: {
    padding: "10px",
    background: "#f85606",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    fontSize: "16px",
    cursor: "pointer",
  },
};
