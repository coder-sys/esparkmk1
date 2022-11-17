import React, { useState } from 'react';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import {  data,sliderSettings } from '../../data/CarouselData';
import { Row, Heading, Section, TextWrapper } from '../../globalStyles';
import {
	ButtonContainer,
	ReviewSlider,
	ImageWrapper,
	CardButton,
} from './CarouselStyles';

function description_loader(description){
	if(description.length>25){
	return(
	<TextWrapper style={{fontSize:'10px'}} margin="0.7rem" color="#4f4f4f">
				{description}
			</TextWrapper>
	)
	}
}
	

const CarouselGoogle = (props) => {
	const [sliderRef, setSliderRef] = useState(null);
	const [show,setShow] = useState(true)
	console.log(props.retrievegoogledata1,props.retrievegoogledata2,props.description)
	props.setConsent(true)
	return (
		<Section margin="auto" maxWidth="1280px" padding="50px 70px" inverse>
			
			<Row justify="space-between" margin="1rem" wrap="wrap">
				<Heading width="auto" inverse>
					{props.googlesearchtitle}
				</Heading>
				<ButtonContainer>
					<IconContext.Provider value={{ size: '3rem', color: '#1d609c' }}>
						<div style={{opacity:0}}>
					<FaArrowCircleLeft />
						<FaArrowCircleRight />
						</div>
					<TextWrapper size="1.1rem" margin="0.4rem 0 0" weight="bold">
					Use Arrows to navigate
					</TextWrapper>

					</IconContext.Provider>
				</ButtonContainer>
			</Row>
				
			<ReviewSlider {...sliderSettings(3)} ref={setSliderRef}>
				
				{
				props.retrievegoogledata2.map((data, index) => {
					console.log(props.stored_data)
		return(
		<ImageWrapper key={index}>
			<TextWrapper size="1.1rem" margin="0.4rem 0 0" weight="bold">
				<a href={data} target={'_blank'}>{props.retrievegoogledata1[index]}</a>
			</TextWrapper>
			
			<TextWrapper style={{'fontSize':'9.75px'}} margin="0.7rem" color="#4f4f4f">
				{props.description[index]}
			</TextWrapper>
			<TextWrapper>
			<CardButton onClick={
				    ()=>props.save_data(props.setue,data,props.update_effect,props.linkjoin_,props.retrievegoogledata1,index,props.djoin_,props.stored_data,props.name,props.lastname,props.email,props.foldername,props.description)

           
           } disabled={props.stored_data[index]} >Save</CardButton><br></br><br></br>

			</TextWrapper>
		</ImageWrapper>
		)})}
			</ReviewSlider>
		</Section>
	);
};

export default CarouselGoogle;
