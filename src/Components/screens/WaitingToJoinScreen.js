import React, { useEffect, useRef, useState } from "react";
import useResponsiveSize from "../../hooks/useResponsiveSize";
import animationData from "../../../src/static/animations/join_meeting.json";
import Lottie from "react-lottie";

const WaitingToJoinScreen = () => {
  const waitingMessages = [{ index: 0, text: "Joining the Facetime.." }];
  const [message, setMessage] = useState(waitingMessages[0]);

  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setMessage((s) =>
        s.index === waitingMessages.length - 1
          ? s
          : waitingMessages[s.index + 1]
      );
    }, 3000);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  const lottieSize = useResponsiveSize({
    xl: 250,
    lg: 250,
    md: 200,
    sm: 200,
    xs: 180,
  });

  const animationDefaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <div className="flex flex-col">
        <Lottie
          options={animationDefaultOptions}
          eventListeners={[{ eventName: "done" }]}
          height={lottieSize}
          width={lottieSize}
        />
        <h1 className="text-white text-center font-bold mt-1 text-xl">
          {message.text}
        </h1>
      </div>
    </div>
  );
};

export default WaitingToJoinScreen;
