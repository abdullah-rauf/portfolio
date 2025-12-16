import { Layout } from "@/layout";
import { About } from "@/views";

export const metadata = {
  title: "About Me",
  description: "Learn more about my background, experience, and what drives me as a developer.",
};

export default function AboutPage() {
  return (
    <Layout>
      <div className="pt-20">
        <About />
      </div>
    </Layout>
  );
}

