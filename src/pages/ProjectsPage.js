import ProjectCard from '../components/ProjectCard';
import SectionHeading from '../components/SectionHeading';
import { projects } from '../data/projects';

export default function ProjectsPage() {
  const sortedProjects = [...projects].sort((leftProject, rightProject) => {
    if (leftProject.slug === 'oneulfarm') {
      return -1;
    }
    if (rightProject.slug === 'oneulfarm') {
      return 1;
    }
    return rightProject.period.localeCompare(leftProject.period);
  });

  return (
    <div className="page-shell page-shell--narrow">
      <section className="page-banner">
        <SectionHeading
          eyebrow="Projects"
          title="프로젝트"
          description="완료한 프로젝트와 현재 진행 중인 개인 프로젝트를 함께 정리했습니다."
        />
      </section>

      <section className="project-grid">
        {sortedProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} size="hero" />
        ))}
      </section>
    </div>
  );
}
