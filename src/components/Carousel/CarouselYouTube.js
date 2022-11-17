import React, { useState } from 'react';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import {  data,sliderSettings } from '../../data/CarouselData';
import { Row, Heading, Section, TextWrapper } from '../../globalStyles';
import {
	ButtonContainer,
	ReviewSlider,
	ImageWrapper,
	CarouselImage,
	CardButton,
} from './CarouselStyles';

	 
	

const CarouselYouTube = (props) => {
	const [sliderRef, setSliderRef] = useState(null);
	const [show,setShow] = useState(true)

	return (
		<Section margin="auto" maxWidth="1280px" padding="50px 70px" inverse>
			<Row justify="space-between" margin="1rem" wrap="wrap">
				<Heading width="auto" inverse>
				{props.youtubesearchtitle}
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
				
			<ReviewSlider {...sliderSettings(props.youtubeAPILinks.length/5.5)} ref={setSliderRef}>
				
				{
				props.youtubeAPILinks.map((data, index) => {
                        let ytlinkjoin_ = []
                        let ytdjoin_ = []
						
		return(
		<ImageWrapper key={index}>
						<CarouselImage src={props.thumbnail[index]} />

			<TextWrapper size="1.1rem" margin="0.4rem 0 0" weight="bold">
				<a href={data} target={'_blank'}>{props.youtubeAPITitles[index]}</a>
			</TextWrapper>
			
			<TextWrapper>
			<CardButton onClick={
				    ()=>props.save_data(props.setue,props.update_effect,props.youtubeAPILinks,props.youtubeAPITitles,index,ytlinkjoin_,ytdjoin_,data,props.stored_data_yt,props.name,props.foldername,props.thumbnail,[])
           
           } disabled={props.stored_data_yt[index]} >Save</CardButton><br></br><br></br>

			</TextWrapper>
		</ImageWrapper>
		)})}
			</ReviewSlider>
		</Section>
	);
};

export default CarouselYouTube;
