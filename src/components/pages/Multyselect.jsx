import React, { useState } from "react";
import { Multiselect } from "multiselect-react-dropdown";
 

const options = [
  { name: "NEW YEAR", id: 1 },
  { name: "REPUBLIC DAY", id: 2 },
  { name: "MAUNDY THURSDAY", id: 3 },
  { name: "GOOD FRIDAY", id: 4 },
  { name: "INDEPENDENCE DAY", id: 5 },  
  { name: "SREE KRISHNA JAYANTHI", id: 6 },
  { name: "FIRST ONAM", id: 3 },
  { name: "THIRUVONAM", id: 4 },
  { name: "MAHANAVAMI", id: 5 },  
  { name: "DEEPAVALI", id: 6 }
];

export default function Multyselect() {
  const [items, setItems] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(items);
  };

  const handleSelect = (selectedList) => {
    setItems(selectedList);
  };

  const handleRemove = (selectedList) => {
    setItems(selectedList);
  };

  return (
    <div className="Multyselect">
      <form onSubmit={handleSubmit}>
        <Multiselect  class="form-control "
          options={options} // Options to display in the dropdown
          selectedValues={items} // Preselected value to persist in dropdown
          onSelect={handleSelect} // Function will trigger on select event
          onRemove={handleRemove} // Function will trigger on remove event
          displayValue="name" // Property name to display in the dropdown options
          
        />
       
      </form>
    </div>
  );
}
