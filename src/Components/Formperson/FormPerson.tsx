import {
  Input,
  Select,
  DatePicker,
  DatePickerProps,
  Button,
  Radio,
  RadioChangeEvent,
  Form,
  message,
  Table,
  Row,
  Popconfirm,
} from "antd";
import { SetStateAction, useState } from "react";
import type { ColumnsType, TableProps } from "antd/es/table";
import { useTranslation } from "react-i18next";
import "./Formperson.css";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import { addPerson, removeAllPersons, removePerson } from "./personSlice";

interface TableData {
  key: number;
  firstname: string;
  lastname: string;
  title: string;
  date: string;
  nationality: string;
  gender: string;
  passport: string;
  phone: string;
  salary: string;
}

const person: TableData = {
  key: 0,
  firstname: "",
  lastname: "",
  title: "",
  date: "",
  nationality: "",
  gender: "",
  passport: "",
  phone: "",
  salary: "",
};
type InputValue = string;
const handleChangeNo = (value: string) => {
  person.title = value;
};

const handleChangeNationality = (value: string) => {
  person.nationality = value;
};

interface DataType {
  key: React.Key;
  firstname: string;
  lastname: string;
  title: string;
  date: string;
  nationality: string;
  gender: string;
  passport: string;
  phone: string;
  salary: string;
}

