import MainLayout from "@/components/layout/MainLayout";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import Hero from "@/components/sections/Hero";

export default function HomePage() {
  return (
    <MainLayout>
      <Hero />
      <FeaturedProjects />
    </MainLayout>
  );
}