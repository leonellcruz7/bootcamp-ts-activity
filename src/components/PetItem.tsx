const PetItem = ({name, age, owner}) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{age}</td>
      <td>{owner}</td>
    </tr>
  )
}

export default PetItem
