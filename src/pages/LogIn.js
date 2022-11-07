import React,{useState,useEffect} from 'react';
import { Content } from '../components/Content/Content';
import Features from '../components/Features/Features';
import Hero from '../components/Hero/Hero';
import { heroOne, heroTwo, heroThree } from '../data/HeroData';
import FormLogIn from '../components/Form/FormLogIn';
import {createSearchParams,Link,useNavigate} from 'react-router-dom'
const LogIn = () => {



	return (
		<>
				<FormLogIn />
			
		</>
	);
};

export default LogIn;
