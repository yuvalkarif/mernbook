import { useRef } from "react";

const useFocus = () => {
  const elRef = useRef<any>(null);
  const setFocus = () => {
    console.log("focus", elRef);

    elRef.current && elRef.current.focus();
  };

  return [elRef, setFocus] as const;
};

export default useFocus;
