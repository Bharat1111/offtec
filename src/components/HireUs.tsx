import Link from "next/link";
import React from "react";

const HireUs = () => {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
  const [start, setStart] = React.useState({ x: 0, y: 0 });
  const [hovered, setHovered] = React.useState(false);
  console.log(mousePosition, hovered, start);

  React.useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (!hovered) return;
      //   if (
      //     Math.abs(e.clientX - start.x) < 5 &&
      //     Math.abs(e.clientY - start.y) < 5
      //   )
      //     return;
      console.log(e.clientX, e.clientY);

      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    document.addEventListener("mousemove", onMouseMove);
    return () => {
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, [hovered]);
  return (
    <div className="relative ">
      <div
        className={`fixed z-[3]
        
        w-8 h-8 rounded-full bg-white blur-lg transition-all  duration-0 ease-in-out hover:bg-primary
        ${hovered ? "opacity-100" : "opacity-0"}
        `}
        style={{
          top: mousePosition.y,
          left: mousePosition.x - 10,
        }}
      ></div>
      <Link
        href={`/hireus`}
        onMouseEnter={(e) => {
          setStart({ x: e.clientX, y: e.clientY });

          setHovered(true);
        }}
        onMouseLeave={() => setHovered(false)}
        className="  px-8 backdrop-blur-3xl bg-black hover:shadow-2xl border-white  text-white relative  py-2 rounded-full font-semibold   transition-all duration-300 ease-in-out hover:drop-shadow-xl"
      >
        HIRE US!
      </Link>{" "}
    </div>
  );
};

export default HireUs;
