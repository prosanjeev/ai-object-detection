import ObjectDetection from "@/components/object-detection";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8 bg-slate-900">
      <h1 className="gradient-title font-extrabold text-3xl md:text-6xl lg:text-8xl tracking-tighter md:px-6 text-center">
        Al Object Detection
      </h1>
      <ObjectDetection />
      <h1 className="gradient-title font-extrabold text-3xl md:text-3xl lg:text-4xl tracking-tighter md:px-6 text-center">
      Detectify      </h1>

    </main>
  );
}
