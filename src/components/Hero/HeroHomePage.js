import React,{useState,useReducer,useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, MainHeading } from '../../globalStyles';
import { HeroVideo, HeroSection, HeroText, ButtonWrapper, HeroButton } from './HeroStyles';
import FormHomepage from '../Form/FormHomepage'
import { Content } from '../Content/Content';
import FormStudentQuery from '../Form/FormStudentQuery';
import CarouselStudentData from '../Carousel/CarouselStudentData';
import range_generator from '../../functions/range_generator';
const HeroHomePage = (props) => {
    const [sw,setSw] = useState(100)
const [hw,setHw] = useState(50)
const [sw1,setSw1] = useState(100)
const [hw1,setHw1] = useState(50)
const [name,setName] = useState(props.name)
const [folderfield,setFolderField] = useState('')
const [update,setUpdated] = useReducer(x=>x+1,0)
const [folderdata,setFolderData] = useState([])
const [ydt,setYdt] = useState([])
const [gdt,setGdt] = useState([])
const [jsonified_data,setJD] = useState({'google':0,'youtube':0})
const [user_type,setUT]=useState(props.ut)
const [student_data,setStudentData] = useState([])

  const Delete = async(foldername)=>{
    let emailandlastname = await fetch(`http://localhost:8000/get_last_name_and_email/${name}`)
    emailandlastname = await emailandlastname.json()
    let api = await fetch(`http://localhost:8000/delete_folder/${name+emailandlastname['lastname']+emailandlastname['email']}/${foldername}`)
    api = await api.json()
    console.log(api.status)
    let api1 = await fetch(`http://localhost:8000/get_folders/${name+emailandlastname['lastname']+emailandlastname['email']}`)
  api1 = await api1.json()
  console.log(api.data)
  setFolderData(api1.data)
  console.log(true,name+emailandlastname['lastname']+emailandlastname['email'])
  setUpdated()
  }
  
const UE = async()=>{
  const fetchData_student = async()=>{
let emailandlastname = await fetch(`http://localhost:8000/get_last_name_and_email/${name}`)
emailandlastname = await emailandlastname.json()
try{
let api1 = await fetch(`http://localhost:8000/get_folders/${name+emailandlastname['lastname']+emailandlastname['email']}`)
api1 = await api1.json()
console.log(api1.data)
let statsapi = await fetch(`http://localhost:8000/get_no_of_stored_content/${name+emailandlastname['lastname']+emailandlastname['email']}/${api1.data.join('-')}`)
console.log(statsapi.status)
console.log(`http://localhost:8000/get_no_of_stored_content/${name+emailandlastname['lastname']+emailandlastname['email']}/${api1.data.join('-')}`)
statsapi = await statsapi.json()

try{
setGdt(gdt.push(statsapi['data'][1]))
setYdt(ydt.push(statsapi['data'][0]))}
catch(err){console.log(err)}
setJD({
  'google':statsapi['data'][1],
  'youtube':statsapi['data'][0]
})

setFolderData(api1.data)

}catch(err){console.log('you have no folders')}
}
const fetchData_teacher =async () =>{
  let emailandlastname = await fetch(`http://localhost:8000/get_last_name_and_email/${name}`)
emailandlastname = await emailandlastname.json()
let student_data_1 = await fetch(`http://localhost:8000/view_student_data_alph_order`)
student_data_1 = await student_data_1.json()
setStudentData(student_data_1['data'])
console.log(student_data_1['data'])

}
if(user_type == 'student'){
fetchData_student()
}
if(user_type == 'teacher'){
  fetchData_teacher()
}
}
useEffect(()=>{UE()},[update])
if(user_type=='student'){
	return (
		<>
			<HeroVideo src="./assets/hero.mp4" loop autoPlay muted />

      <FormHomepage name={name} folderfield={folderfield} setFolderField={setFolderField} setUpdated={setUpdated} />
    {folderdata.map((data,index)=>{
      const heroOne = {
        reverse: true,
        inverse: true,
        topLine: {
          text: `Google data -> ${jsonified_data['google'][index]}  YouTube data -> ${jsonified_data['youtube'][index]}`,
        },
        headline: `${data}`,
        buttonLabel1: 'View',
        buttonLabel2: 'Delete',
        imgStart: 'start',
        img: './assets/svg/Deal.svg',
        start: 'true',
        df:()=>Delete(data),
        vf:()=>window.location.replace(`http://localhost:3000/foldercontent/${name}/${data}/${user_type}`),
        gdt:jsonified_data['google'][index],
        ydt:jsonified_data['youtube'][index]
      };
      return( 
         <Content {...heroOne} />
)})
    }
		</>
	)}
  if(user_type=='teacher'){
    return(
      <>

      <FormStudentQuery />
      {
        student_data.map((data,index)=>{
          console.log(data.length)
          return(
            <CarouselStudentData jsonified_data={data}/>
          )
        })
      }
      </>
    )
  }
};

export default HeroHomePage;
//                <Folder  google_data={jsonified_data['google'][index]} youtube_data={jsonified_data['youtube'][index]} task={()=>props.navigation.navigate('FolderContent',{'foldername_':{data},name:name,user_type:user_type})} data={data} dn={'Delete'} task1={()=>Delete(data)}/>
//56 - onClick={()=>props.navigation.navigate('Frontpage',{name:props.name})}