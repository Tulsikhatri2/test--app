import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";

const LogoutButton = () => {

    const router = useRouter()
    const handleLogout = () => {
        toast((t) => (
          <span style={{ width: "20vw" }}>
            <b>Are you sure you want to logout?</b>
            <br />
            <button
              className="dismissButton"
              onClick={() => toast.dismiss(t.id)}
            >
              No
            </button>
            <button
              className="deleteButton"
              onClick={() => {
                localStorage.clear()
                router.push("/auth/login")
                toast.success("Logged out", { duration: 1000,
                  style:{
                     backgroundColor:"black",
                      color:"white"
                  }
                 });
                toast.dismiss(t.id);
              }}
            >
              Yes
            </button>
          </span>
        ),{
          style:{
            marginTop:"15vh",
          }
        });
      };

  return (
    <div>
      <button
        className="w-[100%] text-white bg-neutral-800 border-2 border-red-800 hover:bg-red-800 
          font-medium rounded-3xl text-xs px-5 py-2.5 focus:bg-red-800 mt-3 mr-3"
        onClick={() => {
          handleLogout();
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default LogoutButton;
