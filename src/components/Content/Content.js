import React, { useEffect } from 'react';
import { Container, Section } from '../../globalStyles';
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

export const Content = ({
	primary,
	topLine,
	headline,
	description,
	buttonLabel1,
	buttonLabel2,
	img,
	alt,
	inverse,
	reverse,
	df,
	vf,
	gdt,
	ydt
}) => {
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
		<Section inverse={inverse} ref={ref}>
			<Container>
				<ContentRow reverse={reverse}>
					<ContentColumn>
						<TextWrapper>
							<TopLine
								initial={initial}
								transition={{ delay: 0.3, duration: 0.6 }}
								animate={animation}
							>
								{topLine.text}
							</TopLine>
							<Heading
								initial={initial}
								transition={{ delay: 0.5, duration: 0.6 }}
								animate={animation}
								inverse={inverse}
							>
								{headline}
							</Heading>
							<ContentButton onClick={vf}
								initial={initial}
								transition={{ delay: 1, duration: 0.6 }}
								animate={animation}
								inverse={inverse}
								primary={primary}
							>
								{buttonLabel1}
							</ContentButton>
							
							<ContentButton onClick={df}
								initial={initial}
								transition={{ delay: 1, duration: 0.6 }}
								animate={animation}
								inverse={inverse}
								primary={primary}
							>
								{buttonLabel2}
							</ContentButton>
						</TextWrapper>
						
					</ContentColumn>
					
					<ContentColumn
						initial={initial}
						transition={{ delay: 0.5, duration: 0.6 }}
						animate={animation}
					>
						<ImgWrapper>
						<BarChart google_stats={gdt} youtube_stats={ydt} />
						</ImgWrapper>
					</ContentColumn>
				</ContentRow>
			</Container>
		</Section>
	);
};