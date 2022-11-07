import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// Hero Feature Content Carousel
import HeroHomePage from '../components/Hero/HeroHomePage';
import { HeroVideo, HeroSection, HeroText, ButtonWrapper, HeroButton } from '../components/Hero/HeroStyles';

const HomePage = (props) => {
	const {name,ut} = useParams()
	console.log(name,ut)
	let i = 0

	return (
		<>
			<HeroHomePage name={name} ut={ut}/>

		</>
	);
};

export default HomePage;
