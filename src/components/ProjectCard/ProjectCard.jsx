const ProjectCard = ({ project }) => {
    return (
        <article className="group relative flex flex-col gap-4 overflow-hidden rounded-xs border border-neutral-200 bg-white p-4 text-neutral-900 transition-shadow duration-300 hover:shadow-xl">
            <div
                className="aspect-312/280 overflow-hidden"
                style={{ backgroundColor: project.bgColor }}
            >
                <img
                    src={project.image}
                    alt={`Превью проекта ${project.title}`}
                    className="h-full w-full object-cover object-top"
                />
            </div>

            <div>
                <div className="flex items-start justify-between gap-5 border-b border-neutral-200 pb-4">
                    <h3 className="text-xl font-semibold tracking-[-0.04em]">
                        {project.title}
                    </h3>

                    <span
                        className="mt-1 h-3 w-3 shrink-0 rounded-full"
                        style={{ backgroundColor: project.bgColor }}
                    />
                </div>

                <p className="min-h-24 pt-4 text-sm leading-5 text-neutral-500">
                    {project.description}
                </p>

                {/* Добавляем relative и z-10 тегам, которые должны оставаться интерактивными сами по себе (если бы тут были другие ссылки) */}
                <div className="relative z-10 mt-5 flex flex-wrap gap-2">
                    {project.stack.map((technology) => (
                        <span
                            key={technology}
                            className="border border-neutral-200 px-3 py-1 text-xs text-neutral-600"
                        >
                            {technology}
                        </span>
                    ))}
                </div>
            </div>

            <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="mt-auto flex items-center gap-2 border-t border-neutral-200 pt-4 text-sm font-medium underline underline-offset-4 group-hover:no-underline after:absolute after:inset-0"
            >
                Open website
                <span aria-hidden="true">↗</span>
            </a>
        </article>
    );
};

export default ProjectCard;