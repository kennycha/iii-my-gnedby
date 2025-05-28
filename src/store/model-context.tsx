import {
  createContext,
  useContext,
  useEffect,
  useState,
  type PropsWithChildren,
} from "react";
import { initONNX, loadModel } from "../services/embed";

type ModelContextType = {
  model: ArrayBuffer | null;
};

const ModelContext = createContext<ModelContextType>({
  model: null,
});

// eslint-disable-next-line react-refresh/only-export-components
export const useModel = () => {
  return useContext(ModelContext);
};

export const ModelProvider = ({ children }: PropsWithChildren) => {
  const [model, setModel] = useState<ArrayBuffer | null>(null);

  useEffect(() => {
    const fetchModel = async () => {
      const isInitialized = await initONNX();
      if (!isInitialized) return;

      const model = await loadModel();
      setModel(model);
    };
    fetchModel();
  }, []);

  return (
    <ModelContext.Provider value={{ model }}>{children}</ModelContext.Provider>
  );
};
