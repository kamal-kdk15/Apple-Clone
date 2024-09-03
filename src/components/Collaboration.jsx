import { brainwaveSymbol, check } from "../assets"
import { collabApps, collabContent, collabText } from "../constans"
import Button from "./Button"
import Section from "./Section"
import { LeftCurve, RightCurve } from "./design/Collaboration"
const Collaboration = () => {
  return (
    <Section crosses>
      <div className="container lg:flex">
<div className="max-w-[25rem]">
  <h2 className="mb-4 h2 md:mb-8">AI Chat App for seamless collaboration</h2>
  <ul className="max-w-[22rem] mb-10 md:mb-14">
    {collabContent.map((item) => (
      <li className="py-3 mb-3" key={item.id}>
        <div className="flex items-center">
          <img src={check} width={24} height={24} alt="check" />
          <h6 className="ml-5 body-2">{item.title}</h6>
        </div>
          {item.text && <p className="mt-3 body-2 text-n-4">{item.text}</p>}
      </li>
    ))}
  </ul>
  <Button>
Try it now
  </Button>
</div>
<div className="ml-auto lg: xl:w-[38rem] mt-4">
  <p className="mb-10 body-2 text-n-4 lg:mb:32 md:mb-16 lg:w-[22rem] lg:mx-auto">{collabText}</p>
  <div className="relative flex left-1/2 w-[22rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale:75 md: scale-100">
    <div className="flex m-auto border rounded-full w-60 aspect-square border-n-6">
      <div className="w-[6rem] m-auto aspect-square p-[0.2rem] bg-conic-gradient rounded-full">
        <div className="flex items-center justify-center w-full h-full rounded-full bg-n-8">
          <img 
          src={brainwaveSymbol}
          width={48}
          height={48}
          alt="brainwave"
          />
        </div>
      </div>
    </div>
    <ul>
      {collabApps.map((app, index) => (
         <li key={app.id} className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${index * 45}`}>
          <div className={`relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-n-7 border border-n-1/15 rounded-xl -rotate-${index * 45}`}>
            <img className="m-auto "  width={app.width} height={app.height} alt={app.title} src={app.icon}/>
          </div>
         </li>
       ))}
    </ul>
    <LeftCurve />
    <RightCurve />
  </div>
</div>
      </div>
    </Section>
  )
}

export default Collaboration