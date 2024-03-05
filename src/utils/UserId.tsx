export let userId: number | null = null;

export const getUserId = (id: number) => {
  if (id) {
    userId = id;
  }
  return userId;
};