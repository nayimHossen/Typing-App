import useEngine from "../hooks/useEngine";
import RestartButton from "./RestartButton";

const Navbar = () => {
  const { restart } = useEngine();

  return (
    <div className="container mx-auto pb-5 pt-3">
      <ul className="flex justify-center items-center gap-x-3 md:gap-x-6 lg:gap-x-10 py-3 bg-secondary rounded-lg text-white">
        <li>Home</li>
        <li>History</li>
        <li>Profile</li>
        <li>
          <RestartButton
            className={"mx-auto text-slate-500"}
            onRestart={restart}
          />
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
