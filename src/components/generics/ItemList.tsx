import Item from "./Item";

const ItemList = () => {
  return (
    <div>
      <Item
        id={20}
        title={"Azacdev"}
        extra={[
          {
            id: 1,
            usename: "john",
          },
        ]}
      />
    </div>
  );
};

export default ItemList;
