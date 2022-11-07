const save_google_data = async(setue,data,update_effect,linkjoin_,retrievegoogledata1,index,djoin_,stored_data,name,lastname,email,foldername)=>{
        setue(update_effect+1)
        data.split('').map((data_)=>{
            if(data_ == '/'){
                console.log('alert')
                data_ = '`'
            }
            linkjoin_.push(data_)

        })
        retrievegoogledata1[index].split('').map((_)=>{
            if(_ == '/'){
                _ = "`"
                console.log('alert')
            }
            djoin_.push(_)

        })
    

        stored_data[index] = true

    try{    
    let eal = await fetch(`http://localhost:8000/get_last_name_and_email/${name}`)
    eal = await eal.json()
        let api = await fetch(`http://localhost:8000/add_google_content/${name+lastname+email}/${foldername}/${djoin_.join("")}/${linkjoin_.join("")}`)
        api = await api.json()
        console.log(api)
    }
    catch(err){
     alert('This source has been forbidden from being stored')

    }
       
       
}
export default save_google_data;