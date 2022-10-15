import React, { useState } from "react";
import { Button, Col, Form, Row, FloatingLabel, Alert } from "react-bootstrap";
import * as yups from "yup";
import { Formik } from "formik";
import { useLocation } from "react-router-dom";
import * as AI from "react-icons/ai";
import { newType, existType, plansNet, plansTvNet } from "../data/data";
import emailjs from '@emailjs/browser';

const schema = yups.object().shape({
    fname: yups.string().required().min(5),
    addr: yups.string().required().min(15),
    cnum: yups.string().required().matches(/^(09|\+639)\d{9}$/),
    email: yups.string().email().required(),
    type: yups.string().required(),
    plan: yups.string().required(),
    terms: yups.bool().required().oneOf([true], "Terms must be accepted"),
});

function ApplyPage() {
    const location = useLocation();
    const [show, setShow] = useState(false);
    const [type, setType] = useState(location.state && location.state.type ? location.state.type : '');

    const apply = ( v, a ) => {
        var type = '', plan ='', subs  = v.type.split('-'), planD={}, tempData ={};
        if(subs.length > 1 && subs[0] === 'new'){
            type = "New Install - " + newType.filter((e) => e.val === v.type)[0].name;
            console.log(type);
        }else{
            type = "Existing Subscriber - " + existType.filter((e) => e.val === v.type)[0].name;
        }
        if(subs.length > 1) {
            if( subs[1] === "tv"){
                plan = "Cable Subscription - ₱ 350.00/month"
            }else{
                if(subs[1] === "net"){
                    planD = plansNet.filter((e) => e.val+"" === v.plan);
                }else if(subs[1] === "netv") {
                    planD = plansTvNet.filter((e) => e.val+"" === v.plan);
                }
                if(planD.length > 0){
                    plan = "Plan "+planD[0].mbps +"mbps +CATv - ₱ " + planD[0].val + ".00/month";
                }else{
                    a.setFieldError("plan", "error");
                    a.setFieldValue("plan", "");
                    return;
                }
            }
        }

        tempData.from_name = v.fname;
        tempData.contact_no = v.cnum;
        tempData.address = v.addr;
        tempData.email = v.email;
        tempData.type = type;
        tempData.plan = plan;

        emailjs.send('service_vudz76p','template_au933lh', tempData, 'fh3FdXZaiy-6BdO6s')
            .then((response) => {
                setShow(true);
                a.resetForm();
            }, (err) => {
               console.log('FAILED...', err);
            });
            
    }
    return (
            <section id="apply">
                <h2>Apply Form</h2>
                <Formik
                    validationSchema={schema}
                    onSubmit={(values, actions ) => { 
                        apply(values, actions); 
                        
                    } }
                    initialValues={{
                        fname: "",
                        addr: "",
                        cnum: "",
                        email: "",
                        plan: location.state ?  location.state.price : '',
                        type: location.state ?  location.state.plan === "cable" ? 'new-tv' : (location.state.plan < 100 ? 'new-netv' : 'new-net') : '',
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
                                                    touched.fname &&
                                                    !errors.fname
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
                                        <Form.Text id="cnumHint" className="text-light">
                                            Contact Number must starts with 09
                                            or +639 followed by 9-digit number.
                                        </Form.Text>
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
                                                    touched.email &&
                                                    !errors.email
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
                                                        value={type}
                                                        checked={type === "new"}
                                                        onChange={() => {
                                                            values.type = "";
                                                            values.plan = "";
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
                                                        value={type}
                                                        checked={type === "exist"}
                                                        onChange={() => {
                                                            values.type = "";
                                                            values.plan = "";
                                                            errors.type = true;
                                                            errors.plan = true;
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
                                                <option value="" hidden >Select Installation Type</option>
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
                                                <option value="" hidden >Select Plan</option>
                                                {values.type === "new-tv" ||
                                                values.type === "exi-tv"
                                                    ?   <option value="350">
                                                            Cable Subscription - ₱ 350.00/month
                                                        </option>
                                                    : ""}
                                                {values.type === "new-net" ||
                                                values.type === "exi-net"
                                                    ? plansNet.map((v, i) => (
                                                        <option key={i} value={v.val}>
                                                            Plan {v.mbps}mbps - ₱ {v.val}.00/month
                                                        </option>
                                                      ))
                                                    : ""}
                                                {values.type === "new-netv" ||
                                                values.type === "exi-netv"
                                                    ? plansTvNet.map((v, i) => (
                                                          <option key={i} value={v.val}>
                                                            Plan {v.mbps}mbps +CATv - ₱ {v.val}.00/month
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
                                <button
                                    type="submit"
                                    className="apply-btn p-2 px-4"
                                >
                                        Submit {" "}
                                        <AI.AiOutlineSend className="apply-ic" />
                                </button>
                            </Form>
                            <Alert
                                className="position-absolute top-50 start-50 translate-middle"
                                show={show}
                                variant="primary"
                            >
                                <Alert.Heading>
                                    Thank You for Applying to our site.
                                </Alert.Heading>
                                <p>
                                    You will be notified once the application is out for installation, Thank you!.
                                </p>
                                <hr />
                                <div className="d-flex justify-content-end">
                                    <Button
                                        onClick={() => setShow(false) }
                                        variant="outline-primary"
                                    >
                                        Okay
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
