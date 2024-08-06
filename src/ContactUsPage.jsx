import React from "react";
import { Form, Input, Button, notification } from "antd";
import {
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";
import emailjs from "emailjs-com";
import "./Contact.css";

const ContactUsPage = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    const templateParams = {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      message: values.message,
    };

    emailjs
      .send(
        "service_nr8x0ck", // Replace with your EmailJS service ID
        "template_nl1w2yc", // Replace with your EmailJS template ID
        templateParams,
        "jgUMKd3f3K9AHh2M2" // Replace with your EmailJS user ID
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        notification.success({
          message: "Form Submitted",
          description: "Your message has been sent successfully!",
        });
        form.resetFields();
      })
      .catch((error) => {
        console.log("FAILED...", error);
        notification.error({
          message: "Form Submission Failed",
          description: "Please check the form fields and try again.",
        });
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
    notification.error({
      message: "Form Submission Failed",
      description: "Please check the form fields and try again.",
    });
  };

  return (
    <>
      <div className="contact-container">
        <div className="contact-info">
          <h2>Get in touch with us</h2>
          <br />
          <p>
            <h3>Dr. Yike Shen</h3>
            <MailOutlined />{" "}
            <a href="mailto:yike.shen@uta.edu">yike.shen@uta.edu</a>
            <br />
            Department of Earth and Environmental Sciences
            <br />
            <EnvironmentOutlined /> University of Texas at Arlington
          </p>
          <br />
          <p>
            <h3>Dr. Feng Gao</h3>
            <MailOutlined />{" "}
            <a href="mailto:gaofeng@ucla.edu">gaofeng@ucla.edu</a>
            <br />
            Department of Environmental Health Sciences
            <br />
            Department of Molecular and Medical Pharmacology
            <br />
            <EnvironmentOutlined /> University of California, Los Angeles
          </p>
        </div>
        <div className="contact-form">
          <Form
            form={form}
            name="contact"
            layout="vertical"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              name="firstName"
              label="First Name"
              rules={[
                { required: true, message: "Please enter your first name" },
              ]}
            >
              <Input placeholder="First name" />
            </Form.Item>
            <Form.Item
              name="lastName"
              label="Last Name"
              rules={[
                { required: true, message: "Please enter your last name" },
              ]}
            >
              <Input placeholder="Last name" />
            </Form.Item>
            <Form.Item
              name="email"
              label="Email Address"
              rules={[
                {
                  required: true,
                  message: "Please enter your email address",
                  type: "email",
                },
              ]}
            >
              <Input placeholder="Email address" />
            </Form.Item>
            <Form.Item
              name="message"
              label="Message"
              rules={[{ required: true, message: "Please enter your message" }]}
            >
              <Input.TextArea placeholder="I'm interested in learning more about..." />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                style={{ backgroundColor: "#2c2c2c", borderColor: "#2c2c2c" }}
              >
                Send
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
      <footer className="footer">
        <p>© 2024 Cohort Network. All rights reserved.</p>
      </footer>
    </>
  );
};

export default ContactUsPage;
