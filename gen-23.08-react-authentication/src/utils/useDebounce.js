import debounce from "lodash/debounce";
import { useEffect, useMemo, useRef } from "react";

export default function useDebounce(callback) {
  const ref = useRef();

  useEffect(() => {
    ref.current = callback;
  }, [callback]);

  const debouncedCallback = useMemo(() => {
    const func = () => {
      ref.current?.();
    };

    return debounce(func, 1000);
  }, []);

  return debouncedCallback;
}
