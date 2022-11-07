import React from 'react';
import ClockLoader from 'react-spinners/ClockLoader'

export default function Loader(props) {
    if(props.disable == false){
  return (
  
    <ClockLoader color="#131212" />
);
}
else{
    return
}
}