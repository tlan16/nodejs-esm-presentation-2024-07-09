import { z } from "zod";

export const fetchData = async (payload: Record<string, string>) => {
  const url = new URL("get", "https://postman-echo.com/");
  const responseSchema = z.object({
    "args": z.record(z.string()),
    "url": z.string().url(),
  });
  for (const [key, value] of Object.entries(payload)) {
    url.searchParams.append(key, value);
  }
  const response = await fetch(url.toString());
  const responseBody = await response.json();
  return responseSchema.parse(responseBody).args;
};
