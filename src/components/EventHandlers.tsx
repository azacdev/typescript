// Event Handlers with TypeScript
const EventHandlers = () => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("searched");
  };

  const handleChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  const handleDelete = (e: React.MouseEvent<HTMLButtonElement>, id: number) => {
    e.preventDefault();
    console.log(`Post ${id} has been deleted!`);
  };

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Search for anything"
          onChange={handleChanged}
        />
        <button onClick={handleClick}>Search</button>
      </form>
      <form>
        <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          ratione natus cupiditate tenetur. Optio voluptate minima eaque error
          quidem laborum, cupiditate non voluptas debitis nisi. Dolores quis
          quos ipsum vel.
        </p>
        <button onClick={(e) => handleDelete(e, 1)}>Delete</button>
      </form>

      <form>
        <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          ratione natus cupiditate tenetur. Optio voluptate minima eaque error
          quidem laborum, cupiditate non voluptas debitis nisi. Dolores quis
          quos ipsum vel.
        </p>
        <button onClick={(e) => handleDelete(e, 2)}>Delete</button>
      </form>
    </div>
  );
};

export default EventHandlers;
