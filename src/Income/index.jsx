import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const index = ({ inputval, setInputVal }) => {
  
  const [val, setVal] = useState();
  const [finalval, setfinalVal] = useState(() => {
    const storedData = localStorage.getItem("arr");
    return storedData ? JSON.parse(storedData) : [];
  });
  console.log(finalval);

  
  useEffect(() => {
    localStorage.setItem("arr", JSON.stringify(finalval));
  }, [finalval]);

  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  const handleCont = () => {
    finalval.push(val);
    setInputVal([...finalval]);

    console.log(inputval.length);
    navigate("/");
  
  };
  const handlechange = (e) => {
    setVal(Number(e.target.value));
  };

  return (
    <section className="w-full h-screen flex justify-center items-center bg-black overflow-hidden">
      <section className="flex flex-col justify-between text-white w-[375px] h-screen bg-[#FFFFFF] ">
        <section>
          <button className="text-black cursor-pointer" onClick={handleBack}>
            back
          </button>
        </section>
        <section className="w-full flex justify-center items-center">
          <input
            type="string"
            className="border-2 border-black text-black"
            onInput={handlechange}
          />
        </section>
        <section className="w-full flex justify-center items-center mb-12">
          <button
            className="bg-[#7F3DFF] text-white p-4 px-32 rounded-2xl font-semibold cursor-pointer"
            onClick={handleCont}
          >
            Continue
          </button>
        </section>
      </section>
    </section>
  );
};

export default index;
