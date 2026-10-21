"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, CircleAlert, Lock, User } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { TextField } from "@/components/ui/TextField";
import { loginCopy } from "@/data/auth";

export function LoginForm() {
  const [failedAttempts, setFailedAttempts] = useState(0);
  const hasError = failedAttempts > 0;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Design phase: every submission is rejected until real authentication is wired in.
    setFailedAttempts((count) => count + 1);
  };

  return (
    <form
      onSubmit={handleSubmit}
      onChange={() => setFailedAttempts(0)}
      className="flex flex-col gap-5"
    >
      {hasError && (
        <div
          key={failedAttempts}
          role="alert"
          className="flex animate-shake items-center gap-3 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-body font-medium text-red-700"
        >
          <CircleAlert aria-hidden className="size-4.5 shrink-0" />
          {loginCopy.error}
        </div>
      )}

      <TextField
        label={loginCopy.username.label}
        placeholder={loginCopy.username.placeholder}
        name="username"
        autoComplete="username"
        icon={User}
        invalid={hasError}
        required
      />
      <TextField
        label={loginCopy.password.label}
        placeholder={loginCopy.password.placeholder}
        name="password"
        type="password"
        autoComplete="current-password"
        icon={Lock}
        invalid={hasError}
        required
      />

      <Button type="submit" size="lg" className="mt-2 w-full">
        <span
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 w-1/3 animate-shine bg-white/50 blur-md"
        />
        {loginCopy.submit}
        <ArrowRight
          aria-hidden
          className="size-4 transition-transform duration-300 group-hover/button:translate-x-1"
        />
      </Button>
    </form>
  );
}