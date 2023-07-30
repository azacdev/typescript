import { useRef, useEffect } from "react";

const RefExample = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const usernameInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleClick = () => {
    console.log(`username is: ${usernameInputRef.current?.value}`);
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="focus here" />
      <br />
      <input ref={usernameInputRef} type="text" placeholder="username" />
      <br />
      <button onClick={handleClick}>Send</button>
    </div>
  );
};

export default RefExample;
