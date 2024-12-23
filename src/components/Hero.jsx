const Hero = () => {
	return (
		<div className='hero'>
			<div className='overlay'></div>
			<video autoPlay loop muted>
				<source
					src='https://www.youtube.com/watch?v=1INU3FOJsTw'
					type='video/mp4'
				/>
			</video>
			<div className='hero-content'>
				<h1>
					PLAY LIKE A <span className='span-title'>PRO</span>!
				</h1>
				<h2>And dominate your ranked games.</h2>
				<h3>
					Whether You Are A Seasoned Fighter Or A New Challenger, Our App Helps
					You Master The Art Of Street Fighter 6 With Ease
				</h3>
			</div>
		</div>
	);
};
export default Hero;
