import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import LinkActions from '../components/LinkActions';
import ProjectCard from '../components/ProjectCard';
import ScrollSpyNav from '../components/ScrollSpyNav';
import SectionHeading from '../components/SectionHeading';
import SkillGroup from '../components/SkillGroup';
import Timeline from '../components/Timeline';
import { featuredProjects, projectTimeline } from '../data/projects';
import { siteContent } from '../data/siteContent';

const homeSections = [
  { id: 'about', label: '소개' },
  { id: 'skills', label: '기술' },
  { id: 'featured', label: '프로젝트' },
  { id: 'timeline', label: '타임라인' },
  { id: 'contact', label: '연락' },
];

function groupFeaturedProjects(projects) {
  const primaryProject = projects.find((project) => project.slug === 'oneulfarm') || projects[0];
  const secondaryProjects = projects.filter((project) => project.slug !== primaryProject.slug);
  return { primaryProject, secondaryProjects };
}

function buildTopStacks(skills) {
  return [
    ...skills.Backend.slice(0, 3),
    ...skills.Frontend.slice(0, 3),
    ...skills['External / Tools'].slice(0, 2),
  ];
}

export default function HomePage() {
  const [activeSection, setActiveSection] = useState(homeSections[0].id);
  const { primaryProject, secondaryProjects } = useMemo(
    () => groupFeaturedProjects(featuredProjects),
    []
  );
  const topStacks = useMemo(() => buildTopStacks(siteContent.skills), []);

  useEffect(() => {
    const elements = homeSections
      .map((section) => document.getElementById(section.id))
      .filter(Boolean);

    if (!elements.length) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((left, right) => right.intersectionRatio - left.intersectionRatio)[0];

        if (visibleEntry?.target?.id) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      {
        rootMargin: '-30% 0px -45% 0px',
        threshold: [0.15, 0.35, 0.55],
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  function scrollToSection(sectionId) {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  return (
    <div className="page-shell">
      <section className="hero-panel">
        <div className="hero-panel__content">
          <span className="hero-panel__eyebrow">Web Developer Portfolio</span>
          <h1>{siteContent.title}</h1>
          <p className="hero-panel__lead">{siteContent.heroSubtitle}</p>
          <p className="hero-panel__description">{siteContent.heroDescription}</p>

          <div className="hero-panel__actions">
            <Link className="button button--primary" to="/projects">
              프로젝트 보기
            </Link>
            <a
              className="button button--secondary"
              href="https://github.com/YuYoungKwang"
              rel="noreferrer"
              target="_blank"
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="hero-panel__notes">
          <article className="hero-profile">
            <div className="hero-profile__image-wrap">
              <img
                className="hero-profile__image"
                src={`${process.env.PUBLIC_URL}/profile-photo.jpg`}
                alt="유영광 프로필 사진"
              />
            </div>
            <div className="hero-profile__text">
              <p className="hero-note__label">프로필</p>
              <strong>유영광</strong>
              <p>Java / Spring MVC / React 기반 웹 개발</p>
            </div>
          </article>
        </div>
      </section>

      <section className="hero-summary-grid">
        <article className="hero-summary-card">
          <p className="hero-note__label">대표 프로젝트</p>
          <strong>{primaryProject.title}</strong>
          <p>{primaryProject.oneLineSummary}</p>
          <Link className="button button--ghost" to={`/projects/${primaryProject.slug}`}>
            대표 프로젝트 보기
          </Link>
        </article>

        <article className="hero-summary-card">
          <p className="hero-note__label">빠른 정보</p>
          <ul className="hero-note__list">
            {siteContent.heroStats.map((item) => (
              <li key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </li>
            ))}
          </ul>
        </article>

        <article className="hero-summary-card">
          <p className="hero-note__label">핵심 스택</p>
          <div className="tag-row">
            {topStacks.map((item) => (
              <span className="tag-chip" key={item}>
                {item}
              </span>
            ))}
          </div>
        </article>
      </section>

      <ScrollSpyNav items={homeSections} activeId={activeSection} onNavigate={scrollToSection} />

      <section className="content-section" id="about">
        <SectionHeading
          eyebrow="About"
          title={siteContent.positioning}
          description={siteContent.shortBio}
        />

        <div className="about-grid">
          <article className="surface-card surface-card--wide">
            {siteContent.aboutParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </article>

          <div className="principle-grid">
            {siteContent.principles.map((principle) => (
              <article className="surface-card principle-card" key={principle.title}>
                <p className="principle-card__label">{principle.title}</p>
                <p>{principle.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section" id="skills">
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

      <section className="content-section" id="featured">
        <SectionHeading
          eyebrow="Projects"
          title="프로젝트"
          description="진행한 프로젝트입니다."
        />

        <div className="featured-layout">
          <ProjectCard project={primaryProject} size="hero" />
          {secondaryProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section className="content-section" id="timeline">
        <SectionHeading
          eyebrow="Timeline"
          title="프로젝트 타임라인"
          description="Pet-Lab, #Trip, oneulFarm 순으로 진행했습니다."
        />

        <Timeline items={projectTimeline} />
      </section>

      <section className="content-section" id="contact">
        <SectionHeading
          eyebrow="Contact"
          title="연락처"
          description="GitHub와 이메일로 연락하실 수 있습니다."
        />

        <div className="contact-grid">
          <article className="surface-card surface-card--wide">
            <h3>포트폴리오 소개</h3>
            <p>
              외부 API 연동, 상태 설계, 상세 기능 구현, 주문 흐름, 마이페이지 경험을
              중심으로 프로젝트를 정리했습니다.
            </p>
          </article>

          <article className="surface-card">
            <h3>링크</h3>
            <LinkActions links={siteContent.contactLinks} />
          </article>
        </div>
      </section>
    </div>
  );
}
