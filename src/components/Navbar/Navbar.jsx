import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { collection, getDocs, query, where } from "firebase/firestore";
import { auth, db } from '../../firebaseConfig/firebaseConfig'

const Navbar = () => {
  function GetCurrentUser() {
    const [user, setUser] = useState(" ")
    const usersCollectionRef = collection(db, "users")

    useEffect(() => {
      auth.onAuthStateChanged(
        userlogged => {
          if (userlogged) {
            const getUsers = async () => {
              const q = query(collection(db, "users"), where("uid", "==", userlogged.uid))
              // console.log(q);
              const data = await getDocs(q);
              setUser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
            }
            getUsers();
          }
          else {
            setUser(null);
          }
        })
    }, [])
    return user
  }
  const loggeduser = GetCurrentUser();

  const navigate = useNavigate()

  const handleLogout = () => {
    auth.signOut().then(() => {
      navigate("/login")
    })
  }

  return (
    <div>
      <div className="navbar">

        <div className="RightContainer">
          {!loggeduser && <nav>
            {/* <Link to="/">
              <button>Home</button>
            </Link> */}
            <Link to="/signup">
              <button>Register</button>
            </Link>
            <Link to="/">
              <button>Login</button>
            </Link>

          </nav>}

          {loggeduser && <nav>

            <Link to="/">
              <button>Home</button>
            </Link>
            <Link to="/baryani">
              <button>Biryani</button>
            </Link>
            <Link to="/burger">
              <button>Burger</button>
            </Link>
            <Link to="/pizza">
              <button>Pizza</button>
            </Link>
            <button className="logout-btn" onClick={handleLogout}>Logout</button>
          </nav>}

        </div>
      </div>


    </div>
  );
};

export default Navbar;
