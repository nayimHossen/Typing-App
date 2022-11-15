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
      tabIndex={-1} // to prevent focus
      ref={buttonRef}
      className={`btn btn-secondary text-base-100 block rounded px-8 py-2 hover:bg-slate-900  ${className}`}
      onClick={handleClick}
    >
      Restart
    </button>
  );
};

export default RestartButton;
