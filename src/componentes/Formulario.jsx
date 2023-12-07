import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Formulario from "./Formulario.jsx";
import { useState } from "react";
import * as EmailValidator from "email-validator";

const Formulario = ({ agregarColaborador }) => {
  const [alertType, setAlertType] = useState("danger");
  const [alertText, setAlertText] = useState("Completa todos los campos!");
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [edad, setEdad] = useState("");
  const [cargo, setCargo] = useState("");
  const [telefono, setTelefono] = useState("");

  const validarYAgregarColaborador = (e) => {
    e.preventDefault();

    if (
      nombre == "" ||
      correo == "" ||
      edad == "" ||
      cargo == "" ||
      telefono == ""
    ) {
      setAlertText("Completa todos los campos!");
      setAlertType("danger");
    } else if (EmailValidator.validate(correo) == false) {
      setAlertText("Debe ingresar un correo válido");
      setAlertType("danger");
    } else {
      agregarColaborador({
        nombre: nombre,
        correo: correo,
        edad: edad,
        cargo: cargo,
        telefono: telefono,
      });
      setAlertText("Colaborador agregado !");
      setAlertType("success");

      setNombre("");
      setCorreo("");
      setEdad("");
      setCargo("");
      setTelefono("");
    }
  };

  return (
    <>
      <h1>Agregar colaborador</h1>
      <Formulario onSubmit={validarYAgregarColaborador}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Control
            type="text"
            placeholder="Nombre del colaborador"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="text"
            placeholder="Email del colaborador"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicAge">
          <Form.Control
            type="number"
            placeholder="Edad del colaborador"
            value={edad}
            onChange={(e) => setEdad(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPosition">
          <Form.Control
            type="text"
            placeholder="Cargo del colaborador"
            value={cargo}
            onChange={(e) => setCargo(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPhone">
          <Form.Control
            type="number"
            placeholder="Telefono del colaborador"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Agregar colaborador
        </Button>
      </Formulario>
      <Alert alertType={alertType} alertText={alertText} />
    </>
  );
};

export default Formulario;
