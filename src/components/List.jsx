
import './css/List.css';
import Delete from './Delete';

export default ({ title, task, id, handleClick }) => {
  const onDelete = (id) => {
    console.log(id);

    fetch(`http://localhost:3000/todo/${id}`, {
      method: "DELETE",
    })
  }

  return (
    <div className='strip' >
      <h1>{title}</h1>
      <p>{task}</p>
      <Delete handleClick={() => {
        onDelete(id);
        handleClick();
      }} />
    </div>
  )

}



