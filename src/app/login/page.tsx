import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { LoginBrandPanel } from "@/components/sections/LoginBrandPanel";
import { LoginForm } from "@/components/sections/LoginForm";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { loginCopy } from "@/data/auth";
import { brand, copyright } from "@/data/navigation";

export const metadata: Metadata = {
  title: "Login — PT Global Sinergi Medica",
};

export default function LoginPage() {
  return (
    <main className="grid min-h-dvh lg:grid-cols-2">
      <LoginBrandPanel />

      <section aria-labelledby="login-title" className="flex flex-col px-8 py-10 sm:px-14">
        <Link
          href="/"
          className="inline-flex items-center gap-2 self-start rounded-full text-body font-semibold text-muted transition-colors hover:text-ink focus-visible:ring-2 focus-visible:ring-lime-500 focus-visible:outline-none"
        >
          <ArrowLeft aria-hidden className="size-4" />
          {loginCopy.backToHome}
        </Link>

        <div className="m-auto w-full max-w-sm py-10">
          <Link
            href="/"
            aria-label={`${brand.name} home`}
            className="group/logo mb-10 inline-flex rounded-full focus-visible:ring-2 focus-visible:ring-lime-500 focus-visible:outline-none lg:hidden"
          >
            <BrandLogo />
          </Link>

          <h1 id="login-title" className="text-4xl font-bold tracking-tight text-navy-950">
            {loginCopy.title}
          </h1>
          <p className="mt-2 mb-8 text-lead text-muted">{loginCopy.description}</p>

          <LoginForm />
        </div>

        <p className="text-center text-caption text-muted">{copyright}</p>
      </section>
    </main>
  );
}