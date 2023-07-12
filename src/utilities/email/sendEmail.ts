const { EMAIL_SENDGRID_API_KEY } = process.env;
export const sendEmail = ({
  name,
  email,
  contactNumber,
  message,
}: {
  name: string;
  email: string;
  contactNumber: string;
  message: string;
}) => {
  const sendGridUrl = "https://api.sendgrid.com/v3/mail/send";

  return fetch(sendGridUrl, {
    method: "POST",
    body: JSON.stringify({
      personalizations: [
        {
          to: [
            {
              email: "lecreateurjewel@outlook.com",
            },
            {
              email: "ao356@live.com",
            },
          ],
        },
      ],
      from: {
        email: "ao356@live.com",
      },
      subject: "Message from Le Createur Contact form",
      content: [
        {
          type: "text/html",
          value:
            "<h1>Receive request:</h1><br>" +
            "<h2>Name: </h2>" +
            name +
            "<br>" +
            "<h2>Email: </h2>" +
            email +
            "<br>" +
            "<h2>Contact: </h2>" +
            contactNumber +
            "<br>" +
            "<h2>Message: </h2>" +
            message +
            "<br>",
        },
      ],
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${EMAIL_SENDGRID_API_KEY}`,
    },
  }).catch((e) => console.error(e));
};
