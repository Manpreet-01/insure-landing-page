import introImgMobile from '../images/image-intro-mobile.jpg';

export default function Hero() {
    return (
        <div className="hero flex flex-col md:relative">
            <div className='md:max-w-[50%] md:h-full md:absolute md:z-[8] md:right-16 xl:right-48 md:top-24 intro-img-box'>
                <img className='w-full h-full md:w-[500px]' src={introImgMobile} alt="into-img" />
            </div>
            
            <div className='hero-text relative p-16 md:py-24 md:px-32 flex flex-col items-center md:items-start gap-y-4 text-center md:text-start leading-relaxed'>
                
                <hr className='mr-auto mb-8 hidden md:block border-t-2 border-t-[--clr4] w-32' />

                <h1 className="text-[--clr5] z-10 text-5xl md:text-6xl font-bold md:max-w-[25rem]">Humanizing your insurance.</h1>
                <p className="text-[--clr5] z-10 md:max-w-[29rem]">
                    Get your life insurance coverage easier and faster. We blend our expertise
                    and technology to help you find the plan that’s right for you. Ensure you
                    and your loved ones are protected.
                </p>

                <button className='font-bold text-[--clr5] hover:text-[--clr3] hover:z-10 hover:bg-[--clr5] mt-4 text-sm border-2 border-[--clr2] px-6 py-2 uppercase'>
                    View plans
                </button>
            </div>
        </div>
    );
}
