import { useNavigate } from "react-router-dom";
import img1 from "../../../assets/images/main_img1.png";
import img2 from "../../../assets/images/main_img2.png";
import img3 from "../../../assets/images/main_img3.png";
import CustomButton from "../../../components/general/CustomButton";
import { useSignUpFlowStore } from "../../../utils/zustand/Store";

const Home = () => {

  const setPersona = useSignUpFlowStore((state) => state.setPersona);
  const navigate = useNavigate();

  return (
    <div>
      <div className="relative">
        <div className="w-full bg-black grid grid-cols-2 ">
          <img src={img3} alt="model image3" className="object-cover" />
          <div>
            <img src={img1} alt="model image1" className="object-cover w-full" />
            <img src={img2} alt="model image2" className="object-cover w-full" />
          </div>
        </div>
        <h4 className="text-primary_color uppercase font-[1000] text-[1.65rem] md:text-[3.5rem] absolute top-1/4 inset-x-8 md:inset-x-1/4 leading-relaxed tracking-widest">
          Model Agency
        </h4>
        <div className="absolute top-[16.0rem] sm:top-1/2 inset-[40%]">
          <CustomButton
            variant={"solid"}
            width={"200px"}
            onClick={() => {
              setPersona("client");
              navigate('/signup');
            }}
          >
            <span className="uppercase font-light">Book a model</span>
          </CustomButton>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#000" fillOpacity="1" d="M0,32L60,32C120,32,240,32,360,37.3C480,43,600,53,720,90.7C840,128,960,192,1080,202.7C1200,213,1320,171,1380,149.3L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
      </svg>
      <div className="flex gap-4 mx-20">
        <div className="flex flex-col gap-10 items-center">
          <div className="w-20 h-20 rounded-full bg-primary_color"></div>
          <div className="w-12 h-12 rounded-full bg-primary_color"></div>
          <div className="w-4 h-4 rounded-full bg-primary_color"></div>
        </div>
        <div className="text-center flex flex-col gap-10 mb-20 w-full">
          <h3 className="font-[1000] text-3xl uppercase">Join us</h3>
          <div className="flex flex-col gap-6">
            <p>Do you want to be a supermodel?</p>
            <p>Do you want to work with us?</p>
          </div>
          <div className="flex justify-center">
            <CustomButton
              variant={"solid"}
              width={"120px"}
              onClick={() => {
                setPersona("model");
                navigate('/signup');
              }}
            >
              <span className="uppercase font-light">Join now</span>
            </CustomButton>
          </div>
          <div className="flex justify-between">
            <div className="w-3 h-3 rounded-full bg-primary_color"></div>
            <div className="w-20 h-20 rounded-full bg-primary_color"></div>
            <div className="w-3 h-3 rounded-full bg-primary_color "></div>
          </div>
        </div>
        <div className="w-14 h-12 rounded-full bg-primary_color"></div>
      </div>

    </div>
  )
}

export default Home