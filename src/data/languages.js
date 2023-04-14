import NodeIcon from '../components/icons/Node.astro'
import ReactIcon from '../components/icons/React.astro'
import TailwindIcon from '../components/icons/Tailwind.astro'
import AstroIcon from '../components/icons/Astro.astro'
import CSSIcon from '../components/icons/CSS.astro'
import HTMLIcon from '../components/icons/HTML.astro'
import MongoIcon from '../components/icons/Mongo.astro'
import ExpressIcon from '../components/icons/Express.astro'
import SassIcon from '../components/icons/Sass.astro'
import BootstrapIcon from '../components/icons/Bootstrap.astro'
import TypescriptIcon from '../components/icons/Typescript.astro'
import ViteIcon from '../components/icons/Vite.astro'
import NextIcon from '../components/icons/Next.astro'

export const languages = {
    react: { label: 'React', icon: ReactIcon, class: 'text-react border-react' },
    node: { label: 'NodeJs', icon: NodeIcon, class: 'text-node border-node' },
    astro: { label: 'Astro', icon: AstroIcon, class: 'text-astro border-astro' },
    tailwind: { label: 'TailwindCSS', icon: TailwindIcon, class: 'text-tailwind border-tailwind' },
    css: { label: 'CSS3', icon: CSSIcon, class: 'text-css border-css' },
    express: { label: 'Express', icon: ExpressIcon, class: 'text-express border-express' },
    mongo: { label: 'MongoDB', icon: MongoIcon, class: 'text-mongo border-mongo' },
    html: { label: 'HTML5', icon: HTMLIcon, class: 'text-html border-html' },
    sass: { label: 'Sass', icon: SassIcon, class: 'text-sass border-sass' },
    bootstrap: { label: 'Bootstrap', icon: BootstrapIcon, class: 'text-bootstrap border-bootstrap' },
    typescript: { label: 'TypeScript', icon: TypescriptIcon, class: 'text-typescript border-typescript' },
    vite: { label: 'Vite', icon: ViteIcon, class: 'text-vite border-vite' },
    next: { label: 'NextJs', icon: NextIcon, class: 'text-next border-next' }
}
