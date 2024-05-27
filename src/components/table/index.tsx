import { ReactNode } from "react";
import { Icon } from "@mdi/react";
import { mdiChevronLeft, mdiChevronRight } from "@mdi/js";
import { cn } from "@/utils/tailwind";

export const Table = ({ children }: { children: ReactNode }) => {
  return <table className="w-full text-sm text-left">{children}</table>;
};

export const TableHead = ({ children }: { children: ReactNode }) => {
  return <thead className="uppercase">{children}</thead>;
};

export const TableHeader = ({ children }: { children?: ReactNode }) => {
  return <th>{children}</th>;
};

export const TableRow = ({
  className = "",
  children,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <tr className={cn("hover:bg-slate-200 border-b", className)}>{children}</tr>
  );
};

export const TableCell = ({ children }: { children: ReactNode }) => {
  return <td className="py-4">{children}</td>;
};

export const Pagination = ({
  onBack,
  onNext,
}: {
  onBack: () => void;
  onNext: () => void;
}) => {
  return (
    <div className="flex gap-1">
      <button
        onClick={onBack}
        style={{
          width: "2em",
          height: "2em",
        }}
      >
        <Icon path={mdiChevronLeft} />
      </button>
      <button
        onClick={onNext}
        style={{
          width: "2em",
          height: "2em",
        }}
      >
        <Icon path={mdiChevronRight} />
      </button>
    </div>
  );
};
