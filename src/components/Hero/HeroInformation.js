import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, MainHeading } from '../../globalStyles';
import { HeroVideo, HeroSection, HeroText, ButtonWrapper, HeroButton } from './HeroStyles';

const HeroInformation = () => {
	return (
		<HeroSection>
			<HeroVideo src="./assets/hero.mp4" loop autoPlay muted />
			<Container>
				<HeroText>
                ESPARK is product that belongs to AFD Enterprises' NGO division. It is a web application that allows students and enthusiasts to learn <br></br>
                concepts faster by providing an adaptive learning platform. This allows students to follow their goals and turn their vision into reality.<br></br>
                The idea of Espark is based on the curriculum of education in Finland. Espark allows users to store data/websites/videos and podcasts and <br></br>
                lets students study subjects of their choice.The website is flexible in handling any learning source from the web.The Espark website also <br></br>
                helps students in creating entrepreneurs because it is built around the users vision. ESPARK has a vision to help students discover their passion. <br></br>				</HeroText>
				
			</Container>
            <img src='./assets/afdenterpriseslogoregular.PNG' style={{marginLeft:'45%','width':'50px','height':'50px',borderRadius:10}} />

		</HeroSection>
	);
};

export default HeroInformation;
