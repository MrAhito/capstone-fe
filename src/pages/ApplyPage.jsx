import React, { useState } from "react";
import { Button, Col, Form, Row, FloatingLabel, Alert } from "react-bootstrap";
import * as yups from "yup";
import { Formik } from "formik";
import * as AI from "react-icons/ai";
// addr cnum email plan type
const schema = yups.object().shape({
    fname: yups.string().required(),
    addr: yups.string().required(),
    cnum: yups.string().required(),
    email: yups.string().email().required(),
    type: yups.string().required(),
    plan: yups.string().required(),
    terms: yups.bool().required().oneOf([true], "Terms must be accepted"),
});

function ApplyPage() {
    const [show, setShow] = useState(false);
    const [type, setType] = useState("");
    const newType = [
        { val: "new-tv", name: "Cable Only" },
        { val: "new-net", name: "Internet Only" },
        { val: "new-netv", name: "Cable and Internet" },
    ];
    const existType = [
        { val: "exi-netv", name: "Upgrade to Fiber" },
        { val: "exi-net", name: "Upgrade to Fiber Disconnect CATV" },
        { val: "exi-tv", name: "Upgrade Digital Box" },
    ];
    const plansNet = [
        "Plan 100mbps - ₱ 1500.00/month",
        "Plan 150mbps - ₱ 2250.00/month",
        "Plan 250mbps - ₱ 2750.00/month",
    ];
    const plansTv = ["Cable Subscription - ₱ 475.00/month"];
    const plansTvNet = [
        "Plan 15mbps +CATv - ₱ 1350.00/month",
        "Plan 30mbps +CATv - ₱ 1600.00/month",
        "Plan 50mbps +CATv - ₱ 1750.00/month",
        "Plan 100mbps +CATv - ₱ 1850.00/month",
        "Plan 150mbps +CATv - ₱ 2600.00/month",
        "Plan 250mbps +CATv - ₱ 3200.00/month",
    ];
    return (
        <section id="apply">
            <h2>Apply Form</h2>
            <Formik
                validationSchema={schema}
                onSubmit={() => {
                    setShow(true);
                }}
                initialValues={{
                    fname: "",
                    addr: "",
                    cnum: "",
                    email: "",
                    plan: "",
                    type: "",
                    terms: false,
                }}
            >
                {({
                    handleSubmit,
                    handleChange,
                    handleBlur,
                    values,
                    touched,
                    isValid,
                    errors,
                }) => (
                    <>
                        <Form noValidate onSubmit={handleSubmit}>
                            <Row className="mb-1">
                                <Form.Group
                                    as={Col}
                                    md="12"
                                    controlId="fname"
                                    className="mt-3"
                                >
                                    <FloatingLabel label="Full name">
                                        <Form.Control
                                            onChange={handleChange}
                                            type="text"
                                            value={values.fname}
                                            name="fname"
                                            placeholder="Full name"
                                            isValid={
                                                touched.fname && !errors.fname
                                            }
                                            isInvalid={!!errors.fname}
                                        />
                                    </FloatingLabel>
                                </Form.Group>
                                <Form.Group
                                    as={Col}
                                    md="12"
                                    controlId="addr"
                                    className="mt-3"
                                >
                                    <FloatingLabel label="Address">
                                        <Form.Control
                                            onChange={handleChange}
                                            type="text"
                                            value={values.addr}
                                            name="addr"
                                            placeholder="Address"
                                            isValid={
                                                touched.addr && !errors.addr
                                            }
                                            isInvalid={!!errors.addr}
                                        />
                                    </FloatingLabel>
                                </Form.Group>
                                <Form.Group
                                    as={Col}
                                    md="12"
                                    controlId="cnum"
                                    className="mt-3"
                                >
                                    <FloatingLabel label="Contact Number">
                                        <Form.Control
                                            onChange={handleChange}
                                            type="text"
                                            value={values.cnum}
                                            name="cnum"
                                            placeholder="Contact Number"
                                            isValid={
                                                touched.cnum && !errors.cnum
                                            }
                                            isInvalid={!!errors.cnum}
                                        />
                                    </FloatingLabel>
                                </Form.Group>
                                <Form.Group
                                    as={Col}
                                    md="12"
                                    controlId="email"
                                    className="mt-3"
                                >
                                    <FloatingLabel label="E-mail Address">
                                        <Form.Control
                                            onChange={handleChange}
                                            value={values.email}
                                            isValid={
                                                touched.email && !errors.email
                                            }
                                            isInvalid={!!errors.email}
                                            name="email"
                                            type="email"
                                            placeholder="E-mail Address"
                                        />
                                    </FloatingLabel>
                                </Form.Group>
                                <Form.Group
                                    as={Col}
                                    md="12"
                                    controlId="type"
                                    className="mt-3"
                                >
                                    <FloatingLabel
                                        label="Type"
                                        className="type-label"
                                    >
                                        <Form.Check className="radio-input">
                                            <Form.Check.Label>
                                                <Form.Check.Input
                                                    type="radio"
                                                    name="type"
                                                    onChange={() => {
                                                        values.type="";
                                                        values.plan="";
                                                        errors.type = true;
                                                        errors.plan = true;
                                                        setType("new");
                                                    }}
                                                />
                                                New
                                            </Form.Check.Label>
                                        </Form.Check>
                                        <Form.Check className="radio-input">
                                            <Form.Check.Label>
                                                <Form.Check.Input
                                                    type="radio"
                                                    name="type"
                                                    onChange={() => {
                                                        values.type="";
                                                        values.plan="";
                                                        setType("exist");
                                                    }}
                                                />
                                                Existing
                                            </Form.Check.Label>
                                        </Form.Check>
                                        <Form.Select
                                            className="select-type"
                                            onChange={handleChange}
                                            value={values.type}
                                            name="type"
                                            isValid={
                                                touched.type && !errors.type
                                            }
                                            isInvalid={!!errors.type}
                                        >
                                            <option value="" hidden></option>
                                            {type === "new"
                                                ? newType.map((v, i) => (
                                                      <option
                                                          key={i}
                                                          value={v.val}
                                                      >
                                                          {v.name}
                                                      </option>
                                                  ))
                                                : ""}

                                            {type === "exist"
                                                ? existType.map((v, i) => (
                                                      <option
                                                          key={i}
                                                          value={v.val}
                                                      >
                                                          {v.name}
                                                      </option>
                                                  ))
                                                : ""}
                                        </Form.Select>
                                    </FloatingLabel>
                                </Form.Group>
                                <Form.Group
                                    as={Col}
                                    md="12"
                                    controlId="plan"
                                    className="mt-3"
                                >
                                    <FloatingLabel label={"Plan"}>
                                        <Form.Select
                                            onChange={handleChange}
                                            value={values.plan}
                                            name="plan"
                                            isValid={
                                                touched.plan && !errors.plan
                                            }
                                            isInvalid={!!errors.plan}
                                        >
                                            <option value="" hidden></option>
                                            {values.type === "new-tv" || values.type === "exi-tv"
                                                ? plansTv.map((v, i) => (
                                                      <option key={i}>
                                                          {v}
                                                      </option>
                                                  ))
                                                : ""}
                                            {values.type === "new-net" || values.type === "exi-net"
                                                ? plansNet.map((v, i) => (
                                                      <option key={i}>
                                                          {v}
                                                      </option>
                                                  ))
                                                : ""}
                                            {values.type === "new-netv" || values.type === "exi-netv"
                                                ? plansTvNet.map((v, i) => (
                                                      <option key={i}>
                                                          {v}
                                                      </option>
                                                  ))
                                                : ""}

                                        </Form.Select>
                                    </FloatingLabel>
                                </Form.Group>
                            </Row>
                            <Form.Group
                                md="12"
                                className="mb-4 mt-3 text-light"
                            >
                                <Form.Check
                                    name="terms"
                                    label="Agree to terms and conditions"
                                    onChange={handleChange}
                                    isInvalid={!!errors.terms}
                                    id="validationFormik0"
                                    feedback="You must agree before submitting."
                                    feedbackType="invalid"
                                />
                            </Form.Group>
                            <button type="submit" className="apply-btn px-5">
                                Apply <AI.AiOutlineSend className="apply-ic" />
                            </button>
                        </Form>
                        <Alert
                            className="position-absolute top-50 start-50 translate-middle"
                            show={show}
                            variant="success"
                        >
                            <Alert.Heading>
                                Welcome to my Simple App
                            </Alert.Heading>
                            <p>
                                Thank you for signing up to my app,{" "}
                                {values.fname}. You will be notified for future
                                updates for this app.
                            </p>
                            <hr />
                            <div className="d-flex justify-content-end">
                                <Button
                                    onClick={() => setShow(false)}
                                    variant="outline-success"
                                >
                                    Close me y'all!
                                </Button>
                            </div>
                        </Alert>
                    </>
                )}
            </Formik>
            <div className="bg"></div>
        </section>
    );
}

export default ApplyPage;
