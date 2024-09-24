import React, { useState } from "react";
import { IoAddCircle } from "react-icons/io5";
import { MdDownload, MdUpload } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";
import Table from "./MReactTable";

function CreateMenu({ handleClickBtn }) {
  const [tableData, setTableData] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    country: "",
    gender: "",
    level: "",
  });

  const validateEmail = (email) => {
    const emformat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emformat.test(email);
  };

  // Function to check if any field is empty
  const validateFields = () => {
    if (!newUser.name || !newUser.email || !newUser.country || !newUser.gender || !newUser.level) {
      alert("Please fill in all fields.");
      return false;
    }
    if (!validateEmail(newUser.email)) {
      alert("Please enter a valid email address.");
      return false;
    }
    return true;
  };

  const addNewRow = () => {
    setTableData([
      ...tableData,
      { name: "", email: "", country: "", gender: "", level: "" },
    ]);
    setEditingIndex(tableData.length);
  };

  const saveRow = () => {
    if (!validateFields()) {
      return; // Stop if validation fails
    }

    if (editingIndex !== null) {
      const updatedTableData = [...tableData];
      updatedTableData[editingIndex] = newUser;
      setTableData(updatedTableData);
      localStorage.setItem("tableData", JSON.stringify(updatedTableData));
      setNewUser({ name: "", email: "", country: "", gender: "", level: "" });
      setEditingIndex(null);
    }
  };

  return (
    <div className=" bg-white p-4 rounded-xl">
      <div className="flex items-center justify-between">
        <div className="flex items-center ">
          <button
            className="flex items-center justify-between gap-x-2 bg-blue-600 py-2 px-4 rounded-md text-white"
            onClick={addNewRow}
          >
            ADD <IoAddCircle className="size-6" />
          </button>
          <div className="flex justify-center ml-2">
            <button
              className="flex items-center justify-between gap-x-2 border-black border-r bg-green-600 py-2 px-4 rounded-l-md text-white"
              onClick={saveRow}
            >
              SAVE <MdUpload className="size-6" />
            </button>
            <button className="bg-green-600 py-2 px-4 rounded-r-md ">
              <MdDownload className="size-6 text-white" />
            </button>
          </div>
        </div>
        <button
          className="bg-blue-600 py-2 px-4 rounded-md text-white flex gap-x-2 items-center justify-center"
          onClick={() => handleClickBtn(2)}
        >
          PROCEED <FaArrowRightLong />
        </button>
      </div>
      <div className="m-4 p-4">
        <Table
          tableData={tableData}
          setTableData={setTableData}
          newUser={newUser}
          setNewUser={setNewUser}
        />
      </div>
    </div>
  );
}

export default CreateMenu;
