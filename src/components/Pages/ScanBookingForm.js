import React, { useState } from 'react'
import Footer from "../Home/Footer/Footer";
import SliderInner from '../SliderInner/SliderInner';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';


export default function ScanBookingForm() {

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <>
      <SliderInner />

<p>Scan form</p>

      <Footer />
    </>
  )
}
