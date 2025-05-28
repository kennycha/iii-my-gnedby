import * as ort from "onnxruntime-web";

const MODEL_URL = "https://xqthuirzlhsygclcfuqf.supabase.co/storage/v1/object/public/gnedby-embed/model.onnx";
const WASM_URL = "https://cdn.jsdelivr.net/npm/onnxruntime-web@1.22.0/dist/";
const TARGET_SIZE = 1280;

export const initONNX = async () => {
  ort.env.wasm.wasmPaths = WASM_URL;
  ort.env.wasm.numThreads = 1;

  try {
    new ort.Tensor('float32', [1, 2, 3, 4], [2, 2]);
    console.log('ONNX Runtime initialized successfully');
    return true;
  } catch (error) {
    console.error('Failed to initialize ONNX Runtime:', error);
    return false;
  }
};

export const loadModel = async () => {
  const response = await fetch(MODEL_URL, {
    headers: {
      'Content-Type': 'application/wasm'
    }
  });
  const arrayBuffer = await response.arrayBuffer();
  return arrayBuffer;
};

export const generateImageEmbedding = async (imgElement: HTMLImageElement, model: ArrayBuffer) => {
  const session = await ort.InferenceSession.create(model, {
    executionProviders: ['wasm'],
    graphOptimizationLevel: 'basic',
    enableCpuMemArena: false,
    enableMemPattern: false
  }
  );

  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  if (!ctx) {
    throw new Error("Failed to get canvas context");
  }

  const inputSize = 224;
  canvas.width = inputSize;
  canvas.height = inputSize;

  ctx.drawImage(imgElement, 0, 0, inputSize, inputSize);

  const imageData = ctx.getImageData(0, 0, inputSize, inputSize);
  const data = imageData.data;

  const input = new Float32Array(1 * 3 * inputSize * inputSize);

  const mean = [0.485, 0.456, 0.406];
  const std = [0.229, 0.224, 0.225];

  for (let i = 0; i < inputSize * inputSize; i++) {
    const pixelIndex = i * 4;
    const r = data[pixelIndex] / 255.0;
    const g = data[pixelIndex + 1] / 255.0;
    const b = data[pixelIndex + 2] / 255.0;

    input[i] = (r - mean[0]) / std[0];
    input[i + inputSize * inputSize] = (g - mean[1]) / std[1];
    input[i + 2 * inputSize * inputSize] = (b - mean[2]) / std[2];
  }

  const inputTensor = new ort.Tensor('float32', input, [1, 3, inputSize, inputSize]);

  const inputName = session.inputNames[0];
  const feeds = { [inputName]: inputTensor };

  const results = await session.run(feeds);

  const outputName = session.outputNames[0];
  const outputTensor = results[outputName];
  const embedding = Array.from(outputTensor.data as unknown as number[]);

  if (embedding.length < TARGET_SIZE) {
    return [...embedding, ...Array(TARGET_SIZE - embedding.length).fill(0)];
  } else if (embedding.length > TARGET_SIZE) {
    return embedding.slice(0, TARGET_SIZE);
  }

  return embedding;
}