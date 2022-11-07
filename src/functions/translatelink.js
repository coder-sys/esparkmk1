async function translateLink(data_){
    let __data__ = []
 data_.map(async(data,index)=>{
    if (data.split('=')[1] == undefined){
        __data__.push(data)
    }else{
         __data__.push(data.split('=')[1])
    }
 })
 return __data__
 }
 export default translateLink