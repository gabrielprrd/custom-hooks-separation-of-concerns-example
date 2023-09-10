import { renderHook, fireEvent } from "@testing-library/react";
import useProgress from "./index";

describe("useProgress custom hook", () => {
  it("renders with correct initial values", () => {
    const { result } = renderHook(() => useProgress());

    expect(result["current"]["progress"]).toBe(0);
    expect(result["current"]["pageHeight"]).toBe(-768);
  });

  it("updates progress value on vertical scroll", () => {
    const { result } = renderHook(() => useProgress());

    fireEvent.scroll(window, { target: { scrollY: 300 } });

    expect(result["current"]["progress"]).toBe(300);
    expect(result["current"]["pageHeight"]).toBe(-768);
  });
});
