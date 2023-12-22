import { FormData } from "@/components/Contact";

export function sendEmail(data: FormData) {
  const apiEndpoint = '/api/email';

  return fetch(apiEndpoint, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((response) => {
      alert(response.message);
      return response;
    })
    .catch((err) => {
      alert(err);
      return err;
    });
}
