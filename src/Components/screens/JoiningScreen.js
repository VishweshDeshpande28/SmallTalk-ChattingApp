import {
  Box,
  Button,
  useTheme,
  Grid,
  makeStyles,
  Tooltip,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { VideocamOff, MicOff, Mic, Videocam } from "@material-ui/icons";
import { red } from "@material-ui/core/colors";
import { MeetingDetailsScreen } from "../MeetingDetailsScreen";
import { createMeeting, getToken, validateMeeting } from "../../api";
import { Constants } from "@videosdk.live/react-sdk";

const useStyles = makeStyles((theme) => ({
  video: {
    borderRadius: "10px",
    backgroundColor: "#1c1c1c",
    height: "100%",
    width: "100%",
    objectFit: "cover",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  toggleButton: {
    borderRadius: "100%",
    minWidth: "auto",
    width: "44px",
    height: "44px",
  },
  previewBox: {
    width: "100%",
    height: "45vh",
    position: "relative",
  },
}));

export function JoiningScreen({
  participantName,
  setParticipantName,
  setMeetingId,
  setToken,
  setSelectedMic,
  setSelectedWebcam,
  onClickStartMeeting,
  micEnabled,
  webcamEnabled,
  setWebcamOn,
  setMicOn,
  meetingType,
  setMeetingType,
  setMeetingMode,
  meetingMode,
}) {
  const theme = useTheme();
  const classes = useStyles();

  const [setting, setSetting] = useState("video");
  const [{ webcams, mics }, setDevices] = useState({
    devices: [],
    webcams: [],
    mics: [],
  });

  const [videoTrack, setVideoTrack] = useState(null);

  const [dlgMuted, setDlgMuted] = useState(false);
  const [dlgDevices, setDlgDevices] = useState(false);

  const videoPlayerRef = useRef();
  const popupVideoPlayerRef = useRef();
  const popupAudioPlayerRef = useRef();

  const videoTrackRef = useRef();
  const audioTrackRef = useRef();
  const audioAnalyserIntervalRef = useRef();

  const [settingDialogueOpen, setSettingDialogueOpen] = useState(false);

  const [audioTrack, setAudioTrack] = useState(null);

  const handleClickOpen = () => {
    setSettingDialogueOpen(true);
  };

  const handleClose = (value) => {
    setSettingDialogueOpen(false);
  };

  const isXStoSM = useMediaQuery(theme.breakpoints.between("xs", "sm"));
  const gtThenMD = useMediaQuery(theme.breakpoints.up("md"));
  const gtThenXL = useMediaQuery(theme.breakpoints.only("xl"));
  const isXSOnly = useMediaQuery(theme.breakpoints.only("xs"));
  const isSMOnly = useMediaQuery(theme.breakpoints.only("sm"));
  const isXLOnly = useMediaQuery(theme.breakpoints.only("xl"));

  const webcamOn = useMemo(() => !!videoTrack, [videoTrack]);
  const micOn = useMemo(() => !!audioTrack, [audioTrack]);

  const _handleTurnOffWebcam = () => {
    const videoTrack = videoTrackRef.current;

    if (videoTrack) {
      videoTrack.stop();
      setVideoTrack(null);
      setWebcamOn(false);
    }
  };
  const _handleTurnOnWebcam = () => {
    const videoTrack = videoTrackRef.current;

    if (!videoTrack) {
      getDefaultMediaTracks({ mic: false, webcam: true });
      setWebcamOn(true);
    }
  };

  const _toggleWebcam = () => {
    const videoTrack = videoTrackRef.current;

    if (videoTrack) {
      _handleTurnOffWebcam();
    } else {
      _handleTurnOnWebcam();
    }
  };
  const _handleTurnOffMic = () => {
    const audioTrack = audioTrackRef.current;

    if (audioTrack) {
      audioTrack.stop();

      setAudioTrack(null);
      setMicOn(false);
    }
  };
  const _handleTurnOnMic = () => {
    const audioTrack = audioTrackRef.current;

    if (!audioTrack) {
      getDefaultMediaTracks({ mic: true, webcam: false });
      setMicOn(true);
    }
  };
  const _handleToggleMic = () => {
    const audioTrack = audioTrackRef.current;

    if (audioTrack) {
      _handleTurnOffMic();
    } else {
      _handleTurnOnMic();
    }
  };

  const changeWebcam = async (deviceId) => {
    const currentvideoTrack = videoTrackRef.current;

    if (currentvideoTrack) {
      currentvideoTrack.stop();
    }

    const stream = await navigator.mediaDevices.getUserMedia({
      video: { deviceId },
    });
    const videoTracks = stream.getVideoTracks();

    const videoTrack = videoTracks.length ? videoTracks[0] : null;

    setVideoTrack(videoTrack);
  };
  const changeMic = async (deviceId) => {
    const currentAudioTrack = audioTrackRef.current;
    currentAudioTrack && currentAudioTrack.stop();
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: { deviceId },
    });
    const audioTracks = stream.getAudioTracks();

    const audioTrack = audioTracks.length ? audioTracks[0] : null;
    clearInterval(audioAnalyserIntervalRef.current);

    setAudioTrack(audioTrack);
  };

  const getDefaultMediaTracks = async ({ mic, webcam, firstTime }) => {
    if (mic) {
      const audioConstraints = {
        audio: true,
      };

      const stream = await navigator.mediaDevices.getUserMedia(
        audioConstraints
      );
      const audioTracks = stream.getAudioTracks();

      const audioTrack = audioTracks.length ? audioTracks[0] : null;

      setAudioTrack(audioTrack);
      if (firstTime) {
        setSelectedMic({
          id: audioTrack?.getSettings()?.deviceId,
        });
      }
    }

    if (webcam) {
      const videoConstraints = {
        video: {
          width: 1280,
          height: 720,
        },
      };

      const stream = await navigator.mediaDevices.getUserMedia(
        videoConstraints
      );
      const videoTracks = stream.getVideoTracks();

      const videoTrack = videoTracks.length ? videoTracks[0] : null;
      setVideoTrack(videoTrack);
      if (firstTime) {
        setSelectedWebcam({
          id: videoTrack?.getSettings()?.deviceId,
        });
      }
    }
  };

  async function startMuteListener() {
    const currentAudioTrack = audioTrackRef.current;

    if (currentAudioTrack) {
      if (currentAudioTrack.muted) {
        setDlgMuted(true);
      }

      currentAudioTrack.addEventListener("mute", (ev) => {
        setDlgMuted(true);
      });
    }
  }

  const getDevices = async ({ micEnabled, webcamEnabled }) => {
    try {
      const devices = await navigator.mediaDevices.enumerateDevices();

      const webcams = devices.filter((d) => d.kind === "videoinput");
      const mics = devices.filter((d) => d.kind === "audioinput");

      const hasMic = mics.length > 0;
      const hasWebcam = webcams.length > 0;

      setDevices({ webcams, mics, devices });

      if (hasMic) {
        startMuteListener();
      }

      getDefaultMediaTracks({
        mic: hasMic && micEnabled,
        webcam: hasWebcam && webcamEnabled,
        firstTime: true,
      });
    } catch (err) {
      console.log(err);
    }
  };


  const spacingHorizontalTopicsObject = {
    xl: 60,
    lg: 40,
    md: 40,
    sm: 40,
    xs: 32,
  };

  useEffect(() => {
    audioTrackRef.current = audioTrack;

    startMuteListener();
  }, [audioTrack]);

  useEffect(() => {
    if (meetingMode === Constants.modes.VIEWER) {
      _handleTurnOffMic();
      _handleTurnOffWebcam();
    }
  }, [meetingMode]);

  useEffect(() => {
    videoTrackRef.current = videoTrack;

    if (videoTrack) {
      const videoSrcObject = new MediaStream([videoTrack]);

      if (videoPlayerRef.current) {
        videoPlayerRef.current.srcObject = videoSrcObject;
        videoPlayerRef.current.play();
      }

      setTimeout(() => {
        if (popupVideoPlayerRef.current) {
          popupVideoPlayerRef.current.srcObject = videoSrcObject;
          popupVideoPlayerRef.current.play();
        }
      }, 1000);
    } else {
      if (videoPlayerRef.current) {
        videoPlayerRef.current.srcObject = null;
      }
      if (popupVideoPlayerRef.current) {
        popupVideoPlayerRef.current.srcObject = null;
      }
    }
  }, [videoTrack, setting, settingDialogueOpen]);

  useEffect(() => {
    getDevices({ micEnabled, webcamEnabled });
  }, []);

  return (
    <>
      <Box
        className="overflow-y-auto"
        style={{
          display: "flex",
          flex: 1,
          flexDirection: "column",
          height: "100vh",
        }}
      >
        <Box
          m={isXSOnly ? 8 : gtThenMD ? 9 : 0}
          style={{
            display: "flex",
            flex: 1,
            flexDirection: isXStoSM ? "column" : "row",
            justifyContent: gtThenMD ? "" : "center",
            alignItems: gtThenMD ? "" : "center",
          }}
        >
          <Grid
            container
            spacing={gtThenMD ? 0 : isXStoSM ? 0 : 9}
            style={{
              display: "flex",
              flex: isSMOnly ? 0 : 1,
              flexDirection: isXStoSM ? "column" : "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Grid
              item
              xs={12}
              md={gtThenXL ? 6 : 7}
              style={{ display: "flex", flex: 1 }}
            >
              <Box
                style={{
                  width: isXSOnly ? "100%" : "100vw",
                  display: "flex",
                  flexDirection: "column",
                }}

              >
                <Box
                  style={{
                    position: "relative",
                    width: "100%",
                  }}
                >
                  <Box>
                    <Box className={classes.previewBox}>
                      <video
                        autoPlay
                        playsInline
                        muted
                        ref={videoPlayerRef}
                        controls={false}
                        className={classes.video + " flip"}
                      />

                      {!isXSOnly ? (
                        <>
                          <Box
                            style={{
                              position: "absolute",
                              top: 0,
                              bottom: 0,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              right: 0,
                              left: 0,
                            }}
                          >
                            {!webcamOn ? (
                              <Typography variant={isXLOnly ? "h5" : "h6"}>
                                {meetingMode === Constants.modes.VIEWER
                                  ? "You are not permitted to use your microphone and camera."
                                  : "The camera is off"}
                              </Typography>
                            ) : null}
                          </Box>
                        </>
                      ) : null}

                      <Box
                        position="absolute"
                        bottom={theme.spacing(2)}
                        left="0"
                        right="0"
                      >
                        <Grid
                          container
                          alignItems="center"
                          justifyContent="center"
                          spacing={2}
                        >
                          <Grid item>
                            <Tooltip
                              title={micOn ? "Turn off mic" : "Turn on mic"}
                              arrow
                              placement="top"
                            >
                              <Button
                                onClick={() => _handleToggleMic()}
                                variant="contained"
                                style={
                                  micOn
                                    ? {}
                                    : {
                                        backgroundColor: red[500],
                                        color: "white",
                                      }
                                }
                                className={classes.toggleButton}
                                disabled={
                                  meetingMode === Constants.modes.VIEWER
                                }
                              >
                                {micOn ? <Mic /> : <MicOff />}
                              </Button>
                            </Tooltip>
                          </Grid>

                          <Grid item>
                            <Tooltip
                              title={
                                webcamOn ? "Turn off camera" : "Turn on camera"
                              }
                              arrow
                              placement="top"
                            >
                              <Button
                                onClick={() => _toggleWebcam()}
                                variant="contained"
                                style={
                                  webcamOn
                                    ? {}
                                    : {
                                        backgroundColor: red[500],
                                        color: "white",
                                      }
                                }
                                className={classes.toggleButton}
                                disabled={
                                  meetingMode === Constants.modes.VIEWER
                                }
                              >
                                {webcamOn ? <Videocam /> : <VideocamOff />}
                              </Button>
                            </Tooltip>
                          </Grid>
                        </Grid>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              md={isXStoSM ? 5 : gtThenXL ? 6 : 5}
              style={{ display: "flex", flex: 1 }}
            >
              <div className="w-full flex flex-1 flex-col items-center justify-center xl:m-16 lg:m-6  md:mt-11 lg:mt-4">
                <MeetingDetailsScreen
                  participantName={participantName}
                  setParticipantName={setParticipantName}
                  videoTrack={videoTrack}
                  setVideoTrack={setVideoTrack}
                  meetingType={meetingType}
                  setMeetingType={setMeetingType}
                  setMeetingMode={setMeetingMode}
                  meetingMode={meetingMode}
                  onClickStartMeeting={onClickStartMeeting}
                  onClickJoin={async (id) => {
                    const token = await getToken();
                    const valid = await validateMeeting({
                      roomId: id,
                      token,
                    });

                    if (valid) {
                      setToken(token);
                      setMeetingId(id);
                      if (videoTrack) {
                        videoTrack.stop();
                        setVideoTrack(null);
                      }
                      onClickStartMeeting();
                      setParticipantName("");
                    } else alert("Invalid Meeting Id");
                  }}
                  _handleOnCreateMeeting={async () => {
                    const token = await getToken();
                    const _meetingId = await createMeeting({ token });
                    setToken(token);
                    setMeetingId(_meetingId);
                    setParticipantName("");
                    return _meetingId;
                  }}
                />
              </div>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}
