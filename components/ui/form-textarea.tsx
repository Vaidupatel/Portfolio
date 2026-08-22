import * as React from "react";
import { cn } from "@/lib/utils";

export interface FormTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

export const FormTextarea = React.forwardRef<HTMLTextAreaElement, FormTextareaProps>(
  ({ label, error, className, ...props }, ref) => {
    return (
      <div className={cn("w-full flex flex-col gap-2", className)}>
        <label className="text-[14px] font-medium text-ink-900">{label}</label>
        <textarea 
          ref={ref}
          className={cn(
            "h-[120px] p-4 rounded-card border bg-canvas-white text-[15px] outline-none transition-all duration-150 resize-none",
            error ? "border-error focus:ring-1 focus:ring-error" : "border-hairline focus:ring-1 focus:ring-accent"
          )}
          {...props}
        />
        {error && <span className="text-[12px] font-medium text-error mt-0.5">{error}</span>}
      </div>
    );
  }
);

FormTextarea.displayName = "FormTextarea";
