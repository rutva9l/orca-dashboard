import MainFeed from "@/components/main-feed";
import Menu from "@/components/menu";
import OtherOptions from "@/components/other-options";

export default function Home() {
  return (
    <main className="grid grid-cols-11 gap-8 min-h-screen p-8">
      <Menu />
      <MainFeed />
      <OtherOptions />
    </main>
  );
}
