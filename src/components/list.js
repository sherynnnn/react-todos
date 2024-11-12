import Item from "./item";

function ItemsList(props) {
    const {list} = props;
    return (
        <div
      className="card rounded shadow-sm"
      style={{
        maxWidth: "500px",
        margin: "60px auto"
      }}
    >
       <ul class="list-group">
      {list.map((item,index) => {
        return <Item num={index +1} {...item}/>;
      })}
      </ul>
      </div>
    );
}

export default ItemsList;