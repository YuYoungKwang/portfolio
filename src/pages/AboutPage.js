import SectionHeading from '../components/SectionHeading';
import SkillGroup from '../components/SkillGroup';
import Timeline from '../components/Timeline';
import { projectTimeline } from '../data/projects';
import { siteContent } from '../data/siteContent';

export default function AboutPage() {
  return (
    <div className="page-shell page-shell--narrow">
      <section className="page-banner">
        <SectionHeading
          eyebrow="About"
          title={siteContent.positioning}
          description={siteContent.shortBio}
        />
      </section>

      <section className="about-page-grid">
        <article className="surface-card surface-card--wide">
          {siteContent.aboutParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </article>

        <article className="surface-card">
          <h3>프로필</h3>
          <div className="tag-row">
            <span className="tag-chip">{siteContent.positioning}</span>
            <span className="tag-chip">Java / Spring MVC / React</span>
            <span className="tag-chip">조회, 추천, 주문, 마이페이지 흐름 구현</span>
          </div>
        </article>
      </section>

      <section className="content-section content-section--compact">
        <SectionHeading
          eyebrow="Work Style"
          title="업무 방식"
          description="프로젝트를 진행할 때 중요하게 생각하는 기준입니다."
        />

        <div className="principle-grid">
          {siteContent.principles.map((principle) => (
            <article className="surface-card principle-card" key={principle.title}>
              <p className="principle-card__label">{principle.title}</p>
              <p>{principle.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section content-section--compact">
        <SectionHeading
          eyebrow="Skills"
          title="기술 스택"
          description="프로젝트에서 사용한 기술입니다."
        />

        <div className="skill-grid">
          {Object.entries(siteContent.skills).map(([title, items]) => (
            <SkillGroup items={items} key={title} title={title} />
          ))}
        </div>
      </section>

      <section className="content-section content-section--compact">
        <SectionHeading
          eyebrow="Timeline"
          title="프로젝트 타임라인"
          description="진행한 프로젝트 순서입니다."
        />

        <Timeline items={projectTimeline} />
      </section>
    </div>
  );
}
