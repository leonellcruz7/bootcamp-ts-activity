const PetList = ({ pets }) => {
  return (
    <>
      {pets.map(({ name, age, owner }) => ( 
        <tr>
          <td>{name}</td>
          <td>{age}</td>
          <td>{owner}</td>
        </tr>
      ))}
    </>
  )
}

export default PetList
