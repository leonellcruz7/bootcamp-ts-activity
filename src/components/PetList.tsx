import PetItem from "./PetItem";
export interface Pets {
  name: string;
  age?: number;
  owner?: string;
}
interface Props {
  pets: Pets[];
}

const PetList = ({ pets }: Props) => {
  return (
    <>
      {pets.map(({ name, age, owner }: Pets) => (
        <PetItem name={name} age={age} owner={owner} />
      ))}
    </>
  );
};

export default PetList;
