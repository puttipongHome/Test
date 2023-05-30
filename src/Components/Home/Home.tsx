import React from "react";
import { Card } from "antd";
import { Link } from "react-router-dom";
import "./Home.css";
import { useTranslation } from "react-i18next";
import axios from "axios";

type GetResponse = {
  text: string;
};
async function getUsers() {
  try {
    const { data } = await axios.post<GetResponse>("/api/sub", {
      text: ["BATHROOM", "BATHSALTS", "BLOODBATH"],
      subString: ["BATH"],
    });

    return data;
  } catch (error: any) {
    return error.message;
  }
}
getUsers();

async function getClock() {
  try {
    const { data } = await axios.post<GetResponse>("/api/clock", {
      text: "18:00",
    });
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("error message: ", error.message);
      return error.message;
    } else {
      console.log("unexpected error: ", error);
      return "An unexpected error occurred";
    }
  }
}
getClock();
async function getCard() {
  try {
    const { data } = await axios.post<GetResponse>("/api/pocker", {
      text: "S8 S10 CA",
    });
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("error message: ", error.message);
      return error.message;
    } else {
      console.log("unexpected error: ", error);
      return "An unexpected error occurred";
    }
  }
}

getCard();
function Home() {
  const { t } = useTranslation(["home", "main"]);
  return (
    <>
      <div className="container">
        <div className="center">
          <Link to="/Layout">
            <Card title={t("test1", { ns: ["home"] })}>
              {t("layout", { ns: ["home"] })}
            </Card>
          </Link>
          <br></br>
          <Link to="/Form">
            <Card title={t("test2", { ns: ["home"] })}>
              {t("form", { ns: ["home"] })}
            </Card>
          </Link>
        </div>
      </div>
    </>
  );
}
export default Home;
