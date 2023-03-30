import { useRef } from "react";
import SignatureTemplate from "../SignatureTemplate/SignatureTemplate";

const TestCopy = () => {
  const divRef = useRef(null);

  const handleCopy = () => {
    const div = divRef.current;
    const range = document.createRange();
    range.selectNode(div);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
    console.log('Copiadoooo');
  };

  return (
    <>
      <div ref={divRef}>
        <SignatureTemplate name='Malena' surname='Díaz' occupation='Web Developer at emBlue' email='diazlopezmalena@gmail.com' instagram='https://www.instagram.com/malenadiazlopez/' webSite='www.myweb.com' phone='000' imageSrc='https://i.ibb.co/9vMvcWK/profile.png'  />
      </div>
      <button onClick={handleCopy}>Copiar</button>
    </>
  );
  
};

export default TestCopy;