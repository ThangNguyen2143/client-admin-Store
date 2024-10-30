export const Server_URL = process.env.SERVER_DOMAIN;
export async function getItem({ endpoint }: { endpoint: string }) {
  try {
    const result = await fetch(endpoint, {
      cache: "no-store",
    });

    const body = await result.json();
    if (body.errors) {
      throw body.errors[0];
    }
    return body;
  } catch (error) {
    console.log(error);
    return undefined;
  }
}
export async function postItem({
  endpoint,
  data,
}: {
  endpoint: string;
  data?: BodyInit;
}) {
  try {
    const result = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: data,
    });

    const body = await result.json();
    if (body.errors) {
      throw body.errors[0];
    }
    return body;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
