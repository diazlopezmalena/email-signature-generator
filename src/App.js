import './App.css';

// import SignatureTemplate from './components/SignatureTemplate/SignatureTemplate';
import ComponenteA from './components/ComponenteA/ComponenteA';

function App() {
  return (
    <div className="App">
      

      <ComponenteA name='Malena' surname='Díaz' occupation='Web Developer at emBlue' email='diazlopezmalena@gmail.com' instagram='https://www.instagram.com/malenadiazlopez/' webSite='www.myweb.com' phone='000' imageSrc='https://i.ibb.co/9vMvcWK/profile.png'  />      
    </div>
  );
}

export default App;

{/* <SignatureTemplate name='Malena' surname='Díaz' occupation='Web Developer at emBlue' email='diazlopezmalena@gmail.com' instagram='https://www.instagram.com/malenadiazlopez/' webSite='www.myweb.com' phone='000' imageSrc='https://i.ibb.co/9vMvcWK/profile.png'  /> */}