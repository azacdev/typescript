import { useState } from "react";

type UserType = {
  name: string;
  sessionId: number;
};

const State = () => {
  const [userName, setUserName] = useState("");
  const [user, setUser] = useState<UserType | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setUserName(e.target.value);
  };

  const handleClick = (e: React.MouseEventt<HTMLButtonElement>) => {
    e.preventDefault();
    setUser({
      name: userName,
      sessionId: Math.random(),
    });
  };

  return (
    <div>
      {user ? (
        `${user.name} logged in`
      ) : (
        <form>
          <input type="text" placeholder="Username" onChange={handleChange} />
          <button onClick={handleClick}>Login</button>
        </form>
      )}
    </div>
  );
};

export default State;
