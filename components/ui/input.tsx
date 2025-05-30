import * as React from "react";
import { useState } from "react";
import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  const [isValid, setIsValid] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Basic validation example (you can customize this)
    setIsValid(e.target.value.length > 0);
  };

  return (
    <div className="relative">
      <input
        type={type}
        data-slot="input"
        className={cn(
          "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-color transition-box-shadowoutline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
          "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
          className
        )}
        {...props}
        onChange={handleChange}
      />
      {isValid && (
        <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-5 text-green-500"
          >
            <path
              fillRule="evenodd"
              d="M19.916 4.626a.75.75 0 0 1 1.06 1.06l-11.25 11.25a.75.75 0 0 1-1.06 0l-4.75-4.75a.75.75 0 0 1 1.06-1.06l4.22 4.22 10.72-10.72a.75.75 0 0 1 1.06 0Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      )}
    </div>
  );
}

export { Input };
