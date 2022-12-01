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


	

const CarouselGoogleConceptual = (props) => {
	const [sliderRef, setSliderRef] = useState(null);
	const [show,setShow] = useState(true)
	//console.log(props.csTitles)
	//console.log(props.csLinks)
	//console.log(props.csDescriptions)
	//console.log(props.csStoredData)
	return (
		<Section margin="auto" maxWidth="1280px" padding="50px 70px" inverse>
			
			<Row justify="space-between" margin="1rem" wrap="wrap">
				<Heading width="auto" inverse>
					<div style={{'fontSize':'1px'}}>{props.subtopic}</div>
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
				
			<ReviewSlider {...sliderSettings(props.csTitles.length/2)} ref={setSliderRef}>
				
				{
				props.csLinks.map((data, index) => {
					console.log(props.csStoredData)
		return(
		<ImageWrapper key={index}>
			<TextWrapper size="1.1rem" margin="0.4rem 0 0" weight="bold">
				<a href={data} target={'_blank'}>{props.csTitles[index]}</a>
			</TextWrapper>
			
			<TextWrapper style={{'fontSize':'9.75px'}} margin="0.7rem" color="#4f4f4f">
			{props.csDescriptions[index]}
			</TextWrapper>
			<TextWrapper>
			<CardButton onClick={
				    ()=>props.save_data(props.setue,data,props.update_effect,props.linkjoin_,props.csTitles,index,props.djoin_,props.csStoredData,props.name,props.lastname,props.email,props.foldername,props.csDescriptions)

           
           } disabled={props.csStoredData[index]} >Save</CardButton><br></br><br></br>

			</TextWrapper>
		</ImageWrapper>
		)})}
			</ReviewSlider>
		</Section>
	);
};

export default CarouselGoogleConceptual;
//			    {props.csDescriptions[index]}
