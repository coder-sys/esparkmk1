const get_student_ref_link = async(data)=>{
    //homepage redirect
    
        let api = await fetch(`http://localhost:8000/email_to_firstname/${data}`)
        api = await api.json()
      //  return api['data']
      return `http://localhost:3000/homepage/${api['data']}/student`
}
export default get_student_ref_link