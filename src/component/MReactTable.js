import React, { useMemo, useEffect } from "react";
import { MaterialReactTable } from "material-react-table";
import { Autocomplete, TextField } from "@mui/material";
import countries from "./countries";

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
          required: true,
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
          required: true,
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
          required: true,
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
        muiEditTextFieldProps: {
          required: true,
          children: (
            <Autocomplete
              freeSolo
              options={countries.map((option) => option.title)}
              onInputChange={(event, value) => {
                setNewUser((prev) => ({ ...prev, country: value }));
              }}
              onChange={(event, value) => {
                // Jab user option select kare dropdown se
                setNewUser((prev) => ({ ...prev, country: value }));
              }}
              renderInput={(params) => (
                <TextField {...params} label="Country" />
              )}
            />
          ),
        },
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
    <div className="box-border m-10 p-8 border-4 border-teal-400">
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