function FormPerson() {
  const { t } = useTranslation(["home", "main"]);
  const [valueGender, setValueGender] = useState<InputValue>("");

  const dispatch = useDispatch();
  const data = useSelector((state: RootState) => state.person.data);
  const count = useSelector((state: RootState) => state.person.count);

  const onChangeRadio = (e: RadioChangeEvent) => {
    const updatedGender = e.target.value;
    setValueGender(updatedGender);
  };

  const [inputFirstName, setInputFristName] = useState<InputValue>("");
  const handleInputFirstName = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setInputFristName(event.target.value);
  };

  const [inputLastName, setInputLastName] = useState<InputValue>("");
  const handleInputLastName = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setInputLastName(event.target.value);
  };

  const [inputPhoneNumber, setInputPhoneNumber] = useState<InputValue>("");
  const handleInputPhoneNumber = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setInputPhoneNumber(event.target.value);
  };

  const [inputSummary, setInputSummary] = useState<InputValue>("");
  const handleInputSummary = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setInputSummary(event.target.value);
  };

  const [inputPassport, setInputPassport] = useState<InputValue>("");
  const handleInputPassport = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setInputPassport(event.target.value);
  };

  const onChangeDatePicker: DatePickerProps["onChange"] = (
    date,
    dateString
  ) => {
    person.date = dateString;
  };

  const [form] = Form.useForm();

  const handleAdd = () => {
    const newPerson: TableData = {
      key: count,
      firstname: inputFirstName,
      lastname: inputLastName,
      title: person.title,
      date: person.date,
      nationality: person.nationality,
      gender: valueGender,
      passport: inputPassport,
      phone: inputPhoneNumber,
      salary: inputSummary,
    };
    dispatch(addPerson(newPerson));
  };

  const handleRemoveAll = () => {
    dispatch(removeAllPersons());
  };

  const handleDelete = (key: React.Key) => {
    dispatch(removePerson(key));
  };
  const columns: ColumnsType<DataType> = [
    {
      title: "key",
      dataIndex: "key",
      key: "key",
      // render: (text) => <a>{text}</a>,
    },
    {
      title: t("firstname", { ns: ["home"] }),
      dataIndex: "firstname",
      key: "firstname",
      sorter: (a, b) => a.firstname.length - b.firstname.length,
    },
    {
      title: t("lastname", { ns: ["home"] }),
      dataIndex: "lastname",
      key: "lastname",
    },
    {
      title: t("date", { ns: ["home"] }),
      dataIndex: "date",
      key: "date",
    },
    {
      title: t("national", { ns: ["home"] }),
      dataIndex: "nationality",
      key: "nationality",
    },
    {
      title: t("passport", { ns: ["home"] }),
      dataIndex: "passport",
      key: "passport",
    },
    {
      title: t("gender", { ns: ["home"] }),
      dataIndex: "gender",
      key: "gender",
      sorter: (a, b) => a.gender.length - b.gender.length,
    },
    {
      title: t("phone", { ns: ["home"] }),
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: t("salary", { ns: ["home"] }),
      dataIndex: "salary",
      key: "salary",
    },
    {
      render: (_, record) => (
        <Popconfirm
          title="Sure to delete?"
          onConfirm={() => handleDelete(record.key)}
        >
          <a>Delete</a>
        </Popconfirm>
      ),
    },
  ];
  const onChange: TableProps<DataType>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra
  ) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  return (
    <>
      <div className="container">
        <h1 style={{ margin: "16px" }}>{t("form", { ns: ["home"] })}</h1>
        <div className="form-container">
          <Form form={form} autoComplete="off">
            <Row>
              <Form.Item
                style={{ margin: "4px" }}
                label={t("title", { ns: ["home"] })}
                rules={[
                  { required: true },
                  { warningOnly: true },
                  { type: "string" },
                ]}
              >
                <Select
                  placeholder={t("title", { ns: ["home"] })}
                  style={{ width: 100 }}
                  onChange={handleChangeNo}
                  options={[
                    {
                      value: t("mr", { ns: ["home"] }),
                      label: t("mr", { ns: ["home"] }),
                    },
                    {
                      value: t("miss", { ns: ["home"] }),
                      label: t("miss", { ns: ["home"] }),
                    },
                    {
                      value: t("mrs", { ns: ["home"] }),
                      label: t("mrs", { ns: ["home"] }),
                    },
                  ]}
                />
              </Form.Item>
              <Form.Item
                style={{ margin: "2px" }}
                label={t("firstname", { ns: ["home"] })}
                rules={[
                  { required: true },
                  { warningOnly: true },
                  { type: "string" },
                ]}
              >
                <Input
                  style={{ width: 100 }}
                  value={inputFirstName}
                  onChange={handleInputFirstName}
                />
              </Form.Item>
              <Form.Item
                style={{ margin: "2px" }}
                label={t("lastname", { ns: ["home"] })}
                rules={[
                  { required: true },
                  { warningOnly: true },
                  { type: "string" },
                ]}
              >
                <Input value={inputLastName} onChange={handleInputLastName} />
              </Form.Item>
            </Row>
            <Row>
              <Form.Item
                style={{ margin: "2px" }}
                label={t("date", { ns: ["home"] })}
                rules={[
                  { required: true },
                  { warningOnly: true },
                  { type: "string" },
                ]}
              >
                <DatePicker
                  format={"DD/MM/YYYY"}
                  onChange={onChangeDatePicker}
                />
              </Form.Item>

              <Form.Item
                style={{ margin: "2px" }}
                label={t("national", { ns: ["home"] })}
                rules={[
                  { required: true },
                  { warningOnly: true },
                  { type: "string" },
                ]}
              >
                <Select
                  placeholder={t("national", { ns: ["home"] })}
                  style={{ width: 100 }}
                  onChange={handleChangeNationality}
                  options={[
                    {
                      value: t("thai", { ns: ["home"] }),
                      label: t("thai", { ns: ["home"] }),
                    },
                    {
                      value: t("lao", { ns: ["home"] }),
                      label: t("lao", { ns: ["home"] }),
                    },
                    {
                      value: t("cambodia", { ns: ["home"] }),
                      label: t("cambodia", { ns: ["home"] }),
                    },
                  ]}
                />
              </Form.Item>

              <Form.Item
                style={{ margin: "2px" }}
                label={t("passport", { ns: ["home"] })}
                rules={[
                  { required: true },
                  { warningOnly: true },
                  { type: "string" },
                ]}
              >
                <Input
                  style={{ width: 300 }}
                  value={inputPassport}
                  onChange={handleInputPassport}
                />
              </Form.Item>
            </Row>

            <Row>
              <Form.Item
                style={{ margin: "2px" }}
                label={t("gender", { ns: ["home"] })}
                rules={[
                  { required: true },
                  { warningOnly: true },
                  { type: "string" },
                ]}
              >
                <Radio.Group
                  defaultValue={""}
                  onChange={onChangeRadio}
                  value={valueGender}
                >
                  <Radio value={"male"}>{t("male", { ns: ["home"] })}</Radio>
                  <Radio value={"female"}>
                    {t("female", { ns: ["home"] })}
                  </Radio>
                  <Radio value={"other"}>{t("other", { ns: ["home"] })}</Radio>
                </Radio.Group>
              </Form.Item>

              <Form.Item
                style={{ margin: "2px" }}
                label={t("phone", { ns: ["home"] })}
                rules={[
                  { required: true },
                  { warningOnly: true },
                  { type: "string" },
                ]}
              >
                <Input
                  value={inputPhoneNumber}
                  onChange={handleInputPhoneNumber}
                  style={{ width: 100 }}
                />
              </Form.Item>

              <Form.Item
                style={{ margin: "2px" }}
                label={t("salary", { ns: ["home"] })}
                rules={[
                  { required: true },
                  { warningOnly: true },
                  { type: "string" },
                ]}
              >
                <Input
                  style={{ width: 100 }}
                  value={inputSummary}
                  onChange={handleInputSummary}
                />
              </Form.Item>
            </Row>

            <Row className="button-row">
              <Form.Item>
                <Button onClick={handleAdd}>ส่งข้อมูล</Button>
              </Form.Item>
              <Form.Item>
                <Button onClick={handleRemoveAll}>ลบข้อมูลทั้งหมด</Button>
              </Form.Item>
            </Row>
          </Form>
        </div>
        <div className="table-container">
          <Table columns={columns} dataSource={data} onChange={onChange} />;
        </div>
      </div>
    </>
  );
}

export default FormPerson;
