import React,{useState,useReducer,useEffect} from 'react';
import { HeroVideo, HeroSection, HeroText, ButtonWrapper, HeroButton } from './HeroStyles';
import FormFolderContentGoogle from '../Form/FormFolderContentGoogle';
import FormFolderContentYouTube from '../Form/FormFolderContentYouTube';
import translateLink from '../../functions/translatelink';
import Loader from '../Loader/Loader';
import save_google_data from '../../functions/save_google_data';
import save_youtube_data from '../../functions/save_youtube_data';
import ClockLoader from 'react-spinners/ClockLoader'

const HeroFolderContent = (props) => {
    const [name,setName] = useState(props.name)
    const [foldername,setFolderName] = useState(props.foldername)
    const [ut,setUT] = useState(props.ut)
    const [email,setEmail] = useState('')
    const [lastname,setLastName] = useState('')
    const [googlesearch,setGoogleSearch] = useState('')
    const [retrievegoogledata1,setRetrieveGoogleData1] = useState([])
    const [retrievegoogledata2,setRetrieveGoogleData2] = useState([])
    const [description,setDescription] = useState([])
    const [youtubesearch,setYoutubeSearch] = useState('')
    const [linkjoin,setLinkJoin] = useState([])
    const [djoin,setDJoin] = useState([])
    const [youtubeAPITitles,setyoutubeAPITitles] = useState([])
    const [youtubeAPILinks,setyoutubeAPILinks] = useState([])
    const [updated,setUpdated] = useState(0)
    const [stored_data_array,setStored_dataArray] = useState([])
    const [linkarray,setLinkarray] = useState([])
    const [update_effect,setue]= useState(0)
    const [thumbnail,setThumbnail] = useState([])
    const [stored_data,setStoredData] = useState([])
    const [stored_data_yt,setStoredDataYT] = useState([])
    const [consent,setConsent] = useState(true)


   

      
    const UE = async()=>{
    try{
    let emailandlastname = await fetch(`http://localhost:8000/get_last_name_and_email/${name}`)
emailandlastname = await emailandlastname.json()
setEmail(emailandlastname['email'])
setLastName(emailandlastname['lastname'])
    let lapi = await fetch('http://localhost:8000/get_stored_links/'+name+emailandlastname['lastname']+emailandlastname['email']+'/'+foldername)
    lapi = await lapi.json()
    console.log(lapi)
    setLinkarray(lapi.data)
    console.log(linkarray)
}
    catch(err){
        console.log(err)
    }
    let emailandlastname = await fetch(`http://localhost:8000/get_last_name_and_email/${name}`)
    emailandlastname = await emailandlastname.json()
    setEmail(emailandlastname['email'])
    setLastName(emailandlastname['lastname'])

                      let api = await fetch(`http://localhost:8000/load_data/${name+emailandlastname['lastname']+emailandlastname['email']}/${foldername}`)
                      api = await api.json()
                      console.log(api.data)
                       setStored_dataArray(api.data)
                      console.log(stored_data_array)
    console.log(consent)
    }
    useEffect(()=>{UE()},[update_effect])

        return (
            <>
                <HeroVideo src="./assets/hero.mp4" loop autoPlay muted />
                {
                    [1].map((data,index)=>{
                        
                        return(
                            <props.CarouselStoredData setue={setue} update_effect={update_effect} stored_data_array={stored_data_array} name={name} ut={ut} foldername={foldername} />
                        )
                    })
                }
                <FormFolderContentGoogle setConsent={setConsent} setStoredData={setStoredData} setGoogleSearch={setGoogleSearch} update_effect={update_effect} name={name} setName={setName} foldername={foldername} setUpdated={setUpdated} setue={setue} googlesearch={googlesearch} retrievegoogledata1={retrievegoogledata1} setRetrieveGoogleData1={setRetrieveGoogleData1} retrievegoogledata2={retrievegoogledata2} setRetrieveGoogleData2={setRetrieveGoogleData2} description={description} setDescription={setDescription} youtubeAPITitles={youtubeAPITitles} setyoutubeAPITitles={setyoutubeAPITitles} youtubeAPILinks={youtubeAPILinks} setyoutubeAPILinks={setyoutubeAPILinks} translateLink={translateLink} />
                {[1].map((data,index)=>{
                    console.log(name)
                    var linkjoin_ = []
                    var djoin_ = [] 
                    
                    return(        

                         <props.CarouselGoogle setConsent={setConsent}  save_data={save_google_data} foldername={foldername} email={email} lastname={lastname} name={name} djoin_={djoin_} retrievegoogledata2={retrievegoogledata2} retrievegoogledata1={retrievegoogledata1} description={description} update_effect={update_effect} setue={setue} linkjoin_={linkjoin_} stored_data={stored_data} djoin={djoin} linkjoin={linkjoin}  />
                    )

}
)
}
                <FormFolderContentYouTube youtubesearch={youtubesearch} setYoutubeSearch={setYoutubeSearch} setUpdated={setUpdated} updated={updated} setue={setue} update_effect={update_effect} setyoutubeAPITitles={setyoutubeAPITitles} setyoutubeAPILinks={setyoutubeAPILinks} setThumbnail={setThumbnail} translateLink={translateLink} setStoredDataYT={setStoredDataYT} linkarray={linkarray} />
                {[1].map((data,index)=>{
                    return(
                        <props.CarouselYouTube thumbnail={thumbnail} save_data={save_youtube_data} youtubeAPILinks={youtubeAPILinks} youtubeAPITitles={youtubeAPITitles} stored_data_yt={stored_data_yt} setue={setue} update_effect={update_effect} name={name} foldername={foldername} />
                    )
                })}
            </>
        );
    };
    
    export default HeroFolderContent;