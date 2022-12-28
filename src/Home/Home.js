import { withRouter } from "react-router-dom";
import React from "react";
import { Typography } from "antd";
import { Container } from "react-bootstrap";
import { Player } from "@lottiefiles/react-lottie-player";
import "../App.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import dayjs from "dayjs";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";

const { Title } = Typography;

function Home(props) {
  const [value, setValue] = React.useState(dayjs("1998-03-28T21:11:54"));
  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const [val, setVal] = React.useState("");

  const change = event => {
    setVal(event.target.value);
  }
  
  return (
    <>
      <Title level={1}>SmallTalk</Title>
      <Container>
        <Row className="d-flex">
          <Col className="text-center" style={{ marginTop: "50px" }}>
            <Container>
              <form>
                <div className="form-outline mb-4" >
                <TextField id="outlined-basic" label="Name" variant="outlined" fullWidth onChange={change} value={val}/>
                </div>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <Stack spacing={3}>
                    <DesktopDatePicker
                      label="Birthdate"
                      inputFormat="MM/DD/YYYY"
                      value={value}
                      onChange={handleChange}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </Stack>
                </LocalizationProvider>
                <br />
                <button
                  type="submit"
                  className="btn btn-primary btn-block mb-4"
                  onClick={() => props.history.push("/chat")}
                >
                  Create a Room
                </button>
              </form>
            </Container>
          </Col>
          <Col className="text-center" style={{ marginTop: "170px" }}>
            <Player
              autoplay
              loop
              src="https://assets6.lottiefiles.com/packages/lf20_c3gt0z38.json"
              style={{ height: "400px", width: "400px" }}
            ></Player>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default withRouter(Home);
