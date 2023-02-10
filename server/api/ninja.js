export default defineEventHandler(async (event) => {
  //   const { name } = getQuery(event);

  //   const { age } = await readBody(event);

  const { data } = await $fetch(
    "https://api.currencyapi.com/v3/latest?apikey=CBjN8AHtRMxqJm8PphiMg4aOlylz2l4DmyrnEhnP"
  );

  return data;
});
