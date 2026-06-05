import axios from "axios";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

// const API_URL = process.env.NEXT_PUBLIC_API_URL;
// export async function getUsers() {
//   const response = await fetch(`${API_URL}/api/users`);

//   if (!response.ok) {
//     throw new Error("Failed to fetch users");
//   }

//   return response.json();
// }

// export async function createUser(name: string) {
//   const response = await fetch(
//     `${API_URL}/api/users`,
//     {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify({ name })
//     }
//   );

//   return response.json();
// }