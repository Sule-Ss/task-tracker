import "../App.css";
function DeleteAll({deleteAllTasks}) {
  return (
    <div className="deleteAll">
      <button onClick={deleteAllTasks} className="btnDeleteAll">DeleteAll</button>
    </div>
  );
}

export default DeleteAll;
