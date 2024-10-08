import Image from "next/image"

const AboutPage = () => {
  return (
    <div className='flex flex-col my-8 mx-4'>
      <h1 className='text-[22px] font-semibold my-12 text-center'>ABOUT US</h1>

      <div className='flex '>
        <h1 className='text-[32px] me-10 mt-10'>STORY</h1>
        <p className='text-[14px] font-medium mx-10 mt-10 leading-6'>
          "In a bustling city, where creativity collides with culture, our clothing brand was born from a shared passion for self-expression and innovation. Founded by a group of diverse friends, each with their own artistic backgrounds, we set out to redefine modern fashion. Our collections blend bold designs and sustainable practices, celebrating individuality while respecting the planet. Every stitch tells a story, inspired by the world around us—from street art to music and everything in between. We invite you to join our journey, where style becomes a canvas for your unique identity and every piece empowers you to stand out and inspire."
        </p>
        <Image src='/collection 4.webp' width={354} height={442} alt='a image about us' className="me-10" />
      </div>

      <div className="flex mx-20 mt-16 justify-between">
        <div className="gap-y-8 w-1/2">
          <h1 className="text-[20px] font-bold leading-6">PROJECT MAKES UPDATED, MODERN CLASSICS WITH A COMMITMENT TO TIMELESSNESS AND QUALITY </h1>
          <p className='text-[14px] font-medium mt-8 leading-6'>MIRROR  transcends traditional fashion; it’s a vibrant platform for the rebels, dreamers, and free spirits to showcase their individuality. Our pieces are crafted to ignite inspiration in the next generation, encouraging fearless self-expression and the pursuit of passions—conventional or not. We focus on innovative designs that reflect a contemporary mindset, merging comfort, simplicity, and sophistication in every detail. Join us in embracing creativity without limits, where style becomes a statement of who you truly are.

          </p>
        </div>

        <Image src='/about-image.webp' width={354} height={442} alt="an image" />

      </div>

    </div>
  )
}

export default AboutPage