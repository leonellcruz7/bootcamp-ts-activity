import PetItem from './PetItem'
const PetList = ({ pets }) => {
  return (
    <>
      {pets.map(({ name, age, owner }) => ( 
        <PetItem 
          name={name}
          age={age}
          owner={owner}
        />
      ))}
    </>
  )
}

export default PetList
