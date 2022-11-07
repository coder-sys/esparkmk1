import React,{useState} from 'react';
import { Container } from '../../globalStyles';
import {
	FormColumn,
	FormWrapper,
	FormInput,
	FormSection,
	FormRow,
	FormLabel,
	FormInputRow,
	FormMessage,
	FormButton,
	FormTitle,
} from '../Form/FormStyles';
function NameList(props){
	
	return (
		< >
			<Container style={{opacity:props.opacity}}>
                
				<FormRow>
					<FormColumn style={{opacity:.5}}>
						{
							props.nameoptions.filter(student=>student.toLowerCase().includes(props.query))
								.map((data,index)=>{
									if(index<4){
										return(
											<FormRow key={index}>
											<FormMessage><p style={{'color':'black'}}><b>{data}</b></p></FormMessage>
					</FormRow>
										)
									}
								
							})
					
}
						
					</FormColumn>
				
				</FormRow>
			</Container>
		</>
	);
};

export default NameList;
