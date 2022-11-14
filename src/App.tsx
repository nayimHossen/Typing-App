import { faker } from "@faker-js/faker";

const words = faker.random.words(10);

function App() {
  return (
    <>
  <CountdownTimer timeLeft={30}/>

    <GeneratedWords words={words} />
    </>
  )
}

function GeneratedWords({ words }: { words: string }) {
  return (
    <div>
      <h2 className="font-bold text-3xl text-primary">{words}</h2>
    </div>
  );
}

function CountdownTimer({ timeLeft }: { timeLeft: number }) {
  return (
    <div>
      <h2 className="font-bold text-3xl text-primary">{timeLeft}</h2>
    </div>
  );
}

export default App;
