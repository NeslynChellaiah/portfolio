
import { resumeData } from './data/resume';
import { Hero } from './components/Hero';
import { Section } from './components/Section';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero data={resumeData} />

      <main>
        <Section title="About Me" id="about">
          <p className="text-lg text-gray-600 leading-relaxed">
            {resumeData.summary}
          </p>
        </Section>

        <Experience data={resumeData.experience} />

        <Projects data={resumeData.projects} />

        <Skills data={resumeData.skills} />

        <Education data={resumeData.education} />
      </main>

      <Footer />
    </div>
  );
}

export default App;
