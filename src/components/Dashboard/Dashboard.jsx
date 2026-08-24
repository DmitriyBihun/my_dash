import projects from '../../projects';
import ProjectCard from '../ProjectCard/ProjectCard';

const Dashboard = () => {
    return (
        <main className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
            <div className="mb-10 flex items-end justify-between border-b border-neutral-200 pb-4">
                <h1 className="text-3xl font-semibold tracking-tighter sm:text-[60px]">
                    projects
                </h1>

                <span className="text-sm text-neutral-500">
                    / {projects.length} projects /
                </span>
            </div>
            {/* grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 */}
            <section className="grid grid-cols-[repeat(auto-fill,minmax(min(300px,100%),1fr))] gap-4">
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </section>
        </main>
    );
};

export default Dashboard;