import scaleImg from "/public/scale.jpg";
import Hero from "@/components/hero";

export default function ScalePage() {
  return (
    <Hero
      imgData={scaleImg}
      imgAlt="Steel Factory"
      title="Scale your App to infinity"
    />
  )
}
