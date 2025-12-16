import { Layout } from "@/layout";
import { Skills } from "@/views";

export const metadata = {
  title: "Skills & Expertise",
  description: "Explore my technical skills and areas of expertise in web development.",
};

export default function SkillsPage() {
  return (
    <Layout>
      <div className="pt-20">
        <Skills />
      </div>
    </Layout>
  );
}

