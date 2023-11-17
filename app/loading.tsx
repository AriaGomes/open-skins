import { LoadingDots } from "./components/Loading";

export default function Loading() {
  return (
    <div className="flex justify-center h-full pt-4 bg-slate-100 dark:bg-slate-500">
      <LoadingDots />
    </div>
  );
}
