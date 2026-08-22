import * as React from "react";
import { cn } from "@/lib/utils";

export interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export const FormInput = React.forwardRef<HTMLInputElement, FormInputProps>(
  ({ label, error, className, ...props }, ref) => {
    return (
      <div className={cn("w-full flex flex-col gap-2", className)}>
        <label className="text-[14px] font-medium text-ink-900">{label}</label>
        <input 
          ref={ref}
          className={cn(
            "h-[52px] px-4 rounded-card border bg-canvas-white text-[15px] outline-none transition-all duration-150",
            error ? "border-error focus:ring-1 focus:ring-error" : "border-hairline focus:ring-1 focus:ring-accent"
          )}
          {...props}
        />
        {error && <span className="text-[12px] font-medium text-error mt-0.5">{error}</span>}
      </div>
    );
  }
);

FormInput.displayName = "FormInput";
