import { Navigate, useParams } from 'react-router-dom';
import LinkActions from '../components/LinkActions';
import ProjectDetailSection from '../components/ProjectDetailSection';
import { getProjectBySlug } from '../data/projects';

function buildDemoEmbedUrl(embedUrl) {
  if (!embedUrl) {
    return '';
  }

  const videoId = embedUrl.split('/embed/')[1]?.split('?')[0];

  if (!videoId) {
    return embedUrl;
  }

  const url = new URL(`https://www.youtube-nocookie.com/embed/${videoId}`);

  url.searchParams.set('autoplay', '1');
  url.searchParams.set('mute', '1');
  url.searchParams.set('loop', '1');
  url.searchParams.set('playlist', videoId);
  url.searchParams.set('playsinline', '1');
  url.searchParams.set('rel', '0');
  url.searchParams.set('vq', 'hd1080');
  url.searchParams.set('modestbranding', '1');
  url.searchParams.set('iv_load_policy', '3');
  url.searchParams.set('cc_load_policy', '0');

  return url.toString();
}

function renderTechGroups(techStack) {
  return Object.entries(techStack).map(([category, items]) => (
    <article className="tech-group" key={category}>
      <h3>{category}</h3>
      <div className="tag-row">
        {(items.length ? items : ['해당 없음']).map((item) => (
          <span className="tag-chip tag-chip--soft" key={`${category}-${item}`}>
            {item}
          </span>
        ))}
      </div>
    </article>
  ));
}

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  if (!project) {
    return <Navigate replace to="/projects" />;
  }

  const detailLinks = [
    { label: 'GitHub', href: project.links.github, type: 'primary' },
    { label: '시연 영상', href: project.links.demo },
    { label: '문서', href: project.links.docs },
  ].filter((link) => link.href);
  const demoEmbedUrl = buildDemoEmbedUrl(project.media?.demoEmbed);
  const teamLabel = project.teamLabel || `팀 ${project.teamSize}명`;

  return (
    <div className="page-shell page-shell--detail">
      <section className={`project-hero project-hero--${project.tone || 'secondary'}`}>
        <div className="project-hero__content">
          <div className="project-hero__meta">
            <span>{project.period}</span>
            <span>{project.type}</span>
            <span>{teamLabel}</span>
            {project.featured ? <span className="project-hero__badge">대표 프로젝트</span> : null}
            {project.statusLabel ? (
              <span className="project-hero__badge">{project.statusLabel}</span>
            ) : null}
          </div>

          <h1>{project.title}</h1>
          <p className="project-hero__summary">{project.oneLineSummary}</p>

          <div className="tag-row">
            {project.tags.map((tag) => (
              <span className="tag-chip" key={tag}>
                {tag}
              </span>
            ))}
          </div>
        </div>

        <aside className="project-sidebar">
          <article className="surface-card">
            <p className="project-sidebar__label">내 역할</p>
            <strong>{project.role}</strong>
            <p>{project.contributions[0]}</p>
          </article>

          <article className="surface-card">
            <p className="project-sidebar__label">링크</p>
            <LinkActions links={detailLinks} />
          </article>
        </aside>
      </section>

      {demoEmbedUrl ? (
        <ProjectDetailSection title="시연 영상" eyebrow="영상">
          <div className="video-frame">
            <iframe
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="eager"
              referrerPolicy="strict-origin-when-cross-origin"
              src={demoEmbedUrl}
              title={`${project.title} demo`}
            />
          </div>
        </ProjectDetailSection>
      ) : null}

      <div className="detail-layout">
        <div className="detail-layout__main">
          <ProjectDetailSection
            title="문제 정의"
            eyebrow="문제"
            collapsible
            defaultExpanded
          >
            <div className="stack-list">
              {project.problem.map((item) => (
                <article className="surface-card surface-card--compact" key={item}>
                  <p>{item}</p>
                </article>
              ))}
            </div>
          </ProjectDetailSection>

          <ProjectDetailSection title="핵심 기능" eyebrow="기능">
            <div className="feature-list">
              {project.features.map((feature) => (
                <article className="surface-card feature-card" key={feature.title}>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </article>
              ))}
            </div>
          </ProjectDetailSection>

          <ProjectDetailSection
            title="내가 맡은 역할"
            eyebrow="기여"
            collapsible
            defaultExpanded
          >
            <ul className="bullet-list">
              {project.contributions.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </ProjectDetailSection>

          <ProjectDetailSection
            title="트러블슈팅"
            eyebrow="문제 해결"
            description="문제와 해결 과정을 정리했습니다."
            emphasis
          >
            <div className="trouble-list">
              {project.troubleshooting.map((item, index) => (
                <article className="surface-card trouble-card" key={item.title}>
                  <div className="trouble-card__index">{String(index + 1).padStart(2, '0')}</div>
                  <div>
                    <h3>{item.title}</h3>
                    <p>
                      <strong>문제</strong> {item.problem}
                    </p>
                    <p>
                      <strong>해결</strong> {item.solution}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </ProjectDetailSection>

          <ProjectDetailSection title="기능 흐름" eyebrow="흐름" collapsible defaultExpanded>
            <div className="flow-list">
              {project.flow.map((item) => (
                <article className="surface-card flow-card" key={item}>
                  <p>{item}</p>
                </article>
              ))}
            </div>
          </ProjectDetailSection>

          <ProjectDetailSection title="배운 점" eyebrow="회고" collapsible defaultExpanded={false}>
            <ul className="bullet-list">
              {project.learned.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </ProjectDetailSection>
        </div>

        <aside className="detail-layout__side">
          <ProjectDetailSection title="기술 스택" eyebrow="스택">
            <div className="tech-grid">{renderTechGroups(project.techStack)}</div>
          </ProjectDetailSection>
        </aside>
      </div>
    </div>
  );
}
