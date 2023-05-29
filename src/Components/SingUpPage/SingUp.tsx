import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import {
  faAddressBook,
  faArrowLeftLong,
  faCity,
  faKey,
  faMailBulk,
  faPhone,
  faSignature,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import "./singUp.css";
import InputField from "./Input/InputField";

export default function SingUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [required, setRequired] = useState('Morate popuniti sva polja!');
  const [redirect, setRedirect] = useState(false);

  const navigate = useNavigate();

  async function sendSubmit(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    e.preventDefault();
    if (
      name === "" ||
      surname === "" ||
      city === "" ||
      address === "" ||
      phone === "" ||
      email === "" ||
      password === ""
    ) return setRequired("Sva polja moraju biti popunjena!");

    const addUser = await axios.post(`${process.env.REACT_APP_BASE_URL}api/user/addUser`, {
      email: email,
      password: password,
      name: name,
      surname: surname,
      city: city,
      address: address,
      phone: phone,
    })
    
    if (addUser.data.statusCode === -10001) {
      setRequired("Email je zauzet!");
      setRequired('');
    }

    setRedirect(true);
    setRequired('');
  }

  return (
    <section id="singUp">
      <div className="singUpContainer">
        <div className="socialSingUp">
          <a href="facebook.com">
              <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="instagram.com">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>

        <div className="form-header">
          <FontAwesomeIcon icon={faArrowLeftLong} onClick={() => navigate("/")} />
          <h1>Sing up</h1>
        </div>

        <form className="singUpForm">
          <InputField icon = {faSignature} text = {'Ime'} value = {name} onChange = {(e: any) => setName(e.target.value)} />
          <InputField icon = {faSignature} text = {'Prezime'} value = {surname} onChange = {(e: any) => setSurname(e.target.value)} />
          <InputField icon = {faCity} text = {'Grad'} value = {city} onChange = {(e: any) => setCity(e.target.value)} />
          <InputField icon = {faAddressBook} text = {'Adresa'} value = {address} onChange = {(e: any) => setAddress(e.target.value)} />
          <InputField icon = {faPhone} text = {'Telefon'} value = {phone} onChange = {(e: any) => setPhone(e.target.value)} />
          <InputField icon = {faMailBulk} type = {'email'} text = {'Email'} value = {email} onChange = {(e: any) => setEmail(e.target.value)} />
          <InputField icon = {faKey} type = {'password'} text = {'Password'} value = {password} onChange = {(e: any) => setPassword(e.target.value)} />
        </form>
        <div className="submitButton">
          <button onClick={(e) => sendSubmit(e)}>Posalji ...</button>
        </div>

        <div className="message">
          <p>
            {required}
            {redirect ? "Poslali smo vam email!" : ""}
          </p>
        </div>
      </div>
    </section>
  );
}
