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
    console.log("clicked");
    buttonRef.current?.blur();
    handleRestart();
  };

  return (
    <button
      tabIndex={-1}
      ref={buttonRef}
      className={`btn btn-primary text-base-100 block rounded px-6 py-2 hover:bg-slate-900  ${className}`}
      onClick={handleClick}
    >
      Restart
    </button>
  );
};

export default RestartButton;
