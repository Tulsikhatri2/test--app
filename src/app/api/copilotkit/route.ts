import {
  CopilotRuntime,
  OpenAIAdapter,
  copilotRuntimeNextJSAppRouterEndpoint,
} from "@copilotkit/runtime";
import OpenAI from "openai";
import { NextRequest } from "next/server";

const openai = new OpenAI({ apiKey: "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" });
const serviceAdapter = new OpenAIAdapter({ openai });
const runtime = new CopilotRuntime();

export const POST = async (req: NextRequest) => {
  const { handleRequest } = copilotRuntimeNextJSAppRouterEndpoint({
    runtime,
    serviceAdapter,
    endpoint: "/api/copilotkit",
  });

  return handleRequest(req);
};

