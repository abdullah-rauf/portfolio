import { Layout } from "@/layout";
import { Experience } from "@/views";

export const metadata = {
  title: "Work Experience",
  description: "My professional journey and career highlights in software development.",
};

export default function ExperiencePage() {
  return (
    <Layout>
      <div className="pt-20">
        <Experience />
      </div>
    </Layout>
  );
}

