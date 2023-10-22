import Image from "next/image"
const Hero = () => {
    return(
        <div>
            <div className="max-md:hidden block">
                <Image width={1400} height={800} src='/Hero.webp' alt='Hero Image' className="object-contain"/>
            </div>
            <div className="md:hidden block">
                <Image width={760} height={600} alt='mobile hero image' src='/mobile-hero.webp' />
            </div>
        </div>
    )
    
}

export default Hero