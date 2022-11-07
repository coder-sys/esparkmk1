import React, { useState,useEffect } from 'react';
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
} from './FormStyles';
import NameList from '../NameList/NameList';

import { Container } from '../../globalStyles';
import validateForm from './validateForm';

const FormStudentQuery = (props) => {
	const [query, setQuery] = useState('');
	const [error, setError] = useState(null);
	const [success, setSuccess] = useState(null);
    const [access,setAccess] = useState("denied")
	const [selectedParam,setSelectedParam] = useState('')
	const [results,setResults] = useState([])
	const [updated,setUpdated] = useState(0)
	const [opacity,setOpacity] = useState(0)
	const handleSubmit = (e) => {
		e.preventDefault();
		const resultError = validateForm({ setQuery });

		if (resultError !== null) {
			setError(resultError);
			return;
		}
		setQuery('');

		setError(null);
	};

	const messageVariants = {
		hidden: { y: 30, opacity: 0 },
		animate: { y: 0, opacity: 1, transition: { delay: 0.2, duration: 0.4 } },
	};

	const formData = [
		{ label: 'Search Student', value: query, onChange: (e) => {setQuery(e.target.value);setOpacity(0.759)}, type: 'text' },
	
		
	];
   useEffect(async()=>{
	let select = document.getElementById('param')
									   console.log(select[select.selectedIndex].text)
									   setSelectedParam(select[select.selectedIndex].text)
									   let api = await fetch(`http://localhost:8000/load_data_by_param/${select[select.selectedIndex].text}`)
									   api = await api.json()
									   console.log(api.data)
									   setResults(api.data)
   },[updated])
	return (
		<FormSection>
			<Container>
				<FormRow>
					<FormColumn small>
						<FormTitle>Student Research Query</FormTitle>
						<FormWrapper onSubmit={handleSubmit}>
							{formData.map((el, index) => (
								<FormInputRow key={index}>
									<FormLabel>{el.label}</FormLabel>
									<FormInput
										type={el.type}
										placeholder={`Search for ${el.label.toLocaleLowerCase()}`}
										value={el.value}
										onChange={el.onChange}
									/>
								</FormInputRow>
							))}
<div style={{transform:'translate(40%,0px)'}}>
<select name="param" id="param">
  <option value="firstname">firstname</option>
  <option value="email">email</option>
</select></div>
							<FormButton onClick={async()=>{
								       let select = document.getElementById('param')
									   console.log(select[select.selectedIndex].text)
									   setSelectedParam(select[select.selectedIndex].text)
									   let api = await fetch(`http://localhost:8000/load_data_by_param/${select[select.selectedIndex].text}`)
									   api = await api.json()
									   console.log(api.data)
									   setResults(api.data)
							}} type="submit">Student Research Query</FormButton>
                            <div style={{'width':'100%'}}>
								<NameList opacity={opacity} query={query} nameoptions={results} param={selectedParam} />
									</div>

						</FormWrapper>
						{error && (
							<FormMessage
								variants={messageVariants}
								initial="hidden"
								animate="animate"
								error
							>
								{error}
							</FormMessage>
						)}
						{success && (
							<FormMessage
								variants={messageVariants}
								initial="hidden"
								animate="animate"
							>
								{success}
							</FormMessage>
						)}

					</FormColumn>

				</FormRow>

			</Container>
		</FormSection>
	);
};

export default FormStudentQuery;