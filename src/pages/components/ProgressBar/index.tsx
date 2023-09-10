import { DetailedHTMLProps, ProgressHTMLAttributes } from "react";
import useProgress from "./hooks/useProgress";

type Props = DetailedHTMLProps<
  ProgressHTMLAttributes<HTMLProgressElement>,
  HTMLProgressElement
>;

export default function ProgressBar(props: Props) {
  const { progress, pageHeight } = useProgress();

  return (
    <progress
      {...props}
      role="progressbar"
      className="w-full [&::-webkit-progress-value]:rounded-r-lg [&::-webkit-progress-bar]:bg-transparent [&::-webkit-progress-value]:bg-violet-400 [&::-moz-progress-bar]:transparent"
      aria-label="Page scroll progress"
      tabIndex={0}
      aria-valuenow={progress}
      aria-valuemax={pageHeight}
      value={progress}
      max={pageHeight}
    />
  );
}
