import { useState } from "react";
import { Row, Col, Button } from "antd";
import {
  CaretLeftOutlined,
  CaretUpOutlined,
  CaretDownOutlined,
  CaretRightOutlined,
} from "@ant-design/icons";
import "./Example.css";
import { useTranslation } from "react-i18next";

function Example() {
  const { t } = useTranslation(["home", "main"]);
  const [shape, setShape] = useState<number[]>([1, 2, 3, 4, 5, 6]);
  const [display, setDisplay] = useState<number[]>([]);

  const MoveShapeLeft = () => {
    setDisplay([]);
    for (let i = 1; i < 6; i++) {
      display.push(shape[i]);
    }
    display.push(shape[0]);
    setShape(display);
  };

  const MoveShapeRight = () => {
    setDisplay([]);
    display.push(shape[5]);
    for (let j = 0; j < 5; j++) {
      display.push(shape[j]);
    }
    setShape(display);
  };

  const shuffleArray = (array: any[]) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  const randomizeShape = () => {
    const shuffledShape = shuffleArray(shape);
    setShape(shuffledShape);
  };

  const swapShapes = () => {
    setShape((prevShape) => {
      const firstThree = prevShape.slice(0, 3);
      const lastThree = prevShape.slice(3);
      const newShape = [...lastThree, ...firstThree];
      return newShape;
    });
  };

  return (
    <div className="container">
      <div>
        <Row>
          <h1 className="control">{t("layout", { ns: ["home"] })}</h1>
        </Row>
        <Row>
          <div className="rowup">
            <Button
              style={{ margin: "16px" }}
              onClick={MoveShapeLeft}
              icon={<CaretLeftOutlined />}
            >
              {t("moveshape", { ns: ["home"] })}
            </Button>
          </div>
          <div>
            <Button
              style={{ margin: "16px" }}
              onClick={swapShapes}
              icon={<CaretUpOutlined />}
            >
              {t("movepositon", { ns: ["home"] })}
              <CaretDownOutlined />
            </Button>
          </div>
          <div>
            <Button
              style={{ margin: "16px" }}
              onClick={MoveShapeRight}
              icon={<CaretRightOutlined />}
            >
              {t("moveshape", { ns: ["home"] })}
            </Button>
          </div>
        </Row>
      </div>
      <ul className="button-list">
        {display.length !== 0
          ? display.map((e) => {
              return (
                <li style={{ margin: "16px" }}>
                  {" "}
                  {e === 1 ? (
                    <Button
                      onClick={randomizeShape}
                      className="circle"
                    ></Button>
                  ) : e === 2 ? (
                    <Button
                      onClick={randomizeShape}
                      className="parallelogram"
                    ></Button>
                  ) : e === 3 ? (
                    <Button
                      onClick={randomizeShape}
                      className="rectangle"
                    ></Button>
                  ) : e === 4 ? (
                    <Button onClick={randomizeShape} className="oval"></Button>
                  ) : e === 5 ? (
                    <Button
                      onClick={randomizeShape}
                      className="up-triangle"
                    ></Button>
                  ) : e === 6 ? (
                    <Button
                      onClick={randomizeShape}
                      className="square"
                    ></Button>
                  ) : null}
                </li>
              );
            })
          : shape.map((e) => {
              return (
                <li style={{ margin: "16px" }}>
                  {" "}
                  {e === 1 ? (
                    <Button
                      onClick={randomizeShape}
                      className="circle"
                    ></Button>
                  ) : e === 2 ? (
                    <Button
                      onClick={randomizeShape}
                      className="parallelogram"
                    ></Button>
                  ) : e === 3 ? (
                    <Button
                      onClick={randomizeShape}
                      className="rectangle"
                    ></Button>
                  ) : e === 4 ? (
                    <Button onClick={randomizeShape} className="oval"></Button>
                  ) : e === 5 ? (
                    <Button
                      onClick={randomizeShape}
                      className="up-triangle"
                    ></Button>
                  ) : e === 6 ? (
                    <Button
                      onClick={randomizeShape}
                      className="square"
                    ></Button>
                  ) : null}
                </li>
              );
            })}
      </ul>
    </div>
  );
}

export default Example;
