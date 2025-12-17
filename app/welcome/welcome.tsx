import { CaseStudiesSection } from './caseStudiesSection';
import { ExperienceSection } from './experienceSection';
import { FeaturesSection } from './featureSection';
import { FinalCTASection } from './finalCTASection';
import { ProcessSection } from './processSection';

export function Welcome() {
  return (
    <>
      <FeaturesSection />
      <ExperienceSection />
      <ProcessSection />
      <CaseStudiesSection />
      <FinalCTASection />
    </>
  );
}
