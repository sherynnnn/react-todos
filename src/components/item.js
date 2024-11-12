function Item(props) {
    const {isCompleted = true, text = "No task" }= props;
    return (
      <li className="list-group-item d-flex justify-content-between align-items-center">
        <div>
        <button className={`btn btn-sm ${isCompleted ? 'btn-success' : 'btn-light'}`} >
        <i className={`bi ${isCompleted ? 'bi-check-square' : 'bi-square'}`}></i>
        </button>
        <span className={`ms-2 ${isCompleted ? 'text-decoration-line-through' : ''}`}>
        {text}</span>
        </div>
        <button class="btn btn-sm btn-danger">
                <i class="bi bi-trash"></i>
          </button>
      </li>
    );
}

export default Item;