import React from "react";
import { Card } from "antd";
import { Link } from "react-router-dom";
import "./Home.css";
import { useTranslation } from "react-i18next";

function Home() {
  const { t } = useTranslation(["home", "main"]);
  return (
    <>
      <div className="container">
        <div className="center">
          <Link to="/Example">
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
