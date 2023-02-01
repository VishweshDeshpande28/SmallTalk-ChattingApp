import { CheckIcon, ClipboardIcon } from "@heroicons/react/outline";
import { Constants } from "@videosdk.live/react-sdk";
import React, { useState } from "react";
import { meetingTypes } from "../utils/common";

export function MeetingDetailsScreen({
  onClickJoin,
  _handleOnCreateMeeting,
  participantName,
  setParticipantName,
  videoTrack,
  setVideoTrack,
  onClickStartMeeting,
  meetingType,
  setMeetingMode,
  meetingMode,
}) {
  const [meetingId, setMeetingId] = useState("");
  const [meetingIdError, setMeetingIdError] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [iscreateMeetingClicked, setIscreateMeetingClicked] = useState(false);
  const [isJoinMeetingClicked, setIsJoinMeetingClicked] = useState(false);

  return (
    <div className={`flex flex-1 flex-col w-full `}>
      {iscreateMeetingClicked ? (
        <div className="border border-solid border-gray-400 rounded-xl px-4 py-3  flex items-center justify-center">
          <p className="text-white text-base">
            {meetingType === meetingTypes.MEETING
              ? `Meeting code : ${meetingId}`
              : `Studio code : ${meetingId}`}
          </p>
          <button
            className="ml-2"
            onClick={() => {
              navigator.clipboard.writeText(meetingId);
              setIsCopied(true);
              setTimeout(() => {
                setIsCopied(false);
              }, 3000);
            }}
          >
            {isCopied ? (
              <CheckIcon className="h-5 w-5 text-green-400" />
            ) : (
              <ClipboardIcon className="h-5 w-5 text-white" />
            )}
          </button>
        </div>
      ) : isJoinMeetingClicked ? (
        <>
          <input
            defaultValue={meetingId}
            onChange={(e) => {
              setMeetingId(e.target.value);
            }}
            placeholder={
              meetingType === meetingTypes.MEETING
                ? "Enter meeting Id"
                : "Enter studio code"
            }
            className="px-4 py-3 bg-gray-650 rounded-xl text-white w-full text-center"
          />
          {meetingIdError && (
            <p className="text-xs text-red-600">{`Please enter valid ${
              meetingType === meetingTypes.MEETING ? "meetingId" : "studioCode"
            }`}</p>
          )}
        </>
      ) : null}

      {(iscreateMeetingClicked || isJoinMeetingClicked) && (
        <>
          <input
            value={participantName}
            onChange={(e) => setParticipantName(e.target.value)}
            placeholder="Enter your name"
            className="px-4 py-3 mt-5 bg-gray-650 rounded-xl text-white w-full text-center"
          />
          <button
            disabled={participantName.length < 3}
            className={`w-full ${
              participantName.length < 3 ? "bg-gray-650" : "bg-purple-350"
            }  text-white px-2 py-3 rounded-xl mt-5`}
            onClick={(e) => {
              if (iscreateMeetingClicked) {
                if (videoTrack) {
                  videoTrack.stop();
                  setVideoTrack(null);
                }
                onClickStartMeeting();
              } else {
                if (meetingId.match("\\w{4}\\-\\w{4}\\-\\w{4}")) {
                  onClickJoin(meetingId);
                } else setMeetingIdError(true);
              }
            }}
          >
            {meetingType === meetingTypes.MEETING
              ? iscreateMeetingClicked
                ? "Start a meeting"
                : "Join a meeting"
              : iscreateMeetingClicked
              ? "Start a meeting"
              : isJoinMeetingClicked &&
                meetingMode === Constants.modes.CONFERENCE
              ? "Join Studio"
              : "Join Streaming Room"}
          </button>
        </>
      )}

      {!iscreateMeetingClicked && !isJoinMeetingClicked && (
        <div className="w-full md:mt-0 mt-4 flex flex-col">
          <div className="flex items-center justify-center flex-col w-full mt-2">
            {meetingType === meetingTypes.ILS ? (
              <></>
            ) : (
              <>
                <button
                  className="w-full bg-purple-350 text-white px-2 py-3 rounded-xl"
                  onClick={async (e) => {
                    const meetingId = await _handleOnCreateMeeting();
                    setMeetingId(meetingId);
                    setIscreateMeetingClicked(true);
                    if (meetingType === meetingTypes.ILS) {
                      setMeetingMode(Constants.modes.CONFERENCE);
                    }
                  }}
                >
                  Create a meeting
                </button>
                <button
                  className="w-full bg-gray-650 text-white px-2 py-3 rounded-xl mt-5"
                  onClick={(e) => {
                    setIsJoinMeetingClicked(true);
                    if (meetingType === meetingTypes.ILS) {
                      setMeetingMode(Constants.modes.VIEWER);
                    }
                  }}
                >
                  Join a meeting
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
