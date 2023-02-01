import React, { useState } from "react";
import { Constants, MeetingProvider } from "@videosdk.live/react-sdk";
import { JoiningScreen } from "./components/screens/JoiningScreen";
import { meetingTypes } from "./utils/common";
import { MeetingContainer } from "./meeting/MeetingContainer";

const CharApp = () => {
  const [token, setToken] = useState("");
  const [meetingId, setMeetingId] = useState("");
  const [participantName, setParticipantName] = useState("");
  const [micOn, setMicOn] = useState(true);
  const [webcamOn, setWebcamOn] = useState(true);
  const [selectedMic, setSelectedMic] = useState({ id: null });
  const [selectedWebcam, setSelectedWebcam] = useState({ id: null });

  const [meetingType, setMeetingType] = useState(meetingTypes.MEETING);
  const [meetingMode, setMeetingMode] = useState(Constants.modes.CONFERENCE);
  const [isMeetingStarted, setMeetingStarted] = useState(false);


  return (
    <>
      {isMeetingStarted ? (
          <MeetingProvider
            config={{
              meetingId,
              micEnabled: micOn,
              webcamEnabled: webcamOn,
              name: participantName ? participantName : "TestUser",
              mode: meetingMode,
            }}
            token={token}
            reinitialiseMeetingOnConfigChange={true}
            joinWithoutUserInteraction={true}
          >
            {meetingType === meetingTypes.MEETING ? (
              <MeetingContainer
                onMeetingLeave={() => {
                  setToken("");
                  setMeetingId("");
                  setWebcamOn(false);
                  setMicOn(false);
                  setMeetingStarted(false);
                }}
                selectedMic={selectedMic}
                selectedWebcam={selectedWebcam}
                micEnabled={micOn}
                webcamEnabled={webcamOn}
              />
            ) : (
              <></>
            )}
          </MeetingProvider>
      ) : (
        <JoiningScreen
          participantName={participantName}
          setParticipantName={setParticipantName}
          setMeetingId={setMeetingId}
          setToken={setToken}
          setMicOn={setMicOn}
          micEnabled={micOn}
          webcamEnabled={webcamOn}
          setSelectedMic={setSelectedMic}
          setSelectedWebcam={setSelectedWebcam}
          setWebcamOn={setWebcamOn}
          onClickStartMeeting={() => {
            setMeetingStarted(true);
          }}
          startMeeting={isMeetingStarted}
          meetingType={meetingType}
          setMeetingType={setMeetingType}
          meetingMode={meetingMode}
          setMeetingMode={setMeetingMode}
        />
      )}
    </>
  );
};

export default CharApp;
