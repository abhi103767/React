import './css/List.css';
// eslint-disable-next-line import/no-anonymous-default-export
export default ({ handleClick }) => {
  return (
    <div className="delete-component">
      <button id="delete" onClick={
        () => {
          handleClick();
        }
      }>Delete</button>
    </div>
  )
}