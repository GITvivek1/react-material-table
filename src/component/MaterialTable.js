import { accordionActionsClasses } from "@mui/material";

    [
      {
        accessorKey: 'menu',
        header: 'Menu',
        muiEditTextFieldProps:({
          type: 'text',
          onChange: (event) => {
            const menu = event.target.value;
            setNewUser((prev) => ({ ...prev, menu }));
          },
        })
      },
      {
        accessorKey: 'mnamelocallanguage',
        header: 'Menu Name Local Language',
      },
      {
        accessorKey: 'menutype',
        header: 'Menu Type',
      },
      {
        accessorKey: 'producttype',
        header: 'Product Type',
      },
      {
        accessorKey: 'servingcategory',
        header: 'Serving Catergory'
      },
      {
        accessorKey: 'type',
        header: 'Type'
      },
      {
        accessorKey: 'menucategory',
        header: 'Menu Category'
      },
      {
        accessorKey: 'itemtype',
        header: 'Item Type'
      },
      {
        accessorKey: 'layer',
        header: 'Layer'
      },
      {
        
      }
    ]