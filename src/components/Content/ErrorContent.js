import React, { useEffect } from 'react';
import { Container, Section } from '../../globalStyles';
import { HeroText } from '../Hero/HeroStyles';
import BarChart from '../BarChart/Barchart';
import {
	ContentRow,
	TextWrapper,
	TopLine,
	Heading,
	ContentButton,
	Subtitle,
	ImgWrapper,
	Img,
	ContentColumn,
	
} from './ContentStyles.js';

import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';

export const ErrorContent = () => {
	const initial = { opacity: 0, y: 30 };
	const animation = useAnimation();

	const { ref, inView } = useInView({ threshold: 0.2 });

	useEffect(() => {
		if (inView) {
			animation.start({
				opacity: 1,
				y: 0,
			});
		}
	}, [inView, animation]);
    
	return (
		<Section inverse={true} ref={ref} style={{'height':'40rem'}} >
			<Container >
				<ContentRow reverse={true}>
					<ContentColumn>
						<TextWrapper>
							<TopLine
								initial={initial}
								transition={{ delay: 0.3, duration: 0.6 }}
								animate={animation}
							>
								Issue: 404
							</TopLine>
							<Heading style={{'marginRight':'90%'}}
								initial={initial}
								transition={{ delay: 0.5, duration: 0.6 }}
								animate={animation}
								inverse={true}
							>
								ERROR
							</Heading>
						
							
						
						</TextWrapper>
						
					</ContentColumn>
					
					<ContentColumn
						initial={initial}
						transition={{ delay: 0.5, duration: 0.6 }}
						animate={animation}
					>
						
					</ContentColumn>
				</ContentRow>
			</Container>
            <Heading style={{'marginLeft':'15%'}}
								initial={initial}
								transition={{ delay: 0.5, duration: 0.6 }}
								animate={animation}
								inverse={true}
							>
								If you are facing this issue,please contact your administrator
							</Heading>
		</Section>
	);
};