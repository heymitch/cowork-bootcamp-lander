import './framer/styles.css'

import FaqMainFramerComponent from './framer/faq-main'
import CardFramerComponent from './framer/card'
import CtaFramerComponent from './framer/cta'
import Button2FramerComponent from './framer/button-2'

export default function App() {
  return (
    <div className='flex flex-col items-center gap-3 bg-[rgb(13,_17,_22)]'>
      <FaqMainFramerComponent.Responsive/>
      <CardFramerComponent.Responsive
        RHgFOl6NM={"Computer Organizer Skill"}
        SW74eQnO3={"clean up your downloads, organize your documents, and get back to \"desktop zero\""}
        zyDuYlWXL={"Skill #1"}
      />
      <CtaFramerComponent.Responsive
        sjweCVENK={"Join THE Bootcamp — $800"}
        tLKc9FrRm={"https://ship.samcart.com/products/claude-co-work-bootcamp"}
      />
      <Button2FramerComponent.Responsive
        mnlmbwaMj={true}
      />
    </div>
  );
};