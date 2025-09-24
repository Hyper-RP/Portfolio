import { createContext, useEffect, useState } from "react";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../config/firestore";
import { toast } from "react-toastify";
import { tr } from "framer-motion/client";
// import { pre } from "framer-motion/client";

export const portfolioContext = createContext();

function Provider({ children }) {
  const Data = JSON.parse(process.env.REACT_APP_DATA);
  const abdData = JSON.parse(process.env.REACT_APP_ABDDATA);
  const[userName,setUserName]=useState();
  const[dialouge,setDialouge]=useState();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  
  const [gender, setGender] = useState();
  const [downloadPermission, setDownloadPermission] = useState(false);

  function redirectToContact(){
    toast.warn("Just a few details and we're good to go")
  }
  
  async function guess() {
    if (!formData.name) return;
    try {
      // console.log("guess api call")
      const response = await fetch(
        `https://api.genderize.io/?name=${formData.name}`
      );
      if (!response.ok) {
        throw new Error("time limit reached..");
      }
      const data = await response.json();
      // console.log(data);
      setGender(data.gender);
    } catch (e) {
      console.log(gender);
    }
  }

  function requiredHandler() {
    if (formData.name.split(" ").length < 2) {
      toast.warn(
        `${gender === "female" ? "Mr." : "Dear."} ${
          formData.name
        } u didn't enter your full name `
      );
      return false;
    } else if (!formData.email) {
      toast.warn(
        `${gender === "female" ? "Mrs." : "Dear."} ${
          formData.name
        } u Forgot to add your mail`
      );
      return false;
    } else if (!formData.message) {
      toast.warn(
        `${gender === "female" ? "Mrs." : "Dear."} ${
          formData.name
        } don't U have any message for Me...`
      );
      return false;
    } else {
      // alert("Thank you...");
      return true;
    }
  }

  async function writeUserData(e) {
    e.preventDefault();
    const isValid = requiredHandler();

    if (isValid) {
      try {
        const docRef = await addDoc(collection(db, "portfolio"), {
          name: formData.name,
          email: formData.email,
          message: formData.message,
         });
        setUserName(formData.name);
        setFormData(() => ({
          name: "",
          email: "",
          message: "",
        }));
        toast.success("Thank You "+(gender === "female" ? "Mrs." : "Dear.")+formData.name);
      } catch (e) {
        toast.error("something went wrong !!!");
        console.error("error to connect firestore : " + e);
      }
      setDownloadPermission(true);
    }
  }

  const getData = async () => {
    const data = await getDocs(collection(db, "portfolio"));
    data.forEach((doc) => {
      // console.log(doc.data());
    });
  };

  const nameMap = Data.reduce((acc, firstName) => {
    const [first, last] = firstName.split(" ");
    if (!acc[first]) {
      acc[first] = [];
    }
    acc[first].push(last);
    return acc;
  }, {});

  function nameIdentifier() {
    const isAbdName = data2Function();
    if (isAbdName) {
      alert("don't be too smart, sodun de ha baalish pana... ");
    } else if (nameMap[formData.name] && nameMap[formData.name].length > 1) {
      let multipleSurName = "";
      nameMap[formData.name].map((item) => {
        multipleSurName = multipleSurName + "\n" + item;
      });
      alert(`Let me guess your surname : ${multipleSurName}`);
    } else if (nameMap[formData.name] && nameMap[formData.name].length === 1) {
      setFormData((prev) => ({
        ...prev,
        name: formData.name + " " + nameMap[formData.name][0],
      }));
    } else {
      setFormData((prev) => ({ ...prev, name: formData.name }));
    }
  }

  function data2Function() {
    const firstName=formData.name.split(" ")[0];

    return abdData.some((item)=>item===firstName);
  }

  const value = {
    formData,
    setFormData,
    writeUserData,
    getData,
    guess,
    gender,
    nameIdentifier,
    nameMap,
    requiredHandler,
    userName,
    downloadPermission,
    dialouge,
    setDialouge,
    redirectToContact
  };

  return (
    <portfolioContext.Provider value={value}>
      {children}
    </portfolioContext.Provider>
  );
}

export default Provider;
