import { Link } from 'react-router-dom';
import LinkActions from './LinkActions';

function buildToneClass(tone) {
  if (tone === 'primary') {
    return 'project-card--primary';
  }
  if (tone === 'support') {
    return 'project-card--support';
  }
  return 'project-card--secondary';
}

export default function ProjectCard({ project, size = 'default', showLinks = true }) {
  const previewItems = project.contributions.slice(0, size === 'hero' ? 3 : 2);
  const teamLabel = project.teamLabel || `팀 ${project.teamSize}명`;
  const quickLinks = [
    { label: 'GitHub', href: project.links.github },
    { label: '시연 영상', href: project.links.demo },
  ].filter((link) => link.href);

  return (
    <article
      className={`project-card ${buildToneClass(project.tone)} ${
        size === 'hero' ? 'project-card--hero' : ''
      }`}
    >
      <div className="project-card__side">
        <div className="project-card__meta">
          <span className="project-card__period">{project.period}</span>
          {project.featured ? <span className="project-card__badge">대표 프로젝트</span> : null}
          {project.statusLabel ? <span className="project-card__badge">{project.statusLabel}</span> : null}
        </div>

        <div className="project-card__facts">
          <span>{project.type}</span>
          <span>{teamLabel}</span>
        </div>
      </div>

      <div className="project-card__content">
        <div className="project-card__heading">
          <div>
            <h3>{project.title}</h3>
            <p className="project-card__role">{project.role}</p>
          </div>
          <div className="project-card__bottom">
            <Link className="button button--primary" to={`/projects/${project.slug}`}>
              자세히 보기
            </Link>

            {showLinks && quickLinks.length ? (
              <LinkActions compact links={quickLinks} />
            ) : null}
          </div>
        </div>

        <p className="project-card__summary">{project.oneLineSummary}</p>

        <ul className="project-card__list">
          {previewItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <div className="tag-row">
          {project.tags.slice(0, size === 'hero' ? 5 : 4).map((tag) => (
            <span className="tag-chip" key={tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
