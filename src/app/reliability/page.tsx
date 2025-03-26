import reliabilityImg from "/public/reliability.jpg";
import Hero from "@/components/hero";
export default function ReliabilityPage() {
  return(
      <Hero
        imgData={reliabilityImg}
        imgAlt="Soldering Guy"
        title="Super High Reliability Hosting"
      />
    )
}
