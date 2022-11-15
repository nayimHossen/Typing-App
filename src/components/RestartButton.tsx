import { useRef } from "react";

const RestartButton = ({
  onRestart: handleRestart,
  className = "",
}: {
  onRestart: () => void;
  className?: string;
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleClick = () => {
    buttonRef.current?.blur();
    handleRestart();
  };

  return (
    <button
      ref={buttonRef}
      onClick={handleClick}
      className={`block rounded px-8 py-2 hover:bg-slate-700/50 text-primary`}
    >
      Restart
    </button>
  );
};

export default RestartButton;
