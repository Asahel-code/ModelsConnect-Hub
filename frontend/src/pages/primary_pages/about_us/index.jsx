import PropTypes from "prop-types";
import aboutImg1 from "../../../assets/images/about_img1.png";
import { PiPlugsConnectedDuotone } from "react-icons/pi";
import { AiOutlineDeliveredProcedure } from "react-icons/ai";

const AboutUs = () => {
  return (
    <div className="my-10">
      <div className="grid grid-cols-2 gap-8 mx-10 md:mx-20">
        <div className="image">
          <div className="shape bg-gradient-to-tr from-secondary_color to-primary_color"></div>
          <img src={aboutImg1} alt="about start img" />
        </div>
        <div className="flex justify-center items-center">
          <div>
            <h4 className="font-[1000] tracking-wider text-3xl">More than 7 years in business for model supplies</h4>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <div className="border-t-0 rounded-t-[120%] w-full h-20 bg-primary_color_light"></div>
        <div className="bg-gradient-to-b from-primary_color_light to-white">
          <div className=" text-center text-lg">
            <h3 className="font-[1000]">Our services</h3>
            <h3 className="font-[1000]">in business model</h3>
          </div>
          <div className="pt-10 mb-20 mx-60 grid grid-cols-2 gap-10">
            {ourServices.map((service, index) => (
              <Service
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

const Service = ({ icon, title, description }) => (
  <div className="bg-white shadow-lg rounded-xl">
    <div className="content-[''] h-2 w-1/2 ml-3 bg-primary_color rounded-full" />
    <div className="py-3 px-6">
      <div className="flex flex-col gap-4">
        <div className="bg-primary_color rounded-full flex items-center p-3 w-fit">
          {icon}
        </div>
        <div>
          <h3 className="font-semibold text-xl">{title}</h3>
          <p className="text-sm text-gray-500 mt-3">{description}</p>
        </div>
      </div>
    </div>
  </div>
);

Service.propTypes = {
  icon: PropTypes.element,
  title: PropTypes.string,
  description: PropTypes.string,
  
}

const ourServices = [
  {
    icon: <PiPlugsConnectedDuotone className="text-5xl text-white" />,
    title: "Connect models",
    description: "Our service facilitates the seamless connection between models and clients, ensuring a smooth and efficient matchmaking process. Whether you're seeking talent for a photoshoot, event, or project, we specialize in pairing you with the perfect model to meet your needs."
  },
  {
    icon: <AiOutlineDeliveredProcedure className="text-5xl text-white" />,
    title: "Deliver models",
    description: "With our deliver models service, we handle the logistics of model transportation and coordination, ensuring that your selected talent arrives promptly and professionally at your desired location. We prioritize reliability and client satisfaction, making sure your model experience is stress-free and enjoyable."
  }
]

export default AboutUs