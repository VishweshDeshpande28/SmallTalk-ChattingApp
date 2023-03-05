import {
  createCameraVideoTrack,
  useMeeting,
} from "@videosdk.live/react-sdk";
import React from "react";
import MicOnIcon from "../../icons/Bottombar/MicOnIcon";
import MicOffIcon from "../../icons/Bottombar/MicOffIcon";
import WebcamOnIcon from "../../icons/Bottombar/WebcamOnIcon";
import WebcamOffIcon from "../../icons/Bottombar/WebcamOffIcon";
import EndIcon from "../../icons/Bottombar/EndIcon";
import { OutlinedButton } from "../../Components/buttons/OutlinedButton";
import {
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles({
  popoverHoverDark: {
    "&:hover": {
      backgroundColor: "#2B303499",
    },
  },

  menuItemDark: {
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  menuItemGutters: {
    padding: "6px 12px",
  },
});
export function BottomBar({
  setIsMeetingLeft,
  selectWebcamDeviceId,
}) {

  const MicBTN = () => {
    const mMeeting = useMeeting();
    const localMicOn = mMeeting?.localMicOn;

    return (
      <>
        <OutlinedButton
          Icon={localMicOn ? MicOnIcon : MicOffIcon}
          onClick={() => {
            mMeeting.toggleMic();
          }}
          bgColor={localMicOn ? "bg-gray-750" : "bg-white"}
          borderColor={localMicOn && "#ffffff33"}
          isFocused={localMicOn}
          focusIconColor={localMicOn && "white"}
          tooltip={"Toggle Mic"}
        />
      </>
    );
  };

  const WebCamBTN = () => {
    const mMeeting = useMeeting();
    const localWebcamOn = mMeeting?.localWebcamOn;


    return (
      <>
        <OutlinedButton
          Icon={localWebcamOn ? WebcamOnIcon : WebcamOffIcon}
          onClick={async () => {
            const track = await createCameraVideoTrack({
              optimizationMode: "motion",
              encoderConfig: "h1080p_w1920p",
              facingMode: "environment",
              multiStream: false,
              cameraId: selectWebcamDeviceId,
            });
            mMeeting.toggleWebcam(track);
          }}
          bgColor={localWebcamOn ? "bg-gray-750" : "bg-white"}
          borderColor={localWebcamOn && "#ffffff33"}
          isFocused={localWebcamOn}
          focusIconColor={localWebcamOn && "white"}
          tooltip={"Toggle Webcam"}
        />
      </>
    );
  };

  const LeaveBTN = () => {
    const { leave } = useMeeting();

    return (
      <OutlinedButton
        Icon={EndIcon}
        bgColor="bg-red-150"
        onClick={() => {
          leave();
          setIsMeetingLeft(true);
        }}
        tooltip="Leave Meeting"
      />
    );
  };

  return (
      <div className="flex flex-1 items-center justify-center">
        <MicBTN />
        <WebCamBTN />
        <LeaveBTN />
      </div>
  );
}
