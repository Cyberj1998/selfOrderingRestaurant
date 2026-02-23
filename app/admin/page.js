'use client'
import FormInsert from "../components/FormInsert";
import FormUpdate from "../components/FormUpdate";
import FormDelete from "../components/FormDelete";
import { useState,useEffect } from "react";

const methods = [
  { key: "insert", label: "Insert" },
  { key: "update", label: "Update" },
  { key: "delete", label: "Delete" },
];

const page = () => {

  //----------------------getch all the products
  const[items,setItems]=useState([])
  
  useEffect(() => {
    fetch('http://localhost:3001/items')
    .then(response => {
      if (!response.ok) {
        throw new Error('Error en la respuesta de la API');
      }
      return response.json();
    })
    .then(data => setItems(data))
    .catch(error => console.error('Error al llamar al endpoint:', error));
  }, []);
  


  const [activeMethod, setActiveMethod] = useState("insert");

  const renderForm = (items) => {
    switch (activeMethod) {
      case "insert":
        return <FormInsert />;
      case "update":
        return <FormUpdate items={items} />;
      case "delete":
        return <FormDelete items={items} />;
      default:
        return null;
    }
  };

  return (
    <div className="h-screen w-full flex flex-col justify-center items-center bg-[#bebaba] px-4">
      <div className="method-selector flex border border-white rounded-lg w-[60%] h-12.5 overflow-hidden m-2 shadow-md">
        {methods.map(({ key, label }) => (
          <button
            key={key}
            onClick={() => setActiveMethod(key)}
            className={`flex-1 flex justify-center cursor-pointer items-center font-semibold transition-colors duration-300
              ${
                activeMethod === key
                  ? "bg-white text-blue-600 shadow-inner"
                  : "bg-transparent text-white hover:bg-white hover:text-blue-600"
              }
            `}
          >
            <h3>{label}</h3>
          </button>
        ))}
      </div>

      {renderForm(items)}
    </div>
  );
};


export default page
