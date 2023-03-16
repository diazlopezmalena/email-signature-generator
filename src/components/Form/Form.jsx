import React, { useState } from 'react';
import SignatureTemplate from '../SignatureTemplate/SignatureTemplate';

function EmailSignatureMaker() {
  const [name, setName] = useState('');
  const [surname, setSurName] = useState('');
  const [position, setPosition] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [web, setWeb] = useState('');
  const [social, setSocial] = useState('');

  // Función para generar la firma de correo electrónico
  /*Hola
  function generateSignature() {
    const signature = `${name}\n${puesto}\n${phone}\n${email}`;
    return signature;
  }*/

  return (
    <div>
      <h1>Email Signature Maker</h1>
      <form>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>SurName:</label>
          <input type="text" value={surname} onChange={(e) => setSurName(e.target.value)} />
        </div>
        <div>
          <label>Position:</label>
          <input type="text" value={position} onChange={(e) => setPosition(e.target.value)} />
        </div>
        <div>
          <label>Phone:</label>
          <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </div>
        <div>
          <label>Email:</label>
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Web Site:</label>
          <input type="text" value={web} onChange={(e) => setWeb(e.target.value)} />
        </div>
        <div>
          <label>Social Media:</label>
          <input type="text" value={social} onChange={(e) => setSocial(e.target.value)} />
        </div>
      </form>
      <SignatureTemplate name={name} surname={surname} occupation={position} email={email} instagram={social} webSite={web} phone={phone} imageSrc='https://files.embluemail.com/uo/43871/slides5-19.jpg'  />
    </div>
    /*<hr />
      <h2>Signature Preview:</h2>
      <p>{generateSignature()}</p> */
  );
}

export default EmailSignatureMaker;
