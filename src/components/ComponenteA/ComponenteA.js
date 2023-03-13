import CopiarAlPortapapeles from "../CopiarAlPortapapeles/CopiarAlPortapapeles";
// import SignatureTemplate from "../SignatureTemplate/SignatureTemplate";


const ComponenteA = () => {
    const contenidoACopiar = (name, surname, occupation, email, instagram, webSite = '', phone = '', imageSrc) => {
        return (
            <table className='templateContainer'>
                <tr>
                    <td>
                        <div className="profilePicture"> 
                            <img src={imageSrc} alt={name + surname} />
                        </div>
                    </td>
                    <td className='templateContainerText'>
                        <p className='name'>{`${name} ${surname}`}</p>
                        <p className='ocuppation'>{occupation}</p>
                        <p>{email}</p>
                            
                        <a href={instagram} target='_blank' rel='noreferrer'> 
                            <img src='https://i.ibb.co/yR6Y26K/instagram.png' alt='' /> 
                        </a>
                        {/* <a href={facebook}> <img src='/images/facebook.svg' alt='' /> </a>
                        <a href={twitter}> <img src='/images/twitter.svg' alt='' /> </a>
                        <a href={youtube}> <img src='/images/youtube.svg' alt='' /> </a> */}
    
                        <p>{webSite}</p>
                        <p>{phone}</p>
                    
                    </td>
                </tr>
            </table>
        )
    
    }

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: contenidoACopiar('Malena', 'Díaz', 'Web Developer at emBlue', 'diazlopezmalena@gmail.com', 'https://www.instagram.com/malenadiazlopez/', 'www.myweb.com', '000', 'https://i.ibb.co/9vMvcWK/profile.png') }}></div>
      <CopiarAlPortapapeles contenido={contenidoACopiar('Malena', 'Díaz', 'Web Developer at emBlue', 'diazlopezmalena@gmail.com', 'https://www.instagram.com/malenadiazlopez/', 'www.myweb.com', '000', 'https://i.ibb.co/9vMvcWK/profile.png')} />
    </div>
  );
};

export default ComponenteA;

