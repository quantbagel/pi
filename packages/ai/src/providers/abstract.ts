import { openAIResponsesApi } from "../api/openai-responses.lazy.ts";
import { envApiKeyAuth } from "../auth/helpers.ts";
import { createProvider, type Provider } from "../models.ts";
import { ABSTRACT_MODELS } from "./abstract.models.ts";

export function abstractProvider(): Provider<"openai-responses"> {
	return createProvider({
		id: "abstract",
		name: "Abstract",
		baseUrl: "https://api.abstract.inc/v1",
		auth: { apiKey: envApiKeyAuth("Abstract API key", ["ABSTRACT_API_KEY"]) },
		models: Object.values(ABSTRACT_MODELS),
		api: openAIResponsesApi(),
	});
}
