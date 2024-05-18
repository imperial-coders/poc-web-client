export const get = async ({ url }: { url: string }) => {
  try {
    const result = await fetch(url, {
      method: "GET",
    });
    return await result.json();
  } catch (err) {
    console.error(`${err}`);
  }
};
