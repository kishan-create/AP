import React from "react";
import { Box } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";

import { CUIAutoComplete } from "chakra-ui-autocomplete";

const countries = [
  { value: "Shanu", label: "Shanu" },
  { value: "Linto", label: "Linto" },
  { value: "Manju", label: "Manju" },
];

export default function AutocompleteWrapper() {
  const [pickerItems, setPickerItems] = React.useState(countries);
  const [selectedItems, setSelectedItems] = React.useState([]);

  const handleCreateItem = (item) => {
    setPickerItems((curr) => [...curr, item]);
    setSelectedItems((curr) => [...curr, item]);
  };

  const handleSelectedItemsChange = (selectedItems) => {
    if (selectedItems) {
      setSelectedItems(selectedItems);
    }
  };

  return (
      <div>
           
    <ChakraProvider>
      <Box >
        <CUIAutoComplete
         
          placeholder="Type a candidatename"
          onCreateItem={handleCreateItem}
          items={pickerItems}
          tagStyleProps={{
            rounded: "full",
            pt: 1,
            pb: 2,
            px: 2,
            fontSize: "1rem"
          }}
          selectedItems={selectedItems}
          onSelectedItemsChange={(changes) =>
            handleSelectedItemsChange(changes.selectedItems)
          }
        />
      </Box>
    </ChakraProvider>
    </div>
  );
}
