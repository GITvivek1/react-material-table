import React, { useMemo, useEffect } from "react";
import { MaterialReactTable } from "material-react-table";

function Table({ tableData, setTableData, setNewUser }) {
  useEffect(() => {
    const savedData = localStorage.getItem("tableData");
    if (savedData) {
      setTableData(JSON.parse(savedData));
    }
  }, []);

  const columns = useMemo(
    () => [
      {
        accessorKey: "name",
        header: "Name",
        muiEditTextFieldProps: ({ cell, row }) => ({
          type: "text",
          onChange: (event) => {
            const name = event.target.value;
            setNewUser((prev) => ({ ...prev, name }));
          },
        }),
      },
      {
        accessorKey: "email",
        header: "Email",
        muiEditTextFieldProps: ({ cell, row }) => ({
          type: "email",
          onChange: (event) => {
            const email = event.target.value;
            setNewUser((prev) => ({ ...prev, email }));
          },
        }),
      },
      {
        accessorKey: "gender",
        header: "Gender",
        editVariant: "select",
        editSelectOptions: ["Male", "Female"],
        muiEditTextFieldProps: {
          select: true,
          onChange: (event) => {
            const gender = event.target.value;
            setNewUser((prev) => ({ ...prev, gender }));
          },
        },
      },
      {
        accessorKey: "country",
        header: "Country",
        muiEditTextFieldProps: ({ cell, row }) => ({
          type: "text",
          onChange: (event) => {
            const country = event.target.value;
            setNewUser((prev) => ({ ...prev, country }));
          },
        }),
      },
      {
        accessorKey: "level",
        header: "Level",
        editVariant: "select",
        editSelectOptions: ["First", "Second", "Third", "Fourth"],
        muiEditTextFieldProps: {
          select: true,
          onChange: (event) => {
            const level = event.target.value;
            setNewUser((prev) => ({ ...prev, level }));
          },
        },
      },
    ],
    []
  );

  return (
    <div className="box-border m-10 p-8 border-4 border-gray-400 rounded-md">
      <MaterialReactTable
        columns={columns}
        data={tableData}
        createDisplayMode="row"
        editDisplayMode="table"
        enableEditing
        enableColumnActions={false}
        enableBottomToolbar={false}
        enableTopToolbar={false}
        enableColumnFilters={false}
        enableSorting={false}
      />
    </div>
  );
}

export default Table;
