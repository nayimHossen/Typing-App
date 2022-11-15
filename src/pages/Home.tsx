import React from "react";
import Div from "../components/Div";
import GeneratedWords from "../components/GeneratedWords";
import RestartButton from "../components/RestartButton";
import Results from "../components/Results";
import KeyBord from "../components/KeyBord";
import UserTypings from "../components/UserTypings";
import useEngine from "../hooks/useEngine";
import { calculateAccuracyPercentage } from "../utils/helpers";

const Home = () => {
  const { words, typed, timeLeft, errors, state, restart, totalTyped } =
    useEngine();

  const persentage = calculateAccuracyPercentage(errors, totalTyped).toFixed(0);

  return (
    <div className="md:flex md:gap-x-10 container mx-auto">
      <div className="w-full md:w-[20%] text-center">
        <Div type="WPM" total={totalTyped} />
        <Div type="Total Typed" total={totalTyped} />
        <Div type="Mistack" total={errors} />
        <Div type="Aaccuracy" total={`${persentage} %`} />
      </div>
      <div className="w-full md:w-[80%]">
        {" "}
        <CountdownTimer timeLeft={timeLeft} />
        <WordsContainer>
          <GeneratedWords key={words} words={words} />
          {/* User typed characters will be overlayed over the generated words */}
          <UserTypings
            className="absolute inset-0"
            words={words}
            userInput={typed}
          />
        </WordsContainer>
        <RestartButton
          className={"mx-auto mt-10 text-slate-500"}
          onRestart={restart}
        />
        <KeyBord />
        {/* <Results
          className="mt-10"
          state={state}
          errors={errors}
          accuracyPercentage={calculateAccuracyPercentage(errors, totalTyped)}
          total={totalTyped}
        /> */}
      </div>
    </div>
  );
};

const WordsContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative text-3xl leading-relaxed break-all mt-3">
      {children}
    </div>
  );
};

const CountdownTimer = ({ timeLeft }: { timeLeft: number }) => {
  return <h2 className="text-primary-400 font-medium">Time: {timeLeft}</h2>;
};

export default Home;
