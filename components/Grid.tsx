"use client";

import React, { Suspense, lazy } from "react";
import TechRod from "./TechRod";
import { LuLoader2 } from "react-icons/lu";

const LazyFaHtml5 = lazy(() =>
  import("react-icons/fa").then((module) => ({ default: module.FaHtml5 }))
);
const LazyFaCss3Alt = lazy(() =>
  import("react-icons/fa").then((module) => ({ default: module.FaCss3Alt }))
);
const LazyFaJs = lazy(() =>
  import("react-icons/fa").then((module) => ({ default: module.FaJs }))
);
const LazyFaReact = lazy(() =>
  import("react-icons/fa").then((module) => ({ default: module.FaReact }))
);
const LazyFaNodeJs = lazy(() =>
  import("react-icons/fa").then((module) => ({ default: module.FaNodeJs }))
);
const LazySiExpress = lazy(() =>
  import("react-icons/si").then((module) => ({ default: module.SiExpress }))
);
const LazySiPostman = lazy(() =>
  import("react-icons/si").then((module) => ({ default: module.SiPostman }))
);
const LazySiShadcnui = lazy(() =>
  import("react-icons/si").then((module) => ({ default: module.SiShadcnui }))
);
const LazySiAuth0 = lazy(() =>
  import("react-icons/si").then((module) => ({ default: module.SiAuth0 }))
);
const LazyRiNextjsFill = lazy(() =>
  import("react-icons/ri").then((module) => ({ default: module.RiNextjsFill }))
);
const LazyRiTailwindCssFill = lazy(() =>
  import("react-icons/ri").then((module) => ({
    default: module.RiTailwindCssFill,
  }))
);
const LazyTbBrandTypescript = lazy(() =>
  import("react-icons/tb").then((module) => ({
    default: module.TbBrandTypescript,
  }))
);
const LazyDiMongodb = lazy(() =>
  import("react-icons/di").then((module) => ({ default: module.DiMongodb }))
);
const LazyGiBearFace = lazy(() =>
  import("react-icons/gi").then((module) => ({ default: module.GiBearFace }))
);

const TechStack = () => {
  const frontendTechs = [
    {
      name: "HTML",
      icon: (
        <Suspense fallback={<LuLoader2 className="animate-spin w-4" />}>
          <LazyFaHtml5 />
        </Suspense>
      ),
    },
    {
      name: "CSS",
      icon: (
        <Suspense fallback={<LuLoader2 className="animate-spin w-4" />}>
          <LazyFaCss3Alt />
        </Suspense>
      ),
    },
    {
      name: "Tailwind CSS",
      icon: (
        <Suspense fallback={<LuLoader2 className="animate-spin w-4" />}>
          <LazyRiTailwindCssFill />
        </Suspense>
      ),
    },
    {
      name: "JavaScript",
      icon: (
        <Suspense fallback={<LuLoader2 className="animate-spin w-4" />}>
          <LazyFaJs />
        </Suspense>
      ),
    },
    {
      name: "React",
      icon: (
        <Suspense fallback={<LuLoader2 className="animate-spin w-4" />}>
          <LazyFaReact />
        </Suspense>
      ),
    },
    {
      name: "Next.js",
      icon: (
        <Suspense fallback={<LuLoader2 className="animate-spin w-4" />}>
          <LazyRiNextjsFill />
        </Suspense>
      ),
    },
    {
      name: "Zustand",
      icon: (
        <Suspense fallback={<LuLoader2 className="animate-spin w-4" />}>
          <LazyGiBearFace />
        </Suspense>
      ),
    },
    {
      name: "Shadcn Ui",
      icon: (
        <Suspense fallback={<LuLoader2 className="animate-spin w-4" />}>
          <LazySiShadcnui />
        </Suspense>
      ),
    },
  ];

  const backendTechs = [
    {
      name: "Node.js",
      icon: (
        <Suspense fallback={<LuLoader2 className="animate-spin w-4" />}>
          <LazyFaNodeJs />
        </Suspense>
      ),
    },
    {
      name: "Express",
      icon: (
        <Suspense fallback={<LuLoader2 className="animate-spin w-4" />}>
          <LazySiExpress />
        </Suspense>
      ),
    },
    {
      name: "TypeScript",
      icon: (
        <Suspense fallback={<LuLoader2 className="animate-spin w-4" />}>
          <LazyTbBrandTypescript />
        </Suspense>
      ),
    },
    {
      name: "MongoDB",
      icon: (
        <Suspense fallback={<LuLoader2 className="animate-spin w-4" />}>
          <LazyDiMongodb />
        </Suspense>
      ),
    },
    {
      name: "Postman",
      icon: (
        <Suspense fallback={<LuLoader2 className="animate-spin w-4" />}>
          <LazySiPostman />
        </Suspense>
      ),
    },
    {
      name: "Auth js",
      icon: (
        <Suspense fallback={<LuLoader2 className="animate-spin w-4" />}>
          <LazySiAuth0 />
        </Suspense>
      ),
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center text-white p-4" id="techs">
      <div className="w-full max-w-4xl">
        <h1 className="heading pb-3">
        My Tech{" "}
          <span className="text-purple">Stack</span>
        </h1>
        <p className="text-xl text-gray-300 mb-12 text-center">
          Crafting digital experiences with cutting-edge tools
        </p>

        <div className="relative">
          <div className="flex justify-between mt-16 max-md:flex-col">
            <TechRod title="Frontend" technologies={frontendTechs} />
            <TechRod title="Backend" technologies={backendTechs} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
