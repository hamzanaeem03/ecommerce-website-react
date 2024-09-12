// import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// import { useState } from "react";
// import { auth } from "../utils/firebase";

// const Signin = () => {
    
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const handleSigninWithGoogle = ()=> {
//     const provider = new GoogleAuthProvider();
//     provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
//     signInWithPopup(auth, provider)
//   .then((result) => {
//     console.log('result => ',result )
//     // This gives you a Google Access Token. You can use it to access the Google API.
//     const credential = GoogleAuthProvider.credentialFromResult(result);
//     const token = credential.accessToken;
//     // The signed-in user info.
//     const user = result.user;
//     console.log('user => ',user )
    
//     // IdP data available using getAdditionalUserInfo(result)
//     // ...
//   }).catch((error) => {
      
//       // Handle Errors here.
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       // The email of the user's account used.
//       const email = error.customData.email;
//       // The AuthCredential type that was used.
//       const credential = GoogleAuthProvider.credentialFromError(error);
//       console.log('error => ',errorMessage ,errorCode)
//     // ...
//   });

//   }
//   return (
//     <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
//     <h2 className="text-2xl font-semibold text-center mb-4">
//       Login
//     </h2>
   
//     <form>
      
//       <div className="mb-6 flex flex-col items-start">
//         <label
//           htmlFor="email"
//           className="block text-gray-700 text-sm font-semibold mb-2"
//         >
//           Email Address
//         </label>
//         <input
//           type="email"
//           id="email"
//           className="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-indigo-500"
//           required=""
//           placeholder="hello@gmail.com"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//       </div>
//       <div className="mb-6 flex flex-col items-start">
//         <label
//           htmlFor="password"
//           className="block text-gray-700 text-sm font-semibold mb-2"
//         >
//           Password
//         </label>
//         <input
//           type="password"
//           id="password"
//           className="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-indigo-500"
//           required=""
//           placeholder="••••••••"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//       </div>
//       <button
//         type="button"
//         className="w-full mb-6  bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:indigo-500 focus:ring-opacity-50"
//       >
//         Register
//       </button>
//       <h5 className="mb-6">or</h5>
//       <button
//         type="button" onClick={handleSigninWithGoogle}
//         className="w-full mb-6  bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:indigo-500 focus:ring-opacity-50"
//       >
//         Google
//       </button>
//     </form>
//   </div>  )
// }

// export default Signin