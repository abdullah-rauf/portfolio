import { Layout } from "@/layout";
import { Contact } from "@/views";

export const metadata = {
  title: "Contact Me",
  description: "Get in touch with me for collaboration, projects, or just to say hello.",
};

export default function ContactPage() {
  return (
    <Layout>
      <div className="pt-20">
        <Contact />
      </div>
    </Layout>
  );
}

