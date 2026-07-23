import SibApiV3Sdk from "sib-api-v3-sdk";

export const sendEmail = async (req) => {
    const { name, number, email } = await req.json();

    const client = SibApiV3Sdk.ApiClient.instance;
    client.authentications["api-key"].apiKey = process.env.BREVO_API_KEY;

    const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();
    try {
        await apiInstance.sendTransacEmail({
            sender: {
                name: "compayname",
                email: "verified@email.com"
            },
            to: [
                {
                    email: "your@gmail.com"
                },
            ],
            subject: "new client",
            htmlContent: `
        <h2>New Contact Form</h2>
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Message: ${message}</p>
      `,
        })
        return { success: true }
    } catch (err) {
        return { success: false, err }
    }
}