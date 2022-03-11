//import namor from "namor";
import {location} from '../../images';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
const range = (len) => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

const newPerson = () => {
  const statusChance = Math.random();
  return {
    organizationname: "Encaps",
    organizationcode: "DPC",
    organizationtype: 'Bourntec Solutions',
    location: 'Cochin',
    action: <div><EditIcon className="org-edit"/><DeleteIcon className="org-delete"/></div>   ,
  };
};

export default function makeData(...lens) {
  const makeDataLevel = (depth = 0) => {
    const len = lens[depth];
    return range(len).map((d) => {
      return {
        ...newPerson(),
        subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined
      };
    });
  };

  return makeDataLevel();
}
