/**
 * badge controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController("api::badge.badge");
// export default factories.createCoreController("api::badge.badge", {
//   async find(ctx) {
//     console.log("CONTEXT:", ctx);
//     const idOfUserSendingRequest = ctx.state.user.id;
//     const badges = await strapi.services["api::badge.badge"].find({
//       ...ctx.query,
//       //   user: ctx.state.user.id,
//     });
//     return badges.map((badge: any) => badge);
//   },
// });
