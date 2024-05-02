import {
  useContext,
  createContext,
  PropsWithChildren,
  useState,
  useMemo,
  useCallback,
} from "react";

import { BetValue } from "../utils/bet";

type BetContextType = {
  values: Record<string, BetValue>;
  setValue: (key: string, value: number) => void;
};

const DEFAULT_CONTEXT: BetContextType = {
  values: {},
  setValue: () => {},
};

const BetContext = createContext<BetContextType>(DEFAULT_CONTEXT);

export const BetContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [values, setValues] = useState<Record<string, BetValue>>({});

  const setValue = useCallback((key: string, value: number) => {
    setValues((prev) => {
      const prevVal = prev[key];
      if (prevVal?.value !== value) {
        console.log("change");
        return {
          ...prev,
          [key]: {
            lastUpdated: Date.now(),
            value,
          },
        };
      }
      return prev;
    });
  }, []);

  const providerValue = useMemo(() => {
    return { values, setValue };
  }, [values, setValue]);
  return (
    <BetContext.Provider value={providerValue}>{children}</BetContext.Provider>
  );
};

export const useBetContext = () => {
  return useContext(BetContext);
};
