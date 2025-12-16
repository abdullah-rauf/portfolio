import { Layout } from "@/layout";
import { Projects } from "@/views";

export const metadata = {
  title: "Projects",
  description: "Check out my portfolio of web development projects and case studies.",
};

export default function ProjectsPage() {
  return (
    <Layout>
      <div className="pt-20">
        <Projects />
      </div>
    </Layout>
  );
}

