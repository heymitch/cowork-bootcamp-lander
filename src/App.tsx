import './framer/styles.css'

import ScrollyFramerComponent from './framer/scrolly'
import CardFramerComponent from './framer/card'
import CtaFramerComponent from './framer/cta'
import Button2FramerComponent from './framer/button-2'
import FaqMainFramerComponent from './framer/faq-main'

const SAMCART_URL = 'https://ship.samcart.com/products/claude-co-work-bootcamp'

export default function App() {
  return (
    <div className='flex flex-col items-center bg-[#0d1116] min-h-screen'>
      {/* Hero + Interactive Scrollytelling Demo */}
      <ScrollyFramerComponent.Responsive
        cTAURL={SAMCART_URL}
        cTAButtonText={"Join THE Bootcamp — $800"}
        cTASubtext={"5 live sessions. Build real AI skills. Ship your first agent."}
      />

      {/* Skill Cards Section */}
      <section className='w-full max-w-[1200px] px-5 py-16'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
          <CardFramerComponent.Responsive
            skill={"Skill #1"}
            title={"Computer Organizer Skill"}
            sub={'clean up your downloads, organize your documents, and get back to "desktop zero"'}
          />
          <CardFramerComponent.Responsive
            skill={"Skill #2"}
            title={"Content Generator Skill"}
            sub={"create LinkedIn posts, Twitter threads, and newsletters from a single voice note"}
          />
          <CardFramerComponent.Responsive
            skill={"Skill #3"}
            title={"Meeting Prep Skill"}
            sub={"research prospects, pull context from past calls, and brief you before every meeting"}
          />
        </div>
      </section>

      {/* How It Works Button */}
      <section id="how-it-works" className='w-full max-w-[1200px] px-5 py-8 flex justify-center'>
        <Button2FramerComponent.Responsive
          variant={"Default"}
          smoothScroll={true}
        />
      </section>

      {/* FAQ Section */}
      <section className='w-full max-w-[1200px] px-5 py-16'>
        <h2 className='text-[#f3eccb] text-center text-4xl font-bold mb-12' style={{ fontFamily: 'Manrope, sans-serif' }}>
          Frequently Asked Questions
        </h2>
        <div className='flex justify-center'>
          <FaqMainFramerComponent.Responsive />
        </div>
      </section>

      {/* Final CTA */}
      <section className='w-full py-20 flex flex-col items-center gap-6'>
        <CtaFramerComponent.Responsive
          title={"Join THE Bootcamp — $800"}
          link={SAMCART_URL}
        />
      </section>
    </div>
  );
}