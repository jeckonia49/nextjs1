"use client";
import Typewriter from "typewriter-effect";

type Props = {};

const TypewriterTitle = (props: Props) => {
  return (
    <Typewriter
      options={{
        loop: true
      }}
      onInit={typewriter => {
        typewriter
          .typeString("Supercharge Productivity")
          .pauseFor(2000)
          .deleteAll()
          .typeString("Ai Automation Perfection")
          .pauseFor(1000)
          .deleteAll()
          .typeString("Inspired by Elliot")
          .pauseFor(1000)
          .deleteAll()
          .typeString("Build by Jeckonia and Peter")
          .start();
      }}
    />
  );
};

export default TypewriterTitle;
