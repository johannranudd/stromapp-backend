// @ts-ignore
module.exports = (plugin: any) => {
  plugin.controllers.user.updateMe = async (ctx: any) => {
    if (!ctx.state.user || !ctx.state.user.id) {
      return (ctx.response.status = 401);
    }
    await strapi
      .query("plugin::users-permissions.user")
      .update({
        where: { id: ctx.state.user.id },
        data: ctx.request.body,
      })
      .then((res: any) => {
        ctx.response.status = 200;
      });
  };
  plugin.routes["content-api"].routes.push({
    method: "PUT",
    path: "/user/me",
    handler: "user.updateMe",
    config: {
      prefix: "",
      policies: [],
    },
  });
  return plugin;
};
