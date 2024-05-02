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
  setValue: (
    key: string,
    { value, americanOdd }: { value?: number; americanOdd?: number | null }
  ) => void;
  initValue: () => void;
};

const DEFAULT_CONTEXT: BetContextType = {
  values: {},
  setValue: () => {},
  initValue: () => {},
};

const BetContext = createContext<BetContextType>(DEFAULT_CONTEXT);

export const BetContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [values, setValues] = useState<Record<string, BetValue>>({});

  const setValue = useCallback(
    (
      key: string,
      { value, americanOdd }: { value?: number; americanOdd?: number | null }
    ) => {
      setValues((prev) => {
        const prevValue = prev[key];
        let newValue = prevValue?.value;
        let newAmericanOdd = prevValue?.americanOdd;
        let flag = false;
        if (prevValue?.value !== value && !!value) {
          newValue = value;
          flag = true;
        }
        if (prevValue?.americanOdd !== americanOdd && !!americanOdd) {
          newAmericanOdd = americanOdd;
          flag = true;
        }
        if (flag) {
          return {
            ...prev,
            [key]: {
              americanOdd: newAmericanOdd,
              lastUpdated: Date.now(),
              value: newValue,
            },
          };
        }
        return prev;
      });
    },
    []
  );

  const initValue = useCallback(() => {
    setValues({});
  }, []);

  const providerValue = useMemo(() => {
    return { values, setValue, initValue };
  }, [values, setValue, initValue]);
  return (
    <BetContext.Provider value={providerValue}>{children}</BetContext.Provider>
  );
};

export const useBetContext = () => {
  return useContext(BetContext);
};
