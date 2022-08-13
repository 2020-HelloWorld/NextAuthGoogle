import NextAuth from 'next-auth';
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  providers: [
    GoogleProvider({
        clientId:"1011564412172-2epjtn8c0i17ep2oq2l5a9bulbdclco0.apps.googleusercontent.com",// process.env.GOOGLE_CLIENT_ID,
        clientSecret: "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",//process.env.GOOGLE_CLIENT_SECRET,
      authorizationUrl:
        'https://accounts.google.com/o/oauth2/v2/auth?prompt=consent&access_type=offline&response_type=code',
    }),
  ],
//   jwt: {
//     encryption: true,
//     secret:"next-auth"
//   },
  secret: "runtime-terror",
//   callbacks: {
//     async jwt(token, account) {
//         // console.log(account);
//       if (account?.accessToken) {
//         token.accessToken = account.accessToken;
//     } 
//       return token;
//     },
//     session:({session,token}) =>{
//         if(token){
//           session.user.id = token.id;
//         }
//         return session;
//       },
//     redirect: async (url, _baseUrl) => {
//       if (url === '/profile') {
//         return Promise.resolve('/');
//       }
//       return Promise.resolve('/');
//     },
//   },
});