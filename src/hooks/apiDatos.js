import { useState, useEffect } from "react";

const useApiDatos = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null); // Corregir aquí

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Error al cargar registros");
        }

        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, [url]);

  return { data, error };
};

export default useApiDatos;
