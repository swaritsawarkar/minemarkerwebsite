import { clsx } from "clsx";

type LogoMarkProps = {
  className?: string;
};

export function LogoMark({ className }: LogoMarkProps) {
  return (
    <div
      className={clsx(
        "grid size-10 place-items-center border border-emerald-300/35 bg-emerald-400/10 shadow-[0_0_34px_rgba(61,255,138,0.18)]",
        className,
      )}
      aria-hidden="true"
    >
      <div className="grid size-7 grid-cols-3 grid-rows-3 gap-[3px]">
        {Array.from({ length: 9 }).map((_, index) => {
          const active = [0, 2, 3, 4, 5, 6, 8].includes(index);

          return (
            <span
              key={index}
              className={clsx(
                "block",
                active
                  ? "bg-emerald-300 shadow-[0_0_12px_rgba(80,255,154,0.5)]"
                  : "bg-transparent",
              )}
            />
          );
        })}
      </div>
    </div>
  );
}
