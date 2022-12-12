const get_student_ref_link = async(data)=>{
    //homepage redirect
    
        let api = await fetch(`http://35.193.47.255/email_to_firstname/${data}`)
        api = await api.json()
      //  return api['data']
      return `https://e-spark-prod.ecsbeats.repl.co/homepage/${api['data']}/student`
}
export default get_student_ref_link