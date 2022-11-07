const save_youtube_data = async(setue,update_effect,youtubeAPILinks,youtubeAPITitles,index,ytlinkjoin_,ytdjoin_,data,stored_data_yt,name,foldername)=>{
    //document.getElementById('savesourcebutton').disable = true
    
                                    setue(update_effect+1)
    
                                    youtubeAPILinks[index].split('').map((data_)=>{
    
                                        if(data_ == '/'){
                                            console.log('alert')
                                            data_ = '`'
                                        }
                                        ytlinkjoin_.push(data_)
        
                                    })
                                    data.split('').map((_)=>{
                                        if(_ == '/'){
                                            _ = "`"
                                             console.log('alert')
                                        }
                                        ytdjoin_.push(_)
        
                                    })
                                
                                    stored_data_yt[index] = true
                                    console.log(ytlinkjoin_)
                                    console.log('link is '+ytlinkjoin_.join("").split('=')[1])
                                    try{
      let emailandlastname = await fetch(`http://localhost:8000/get_last_name_and_email/${name}`)
      emailandlastname = await emailandlastname.json()
                console.log(ytlinkjoin_.join("").split('=')[1])
                                    let api = await fetch(`http://localhost:8000/add_youtube_content/${name+emailandlastname['lastname']+emailandlastname['email']}/${foldername}/${youtubeAPITitles[index]}/${ytlinkjoin_.join("").split('=')[1]}`)
                                    api = await api.json()
                                    console.log(api)}catch(err){alert('This youtube video is forbidden from being stored')}
                                   }
export default save_youtube_data;