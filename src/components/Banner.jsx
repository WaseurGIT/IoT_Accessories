import SplitText from "./SplitText";
import TextType from "./TextType";

const Banner = () => {
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };

  return (
    <div className="w-full min-h-[300px] sm:min-h-[400px] bg-gray-100 flex items-center">
      <div className="px-6 sm:px-12 lg:px-24 py-10 text-center sm:text-left">
        <h1 className="text-black sm:text-white">Welcome To</h1>
        <SplitText
          text="IoT Hub!"
          className="sm:text-white text-5xl text-black lg:text-[56px] font-semibold"
          delay={100}
          duration={0.6}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
          onLetterAnimationComplete={handleAnimationComplete}
        />
        <br />
        <TextType
          text={["Know about your IoT Accessories From Here."]}
          typingSpeed={75}
          pauseDuration={1500}
          showCursor={true}
          cursorCharacter="|"
        />
      </div>
    </div>
  );
};

export default Banner;
