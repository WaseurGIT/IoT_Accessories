import SplitText from "./SplitText";
import TextType from "./TextType";

const Banner = () => {
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };

  return (
    <div className="w-full h-72 bg-gray-100">
      <div className="p-24">
        <h1 className="text-lg">Welcome To</h1>
        <SplitText
          text="IoT Hub!"
          className="text-[56px] font-semibold"
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
        />{" "}
        <br />
        {/* <h6 className="text-[56px] text-orange-400">IoT Hub</h6> */}
        <TextType
          text={["Know about your IoT Accessories From Here."]}
          typingSpeed={75}
          pauseDuration={1500}
          showCursor={true}
          cursorCharacter="|"
        />
        {/* <h3>Know about your IoT Accessories From Here.</h3> */}
      </div>
    </div>
  );
};

export default Banner;
