import { faker } from "@faker-js/faker";
import RestartButton from "./components/RestartButton";
import Results from "./components/Results";

const words = faker.random.words(10);

function App() {
  return (
    <>
      <CountDownTimer timeLeft={30} />
      <GeneratedWords words={words} />
      <RestartButton
        className={`mx-auto mt-10 text-slate-500`}
        onRestart={() => null}
      />

      <Results
        className="mt-10"
        errors={10}
        accuracyPercentage={100}
        total={200}
      />
    </>
  );
}

function GeneratedWords({ words }: { words: string }) {
  return <div className="text-slate-500 text-center text-2xl">{words}</div>;
}

function CountDownTimer({ timeLeft }: { timeLeft: number }) {
  return <h2 className="text-primary font-medium">Time: {timeLeft}</h2>;
}

export default App;
