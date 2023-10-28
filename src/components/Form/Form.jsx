import React, { useState } from 'react';
import SignatureTemplate from '../SignatureTemplate/SignatureTemplate';
import TestCopy from '../TestCopy/TestCopy';
import './Form.css'

function EmailSignatureMaker() {
  const [name, setName] = useState('');
  const [surname, setSurName] = useState('');
  const [position, setPosition] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [web, setWeb] = useState('');
  const [social, setSocial] = useState('');
  const [image, setImage] = useState('');

  // Función para generar la firma de correo electrónico
  /*Hola
  function generateSignature() {
    const signature = `${name}\n${puesto}\n${phone}\n${email}`;
    return signature;
  }*/

  return (
    <div><h1 className="block font-semibold mb-2">Email Signature Maker</h1>
    <div className="flex">
      <div className="flex-auto w-64">
      <form className="flex w-72 mx-auto">
        <div className="flex-auto w-64">    
        <div>
          <label className="block font-semibold mb-2" htmlFor="name">Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full mb-4 px-3 py-2 border rounded-md" id="name" name="name" required />
        </div>
        <div>
          <label className="block font-semibold mb-2" htmlFor="surname">SurName:</label>
          <input type="text" value={surname} onChange={(e) => setSurName(e.target.value)} className="w-full mb-4 px-3 py-2 border rounded-md" id="surname" name="surname" required />
        </div>
        <div>
          <label className="block font-semibold mb-2" htmlFor="position">Position:</label>
          <input type="text" value={position} onChange={(e) => setPosition(e.target.value)} className="w-full mb-4 px-3 py-2 border rounded-md" id="position" name="position" required />
        </div>
        <div>
          <label className="block font-semibold mb-2" htmlFor="phone">Phone:</label>
          <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full mb-4 px-3 py-2 border rounded-md" id="phone" name="phone"  />
        </div>
        </div>
        <div className="flex-auto w-64">
        <div>
          <label className="block font-semibold mb-2" htmlFor="email">Email:</label>
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full mb-4 px-3 py-2 border rounded-md" id="email" name="email" required/>
        </div>
        <div>
          <label className="block font-semibold mb-2" htmlFor="website">Web Site:</label>
          <input type="text" value={web} onChange={(e) => setWeb(e.target.value)} className="w-full mb-4 px-3 py-2 border rounded-md" id="website" name="website" required />
        </div>
        <div>
          <label className="block font-semibold mb-2" htmlFor="social">Social Media:</label>
          <input type="text" value={social} onChange={(e) => setSocial(e.target.value)} className="w-full mb-4 px-3 py-2 border rounded-md" id="social" name="social" required />
        </div>
        <div>
          <label className="block font-semibold mb-2" htmlFor="image">Image:</label>
          <input type="img" value={image} onChange={(e) => setImage(e.target.value)} className="w-full mb-4 px-3 py-2 border rounded-md" id="image" name="image" required />
        </div></div>
      </form>
      </div>
      <div className="flex-auto w-64">
      <TestCopy firma={<SignatureTemplate name={name} surname={surname} occupation={position} email={email} instagram={social} webSite={web} phone={phone} imageSrc={image}  />} />
      {/* <SignatureTemplate name={name} surname={surname} occupation={position} email={email} instagram={social} webSite={web} phone={phone} imageSrc={image}  /> */}
      {/* <SignatureTemplate name={name} surname={surname} occupation={position} email={email} instagram={social} webSite={web} phone={phone} imageSrc='https://i.ibb.co/9vMvcWK/profile.png'  /> */}
      </div>
      </div>
    </div>
    /*<hr />
      <h2>Signature Preview:</h2>
      <p>{generateSignature()}</p> */
  );
}

export default EmailSignatureMaker;
