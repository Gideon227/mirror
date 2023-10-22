import Image from "next/image"

const AboutPage = () => {
  return (
    <div className='flex flex-col my-8 mx-4'>
      <h1 className='text-[22px] font-semibold my-12 text-center'>ABOUT US</h1>

      <div className='flex '>
        <h1 className='text-[32px] me-10 mt-10'>STORY</h1>
        <p className='text-[14px] font-medium mx-10 mt-10 leading-6'>
          NUDE PROJECT is a ready-to-wear label founded in 2018 in a small dorm room by two friends eager to create something different. Bruno and Alex were raised in completely different environments. One from Bali, the other from Burgos (a little more north) had an instant connection that, after a month of knowing each other, led them to create a joint movement that would change their lives forever
          "For us, it was all about the hip-hop scene, the rawness of skateboarding and the artist's creativity which motivated us to imprint a way of living shared through the internet."
        </p>
        <Image src='/collection 4.webp' width={354} height={442} alt='a image about us' className="me-10" />
      </div>

      <div className="flex mx-20 mt-16 justify-between">
        <div className="gap-y-8 w-1/2">
          <h1 className="text-[20px] font-bold leading-6">PROJECT MAKES UPDATED, MODERN CLASSICS WITH A COMMITMENT TO TIMELESSNESS AND QUALITY </h1>
          <p className='text-[14px] font-medium mt-8 leading-6'>NUDE PROJECT is more than just clothing. It is a creative platform for the misfits, the outcasts and the wild to express themselves. Our garments aim to inspire the new generation to pursue their passion, orthodoxly or not, by empowering them to create without fear of judgement.We strive for designs that embrace a modern attitude for a creative life, seamlessly blending comfort, minimalism and elegance in every cut.

          </p>
        </div>

        <Image src='/about-image.webp' width={354} height={442} alt="an image" />

      </div>

    </div>
  )
}

export default AboutPage