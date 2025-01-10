import React from 'react'
import Hyperspeed from './Hyperspeed';
import BlurText from './BlurText';
import GradientText from './GradientText';

const HeroSection = () => {
    const handleAnimationComplete = () => {
        console.log('Animation completed!');
    };
    return (
        <>
            <div className='flex items-center justify-center h-[calc(100vh-9rem)]'>
                {/* <GradientText
  colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
  animationSpeed={3}
  showBorder={false}
  className="custom-class"
>
  Add a splash of color!
</GradientText> */}

                <BlurText
                    text="Welcome to, Digital Junkyard!"
                    delay={150}
                    animateBy="words"
                    direction="top"
                    colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                    animationSpeed={3}
                    showBorder={true}
                    className="text-5xl md:text-9xl mb-8 font-bold leading-normal z-20 custom-class"
                    onAnimationComplete={() => console.log("Animation completed!")}
                />

                {/* <BlurText
                    text="Welcome to, Digital Junkyard!"
                    delay={150}
                    animateBy="words"
                    direction="top"
                    onAnimationComplete={handleAnimationComplete}
                    className="text-9xl mb-8 text-white justify-center font-bold z-20"
                /> */}

                {/* <Hyperspeed /> */}
            </div>
        </>
    )
}

export default HeroSection