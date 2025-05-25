import VillainEncounters from "./VillainEncounters";
import VillainList from "../../../data/VillainList";

const villainListInstance = new VillainList(); /* By this treatment i can use the object with all the info and map it here */

const List = () => {

  return <>
    
    {villainListInstance.data.map(elem => (
      <VillainEncounters key={elem.id} {...elem} />
    ))}
    
  </>;

}

export default List;
