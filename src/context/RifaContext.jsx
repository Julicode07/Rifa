import React, { createContext, useState, useEffect, useContext } from "react";
import { database } from "../firebaseConfig";
import { ref, set, get } from "firebase/database";
const RifaContext = createContext();

export const RifaProvider = ({ children }) => {
  const [selectedNumbers, setSelectedNumbers] = useState([]);

  // Función para obtener números desde Firebase
  useEffect(() => {
    const fetchNumbers = async () => {
      try {
        const dbRef = ref(database, "selectedNumbers/");
        const snapshot = await get(dbRef);
        if (snapshot.exists()) {
          setSelectedNumbers(snapshot.val());
        } else {
          setSelectedNumbers([]);
        }
      } catch (error) {
        console.error("Error fetching numbers:", error);
      }
    };
    fetchNumbers();
  }, []);

  // Función para actualizar números en Firebase
  useEffect(() => {
    const updateNumbers = async () => {
      try {
        const dbRef = ref(database, "selectedNumbers/");
        await set(dbRef, selectedNumbers);
      } catch (error) {
        console.error("Error updating numbers:", error);
      }
    };
    if (selectedNumbers.length > 0) {
      updateNumbers();
    }
  }, [selectedNumbers]);

  // Función para alternar la selección de números
  const toggleNumber = (number) => {
    setSelectedNumbers((prev) =>
      prev.includes(number)
        ? prev.filter((n) => n !== number)
        : [...prev, number]
    );
  };

  return (
    <RifaContext.Provider value={{ selectedNumbers, toggleNumber }}>
      {children}
    </RifaContext.Provider>
  );
};

export const useRifa = () => useContext(RifaContext);
