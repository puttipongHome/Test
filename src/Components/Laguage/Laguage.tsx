import { Button, Card } from "antd";
import "./Laguage.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export const Laguage = () => {
  const { t, i18n } = useTranslation(["home", "main"]);

  const onClickLanguageChange = (e: any) => {
    const language = e.target.value;
    i18n.changeLanguage(language);
  };

  return (
    <div className="align">
      <select
        className="custom-select"
        style={{ width: 80 }}
        onChange={onClickLanguageChange}
      >
        <option value="en">English</option>
        <option value="th">Thai</option>
      </select>
      <br></br>
      <Link to="/">
        <div className="card">
          <Button>หน้าหลัก</Button>
        </div>
      </Link>
    </div>
  );
};
