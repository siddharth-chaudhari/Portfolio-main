import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          Visit Website
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShanCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: {
    title: "GSAP",
    bg: "black",
    fg: "white",
    icon: "",
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [
    // The Auction Arena
  {
  id: "auction-arena",
  category: "Real-Time Apps",
  title: "The Auction Arena",
  src: "/assets/Project-banners/Auction-banner.png",
  screenshots: ["auction-1.png", "auction-2.png"],
  live: "https://your-live-link.com",   // replace
  github: "https://github.com/your-repo", // replace
  // description: "A real-time fantasy sports bidding system using WebSocket and Redux Toolkit.",
  skills: {
    frontend: [
      PROJECT_SKILLS.react,
      // PROJECT_SKILLS.reduxToolkit,
      PROJECT_SKILLS.tailwind,
      PROJECT_SKILLS.js
      
    ],
    backend: [
      PROJECT_SKILLS.node,
      PROJECT_SKILLS.postgres,
    ],
  },
  get content() {
    return (
      <div>
        <TypographyP className="font-mono">
          A real-time bidding platform built for fantasy sports. It supports
          1000+ concurrent users with live WebSocket updates, animated UI, and
          a fully optimized Redux Toolkit architecture.
        </TypographyP>

        <ProjectsLinks live={this.live} repo={this.github} />

        <SlideShow
          images={[
            this.src,
            "https://images.unsplash.com/photo-1551934267-31ca0a993013?w=800&h=600&fit=crop",
          ]}
        />

        <TypographyH3 className="my-4 mt-8">Real-Time Engine</TypographyH3>
        <p className="font-mono mb-2">
          WebSocket-powered live auctions, animated transitions, and instant
          updates for bids, player lists, and budgets.
        </p>
      </div>
    );
  },
  },

  // Nft MarketPlace
  {
  id: "nft-marketplace",
  category: "Web3 & Blockchain",
  title: "NeuralNFT Marketplace",
  src: "/assets/project-banners/Nft-banner.png",
  screenshots: ["1.png", "2.png"],
  live: "https://neural-nft-demo.vercel.app", // change or remove if not available
  github: "https://github.com/yourusername/neural-nft-marketplace", // change
  skills: {
    frontend: [
      PROJECT_SKILLS.ts,
      PROJECT_SKILLS.next,
      PROJECT_SKILLS.react,
      PROJECT_SKILLS.tailwind,
      PROJECT_SKILLS.aceternity
    ],
    backend: [
      PROJECT_SKILLS.node,
      PROJECT_SKILLS.express,
      PROJECT_SKILLS.postgres
    ],
  },
  get content() {
    return (
      <div>
        <TypographyP className="font-mono ">
          NeuralNFT Marketplace is a modern NFT marketplace combining generative art
          with secure on-chain ownership. Browse collections, mint unique pieces,
          and trade with an integrated wallet flow and gas-optimised transactions.
        </TypographyP>

        <ProjectsLinks live={this.live} repo={this.github} />

        <SlideShow
          images={[
            "/assets/projects-screenshots/nft-marketplace/1.png",
            "/assets/projects-screenshots/nft-marketplace/2.png",
          ]}
        />

        <TypographyH3 className="my-4 mt-8">Key features</TypographyH3>
        <p className="font-mono mb-2">
          Wallet connect (MetaMask), minting flow, collection galleries, lazy-minting,
          and secure smart contracts. Frontend built with Next.js and Tailwind.
        </p>
      </div>
    );
  },
  },

  // Harry-potter
  {
  id: "harry-potter-portfolio",
  category: "Frontend UI/UX",
  title: "Harry Potter Themed Portfolio",
  src: "/assets/project-banners/Harry-banner.png",
  screenshots: ["1.png", "2.png", "3.png"],
  live: "https://your-hp-portfolio-url.com",  // change if needed
  github: "https://github.com/yourusername/harry-potter-portfolio", // change
  skills: {
    frontend: [
      PROJECT_SKILLS.ts,
      PROJECT_SKILLS.react,
      PROJECT_SKILLS.next,
      PROJECT_SKILLS.tailwind,
      PROJECT_SKILLS.framerMotion,
      PROJECT_SKILLS.aceternity
    ],
    backend: [],
  },
  get content() {
    return (
      <div>
        <TypographyP className="font-mono ">
          A fully animated Harry Potter–themed portfolio featuring wizard-style UI,
          spells-inspired animations, magical transitions, and custom 3D effects.
          Built with Next.js, Tailwind CSS, and Framer Motion for smooth cinematic visuals.
        </TypographyP>

        <ProjectsLinks live={this.live} repo={this.github} />

        <SlideShow
          images={[
            "/assets/projects-screenshots/harry-portfolio/1.png",
            "/assets/projects-screenshots/harry-portfolio/2.png",
            "/assets/projects-screenshots/harry-portfolio/3.png",
          ]}
        />

        <TypographyH3 className="my-4 mt-8">Magical UI Features</TypographyH3>
        <p className="font-mono mb-2">
          Floating typography, spell-casting hover effects, Hogwarts-inspired color 
          palette, Parallax animations, custom magic cursor, and smooth enchanted transitions.
        </p>

        <TypographyH3 className="my-4 mt-8">Tech Stack</TypographyH3>
        <p className="font-mono mb-2">
          Next.js, Tailwind CSS, Framer Motion for animations, custom assets,
          and optimized responsive design to deliver a magical experience across all devices.
        </p>
      </div>
    );
  },
  },


  {
    id: "vr-visualizer",
    category: "XR & Visualization",
    title: "DimensionVR",
    src: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop",
    screenshots: ["1.png"],
    live: "https://dimension-vr-demo.vercel.app",
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.spline,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.postgres,
        PROJECT_SKILLS.prisma,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            DimensionVR is a browser-based 3D visualization platform that transforms
            data into immersive virtual experiences. Explore datasets in 3D space,
            manipulate models with hand tracking, and share VR sessions with teammates.
            No headset required—works in WebXR for desktop, mobile, and VR headsets.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow
            images={[
              "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop",
              "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop",
            ]}
          />
          <TypographyH3 className="my-4 mt-8">WebXR Integration</TypographyH3>
          <p className="font-mono mb-2">
            Experience your data in true 3D. Import 3D models, visualize point clouds,
            and interact with spatial data using WebXR APIs. Works seamlessly across
            all devices with graceful fallbacks for non-VR environments.
          </p>
        </div>
      );
    },
  },
  {
    id: "neural-playground",
    category: "AI & ML",
    title: "Neural Playground",
    src: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800&h=600&fit=crop",
    screenshots: ["1.png", "2.png", "3.png", "4.png"],
    live: "https://neural-playground-demo.vercel.app",
    github: "https://github.com/dummy/neural-playground",
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.chakra,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.mongo,
        PROJECT_SKILLS.express,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Neural Playground is an interactive web-based tool for building,
            training, and visualizing neural networks. Drag-and-drop layers, adjust
            hyperparameters in real-time, and watch your network learn with live
            visualization of weights, activations, and gradients. Perfect for education
            and experimentation.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow
            images={[
              "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800&h=600&fit=crop",
              "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop",
            ]}
          />
          <TypographyH3 className="my-4 mt-8">Interactive Training</TypographyH3>
          <p className="font-mono mb-2">
            Visualize how neural networks learn. See activations flow through layers,
            watch loss curves update in real-time, and experiment with different
            architectures. Built with TensorFlow.js for browser-based computation.
          </p>
        </div>
      );
    },
  },
  {
    id: "retro-emulator",
    category: "Gaming",
    title: "RetroArcade",
    src: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=600&fit=crop",
    screenshots: ["1.png"],
    live: "https://retroarcade-demo.vercel.app",
    skills: {
      frontend: [
        PROJECT_SKILLS.js,
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.framerMotion,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
        PROJECT_SKILLS.firebase,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            RetroArcade is a web-based emulator for classic arcade games from the
            80s and 90s. Play original ROMs in your browser with authentic pixel-perfect
            rendering, CRT shader effects, and controller support. Features include
            save states, rewind functionality, and online leaderboards.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow
            images={[
              "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=600&fit=crop",
              "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&h=600&fit=crop",
            ]}
          />
          <TypographyH3 className="my-4 mt-8">Classic Games Library</TypographyH3>
          <p className="font-mono mb-2">
            Play hundreds of retro titles with accurate emulation. Customizable
            controls, CRT scanline effects, and authentic sound synthesis bring
            the nostalgia of arcade gaming to your browser.
          </p>
        </div>
      );
    },
  },
];
export default projects;
