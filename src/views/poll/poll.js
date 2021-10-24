import React from "react";
import {
  Form,
  Input,
  Card,
  Button,
  Typography,
  Collapse,
  Radio,
  Space,
  Popover,
  Select,
} from "antd";
import { durations, popOverData } from "../../constants";
import styles from "./poll.module.css";
const { Title, Text } = Typography;
const { Panel } = Collapse;

// {
//     "title": "poll6 title",
//     "group_content_access": 2,
//     "group_id": 63606,
//     "runtime": "0",
//     "active": 1,
//     "choice": [
//         {
//             "chtext": "100",
//             "weight": "1"
//         },
//         {
//             "chtext": "200",
//             "weight": "2"
//         },
//         {
//             "chtext": "300",
//             "weight": "3"
//         }
//     ]
// }

export default function Poll() {
  const onFinish = (values) => {
    console.log(values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className={styles.poll}>
      <Card bordered={true} className={styles.card}>
        <Form
          name="basic"
          layout="vertical"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Question"
            name="title"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>
          <Title level={5}>Choice</Title>
          <Button type="primary">More Choices</Button>
          <Collapse ghost>
            <Panel header="Poll Settings" key="1">
              <Form.Item name="active" label="Poll Status">
                <Radio.Group defaultValue="1">
                  <Space direction="vertical">
                    <Radio value="0">Closed</Radio>
                    <Radio value="1">Active</Radio>
                  </Space>
                </Radio.Group>
              </Form.Item>
              <Popover content={popOverData}>
                <Text>More Information?</Text>
              </Popover>
              <Form.Item
                label="Poll Duration"
                name="duration"
                defaultValue="Unlimited"
              >
                <Select defaultValue="Unlimited">
                  {durations.map((item, index) => (
                    <Select.Option value={item.value} key={index}>
                      {item.value}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>
              <Popover content={popOverData}>
                <Text>More Information?</Text>
              </Popover>
            </Panel>
          </Collapse>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Save
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}
