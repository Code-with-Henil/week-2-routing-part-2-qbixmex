interface User {
  id: number;
  name: string;
}

export const getUser = (): Promise<User> => {
  return new Promise((_, reject) => {
    setTimeout(() => {
      // resolve({
      //   id: 1,
      //   name: 'John Doe',
      // });
      reject('Not Authenticated')
    }, 1000);
  });
}