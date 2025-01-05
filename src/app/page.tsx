import { Component } from "@/components/FirstCaroulsel";
import Heroes from "@/components/Heroes";

export default function Home() {
  return (
    <main>
      <main
        className="flex  min-h-screen  flex-col bg-white px-4 py-4 backdrop-blur-md"
        id="/"
      >
        <Heroes />
      </main>
      <main
        className="flex  min-h-screen max-w-screen flex-col bg-white px-4 py-4 backdrop-blur-md"
        id="kegiatan"
      >
        <div className="flex  min-h-screen max-w-screen flex-col bg-white rounded-md">
          <Component />
        </div>
      </main>
    </main>
  );
}
