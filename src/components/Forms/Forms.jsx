// import React, { useState } from "react";
// import "./Forms.css";
// function Forms() {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");

//   function handleSubmit(event) {
//     event.preventDefault();
//     const formData = {
//       firstName: firstName,
//       lastName: lastName,
//       email: email,
//       password: password,
//       confirmPassword: confirmPassword,
//     };
//     props.sendDataSomewhere(formData);
//     setFirstName("");
//     setLastName("");
//     setEmail("");
//     setPassword("");
//     setConfirmPassword("");
//   }

//   return (
//     <section id="forms">
//       <div className="form-container">
//         <form onSubmit={handleSubmit}>
//           <div className="form-element">
//             <label htmlFor="firstname">First Name</label>
//             <input
//               type="text"
//               id="firstname"
//               placeholder="Enter your first name"
//               value={firstName}
//               onChange={(e) => setFirstName(e.target.value)}
//             />
//           </div>

//           <div className="form-element">
//             <label htmlFor="lastname">Last Name</label>
//             <input
//               type="text"
//               id="lastname"
//               placeholder="Enter your last name"
//               value={lastName}
//               onChange={(e) => setLastName(e.target.value)}
//             />
//           </div>

//           <div className="form-element">
//             <label htmlFor="email">Email</label>
//             <input
//               type="email"
//               id="email"
//               placeholder="Enter your email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>

//           <div className="form-element">
//             <label htmlFor="password">Password</label>
//             <input
//               type="password"
//               id="password"
//               placeholder="Enter your password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </div>

//           <div className="form-element">
//             <label htmlFor="confirmpassword">Confirm Password</label>
//             <input
//               type="password"
//               id="confirmpassword"
//               placeholder="Confirm your password"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//             />
//           </div>

//           <button type="submit" className="form-submit">
//             Submit
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// }

// export default Forms;
